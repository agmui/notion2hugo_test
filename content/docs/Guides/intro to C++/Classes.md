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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4WU2457%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1RVi7tAElKi%2Bbcm6qFyRV%2FtaiVeL7p4rt%2FoyKTnh7jQIhAJ%2FYkhs33cCcrdNjqWowrrlRUrqcfZROlYfEfroVLO9GKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGiwMPLM%2FI8%2BQsmhYq3APJx%2B60Wo0XEARazgUwjWStAZkx7IqHnuPAu%2Fp6VP1i%2BcR%2B3jaj9s5Tj6xPKcuf1VXDfrstHbiF7Xek%2B78v2ShyZQ947jGRqy%2BjhXhTZ2sleljhXR%2F8aLRuCkG2u%2FbJT%2B0Y1J8t1gAZem6O7pzfStrNIwFYlNSxkfa9kK8ZnCFq07e1legaX%2FBHArDr8yrZ7FRzMtO%2Fx5zyepoTTrRh%2F%2FOs98LNXH27cFsbWSr5l3LCQK%2FjtVVVAKK2ACJSZ8YyIYfzKGPd%2FmH%2FExxqZUN%2BHLam%2BlzHFrYw6YudJ%2BefXPf6Xn%2F96ojWq4GVTQSvl%2FXOWGnKJH3DlOCFoGXlR9WnDLAyZvx6a0IlwtXBGY56%2FN68D6%2B%2FlXrogTw7hGLXKBH%2B3DFSt%2BDnZwkT2nWmfvKiBObSVlf4sGkL2d8Hc5%2BEtYK0gTLm1cch0BU%2BdTg9stVps0Ip%2B1xgGDowzAAmdpE7XcnFK%2Bk%2FM4XyVota7d1Rq1ROZL5CpkHN1YmhKBn5tTg%2BzaaIDaAznc0h1Uou%2B3BUYYd57X7nSSr1Ps8VSvHNlLTzcyVztpUoRQNELnjN6VbRLMB1ZObUphlO%2FKhurdLqzKN5VW%2FuXxj%2BtSQa0DbHEpRiEpF0yEr9ApzbY%2FTGfzDfnbu%2FBjqkAYzbRo%2FfC%2BKYWujPNaruVIaLm96xxJTvGUeTlN7T3CdhzIsv3YKW2HLhRk30wLaiB1tnmMoZDPkFQcg26x7rOKHy4%2FUGmWzwDT5KE6wHG2x4F6o7iPYbXcH2goZzolwtyApbYe%2BUbTzztb8dtQb6re3ayR2FQZWXTonrbEu7qAVxGJFGhjzkMLshTPI6E%2BkYXIFIuB508YIz3UHgfnspkWaODoSj&X-Amz-Signature=bda4cc9ebc6adb09f481407bb56a8ce10cad666fbec984266e87237c375d8183&X-Amz-SignedHeaders=host&x-id=GetObject)

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
