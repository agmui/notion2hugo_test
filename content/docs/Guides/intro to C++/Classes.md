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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WK6RVQ5%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T024350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC%2F5r1%2FgJtw8ulsDmXrNkt7vX4MeQp30iwsInp2oc%2BRywIhAJLyMG%2Fg5p5quPjRqF6ORDPL1WHDlwE2v%2FEC5wZXlHJ6Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxeW1leUr8P89WhKJ8q3AP18w9Fgt8OwiG36y61Ocbu7oF2uQEaoBGnayGjfeEON5nMoU8tuPWlFV5oc2RfYkFMzP8xK1aAQ76klJyyrfhN33CYUYiKDxKxdAPjhn97YjEYiDzE7LPM%2F13SMClcZv%2BeqzJxc031hPTVIufaJFLSsgP7nVyFO%2BNpQraEZkJ66I74zIEn8welgj0xA1aFtEBTu%2B7WbALXvLG%2BU208xTZMTsqu8oW%2F%2FvGvitZetEwLCR0%2Bjcqmo2fAj1Zt0w84utKNRSMlG9qfpzVRjEN%2F7erpgUwSL%2B3fXq4oEVZNZG5o24rtpYet8hxwZpPzl%2BMPum%2FXV3m0tVhR3aub4JOuQP68mJXqu7I2kAmmLefkkY9DHbYxiut0RvZxJnRW2u%2Bo74x1AshtjH%2FjQwVH8J5PhWOE7pYBsBWNWPKbIgOeDS3xBkquhL0FEQKGKR%2BC8u0iFctB98wTR1wapI8V5G7o43auTlb5m2Oy%2BFpQ%2BPG4AhDq43JvBy317nFxNyWQY2oQwvyLu8a1QHmo3A0lO7jT2vepWeNsFxN7p9v6mRH6OLwlJMcVxEAa%2F%2BAtidFQsrRgx05ZVH4UnA%2BCeIvrnvHazE5jAEBjUjjwD4Lo0CMS2zl7zBpsCc7IK357wVG7GTCT%2F73CBjqkAS0H3uuy92EaApsGW2zy3ocakgzypPq9X178JpKemU30WxsiozdmiJIQYZAQxvriQuCzxBWDNmInh7Qtzt1FibZdK6CugEs6yTu7gN1y%2BBt%2FKVHa5KRZaWz%2FAzUkPbIi6ChqQ2BwykwxMkW7GZB4a09Mqyh8NjjzM8Pii9v%2B9XXDNabH5XgfmjMSTvsQPTZlpEkfS%2B3rGKcbyq6xwgQHYYz7urCJ&X-Amz-Signature=4f20f2b5a21ce5cd0ef4b211844a0f4202a253ceb5ac4cf19374d52d11401b01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
