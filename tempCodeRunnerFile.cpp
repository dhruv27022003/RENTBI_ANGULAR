//RAM
#include <bits/stdc++.h>
#define ll long long
#define pp push_back
#define vv vector<int>
using namespace std;

class heap{
    public:
    int arr[100];
    int size;

    heap(){
        arr[0]=-1;
        size = 0;
    }

    void insert(int val){

       size= size+1;
       int index = size;
       arr[index] = val;

       while(index>1){

          int p = index/2;

          if(arr[p]<arr[index]){
              swap(arr[p],arr[index]);
              index=p;
          }
         else{
             return;
         }

       } 


    }

     void del(){

           int i = size;
           size=size-1;
           arr[1]=arr[size+1];
             i =1;
           while(size>1){
              
              int l = i;
              int left = 2*i;
              int right =2*i+1;

              if(left<=size && arr[l]<arr[left]){
                  l=left;
              }
   

              if(right<=size && arr[l]<arr[right]){
                  l=right;
              }

             if(l!=i){
                 swap(arr[i],arr[l]);
                  i =l;
             }
              else{
                  return;
              }
           }





     }


     void so (){
         
         int s = size;
         cout<<s<<" "<<endl;
         while(s>1){
               
               swap(arr[1],arr[s]);
            //    for(int i =(s-1)/2;i>0;i--){
               heapify(arr,s-1,1);
            //    }
               s--;

         }




     }

void heapify(int a[], int n ,int i ){

          int l = i;
              int left = 2*i;
              int right =2*i+1;

              if(left<=n && a[l]<a[left]){
                  l=left;
              }
   

              if(right<=n && a[l]<a[right]){
                  l=right;
              }

             if(l!=i){
                 swap(a[i],a[l]);
                  i =l;
                  heapify(a,n,i);
             }


     }

      
      void print(){
          for(int i=1;i<=size;i++){
              cout<<arr[i]<<" ";
          }
      }

};
// void heapify(int a[], int n ,int i ){

//           int l = i;
//               int left = 2*i;
//               int right =2*i+1;

//               if(left<=n && a[l]<a[left]){
//                   l=left;
//               }
   

//               if(right<=n && a[l]<a[right]){
//                   l=right;
//               }

//              if(l!=i){
//                  swap(a[i],a[l]);
//                   i =l;
//                   heapify(a,n,i);
//              }


//      }

    int main(){
    
    heap h;
    // h.insert(40);
    // h.insert(20);
    // h.insert(30);
    // h.insert(50);
    // h.insert(55);
    // h.insert(66);
    // cout<<"before deletion"<<endl;
    // h.print();
    //  cout<<"after deletion"<<endl;
    //  h.del();
    //  h.print();
    //  cout<<endl;
    // int a[6]={-1,20,39,49,30,40};
    // int n = 6;
    //  for(int  i=n/2;i>0;i--){
    //      heapify(a,n,i);
    //  }
    //     for(int  i=1;i<n;i++){
    //      cout<<a[i]<<" ";
    //  }
     heap cc;
    cc.insert(70);
    cc.insert(60);
    cc.insert(55);
    cc.insert(45);
    cc.insert(50);


     cc.print();
     cout<<"after sort "<<endl;

     cc.so();
     cc.print();
    return 0;
    }

     