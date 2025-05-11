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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPCFQRG%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIEU3mi8lDnt3sxVkg8%2BcG6eAliC58aCd%2Bf1qgt2OkOxgAiAIxHHThPNng39ILguGKQrmj58MDYSXIZVkvZxJebWcYSqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8VBaIon7UT9m9Q3bKtwDn%2FTKGIqo4lc12LEp9Y9jRW4NpTqdaWOucOd9fcsZQw7Du8iBfNTduV4tSBF80EP3XNwDsDNyKOwrm%2Fui5LcLGbMN0pNdbrYI0W8HAMYDg%2BdujddXc%2FeYz4PaJri%2BzCKBQjJ84sRXwFZjN5Z1BMPgq6RYbosZy35Ij1d%2Fk3S79BdDSODe8VAw%2B2mKsLx4z4OXEpaWGFz6jN1HDxw9DfATl%2BCoMjB0IZD7600m8eLLS%2BNUWvqb2ZOTk2sTchrcJ85L1nTC7wK%2F3Xm17D7gfJZzEo3xzdniHJMI19BeQt0nlNIepDSCspWZpKmgjqN2g04M4EaHqQbqN8HJBgFaHbvzHKAnRCc2bhdWIeZElNs1B7n2JOOJHKEdO5KpGbGrhoIMToC0Hdm6gJ5%2BMgFB3AKRKbosNA2mveQARGP8lBf7UVhN%2FzL0qhbccCrhIfMBO6yz42yrB1pP%2BA0pkql9oEBcCNnyflOwySoBZijmnUL0Uucqvmkb4QUsIWAxy35pfwQrpw4orKySo1Xn%2FhN57SdSLbBIXts3k0PaNzHgm9DafT2vZOTKwVz%2BugAM6KCwsP1b%2FCcLCoHBVDwlEiAa2zTAEXw21hd8a3ycDvCt0rp8yZCle0wVmckJuzYrw3owsJaEwQY6pgFIOaQwSedeF4BolQNObpQBm%2BMBoe3K7rJFkfLJFPWAi%2F3CfIPrhQ2HqksHT1a8t%2F80PPGu7i%2FiJRdD5Kzfo6oiRR3iZdT9uLydWouKGx6F%2FmfwB5dUB%2BrHTw7sVBN2%2B%2BG0bQnGsOYgQ%2Bj7%2F6bBlRaCkDYe4ak90Iqg%2FKoMf0BB6oP%2BF6ORkpiort1d9aIg0I44wKQQkNn%2Bku7eodQHy76%2FTAd23IZL&X-Amz-Signature=92d81e2baad655ec2344093824d7d280daac228aba18de553acbfa2eb30fcd44&X-Amz-SignedHeaders=host&x-id=GetObject)

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
