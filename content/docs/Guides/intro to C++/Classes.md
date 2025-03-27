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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHWLNWFR%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiUpzZHZa%2B%2BDQEMlNLxDiiFa4fBKDtvl5sxIQrNlrDSAIgbbATNSV5NXWVtRN8bTOsZd10hW%2FFOgM2AOJOTkQkH30q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJ7acVnXWIYYb9uc%2BircA712tlA9ZXhTIqAUsxhTgUg%2BwSrtZf2kvzBcuJvi1ULj14nL0Oyd2mOxoA%2F7AgQfrlTX2nrY64NNp9O5xKPI9PCOoMhOvzbLBnE9wSgeDT1ZLgW1RNgUyPWUY2kaFY1QgjXL7byAswBhfS%2BYTzaZ%2BOGZYd4boad8mRy9wCocl6H19GnUTOOiQIAfMrqqNtOEk9TDMv%2BUWsrV%2BrBolj%2FZrTIj%2F%2BR0HqPx%2FSW%2BXouMHp6M4ql1QmiRc95MjfVsUEyGwvTAiMDaGzdwfpf%2Fv3UjcsPTIXeaLRoAStifYiUreOoOYjHBIGyEFC0UrQ%2BU0MeWkUnJjBJLN4%2BE0QkJDd9d%2BXewNP4cUHspcNDI5appA8LXad0tLDPx8gvCCCkP2osaMaXh7LOWy32me%2Fq%2Bzl57%2Fd0X9qKYDubYBwdAi5UBt5okZ23Tp9sn0Vp1ju8qcXlz61%2BlxC8gRo9x75rNvmhcuXdJYJzEGNATMtKA5J%2FY9l%2FjJjFlsde1TvyE6RZFJoCuPVAq%2FCZHEQp9KPXDSPuJBvPfKeoETQdXQMl4FYxNf5qHhIHy3%2FWuMWjsFlCc3xK%2Bj7Ibequ5gbbyClagG23f3Vgb48e9XIU5QkvVGS2qYOe1yz6MI%2FRDJEv%2Fw1e4MKOUlb8GOqUB8y9gezMNNlniULrXX92z8KKgF8S6M%2FwyqvfR2quUK1Pa%2FE5FuRn9ipSCoRUW5h89Zjw3mnuxJHAaZdGyaEMx4m1l7VZyXqcJvSVVgHSDu4TUccV92mpr9XBOM1kPW2crHgSdDQEpLnizp1AwOrvJZ6%2B%2BE2qrgiG3EoAYPzqmpjjnAc%2BAgfDA3TbF3X%2BJPQi3dZYz%2FbPTQd2zwih5OEErTLzKN1Ot&X-Amz-Signature=62f532ecc5fcf679ccb98be9a3966121da88c08a8391e1d8b609e562d46521a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
