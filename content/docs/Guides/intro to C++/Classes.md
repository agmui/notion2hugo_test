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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDXKVJDZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoMIFkNkIwKn0SIG9aelB9YL3ePfOJQ3fNmWAVWn8I7gIhAPSc8o01Nfl%2FUyzrff41uz1rtD8YfOmFCh0t00QdtLF0KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB1BfU4OqjhuJcFigq3AOXEnDFW%2FAEgUOR45P3tO3aALFwH8OXLKn0nuTUiTaoWzlGrqQYysQhGdFFwrtuA%2Fb7qATHdgTzqntwlUdSofl2L8vhbQPCtz4ir0ac73rFnqrXgFr%2Fobx742vc23kAsIJSP6ZkUwvOpIPNHuI63zrUByd8i6DeuaRzxd%2FOQSHPiS9fTyle7%2FSnNCK2vt4svccl9oVF6lJ6NCuqi3W9ThX6%2BzVsQ2P0UrzW7YOPt8D%2FKH5ipayio%2FLBfIekwN6hj0UVFZD7cWgQxODd%2F6a3w9LgRg6SRtT808gv%2BuMhJ%2BeYb99%2BUM75ZzH9v%2FQwO20OGsQwuMkVnl7Z9LmeIEdiUIrF9mNYMSQsi6h8vrgcfsRyFGXQfYw6CnJI5zHjaqXbb3RMsPifEQNMzW08QiClF5mN2s1LfYlt973FDrmrTBD9SJnAzMDjhv8CPEntN1JonJDLLwiadDR%2By8SRJX8HVzDWjAYn3ZBCUEdTzo%2BJ8P9wIVWNJdIP4mgeZgSosQvP6brwgGp0yRPR%2BlaHFLNVJJz3SDt%2B5gh0X1kTEiDMJriKocdENXK4uGZCQFhrZ74mv19iifWQQIwsL%2FxQla80EiXshNcOk6KsovuK56p8uIufqJsiA5tdeuG7Cgd0UDCMu%2BPEBjqkAZjpoTKVHFw2rJX1CTKYXKI8cceo9AIcTDljlonC9M9yRROiR0eKkDevXGqC0Qb3Ut6VTCozP9e%2FPKpHMpZv6OqJA2%2BF4iPxO32KPfWkWinn9VwznUx8X7amBQ65lEUupgpesXsW%2BhAlGATY0lQQLFx09tRzWjsiLFHnXM6Aq0mqCkmBnsdrjavOJGE6H%2BNMib6wWzmXCkrht3E18o%2F8pttlFBX9&X-Amz-Signature=7bd627cdf7140a9127a4a979fa97ee2e68bd5a69bbfc7b22488eadec9783c999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
