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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDSDA42N%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHz0j4eRHkED6sbo1obW2qW0I1BSsPMoYA29Fj%2F6dVSAiBjBOu%2FUpnlhOOVd228ZJUfxFb641PiBjmOcVZN4TdTbSqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJM%2FvgTZurZSViNd0KtwD4BMmNbr79CAUjdgQ4dFRKePnletTtuQeMCv1IuVWz%2B%2BrsnEgom5SU1zwrxvz06RyFrUDh9tOkjdVSq2VvQt3JOAP5a1om7QwMnHEWofXyQqolQTbW%2FbAcMvk%2FRRf91cCERZerA4YoQkuVMH5wckf2%2Fb%2Ft0NjthJMmoRvMoAalX%2BsMOl6mOdghWWr%2By84CBfCY72Aq1x8XwnxRgIz7YaV4VNLNXrkrr4L17OZGWVJ1kghqEmqi0tiMNlGabZr%2F63%2FTgAUXFqRAb%2FvCfPC8i0Q4caWWqmdbnBwh7flV144%2Br6ZJydyThKYENrl5MUuvBwhqNpvBrHezivzYHKyuqCHvFj2K2zf%2Fkb5dDqgzRRZ7%2FllG9E61N%2BD8vYoWi0djVJ38rkMIB%2Fpc5XGY8ldaQJCLTZ0mXS2eGGcsj%2FWcQJX5r13RmlYpKyexLD59NNFj99HPedhHjcDkKIw8iQja%2Bx35cdQMN119n9Wjv954nvuYn3sNsNJKx8YIutjoQ%2FkeQQ3FmUBCskycndZGoA50R3iTBmo%2BQsJI%2Bk2ShrOHWiPBfFRHE45n%2FfgGKl99QC5icH8Tv%2FHWFPkPQp5QaOyIKGD1Yp5IvRpWxQlu%2F%2B6yg8G%2B%2BfEp4Y%2BReeyrs29hjQwz%2Bq7vwY6pgErvQzKt5is%2B3WW5DiTGAufpoq4qLXBWNGGBxjZLl9X2wh3soEG6LOw3UoIRhv6nzWyeR33RHUGFjfDI%2BzsLveNEVrq4M0Myyzw9nWYSThTmOGdodDGTtdRcMYjr3gHk0XlV6JvhdxfJap0peWL4bEfS0gNiiPjyDbc4YyAUAa91pNzva4f0sObOcAr2ZzIiTFv04LWcUTj2bEVE8poMPI7Fn9KqXcu&X-Amz-Signature=f26906b09af156922353e1437182b048bc2e0cc96fcf605f85c2ccfb7955470f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
