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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBAZAOYW%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T090323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCID0dzWyUtm%2F45Eu3dWUtFLj1Om6Prw3%2FueMI36vysq9JAiEA8J2pevcykeIZedwSsGGNcsqQ%2FVwSeGItygebye%2BCsngqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxAGsdojsIEKwlNTSrcA9bej2AdDAHqUOcbmBi1LvXDBaUb%2FggS2tzMbb7UnEZFxPa5lkCd%2FrNd9Bu4ZE0TqVqj8iKJW41QnrrYEmnWIFU3QxXvjVUEmufUNwwIMl3X8G9%2Bh%2BlDzxF8iyZuH14YlRB%2FSnY3EMpxBwZC9iNozXgOn4jrOXuvTkuVMkzBjL3J4h7LYBPdm3fIHC52Gb5Y6AHlI8m7qi3iZpD%2FKE3q8972FmrPQOhFENTGWrp%2BBuyBpfKgj0%2FQ8zAvlDrXuJAJORiQl3IbFuXTx6b8dHfdcprbWKNO7ElOdBu1onfrzfkqeWIena2nLqHbszISFuz6DBDocPLhjw3VTNaZ%2B4BITq%2FN0vn%2FfUFeOoGmCWz2xtSpd5oS1%2BNLDbqcwqX6%2F%2BP1z%2BiJLmGPT%2B9dAZ7nXwB%2FfFXa1NG2ePzlhSF9S%2FeOAEPrECG1KS8wNjv93DBwmMCGnTaBIk6Y3yN6lx9Xt5ci4rq5WGHXB5ZyDzT6LiuawTp73NO9aGj0thbrmp2VpDA9mjpVijEfvM4o3vuitvJZY0hF4e95onkJQSaIMsNdLZppxshJFr8azeqb6RzsgBsY9ohFwTzIQNMLlFNLK67ddAvwAgG4nV4PvwLNIGSac8jBcdy13vHr5lMq9tlbMISQnL0GOqUBBOQHSTkef7t6D9VC61XV7vwT%2BVBRE%2F9igZ0ocGD%2FXBXDqfvzNVmdozevPvSH%2FSxt%2Fud%2BQxJ7a1x0dtLSojpERQWU6uTW%2BZ2drCWtUmFWTc%2BrWh%2B%2FI31FIobamsmUIk3b4gfRinxygLJr1fzJoYglpGWf9lRPBiXBPSw20K7emdt%2FV4HtTQFtXkOn0v1ULHB%2Bwuv6yrFwhuCq9zboVIW8bUkgrpgb&X-Amz-Signature=ffe313a5c62a389184525cb71d43f5c5c0df8bb812203aa1eefd608550945db2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
