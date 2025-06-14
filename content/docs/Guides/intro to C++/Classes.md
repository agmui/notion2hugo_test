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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOLIXLQU%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDvvcfyEP6SdihBYEjd8lF4x3g9ySJDRc8ri3b8Rw1jTQIgMkhp1QjvBhzazmA9gpt6Z3unUYZPCswaCO2JE2HZBRUq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIRXnMeDw8D7Jaa%2FzyrcA0h4Y4dGx47vrLZUa5o9J6thimJhSt%2F93eSxRkZrCGuSPJqYEI79jYD4awmAOmGTwNxMOsCZt1R2xguJvW%2FZAySLI0pwlSP99CuzJqDwoL4YIM%2FrRLxYkzVflayN6%2FnNUmwTpJnlvj0fGeEDuOFakNwI1DxYxvXKjlFkv4QXkYOVMkNohF%2FfzWcORwzkUJwvt6GLbR4f%2BmxuW5x4bXTu64wdyPeywB3umA%2BxRUCTHdORVplZkz48kcICSnKIcFLU2YDirxEsPaP4Rh80D4Wlm6IuXr8BSZQoGgX9gBX2pA88MyE%2BU31e6gA%2B%2F79sOApCM86MGkYa3AuqFqIoMkl%2FBmH5q7NernbKT8os7ug3dXNZDWYA%2FFjnrN%2FNGpFIbT3LcXkzBawKblh9VB4rtB1VW6wmj0gjYq9Yovb5tP2WJl3LgpPIs1D8cTxQVmRfp4fT7kqkMX4PUlQWwX15%2Fv7QwfjMuFEx1aj04b%2BIBJ9UX9WXV%2F3UQri2GkbgBF%2BwgS3vLR6a5yLmPo2QboD2I9eyL9lnZuXBIOU1ltqpCvekl11iayKBCCOjne123Es1SH1%2Bk3dFpPgS2gMmbPcQwbt5%2BN8rUqgr0Q00J1bJnveqQR4ruXcCNsiimet2zjcCML7ss8IGOqUBHz55e8fH2y%2BT83fhSDle451pZvIEe%2BAq8SblRRFa0yxYY%2F%2BUUt0v70IP3GiSSn5cu0t0zPirZtvQUEsY27AipPAnHJ3K8l3FZfcyjPdcNES4ALEVY0VHFzVVYBsJ6yP6%2B3Pe3KRGn45wf7Ej6Qbd1VGHfEvJjrKYWfdLl1bWwbfvifYNbkOpIlCDIUO9P4DmMgV7MZ68HZbQTByH0JYt84OY%2BsoQ&X-Amz-Signature=38be7a2f002013b33a1b6a51f57ba4243ece981b5540e3e7033c8c29f12e3098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
