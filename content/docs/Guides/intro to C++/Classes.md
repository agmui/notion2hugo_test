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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBHUMJUS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCJYn4YTDEb9UZK%2FSBgxCuCZvp%2FdSnaa5pOmbnAl7FnwQIhAMAve48E7bq%2BdCP1LZSVYGQVZ35GyHV6VjNXW9h%2FujIsKv8DCFIQABoMNjM3NDIzMTgzODA1Igy4%2B99s%2BpOBG1Vbg24q3AMWlqE7jFlhlRtlnB2iBTQ7ThLxuPiilnQ8ueSIKl1xPSYMXNRb2A5KG80Bia0WKOvkqdzpMLl%2FaJSbTgSJ8DftHkwoxFv8xORoPCZXSev%2F7JT6UdGEZ4wDOy7ASpFhq0hstQYPqHETzMZ8tQJN2vuR7SK0bDA%2BhgiygFMubPfu7DIW%2Ft3c4t4afI36Ep7dQ6sMO%2FJtFMcREzPRi9LLucK8khniAiuER4q4TvjeW0Q4hRALDgDxdriJGc2tir80rdrUaGXA23A8B4n8hTK27V78wqLBNNhM4a6j8BJEjOd4RFpPicisRxJHRMwDjpW%2Bn4Hi5tiLIbJzNEmNukgOoPzWJ7fW4iOdKBPSga0Pm0rYlaWpUXzZMaIl8EJXOQjjHJTGADTRTaSjhZ3aydSuVNpjmEYbCuB8ES0553hK8Da3UTyHNPn%2F%2BKjZv%2FrHthZUIG%2FSg6XSHmv6kw6NVm3jtqBZvEUwisE%2FAQnd5m%2F50mqE5GzN3ztR9LYF8HBXanV8FJhW%2BbJGB3oAaAHIUX9qp%2B187IghzW5Z3bx%2BgDu4yjitZXmexEUzgjuBUQc%2BYMQvTBMTUXpnNsuk7TrEA8c5rTrWI7NFg3FySbD4a640TOQG3qo2Ux%2BQWsgfiYthhDCo%2FPnEBjqkAcOqfxw025OBmZ15cxoHMGCEbXWOiZDBhuDfANxNcoK0Vk283awHEDpnPfoZDVbrK5IqUWMkaJUpFNLE8YBCA5pDusKGGNy1jvnJZKNh0vK8owYSWhRS3IDA9lUaZi%2Bij%2B%2B2xT51Y40Ha%2FTVDVHFJKfiqVIy%2BxPepG%2BiZ7XJne%2BJ2ORuzvqBFydmcwmeV7wq0GOG8I3CGhmcfn1Ei6aMqejDOXZW&X-Amz-Signature=3467607bf447d867d050919da14f97331de29ac286d7e3af7f8edd042a35bda2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
