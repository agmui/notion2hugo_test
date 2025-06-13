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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGNZTUMV%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T034048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCVTrou8XJJCxdOjeq%2BykJFEvGPRoGJ65sYxk4LP51pEAIgWI0JR3TGkB7uLKlbG0x%2Fcx%2BodO9b53NZlDWoDNIdzfQqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM0ahC2mwgWvI%2F0d4ircAww%2FrfRaPWZauFzWKxo5m4zrXd0MaynElkc0UYJn1iJZo%2FQqqnpp3n613oDzx7BjbJk%2B9ElseV%2FrdqzAnprEUTwoXGrKUPS1VtqRcjDw%2BfLjbaPyQ4Zq%2BF%2FIeLY8BqRzfm2LfWNX57Uuqxo7wTRNQC8mwrdEVZhweui7CPliSen%2BY6RK0K4V2qWqwybAiKTA9oDJHGAU%2FylfX8ccXPFiCQxUKlCz%2B%2FCv3hPV7cwnVRYcMnXfPGxmVPItBVfWPyZWCeWBucLKQCf4EP47Mvko6%2BiEuHmkeLcUjs8NiauRBzMftaQaHb4eNIqtQmebhmGQqTb7Mg6UQevgtJpEv5Ati5TTy90x8h39Jle8KzG6tcFxDP4Eg1KNkcpK3dQBCkZgPFdlyURAQ5CpiJSIIP4AArU1YZb2KN5s4AlhAn97uQLhNcbU9RK37F%2Fdsqqbgzk6%2FgsZt3B6hGu24yqH1VLNr8K9T1SMrk6eQZghs6vHLgTpyVk0Qf%2FHfiFRpV3FYHHP2ipyGhhhUyi25JqhaP9PewfihSLLEzOsE1yEYifI6gf3C47%2FOQZ2MnAu%2FKS9h9odLKIArukdVoDP87jENgXULDHO%2FaqTt0JlUe4oYFAJKTx8rm0%2B%2FDTaZR4neom1MOqjrsIGOqUB3ElDZ0uttrrGYrgkTMIId7ruaNI8wIfU52BH7eL%2B7MJvbWlONBkBa%2B%2BWe0pxhBqyMS8Nf75OReFhwrQI0taTHBCDytACB5ClkzpHcq9EsROby%2FD8r6FQe73z4rzDqvNfjn3%2Fel6a2XwqkbavX49ULrPpBi%2B%2FIAWgglmyzszWMxyYFUyA%2BJAHX7BwZyBguUL7AfE2UAJsChzwgW1JVi43gQe6C5jO&X-Amz-Signature=e38d82baf553ebb29be7e91282326a121d3474367639d34c85eeb991945a573a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
