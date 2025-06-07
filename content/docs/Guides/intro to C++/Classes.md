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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN6CKAZX%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApju9qYjNL1MkSCNPjNzqNp9jpIm1o4k%2BVmR8Q%2FxkeYAiBUdsyDGKrvxBYsTp7Tis8%2F4mJn2LFF%2Ff6A0QztwIIRLSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMfDXa56Gn2nu05tykKtwDwTB1ip9wzbQsYB%2F5QlXHhB4%2Frv2%2F0S430hX3K5iqdtP2b9TPF06FSx0bb7r%2Bo%2BZsQN5kfW%2BFr58Oa%2BkpVG%2BsP56JWkeNg7zbOIS1BngR0m1NukOIvmQLJ1GkTHZmdLsj%2FQOxO2NlQtX79f6IIOwmIURtFpXUUQMRTNBmjFr7iBsJyXT7%2Fy0tN7yrE1jgNBdUqlQUEq%2Bo%2Be3m5xyLEbTFrqF61lpJA096ufvI1VHgTZz8pLlM3tKob07P0wo4JoR6AuXS77%2BWypXRPTwCaEHOvjCtDQUS6hYD%2FKN1r1tctdeAxRqTwfKHo46gKWAcz8BdJMkZwHprfdcu%2BRhqM6EjMOAZ40%2B4CWA5M3WZPPghLXpyjItIxmA0mi391eVnwtfZem1WMF%2FNudcQTltC4uTRhX8sv1bg9%2FhFPbbNptePDFfKq5V6BVdEZl2kQ%2F%2BYG7er7vjeTFf5347bsGxkt%2FfBND6x75CFFodoiibDubT%2FToSGrC9lgrXylxf2mEW7ZqWi3MP4n7adRfEEYO1KGbNWViC8snYt3W%2Bk%2FOmQqA46KX9CjX54K3XopbEJDXJ85L9SmxLDnfl0yNCcUQzG%2FYUV%2FKJw8POaZaxZM7dU70BgOtMDMLNXVlTAKveFHEEw%2BoCRwgY6pgFVuLxZjHf31G%2FLBXes8hVDNgIoR1XkrHD48pepMfHB3Iag%2FayqHXr4ygvSivQyQX%2BPB39TU74VCNABWtScOUlGTe44Kj%2FFia0K%2BeXKXEbdO7pZMii1ymG%2FdupjkWCUkX6CQrnWxejTmilneErCFSXNRtmNSbUmWrki8P4IbnePU8uG%2BhhRG%2BGjBZu85MwChMOqPnpyGRnOIYnEw5iYuv%2BoHu4hOnou&X-Amz-Signature=cb26d94c195322d70121ed0726c374eebe107fe3c84c902c9f12a0846cdced39&X-Amz-SignedHeaders=host&x-id=GetObject)

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
