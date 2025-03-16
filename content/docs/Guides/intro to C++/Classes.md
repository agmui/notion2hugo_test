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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYDLA2X5%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T110149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLo%2FLrMI8omno9PHwcYgxuxteruOj%2Fsz0za1sjBoy7QAIhAOAWylToD%2B19xepQzg%2FuC86IU4rntlwZyMaLKl4JibfLKv8DCCwQABoMNjM3NDIzMTgzODA1IgwXZKbnpxIZUkumwtEq3ANDQpCPBkeMiLbnPqeSmJ79W0PjhrBJKwdNEva6CUrdjMOLaUAX2Ta4RZf8d2DegBhumR0HNhhpXhBqZDsAEpczrWbxQltTYsqQuUEcxGytQYxdcl1EWRAo7NoXtgrIu2390Ik%2FSWvOBvu%2FvyATVQZ7AE4v7XFYs7jyouH1YA79iPuxUk6cMZK4099F%2BGyAwcBvanBIOG%2BBGTr%2FUSRTTMhRnXinYaF8TX8x8jkq5iUmu%2FOZLXp6vs%2FTMkN9Gk4FAd1bH1gzRSbEV4ohY2lI45B6yh3ScVp87WsgLp5fZlMdyl5bH0xOVOb%2F709BFxRct3UmtW3NzJos2FIN%2FIo83vnIv3QLGXzElPCYHqgZkeU6ZHfopa1FfgdMSPQtpqhA3h5OuJ0qK%2FtghYX1q0PP9v6eQXnUWA3V2OfYavuIiPM%2FKkUK3t%2FqhCviy27RqzKKB8aG6BEUqA9vHz9ZXiVEbNEBoDa3C3niheEqOucq55Xv4b9fV0h%2BXTHxopzwlLpcOUFwwIczESmg%2FzirqvlMK%2FtHulYiKxEeEBr5pQ%2FRLp7ik8c%2FTmn96wBB9qqrCmQmt75cmKh%2FhOl1%2BfI2cvh5%2FRkR9Ai3g%2Bgmur89NQmFD1UvgU3M3rE6yjaFL%2BX7mjC52Nq%2BBjqkAT9YYRYttP%2FzB2jkafwQ2RhsibW9CbLX%2BfyLj%2Fg5BYhAq1wydWHPEQYma%2FYDBBPXbPCXZGzpiNnXrirWmAU%2Fr6VpnCGmrlzumR61HIDRkJ89tIT45PF2hbRgBVAjugxyCBoWfSSsi%2FQFm6uwSa%2BnobBuyYZBhjin7F3tzvtNWVw4kXxrXI3ZpfAMikkhfE0k2PcUi9G9Cmgjo13CoDE8GDRrkFbs&X-Amz-Signature=a43444a30ad88fcc78c2dd5f5fdfb1f193ad10597df3473c6af909080978f1cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
