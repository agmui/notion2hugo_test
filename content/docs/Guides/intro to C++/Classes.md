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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJHGYPAQ%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T132615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp1Qjh8u7B6z84TqqdoCJrX64qVBW2q7M5rg1530eRjwIhALKcqXVsDJic7IXwCICkLP21Q3FcTGuEYUXpQsh323iEKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5ew1g6A23ynfB%2F34q3AMJ7aKt8mT%2FgB075lk59GbMg7jR%2BXas%2BjC5iBuJtjlc32FpcD348n0NgHNLeAusgCvKQwc%2F1tqQFPTgoqTbrYyBFC1JbzRSGWx2smwoYZnU9HKcri76B19tUerCqiuI5SnctUeD9L40K6sV9ly9wc0%2FxOE%2BFNSfG%2BXkXFFXx7hrsVwdfFb5XcJqSP%2BHLYvqsCqehYy3UEOM768aElnK4HI43mB474ZjGMFFJ0vXx7AYWo0Cf2GUq0zeX9SZwb8UWf5VG7cxKlfBaOLgOHWP8fXj62U0gSkrYLVT%2B0LP4xolrMxRjpfeZePuI4i7DZGw61vYZd1sI%2Buve8e84GTJwlCaPxGmvOyqWo0p50dI1WI6nX8RzfLcs%2FSlRVHqwzsg%2FZHtDXLTkSVvWtO3Y444mHM%2FcgDcFMVLabTEXZgFpu11GjVUyLzbFhsqcmJ%2BcfdA%2FoD7ic1a8Vx6dvGUkm0YZ8JB0Os%2BNsFtWEM5mfn528RBhpajv4fBveJw16JpklDiFMgbEkhnc4wRD%2BmXO1eaMuNhrKXIuyCtq5n5tCE%2BPo6xPhcrkM4VQFze8SrNm3rX%2BgRRbwGsLnLwKOdrQlQPQoQqmiun92lJ1nqm%2B3IAzApR5KdlHXGOmicWIhQc1DDHvqDCBjqkAR1jjdWwN6iW6Y7FC8zuOpyTeZtsJLlwjmxWmbAfkukEKzCI7mbOT2hfQVMnGEwQp7%2FgIzA50blkfhlBPoLrG0g6hsySn6EUsBZ6KD07RZK2MxZ%2FT1xnreRI2OJiHqMxycuLPXSOv7VFvCoyKDN6SlJ0hOPWJxFypBaqemfQfCfGqA6Rjwc6gaPASDWOVnyeQzlOLGLwy%2BTAz2HQZ9p9J5oDB4Si&X-Amz-Signature=3de91c0399983fc74e22812ed8ee38744313840deb0c914a54457308f4019dd9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
