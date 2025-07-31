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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQPPHMGW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZUrQ4zTAulQW1SZJHS%2FhCgaiHzZtEo8n16HAkC7r9GAiEAhVF4zxvcY9SrKPe5%2B295%2ByeI%2FJJw%2FYhQ9oNWigOx%2FEUqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFH4AtcBjmjBEB2FmyrcA4%2BxqnZrpZHEAZ8%2F%2BGqmQyIYHs6SMI9U0D8uprKA0eAFXWV8hyEUsCrWxbZdQDv4bkdo%2BQhDMpAqxfFnxbiBKptlGGx3r7S0SdmDg3pPefmVPXzfR3MkwbmmrH%2Fdu80tPpHHs5qvgbJsyWjnaVgH77M21Fqc%2BVduOTvmAWezUXBdfZaVWqLnwHnib2l2cJNZv99XgLNH3cRigMlgOWfSd9yp%2BYs52znaNpllV%2FyPdfOpQmWhWLSWPq4ymxcLfNFp3F5QLoAOxuBHpysopsgiJJtHVDxULkNbT7iI6iX9CjTam0uFNAYYyxAl2fBlV2opDhKDt4XZvFOqOrfANusQ1R%2FFH%2FYBgB7ob2lIrk%2F%2FZtbNlGohwac0WEMF3xvQhucqZyrK4PKjARn4E6tG2EnASxRPzK9VLAhHkQ3h7GUZfCJpVtiZR7MkU6bLaf4%2BpZm4hleP%2Fa9tgfdUuOxGCnkaIXYP6y556UjF%2BWleKKHNGh0BqBP03mvG3hG4PiIDy7RC38XzQPWLU0dqfs6pXBGnQZVhQueULzxosEJBc8GZm9J6RD3xYsYhPI5A2dI56tO2H%2BgVOzBn2DcU0JaGMzbDd4ETYi8reUd6X6LBrTMrA%2F59tLvST7C3QfvSO4QcMKn1q8QGOqUBl%2FwvT7gJ26q4FKUfNPpOfs2wNnc07KXBHen2TyO1oGNqQXFIprZvDe13s%2B9sUwkGB7sIfuGaZ2DpUTlQs1Zml2fqPgRnIqglj%2BuB%2BwT6rknhmreK0OmPb7w1ex9d08cIQqGrEGXDg%2BReEU160r7kQ5EevSENYxZIZRXWz6r1Q9xgSA0BFZg9KOs2r1uNcfgv4FKrv8EoAG3hjGR1pveZ5Nbq%2FqpX&X-Amz-Signature=ec0795fb4b249018eb299d85e68358d27653eda3873a10f4e843158f0fcb7295&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
