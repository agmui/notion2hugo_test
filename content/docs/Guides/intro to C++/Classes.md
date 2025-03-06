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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U2D7JRM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ1BUSXicLwWjrID5BJrLlo52MqtuKxg2uWYFwq%2BXbhgIgSVP5ZqUYHRL%2BhwY1QByltMXb0CIGISoU7Gj5PgN7FLMq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDGN5YOiKKetcmJkKRSrcA01PBp9ocxXYOpNKNIEtNdITJ1F%2B6lk8CXamu35j078c8u3qH%2BuinimqCVA9uSwtQJpTEK80k7QCzTvLFAFKYVzXQGOPVH%2Fglo5KEVciYJtmd7EkYh2w5%2Bx38%2F%2F9XWAoWTBaOdCoyyND9ZbCZCmM7%2FbaJzUPGOuzR19QSjYFWSN4jmfNSuQj9sdbQ%2F5ccmjGqgCVYJzMAv7hW9qb3XOrjEUjME0A1pEJu03H6Qz4gi4DaChxIzepeg0oYvetwW0dlPisg6fUeeSFVuImle96J0QBHcdIqEzF9Mc2f2Cgrx4q%2BvNF%2BJmobF000bY%2FIQlHOn0MX30xspE8rpHlrKxAQZj71poVfWBfJFfFD5Fprz04ZaXVUDcsVWR6EMdiNXGj33yA3vd7c%2BXFiwl7EG04biF%2B%2F8Tv7w15vmIw4SSCCnTt08%2FZNfB9d8zewEUOXntoUK1b8L3LQORM2HXwamld7j0t7tMaJ1BvCmn2zp7thu9w6KnTQGO69hjIOfTZDMF7XGRe7TQPJHcAIv8bM3YdHZnpBkEMyKUIyAJ93MLqiBw7aQ4Q%2FWQvSGhwNdYk0ye5zAH7%2FxhbKnVMzfU1ILieWEtsDD9nwQHxdVMT6n%2FR7fa8ncs2HYZN4hfPdNx1MKz3pL4GOqUB0O2y7yog9tbdUAaWAKQfzwL23H3%2B%2B2D5xTEvsVYO1flny93TT%2FbR3TPnv3R9%2FCXCR5XW8oUCTIoBhaRQ9CmXeXoEIefxxHme9D0uzvookjnr5PKGvQ3Nl5DNNiLN%2BugBXVqacTSr5n4mZvRknfQsOjHeFNe3F5a3onxP5g%2FCbd%2BNZygkFRLczHrkdreN251d%2BQnx63LtFvgVWQahOD7yzzOPZ8kL&X-Amz-Signature=aae4ef7901b4b66de5b2142ae471303788fb3a05f9b9b5262e8b55f4a3c920aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
