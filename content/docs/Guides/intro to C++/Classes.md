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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOBDLW3R%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T031940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa%2FEIKlS%2BfrBmwKKko2%2FVdXWWh322jawkfrmIuaFO1YgIhAMLnHpLiZsol%2FoO46K%2F2oxYS388VVspIlMwSoe6BQM4iKv8DCDgQABoMNjM3NDIzMTgzODA1IgxEitC77pee%2BbDNsRYq3AMMgBFa9vPw4c0FS9R3c%2FRuVD3zMB6kmgBecM6BJDqzY%2BKakKW5nzTcer%2BemRW5Upd9JY9roMJSiNPX7iVeGNHtnnOouK0PMkvNIlSSDCGg4piWekpCYFaq5eLDTKpCgDFTLyjsij6l8Em5Hk%2BIXiW1YdK%2BhWlSBuMFQtQB2P%2B801PBb0XoD2VMCvIajV4Xg8G9glL3t7hwGMy5cEO%2B%2F%2BzzdzPSGPR37G9yMiH46%2Bg9K0ZYrZNj0lFd57u2iAWr6IcelXjjHUEj4bEaGsRXWyDRvFVk8o8jFYIL63Pbd2liARezis8bPcBUNXQ2ceBYD5lxAumbD%2FwwWAzqHZpaiTYTvYN7mGDRxiPoVvaexVb8KhzJQeDBOlFz7xVuWvm98w4KP5VwcHxgIFkryyZrUfzaH5nJqQ6Eh7lZL%2BD3OCt5w2qu7HQejU193k19CUjt6EqPe7ckiG1Yum2P0Qa8h5FyXTGcw3%2Bfynb0sLdXjvzt75hCpZu3h6SWg98aapWevDkiAJ388CLmgYuo%2FDfiBMsjMn%2FTfdlA%2BMhWGU58ieFObfuoBpAT7UTiQnguHBj85543FQs%2FkHGSyhwQQ0UoU1PzTIn1zmPR581jbPfqKpoiJn%2FPjnO1i3f%2B4jp6FTCUyai%2BBjqkAXd5bSRha0EqnfxbbAh01GMJFzIFwVHOQT1gW5efH0%2B8fV4EVe8vkVROfuRG%2FfRZqP%2BUx%2FwdA8qgpIiU%2BAv8iNnFJUPrY9bgsOoSr0n0Q%2FhtcCWdVrBHdzJNZXJi7hx6dILSn8QGCwNJZ7Dp3J0Dv6I0UTzvQEUwG4AtzANixvEu%2FToU4RsPO9Okr%2Ba1rCPBgtWoQ89OBgJ4%2Fis5tQXT4%2BucPFcc&X-Amz-Signature=3fbdb236f4eb16a1947684600d626a06e2c2fdf5b6f290ca359b90f7b54c6301&X-Amz-SignedHeaders=host&x-id=GetObject)

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
