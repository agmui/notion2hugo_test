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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDH5ZEAS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD60HHmCpijkfFIL9oOT9dHPQ%2BD5VVZc0cLYHe0HxdRJQIgUUctWbjkgBDvJ6xGY%2B%2FXHdzzzUgzkFfyfu92UVv14%2FMq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDPRFECa68cWmb3xXaircA7Er4NeaFDZzeMWyZcv3j2o7veDLKOFXQdQvGNsRl7EXQ%2FzMnbZDm3j%2FsJUSiM5lBIrmdExnD4ybSnWM3vDJzAB%2FJ7JGt4HoFUJR4GrpmexHaxENmn0oMNMDLPLWRXVB8GEpN9XffSEgjPi%2BRthiKw3gDn9QFN%2F5uW46HY9ZK%2Fh03nT2Gtc5ir7APq%2B0pjniMMlIzMXDB6P%2BV%2FzNnGkg9V4HOybtwfZ8QYy%2F5v9yHDC0AkmdR7hZBQEyw0Tvuay%2FwhmpuVQnOaaXtLV3smd1XJpLPfajIvUw8GWaAoVYGXQrbcUOv2sLlHDltfiTq%2FKMInyp7mOgS%2Flsz%2Fh9ddSW6wPOkiJvA3IudewDqax1eqUNCuSQGPRY7wb6ZzZv7lBqRKM541eGU7EXGtUsp5HAiDG3XNSMmjdOPCdJ6GHrP1R%2B5W4Co1cLRp3Y6aK0fc6eMMk0zOQXSWreRAKL3YRIZkMspKxZMudLT1chjAwuqkknJ8mD%2FT8j%2BnvXM1JEIqn3kYo%2B9jM4vVjpbFyzakP9hQWYTkSz6q2u%2FZzvjeQH%2BjXlznwNWgzQAGEd6h1joNifgR7NL%2BE0wNWpWqSY%2BMaXyRjOTzkJQV0Fcqf6%2B4BGpJxCd8z4hqGqHUjnD%2F8hMJC07cAGOqUBEsPxtyBzz1KntSbhDJ2k4BCwulycTaTUtA9tzvTWF%2BEgMgiacV8%2F6td2qrn%2BBBjabmOST7PbRoKPngAL%2BJrBcfgpqIxYrr3yrKEordPne62IjlSMo%2Fmk%2BjRWqRdGJW62CGXO8DEucVoa2G0FgI61KTGwE4OCaHeUwlk6%2FA3gdYK7sJMHyV%2Fci5wPDeoCmzIN5VD7OXbYugQUpPIBQ90%2FCHqyDvpD&X-Amz-Signature=1c0507d6fbc5e82190673a164cda381ccabf35588f1acce649c55bc6f2541eeb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
