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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDVCFZGA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIEyXrF14uk3DmbXH0mlFkU2Q5xl3wh%2B7aGLhxKdRsvmwAiAsiXI9gUu%2Bff1UMaSJOif5n6WeQ%2F4EG6DQLGivBvm5YCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM1Z5FOADun0o0p1W7KtwDCq0lszkjGSE9uJoapPKmrJNqQ2bTEiknLhyKKYGY2sCWOfD%2FJ8ZFunSAha3SnEgYCq7ldidicw441C0wRz3T2GqMr6Ryq3ISb%2BEULpAciUd7hLe4qJgKVkAVYNdSVCtr8bIQDnvY0b5EtNINhY5iiTJ%2FgLWWQeqg%2FZhW%2BUp9vBb5HgrTkN%2BYSw0D1WFrvwqMOW1qkez%2Bmxt6ZZGNdbArOiWmp3iydX9LEeMNo4RM6cRLkk1K4eC7DjRX61DJmz0cjbHLwU27GMy2S78Pwr5c7GcjqXPp5%2BKR7Q0zM7x%2B0fUl7qUymMRO1S%2BB8gyEFJOc0EVaiE4c4OThGLEbiftRmeT%2BEejcJuDJG5bdZpn4nlelR%2F2hgew28MFfm4UWCZAGxKiEgRwjLbmw2AjMs0dixUJsujYKifhbUGizVuGpwLzNW0KNeLmobPJ36FRujWgru%2B2ME5PzCkUSrUfe3YYTWvLqjToj6L8qnfzaTLDi%2BDhxRQtNodcdAB%2BVuYeyLP771QrdPUPOUDO8ocRrFfnDR%2BVc4Wq7u%2FQod%2FS83WxKVgh3zictmIIloj%2FdSXOGjZ8wBX2ilAeIIkL7GfVNPsB93G%2Fq8Nm3FEM%2Bn8rfUtHb4IKns8GKSeIhorvJJMQw08%2BkwwY6pgEzVDgw6SpW02fE1cw1spaAt%2BW9%2BhucXil2UiVhuisbVRSy1kWeLiVFtut1SrreA3eWmY1Km9V8FWMpcym2H%2BsS5duIpscnkpDcMR2vkNRqPjRENKQGsAkl8gN0KQGGlzvapFP3SUr1q3kQ71nrvZJMttOAhhpcB1ObjQQIin3dTuIwmh%2BL8QeTUY6YQE8%2Bq7aQvO9N3urYYWngHbElLjdDbyoNBsrn&X-Amz-Signature=8cd348cf4b10869bb947a573affc9755ec8a8c8894504c4dce99d45227dac1b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
