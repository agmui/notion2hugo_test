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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDPWIVVP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJ9srZ1ZRIJ1wgl81hcRt0QetkVCn%2FMn5sbNMO6tLEYAiASVXfqXVzUhH5fMncXxgXFos34rt8r73nx0lq%2BCNWr0iqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXVJOFarVb%2FjzO1UcKtwDwJ8F38Fzn%2F01UXmbci1XvE0TPeg%2FqZ5t70j%2FMbt%2Bu%2F1ngG9S%2Ba5IFDdAer%2BbOIJnoqKk8kwXVkgVUpwGOwQUNG8tvMfG5DfwBFOFqiK%2FRBIZs2RjtaT%2BmnKhyFdjot6yggOeWZbR6OSw%2FTLNs2Ih4uOxfZYn9ck8XBkQXhhqqI%2B6pGPTctxqdOr9TTXii9uicAKXX6HAjcUhg7Ri7CtsnpfRRcuQo0R1YdGZWiYjY9G2WzYOmuGV10ePadaEIu7HE3Gh99HBz6y0%2BVx62oeXdiqwlGH%2FYhoiwL6Z8fOfuB9l13y6O7zDq3ktXPQ1ROd6OJl8YAN6jwbAOCHjH9m0NEalRA2eGAa0SBtxQPzqomSguaiTXImcAj%2FlVgRbrHM%2Bwh8tA4EJoS4rDU%2B1KO6KxTtUmNfMnTgFPDiZl9eY1MVULcJjpJlMXAVoukZhU5QKrHjHCynOpdxpQAL7%2FyeLUpBhIpHbbjuyR7%2BGZY%2BJhfgnrPoiDLnI%2Fw5sZFiize%2B8Bp81KII%2BZuvyuH6X4LtfyNGcoov8siMo%2Fj6118TqBIroOdKTh1uFL8Kpxerq7ZNiXVlqlMPiUeV0WoBybwxBmYuUfAt7QdF%2FFTRTPA1KVS%2BSlRxZhfd93ePX%2FY0wwKHIwgY6pgGDIr27s8zEObhERPPN52LrfNO%2FZmfh6TUaS6kIb3CpPJf31bsvhKbrMlcfTjP4pA%2BMGAFTBmAyfbhM3Z5eVXchlTVjvmKgbvLoDpfPT27%2B3WjcIFpXE8q6Qsw7%2BGwSwbZorb67kEpQilkqyue1aeaJaOno2XZ3ouLxc0QllN%2FCFYJtNp%2BHb1G7zV3OgxALXSvjqeiwG0KWNfGgYjuU7XyRutvhPG85&X-Amz-Signature=ddddf306f814d9631f34370b69d7bd8e966c8514d87b6824f9099d46e082e14b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
