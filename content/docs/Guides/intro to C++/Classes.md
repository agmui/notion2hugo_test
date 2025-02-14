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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6PVTMOZ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSURdabLKlKOlp4j4otK0TgmAmpigzCC7%2BHFA65ARGbAiBqfPk14LnLiY5yU6%2FqzP5ngbJpeUU%2F11RIwhJ5FcytzSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMs4OTh2ZX%2BrFCNFhQKtwDoEQt%2F6dEW1oFevuE3VNGbtVcaXpwICvZ1BHBUw77AgbRKWKSGen4viBymOxatUcuPSiouwemKV5BkdA%2Fy2BLaixXOGhliPdb72ZuCvMNpED2v5XkeroQZilEj2p20AC2NGROh6YUixYmQyHh5jXhJMNH0fLP7fzQpPkjTPfVbBPHNydv0dOC52QosvSgfTYyseqVXvlYLk8oPDibbJAoPAYrdzI%2BRlFrGVsxHa%2FD5DFde4AI6XZyPpYsLtbXFwWBMyZluaPX3sPnQgV2em%2BfNOXSq3CJCAw0edRrCZax0HkrCDwG9w7FG6FXpO83UZ%2FrCNEzXldWThFvcHfn8rTuaXI5CNWqdPLkE7kBlwg2kQlkltOTxsHbuaUTfw8qcpI%2BViNnWW2nKheNrGkSN%2FqRJF26yXAY9aXkuBn%2FU65pVybe4HEEizpnLA5aJQXlmrhT1HsmQeoGGuTkMHYaYN58tJ92VU0olsLZWboxm%2BYqkB1HDdkpOIqiB2dco%2FYQfKsJwv7sbH0gaSciAowKs0uNeDWbuRD60%2BeQr8kpP6kyN4rhHWsGHaTlNAsxEPvJ5ESRRHt%2BO4gmuk8dOV6TbbsI02tFDymCWkl%2FZXdUNxvkX1YIvhFukJY4mkEYN60wjuu6vQY6pgEZC5OfoaJpt7LpNl4xH3Df8X567gCvDnI1%2BrDSLRErfXdeqNx3CDWmenEmDsTHvNkcFE8ZaYjYskmr0BriyjZFqDHm1NwLaUbTJsrNg%2FpxNEwwB8WVWXM18ulSZ66dwlkVNq5GvZb2oOWRXeWfzUvLcvDQbdON%2B61OUX%2FD9mJwKlLJfDC%2B%2F0skh%2BTDbQQDw1%2BbJINqJxaQDMdsiF502uZambUCIJBZ&X-Amz-Signature=73cfe683964882593e5fa99e5717cced174db254790245a9d5e4e1f43eee066e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
