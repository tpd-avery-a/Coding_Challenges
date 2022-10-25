public class Challenge_1{
    public static void main(String[] args){

        int[] list = {45,78,4,7,5,3,6};
        int K = 10;

        Challenge(list, K);
    }

    public static void Challenge(int[] list,int num){
        for(int i =0 ; i < list.length; i++){
            for(int j=0; j < list.length; j++){
            
                if(list[j] + list[i] == num){
                    System.out.println(list[j] + " " + list[i] + " is equal to num");
                }
            }
        }
    }
}