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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CEHFY2K%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T190642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQD50MxoYnEpF4ejEPP3uZ9oqL1mf9TMsFwTH5UBIzQ4hwIgYvnfDVL15HCiFXEjY4yWm4oSftgm70TWnugKr%2BK8xtYq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDBBUTKohP6SM8W%2BcMyrcA6QaBtC4PBnqU%2FJ0EBbnvL7iNhSymium987aXQfwzgwOvvWEWF7WZaoHPg4px%2FEe74rGk5llC1Pqn5LJTSpeZiewNyVO%2BzH%2Fw%2F6P%2FEpO4QVSGDGF2ph8u2A7Kc0rDeTnjgiK4BS6DFk%2Bzv7aFivgwLou021ivkhfBK%2BNj7J0DHjW2PU0L%2Br2%2BxLupy2V9QeAiov6rRA8XFIyuKiavJuEX%2BTik1Qh9%2F2ytEl%2BOuVIiKu5%2FOA1QBJ76Xnzc5k4wZvGrrAoHqV1JU2VMSr%2BDo6tw8n4Em5MOPr62ijuK4OiIrkNAM5SeOOs5ZZutriGYLWHOOhbHHZxPsvRjlKoLtD09MWPNpZ88zUbK6eUprrcsehHbMtDnPm0awQjgxIA9%2FTaYL%2FAd5sfyv%2BRPbq8re%2F7afbkFqI7FJecAsZaUQuPD0cmLikQmFfi%2FyQOB2%2FE28yyvYjYypBIjiuKauRX86sWiPWyDK6s15HvFw80AcCxxLfuOJO24MV86OZ2cLVdrIEq5OEk1caWC2ZONHZXlI38re5Obn6zrc30iHVf2Xv6pvVNvQzxwRgAdo7gb6Z4P03iZnkHvP4DECU2hebWi2uXsJHOeODdbElwfvKGLgpdedfDE8o1TWR0sg0tYsU7MKOQm8MGOqUBe7jia%2FxogNYcRYxY7r60Z5H7pxYijPD19L25Mer%2B1n9BOZ83eptfKNFkQVDzxFyCYAZn3rHYAxEtAYSKojmX5Q3RBknMgLMP51vgkeFDmUn%2BcONPNVGL4PD3hAJxbrBE8dIQFvrGErTW%2BNQxmW7QOnv9nqqBu5Q3CQBhv%2FldgvFHZUDrNwMwJmmH%2FbvYzB%2BBiqD23MjCRMuG8PB1it4p5Zmkws2B&X-Amz-Signature=313d43bf95fd7be48375e150e03b635fc7b71bbdaf74e013d56b4ec37e1e9aa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
