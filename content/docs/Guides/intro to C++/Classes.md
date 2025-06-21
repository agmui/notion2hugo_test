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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y33GPRL3%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6yHvIPXK%2F0ZSEKtntHzbgrNUoVZP0sYbbdAhR9O7U5AiEAivGHu5OeRQSfOm%2FdfCeKld4aBA8BTvxl62ItLuBknSIqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BszIUR43k4pIjh0CrcA5CB2WfEJOZOtpqoyBXgGZhg4%2FThe33QrbhyTHdoGPu5sKHq2pTOw9Rvp%2B61F5%2FfdwFq0dj%2BYVYA4WOeAatvm%2FSbffK%2B2U8B0Oz78o0pZ5eRsicIiYlujLkrDktpM5mABKtOG44dr%2F0iAMJNROsPU%2FBWVrY7lbP2l%2FHYBmij141vb43l35SkQGd6M1znAI%2BeiJAA1VC7clJZM%2Fr2Xx1yT0BBmpPkITAjpp%2B8Pa4UtiiN%2Bq1uyzaOdxnD3hxOASYR6V5fOH5mVzGny%2Bf4lbKDguX9rmMMeK%2FNK4BqbeQ2zED95vTHqKn7b%2F7BMBb4DdZ1MHrXHM7X0KtZP3x3yiIjIsbZ9CzI6r1JvV85Dxo8zgqSc6JvY9%2Bc8GiijHq8ylr0vep3%2FZ%2B9Rg6d534Fn3yG5ygl0tTmo93hOQ9AaDG2KmWSbBcLneuew9YxaXmC3j%2B69Zw6LAJn4im%2F2KK0ZjJBw59%2F%2FjmFg74VFXJCmXbZ1kIzzpk1e0TYwQwzYlK5n1yiUZmKiK6J0DbVo3jk4KoAGNYZNJBLaYDSug9IMa5sYeJDQ4%2FhpDthgJUy%2FeGCXGcbjykP1mWz579RuB2HsqmWfJekyZv9Fytn1vTBesaCeAbjsxe4sTqg0DDiwAp%2FMIze3MIGOqUB3zXzu9hrttXqA4g1dy69qtetWMZqK42n85AmmUqsb7Dy%2BkQokWsVLNMtTl7rfMJCQ86k6yBN2eJrncPaYy8XVPzZ2emZzJ3Yor7xv0VbOB9zTZjDFTuVWj2QGjzD%2FOsvv81YJ5CU1xn9QvUPnxwhqaES3O2qpO5De%2B7HSJyODrXVf6i%2BCUy5XvZDacsClfNKIU%2BfkGD3v4yyxtcOeSasPj3ixHlS&X-Amz-Signature=481e5fb22158c210b39dda396f4b709447cdbd1803f6f9c8ef3eb5a3023a3e3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
