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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REY5G7YO%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKUkMAJIm5HpRRlI7iDVBv5zh9Px2e5gYmjanQH3HO4AiEApiwmF3CMlYS6MDhS26x1xT6kSg4gVba3e33pMfd0bJsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKi4smd9eS%2FZJlFwsircAxcCKzV04iAIgkFE78o5CoyI0JD78y6jmQK52rnrTAYGBvVHXJug7nIxS9S5eey7en1aUooJ3RukpHggRrSX9yENzzpPwLorBzNaWXhGXWi1ix6j42Hpg5faFEl%2FAXKTf0TVp0Q9fNx6cfotA8Yvgvy6Z4YvowDn5wQ14DeWZMbxAZck6KY9j9Sx819mREU%2BFiqQSF3S1Ycma5aRSv4M7txkhuzFlCcLDXDIEhRSxv8z9mBRWokWNBfXWYXbpOHtPXiRDvUquUyWHtOF0tS4zXcz%2B2EygFoL6sfoYSIXC1XrZPEkjdF2uHYZhb4676Y%2FxVWruHzOW8SaoIY%2F%2FVg7WftuZXRsvQ1jN6LngTA7XuRIrvqIcazYQQ3%2FfYjCNCx0c0GZWlhPYsl3aFNyP7hmTQWcvD5zytMD4KUjLhIXGBm8b71829GT%2BjsEBHltWb2kgk%2F1wzIk%2BSmOdKERRVHQJEZk91BuPpwEEiQ0BXFuWvCCEKtM206uib0lJRUvKo0XPo7GachLlJ790FOHRY2gRTsdgkCdvSn%2B9P6%2BqbPpmntKSWggSC6x%2FYj7qwtud2tKexFYUeYGHMg1%2FK0yUrYcXBg98aqGMtzGzEVHt0PF6C3ySPvf%2FoOybg6B4%2F8FMKCEu78GOqUBrLjLRFkTCjfVdPdyBpl4BipuMNTDpAwNOdQg361W7TdHdPBeg2q4Xedd7KWYuSpr9IJtBgx55qOhLiYd2dAiLn%2BnEW4fT5bmUr3%2FAJzOrmY0GSenXTo9Fcx%2BmuSaIVUSLf3%2BXdM4ejM8nLnaPE%2BbuZ%2Fl5kYeCuWT615Ua09c8jlPIGwLfLG%2BJkePRBx%2FAEt40dg%2FUCc3auYxZZLurchYg6ogr4ld&X-Amz-Signature=5609546500b6a50a1c5cec007d971b0c78ed9465a659f3a991485c4256362826&X-Amz-SignedHeaders=host&x-id=GetObject)

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
