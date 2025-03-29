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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665737MXIH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T170155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDWHLPTCEVH5ijzuv2%2BR%2BhIeiJIpaMiXCagXzWMuJqrmQIgZ1ubqCerle69pr2fJDyFRi2sskt2HmqGvc7eg6GuPYAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHYw9bv3gHGH5p69PircA5jpq%2F2y6WQAR47RZO7JfHhSdJcY45AwmI75XPPADGG2%2FHQ65GNUoYnTJM1wouxxUJ4BEYc6G6FSFnxvcQwe5OLFyuuRZAdogKAmT7vCuBVPXGivG%2BCMsYSg6gvmLkKsd1XnICK5FUw%2BRv27hjKwVXRquLIo4x%2BealaElRHN8rWXmgCxDT49NoMg93OBum0aGZVIFwf%2BmNrDFkaE7P2XZkbWF8OB%2ByeUJrNqQkZsQZVpXAZKzXY0pTigsLxOe%2Fxjq8qKYMczHLoUjDz3l8apNh99iSnSZEh6auR%2BMz0%2BRAOnryPelrNpn%2BBlUH4woIHmJd1cbU1h3uM9O9Lk%2F7O2uwchQIzJqlwcT15K1AZNxTwIDgFbo%2Fep7IuDyzeLPqi3AX%2BReyb090uTjAnGLcQihEJSziCJVvx0wbhJvxQFgvtgzXnnPxgSN53rmYHFJeBXjMl%2FxQzfg586Z0BaVq7KU89qM0I2%2BpW1TmYYy%2FPXYvgVl3rdoJQ30mrnmrOTVDXrQlaA7BBxxgpEGcSASDLWy9n79kMxz2U8M5rgiTjNWmIrZc1uYVE3GC7WQqtx6CQNIRH8Xj%2B3v8a1e1ZPcHbEO1Z3zuwYQPsMSkxaIRhAlYWmUReFpzpsQ%2FQmni4dMISgoL8GOqUBKznDlcyq3GfkGB6Q3WlHqtlX8V0NEWgVlM1Cjy%2FNZ%2FzkzbnhNQpB6KG14rlZyYu1QRWEaqp1m6uz2paDRVRGuamgak%2FiNoOpXSykFdlbbAGcQqYqKU7Yx9mEfFIIZ7mobiR97SQKQdJFsT2dJcB7EWpzUTw8gZ6uu89EK1zxLTaLYMufJB561qf8Ib5fsuIzxqv8uoNNpEca6zeSmm92y4fS%2BbQK&X-Amz-Signature=96dbe0a2f607f1b09630b347278cc0a050aebe18a1f060dcd99082715c8de699&X-Amz-SignedHeaders=host&x-id=GetObject)

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
