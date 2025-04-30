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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YQAT3V4%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIAxLeBBzR%2BjQgZV8jBxMRhZGRghhPb0zmzQKu1wvkCbFAiABQJ3OfZ4vGK3%2F65wOGhMhQN9XDGUwCv%2FdTN0%2BPJ54CyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMty%2Bw%2F78VP08OjvipKtwDMRPWJWphwhu5hWJl3BnVRkb8lXq8ecxEa6kDTZ7%2F9oFocErHRk3ud8DBplWSrkfRquVfQuJ%2BCBicGCG24pOVbThtbYUUf2CHehQy2T8XXH4aAeewoOHlYKepe17R5eD7jSIaV3%2B3Y1i%2F5zy851BlK19EIP7buBErGcBrQnhRsPhUagRU5Aau%2FwBKA1AAGowMHMU38%2BHTFMRkob69dZ9UMFv7fPrTUaiNBIdwkQkH5Zh5ECcI1EAteqUbZchCNfT3pJ7ovIWl2VnVXg1xDkh5l%2FrF6%2BW6qGOjer40tJ2FC7F8ELTjMIIWp7AYWXXgLuWcAaFnyhmNFAVc%2FXkXS7vYXz5Q7cPsd9xC7mnqCpsebwiyU2GXpLyAktI3%2Bk%2FzJW7otvOvP1btNkpRnbqK%2BcNpokYSV6Wj%2FlqUEhqxwac0ncK2zJmeiV00PT4%2BqttoTLmewbX9b23TODLFi66RxRJLR6AxbrwYJyNOXQTN98J2laB0mGNtn1NmeqVv4Usy6%2BJdmHF8YEe9LTYrOfRMHHICGWZpH%2BGCj0GcHKBul6Tv2Y012RNqRtQLey%2Bs2R%2FsrdQxOBzkNuZCYdhw52mOIKKGdapraNfJILWICDsrKedeyxsAus3bhElh6f%2FtbjkwxZDKwAY6pgEmGRxjuns7yQhEtfRQ7lF%2FnshnyQToqvI9fDM9SOIcWNCHhX64NmM5kLM3SW%2FAOwsy8HLZKj%2BU2stb%2FK3hkOhqTOrcJEHB%2BwdP0gFIBaJz0dtaVXHxKqeawIdIlV91MPvBYMcpBYLfJvU920UFCT46JYbGblzIrL9teNEA5pSRQuFYp3RZQVbxJB47T8c3snHGPUeQ2Kvv%2BPTeytoK8EJKFmPDQSFU&X-Amz-Signature=460eebede474469bc763695a8424fcc5587e90033464cbce1ffc919eeb2beb81&X-Amz-SignedHeaders=host&x-id=GetObject)

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
