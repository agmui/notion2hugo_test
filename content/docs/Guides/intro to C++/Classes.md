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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNDUGZMV%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T131725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQZ8zSXDqCj56Nk4yrT5%2F5R9%2Fxq9AS0c1eBZU6CBC6JgIhAJjijtNiUavTk%2BIadY0jdHbzkkbmd6qRIxQi6HckWMh5Kv8DCBYQABoMNjM3NDIzMTgzODA1Igz4yvxF%2FKMEKe%2Fmc2cq3AMF7kQqN%2F%2F8TXn78Fup%2BwxpTzK9au1vMkqpClcB3nzHOEdQMa2%2BT1fThFG%2FSdBQ6BiYvc5ur1Cko6PgzVGftqwGu91KUuxHYZzlUlnfSXwyet8yZSNqe00qWxsI5ZN%2BWv3sTgf5onYVc%2Fr8APJdHkBdb6KtICtI3xIbZols08wv1%2FOr7gbngrMX6szrXMsuel%2BRl3IbQ%2F6YRGBm0RfBlAQGy5KyruQevD%2FYSwhzLx%2FJ5%2FVj8K2m00XgsWIx2KrKC%2Fkd3xa%2F2TWvIctmHFTe804nSw81%2FYt6OzcAD3OyEdHxoM5lIt6WeABKKCY%2BKnVh%2FS8fYo6Lu6IxsFyfCfoQaC2n%2F6y0aEKUapIZEJSeM4%2BmyuQU7IzZfZsJHVAfOiKm8GF4R5QxRtWa3bjri%2FMeeTMZFJod%2BlgHXCdgQuDinln4mmXfOCiXDL4fWu8fJqxCmGho2xgzp%2Borkk1kfGAlLYUY5QSoKDUBzurh7esWStNiakFmUzO8NvTTdZohRuv2spizFsv2N03VSJmVoJhnfpgU9djFFFua%2B%2B9S85JBKU10y06RqcfmhMZfZCyNvPZHGQsWqEwN35LE7%2BiPa0hb9agFkSzyuKrqD9DAGndjK5QNXY8DAuVj%2BLzJWZDEJDDYlqG%2BBjqkAYPqrR%2BRk1xSqoZjPRDBhtQc2Hl5QV9E1HR6igrWgK%2BUPoKEfy%2FKWSiLtFJwwavsm7rjPFUtGUTHh6rccvm5lb8sTDggJm9DFwi2WaqrKCv1SSfjh04rkwQJw7K1VYg8vylapnu3eXC8ID3AKV4%2FHV4AhnmeQ9jdQSWjrV52B9zAUz98y2KSB%2FEUGMfHr2of459DYRfca%2FjzGdSGdHC9s8lU79TD&X-Amz-Signature=8480c7b571155d1933f115de963dc9b931cc9965becf967c2b2318d6420c8c82&X-Amz-SignedHeaders=host&x-id=GetObject)

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
