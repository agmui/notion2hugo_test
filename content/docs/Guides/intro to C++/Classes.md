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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNKSHRGO%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDNKogLZbpyedLj1iOZR46FNThe%2FeH2s9%2BmpPRHhoWxgQIhAMSXC4178U6rERueZr5neRyIBBtVl5SvgLmzKPihd%2B%2FxKv8DCBgQABoMNjM3NDIzMTgzODA1Igw5wR7a%2BZZBkEqjbosq3AMuvmrmyD%2BE0PZQys%2Bn8ZPgtVOLXitjYo3kXOm2u67%2FIpxbmuEl9h6CaR9hzEVUg4%2B7XfcdD4hwQG4NCPbYCF1unVlJENNK47L1TDy6JHLdNU3JhN1jXd1zN2%2B7d0M2Ax3JRszLJbkVLXbeh2UYECgCRCeyxVbQIuEUtvyvWE79bsNCogrKWRoaiecMa%2FM3qVZQl%2BjlrTKAvMMHGLXt3t6McFBzvbTEu%2BAs6sYxAC7IUoaAsxGdGW1kitqYhoMiN1QHqIoOrIwt7FLGAUaVtV2AI0EJF%2BYxfjOsRqwMuYmZda5T%2FLS06biITvCVOanBdrXAJytjmqPphKIyoUoJMVhiCzJQD0%2F72vSBDY7ke6LijuMlqnpjiaHRrmjR6UVW5WJoJ99iebpYJH2DiVH3my4kMmabny0wKnKzWZJri291Ups4ohoMZYJMNLxrzcztdgr2OrQQ7MAkOL3fcyLw%2B38dMB2rCQz7m%2F2d4gFGhjWQnywUd0OWXbRyHS8vXlI175xLS7TScnBSNuq1s8SYHqG%2F6rAvnnM3Fzxgn9ZLRsjJTVn6Q8nDeWJfN7F%2FZktwvOOKl%2Bj5PeZDkgOKY82lZhfT8WMdYg5IBGZ4G2h6QSvWj9gXc8P7q3isGDkpgjDNiN7ABjqkARgt6Wc8QogVku5Nja5QTQ0d1wXT8tKGFz7SKppexeRzY9ths2NatnnrzH7SpQI4c9Vs2l3Zg9wOaK0vBZC6krFuWIo8GaAWjd3ceQHymDyk%2FMRLpQm9gmgyfXZMjjfbCxfmVx2zg3Ws77yRYHqQJilZmeHCoGHRZB9QfjS0L3sW2%2FkK6ym1VwbWEDD9YZwixQwBzgqUUjJuEWxLSMLWgJx%2BvMSM&X-Amz-Signature=26856d7c781530f235609ac6498ad6933864a9a716c29108bd9c1e9041fd1ab7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
