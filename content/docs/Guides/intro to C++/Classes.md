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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXJSXMNH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIAoRjoagw9x7hl%2FYxiUhTeRTVzGW%2B3qNJ2KZsyuu3XKIAiB8YAtlX3Y5aTbTvgc0tkdKkts5zFetGTzl6XFgF546WCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvV8Ev2XSLfhTdw%2BoKtwDENC%2BJi1sJ%2FPasA0DhyuzqQ6r%2FSulIoNff9SokxwBeAZxIpoKft8Yd%2F4LIokkFxeGBjv2cIOWe2Lwpaol5VZfWynF91pjBq4KJN1xdwnJdTma7Y6P4CMRWl3B5fWs8ctrofTRdWZ6NMcCuXIUsmk0oYLj3yEOZSJxjdYBReP92OmGTHDiXRf%2Fi%2BgVJzesXqWXMXMdfKoUykyQrL70uIqzq3p%2BizGwNynnLvnJQPn%2BUjCtPvK30itFaXeL9U6iGWziTL8b%2FignVnT%2FqvlWKBIIuTJwWf3tIowsy0nhaA53H1SOMe1toBBSxPG7mK4eYShNt4wFAq21EqoKH4ALmwtrMDNiztQ%2Bx0TVKLYDeg5CWkZfkUQ5T1xTLotM7eRNGOw5PwDUxmpMcDZEpEsNI4anlHXq%2FGlwpcFrhrzt%2B7q4eAzcsQd8zbY%2FP6ZNhljEPOMrFVkIh%2FTUDE86f8GZCPEw1fOqP3eltm39JbHrYqwibI4FXbkWBeZtUjVAJ8u9uBAdBljlKf8%2FQD6g6E8k1lVTghqCDAb0InPH%2BRD9tLf8h0n362%2BPhV94O9Px7MJQPlX7P98nV4pk2E5%2F1FVZuQUNyXdatMSjURGyXduKl%2BRT9lrdODKdu4guhSy%2BT0swrMTbxAY6pgHzFXxPFGI0r%2Fk2OvCBz7SnFV80l8yfJy%2FIvp%2BjRT6wWMLD6xusXWrvNDujfnV8ARxsGKVEWMxEbsZXmpoxqBVRIPNFm9AMtLb4M9RElHUnv1JUW3cjuVoXQmxrEc749AmPgc1bo1z0nmJhufmpb6BluXdUxZ8rtc4EZAkDpORYAtsQBwaiu2DLzLVDw60bi8t6Rq8CJckGVLSu48QpLGBxPodLV721&X-Amz-Signature=44ce7afb72f1188ce5b483d02594f14aa6644e8dcef208930dba825eed38bb7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
