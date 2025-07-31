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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLSBYGLP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmkFa5m9T8hgMd0auXWHOvghV8B9IY965zKA5ae%2BZkhAIgcoPaLq1W4RqrxgRvbDKjUl2n5g1XH%2FxO%2FqirtkdybXwqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0HYlxmmeRw3rxCuyrcA%2BGaHj2NKIn%2BSt7ExnNPidJ9SWGUl6MNfpfktttJt5BTDGwFTKWHCZuPUo2zZmIEiJHD9sbnSyej5tBorbRTUWQogHtrXwtlVJr0DHZ4PZhs194Yf3KpkP4zJ9HS%2BOepzJ0ESIjHgapLrUI2pCxLKMNHE%2FRnFXI8ensPdtVugKu6KjgJd1Pdi7JWbDgIG6%2FwqxuuT1%2FKJTl0p%2BaRh5hUqaOGKfKq%2Bue3qi5kzK3Ca%2B07WKs49WKh5S%2BLkDvHOoFExvChn1bEvkRlFHnaEqAW%2BHwNgX%2Fs8iFdito1zoDSAsS8bXWCYQ21iCh1qe1NZQpCUmHUMccSRj67eTnzeBsSo9StABQhzTz6ybaGLBTaNHc%2FLfILupXOedv6JoMfMDqiy9UJBiyJkrvWKXYytX4qu1%2Bdu7l8iyO0QV391awYRE4RbhnczmyRIvinpBfcASGjJKvMAAMRgBc8tZkj2vbAadgk%2Fi%2FKJztHTdssqtq1%2B0aPexeXG1qhC36mIwFX3g3yoEnAis6SKCDu2uZoPdwaAKIy5ils8CC05I5g2jqW2JzbselUg4QBFGMt%2BiJYObj92NswFEcpq8g9ShfYgQqCw4%2Fc6qVkKp%2BRUk0iBMYl5Hqs0M68FNKBxm5Df%2FqIMKHKq8QGOqUBjtydx%2BQchM1tmEAbl51tTVU%2F17X95As%2BhHNNMVswWiOCqtRvk67t8P9aX8O4kzFWQ3NtleBB7ibTEqeSIx8U69k%2BG0y7nAotoKcMwMV2IJc%2BXL9qHeonoIkfDkSDwzt1nUxU%2BatoZCyuTTklVZIfqmxVC7K%2Fk8FumhqHZpebOkySbdbe5DRuGWuMnnPKpGBEDbPyPzhOk1Z7S0AR%2FFXAS46hdCf2&X-Amz-Signature=102aea7a1dc7438d05ff8c7bc154fcd4dd5aa6fdb1a49a2158b77a601a1ec7ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
