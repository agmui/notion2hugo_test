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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZA57TKR%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDTmGKmhZ9IzGxv8eCOpZr0YusOE7DM0OMOXsQPxiZ6AiEApcGwqn8qiPQYsE5ygJgmQcKOkmf%2BSxN7%2BbRfQyh46xQqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAr%2BmBTZAailYGBqHSrcA%2B%2F57QFNLRoM%2FLx5RlVus3SdOINmZILaJhnCkCg7ATBqGBZZjWVg1SLlUlR2ycgwBIeNeXyLJsxHWfPRC8jLgdPHBVWNN%2FXOP11scCbYEPLnzaPJYxq4IEtxKbcqj6RzvCPjbM7ULo3KEXZxLwHuTwUpbYniu93nECgsz00xWS5L8Sw8sksCjELYdT5C5xUBiAy94JgEefuxPyJjH0zW1c%2BrAaxaWX%2FmC5Kuj1EUE4eiLArqdvAaERczruE112JC9LaMNnGHR796bGuqplJuFkb5VXxn7O39OaqBvdCnooh6Ks61z%2BUMIdjV9oSUJ1RckaR2ECgDZYF924PX1RhEsP%2FRvg3zMNyNr1s2uH24fY6%2Bm%2FBvDonGLwMNdbx50c8tbtUxCz7ALiZXGbEDmzxS3kbqDRu7DtP74yjG%2B9T30GAkeRU5JVXvFFKzMEZOHtnRsZr944mqJm8G8V86svhWLVOjipqqRHopY6PcXQokYpSlnez0V%2Baaf%2FVH1etKMRsPO4aAp%2F%2FTzO55NAtBFRYYDAqLh7ZVgSqhWPqKqjDbVRgxGjB9%2Bw6qOKiX%2FSc%2BIiaAlINAWDgPsP0pfm%2Fp2JZ%2Fqe%2FSEFD87e58YvesU2xNgDJuBWf0gqQQNGlviU7sMJiyqr0GOqUB3w7lQsFxXNYF60zduKcUEaUEjPnJIxe%2FwC1%2B%2FWupvppb0Q0UB6%2FZWh0UueGZOe2x322mmzMdRg8wAVeqMWn%2BNRgO33d3DKHE5C2oFuQHCtVUMDqWuNvxk1%2BEeb2P7uSAqC0IEj8O%2FMckG0ZPa0jYB7Lj0mzBPy893uc3lzkB9XXV4zHiZe2ZsiojlsOfUZmE42g7pQmqoTk801yHhKY7TQ623DTa&X-Amz-Signature=f3e19b35f1fc64ea785ea3143e09b48cb302002bde311608dae7acf9742b9a88&X-Amz-SignedHeaders=host&x-id=GetObject)

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
