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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTC6H77A%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCn0RO1E2DQsXXMPrNuR2nzC5UuxOQA8Jb8jrMRqSTCEQIgTU%2BqdN4M5VIyN%2B3ZiAeTNdCj14HMKPHXrLxIvzirAdQqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOp5vnKeBqkL98mX%2BSrcAwlN7us2mAXqeuZOQRjmHdVUjX81V2cFdofc8Dl5UEbjk8JW0B7dUwCd3HvJdSDelh%2FOH%2FXSAF6wyNHUZa5LHP%2B0lEUv4Usjeu5HQQQ0kUZbWl4YzQJY0%2FVB4%2BsKk%2BHQ6F5%2FDKkS%2Fzf%2BzwiMOE5d5i9n5SMCLRdKbDpCGDARM3BjsH%2BqoCvXVkU8nMBi8pVBklEpMRADl992reqDTBS0LYcmWl1xuBP7HLjckaTSGBgcJbio0DaTDQnViFpLocqA0y9rKQPfttLv%2Bqyg3lu8V7DbiN66d6Opjr1TOu7NU3zD0AQjlPP%2F%2FGRq7iwmKgERPVaDNdIjDy6%2BfnBCnhhVfzMRnMus4CJRfjyZuA1PsH%2F7pTvIt9XGQvZiM6rARWf7dDrVgJBj645VlbsnnsyOkM4IUXtIafESI43f%2FlFLkrsQzTZjGS6YIrz5y7lNf5CQ4%2FYQRIuZH1uNijubmi9S6au53cBPCBCqXOkaJY4Ho3EGQSj4QUZNtHafTuXnmf1Q1%2FGrrcmSxIJGPf%2BHoSbutttn1CdfzTsnBSI96nVb9sQyFYucDWM5E8%2B7c8SlQme1NxOI7CgIgp1TuKeWsSG2B0QceHdY6xtsZeHgayIumiJTkqt8xow1UOpfHv8DMLK3578GOqUBLcMdQetjMOUT337FMwL6Ogy3GGR2rsshBNhgZumxWajsLIOApE1MYCIO2fc4eMV3eOPT111Kq8orCLiLixT015wripkuDgdsZ5z5kUqGn57uPKnXXmEUwLwIeVkscyygE0kku9ySNACTEBXyC32DrqnahZ5MiRwWmPnjURnvNGv3jygfRR8%2FgeQAtwyyBPnGuvkFsy3Ertu1TENthzqqqLNeIeEN&X-Amz-Signature=a5ca82d19073aaf6221f79f6495a5afdd377e1004cd95d088577180eb0f4220b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
