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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC5KBQ4U%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFG%2BD4iz6m7UyJMf7qasoOT2GF5ddJiIHK65EU0Irqx1AiBtkBDKjO%2Fhnf%2FJHb6l8gm4y9PBg8zbC8kYOszm1BJMEyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9aidMcprxDTmSrWtKtwD0fRtJQPnDPKUFxdoiNo5yrymKS%2F9V455DZPj0t8cBuwI0otX0Wk3ydmdsUXxr3maMKnx3gyTDisKD%2BEk%2FziGpyqhdbifQ6DDgCCkSrg8r9t3qdfze1lNnPzFlvbHtsR9LLGKvcX8APt5X7HQorhM2pNk8GERDvQlIR1JeD3SFmGguhHoKr%2BdeWsg60PhpbBTE0nKcfAd2H8hYVL9BlxWqgMhLGNysH8ndJqWTorwUCw%2BfK%2BMOVcLDDVccgHSnBR5b06t3%2Bw%2FwsP8dZQN9dv0yD3uJkIyUyV%2F1yEEAJSZfEQ7%2BeBMDqDhIfKS05efo9JkDi5vwBCOCq65s77kDSOQiU2Yl%2BsJcAGbZBhwpBkiz1SrryianqHhBSiXo55fFjNIOSOHWiwzbm%2Bcy%2FGVbvD6ZPpE60HxPTOTBYM5XbwVhfaCeQzf1tMwTRWyh%2FpEt7j7hpTzoU46nsX8dm0GB0Z76cMX6mQrZggNeuzRir08ZAHa807js%2FmHJ1SKO5yJ%2BuOhAf8LMIq7dzSrGzbOG7C5PY90LqHlJ%2B0M2VtyrPdeOlk4qoCvB%2B4eyqUFXbJ9L%2FFZESFtbcn1RYMlqwsX70ZRGe0Ula%2Fze6MES%2B7f1o%2Bm7EgzdS8YLpxzWxfulk4wzNmWvgY6pgEuh4g45Y%2FPZX85mo6OmaX20wwPuVxP6%2FTWvGaUUZ3%2FCfqinjM9ZL3XItpIRl96lyfrITn9%2BgDFw06DCDVNPF11f4vpHz%2BEm%2BX170cxronVlKsHJzWyDuQguirZS7wD%2BUfqLJploytZ3S%2BgIIIfdvKU71tLvErEPjn1tdYBnUNoyQPcHEzLEtHXTHVt29ima%2Fdq%2FnU%2Fcwm%2FH5D%2FK%2F2Bl3gjWPmvckOi&X-Amz-Signature=36cf3290fe726c3863e21446f203154a53632191e6d307c15a2f3e057d8e58b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
