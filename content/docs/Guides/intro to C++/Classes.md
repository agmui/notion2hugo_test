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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REFUZHCK%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T090658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2e0MpipKTeFuG6loHQZw1vtIF5Kjw1mS9J6BvBhBjBwIgGChO711xdMP1vEqvxfafsK62NoXtvH9hpNei2rRXqd8qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpNgcmXZ6sb%2BX8QkircAyTbAEhFOtLNbdRD%2ByB9YbfnfyVyiKAdl%2FmFWX0Pptae5c%2BP9wjbAj0avUG7p9OCWi9sSDmKzKqQqPL2iBuFGZ06JJ6zLqySDj4lHUY8%2BUSsbxQdQQyaY%2BmDx5ta%2BIQKHhZdm9NyKfHCntdyIP8W%2FvFfN6%2BIEmgVKqqM%2ByCiSuCxoODv64Ay7S7XlQ7KX9lS6XYMg%2FcEc0NhqojQoOrRvLuN%2FKBOoXA9RbkOKdNisg%2FtmbkL4n9bU5htDzVnOii98maxAJ2gKfOi5c%2BTV5X%2BM5HMiorgBfAAiMdhTu%2FV%2BVGRBtistsQY6ZpC%2BEFV%2FlQ46ZaVx1AK8XK66c5g3MTQpYN6%2F07cxP1NCjJOX7697ZFLgh5bq3WjK3EGs3wIHilWeBpZDT1E2%2BFX7cgFvwB26bdUONxz6kwgnH3vB%2BA7SRAFBzeKK5UfwSeOBE9pUReuPig%2BnaPjjRDqGreu1sZXf20xTA%2BX0PlDZYUcZHM453tSTNiyS1Un8Gl1vHpQi1mj0TRUiE0QzaoHFZeNMSWWpVCWVx2PT6nloFRtuyZbjbAcXJ2pVbJviNcwsETia%2BwXucNJ1CsviOguBXnbpJAErIftfyqkrHDac8lPmRZLbCjuqa0wkys6qFN6cal5MNX85b0GOqUBes30hZ%2BM5j1n9Biv2svYpGZi3XdPtE%2B%2Bz5S1mEbJbWDodDmyuQLXq56JYHDiArxy90wUQNX15zTrVqXIU%2FUSM5jpzr3Qq8WcaJA%2BK4G0LmamA%2FFSO2Jz%2B7F2fuX1TGQpve2loOrnSxNmAdGGh21mNAFzRn2ItpAVUn%2FXtQ%2BDoLh9iTQlCdjgzc7I%2BqtcabNqkMBjW55N8BAioxPpuxNkUcK91qcC&X-Amz-Signature=d26c002fa3037f2d8e3709f2864a9fdc8105af6b3ca0e20325898dbaa07049e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
