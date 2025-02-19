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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643J3674G%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCViuZykkv%2BiSnvVlNb%2FqxowjCLuzQa5nMpzrxYZIqcbAIgP4j0sC%2FkjZjhE4EVFqwKEpaH9%2FxQvaZBImOlChy8nuUqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOJ6vmE4cTjB1oRyircA1kdBo1EbCMevKUbqsTAWKEuQeBDjF1IoOVnTxAZ68grKPmBBqFl4KrSQVTAAIed2lA%2F7A9F5BknWVLM%2FYK536ZyTi25wOAluqBJDzZpm5ms%2BvLXxEuaSNPdkqE3%2F35yokRvZAKN7kzCW6S6u4D6zjIgKjQHITD7Y1pozOL6ks5AOWFnik%2FE2zNToU62bxzUH48pT0XBqeDsrwn8yYQFiYL%2BbVF8P7OMC85zQrfymJQC0DmXyNJZCvGNen8ilB88sdFj52Ytusqkb6Dj%2BdqxzCyLohcyCz8sJ6MBqT0V16wFLx1oYn3fEOVg%2BpG7%2FXhHWu%2Bw5hStV0brNJlndMH5GVMuOdXD3RENY2KbjkUM3BycTIoFZ5jr9AzDsre8ZI81VGTGrpm%2FGTQHzdOlYwjMZeBvZyumPJBelPK2R4Oig5UdBgoTQhGKJ5SyZ8OitpfUw3Z8ozx%2FVHY6CPvYvznhyHQ9%2FYDEyLhCmqzvp%2BNGC%2FOSK9ctOCnVlXUhZwl8MpjM5ocLM1bBit9BTRXORkOpmcsbzASfMoXfs7UTcCpONqma%2BNBWlsR8Jb1kc3UDnpKjKeX0qZ3qw4g5F1Wz0KFd5xff6jfOO%2B9UidOMDf4XOS07CRsw722hiYOlJStSMJ371r0GOqUBoi9h7YIbYDaL3etYfHVhlUDjQWHjbC3yOuP1G9wIu%2FewwHahZ6w3B2pXW%2Fc%2FAj8aTtQ6sO16c34I3AMhv23wKWTp9G0GKE51R4NShkKST3NHpbyscRsFZQ0ggwGUqAaGF%2F%2FjPI3vP4aMKzDIvLJeYPo12T35f88sulmLYyf7pPMXW5FPRA27Zu8BGGMF%2BxBIC8Nl8P8syvmWuN1eeXCWw7JKL8G5&X-Amz-Signature=7406a255df5ce7fe016ddc940626d1ef4eaa0db99e3ede291bdd4aa7cf281bb7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
