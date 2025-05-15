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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZYHY7F3%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCOzLL5M6XEAKTmHZvq%2FnYIqxB3AZcUSZhgs1F1WRIaCAIgcMUn1p9eeNolDehrzM5H2%2FYMuqWHfNM%2B8F%2BU0svqEwAq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDJ%2B%2BqZPWBR9%2Bp4IH7SrcA74AReZNkrMBV6neHDiOy7%2BYqMJRwxDe%2F%2FCFW7%2BT5%2FRY%2FvlIn2xvxocodB1Ba3%2BCa8UJyNp7dQp425M6YhMSLZtyQmTFMOvvKnnshn3ulq3PAR1u4rsd7g1WBGZjb8d4lxWk1Rm6uRJZqfJ%2B%2FoQgkWNoGafJuSMtEPMfU0DcyTABr2OM3BkwH8yvu2dKAKklPv2gNmincdFzcb7My3gRovEKQv9KGAwEY3JQS0ncjeMZt0oT36y4EERT%2FJE7bHn0tWlTniYe1b2wDk8U6WtBUDd5v6CExzvktc15hxdhpHPslfwbJyCcmMUcdAsBjDgabG7%2FMly1OXyLxRdb0BEAY4VJ4qRuQ9qzm5vz3ArU9kxe%2FInuPvT8DBZAnr7Y4QwCVkp6n3Pal3f7rmp51HDKD7ASEr7QOYdFqST7ClMSndOxMnECDhsnVmtNMvJ1xQwK%2FCbj6qxeZPgqwvabK6gVU1oiSF6zHknJWZE3IcUsdVHOKO%2ByNRnDR27Qm5Kepo98ySMYde%2FUFN87%2BpE7wPrmUPUq0W4PKu3GdJeLHeufBLdDaaA9ENKeDh0n%2FMqdQBFyYccjIVPrk4AJaQCGdK%2FE9adJ535ADPL%2BuxLW7S2Q4FlqX2IiYCWpy11BHDSPMMrimcEGOqUBcrgHtWCCiAJ608TccIuQu%2FDOtMRtR%2FuuV6sgXHerkrzm0ToXJMtGGuWHgeiI64FrYJftH15xfw24%2FDyNqfEJv%2BrmE0SUSYacp81yl3z4Skzf%2B3IP0SZ8RyX9YHBvQ%2FlDEjeePItUKHPq97k84sQuTPB3LQ9SUe9O6qNkWecK7jiWdMWT8RqcY2mS0ahjqfTBVWfj6ZZ8UyAqyQXESoSMFCjKJ0w1&X-Amz-Signature=835767f218262d0cb177b969a96cd2bf13aea0ca3eaa61f82a5d0e648490eb86&X-Amz-SignedHeaders=host&x-id=GetObject)

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
