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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZQCG5A5%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgW9pQ1oEAqi4SYl11oVst9o8XUu39kHcs5bb5sJvVEwIhANUYtKFIx3zSPyGKaOfQjPDYJdtz32uAwgnKGoEv98%2F0Kv8DCDgQABoMNjM3NDIzMTgzODA1Igyo5soiL63t0cjfCrYq3ANauMOacSV5XKHf9TRIzOej3a49IBxZtp%2BLZQvJEqHEWvA2h6L4SGupu7Tq1TfAfKy55A3LjPI1XwYNuKy9z1P7QWmuKrMT%2FDhrKsNWrmHBiU8EpqKnh4FRqXAiJhFJ2rOGB%2BTFN8Xgfv3wGYTYDRSjp6l8NpxQgBUaZvItgsrMZhrhGxuyoSyqesmxfswLdfF9to8tF9jwbN5IdOzsOP3A%2BXCymRkGVt27x4xbjqQcnHGPm9C2OWwT18ahF3eEJ4IgX%2B04WYNm27m2Ip8SYI7a0dhJASvRhomxcPNmhFtypi0rrz5%2B4PsygNht8YdCjXqZom7Wu5RdiE99aYxlvlm1OPE4F4uEBhaGW6UMGs3UpNHqakux9A1w6hIbfeCTSeUviaE3BmhLTVJrrOItHDBAycQ37hqcqmppSHFtE%2FWuyDU4I%2BUm1GChhIb2YaIzI9o70Sy8EYf31sCd5YBuZ%2F%2BcKYb09WYPlxyGdndqt8o43SoorEr0YS65QAGAQPWWBM%2F3o4BkAm5KvsDzDhKr%2B26T3AN5Drjx8dWaHScZAUjt9KmudHmRFMmvltzHNmlG4vPjshe3pz3CCQ92AX3uCo3qY00csBk87w8AoOIK5GX%2BWZhYYbpW0hl5g4k79TCmj5K%2FBjqkASal2HdkARF4XFw9%2FB36zqtd2M75fvMYfgbdlh1S6FRnUpJbJ7sI9pEp%2FIwrI3n0eQhXL0DvSPgjsqaEu08EFc61j06O9x9YIbL4EUmcJNnXcA3wvwAKYyiS%2FyGB4h2IR68JxdWfwXz%2Bxp4A7wgeOqoS73ITrfAkVlfYWNNjWp2Iyc7hX%2BojNB%2BUR3y%2BQIYSd4YtOxl25hQABWDSHwx8%2BywPeUut&X-Amz-Signature=9ccc5713091c30c561ba8629d976b2a037ff27f4a21134d647844cf4ef503020&X-Amz-SignedHeaders=host&x-id=GetObject)

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
