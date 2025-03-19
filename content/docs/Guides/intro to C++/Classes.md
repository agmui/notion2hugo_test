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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYZ2ALGN%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDYbplMZJPx33n%2BzcN9Y7QFUM6EXu4c5LXafO6qod0qMQIgdLP6GC4k%2BPKXmOjUrOd9ES0sPqmcp6AhOfNjgc5OY%2FYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEJy7ixiG0JxdK5fGCrcA9HVf1hgSt%2B2rsIQD5m8Q9XJ2ekoU3r8bCGpZlg9Lko7pOj9WQUTZrH3108N0n7ThY1nz%2BbtUe3dP97gyyngF5y%2FZxrk9ijaQ%2FZZAjY9vf9Mq3%2B2frcWtetR5jHXyPMLU1LgXeen1UjJZh9ySq4s0KzfpxyPBDYIKLUXkRG77XBnvtcwvstvQKNRjtK6DImfZ2W3O5Tk568RSWm10iCkRVSCF0d8UBNgxz9s5BBTtQygyVFM1GaLvU3BFrraGSzG3PvsdZTXxzRfyUANuTHBKcrxRTUpKH%2FgucCbrsz%2F%2BDq1zwiePN145M6hBPEzCGmCmSw%2BDjtJKhKmmJjoshKE531TSrliZ37HMMfEiREGWY7n3wOTGYXpIFU3um764ojFF5j9YoGd1HTVjPw22bwwTGY7SawS65j%2BSUtGmKo0NHe0zA5hbQcFa9e8uNjCFJBDYAB876gDEo2ndAkGAszoUvxt1CgYtDZ7kDerwRcAxSnl%2Fn6eYtk%2BVDTP1l2lDmBLrBH0H4U4xIhwpOWI2HNdHx7Vp2kDUjjFRxpcNlzirJqARgLpQQkVea%2BaS8yRsnN%2FR3vIcjXaMho3z6ihx8v29wiIwTAgNMySZsV6%2BbjTS6tkf%2FpMIUhkY61i9v4bMI%2B8674GOqUBxA8D%2Bxj2yaD0C%2B7wsx6zqwNMACUHKHUGCz9UWisZvtZnMBmMIGApZK6elE7UnZAzN4wEq9JeLXMAB8T3yb9eLlCa%2B1b2%2BzzVkpJCTFDLk6QN4BzSzpGoJ3SDWhAgIkCG8DB7KNxCrcqp%2FhEijQp2NLk3yCkw%2FQfQp3W6MkCNxOpwbXJKINjpJsKKGJ9%2FzCXubtau1%2FI0djOT1%2BEV18LcHLvevuJD&X-Amz-Signature=053b31ff1553e549e692362cd5bd7666f43b4daf5453e6547f5a1cf5ac239504&X-Amz-SignedHeaders=host&x-id=GetObject)

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
