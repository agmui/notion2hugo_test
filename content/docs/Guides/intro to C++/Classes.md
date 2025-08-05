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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SHYIS3H%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDVw2BE7JaFh2X1hPrmyyL%2BWj0gf1T3oTmtC9mkxsZpTgIhAIGVutRfCIl6q6Bq2pAhVp54hWPSw8Vdc7JXXTUqoyCwKv8DCGEQABoMNjM3NDIzMTgzODA1IgyI6iUmxg05kz4yKIsq3AOVIE79V1BYZhCwhWeVWHNrE61N1oqiXtaUl%2BSHR29pufjHvO8juSgCenKO2Hc8LspTJ1WduM47sJB6MJSqmHeUkVzTUWlP7PNDnevQcBWN20ySUW5iB8CjUX07yY2Vntk7GKls2au530UJ36bKM8DNqEE3mn6Ts%2B7ZCbx3ijycL0%2F%2BFuSHdkSZYvpxwjjjxOZj3THjtVTGWEugkHjNSToZis8GuQv8%2F4objh6UanTNrtpQNnFPT8wjDl2xVtlfdw3%2F8iqPQ0XgpAk%2Ft3UFGqaJ%2BCexrZJI%2BlN8kKzXC9wjRhHw5Sxwx7Ay4DOxAcJdZAlx5CWqLyBmaGe8HDbpHub0U7C5dCa%2Bdzs0odWq1rkw0Zv3XHqe9u9Qa33hWLLkYDjjxwpLE0Ccr%2BepmPFdclD0iSoq%2F9N6wX19GWT%2Fm%2BDKI7lTlPpxxNZWDewxToKzsl0Equ4OL5B9IenYGlPCo%2F0tg7P7c6Uz6pG7SMEHZ%2FTvEqzhgwp3F9oPXPztnmGH8wEoVJHS81WYuEe0MvFf%2FYpNC%2F4E1E22AJBOiBubwt8uGosasyqypiX4GK4SxkNoS2A3ED%2FHskcIhSx2ZEn%2FTsw81KAlrouhH30diJ4BytjiUMjYNokpmNoSlVA%2F8TDKzMjEBjqkAXbG4AgNQQ3isa4xBOaa4Znx1a4Y1nSNM2VOG4iNr4sA2VtStBFmFW4VrHNATnV1%2FCKnWJyyLt%2FeD0jx%2Bu0Tyl%2B0zWhvy18ET0rYg3bcky%2FXRwOS2ZVxUOTAQ%2FpiZeIixi73p3qublf35%2BbH7OVMB0QJHUawWJwNQlkwYWUEhh765G5zEKGkaIwdyTJ716aIsxg8fQkpARSmt7U6A4hmWzRIC7uu&X-Amz-Signature=db49566bcfea59cb61664367fd40028acb7bb8a8a176bc85136343fd77be426a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
