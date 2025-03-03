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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBJW5WK%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJhyjZJ9X3PErRrUbODZIsUGfe%2BoJvTACFTq5tslejmgIgGHfSjqKNWVaaZCKQZMYD3fSFr6HhOoaE6lC4k002fcwqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFYV5hglm6X43G8eircA9yW6Kt1IDJlKxBW5MlU%2FDMiYOaaJCmDU6vPljELovcNmOS%2FUr6GkcY7BSZLWDD3IZin5lf8hYui1Tid0vKGQQO8wy5svSSnqq0DFnvz1Ac0brtxJwJthZyfgFbgwhTPyxbqhDWwq9Wrn67tAkRE5sw5vybhLPRNBmxHg37Fj9a0lbqgOiePyveOumwOaMQ4dP5%2FfqrGBvbx%2Fhj1DAstxPPMA%2F6WSaGfOK9RJptfekMHFb3fLQZ%2BRwUrtkkkXiZRxhYzBBkvOLevjj029fZDzR7udaXUcIGaJsSv%2Bwdob%2B9S7AFCygYhe4WY1gIa%2FJ7jZwRkdwdrTwcDmObyDus1YvukFZQVBq5W1lgw7tBiKPD%2FODYnPGOeGxEMyAQVYCtxihNhQNyY1nta4PEI1ITvvCIJw2kRwElZtlZbB7LE7uMtK1k4hXgLDaie39kC7nWhBmHobeOcsiZIzNvwr%2BHRXAmNKwnHWpkhztZZSRXimoViesa0o%2Bzy3wtJYRldYloNrWiGheuGtyx7T16PWQyxq3RwwpfIgPrnAVvgF1p7ppkGJPjm%2BGFY8ShDZXo3Z1ZeZH8reYoIsc4FKHEQYKnKA8%2BM4bj5VNxvpuEr3Mmz3z5EQuVZiRuE%2B5tOxe%2FkMJOglL4GOqUBh04XARWibhWfjEjSJDKKddnYyMGgu96Ul45UDEdb%2FwGjVy%2BSgR2quEWpT81Oz9bJir6bR0U4oYqUL79QAZUf6CscRAorpf8cLsUnUCSyl78j2EmcLsZG28vxiedpHb89pY77Dp5IK93%2F6iimmggWgBLBoZMq1PMf5txI3q4CN%2BrvGxkba4DLWvjxjTtZ9IC1lfWI211d16L2WT%2FeyhcUjJRQnJgM&X-Amz-Signature=d65ec92c0ab181371216ce123a1209f223e0a2e30ea02aeb73580aee4ebc92fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
