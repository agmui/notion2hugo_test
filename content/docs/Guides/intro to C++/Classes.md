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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RE636PP%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCQ32ERDanH7Ky2oDDQY%2FWsm4h%2F0x6imfp6SRRbWXD%2BlQIhAMZFIVjkFp5bqp1pVNQik0mWxgvzY45X%2FI1k7WfJ2mUyKv8DCF0QABoMNjM3NDIzMTgzODA1IgyQgndtw%2Bn3%2FdQTS6gq3AOIZhGAFUbDlxOlVoI6Qrp1CRiM%2FVqDLaSJQtOC4HflODyAIF372R0UIRsoXPcaGRllcxD81sIeH32Mna5UTP2X2vpYL6771pUzAG1Ppci01XFd%2FuvfY4dlJrIUX%2F%2BRSGWy6GbvMe2PA%2Bbf59Gv4xJ3RxJyJN%2FVRGqba7fQzVTYwMyKmFB4taRTqYn5vZWOcM2UPXlHVfKwS0YwO2eP8XwsSz4utGa1dy0SkSQ9825x6a6NFmid%2BnnpQGMWu597ARDQ%2FqAkUOjN1XX7d5FheiXq3WqDSlI8GQob3u2vsCBgfBClFqN98dPn%2FOs0rA6%2FqUAFlezuKLYdE8oUl1eZ%2Fd%2F%2BUiK50nKrI7wxrh%2Bjf4B0yUpiCYiWu55Ed6GLvE%2Fbu59bjmiwb5RNJ1OLdtlXwJwBaeaMAh9QxidXgn6JLSYFTXEWfMmcoqBNo%2FiBddcw6kvt6ptKSV57rFGn%2BKO2Y5LI8uzGrMwMbxXVyiyLg%2FWTzsmzA2slHyGEA7nSRE4ymydSyk77wF9CX4o6KAEFB5CC9FP9fI0SXywCAq5S6pSx7DJ7V4JJl0Z4NHk9k74gb7xOpcCIvn0cDtqW0EUrc8sDFiyVuFdMV8LRmKhctaUYgeFb0Yrxf4qk08nDSTDszKnDBjqkAQXlX%2FbN47kpvYl1xns4zOTGYIUHD9CqHGqQG3u566nLU3OzSVcn49MHy49o3qe4qP6bmryO8Ei%2FvARmc207o3AnnaJYzZ9sVZffzyZVIICEGSewU%2FQ%2BNB5YuJ35z7gRvK%2F%2BeS6RftyR2aeOPxOqaWIwQt3%2BXogvXMf6c0BYkiuWZWH16BC2DBS37wy60dkhAw5KtDsqY9V%2BoGpDAHJ8TJzHEpDZ&X-Amz-Signature=80e475ea70fa9dada2e026f733f09259f0a5474b04fdab8dff9538d585432a93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
