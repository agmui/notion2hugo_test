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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THBWBU6P%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQD50oXVvwfjL2PO2OKNrrwb2Uy7j0Dj3bOJX7xqN5imJgIgRsSG%2FUzDSKccXpxhsfUjQYh3kkZvfmT%2BxRSXXpUj9x4qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOFOl9QLbcRK6hlgircA96gVmrhwtBphsuglMlWGr3hjg%2B6VEde2olKR3j6r1uaqUCWcmY0emV6meFVBHIZ7GLSm3ho5y3I64oGupdYKnK4zc8vwwjPfkvjQlsqLRUSijo%2BD7Jmnhhfz6TokHJBWT0WoQ0RY48n5sS1oX9Oc29aMiUQKGquWkHvfTrPahJD5MaohcgK636Aab4HQx%2FQxcHdKsMVS4Asl2fmOmK5MLeVJWYGgiWprmbuDkMTYynnh4vRka%2Bimt8NtaOlGRdsUbYWMjyneBsUizCO%2FdotQkeVzsKayRclmWaKTQErn0CikT3GpIKZPyd%2B0NDv2fOGVHIJN%2F%2BYUlXuXIflYNXy1dnG3F81kBxhkGnYHK9oPTpi%2BZ6hW694M2iGmZiquzIq9nFCt5AQrhBF6HF0kNLeOQ5Gwwo1QIDs9uRNjKFb17F5UQgb%2Fn%2Fr2eK9pULCR9MeEQaScY0uGyWXvl5t6iYN6mjRFufP4uQitymq8hIFMjskD32ZZzU8rxSOivlGxM2RWftCGzulaqfTvhQXEA%2FzrwosjBNGOqtMcPL7t784hGjWbBwWivyp32sADWyNYL0ucclpN1T%2FMA1ajm9%2B4KuMlUMoMVWn2cuXIHtaB0D8bJewsgDYvIqkT%2FxkTKIPMPeap8IGOqUB9QyJ%2FOZdWM6t2Q8pJ9XRBue454%2FzfH9RD2fdIAwe4hYksF3aIShsDDByy7ghJ8t8neBK6jDyIjGR1b2Ry1hUK%2B7EKVqAypZWO85GUy1q%2BCKLjbNb1CRmVmtSyRPX61T1Asd%2BK6XZHtyKbnO%2B3F3cEZz%2B2vE3SjoA5ClbvUFCxBupqMHK4FUxvKaC%2FqZGuJTT9HYan5MzMF5zKxZIUNn8lynoLYJY&X-Amz-Signature=8b0e660c116a1d0cec221383aa1ab6e8608759f7e451a20c9e327625b1a6f740&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
