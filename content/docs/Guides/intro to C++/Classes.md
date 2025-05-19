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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODW62AK%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGFmsRFVAYRchG%2BqUgSy2qp7TsAXjxwdKAtZeKmvylaAAiEAs3YpLj1oAVK0A6Arz9R5liz5vvaSUEWoaLjutXJPsFMqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8MG9wohYEXNjS%2FlSrcA8hbp6TWO1yX%2B6AvoISwe2xdPH6fzGgxGMWc22c8NMWNdSc1yowhBugrqoEkttE7oEPnR2bTwEVSWkti%2FkfY3qzjKJEmRJz3tD56u3k4oiBXUYVVixchv2eD3Nteh3vFq9DMVK6tMK3pZvV2n4VmQAAt5RQKVULmy3yc5%2BbFqjics3hFcflgWF2HmMQBqIU8pOzycB%2Fik%2F5G0zZWiKGRk9U3RlBxkZaauvBtglkWjPfjsIY%2BpDuBrLX9mnjllVW471S7qfx7vth8uFmh88h0Pdk5%2BzwKYguDseDRy7YExQc9qu6koMWvIu2jXNRYLXcr2Bi%2FKv%2F%2F73EK0J1flYPsUidbi6BhQbXftFIUFnEA4jWgWNMqNI2YYO2HTmUNZcw29fpCPcW4XI3inBo%2Bf22D7J9CHwOMchPRcCTJsu19Z8RrT%2B5FcCBMwjZhsFD%2BeA62kZ51SMdhDnsDibULAhm98hEi3xhhHb9n6LjJcfbSO1JZl8quKjpfiQbwEV3oYP0AjoffUwSf8RUEwDPTP%2ByF4eLL1fiD%2FxAGjlQjBZpK7vYTMiaxHBSc5igwq1pd9thrxjrx9uRcAfIfVK1DFD5eTA71DqIy4wqTeP5n%2BaUBxBBznFwIlJPR%2BR%2BXIK5qMLLlrMEGOqUBJQ67mXcpXaCqn7G%2B%2FgPYIRfy85Q105AoB1cL4oBlxTX5KaMm95XabFijicvw%2B7a2KuQO7Edh1DSt2TOK7%2BRvn2dDayzzcej6lQ%2BhveiwTWoROVy6Lp4q6eOrxYqjL4iybKaYFlFrrGpQmKSaYLyyhdN1F5mrs6MfWqv9v5r4ZHylKmtxUEV4AGs%2B8z1rq7F2kEMpe0MlrnXo%2FCU1GkHVkGE7yYOM&X-Amz-Signature=1bb7d5500595ea1136264d9fc3f5117c62047e4cc977547a2e995241cc7edeb5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
