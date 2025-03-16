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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W347QO26%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHVkSrUMyAvoWcVDKTuA1DZGzvL4zS4M0y7elvBSpKqwIhAPAp1F5uslYssaYGv97Xj2gLx%2Fjve%2BKMZ3r6qN6tROo7Kv8DCCAQABoMNjM3NDIzMTgzODA1IgxzsBq7hnRhxaOgwQMq3AMQ6AyI8NOmFpHHIp%2FoyJxEaQNqSI61pOjrc1unxDwL%2Fo34prq1T3q6jzKXejIYCrQg2j5HagT41eH0rZFuSkRvR%2F5DQSKM7Qh7a9SblaWBsSpaFbq57pGVCqUm1fZ86my40YCYsAH%2BGnI4nl7SC6ZqNrxHomQcBKwH%2B3ox3PszaCe%2F6%2FQ1QbO95jV4PBk19jIbMjfKqDzL0a5nPm%2BFw0QFp98AEHMU%2F6HTy%2BSLeDOPamESy2fs%2Fskit3%2FU44k%2BVyTezsYUR%2B8FavaglO9O1UUVDroJYTYGQ6AyGiLt8g8FbWWNTHZy5qPOAi48ckvUARF%2B%2FBrgrk07C%2BSn9gwjKko4lDpPRzGWqv4fGiajj5FcZtZHCKceE%2BOtnw9euMmoUikVfpR4%2B5FNJT0kV2vmNDfeDHznLOB7USTZ49Gu0I7zV%2B14nQrkdXElUCo9KEl6xJFGsX%2FYmB%2FPMMVvXw1EJxZ1fUYg9Uta7wBPqSol%2BpOi0CdMDKPqvXqoBhvD49i5XkJgHGyl6rOVapN3KIAxCnqnV7iJSmZhZNmHgmzaCUEjIhqJxVBE4gxgOeR99LSUSXPqqg7l3oFQrBeukMP6449aUjrsinrcf55RhKmx%2B2Ak%2BkkWyJj%2F6%2BLq19cg8jC%2Bgdi%2BBjqkAd2oMrxzB4hgvhOMGS2W6CrBg9l278%2FJ0N53%2FLlYI%2Ba8K3KDpw4SwpTZc57ceJDpnkAMKAhxB3IkNhJeH3m2JN4HCDtzqBE3JHqUy8Ud%2B4zfpvwbB7omc3aICsEPasyHQ0Y17SY0uI9fzgAEw2Hf7v0KdugAUvoB9vEC5AOTyloevimhpccyJIDZ5V7p1pEU%2BBW%2BpT0kH0koW8RkaBbQCy8JsyXE&X-Amz-Signature=6dbc3c647a32654c72da9e2e480a7d8983f85e8ce07839f6a6cecd0d53554a03&X-Amz-SignedHeaders=host&x-id=GetObject)

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
