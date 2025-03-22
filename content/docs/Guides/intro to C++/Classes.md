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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IQZJYDE%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T131315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICeFjTheMQDikkLsjw8HrnMjMHa2XCwyn9LZBjrD4Gg5AiEA2NR7PR1QJLw1GW7r5sDorVtgncCradSM8xX9mCSStjEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHHv%2FZkO50QMGsRIircA0fU3DyrCYwk8Zj%2F7Wh1reRd6QG15zDntLIhJ%2BItJ41tt1P4HTI3tx8GX2heWRE6Oqc9DrMi%2FHUMn4oHK%2FIotGfnvABAin%2F7jST1JU%2FV0XrnIYLiYrx4RnHIhElsKSkxQ8RDXNK0VA9RPcD%2F8J9OU7h8o44mw7zsOhDONkUnRTJqnwJTjx7EM8yoqRzqmZ6wY2vRskh%2FwipDoAbZCZoajhX0fBbEH3jhlWh7jnt865Kd1KPAe5KHKGU5716s007h0PVegHqfVjIBabhwTTzFLMHL7GHr39F3aB0j1Rd6ZAD9bTxn3T6jfnEVyYpDWd%2B8tlzAfpmm9EEtpKv5MK8IGM9FWXRLSnz%2FmA9VHJfT880JwlSnAahKF4bIamxvqyFlf54uF2cwHeaVdlgucsDOkWAcXKsz7xNiqzbk2SuJg2l6NtVnPEJykguzBKNt2tUh%2BnnSwzURKXjiBFsqpGHFhrhWEL0hR0%2BqGjUf3gUwEKW9MMDLqMCIf48Eu%2B8W28kdZA%2F%2B7cxhy4HBkXrSVtiUNbhEulTkzolcWultXqSWRzBq2ktwatv2xw%2B938pzo3eNWANAuvXbXfSOrM3nWb26YHnq8KqX4Fj19Szprr62Tmc1AmYRZE9D6rKgCO42MPWt%2Br4GOqUBdGhkMO75k0J6cy0maIDJ6N1FCMhe6an639K6y0TtA7V4Ra4EDosAM50vGTnzofkGUkwxGU%2F630MN92BNpXzhxjvzL9pSXtOalr7GSGm2%2F%2BGYy%2BWH7Uf4Hv9Gpi%2F07Zh%2Fi6YNw%2FPqZuva2jCUTueXMuQcKof3VSkOjTKgkYZHGUcZXeItfdBkZeg4A4R5WjfuM5ryE4P83XM0oyDPD5aFgHh0moiT&X-Amz-Signature=c4fa43d745f61a621e2f93e5bb3c2da929b219c052420812bc3d7324bb379f27&X-Amz-SignedHeaders=host&x-id=GetObject)

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
