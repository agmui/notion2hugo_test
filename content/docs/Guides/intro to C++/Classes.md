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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX74IAPF%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEUwrmPQUe8Ixth1SyMy6AwYrTrmEAkGpIrCauUQhC4AiA5DFXeD%2B7b7g%2FqCERjdpwYKN%2BS1YV4N3PrDyS5WIF9DyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQWoKsKU6n%2FNgntqwKtwDqPHFQi5pkdfou8s0qY6g2Nyfp4OH8C61gIHFWf0Fh%2BEbbtEK1RJK6FGTRXKdlQQuF4NPTLKbjd2Rssg1sBSF0fb4Ik4NTjDQaqEtCyj893bYUgvwt9Ew0PzSIqRXT%2FcaO0Aef5X13%2FsFJfWDFst1zhWMDt5uysHLGxs%2FMtx89dldPF3acwA%2FfQn6qtcNh%2B8h4VM%2BUbiF4pFBhq%2BVvTk1xMlXDRT2WsLGZ39jYhAAvQPO5Zd%2BdxW9aGq9b%2Bdf1eVBFMqofHhkCQT1scXjFxt5MKsmujoovPT9nsU9GFal3AnamgoNdcXZsnR3IsEsvIiUIMvSmWr8Frae70SGawXlJ1uJxZlrn9vynfXid2vuxBkp61rB6qDIjJKnzKozozvtXCmhW80fHj%2Fch8t%2BOYzce7LsHVOaIxxQ28dATbB4Db5MFS7s7pb0OlXSzaoKYo%2Bh0DDGFj2mkJyBIOqC03%2BfV2fsiMY3cDhkYXej2ZeRmtORzEWwn%2BZfmI%2ForYsPhvtpfZFRZ%2B%2F05Xz8vIa%2BoGep1Qa8EiFiYvKg9mRqH43pkkygs2X02LUhqS8bqGwPOTWi%2FCq%2BRC3wx8DMt71m1gTRPy%2FZQm7nLysfeqSs7uAQAFpn4RN8ldqEc%2BKmRyUwvqX3vAY6pgGuG5Z4FbNqwNFs0W563ppTCX%2BYVPTDAXp5DzJNmF21HgRxbMazDI%2BWHtDJ7rpYU2K0s21Pbr06grGpXrInzcf6tvch1XuDc7YSlIMr%2FT51Fqjk7uxNsfI0f4IqrIfDftZDCQfr9cTLrKPShs%2BFi0aELciCnXryIsCAWQVunCIytqIQftJ72TJAs2FqcRnNr%2BfJpnHYpBoVqPQ7qwrQALuvxXulBgXB&X-Amz-Signature=aac79c48ec931e9b9821874ac9ce7ffeff9249d0a74bcc76c9e79988c56f9450&X-Amz-SignedHeaders=host&x-id=GetObject)

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
