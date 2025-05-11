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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJNLG6KK%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICGe93tJyQZt%2B6cboHHZ%2BqXaeN2UbiGYeTyqr0yPgeuFAiEAoPvKtmXAfYM9bMEPSF4QXYCt1tqXa%2BF2dGXQnGaQHvUqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEtUuVCYplJ%2Ft5g%2BayrcA%2FpkUlUjNMflo2siAPrxCr06t%2BB%2Ft62alZhcT5Njyyvf6UlbEelfrfMUaij6A6fUmhCIJfdckCjFqEOEtLmWvqZ2EHv9vJvM4Fd2SykLUcnsJc3vynWf2zg%2FxOtBp9ej87vPgYu9xjpPP0nE73CBbhYDNpLDBbcNyQ%2FR1YcjzkF%2BjgJvRQEM%2BYNBbfFNYaQOb68g3U33CEAvKYol%2FP0Ntthc7JHWy009FVD3JbR%2BjbW6HbcBLmt2QJqAWRElGrasd83VixDMbboD7kcbynZVCu0jO%2BgL0ds7PhtrIMVfpj9q7srZ2NRcO%2FxpVrutUiS5eooWJznZogkdIO1yz1UAPwM%2BqQivZ4yK2FtInR8wZiAqmDI5D%2BVxVaIhxKuvF2tilmA4fWFNqrUv3g%2FLIKhrA40SHhoG2Kh%2BMevKN3ORknH0rK1OP76HTCB5PCNzJpoogNM12kD3sF8HCqbSVWoZLuiNfa%2Bxm8qk6oK1KciV2iQ9IsPdgEll9Zr18G157Pe83JmihGTwzZ3oJyWwLsOKNGi78kU9aTBpZC%2B3Dj9sY65YQBWdk3aJqXgEqVlx97RRikU9o2eRWoodAUeoxBrsMvZ0MBS0cfL8ODZQSCpGEKt6qqOCYUdS1Z2PFePPMNrLg8EGOqUB2s4By7MhpYkWZVeVTgVYTEr7XunfHZ4jYb9COHZYPoe5gumvLAECC3f9IMEKWvFl%2FjbrPc0XAp3AFOJzQv8TWVEnGJuUxUohn8lTxkal8xXaKDhv2ZmQnRZaArE2R7F1bJH6h7apoQAADMIFilEMeNzsagYSobetc9KezHFktjRbYR4YQHCiflPjQWiu9wZSRgixEtom8wWJzfRCBg1EtuQvchJq&X-Amz-Signature=59a42e8cf7b39ba9f3251be1fb6a6de884161ec1c5d192e3ac2606cbe2fbf178&X-Amz-SignedHeaders=host&x-id=GetObject)

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
