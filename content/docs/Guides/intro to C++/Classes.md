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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRMA654K%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3feR5mw761t3Zhs5Bi%2BPY3IMBYA%2B3buAlWUqPcsDpmAiB8TeaV4PhYZ2zYsBEZ3S2bCXsePb6bNrj%2FV4NndEq9tir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMCPl6DEV2%2F7%2B6iuiPKtwDHI37Tye%2FQPBsVRyFGRe8P2%2Bxs90x3xbWFuzd8JQOf1USCvxhc4XkSLWI6ehA6NUNsE%2B7pFyArpYs5tDfjE7HK%2Fq2TydKI7ka7MDy02C1SGGAOEgBQgzPCY%2F6SDDg6kdhVSc4%2B8sOkJluMf1ZZ%2BCA8SPu23QmMVoXqU1m8Zbin6uSo3yWa77qeqc4vPIvKI3ag5pv7gqQgwzrkZ%2BNxv2VxtqUi0mItvkUHG0icauf9PEIhmQCCnaVzK2TwvTzkJX8gRHwpOfoKCxYdtya8461D4XVNOAj5DJbPeF0fr9gpQVy9xacn5B0pOU0tTu%2BwrZ%2FhDi6PHxn5PrC9hoj6qJnQhvYZU4a%2BXq447T1XX0h%2BqGdVZolwoj%2BCmJQ6SpaLlsnTphxZPvdn4e3FBsfA%2B8EPHkQnkdnv6QV7IPyM%2BmWgbhWmVvwb8juHpX%2FaClmjY4r0oEUhmOcczGqdXjkaUB0aU2YpVuEF8ZdvtRWOAjwJxlQUgsWbOJvBbEt%2FVbJGS5EpFSmRpDghr%2F5jPayhA%2FBewR8u22RJb2RgBuxJRsgDBIbGzc9XpiUnTob4EB1azyHIF7E7eQ9%2BdfrYadrHTIBbnlxPpCScpflPtNhckYWPJArG9CMHCagZIUPewEwr6vwxAY6pgFivW8tT%2FjbXnAq83WhpgmJgsj3oE%2B2v09xXhCQNCGN8tVtB2qmcocE66cVpGdiuoQ%2Bap2vXIi%2BkXTeO%2BMRlLMrMfjvoB6hes66F1kyBgbDtMDbsLgTf%2FQUwZYfRhJvXQ4QD7anh7Y1Kuda3cH2c3nPnesQ87RyT7aojbfNRsM7DtZgeacEcrcu7FaIoQgn0dwd1AhFe7oUkJUFysCSygXRbt0JI%2FAE&X-Amz-Signature=69f5e360288a5b850b57c576e0fc837c651ab7f44956fa03b80980142b2fe190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
