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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTKOHDFX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrSiOPm7JNgnV57MDVj%2FGdsRfAW2qvfFPRtRR5PIF0ZQIhAJLR7UFar2ASZMkE0ZpAuHIC9KahVUIywn00tu%2By%2B5BUKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYmwVyfgTcgVbae0cq3AOPdYP2z%2F1t4k3bJf2lgXul6%2BvXu859Flwt7drg6Av9kf381CRDMD3D6OCFPFR0eUcU%2FlqwgQD3%2FYGES1Z%2B5V%2BskLKhCW%2F11B6LsCQtC3qa%2Bpk2yEIhjn0ppk6Hp0mhzu0h7JCIngZUoV9fM%2BO%2Fpjy2i9hQ6pYmyVLic71%2Fb%2BpJl%2FsB00UnUzr1%2BABoqUUSe4n0zw39NOu1sB6DAIb2KF9UWMAIM133jpXXE1AvqXJiXjAmp92tEX05ONkGJbRwre7zATyKAtZJQcTXEbg9UICY4u9%2FycRY%2FxSGwyfYS3ega96Um2HqUYM7royCcNff8EBt2J2T2JYoCqJ5YeHEOZ7Wc%2BB%2BzmJLRWTAAO%2B%2B%2BbE1NY68Fvc4zysTgyEpMgsTISOYPMY96g4tizfb%2BaSVorZGj8%2BYFD1FsgLVVWIUyEFQy%2Fwt%2BMQFgL8%2F9uqPydrJuRJa1%2BJxEBTCsCkBKSOyr%2FU86VD4b75Nvcw701IVRB%2FT2rVyEROH4Tf%2FQKW4d7Z0TKoeaXZreieNZbj%2BPQqUlvbF0aO6Jh%2FaVgSM5nFDUbF%2F8h621QGwyhm%2FqNJBvKRe%2FNmcSeeWeBUU2YcuR8utp%2BkwstWWwsiHU5vuv0xIaCwS8KAPVcdo%2F5Z%2FTGApdTDrsbPEBjqkARmdMwaMa50PWI9W59R4CVPo%2F2NLpvByKLOf5wL5kXgpgee1dkFmuCNqHFQgrUuUUWzqy3pV3bSr5LTo7JkQ0xuA5B9euyrcp2pNd%2BQCL1U5lATJYdDwRemiKa0tTGdSBa7mPJEKQlwO%2FMN%2BV5%2FQFl54YKKIcE9sMbuf5mRhIsYKKz1ebiQUekdFR7yjxuItAMtjfYANs2Wm2m4SLnURssAnDiu2&X-Amz-Signature=c54d64ead6626deef242673086045e51f962b8a360c2715244511825202fee4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
