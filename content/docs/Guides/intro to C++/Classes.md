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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TGPNWEH%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTgNEMy7fH9bEDTTb8jTJQtCRYvDcGPyRMyVOiuUTr6wIgHY7RbllLl59I6YVJb0Cs0tNaMOxJET%2BXqgfIyo5GgTcqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyaflgFMvrVqeROBCrcAxQE5NT4sH5F6x2mys0lYDHke3eajbpi2aWhxZu%2BjqkQJqsOtKhrK6vl4gUhhii5YAqajOIFRX2%2BLOHShpTv4TZ66DB6FrQwKREYM4LHKZ7HdOUMQRSetqWQ3FYDrzs5O1i9CKmB3S4wT6qsmCNhllmhccVDY8WeAE%2FC1kZ0xJMsyPKCjww0fZ%2FxW71lWpFZVn0CV%2BPfiL9XafHNZFeQIZXhLqExHABb07%2B9V5sMxk%2FpWtQcN6Zm9hJwfIE9IrYwRKw%2F8KHfYTqhKgl2TRyv5bX4tqtSHV5MFtQ%2FNIR55aGGoRv3SLGKkFI4dNMWCwJIXxhBf%2FgzXq%2FxyN6hdCVPPhxDTBwEvm687m4rCgVBtEPE5tQUoJInTg2suvQM0diKpaiQa7FLivnT6hwSRjU%2FYEDz%2BmlOkxOVAWRysx7JjPn5lzoVo%2Fcdv2S%2BNqruWVazEKe5ANViy16eIjVCKG63Jb7V4Jl2xaqAm3FbUDeC2imYmts3NcHfQm1DkcqpCJyhQUSL35i4e64R3Xm0yZlyNZu2SYHh0a1gEV2c0n3F8YdHmD8FYvrz0guxK2z3aDbzOcCwY%2FJfvmFl6wup%2Bm%2Ft6GQelSiUCzF9%2BlZUY6zPUb8%2BdBLg6w7dmxOc%2BSlbMOuy48EGOqUBRzBjsovonWoYLSspJPh83hNNV%2BJc%2BegWDHSCSOtsGorCoLRUF%2FoxOdDBaxj8z%2BBNkjj8ZQ0wUuiDwl0UTS03Cr554WoOADWsQnrdyNEhBQ0nWq1SE1FsrzSJdSHSwWiUJJUJVVFZJv525wtoO9oUfXedW9Fj31GafQAoSgZZJfW4Rs%2BrGtTkTn7krzkLRMJauh787AChYFPndSzcNGnaW1OZ9M%2FD&X-Amz-Signature=6d2b4d1f058d0fc74fd3474e16dbc3221efd529627deeccf68f5b8522756c1fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
