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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI4CGPZN%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkRTt7WMUMM8vlhJSP44U%2FWz6c7BxYEWVK50mLAMj1OAIgPWdWOUsXxMQfTfPc8TR70EV84enfH%2FzBlpdv%2F4v4NlIqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzD8c8ct9%2FPNwTDEircA4XzCFiB8dmelub0FRWmLyGl2g3pM08H6d1rNgngPNHEbHAeOqEOe9G7kpo9isq78j%2BPBBnRk1J2kUTkO5vn9nhUV4bgwerN6RZpvYHCJbhoR7IsdRwD35xHGn6BcrjsqYU4wQsaVapwD%2FZ8a6UUu5J7QxCpPp0YI2Mu1MbblVDb1I%2FAgQFqhC00eXZdZHHdjqDd3%2Fbfs4dHmYPtUHlkbvC2CWDe2eU8pnRjVo%2FjS8s6tGYPrIb9apn95kU7L6h8jWXKLCmx%2Bkj4kosEDOYXW31uxZQJs%2FqgCnc9ks8BpKp9NyJdylqehvS1H7FO%2B5C7SFow8ert47%2Bt0D2QMyuKROwlkQpyiu%2BQNbydk5JKRQfbbeX73%2B7dCJwdVNdNa9Dhz5f%2FpJgd%2BNLzA3U2ab9cZmpm2SwZeX%2BBi3HU7XRpTXid%2FcoEVtwaR806XKsJ0jopzaWUvsTJmwsVx4Y0q8upchKulY9ozrH%2FBvxRog0ug%2FyVx7AXu3SZC2SQPaFtR4ENi4jQ1ywxKSuCVRu6GQlHEeli5YOx5p6AnSolEJ6Qb%2FIMTblqXq%2BCg%2B%2FsJDG%2BTzLYJTXXrJVwiQHZUXMhWIDNNpHOzrgISlKJJxr4KqHFiueM8sDIjZsNP0b%2FGpymMLiEo70GOqUBA%2BhBtsTXK0Kx0sunVpc4XLrh7earMk%2FFQxwWC6dLADG0YSvC0%2BrGzMuXQkQ89DYiZU12q1sTlTG5xsPfRQ%2FRFz%2FHgUkUUF%2B8ud4ymRf4IUsVc1GzFlyE7Dtxqnfr6W5Fm258tqRIvAAjH76NW68EP%2BlXUkHn2D0Dg9zGFnGhUDxKmNsImt50BdevTqDO7QUfowGGHic%2F8kUHC%2FcqeXft1fPQIXF1&X-Amz-Signature=aa5e9578afb6a42ab7ba2399b59cd5bf97da0bd629044ee990f7ab2b2d12427b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
