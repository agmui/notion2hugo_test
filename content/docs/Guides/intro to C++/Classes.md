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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2NZTBN5%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICQab2fBQWPhMDlp25nqgKIqPGoqLHWs9Hfowiam%2BHhfAiEA5fQ9wbwok1lUj3H08RmHTTZsJpOdX0hAi9lHsadAjr0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDCaiuG0Fd4o4lFTs1ircA6zXjVCDQB66YjsJOULMNbQ%2BKhopsRLm6yO7jWLSgBPC0EaR5FKwxNjLwpwZrAGCTVyFYu8W4meVNK4BnWLeMmpCTyAlM0P5fq5G4F9esPnbARkrugsEMSQ%2F9Xe12iJVAVhM8a3n4QU%2FTMt5Exb24KChaHdkvcuOrHzOnMd628Lx4teLuMSDHCcm2k994Iuy6DjlZ774IQ2Gw6heXlIRoIrplAS6Ae0FZZW1S4HY%2BlP1SlplkWx2BQj%2BQv0I9wMl7636e9qq%2BJLy%2BtsOUnDBBMRFhGDycG49cF%2BDDgYlDU%2BUawxgeOD5YS9KxZrYpKjexwp6HyBgFLi2NfW2Eo01%2FumN7TBq69uoZZfTp7TC7w8kVHahsxWtNH81C5GGWFi8%2BJIoXE7%2FHYhAhOzVNmK0lwszXjdppeuvNtoKmsG5ek94lWiZsyJo%2FXAdNAvHoaJOQAwk5rHi7HvAwVJ1P7Am1NhiBvj87BCrhAkovESjzYhdEjYq%2Fa6vBXSUcbEdZh7Tx8RkEq28NrnEw1ue6Ouy5VmdCNHvSGpP7oKTVKunRa3csXXfLaNMY7fBTescIpergWdMmSludFKAKrG2sbcPCY91gaa8SAigEM1YQ%2FqUm%2FdQCqZfkXJ%2FbUCv7WDFMK%2Bx2MMGOqUBZWGuBlvgixNR5H%2BlqVTzbLiMo7HGH2%2FvGEoc9R%2BJTOBNp0o1oKphHL88aL%2Bkkbef7ypeGxARZYR2fpMZ65MTZMKeLkVl0ihRbLZoy%2BICYw2IWwGutRLCxeTkShadNb57sa5I1pcEzNPyJov6148eoLM%2FD28rrVf7axhWeW379mGeAk8lZOjzcvjX8rpaMcNw0pFxaADnDhM%2FlDuYobzxloQZNXC3&X-Amz-Signature=72d0fcb57aa9aa26f2b028712c67bf55b2c35a22f4e1b77e396bf84044c283f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
