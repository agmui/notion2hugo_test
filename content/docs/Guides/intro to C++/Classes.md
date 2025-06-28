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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUPHN3U4%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQIo6OAA9v%2F8nfTG9eJOJhmw%2BELc6HVE04awCkNLvLCQIhAK1YXA9u%2BXKaNspjJDTXoCbA8ndQjVGLrcBsOHfRhyN%2BKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxai0RqmwmjZF0Zxvcq3ANcN2AUgLWSyaRD8VI9bG5SmATWyLA%2FInrSOWGBsGbCRZPcwZzaDd6zvZgCndpMhtBnqkMBY3haSB4H2KvHZECjg4BPepZ1wk02lqZDgkE0xfONnH23epH2%2BHGrVgk4PR3M0iNd%2FUrquwbdjWBvR28hEYyDSdcL2N6ytUAIlXe9Tb1M6yaEtDNDMLqJV9OnpP2fzGjjeO1JEAJMMxjhP625n3nbhjtnHueNtBjDeHEIIwPTar%2BPVE%2Fw1uQV6PXZFerQK1MXhulJkc8t4I6hn%2FeQel0sF%2F97%2FEfebRSd4Tn9AmCxbPtdKDzTAN1QSLcZBRXeNiZ1zY1Uy%2F5TIUQUW1Ewz%2BsiTtyfqBcQnRG6vKDQeXfFws6A877MFh4iGqWnj9UZQMXVf%2BINgvjlMYgN4Cs0iVGa0BOlnD45D9KT3hq772Z5gra5qYGvUYlLa2goNHNeRlgRIPlxR2cta9Kg91jrdklnmWntr4TjMYd3Oag5bN7Fu8FLK%2F%2FJJIMHjmJErhlgCVVPd%2FYdAw0kSTcg7g0EHhA8pdtXkP3%2FWYtwusUPR1QvJJNcyGQnC1i7cdKWg0h7RcO3vqHbrucMfczVd8u0SUsRctsz6DcxNG2h6R0mWhSmdzcU6AfjgzqErTCTi4DDBjqkAfKyLjTTQZiWC3mKqGQuvBJbIVQtqZXute1XGGcmMEenqdjIXoqFUEQ8QKK7k7pxfKW5ocI6qVYb4R9DvU9gkhrVKOtKIrOGbtriTyhpclbVlDC0D%2F9RocnKinCT%2Bgv%2FErelKSGwqu7Z5Zh%2FoBbGRz%2BWGKHGVlCL%2B6pShwyiK0YNUArzBDnaxTn%2F9AbibsrH%2BTyc4OpmzMOrszRlg185UTecvgr9&X-Amz-Signature=a6c97f6727b6cd3f901be0c4fc3a8dbc66184ea4de4ebba61cb589c0d12fb0ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
