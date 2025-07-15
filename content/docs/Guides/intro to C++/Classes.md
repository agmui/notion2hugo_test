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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WB6WN7Q%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T141113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIFuSlKPg90BUo9UyCu1pSUQaio6sGLrPJRwSxuAhXE53AiEAxy9NOvRTdi9AlX6qBvtYib6xPc5jn4lC6VllxnJflLwq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDJax9yCDKAPpgJOOuircA6axkDZibywfuc7MrOJjWVRzfkeygibUHmyTUNDYsbWSVC%2BHOYpjbeIMG9H3DM2WDtFcuOa0pXaxGizcSxzXstRJSHG87CVQ7GzMVgCbwhuDvlVs3mkdUu%2FIXx8orwq9Gm7t8jwA17sw1QRokFRV6qG6WIsVMcpwKR%2F%2FAahKI68u9fBjx4cAXMQ9YH62mbdVK24P3TAJpcYr5GW1%2FxUy2WDdt7i%2Fyx9WD0T4Z4cr1qZEv7AqLxmIJJ6eWjpgqrA3DQIqXGRaPVyHCh3Pm7%2Fpsif5vJTwFEhTL98X8opxO%2FGHhO6Nb56Zm98VnujQpvEUDw7mvzmpobQKBMjkROW17ryTnb7HDEKSqeKoXt%2F08qQ0EmiUY2AphCRUiMe3jNegx%2B9fiR9WpHdo35c5TAZ3urqBXH5Wp6R2Ae98thaYwcBLXKzmXRkGh2dQ2%2F60BGGIoVhO8vMuJr4Quh%2BgWwtR%2ByCh5v%2FFfT6MHIhW5QWB2R5qUZlzHU%2Bp9MAbxQc8TH4MatE41evpkrqwx4FQLgwJg6FAzXBRv45Kqja82q98s5J6gpW4xaJMbIGQcUel7%2B%2B4vgPxuZ5Kv200lA8v24kwjPU0%2F6rd0Tta33DUgkPkRt%2FzHPVsId6%2Bco667QD9MNCu2cMGOqUBNHdE%2F4rl5Sq731%2BHdxKgz%2F%2B61Fj0e6umDgFOrAf6kFNigHWJizN4JBoUsFVJidktL8sLQ%2FESaS%2BDDcsgk2VKfhZuAvz5Rp39KpV1QBVJk9go3AMHiMc6ueMHq5CAyje2kHKxsnQHABbZrPb1IeCBUeHwG9i8524klNrMlzFdHak1THMyLMWaoqKS7hKSHQzQOw1NaTzYYQIomNqlxtNB%2Fp0wXBDk&X-Amz-Signature=129946831403562c0ac3e6f870334e0a7f58cdf5dbe7708ed81bfd48eda05bd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
