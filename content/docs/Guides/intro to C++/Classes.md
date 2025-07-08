---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Classes.md"
title: "Classes"
date: "2024-11-08T18:33:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 113
toc: false
icon: ""
---

## basic class template

```cpp
class Milk {
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {

    }
    ~Milk() {} // deconstructor
    void drink(int galOfPilk) {
        printf("drinking %dL of Milk\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};

int main(){
	Ilk i;
	i.drink(1);
	
	Ilk* i = new Milk();
	i->drink(1); // arrow syntax when i is a pointer
	i->~Milk();
}
```

<details>
      <summary>What is </summary>
       `~Milk()`is a [de-constructor](https://www.geeksforgeeks.org/destructors-c/#) (its basically like `free()` in c). Unlike Java or python, C++ is not garbage collected so when we make an object we have to also manually delete it. The computer does not magically make it go away when you are done with it.
  </details>

## [Inheritance](https://www.geeksforgeeks.org/inheritance-in-c/)

```cpp
class A{
	...
};

class B: public A{
	...
};
```

### Creating objects

```cpp
int main(){
	Person* p = new Person(1,2,3); // heap allocated
	Person p2(1,2,3);      // stack allocated
}
```

```cpp
class A{
public:
	A(){
		...
	}
};
int main(){
	A a; // Note: if your constructor does not take any arguments
}
```

> Note: you will learn what stack and heap are in CSSE132 but for now we generally use stack allocated in Robomasters

Why use stack over heap?:

This is what the `new` operator calls when ever it gets used.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSZVINWO%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTyurUYy5PwSG5jWNDE7sQIjrGbc7AD4zZL1JEldEioQIhAP4lYRDL51BvDY%2Fu6LWzUsKEPxKlCkWm26mvSO9kIWX9KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5CrUNmJfKgWAMb08q3AMfzUF3CBjgY9ne3SsIvC6TyxjoZnPQ6jXYCNWMW9lJ3xDe0NeYYiAl6i%2Btbd7oiTBSXbcvRxwJL%2Fsxyf7yfVKLKummcEYVFjr%2FsMuW2huO2XfBifznnLCU1yhatLBrMVcxiMkmP9%2FVZsVJ5XegAPatshCv6tle6r4QMFeILdE5IMkkRcJncps%2BwTF%2Bi7y5GaxkaIO2uvpQlDW6BtWc6Y%2BPRJbz03d7wLTO9AjRP8nc52SaRFgPubyyF%2B0j%2BEz1QCocJ%2B46SRdhcSBt1xqeZlIUmx4lFEf5sbbrI6PUIzfJigygeMaCTDU0X7%2B1LioyeTMbU3EwO1s5tfc%2FrNn%2FpavW8ZFmvhS31mkzaxoLr9IjpnomlLb6eF1EE%2BCZisZlFs0C5lt7XISjApa6CkoMxomuZhvGGdb2b71v8Pj%2FwbMSHAmrcF1AP1cJWmV9zXVtik33oo8pF5nmZkyoohnM3SrTbzhXs%2Fc4BNoCi2W%2BwlugmJssmVOgdesywokn3bNOXSv%2F%2FfrYqiJuXnDU83CdTqfK9tdba2UxrJKTerCfETUDWGngoHWqn6kemdnI4iCmeC5p0sFwFOVuFVMQoGSFUMtao0q2G5y5i%2FctI0Ix5U11bpjxZXmh4zLChvEV0jCCx7PDBjqkAbZhFnUADg6Ocbro2whO5zvc7oSZ7AXwCN4kQrpcvPYDWs%2F4qvG2uBWLHqAyDSFpog065oZOtXhrmfgX2WFYHQ6Krc4PZZ3PxVt3hzmPxPTD52cnzuoCIPJDCV53CMDfRYlHvSDT%2F2Wcbm4nqvRzk5CwErIgflABSFETNcmMxGiw6eKm1ckxSmKeYsPgQ0298qQnxcosliyUQIYKjfgy22%2B%2BvjA0&X-Amz-Signature=54997c15c7cdf3ff7f7922fc1acf8b6b9e8418411a43be5485c4d0bcdfa168eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Constructors

For constructors, there are 2 ways of doing it

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
		MyClass myClass;
	public:
		Person(int age, int height, int weight){
			this->age = age;
			this-> height = height;
			this->weight = weight;
			this->myClass(69);
		}
};
```

 _constructor initializer list:_

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
	public:
		Person(int age, int height, int weight):age(age),height(height),weight(weight), myClass(69)
		{
			...
		}
};
```

We generally use the second form because

## NOTE: YOU CANT CALL CONSTRUCTORS WHEN DECLARED!!!

All together

```cpp
#include <iostream>
#include <string>

using namespace std;

class Milk
{
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {
    }
    ~Milk() {}
    void drink(int galOfPilk) {
        printf("drinking %dL of PILK\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};
class Pilk : public Milk // inheritance
{
private:
    string cola;
    int numDrinks;
public:
    Pilk(string cola, int numDrinks, int milk)
        : cola(cola),
          numDrinks(numDrinks),
          Ilk(milk)
    {
        printf("pilk\n");
    }
    string getCola() {
        return cola;
    }
};

int main()
{
    Ilk *i = new Ilk(420);
    i->getMilk();
    Pilk p("coco cola", 420, 2);
    p.drink(1337);
    i->~Ilk();
}

```

## TODO: explain → arrow syntax

# Exercise:

make 2 classes:

- Car
	- string name
	- getName()
- Vehicle
	- int id
	- void drive() // prints "vroom"
