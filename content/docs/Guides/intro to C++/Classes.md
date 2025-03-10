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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6KO7CIQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDG4cbhCAPMS%2FOYDQAHl5JC6DgDEhu1165RvUXJqP2dywIgEQ4wY0iY8kIqG1waf5ItYvvh6cyTD%2B5zHMaZ3r6SIdwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFss%2BHI0kNcBdN161CrcA%2FnDn3IDHKbKutRjftPeiou2ydIucRnga000LRCWYT%2B4uBOt0y5NtP0I%2Fb1nKro%2B3UcRP6MVbbQgIGXBahIehTr75AdW5MsiU4PTaF1HoB%2Bo%2F4OxvSBte2D2Tlz7797ZEgelsPYNccMf%2FNAvlKIjhDJo0x%2FPSOSb34h8EUH8hNwY3mUjz87TbrFvKf9wYcZIV1dEIDbkBbiwPPywUXIroPeYvFi266OkCgdnLFoMsd%2Bz1mZCaQmfp2Igqm2eq7RK%2FD2Xt1E4g8Ie17RxtAWBMTdAgJBkfrISmviXfI3Z1%2BWLM9yWdsvspNbl%2BC4UymS30Nj2eUEppu6vFKqahelWpcmTE0kCcg0tKRPqaZ9gblqZKlwhhleS2HUWYghn5nMV0Vkhl3vqHDGV0uI%2F9CDl9SYHs09wF%2FCndfMa%2BM5swQVurggBGB77sCODcTFPs%2FQf2zFfvRJtxn4KWMQ62JAODrhxKqvv2i83JJKTNZ8b9ck7auVZ0CwzD%2FsOYtOBPvgK14v2RWfHz5qSt0TCwTAg6pLK%2FU4PakMnhO3kbKo4dwKqkSFSg5wY9OLPsWotBCXwywP%2FFfkHdYeJCkbxMY4WcR04UlzaWgfmPu05zdPtIdmw47ch5TFRaEZu7qmIMIWLvb4GOqUBu9rrdxNAjD%2BtzvD4lCcCm2xE1FQPtbk90gHPxf7gQ4vMqbpUbjdZEaoyiHLS6rXym81D3%2Fq0HKZ1o4S6NsLS83ltKJ40Lz0TSrm%2BaitSoeU762fKn%2BhSm%2FH1nwux7FYuhjN%2F%2BhjawcrOdGgbdUSLDyErkv42qzIJuxlD2Pf2Z2hza9oT9zbM01nVPaRJW1hOgvdqiN43%2Fr6iZvbqZSExu9Z1sdBu&X-Amz-Signature=893c60db68275ebde2eb17ef3b2ca5c1489d97e3efae843d981a0d572dfe614d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
