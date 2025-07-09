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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBCIYJDK%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB4f1bhaqKoKfHvuIkM2J6r4iVQKD2f6LsP1WdLG2Y6AIgb48oR687JK%2BGZp%2FQyIZKfOrfZjXC7bVCbwcRDbeUqDMqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPKQ5iIqrABoEZzJTCrcA%2FwMQgT%2B5qJnRj5T1XZs472kF%2BfIDxyrKQkpytxSWhdtnW4Ro8OQCdluiaIAlVQih7CJe157QH9XQ4OHqxOTG5zS85U77siDzC%2FPkG%2F8RcSoBwq82dZnd93%2FkLm1Hn4cMPr7BFVvZxowQ3x5JgilWBa72odXtZhI1x%2F9AjctG36usmdmUbHxdSMmAluN9gHWNchudS6%2BGpJF4P4VjhhVTG8VfsBALUkoiux33Yaq%2BCZ7Q9Qf75OLrGQUn7jacMLF%2Bj0knBd5FqEXb192NHxr1B9qo2u2l1vbMViBj4S4iX49fy%2Bb9%2BggoNBaY8Qi4F7nBDliH9K3cVyaCjkn2A%2FUZCnaAIHbKGrgElv0ZAp7Fp0Nz3uu2BVbeXi%2Bq360DHNAJl8GPmTY%2BurMsotZmT68FUE%2FUaiOji8QRPcu%2BWaNIi9OeoSpGk1dTM9m6A6gRNaIx5GDHXj17COqicanHpqcSH5Yv4qYL5AA%2BqEoxszPmoT9bO09Pf0%2Bqj2aEMH4JClwKVUza8fpbQFKNK%2Bp382WRnS9a85274231tMjeryoprQdQXMffQkVqrlQ%2FPnJJRGHtxwUJL41W%2By1ynGpkmzW0wqnnTljR%2FA67fQh0QjCF6KXPDoMy%2Bp1ZwHhIuMoMNDvusMGOqUBAbpkF4e2bIamPyCz11OTy9abTkdmobFMdeFi7GlbZdaq8lWQo2bKVqLfNz9ITo%2BLGCNcGneSqQvmEj5udov3pPIAGXqwXslik%2BnR%2F4qA2K3M%2BQOPculgWOp2zPddP%2FQy4HbdtxbdDCggoGphU%2BqVPPEraILSfcMs08x%2Fv1LheQryxj28FyCSUim%2FhoN2517TLJT5V%2BVYu2xIX4Con7nU0a%2By2P7J&X-Amz-Signature=143d31a3ed83ff43c8bb6af5cd08b5b63a6afee01652c3dc4e2a3c858696dad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
