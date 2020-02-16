import sys

def main():
    print("debug")
    print(sys.argv[1] + "\n" + sys.argv[2])
    
    sys.stdout.flush()

if __name__ == "__main__":
    main()