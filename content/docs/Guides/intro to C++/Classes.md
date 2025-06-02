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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQVAVBGS%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICOdZw1xC%2BkqlhM9D5dNkhDsM8PhnPFr8Pt32U%2FIaNA%2BAiEA%2BZ8%2BKjHAzF%2BNvY4vCakxZ06CqPbM36HjMx0ZQ6cwRTYqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASpnDt4n9KxZYfeNSrcAxMh15zR%2BmbpV2ADqkGx%2FE89Ls7CfgpMvXk%2FqM2e8kXRefuNf9nlgEKU5%2BEEqk1OWWkERMqLBPIK6tZ6vBC5xlha%2FG%2BASnGc%2BRtfE6GaMtYhmuGwP1JDxG%2BvSkgw8gKUj3uGJEwe334Jocfa2R7AoWqg0LoB8aaUKBgQktoZB77nKmP0XT6lEuBH5yN7RLLtpoly3EmNMgk6y%2FfryntVVztQlNjgYZ%2BxaLsp8TCA0oE6M0NyXs%2FHDp7aU1VTbi5rznfvIh2dAIczwf9SsMETPU5EDwQo4iA1oc%2F3Q%2FqUyocROPJm5bIlHxotcdQX5aS2fEQifticAEDRPvi4yPaQsAIQh9B2mkQQm7EBrGMp1mKJFWUyva7XyJ1W4JjBk7slgZ6g2Kcfxv0M3sk7y4wdewAGt9G1%2Fuuc3pUlBklXzgiLBYk4sPuPuOfGTmG45pLZHqkZTF3FxHsfl%2FQQ9F3WObljz8KIbUH92f2uioAoSH7Sm3Vk0%2B%2BGJJiFDFVwAFvu6Gfjl2XlUxzYO%2FsKmNAd8pf9dwuNzhqPmE0DsFowuDtsslUGJfKHHGI2gziXot3zWI7swIXvZS%2FhwJZsSiajO%2BDW6PWh9xvL4xt%2BP1FweZoS2iPOxXaTv1rcEZV5MOGy98EGOqUB3WCfot%2FG1UcmogRK29DRkk5anmB56qRt5tgIXlDeIy7msKs%2FLPHP1uNsVPZH4j6iFstjmHjQxJnRg%2BqX7fX02w%2BIR%2FstuA83OXSRQYtXL9%2Bx4M1OCJYOn1NhKVADEF3Bd2f7l0flLfdkXLhxbb4M8tNjt2xwi7VIFUReUrbwn1gTk9MHzmeSVWCi5CKUw6JFt4tkwdUkpKySJtlTU8yItGYT6NDZ&X-Amz-Signature=4dc39d2fc7322d247366d3385e5b56a5fb6afbfb91997fc58bd3b02cf64f523d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
