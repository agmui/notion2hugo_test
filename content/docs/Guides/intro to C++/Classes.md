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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYSXMEVX%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSkWUwSd5iyGlq58jAzvEMUjZwLxI4cWKes0eRwrH%2BYAiBogH3LhzgxsCGCiXKHFRFg%2Fd5ICEBUWqVEDICXomBPMCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML2HWkw9cebvRv4LVKtwDbvCsAljZCFwJqJi67VejiKEIQvsdbQ%2BgB4YDTiU0%2BiP5PNg4pY8dQRjdzMt46tFJDD7%2FPAm7bO%2BcpN%2Fqjh7qOZBEm1lBjarsqX%2BsLWp25PKmF6KQ3LOMcROJhvf303ja3F1YZL9VLo4zNeauutjhxvnRBBTp%2F8sa%2BLRg9Vrv4n9urDYa84Afn2ifu2Xvj4rzmzcfl1cIOE2Zya%2Fy2dfibhaqrSP3jaQm%2FULycC6BM4uRCnPpmu41zOjYSGxMeIqAeGj%2FxpMLhAX6%2BF8L16Wo1nPh1En4LmpcdWzwTFAQXYI3dnFNKW9C%2BOHlTlU2ANDVWKNspySM9T4Ut7ApX8UOygXSzElJN7eHaOpH%2Bx2bCwaoQnHJKpoYLObEFYytqnjXn5kAWA9VyfzkR4mF9ANv%2FGuK2zNkh6lpsW8PGKqda6cUzkgJZpdNeVQymEpFZjePpPj8c7JkBjKpCdCRNY4rFivn6SnipFZ%2FGC%2FV5cElKn8bxVUXb11lTG6RxqU4Dt43N%2F1%2FJ2jGhXySNpZXk6B%2FwJ%2Bd2eCz2V%2FsEnGHFaX0fnTrQjo%2Bl3uiSSpc4mf01URT%2F2JSn96G8rd2JYrWsk8W5KD7yl21r82YtPn1Asvw0HfJxJcvO1tH0kjoaG4w%2FNKT0QY6pgG35vABfVZ5hWEmhuRSwmFnuufuDH7zQv5Dcgd6cBJTCddGseydGWEsou5%2FmQVzRsy%2B5Jib0%2BXnqpRrRCnHTXNdst2bqk9w4%2Fhjovq%2FPeg9JDAs01tP19n2MxHMyQKIQqIsGC4YvtLfKg4Jek%2F4p5mnf9wMR%2B%2BuQYmg%2BBnIpnSsl53QRBFv2zzEXN%2B8LYC6Hgs3zZXwEreP4DLrqcMeRGLj02uSb2Ml&X-Amz-Signature=fb9da36c661c668cb08c70e59a440997f77aa421fdacd3d588634b0a29c72c67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
