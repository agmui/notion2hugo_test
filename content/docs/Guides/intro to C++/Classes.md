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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAXHYFJU%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCEjQDXWxXn0NOBOCR3xsmzc02WJPL%2FoT%2BH6zIjy4DRZAIhANGrEUOtMb6TTJd7I0iVLO8xa6boE%2Ftw8vOmlOWLmn6%2BKv8DCHAQABoMNjM3NDIzMTgzODA1IgxAqD8HCdNY%2B4XIKqQq3AN4qybwuHYS6vP9Pi3M5JpXoMccRdVmmr%2F6JYIOk2euh4q1TB%2FLiEtz8ojhHw0LSXVuVRXAZx3mtlVSBkWtQ5X25bVNoHgOyqBQdRb0%2FGiMEjv2FPymCOUX32O5bNuvTfyaYG7pfbNrB89gUKNw1Z4ZHwENyCDVxhG1Ku1TA59ElY9w0cTnCIBDtqnrmZhQWQTePgtOaNfMOn7Qevj58W%2BIacujBUip3fu%2BHPOLJamMKwdLTAoLo5t%2F%2FGcT0olkA7y2UtBAZV3hC9bJ3FYRKMalZ%2FZUwi%2F6e5gOgI9AojW86TgLIUEOrvgaEJA66lzwLVivZjRe6QsCLqBQTc%2B6pwa1KOng%2FuDG3I4o3mCXC%2B4viYkhheEwjTdPO%2FjaVNOe%2FXx9i9uwUbDYpmDBRovyasTEDarBAM6mbZ55lQKN4degEz8P51o2UcMUTkMCIbBbDDOXZXvIO4dF5z%2FtfFQ8RFiYB%2BUlQPTxAZxYbQV2XYnQ1sHNG5ls%2BOpflNkT9YxvSpt6px2R9HqMN6lfo5%2BwG7kRBS6dlsgPDBZQU2XgcjQO26W14P5Iape5Aqtie1JuJM3CK7d8aupryuHRihWBjZU5SnYE5EXjDlx5ST4GLvY5k1%2BFSIweYb4KWIn7hTD79vjCBjqkAaxUedLHJychad2lYejEYoGIEZ%2FQj5UOfNIvw82MuicSsVbfhdRj3JL1ls0W0dLEahRaAS0yDz%2FI2YjGhsdWVOZ5uzfUHqkk8%2B2GELoJiZvszomjOCxUKhbEu7O6otTMCeYADCsa%2FQyMTOrbdTRoaxpJzmAG6BTLChfiCZz4IFMUEAnJPmCQPlevYAWqiEGpVGaiRRy3cwkXhTGdYQJ8uB2c1SEg&X-Amz-Signature=2614efd8c70b70119fb3d34342ab10f2a3cee5a7339923ce7ca62230261c55d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
