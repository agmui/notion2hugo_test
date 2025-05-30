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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRLPVAWB%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T004153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSSwqhqedMbUgZWXr6saaSEClKx6P6BtyDi2ot%2FM38%2BQIgWnPlmJ%2BAzTjdlS1%2F4tPJwhT4YImUZvvKwAWQnVE7cEEqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDObJYPovTHNp4Eg1gyrcAzOuxYuVCVqTCum0FPOFFva8yR6n5YaDF0aptS2IzwFqgeFR%2BhPFP0JDmYZUVHBKC9ADOGmwKIcMNpMuSNMKR4rnIZMzFD9ND7yMIM2%2FvmTOtBgmoVBUsXzBBD2i5RrlecE2MgpY%2FkOTREcqlNxV2%2FNYXOhoj1x05PZUjFSVWDHEeX%2BuGUniVFzk4VC7uDyAG2KnGj%2F87%2BbbOo3VJwrjheQsAenWLuI6xo9J2Cf3s8WmbLHMaj7MCLZFRptjTwIy68p5%2BlEwmew9CI01r65i8y75c8%2FMcXvLzSEGnqdQG0KH%2FHf6S32nT9SmneFB%2BeVGbivhqth6eZd8hMa6YLnqY1rJfLDzumFKBNPUVl8mxzfSIYxT6fr6016BDcvFobxIVv6iAs1vElzVjPTq%2BICXgIW0K1ZlhsozODR5J%2FAtASx8W%2FUSvyjaAkGxuMa%2BthDXGhNgmXbhYFS9aFTemPOcT6d34yXhBXNrbJ0gCPd0L3LDUDNbf1HpFJcmkmSyA3HHChntRiJIsHdYMEYh%2Fg05gfETdwAWKQ8wZfapyNVxySE3BSq4u9YBFQWrbaHaP5bXa0iIcXeF7%2BEbDOTF%2FojG0YunB80gE22IEXj6ySYsXUg4KwI%2Bv7MtmjZ1ts6bMIje48EGOqUBXzrQQ1H%2B45i5VmZ1jJp0KHffTnIyNY6a6sXMdRg4%2F1TKLClfq8ivjAsoIYNuoUAfJz4DQq4iq4huqXACY55asJB9VUh9GfHeqeepSRf7uESggRn29EvQNwGgCL2H3%2FL1rnvtsOYxawPh3e3cXedSxBKGG%2FdNmZ5aZs2RbaQj5eEfoSRfT7KDyPChyA3lsJ2zgAEL7NOaAgXDBJ2BuYaf2zuakPMN&X-Amz-Signature=70d6d74a3af3070d6512a186a8e08e1d5977b7df12ea9aaba3c03702198f5726&X-Amz-SignedHeaders=host&x-id=GetObject)

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
