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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5OXQGZW%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtBSyMKq3rRSy%2Bbv%2F4YMZ%2FzVadALUjEjuydv%2BVyDgLjAIgHZ9c4Wb51EYJNQoG%2BtcP96OinBhUDwXJ24ez0CwPyH8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGA4sOGINlYvMPpaeircAy9PmpgSLIA%2FyVeTjET%2B8hBSDiHKjDk6AhYcF17daupGj1f%2FInTzgMf%2BSfWzePFRUqtK1uJCXr06cE3qO%2B%2FjCFr9SPsTpqFEdaIks6DTYlp0uZv31NTqLpL3W6Yxfxkp2AoV4b2anScvOCOZAAaSnYCePGXurOEY1Veb3GB724oXhpldy6CvgFFEA7vMx6iVvaaqEKmOUXw6PZsyRIBUJnO%2BU8F2g2gt%2F8VD9mUlTh3gh%2FuFeTBNcA%2BT0duCxY8Hk5V2TIgVb4imyUJh0sVf4KepwJgbYkzWK75zyP0Y1oauzErZyNcFUnyCkZUdFl7EwkO%2FhRcw7YSINy0qgsrhkNDcdE5o6MwDEjJi%2B03Gzf70QqGC8CxcsyDfViFtIUSCdGl1c%2FaAKsLhG1uLN6l3hb1GpCNYDnit2ppvOsjlrAxPcwuMb7Zpui49CrsPIJjA%2Fy7r6F%2FoFoSoPItjNJN3HvVGbUpwcceiyiE63cZKtQ3R6TFbQe1hAfBTouroHDtMXejlbrP9A9l8SryClYVfLlsPL093FNR21mBbdX3EJhWEuDkxRJBL4Re2%2FlOcSJzvUPp%2FGqia8j61PLp99Vg4tLURAW8icXqm3ju1B16lk9PkDRk%2BQOL77al%2FZutqMPGG1L4GOqUB9lBelC9uW31PbRRYddruniWKzclWL4g7cm9z1KRetAwXH9TwjWq9cS7QSt80Fq4pJ2NiCDXgzBWfMARtDd4A4BmPWBa2UzyI6AeZrwjiiWLo283R81vwXs9KVp6Vq%2Bv42qbFYUb5dA9NZxeWLsWXXeig0jXKDCNqwk3gPTu1WSnvFbqhAyTOc4AGXWP%2Bgrb6tRKKLjYILDlajtQ8g1uvtbUDFtMs&X-Amz-Signature=10998de86fec41f8c50b8cccf709fc8a6cab40601b5b909d4ddf33a3df7cd9f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
