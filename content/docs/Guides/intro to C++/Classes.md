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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WX67UAW%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIGo2FhbZw9lLRaBxdwAvI%2F9MexFR4BcI5ga5k0zmboJ6AiEAwMor%2F1cmRT%2B4G3ONIx1wN6DLkBjbJFRw6gipotSKnfQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJITow%2FJjVDbdH0FSrcA5%2F88ND843pOXKH%2Fm38h9AmFavK%2BEcoXTX6UycZRiFtnlFjjqjyF1WOVDisuLzUKHbP5lInbJXtwqdwzwYnE62oe%2F8aDkbnWhEgJeSye4ajSWDLEdaCRYIkEU7%2BQpOk4zFUGu711%2FEyJGbMsTn7hCNRyDrAo5T%2FkDqUfytxaz%2BI8GcNMQkoNqm0rKZj4Z9uj34xVJc4yvDv3IizMzr4f1JedWKeYvjWEqzISv0GvU5S4Ch%2BkLJz2%2FXF0RlfXkf0EuF67%2BPQLJHFtqIgKAFf%2FeZv%2BJXFVq7uFW32ur5WmX1IQmRvVQHYZp5Qn9Mhq%2B%2FcjkEtsy4Xpdv%2Bb33HTJSUZlDWaDRrVhIl9Vwf2%2FNuBZlblmLiqDEbUDGA0puU8kN5qrAZBbkQBNpQOk%2FLscS5rEy9TdpxWgHmGWCxPniJYR9KPPruDzJcqkTvCqs%2FKp3m1ja3OFILxQ%2FUSrl8cgx0%2F1VTVczbuf2uUx5TcPtMrn6rmG20DI0fv1JpHt5AHrED213L1FCux8%2BkGQFMkauZNQoGtfbMKBErceHS7fQrkSuesGVydyPNwP0mlRUgp%2F1dSiQDL%2FokvHWzcXPgMIcYA32qxRZnTQwzEh4EaS9SV4Gbsdc%2Bzq7t8%2BAlMDc7xMJWEjMsGOqUBDQZMuTQPzfDIEIktX3Nvr8nt0j5%2Fv1io0wXoKpbSw%2BNWkwbggF7VMCg2t1W157wvs7heg%2BxR3TgWUJjOTAZcAh4lmeuNiJy86M2%2FiwBMWYGSVTzlGhB75C2f3OH2mfAwake%2FY3UD8deZDVYNNbM7yGCX%2F%2BJD7GwSAKJIu7FJgNlZ7Sg3Ypu8uFIgaXcvasoTtjm4CLIRRAnKEvwuwLqgcGQy7oCu&X-Amz-Signature=5e3d2073904a75b9ac35d50cdbdfd351f24f44efede4558404c3f61c7cbe3007&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
