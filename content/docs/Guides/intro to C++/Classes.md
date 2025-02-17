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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE6MJUGB%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDR9H0mY6RXWScGc6PEVD3AFMlyMfHikZCWKv6LcduFvwIhALms%2Bm%2BcroIRrLxM%2Bm586w0qwntJaDsFBtTWXz8EylG1Kv8DCHkQABoMNjM3NDIzMTgzODA1Igx0hhNwCtAKKTIISxgq3AOn3PFwF8IGSMXNyGnfBU6OHZ11e3Ew9mthUWSFO6wsyJDTjmA3tGtt6PdJQ9XHE205cEmsrCqifBwD%2BjVdpXbje7g%2FZjdTCIIwxLOXUfwYwZcl2Vza7Woxte1b1cImfQ1jvslYHQPjTNMgHTsBHhQBGVMgwT9eTZ%2F2E9GvO2GH77gRZIQw8jDYE%2BHJmE4ZDEp8cNeVz2zS%2BIPIyh7CeTah2i4J8HYaBMalMLypO5RWQkBzr%2FTe0aulxPgCu2%2FYCmeMMS3q0L80oap2AQwrnQRCkEf95o%2Bn3EnBJoQkqBEkacRwajKt9BIUnEMd%2BFkkHeNCIqLRqg1CJ7JybrvbEmP4lgokcnD9lyMS9yj%2BRwSpeA67yUJrXXm7AJ1GaCjVXeRkIK86hnej0MpaS%2B9kIKLpe7S4IN3R%2B8sUCJt1RqTQDD%2BiRtDUKpHO4msGtF%2FCfLTb3uRaEv6Ms7SJGOJhhmI%2BOzKBj7VMU6D5OnSKWa8q3hF3U%2FAlYFvD3KF%2B1Oawx%2F4uhWteg2LMpjbsKwPOsIdjAtRcgziYQ%2BppQNcm6srsi5GHpm6Y3A6ns%2FGJK0AfbBHpKbYBiagXNsK5ZImEIE%2FnaIEZLH18%2BSkvtTKfA1fOPIF1pOea0uVuz5nNFzCuw829BjqkAeV71ybSHOdNM18oZEb2jF7x9nZdPSnEfAusEKn6QU2QFR%2BB88%2B1AKSU3VOzn7NiwOsP5lbsHOFm0qS5tsb5C967ZT3zG3RYgj5Oa4Q29wszXcWKi1vgE526r9ZVc%2BqnR2wET6%2FhgP6o6WVAvTHtsPsla2cLabFaWQfnoRDXcS6AP%2FGojsigLQDWDRdiopeOht2ne3GfLMQHS43q70MRCGXfDuzb&X-Amz-Signature=fbe96c2799e2629221d6ef5ce006b640cd8c7d996a2b9ab0377e8b556ba50b0a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
