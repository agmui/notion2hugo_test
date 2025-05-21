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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQI5Z666%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T004202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjXf9NV6QUfYp0nAesfeUnD%2BMNdYhQlM5EUu2T6jcVvQIgH13oGxR7%2F%2Bv%2Bu%2BA5bruxU5RPmKCI08zlfEJEQiwOnkMqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQxA1%2F8GSGukKEdYircA2NDqrB0nG0DIqR4EkIuxX6k7fag0kw4RgkE4dpwYhD0kWJWVdenA%2Fn%2Fb57Lz4IS72ISFfjtZx8JaBLfa7vaECM%2BXTaB3SLr2bWve2MpI6G%2FbBNr%2B69NpNGkCbjwiN9SxPuzTfS1gKbXFKt%2F6CmIasqiE%2FU%2F2XJpEUsYl%2FyVk2O%2BUvKv7yImte6hNM%2BEzgnaFjRFaJxjBEXM8a%2B2znL2kX17Z4w%2BDh%2BgGhsw%2BK9WFK9lES1XwpbRLTTF6nT2nr%2F43p23jGJ7dcfzS%2B6ox3al%2FPLujW8rA3AI6G8LKQCzIfb%2FuIJuUjGkXWbNn0KyJ%2BEg8aO44Jg6VVILEEbor%2BN73R%2FPYARhv5Wrh5SG88Lzm6gkqHMvSJpe3ZpQg2z2vwbnLjtlYFTlc1H%2FRlrWChzEXRjZoQ8sAwbIRa8epYzmPOE7WvYFRgpiiDsxC%2FbW5A3%2Fmhb1%2FwCyfCxotRZLfHM9abNy4cvHHA25HBQXogVHT%2B%2BlqSOL%2FA8UR%2FLnhmt3GFpvYt6HUjmn1Ht5F91y0xmS208NA7G8dGeDn9cwt9EEU0CQ6qzfeomhy%2B5QfNr2MjjUkjG5LblZ%2FzFLL8%2Baxk42lSdxKv5pxyNNu%2BuaT7awk4%2FWRx4%2FZKXipescOpGhMOCitMEGOqUBIRuxxB9mdviX%2BfntsMVK5k6cssmS6blGV5l39gdIcSq8C6R87j95riUVu5ReZ%2FTvepH9MXdB9Jin1X32Rzi1wZO%2B%2BGPU32e6yIChOugCTLJULhgMEE9u3LQhSoicNnkPkXmQHgwtHNpC%2FDuyL018nE0nKC1FDzfRgvQY9YOqB%2FMXHn89K8BKg16yneSMUOUOc8V%2FAcdhazv%2Bq7YMmrghyQsXtxnD&X-Amz-Signature=71a682508fd248b3c9c66e52698c5c1ce044a57a6070b805f7dd7c6b760c556c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
