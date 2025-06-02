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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNMCHKJN%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T132505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIGx09To0Y%2BeRLZ5vaZgQPTRRXfVZGAsEXN5snEvAzaKEAiEA8QuV82RBp9YXY3LMaSJl%2BLU2Gq5VCoPNAqNKrnRa6vkqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSZvUx7i8AxbW9R8ircAz2nqF1jRM%2FJA0tvZcrtueCuAaZfA4%2Bbxa644%2FqKTePs2mZt5E%2F9UCjVwTUv0KPIeb93NUZP3ePEXRsj29D9Pz4RPObLDeokw93w3r0ahzL3%2BLs4KODpRO7c2hyogD%2F8L3rzcU%2FmZPXP9%2FauAPwQo4k%2BdFxPup6ctBk9%2BG%2FscxV3l%2FLg5Nhi9S4ff5vjuoRJ8W6Tv1bA0Wf6URRs2uonAT%2BS0iG1UMmWyQ4lHHqlLbnTkpro3a%2B66OVrGnzJJP%2FPvGgpENM893LbW1gcx7VKAF8Jr2uvfSshpSUIKIwQZtvihH0CurFes92vhbZRgLrb2UMqzCvB6PC1DSgz2SIxdH2cgCJ4y7NLD%2FL4F%2BSUOVqkiBVn92F7sFf2tPK%2Fs13iPNsfIj7pvZUeGlFpQ70NiBum%2FQfsvpp6gshgRmdToWxX%2B%2BSaqsA85Afvy1tnQIMHv%2Bof5DIW69usxaIjPCRQ%2BOjh%2FzlFoBImcekipd5PGM16HiVOkLktGAH2wZLqUz0%2Bs2dUpxD09hXFZjUQVN2pZIQRw8DgGg%2FcVLvUWpAouXWyBQafFBrnucXKQQZxK5lhMjzhr4hBbXjVm4uZWiE9EruSmP2r34w44FfCH%2BB6x%2FMtID1pw92pAOBFXFniMJC09sEGOqUBPGquU%2F%2FKbITvHgeh8kYZ6yEvc9pDrmM5LO81Wi%2FeC6SMKmTr1XnXNpelpXnFFIqvEtvgXxlR4JoOLsfxjaSkXjTBGOWTuMvdAByEiQjfQJAyWhEp8oTfmooY3TbCAdlFpTumZq7%2B2X8A6tdATQQdcmltPgZB1KSq9bTZUTKXMwi6eyZTGZd1s1jPnBr%2BMTSpn7psavKjlYci%2BdQDuTXX%2B04XA2Mh&X-Amz-Signature=c76f88ee41a40594037c4d47655055c472ca628f82269f4e3958bca0675f9b00&X-Amz-SignedHeaders=host&x-id=GetObject)

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
