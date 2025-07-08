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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWRHVFK6%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIDI5T4OcCpgD2x0Gz51sjYhSdZATZov9Av72Owi%2Bl%2BXsAiEApowII442T98oZIN1U8n03twt8Ge4Kp7ejff%2BlE4gxl0qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrcATb%2FCBRKiDoOZSrcA%2Feubth6U5lQTh6G1yACXMNB3FMgeBxP5Tx7r24nMZeD3837c1eCFgEIEuiSRje5GBfhSVh3FS1AYfkDMfmls%2Bb0aQOY457eeLOw2tiuTmI9d%2FJ6zTuEij92jAZyGQ%2FJk2nauXp6LHyNOCDZhxiUbiVLr9Rjab%2BVFVOSmcIfXqAYvEWk3KnOhCTaXyR7WuQ4aDJmgBsWVLGplWOslvnuGnH1MAYSPEqtiCtbLGOpKpjRn9QQfvQqGaV%2F0cET1rqo6i9TQbu4DcUgiArKan7%2Bda8fWRwkUkDO7tBbXxT3MVq8os0qucMkUFIRBr%2FIQBsvVzK5CQZG1l2eGAg8Pjwr6pdNBJXf%2Fw60LkbIiEXcuiRuocJ7fSICCjFSeBm2A7nyuyo3yobz4J%2B747MQbs5kfTvIZsm2XBHTdQhk551RUIgcLELo%2FwihiZZ1PtnpzU0opC3OxsOx%2BLmTOb8KPRvUueTLYY3I76hs6A2ukVRbuSJQlTIEAne8ZyQJMAXc27TLQXQ7gfai0PaunJlct78NdEkXzePQ%2BaX63%2FckM1PSgR1s%2FNVIgpsynldkpUJ78moQVgZLVzay5ROY5bHsb9WNUjcq0AZNd2B0b9%2FVGveIC5gw1%2Bs96l%2BV3IC07yXeMKKEssMGOqUBNsr4HXHRJ8G6p1LASGq3h5TpYxblWV3wgSzeQ5s%2FAmp1whgZ4XCrdaqfpnru6z6Y7FGamHLqPJWAq%2FL%2FSgVEihohuFi8tf3wsTQFHTkZrTAgAqj%2FO2I1IIgDWzuD01jbUWgDHosFllt%2B%2Bdvs0J4O2bO%2FGVGaVeqyTK3%2BXIdJYu6quOqXD0PBQKXBdVzD14FPBwR6AL6%2F7qYaPP3lnC5Y8MGAT38h&X-Amz-Signature=aebc0338ab34d7e0e2c16974d0a3b4ae456c303de4a16df7dcced4b4a9e9d896&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
