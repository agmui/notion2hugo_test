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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SVYC53V%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T071138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCO%2F14lu4qWTneR%2FPo6XcZGfXGDXOb9o7iwFdHLcaCgkQIhAKW9fDKlA2p4GUaJjiu5Q4GCzDzlCJskbqaHXV07XfwOKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypbPDe8puNyqpDxgcq3APS69CgIGocTNrsEvTaYZ2ic%2B9EQwwRTDYCj6UkVv85GR7HR08w2WCPqiV%2Fkt8eCqN6zQ6Cy3vO5Ik7A0E87yPg2G%2FnbY7J0o4SHaPJj5VOs4y6LbwZJcrbgNeWVCgDJ2l6tV6fyDt8ZEsTVgdy6ka05XwGBd7wVaqQtrH0xSg2oYTls3jOz7%2F7mOktev8YUwByLBAYa1pjrY4bbYI7NAbNceNOjY7v9YS%2FzYzLc5RmsXg2tc5iapw%2FbLsEeLC5WR9f7vtT1sU%2BT%2F%2FoSwyTlD3CPJ5ZxYr96qelBwGXMB%2FmSkVYdDqw%2FCcSTTzBAy109c8mMl1KzEEJnTA%2FIfgD7FnmX08hfAjnyPjVAFeWGTbfU82C16TY%2F6ojER%2BZydUsuxDjsSNPflUuQIjF%2BBA7fWY3Msmhjs4RQHKygwkJZKjrzszpnn4Fvut74TX43D7a7kzxC%2Fj9vdOYT%2Bi%2F%2FCuaAw5AefU%2FmDNASAQOiRdIL1oeWL7LCDxl1CJmH34y%2BNygeY30tcia%2B%2F6WZ01pHd08lj%2BtvfqzQga87rkfriqv8%2B1S5WIFoaV8ceLKha0zVwEcyoQ7wgvF5LYLZbPEAU4yfWkXwmY%2FgKxZ6gWERzMhlZ0IqPv2jrF4VqiXA6yuJjDUv%2BPCBjqkASKZiYVAkKa9G%2BXuHNT9ZNGXrBjiNNLjA4ga%2BJAWCC9DU1o8CWtSCsZmU199ggEKjtvO%2FJC%2B1hoYaW4ZMg9rWhXd%2F%2BTGCAzF84VZWGk63iK%2BwJHvF3sfG2sRLEE%2FluwjA34H8dlbl9sfSda9nUCM8aqVftNiOrf25LkRBVfeBt1cnalInBjrYp71N85TlVG%2Bl4TDgPMcom47WVz4lPgqrxBTLriG&X-Amz-Signature=3e6ff4864e43b60b6be16b044d82b9a290a269a512abbefa1041b6f41e89163b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
