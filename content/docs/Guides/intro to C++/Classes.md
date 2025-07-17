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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKSGLBF3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBZRQuZd6UgwvJF%2BkH8L3HSqOW6NKxu%2B0RkhQSLJnZ9ZAiBYNX49azQgzdXe0MGKfeHeqA%2FuVl6Nd2hAg1QDtSJ%2B9ir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMh%2FpzOPieT2mZIxjyKtwDBtAZ%2FKZFWahkJkkAzmOO6F9mRjC0IMm6%2BsXbSP5v7fNc1bqVxT0R%2BDIyxapxMP3spvB3E%2BvTM31SWPdDrUeiGTQc3UMEctbB9yIPPe9J5EsjI7Ib91lZU4RUMrMo4ST4jtYMnAbHbp9l1dt3XLE7InOE3E5x8Ismm2IKyX3lAMcFaOAIkPA8WpjEveTa988Q5cR6prLeoFA%2BLcRiqSXS9%2F1OWoAJ179HsVD67uUZzqwHKdP8b4Ch54ajfvBHxZTne%2FukSY2oXTjivEdel2HIhSp3P%2BATR8zYQg6Jj1bKbectODBPSg7%2Bgi1jGJeudiUal%2BB9JINjtTqWSBWXQ4%2Bv3cE9iFBBh9p8jlOT7B%2F8p0kmZ0sJShgwfx53XeD%2BV16yd%2FmY3N36yMv9J%2Fs0bfY8Hwdb5QnQuYxtbuZH0%2B6l9IdrH0j7CqnNlHJOltdGxdOSgnT22nn96fHOuWAXgn%2BctcNOVkVVXLj%2B0zP3722b9rR0JvluVCAquhkDtftkwRqJfWGkNe0gEoTtTw5vzUOagMvLAoVlES6gTiMf%2BYoeDmXGfRpOyXPeXaekDPF%2FMkzLay13KvhG7xh66XiUNxkpv9Sb%2Be2lfkP5gVdVqmAfnQmYr6SX02Vxav%2BdwYMw9cfhwwY6pgHMLTO%2FU2jJkj%2FWTB6U12YVgOlOAArwDDJN8UK4SKSFZ5UIW0PkT5BUwdbtmgM9ALRrr3flMtErhQwIfagvtVA60FMVKUcf9BKsOG4z%2FZXj2Yj5Z9Sv6B50rf1OApfhc2wm8s8eMZIF3ftIrUetuxS9CV5X42cy6wgVM3I6rFMhaPOyvARlBJdVC%2F%2FasA99WAKCDZgBhetmck9r%2Fm26%2FlvKrnwFu45P&X-Amz-Signature=4c9ab96cf5faa3f73934c8b6204402d19e503a2ff0dccd5ca28a003eb5374a4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
