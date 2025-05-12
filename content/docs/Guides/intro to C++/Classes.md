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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SVWA3EO%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCu7HRu14lPO33MqLeLos%2FbDj9fo%2BTcU71AlfVq3yaZtAIhAPE5UkX0pPsNwUd6z%2F0RnHy8IqalRtctV00ZpFcPEsjcKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Fc9ccK6p51RCGjhUq3ANqPJY%2BtzpIedUNp2sp7Wd31kCz3oEM4aeKUFkdnLLAHipe0ANnYT80oEyZ8rdTbGOtfHJwJx0nyUyekw9KGE%2FN4u8NJGXK8scHAwnBaCxGHPr9QnjEAiVveDkBnG7vI5XtcIsw%2BgsL31ikAgnuwy9xRrlxW50WEqgqPf5Jbs1TEi9Sy8Ak0RNVxEzjbPlHu7Zu0n%2F6BxAPgcJvzKYZzqKtNT8EMeXxosuzuLkTokG2p9C5zJyozk5wHUlXPFU0DRDzaLIEAgIM1VwqJDymR79d76yIlP%2Fvn8txJeZurIuH1hPRLH2GN0kNIsv27UFZIXAiv%2FUBbf1RaGyxwfqMMV7g%2FEOyhYznFakiTZBjThUCr2E3uP0JZlGUAI9iqntM4jt1F8ucp1piTao9Jyde%2FZLlPQEGBrr9ZKmV2QgkJezTgeMP7%2FYe1rbOWk0jz4BTOXoZzru9gj%2BOC6J9Pd1wcVXhVMt0cnGUJwvLNbTPDgoWk3vbmH1I2pjdQlK8lT5iMZ%2BfDqIXMNPtWMpRxpha0k1Br6KF5VvahtODshtgpyDeEKJ9IIFdgcS7Zh%2FuuYXh7INx7vKS0i202Tf17YSuya7IxQggezzL%2FBfeVxWAT3Bq7tssDWLGIhBWVh6oEjC9qYnBBjqkAXKRnqJ8Q4e%2BSRYdedfKh%2FEyejUwLFOFcJSBo0AtNKeDehnRRj5eThK2LaBghnWGQn9tkC66eF0c5brdbjeWNOO8hD92M%2BusbGqBvjx9gD0Y4u7JdjLQgAReAqNG8GHTYPBFe3LLQBtjdhOooMmrYiMwefe17z5hD4%2ByY%2FoeeOCkrOjg2hqXqzY5kX%2F6LNzUSfn%2BuVvE%2FA23vAh1hvISEVRCX4Zf&X-Amz-Signature=e2f1436234971054c9c1771bdcf91322727ac19d38433dbd9dc23c073d125acd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
