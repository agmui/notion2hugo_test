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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XZSVISG%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T003755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDTcPANdBgH4RJeowXzdNCe4%2F%2FwJRj1JpCayq8%2Bvapz6AiBdG%2BfOPhsBH2RvJpXYR%2F0%2BjmwJ00%2BCa4%2BFxR%2FU6CroZir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMdRlq0iD%2F399I3sxRKtwDqD7h8ly%2FNUbmSaddaw8rABRg%2BiXWsAIJxV%2BEMs5A66VTIbKVwDDpiD8XVr1N6t6tnVz%2F78zMk5LUIusnxgPpbtzMheEvSaLlyTbjX7b%2F71XqAjrQNMfwKVru7ZfTeyoHQASyfGdc6EZj80tS66pmIzHj5G0Cx7oMa9bEfFq8U49U7h84z%2FgT0cxHft8qThV4vKDrYeGO21VTdjv8uLdgtTAKz8FP9fKgDLkmX8WDZt2i3h13LfnBP1qmXwiAMT6y9b8Z5iLmgQOMRYWkuvt6tXcUzhYQ70IYc6fExi0%2F%2BAv%2FbEDUG1872kKGHXzfuISivGKIszQdGfvd7lhX89AfpPSU1myXAVKrcjR8UVxXnnS3X%2BoSa3NoK6F1g1PRIyKOeGYGzjVO4I9tbcGFlIcoLNPkEEn2fcTlEMBTXtyaMNZx3BW3bXmmn1qUyPE9gplryTwxcQmmjuHg5H%2BzYry1SyZpFDdDPaVbHYUfrI%2BkKPzLqh193IsZRG2Qlh4XEnY1ZL9o2L44KxM8EN81vf4sbr4QQcd0FAsE13DvTtvLKNWp%2FMB2t%2B3GXL2qhZwQ12MWV42ZEJAVVyhzFnzkulaOCsRlIaZgX7gMeUZPXCs2kPOZVnErsPfcvOrJcfgww%2B%2FBvwY6pgG6Kc%2Baf5IITQBqqFebtPHf1qurV9g%2FjA0owhQOPM0HMeBesfYCVdZTfRm160rLBDPOqhn%2FRo4szRAti6dIaml1LUSMqNgSnggPUgL%2FcrsMxQ1peaghZDyO%2FSr57735nvTZbC7NaCnhPAHyijd37sumOLw88NLZHe9%2BDTlEQInlZwQcjDkincI4OtYnUgkaOU30nAPWt3%2Be1cpg03JRReYjdb3BjuCO&X-Amz-Signature=d7ac8a26983b8762ab60f8652383dfcc5640de2e6f9197034167ae8adc41f0bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
