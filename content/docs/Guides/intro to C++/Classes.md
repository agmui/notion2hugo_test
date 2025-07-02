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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU6MWXKQ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BEECG6l346xCvsbV0ndse5DckcB7tRT1Q7pW4kjVKcwIhALYtQlPcM4fQ39xRJDkXjLYZRannpxjQYeGcmkJ0XW9LKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2F1OyVu%2BrGHQpq2Usq3AOX3JGra7CIa86gBUEttq49njaaIFRFavM%2FaU9MTs5r%2F%2BsMG0ETGyB05cfQ2RFwW74twzR4Y6xh5EUUBI0o9f14bccFkmxe5%2BN6lI4qvViDrGgp94%2FcTlDmT71MwFop%2FH9BH9XqwdZX%2B8j3lUUjNCTBpc7Ysi09O7vWCXflBT23AAFFQRp%2F%2BS8eoGrGPZyXhrR0hOtHThW6j30%2BLfQ8gZ5C%2BrZlztoP7%2FJjjF%2Ff96kDYN9U67X4F8afBwe20%2FWiNbfHIs%2BvDmLaJOMfRS5OfHHATi%2F6wuJmGQD1VKJ94kmMWiQxr8%2F6HEK7WrQ8dvmXlozi6%2BW2uQFrBOggqYmHfpSUKOEd8RKudFBVpzg540sq%2BsiqdYcE%2FbhuW0ef3YKavZYKhU1%2BAM9UeMF8%2BzmUogwqBxO%2BaeQJu81ZNzZss77mh0OTzIeEbEfQ8Woi73EdXdAMeo5Uvzq9IAuY8cQvIz2TIClOZ3zptUIEfIOcat033HyYMjD5C5K73bNLIk6EGS%2FChzhG3X7hcbqFMCBYCWd6drBT8%2F4XMBG8VLS4e0BPndwtNnK6KIRdv8v%2BpGQgyhnoy9vubqPhja%2Baym0pieAUrZde%2B5SISnpTxrJMFw1QM7X7UmQLH%2BbIpyij0zDi6pXDBjqkAY6MI6U1GRFVGhKqgVczL%2BmA1sOy3kkKHhSYIs0ahNYucT73lSGBrVACb5EEjSqMRupsOovmHGZ%2FImU2hRl8Y3gzHTYY6RbAsp7aj8bpXkDf4aPPmleA0RET0Yuzqx6WEevOvfBWwIB3pgNKmRSWgSckFTnfTmC79JNO4vsA4dls8LT8XpahV8bTEfvaJJC%2FaI%2F2C6YmQFS0FSVYWAB2Jdg5dA6l&X-Amz-Signature=8949b8b3742db37d72d0e43b62f93447e65917676df4c4e225412741d7c7fb53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
