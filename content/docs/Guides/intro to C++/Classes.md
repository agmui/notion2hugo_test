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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS5S6HG3%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyfbYnLk%2BABmXY%2FNQFpHALFF2f0g1plb5btvpYZ0QxmgIgFpdyWowzI8lTvFj8mBlkBUI20e63RCfM1c5zHQUx%2F4Uq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLO83wGO%2Bz2ktsbLeSrcA2OLjG3zJ7TJydq%2BhJH7nrCKLnFrFomVTvDfKwBTKmYkfovYJppGqlkf3xZonr%2BtGj%2FXeYu2A90OGtHaFPk%2Buynqg0%2FFeO3E8AgXn638%2BZDnakeWllJ5vN5F49VXPOg7QMgiwRlzAyY6HyfeOiPwmbF09gznCC12rhf3JFu6J%2FfSHaivKNKawpAxH13lVD0I1v5v0yr9ZAUcqVk9OZ%2Br6qt%2BnwDCmfK%2FEtHu%2BexrEYi8O97jRc1ZQhD1x%2BRagluDfqtHT4OFZF5buYz2JjG73spwPa5b7f9OTPAF79qR2%2BhABChOR%2B76ymXvGofnyBvMB59%2BaJv%2BbuqdVZg%2BqtAFWGf8CbfkrDWSssTZQ01lLq80T%2Bneqzh2sEM9SuClgPR9bZE69x2FYbTQ1wYJ2f06YoW49KjjsymWhEhrnuf1%2Bh%2FrV1aNXqWoXeOvvBybU1%2BSr97BuXqbjzCW3DpSHU%2FfPdN34jDgwl6TOqzSWdAve9jy3DdEfJp1lV1bl7nAPauJpz%2BkZBI6eGRT51PIjtQMqaVjYvtr982Jj1MiRGOQpxH%2FadfbhkokNk9SmVjCC0VhbZmD08lP3zXnVcld%2FgZsQJnVuNkfNLG5yu%2FCvrWjtkAk%2B4FHg2E5qzPBgvLGMOmQ3sEGOqUBQRL0E0pefCKcZWbGWj9Uy1WQYOHudpE0YPdEl25nW6CJibuf4g5ZAyL%2BNC7r%2BQqR5C5SUUuu%2BxeHtrVBSqBfTzrWB8bOCj28YNN1s6j3Bg06L2RxQO740Unwkeh8L%2Fyn4S4%2B63iASGHbQARj8WdwZ6XAsX5ZL88nB0bkm3l%2BsQ7amSP6nKVnL6NExRBXi0JU4v8PxJOn8VWaQ%2FBi%2F4EDMzewAcM1&X-Amz-Signature=768d9a7c62850313af123da170c483eb8850e3e2af36874100b25bfe278ac588&X-Amz-SignedHeaders=host&x-id=GetObject)

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
