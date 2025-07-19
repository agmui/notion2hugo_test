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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QSC22YX%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzVlv0FN%2BJv5GPXihnCEysqPVrK60VHWz6UrPwFNv%2FTAiEAoTaivKsd6LZbpGTZkWLLHdaO1O1gcjkxZqN7RlIeqLQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwh46VRECVMQZ5EbCrcA5YHJ8k3M6q7AXPxN%2F9s0LDifb7TnqEnmHGFgcvEieu2heKj9%2B%2B3satFnR7eCVIp6mHaI29aSxExqW9ZYLtbGLQTC5bk5Y%2FhlJuqbxSGqhrN43yEZi1fG79aOaAfZkwFVlr646fuKBnhNxExnf50q2h8hm6plXABeXvUMte5UlMwVcj6o1yqAZQroH5a%2Fp4y7Q6ipns61DfOfEuGt41yrl6WTqPiBQJqQI6VgQSv3Q5VFJ5XM1METcFFQWeZG6z3D5gp23maUx6FDqbEj45yC22tfmf%2BEkB28WL3ijp%2BOq9D8PkpZCVXMoG2ZQ3hOw7G%2BNS7IPvNYaL6xKdPd%2BAYqYJgNkWPhoHFUqYVz87VmFvGg5kg9DEl4W0YykjQtKnRc0oJBBJPFI4f%2FUh%2B347LSu32pPO32ra9VQBlVJO3TahdgbNUGqOBKgBFLKLECkYIUZJuJQOS%2FS3Js9MXatKMHu07RsuONICG0S%2FJJAEc2TG6ecl%2BkA6ZjzGfJImtywRgFnQcTbmi3UZycfPUTB2%2BBjzRBu2pUcdwH7PNklh0ZV81dFVu7s8kgBgP%2BQ5dzeDyN5ZbjjK5tFQsrRhn0zmLZYKnFirTVKUGTTcaJSOxmj0KSVaX5N0EyUm8ZPfaMKb178MGOqUBAK0RVOJuyRT4IM3F3TI0h41xSrjm97BAeptbZujzK4uQWA4Rh6F7uWgd7zxclESdfONkHQc5jr8QXq4rfROK3pa0r5aBZ6vblm9j6XMnzOj9ltyzhHVfFvpnCTVpN0Uv0UHlD37CGlUDJtAhtcWC3%2F871bmFjZvKqnXV3A4yeLrSVV0Ne65S%2Bx4EINgQ2B1k9FhKS5ca9BDlB5Tp0qSan9VLUPVu&X-Amz-Signature=22a5cb2c740f83fd98a191d1895f1678bd496136fd10160ae907401969b23f50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
