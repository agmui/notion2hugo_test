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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXCDFHB5%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcq2LjdkW24ykTJlO5XYbSg3o%2F6UxkFLqqIbcJKDBmvAiB76%2FaKEl5qvM6VCW3HnLWQFfMTNWfuSAL43lCg7AKDtCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWf0ByK%2BCjevQ0K5cKtwDDCap0%2BYoHnn5w9Sbz9guXper%2BENfF2EEZ1ysDJ2GCkpBHxlh3oeggPLQgOl1qY1HB%2BFR3CFaasKa6b2V9J0%2BgbTeQMqqQINVs%2Bs%2BExwmzMlQbfInKaFQqxaJ%2BlQHfsz32M%2F0IEymCBhic5ICB96dlnammSeWTzc5x4tDLqJXDN%2FPtsJWR1z3hT6w8N9rfforW77HC5xJLf%2FGQi49eqr28msPYStfHlbWALJXFaYqSVntU83Wd%2FcLcgiUci28UWYwO0GQ2apsbQe7kxQFNZNBseqp2qDwDNumHxa%2FrSuBj7TGQURjNRd8cxX5IWwEXUgn8bN%2FUbs3U0ISyghSWLndTjTJov4E3oSBkUbsNx%2BnavOVYu%2Fp3rBKvRMQZEihK%2BKguESNhJHDfpT2uC8Uo%2B5Q8s3K0hHrMOOhhJihh9WpscW8VglJMr5nUXe5yeQ%2FIpN23JYv3Z63EFLEEuAxaCBHI%2F3WR00ctPHoIWzPp%2F%2B3IeP%2FfCAJnH4qEACze5cQJukll1l%2FLrPBpEwrApczujM0gzkF8etj6pCVL6QHqyaAh336a43vZdBXglWzZfPrm8ceJVCbyKnOAGs4YSJq0nhAtnxoCbHJenakJB%2BUByUTL9j%2BNHpj6L0US3zh1OUw7Y3evQY6pgEXLW8khkQL%2Bnrd%2FwPcAm6uxSQl7uHg54o15v6zo4Jzq568qtLuiQJrTULjLH3f9ejVDsRJTZfUL0BgOd5Gj%2Bkk7bTXtEidIWh7lElnDtvbhT1YKPWVMvvM8njT1u%2BZu%2BJwqv5obz1IwqJluxHKJvwBcBLQ0bf61lQGm9BxUG5XgqcGfJCTTr%2BRyx1GGufjQ77OU2ma0yRaNgiBrmLkinGYopUJHjnz&X-Amz-Signature=a14db0108bee1b834f4f5e1a954bd745995b5acdfe1a14f36b13ee15f0af1b69&X-Amz-SignedHeaders=host&x-id=GetObject)

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
