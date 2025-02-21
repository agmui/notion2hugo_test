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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QYKOHIW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T040957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAcic4XnhKt4EjWpQq9iA9u2D8Vqmp%2BR%2Fiud8sUylQfXAiEA9fmWSNTGvL9mQya%2BDBo0yKDUtMYJXlFZl7ldSJgycMcqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFe3vSuxK1rDHRB9yircAxGO2vQCEv1kMJukPS3pjBZ9iguN%2B%2FenwumBC0QHzAiw9XdkIuh1d2y%2Fen5PLkUI86AAxtQf0BeCCnwUOmUhNde3U8rIptD5Jbpa%2BAcKG%2Fc9Tm5UdxgcODOUkqZXFGM9QW4fcpHISQd%2FJt5xFXJCQTmycdYnqyqytvXbZd9wyMUWTaYEeN%2FjTQ3SvBeyEKiqsTpvRZAzjex86c6gfHVqY080rKirmQk3vywlzqUfQrJPvTD5yMSflJnGjl7DEjPtPS2FlJ5O6wQ3yvNMQEmnmK0dNSvekUiAo4DP%2BT6%2FYo%2FHoK1EIO5PEtY3ccWaihIdfWOl6qRZV3QT6sl7I0N1KoNEO8QVa6eS%2Bs0PdA2oVDNdnZiqHRwm1yt1kN0fxC%2FqO%2BoXzqtOveg6XiOVcZPIaBH%2BG5YuTPoKzcnfpEIeGZRYndTyCFUmapr667U5Mi7J8onTECCh%2FQ8FGthkX7YYXpvMKFJuSA%2Fc4pskvxF2rBalxJ6XWYPpU6l3sB%2F0ax5x%2F%2FdLVCg%2F8fqxnlaVXR3ew69OPpaZWWGTq7FoqXzFUKTfk49v4u9ldHB7U7Ep9bZFtppUwGN1xEq%2FHBBzSglQvdW64ju3ww4MaqmKjb2ickqutlzKdhOZRnoH6N%2BYMPLo370GOqUBr6Kd%2B2fruTGxR4L2X3bHcZaoeCOJqSbcdiyYAlSXsp8oVCNPTJ7PPjt72wqe3oC7yAf5t3hJKZfzBJskjAmfH9j7eqAb8slPkWyGs4%2ByE2TwhTo0Pb9UaBjXcCb7YBvH9ebkWmQe7hXQWrQ%2FfVyu776AyI3y5Z7ENsFy065BMjKJzMrWaQ6CLG%2FKsw799prfmtqYT2B5IB8T8HyGP9VQocputBjD&X-Amz-Signature=3dfc5316f6922dfd4766519ad4a0782328b83481c72d70dc795fd08a2818b293&X-Amz-SignedHeaders=host&x-id=GetObject)

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
