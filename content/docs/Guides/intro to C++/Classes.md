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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN6LCDIB%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T150059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIHd9G6MWiGMwUuUr6hHnb27QarlsvLrkzkwAXuKU6TaCAiA2s1MSHkboPjc%2BSA9WY5%2FqaWUNIrCHzZ6ocfrnfk8%2BwyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvhdmQiArLjDVYW7RKtwD4SesMClnz9GLN3bTSg%2FZGm3cvlpquFZqklnXKKt5Cn0vGGWFFh9I%2BEEnf8vDRhyg1edBGyZsKKl6q%2FgERcULplOp%2B4OufUd72XOD8FzLrC%2B7o4MffubMw2vsXrVSw%2FvMzh284xyxdDwCvXzaoxnrMsPzzF4446w8ToD2ZkOM%2BtnqDd08qnPzuYffZbgpjLdN6OD%2BKcLspLp%2BFpCkyqIoM7DpenTyLvalFrQl9b1Eo7Ou9B0lV1l8HbVA8e1i7pPQCmNsBPYxVUOiLuu2kMPjU7PnNmpXoWLLElTRgm7TG3K1EIZY%2BEkxy2Sb4ope7%2Ff4MWLi%2B6UntbO9Ojja%2BuuzoWvSUXO3OBTeDXpcK0yWg0Vqnga06EaN86V09HksHk8mvOa%2Bcw3qo4CyCUu6OdlQhVVxjuEInHBq%2FZ1rE%2BBDxq8UgMmdL%2BpgEYi%2BP3J9ROEuAfR8oyUHwE%2BxS%2BTtNfnf7C4B8Nc0eJb5I2iTZz4IfJCMCHPJDg3x4vnYq1bOHt8h5riC6VitMFeSU2jCAvBZOKP%2Byq%2FOHdqrmq6yiXQCkutjroi5WCdmt1P1U59HeicRiEG%2BYXRaxvjJZsoWt971lpmYXPF0LXOQC5Em6aRAOuBQ2cAgfwBb7Av4ivQw%2FqelvwY6pgEVZwe0ZuJPSYG0JfYYEoAYNJOm1tKhqF30Gdsucqx6seFTzIvJUukKghiaZQREHWOwgjJYdstmG%2FocnDeqa2Y30oybgmGZhzvzcOU3CiafiocEUOn3KS0zvsKEhyzOy201kjYqzKuX01evVWkOQGBPGfGnQk3olqYb1cGq1qT4topcBHzW%2BnOHyWlEz9JJyNTtKvS32jpxTL0DbEhZTIYvHqgFZChB&X-Amz-Signature=e44be5299ee32efb8b8b9ff8bbad7b6329da2d294c83415560186723ad24d3ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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
