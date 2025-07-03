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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFS7BXFQ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIEqwZa%2FLi0uBJ%2FCmQ6mkXUnH0T76tJ%2BmKloYCalgoi%2FyAiEA3Cl97tDnvlm9BDxMpif2f09Sql4%2Fw8zxjAAZg898ruAq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFHXvn9sTQUUzs%2F8CCrcA6qQMjL9%2Flt%2FwJZ5uIwtug0VS0DSyhbxfFcYeB6nj7ia4c4ABBjulUtkuVsNObPC8FZiHHPrZD%2BfBUSpe%2FZMmCTWyW9KZB1g7%2FAWb8viZ%2FsG47%2FIa1tCFyXPCT%2FXcXP9%2BN5Q7u0ioJtanrGIgwk%2BFsiLPOOtqO4T0CjHTL6IzFi36QRQSL6v22UtPL7jXQtV8lSzSP2KCYja59kmwzb2WzjD0C%2FlNB7kRAOA%2FzqCYx6xa07rwyGdMbcofUb%2F%2BipXgQfniuSlM8zeqVq5ClcnHfYr5Kz8KqhTuKBaTFbFodifZQOzzL3z1iL76XZPItcDsduhva2llNFwUL3ckg52CEpnIq4e5Y8Kr%2BBQKt3GQkuubomf%2BWwkwiqc4C55Awgl52YUJ1uppCDlQ1rIvjdsWDqzmuaqhRqI%2BrTqmvh4RdwyFaWlVcxUWs%2BFvIKXnllSDErgQKyx6xVtjLW4LBXIBZLbSCgJrqSnGwIi0q777V85BE3f4grk4SwmVYiGxn31vDdaj%2FCkVBiizKWk1deYIigQgyZvOG6ETAh7HDmT%2FZ%2FDAOde86NXRYBXZ9j7TVdnV9b%2B1%2BShnBGKZQtdyvJWeW2QIhN2x0PHWTx6pP9DlxKeKz%2BgjJJzvOeBHeHJMOvemMMGOqUB1V0MS%2FpuJ3Na5KjK0iglkqocWs6HD8JfNr53yD79VDZxhGMovRWJbip%2B0EmRa42dmVlMJCRBqb1HpgAdBSvqZwmKJq8e%2FDl9ROCGcp5G4H9%2BKVhcyoBCekgxzYZjgf%2BAuL1fSACvktKEf4CBFxZpSuIrEij6WKssSLxAqQ%2F9fIdGJNn1FCN1SkjJntquZHOunB1%2BZYNKx9LVhMHWct4Pj%2FPrCLe6&X-Amz-Signature=01ee30ee84a0d22249a40366850b76b8f833c6deacbbdda8c9837e4e83efa6f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
