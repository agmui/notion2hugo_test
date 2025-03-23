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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5P7DOL4%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIGTpJzG7rdWzZh979EIy49qboydmENJBO85XXaPtCANKAiAVdnRpEl2%2FZQW90otuo%2Fbf8S4%2FoKluhZiSt38lg2Ma2SqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMymJJdDj0Rhx%2Ba%2BSPKtwDiDm0FWy9kXZS5P%2BkaYfcqTG1MqTI7nr33MYEHy67O0Ed%2BQlIDSLQhGcjvC0rWfJCANaXDYgxZI8kbWWNKoMslPp79q9DlW1PL1R%2BTFPJbAm3pm1hcvAwL508VPjL2Y7K4npuYxBpDXumifCkRmJnO6%2B62DW9yBGa%2F0HsbTvvAg3y6t5S2K58y%2Brm9HuEuk3SnAH5%2FSHrgT1lkIyxyglgC7KjJPxh8qYa14LACFxguZ2KrGIEP0a5lxGCoM6ELIA86As8shueBhsKl%2BUvp3j5seIZ3cm2VGFWXPENLSDP2Jqv8BvffXAWN8t0V2eHPIjpMv%2FCsDy4S7Qz1RTGkZV2u3XDnEIukU5fyfPkUWwAA8cDZMSRshE15cgQ9ATK7DHOA6nTOj3Xewa50ALX%2FdWGox412FP0%2BKCsj9xyIbE65IGtmoixZMiG1lz0eYL8wQQBjM%2BRP3b5lKqPIG4TNmNpk%2Bye2XRr1kPHHz6CS5O0hW7XNcpcQH3w2pW5mvv1S6CDywNWATKm0hvF2KraWeOkO3%2FgeVwm5PCUiX1H6%2BZxWxEFjZbhzJQi8r25FDe2C8fuvplSFhLFN%2BP3Q50ze9%2F8Ycapf0DkYYrTw9CAW%2F7wh0SF%2F0xlYVgV1PmY%2FYYwvpD%2BvgY6pgGHCw%2Bc4hlfB6gZikpI1GKIL4gpAd7hWStxQe2A9gqK6%2BwjVzVGkRvifJYIC%2Bw%2FJ03fUqtJFrhzGSWG3Ghs6mhhWsiJnztYhWP%2B%2BUc7Sei1zNAgiyzkNdwavR7fzJfSX7gVR3YoTPdVvf3Bofv5UTTHMYF6AhBEk8TcBrQ4MvI7MXHrIxX%2BIaVhKcp2mI3Bzxmsncjg5lCm9nzIXKs6leQPLX9mAkk4&X-Amz-Signature=3af3d01580a6d1bdf6b880aebdcd21b828f767c409e00f57537ecc2b1fa7d736&X-Amz-SignedHeaders=host&x-id=GetObject)

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
