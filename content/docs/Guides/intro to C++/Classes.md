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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZXY565E%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIF2TQPWgu5p9TKZq16I4oaHy0IIl%2FJC4dhYPDZFysrBqAiEAxrW7zcBLPnp1JpUKucrLmyM6SfN9EXF0vt9QUE2jXjcqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyT%2FD7DppsByv96qircA%2BqAeM%2B8iKefZn%2FLlUEtvXcT%2Bx7aBRfzeeeO%2FlweERrhWh7SU7cAhzSc4q9FsVBffpmGnfBVMKh8qi22gzGfdNtbcwqqNxWyBc7e4qbbp2njtcfMt1MXtaAilohDQIsUWNxdfYxAoe29uCfIXTwPo1pDsXQGMMgs4JYHytX1u2ku1V8jt%2B0pxiNXoVOkXQmPNO2NVkMggLD1dKSust6OPhLec7tGXESpLgdDXWFu%2FxoBVEOGaV%2BHRurZ4mViru094RajkdwEww5FNRP%2FTdjvl70ugF8G699hKSdXLo8TuxhzlnfkOHrN54q8mO8w3LW4%2F5tS22MUcbTz7AxcW4ZstuhZG%2BxrUXZrFjWL65M7KQX7E%2BDgejLIY9dNxowmLUMdpk5xJaS3pBl14U99VZ76hatOi%2B5NKPmFLPBr7xMZNVxyLHoXisf3HFGDno9BodjsWv8vnPRcExG%2BRY6FdkdscAHcwMz874VKuhp2QMewgVK9ACzyG%2FwXPaAZkHPjmQsjiKSIIFo98P05oC803D6bEDrWXjGnFbF53iWmyD17%2Fj9yZ4kNvTEAtcO6GsGE0KO%2ByiJ8TwYQqPMBpd%2BlfRCwG0HkTaTDdV7%2BDqYc17E8JKYleT21SRGe7fHUMyidMKzu378GOqUBOLocbREEaUGB9ijpXWhepmPZBa0XEMRxoUBJJaZrTgoJqMphRHmHPWpI19TAQVxY5Xp5UYTfmtwRernTBumcaqGmI2C4NcIfBXaFxr%2Bi6AoBogSXHLasjV2tppD%2F8csHj5BTaw52%2BUFXY4IfiilkYDnEOZDupSSNVBD0N%2BG6zlmt4ZNJqq10YR7v4CgJsbKnOxnARRUYG4nXWSxPRnr4%2F265R7vl&X-Amz-Signature=8052035aa7dadf48f18342555026ccd3c82a8a86acbf9c1a89b322248180f213&X-Amz-SignedHeaders=host&x-id=GetObject)

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
