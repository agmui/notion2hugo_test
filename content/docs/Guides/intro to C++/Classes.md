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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOCPIDOC%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk%2BahqlHdU2m%2F9graAAFv8e1DJDyFAFl6QQyztD%2B%2FhlwIgTJ%2Beesyp4BTbn9DOsBptevNVjk0T4NeIIb3AX6ryDCgqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlGPPUA%2FVcQMXTrpircAx4KF%2FBzp65cKr9laY1v%2FmYtymuass49qYCmZmMNBvO1no10z8RdP2fJuh9x%2BML%2Bw1ukxXIlZ31dUjZpDkgz7%2FV%2FlV7GWJrYaoX0Ze6WUTYRR9jF%2F6e5hkYOISV2UAWUvVSikM15RJdUmYVX8fI9OYdx7BcuJRkW4wXhAp82PIfZ5va0neWPjSY4as5QY%2B%2FzTCN9T9sErh7YGZCIdgYvKWg5tQdKTpEBzChGNZZW02bjCWJk%2FsAcIHMrfs%2B2TgulJpHqgC6px6YutE4lQp7Q59UFwEh9E%2BYcv%2BisbIhigbOiKSYZeoqQ7oWoeSNXOfylv31yjbZQjRXGYLQoxYin6qVsoJXV0qxEsnMjgnYfagI0mTLqjZ4btbTaysPxR21eBqbQMqX92KPC2GZzebKD98Yox2VQHht4E3jAtdYY5xD%2B7oQnYvz1sVcB%2Ff9epdypQkg42bQ0nRptjvNYtFdFUeSLruX0k6uMJ94gH4R9QZ1snyjJEzYSx3lcOFKRPXkcXpdB23qou4jC%2BHw9bIDPlidvCmsHMeyi9GSUoc8hhk5jLe0snK3zVSDZu6uXEQ4X55OGvhJWgIlaB2gcgcvLLjOFM3Mxvgxzj%2FQqa6bB4JEKBN2t1DZcdWZuOgZHMKWf%2B8MGOqUB3V8iKL9iN2B4R0NAkqPhWgeZXPh2%2B8GQaFgqqxitopjn89aeTNzUUbiS7lz2HyC%2B00XRtXUPLKx7b3HUxGT7hmfbSqXNY0aNeeES4gMEYZk%2BHG8cHbmjLX10NNNcCNdkLH56al0Lo2ygEXSt2lLqPzJhnyVLFhAic8mU57dCSqlAqDEUeAF9QTEvP07s2CdPeYUWDfmfQBsqUJiMB11IB97aWcE8&X-Amz-Signature=89019e68fa24cc1f0b824610d5f396e33801209401533d3e5591fad6f9bfd967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
