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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAJXG2VA%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDfiNa2kCaxL9SkMIXx%2BwnLesfzoZ04qqln198vkOrl7QIgPdabkVo45Hq1aRTSPzTGkD6Imb5%2BRGmnl4FJACvy1g4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDxcSAW%2BqbxbOVwqWyrcA15Fpd5YIjCjyHozG67E%2B%2FIrlp%2BKL8umUY1Vx5Mddcnw1YidwJu8yIWlrwdLzXlt1Dz6mER%2FMMo0yNoIUpDVU2Y7HKlJ9ZnNfdW7SkHGHaZdD8F83sL%2BjeOg3phjxB08g6T4GwH7l4C3YIVAr4j1gltkFR4G0GZnKQWlc%2BgfkDK1aedeVETsaARyTCmrk5etY0u%2BnWT9gKn2IF3YRVsoaTeaWRa1M4mPX35B2KNDhVsmal%2BmIL24Tgo0kZT7m7pIDp1Ddd0tBkF89afIxD4q%2BY1QNPP01JCfbDGe7DufEJbB07jaBTLgGrnGDiSGtufwe9bV8kSbo4ewJjnOB4zptWWrkETadjEIeiaJ6p8ladtTZRARy4h5h9a%2BsyuYI9sE%2Bi3zVS8yuPeE8Rt2tdogSKMj2mXc4SIH%2BcK%2BRmog6vtxoLSdOwJ5oKOCmgAqkmKK6Vjsu02FfxFCPtJekDj7KmTo6Ir6EH9O3OlFdrLxj6LplVZd%2F60o4bFdEpBn27swFfaao5lGfhVW6rhiKOJr7aaOBtHKW9MaRTCNz0kiJsu91dsiFFvI3dNkjjpkHgPnhlX00pGVO3KJcLFl1E1NSZQS1b4vrzvi5TdempDuolFjpHaLGMWg5VB%2BPhGaMI%2BfoL8GOqUBINvdOqZqVsFwm5o70j4m5t1z2hcCG8bF2kL2PtcFG1DzO85%2FalzNQJ9ZWD0%2FseA%2F93dKAE3Bzv6lO7rTWK3wFlqlJBR3f%2F0OsNlTk6X%2BMfUajNXmIsA2vnA%2F4giAkOiVjJ11Fpk24KokI99qHrMqw9k9hMRX2%2BRrXkCB0utd3tm9l9tMzOSkRnSkGGEaVHXVOfoYIQZmJDNIgjgD%2Bm0vbjTw%2FQAW&X-Amz-Signature=41710597cd5630052547ae69c6efbc06af9c818e9665121032cb910fe58dfb21&X-Amz-SignedHeaders=host&x-id=GetObject)

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
