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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMXEMT22%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCnz0TZO1ncPLwRafGWWiLHM%2BhJLse1z%2FruEfEV676EDQIgfsJpVkM3r0CrhhbRESGuQGxTUzYmORojdMdhndysG%2F8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMJXL4%2BfgWfWjRH61CrcA93d7a7l3UsguJULLrny%2BWtjDwa6AFY%2Fh55FkTS5hrhwXYGeGUlL6qk2hZe%2FDWP7EUXE7cAeN9ApqKCrSvVGp%2FCN3zKgqRYjwzPggMkVGySsTSlAGm7a8niEgDd3Gvgxu1%2FA7paLzuTDP89tXM4q2itaTIfj9FFrv2Qbg6bYg2zbPzapl3pP4qWyH3GTjvzmnFN%2BfxO4Z%2FLgo6KqknxAl2A41LGM%2B8%2BSO5WwiW40u99hyi0r1k3Plr867ADyQeNZTK0wOx%2BsRMskVDaNl0X7n%2Bk38wQ6IPayyWvxpGV7cUy3J6i0Kq313%2FTI4sM9KPIBvblMVTOrzh0J%2BeVXLeW%2Fx5XwbsUoWRfgTLsdZyqVUzilkYoXtclepq%2B9kRXtV%2BE2B3egjSheuYt5B9eJbYt4P1ZSQPMP%2BlvsMHrMPe8FMbNsYJ00KFKZaLW%2B%2BDOlxj6jRt4ljgk1jlFxTt1Hm2vVU7lfCRTm9PgQ1DWfNF2Ry%2F6CszkDy87OFovzL4LedE9baysifnpD8pfSgsJtw0B%2BfcVwBC0FtNxG5KLtT8d4DyW7102ESxCNXZ5uEdDtJ63lu5XIk7PLF%2FrERZ4uKccKmby7BkZoilRg3JTyGWZRLa9qTuSbYh0LhdTfCwFWMND9mL0GOqUB0V2EK3iH2d1JehyMjlYDXujJn3mZskTj9GcPGG8BV572mEu%2BVT8xfI%2B%2FEh4Q5BHQSw%2FSY55tev5w2QEBG1NezZTrnS%2FG8qpcevOYbM0E5%2Bz8yysz%2Fmqo6Ekp7TRkv2iu24K3auPvntDns9gUD6GczP7mLLHtpX%2BZFv5rBWCcWvIsb8eRMMScqOj270YgWpRh8WVGOcy8k9OA0hxQqwu2CSJyL25Q&X-Amz-Signature=f59e4fc8495db5f1b189307da21ea7c9d7e4dea2ec3d46ccd8468f98b4a76077&X-Amz-SignedHeaders=host&x-id=GetObject)

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
