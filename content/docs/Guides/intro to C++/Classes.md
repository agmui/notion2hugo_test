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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YLYD5YD%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCbnw5KO%2FTwk2C6T%2BwlxeHFeC1wg%2BWN7K02mlCrDImhwIhAOSBazs82zum%2FGywfG1t0A7Xx2ecL%2BWunBw749yozvjCKv8DCBAQABoMNjM3NDIzMTgzODA1IgxWs64ouhpBt74InIoq3AMhvUivjP%2F4yhr%2FoTh0B6tQQpyrMjcZsqF3Ie1gfKOwXj5YT%2BhpR5XLRKEnNbNPCVs8VzdIq7s4SRQtJ3gbSPjzXrehnLHibrNxKblLHHaLTKjGY07t12e9YHUeux6C4EjxvBKBaX8VgQ4MvJonHJ0vyqIjs632qme4gaS4nXBvvbR9T7iOarvkvSSpe7Ztspkh1dJWUglZbgV4%2BH75FQ%2F4fXaGAUMfuXzQ03uZRrvTtQ5rSeZMolyxrg%2FyXSDIIU0Ff3xjCipEM2JEy9rzLOAIzI9CCmVdiwrNMaBjEhVXqgx185QJdPHyzdQp28MZFopV4Eiczj%2Bm%2BT%2FsCXHBKMN0aCByYtKWRoH0ie%2BlwmY%2BFyHyE76%2F2rxyQJ%2B1BGxszYAovMJGuzfTxG0tNOC42M9k7cZK5jJCe0AROADETVDQtphu%2FlDHlXMUIR%2Bcve6q3QdqOMy3tx%2BpZMazDgUEHbNBxfIoNMyYcPmYxjjRcoeScI98r2EAQ58cV4FoM883xA6LnLejizQIhpWXQlo%2FVS%2FvBKuwj17kY0jIUPkE0Au7gUC2RgWwHrv6TaItGDJdOw2n7EHPLK5Sr94WnTqcE%2BgCZGY8wYCsJNuTPGMK41AvxXuLmrOkrkn8zgcvNzDB%2BL2%2FBjqkAcY6a%2BeJbV3UXMsafEaf8rjP7anFIIzY65sdc0P0mwIfOGH%2BShfHo9zMJkOTVnj46JVI7utIdvC%2FB7teE6LrUvntvReqrHOO4ygeaistsGGFtare4JykW4hJxuupLJFRZI%2BtEz418hP4i4v9YiU5A2IB1miW5IzFdZilVhE128QEMVRCfCjCOhzScdAF6SfOKrMXeOuqJvKcWVc2QBbYlWCMs3mQ&X-Amz-Signature=0d189ec54d9941c27cb5c0394f88f6a56f6f4aaef35d0f417e07ef5746bfbd4d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
