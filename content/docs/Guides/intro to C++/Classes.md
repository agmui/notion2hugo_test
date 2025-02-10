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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDI65FH5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGEPNbJ0RqTub37ausFo%2BOXBbqBWlQ%2BsrBZw7DVsU%2BRNAiEA2%2FK%2FvhrscOn5odFZbcbRW9yT1Qz694f3JSkGrx0xSa0qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMFiIPL%2BGOMPo8zmyrcA6TeBzjKKeW%2B574f7nGu8IZa4aBYEzeXNy%2FDnoSNrS7OxlvCW%2BPOZpYbqfqXF0OmcVpN3gSdyD8%2F25jJM4HOpyeE0qGzkrT3Xo3qFs9br%2BPC6DVnmvJ53wf0%2FV9CxDVvB9Z3auRk81xEq%2BETYthAIblq9kEx2OnG7fyUU4JeLO7kdFaOUpGGVhf85keeKutTuz2QwX%2FlBEXLx%2FYzQRaYls0bxCxcpoAiFOLF7qZF8IJYihx5QlwVYCVtrCIy31HdKggFY6ph0xx0Mp8vd1xGa80tkapiYhcMKx6cPOsqWnyUf0jgdh2KmpTiz2vwsB6pNUijtnFDXJ13RM5iiROX4gK%2BJMH4OjqaT%2BlmfmE4iAUMQq7NhigZu%2FL7yYheCCNEaKppI2kJbhcKZNSMvcaYGVyS9pY3bFaDNPXMqMoCDo61uvZ9%2B1tIQ1TisqVjBrumFUMMPCuHn7n%2FQfYAorxs6BBKpUijfypJQyLFE6sCIBfR4PCCi1o79Lwi5WUNO5ovlFYNWkP9IY%2FvQAijmJEcWYwATmUgILPAoJeVTLUxqbY6xMnnh3SuLY8%2BnV0a1f6F3%2BCuL2CQ0NTbvy3FU3287FZWZyfG576NHlWa%2F3HEKZJyQ9liVARBNFoQX3njMIGYqb0GOqUBd9Yaqj%2FKy9sud1ocL7ZSNk9thgGRHkvRsob17H9i%2Bua1vmbpoJY091QLLEHZRzZ6QwXHHzh7p4LW0cOw8vymC9FGsgGLD6lmTtvowHT3TAxYSTcRB%2BaV3nPolotlYihlHGfJm%2BjrqKjHvQm1ICyxrve5N5N456ciTrvyfW%2Fk3p8SLa7RTYLt4t2uSZs4d%2B%2FZkWQKZJRV4OhwxTutMlQGYpemUZ0X&X-Amz-Signature=24cd34ea88c59eb0f0669bf959b6498cbd626c88c655b0531299c6a82d5cb9e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
