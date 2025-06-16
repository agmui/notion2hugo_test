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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUWD5I6H%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCdexAUa4AG7lMeYsCo%2B%2B4YEViVnsdhPPuVXSvNs7XJngIhAOZ2RVldE0R198zFhWNYFqRqp3RSTOvQpIC8MGRigxd0Kv8DCFwQABoMNjM3NDIzMTgzODA1IgzdVQVGoFlyce%2FhPVMq3APL%2FfSNXd36TvHjOnHwkIhJ9lqqRprS3%2B0b%2BrRCGvSN7hdgiNLDNfp8eJuz%2BMdZt0RExnzqcuHIMc%2B0Pzo9bO5rnHs3q8tJD%2FpF0cnFvlC9mqgUyDDgujL%2BD58PTuTMPHZWiBAxTe6ykEXf%2Frncv%2BAKHc1yLsyLasBpTNNloIRt%2B4noR8glKrOiFqNQg72H%2FqUSm90M%2FkYQ5ekIArgyDziiasMS%2FadTLUS7nwmcWIA9HjL1Hk2nOml8c1vi%2B6s%2FtwNxUqQMK%2Fta7Uue0iABgxMLaxS6awiShRJ1k32QjKEpCduW8PwtdAicNmeTipfVg4qziX2U3dRu1jTVV%2FQACquDvJdIAY2CkYvivSSl4w3%2BUI33jqmIYEp6vRHJvw%2BlHSS1v%2BJDHWQ2zIIcN2X7XmcBI3Wj0Gg4TYseU%2Bby0hMuxnz5%2BtWj%2FlM2C7SeJI9xv%2F8445zhEozSr2d7Fn95hTxrOG4ktTk5ylivX7QOzIEbIA%2F5QibXR%2FnoYq6CG42MvZXP0khC%2BYu%2FfvdYsSuJIOquL0UJitw0BJoCj7S77uMbUcVAzix1utTxD4xMKcojtgyj96i1%2BNx%2Bv%2BmaQHvlAQihuO7UnTIJ2KlICSopC3wvkCMoXEX7gx8mD26KoDCN5L%2FCBjqkAb2ICy6jY6LELnzCCtshMnptT4Ho4UfIxVLMkMQpYdz8R4jx00CF%2B5u%2FldhNBITsqyGyJmuDBYDca8eew5qT1ysPDcESUnul0CAH9EI2Xoc6aEE3TsXbFTvvwvzDknnHKfi%2BOxA9SlV%2BKfeKUdtnwDxkELshtfWE9Jb7XyU3LD%2FVHLrYOAohJhVfYBovT8Nk3aCaiMg27Em2B9LRpbyTHxbBs25m&X-Amz-Signature=1b3ef1f5d505a77ec3bdeb6b112c83dd9ec97180c3583b11b3a244cfac89c8a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
