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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLSYRZ2W%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T021826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWKrrwUohEdHrWl2AoURK7vC%2F2jfCAUFifohpzpffszAiEAl2lG9IeVwd%2B9qgRcCbiQWg2XgaNYDGgm5fVx1L7U3WQq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDAO%2FStgdvqE0FpoTAircA2aczItpKd3l0tuLBC2n2hl6VA%2FJB7C%2F7%2Fgr%2FtucDS7z7fbDuH49mNU8BEGJdIkHgDZPITmGCNcW1drJ5e1%2BNeDoLYSq6XV6srSe6Tb20cG5M45QthtXaYoFsaUTCos2uvsLmTgEcf%2BE2VGpHidf%2F07Stiy61ff%2B4vL%2FJFjkdxMWZGrOoWdFx61LPzkzr0owS05cD1G7XCxQCoJIasPTzayTSzI1kENAeOgRsAmkTaYNkZ6GwX4gHhQHbzEjkYifVYG8vw%2BVxakVBDLSXoq9SrbpXUs%2Fc8WBUqAKlXmCYJk4lwT4FHZmvviy%2BP250g%2BJ3CGSGMFjBb8cKV9sCAquDKarSewWwUJYigN7LV9BuJHZT3IDNBwiul1anvYwijH%2FFQleA90P2IB5Ksac31n1osVVDSJlJTDclBmDzFz31d0G8oueHmoNI%2B4RApjvSEc%2FAWzO9PiDi0bzP3Cj%2BQjTKycJ3OGwnzfQsyDXoldudWEV5bbXunsrIkWz5SpZFMK6XD6BAAumyXtGSKXywHcdh25Sco1QA8dGLbqBlsuc7ruWIhN8tp%2BDEm7f4%2F67kIC%2BeAiEME%2FJZ8zPhQ42JxGmHxSEfRs7D7lV827v6FIQcKhWIkLcBu7KYNTLCv2cMNLZhsAGOqUBb0myTNOhRbEErrQdwn2NUeJoqyiFoiV5nCDEfPIZK1Lu6YKv%2FRRC4tJ1VWDvU92ph%2BjOvxfXJKAgg82uc7jMxTT%2BVH4ECdYK1E4snBm%2Bbsj4jI3QEoZGIDM%2F%2BtrS76ACes2vtTU4a5FKnGtz3AWXI9jacJZc2fBiW%2BKGkObfqiaNlRRhCFB0fJd%2BCNY8KIe0vVo8Z%2B0Psz%2F6euaKw%2BoR2U0rpeoS&X-Amz-Signature=5efdc83b3d8572a9847bdcc9fd96ae90e5878cf7611bd312f254bb0321a0b855&X-Amz-SignedHeaders=host&x-id=GetObject)

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
