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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR6PR7ER%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDCvllBzBOg1wJPeGSHPguTEBTcz0juZiFmjdVn3d4ddAIhAPaEf1cBidHMiznp5gpqltNNl1CLH8nS3a%2FJVcbJH0xxKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZNG%2Fnhl4Df8E3Z98q3ANGXI%2FOdr%2Bu1G8zDSZ7utfgeGnbLZ3kYkd4uMuDIXIWXgjqka27QNnI0vE1qsEzRjrQZJOfYND5fxUOfvjv%2BhpW71SJFOBHre1JcjnUjDNBoOLNOdcK1smQ9KDOUP5PmayHvvrnqdMIjxkEC9phg797%2FmFvt7HQSTsq6k78qdkBZx5GjmwOM3r4lXU4XUBGHviPm6%2Br3bTRMdHI%2F2LdUmtFm7hV4vBN5ixC5V8O43vzOe5%2BZ7Xo8%2B56nBYb%2BGIwVrFGXcJjChaoMdjaUw4r%2FBSYr%2BFm22oRwlrD4STQl%2BQXNn54yejhKdEfE3gtlAGadnQgAB%2BZnTKqUJWrshrkg%2Bm8Z2tQWhMG81tuEuelHN8H4eQV4tsN93F0DLNTsbpWcuP%2BEEH7IwwrGxSx9c5MrAmVcmeq0iEk4LhKGYZX5AEXv6VGhFKkePy5ap48UbmtjRQ5hgCXaweLcFTRC21YABRy96FYhOG2AbN%2B28%2FQpO1o9LXGcj6IkB8Inz0B1Lp6blQ2bamQokJ7KC5j7ZzhcEePzlDPXOjYPPBOrZVjA8YRW2xrLu411aS8XvFh7N7pBcK2j9EI%2FLcq1xNmpmDVsl9PAqfgTL1%2BaQH91SLFxS2VaBIEuyHq%2FCf4aEod6zCv1N%2B%2FBjqkAQfpRC8J1BGdmAKJA8yp4vSUAK%2B2ayKAhBv5TNkm4ZKvZjJ%2BQwQa4ViV6Gqswf3gA%2BCn103pDh0YTBItYF2XuwEX7X0lcCicMLlJJ0uhaJ3juTqH0uWse2Jm7pHnpxd4alJZA4IcJWOgM7z3tFYC%2FaYczpDd3OZqUk%2BGXhhUKI5ml4L9MG6aILdBwcs1M0M9CEzwBdChT%2F9Qgr9S3r8517yDVTuB&X-Amz-Signature=761b086fb53ea3257845917f4204eed50c49a67013a7700b9b9bb785b4f53c59&X-Amz-SignedHeaders=host&x-id=GetObject)

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
