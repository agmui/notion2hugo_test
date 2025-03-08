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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U7URYI7%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIG1glFCt9NriytQebrlSrVtdXNI8adpzr7VE3Ckn3MgZAiBLP0%2BAQLMQiOIksTL9lcf1wnAGFM%2FnvS7M5lv8yg3GWSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMNNoZXp%2FMoAipiOv5KtwDhvbm70MQ7FB%2BHpxESZdxNufqxOS5Cme0MDPWS8qPXnwIMFzlZhzm6kom4gEyp1Op5QAknLT1cAKbEzSzjmq36lsMH5rN4Go8ysBbqi%2FCFWADSol65nUVwqM1k60egRA7PP5CLQ0xJzoRdf6lQGybJQ5qJrXba9gLil7OJhUHTyVZt1mAJxvT3S%2FWn0hsoUSU%2Fm8y11ZvVfgiEgWURtZA6yyQJp9cKU0jmKUmozeTKIvvB4%2FC6djHyAFeUwv9fEGK76%2BIIUFzWXCPskg0gpTJf51pZqR%2Bty9mODzXHFk08sta8vfZrlDDW%2BE3m9Jz5QMVe6OqkoxwFhSE3M8YEfUcNkB96Fb8l%2B%2BOrQTg80aIbmyRkx5C7dIBgspQywHKFlfQGC2mXAMHVnfTTwUTnQPDyEFBn3tvLF8PN5gNCT5YlA4E642JSnAtQq7Zq18svVBDYo2o0XbAfTt1I4qJu0Ru7esCOjWplOGPNm%2FNAXbFBjlC4bAb06yMRAbxlczfnDOGmlhJEaoHi%2BRC%2FbJ2XHL4uoWlgp1Fh3OxEAWGQedTOKwpMzM148UYoaRr5PJtuKbf%2FbrHnywK4wHHkNzHnxltLdqFOHf8gi1TWKqDBVpQ6gfU5UcJNasnT%2F0%2FLV0w%2BvyuvgY6pgHG8yv78TelLPvGA1M5u3tPNJp%2FU30vOvULnuy086YEuekWa6372l%2BPu0Zp0hsjRd5do%2F%2FlR20zxxFgYSttKEE538kZD33mWTYVCNOfS%2FbBvi95o5hdP1KNxKNSAA%2FgSJ0lCOjDuSDvAqhsKAk3PmE0666ai03OS6%2B037aKdnUn19jsAOW9fZNHNs%2F5Onl1Istqe1gFAyvmu%2Bq4Bo6O%2F3nr%2FNtdVuxS&X-Amz-Signature=ace132d7c4ceed5fe8d543cd2e931118e070c0c39aa7020ff7b86491e9d71238&X-Amz-SignedHeaders=host&x-id=GetObject)

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
