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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGFEECIO%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDO5wC8Hhh%2BxPNRRQyREVLeccDUMzviNuyRVvFJ1eeAaAIhAJtZbjIF21uJiAbv5qa%2FKXCjfYhyg38fgyru%2BqqcRu%2BJKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0CVllcatTQsXju7gq3AP9W5otCMXU1%2FnTi33MBl%2FjEaZLVYLWUD7GS6ZXfUBxehKnUuBb%2BOZKQ3TnB1p4rPrESihTihDL3hc0JNpz8Aj42alpqtbmYR7Klpj2sJUej1yXVud16KV4SPGXna7QLsb0xi7vpD5ru5qCfBIKg07nnCdJri04jRYd2RjIf97Iiu5NIrRmeV1m%2FjIGoN9fji9%2F3q57JqwnHKWk8W411HW3EFjNFSRNAf1pgvMzNkX%2BG81WkSFTuoTeDMa4Njf0Bse%2FEiR56O8BK0WVzcYLrTIoNGKUAE5%2FrV8YQauZhKMUgNfcVpRyuO4a2HaIszOK%2FBUdvvUCpfmPA8fYcNBKGRKM7IA9T6yCOXg0tFefNXIubABPPP5zXsPWq9Ui3Yc00bjUg%2FhVslb%2BFybqWR7MtMfhL8me36gaTMWFKnbp9pdOpKKDwpkyCnie96R8HSTpB1Y0BhEsOGWHNCdAKx%2FPgkdNgoAraYeqVakpwsleVtgFfpQtIAfvl%2FKBqeL5jwC0c0RPlmvN2brwLzmJyrP3pLqgIO7n4dXyRhRYBoc5ZYWZenEp8yHaMLB%2FCUFpMCMAedbF6dwHVRGphAfvfCNFwpCI3U2H%2BfTkPoPBf%2BYNIJ8mELWsguTedUHIXgUqNDDNkKzCBjqkATb7XdzcQxSFPnWn3Asq3CH0ZTljkvdv%2FwKiAlOsmVUY80Jxy%2B2zWFOzwRjJloCtfZtCS4gW1yJuJDLmIilCBFLovAMBOkD7fB%2FJDMqZ7xVz2yTDP8PGS9PPWVfZ%2B4ycNKoScLGNwf2sA5Fq7%2FWee8VL999eK%2BSuSC3gpVVrX5uv83McF7QfPO2PDY3Tsi2ykwrvewUKzQDusR0UhcZunf%2Boqq1d&X-Amz-Signature=190f1ef4fe8af2dc84953c43ad1ee6acbc31cf3cdf1c01fdea717659d07dd644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
