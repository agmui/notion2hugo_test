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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCZ2VQW4%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRb85L2BAUCpBkh6JJmiH9FmXbphl4PoD9g9rrbMMnJAiEA2CAhj0AxClUXPCbQc71bRL7%2BqtxkG7aQnww6TLJVVUIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDD8dxP6x4VI6nEaRVCrcA1RwkGkVNZLUEkLtq9vtFubtGVbdNTMw7SkntMuzqixlgZnr6VwvKVkjKgIHfssIlzOZNtOtB71rWRLSB1qrEw3f1p0F9znfgsu25oV%2FQvGwKfTy2oT9fnat%2F%2BBb7JSaeF9afuWjkznmh8a9awPfEdvVc9%2BN3r6zAE2c9KyQA5emmioTNBdlhYy376%2B0RXKLM8BopGp2KUSh%2Fv2KiKfmMPhU1k00nUSmHoWF84iObColNd0xxzRUvCK%2FTgd8QNuEVQj341ssoHqK4N%2BN8FRLT%2Fp2wWKl2LnH5iL2AMWVbsIbljziJlSsl%2BT6PrWUo9JlOhzahFTeCuh1lAaNc08ft%2Fa5m0Ee0XSyKJyQ013M6xPEEc5pDbLjJcyIOj3bZRaPhRJ2pSxDnN2JMkFdsDOwaOasJ6u69e%2BX0odSgwae3igeM1w0eZpeW%2BefrywRgCxUb0XQrTV%2BbVzZezHGyIG4bTHzteSPG5gKvLTAiZSNAWJtYLUK2F0TA4qAG2ixkxM4CejfSVwg9243HfHWXFuEYW026jRxNxKGeAcXz6xOBugOfoDYCFve5xkYABNk4xGbaWzpT5GomwwYtm9JqFke6AKnMuyYzrDDWrIT5zi4MpU5HfiDf5R%2F2XTupxRHMIev374GOqUBSLKcZknoScOJXZJip1mFO%2FZ2h1VU7HN%2FgJrXm2%2FPWC%2Bg1t2vc%2Bx%2BMhjbcmaGEvnEAxQPXNyNQobrKKZvR%2B1oU0%2FOMHysGzDQrIiKO2HlzlndrPabWtgWvZyiEhH1N5RvDxboqhJewfjpOgwpQ53uiX82KXOkbu5B1tfdrDKk2thMEZBhEFdiSBxZDPKiupT0YJ8vyDyOgNoD5hJzLxc9OAje6qKT&X-Amz-Signature=a497d9f4e33059a6ab6f7b156005ddd1befd44c7ed861dfb3be9534664d9f456&X-Amz-SignedHeaders=host&x-id=GetObject)

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
