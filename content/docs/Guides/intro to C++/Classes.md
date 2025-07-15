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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RZRADTL%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIDFstSlwdeFpo0cfO9fbVA%2FK61cWAufl9sqYxUp6bbhbAiAJDK%2Brzp%2Fyi65z3OtTDccP7zcUlivyjS%2FLjAVWG%2Ff3Kyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMoZ6fcrJGpDNUVYJKKtwDqtANNPNev9v7sGpP1q%2FOWs7DdXc7nD4TgxmStl3L0o10ZiBKxhkKBB6BEQwz3YQ%2Fzo2kaYx2A5nCGtmSTaU%2BFxFNiXoira6gili5P6Q1UPN4ysVAm7IV9SydrawsMnsBr5eHTog2MZjf5vXf19bL%2BL5%2FM6AlW%2FzFuxC3nG1CAp5GBpdc0xWNBIoJeuE%2FiHP8VHCti7f%2FVHDNCDf1DG0whLaNQ0oiutVCgBZ46iiQNmbvEERx3N9KaIbi6MMywkN%2BP5%2FaguLsU6xPfq0KGR2rWVWmEwY3YKZvquFp%2BgJgLya%2BIf9rhtrGybomHRrE5fncDfWNafrhxbD5qmvAWDbYuoE5%2BkBCGQKn6KxZDOzqh5g9J76uDEMUhsIX%2Bmz6fN3tYfuGJ1wkyGwKK%2BUh9JX%2FfjESgAoeXJPS0vPhh4LDwPgvT%2F8uF98DF%2FrEvOcRl548ieLKAl2ne2C5up0sKCJNGviDz%2BRpaA6AEn4k%2Bhxcm9tC%2BwT1hz1i6JoKNVxafjABMiM%2BCZrU1HqHL0FvcTaavszr49DaPwXtfmeJZfEYtXiapLHVb6yZrbZ7nF2kNG8XlBvy7rVr67Y5n8h0Lj4WVs6o05bdieUt25s360qxR4bdyGQXoICCMjENaOwwrKTbwwY6pgHJNiRCIcJFcsgmXnwfJuqKB%2BixkmgDNk%2FIFVzZxAkX7zksGf20eHRnikxdCJzP3gHej0TLAVURtdecqIZQ983ixwuVuOoavBaUAyX%2FK2TXwnQxB7gYFINT0bFr6CzHxntmJc%2FsCQdRbtmG1RTN6EyVU9Ow31%2FRMsRny8B6UE5YAma9JtEsYQXYyZgkaTlrG9pP8UsBHEYA88oREBFXvgNFMuq%2BSK1M&X-Amz-Signature=3eaf68dd37d341ac5aeaeb58166702990ffb6ba764bd10d485d4ab2e5c3305c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
