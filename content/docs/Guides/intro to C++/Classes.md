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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SSZ5XGY%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIEhbpLXYxSxcovrx%2FVxMLbhd8FXO3%2FsNLGX6R00MlcsYAiEAsA8hkqSPvSop4rpvG4zmjcjrfq3Q3GDC%2FXzdYqbQd98qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG6G6gE8rzCzYLevFircA4LgFdTf1nvpwvTlfqP0eKeOnk1RNUMtkThPJS1G5LgCEboKiqtQLJKJsI7NTyvXdBVDAaJ4YI%2F7hHICAwyYhG0bekZvxA8oUYW9yUexGtPl4EG9X%2Bom0HIt1rsNSW0uPmb3bapyki68wNbW%2FGZ29gHX37D1kA%2ByswsmoTFih0RJMYSIBVsDlmSLpIjL1WdNpROA0Vkl8mLoKftUOjS8g%2BWbK9mUN5d3O3cuaWhXV0pXuySfKJuAn1ie9o2c1nPl%2BWehTxnSK%2FkgCh2d0hC8B93ujP5cLE0hKC9OjJx%2FGqLV4s0F6Sys6Sq8djQ7RZMDc4NNxquLgk3RuRJ3VwqNSaYblx41ecLEQTX9rpSKzeGPFp2HZpYrTGcrhWCvYm3JqcxOzeztMgXvBW%2Buw0KyuqpqlnoaFDR9Hrnokz5T%2BO6hQrSOTJ9YMUL4DLh0%2FgxvD2FkYrlzIK7GUs4dzDsbFVf1Vsud6If0gPQmVpE34h7ffvTlrGq0WbQXnovHF8B8rKWvf0E%2BprDWAE6YsnuiH8IHdgvWvMu2%2Bj%2BiPWu6U1P2xgIx6vQSoJoVnyGX2rY%2Bn2zM4MSsTHoP1sXke33bV6eIc8h5o1480JSWCBliLX8DszEoRyd2ejeZfhyxMNyBq78GOqUBkLcvTTOmXLDsECtijhqOOPPQ7AIfjO%2Fx%2Bb3YRnLoxCC%2FIXAiyystLfNFhJdH249A0kEYm21RrAFzjB02NbEuNZKnNhvCc3fJ%2FLYSMWYe7JieJhbw2eZhix4sk9P4NymU%2FaoyYTx2OGfdnPAfWI7TzYyyrkPjBvAcH5IKlWIgUO1ZYtUHTHPpuG4X5bhNO5A4yZ2zr5JUxGr2pOGFB9ggaq2kUrkt&X-Amz-Signature=c3762a12b5ae51c7976c1cf5f9a81020a804f25986eae11a30f44d8a74cb6081&X-Amz-SignedHeaders=host&x-id=GetObject)

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
