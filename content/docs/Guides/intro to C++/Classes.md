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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJOGRD2C%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIE80WS5c99uDNwSpRncEtYvW0DIMceRb9%2BHMYCzJTPooAiAh7vGUa9wHSgboNEN1XCPBJH24PXXJ9gYP9KD6x3cyDCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM6x%2BhvDkORjliTGUvKtwD01G5g%2BNU5Ocs7XtMJe%2B9pUz7d%2BW%2BwysLOJsYIfwD%2Fzbp6jY1e%2FqimmRMMTxsECwOeTo1kN2Nb844uG1umQNcMEusNgv%2BHZcZFb7XQue7uqQYDvwjLsKVYHbwrTVdjPkFqsIR%2FsVn2DI%2BLDF3htSG152lkYuL%2FWmL%2BSf3CRYkRrGOCUqvjYhh5lkvaU6jbNUpwby7BN0gdEHAiDKe0RofzNSed3hhv53gpacVX8r5Rp2rSmMzBIOHMWmU1P8ODZjFTLl7TbKUA8IO%2Fk8bcZqcQXOgWd2ev1MWu6lKDm8XpGgVJzwlxzA5EwFEOj%2Fw753%2FJQhr4wTCG5Qj6hejEhQpSTcG0nxU%2BiZkY2D3uINgCJxHcP30%2FMwBcDPapzCrl4FrkLeCLxPTvhnz4ddlYMK8hrY3jpTJZdZ6B0udh8lcyuYRtTlFm2Lu8az1Tdv9rdUIPYvUut82yV8GKl34Pda919SImDvy7wZMrAotrjteYKV%2Fk3N%2FGqcVK55cUzN8S1GEI43Ndb3vswoZ8GTh3VbsfG%2BVVMg7Jjhwkoqmw%2FbA4pU0VDkNLRY9DZxyYEaMUI2rUklBTEx5R01Jjvz5HzhbpyE8tKrrk8Jo5GJp92fXlYXxtUWihlOg5Iu5soAw9N7LwQY6pgEwfrUu5lLmqq64kka1%2BuFG8gmgxrNrbWvasXerZJQA%2Fw2H%2FVZc87CXk6wHmirWf4a%2F8kA%2BhlbAO0z8pEbBmtcmOkYV8DzOjDS7x7J69cRG5WDC%2BWkmjrZ39UtVlKVhHCabNFyTi0yyKfDEN9wSm%2FgOorKnH9KhmZyciCLzIT%2FJk3F7JqMKHtagqluP65k27GUtU7xY8pG6DMFET4r%2FeZdMDMGCalKK&X-Amz-Signature=d59a14f94cce83ed4230267b185c2ecbc4bdfd6f0e551abb7326be64357c98fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
