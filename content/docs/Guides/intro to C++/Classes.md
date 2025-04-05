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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5PODUPS%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAxfNUzxVOpehFalZHmWKWdEkXcg5Ko1%2BDefbd38BNeAiB6xOq0G%2FM%2BUZLbhRDpxlatO%2Fs6SSWEAxilMh8a06uATir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMxpmhU7R%2Fk9MKBktOKtwDAH2gE%2BhdXpqkM4VaVeMkgsSBmIbwlK2%2F9O4MvYhw3uPKL2sXqPVuqFxCv56RUV28FVDhzWOxDeUc%2BsxRhxJlkiYwDYZSlScgGB7uUHwmQxSgv6DukqtRbuJgTFXE16hJ5z8rnT2Mab4Oc%2F6kBitP3qCI5zRj8B%2BP%2FiHXlfEH4IOvpA9JzdxPFDhLnK4SPlfhUsAuOv%2BCRdY39RrsAbczL1s147AGBffOwHoglHKotvDWptrAamDHacq7tJN4IiLYnuUhwsxB5ipcHCIBIDw7prH8Y3aSn3H9iDaftvCjU6VZa6jQd3gfMVkbiiI8SgVJ45JaLteoSpus97PV0A4rlmIxLV%2FP0v5Q5BV0w2iZFAaBl6yPfJQBuegVhQeayWlCZkjygNcDkcspyTN8Xl1JHCr%2FhgyX%2FCtvXc8%2FM%2B3j1KDjjub2DrLOXi%2B4b2hnbvaZVrf4nqn7ZgIIW%2F%2FwObABVKrpUlmjxiVcvRReTG6e6JDgDnBAVtvlKJy8OvHeoM94atJJbvMGDdvsDKMshMRJUw%2BLASxAnDppPDNUHeaoMWbZzAxrj66uuiq9FJbRdmZTMl%2FVEctA97WLTUIVjeNyB9gBNtq0t9BWe3MZ5Z7ehcK2AgEHkLkhIax%2BJwIw36LCvwY6pgFOwknvAtBWDPcHZjVDJGuaF7ChESGAF0lEQr5rDxeacU8l6m%2FL295AYUYwcEz07jzdzK6Yc%2Fb3X%2BMUaOwdSf77%2BQ4cWpL7pC9hNPa7CBISngESUVCGCeC30aeWoBbh708%2B7de93c4guFwuMXlbHYdDo47SGioGyiaEVZ5ksmStvLkUNK9wnuFzz34E0O9MJxuRuVQqPtuI2XU0HrXJHgE9Cz7k51%2FM&X-Amz-Signature=1ef63d718a9482e86ab4ba949daa0c8ee6441eb072adb7f7be706156926a7c63&X-Amz-SignedHeaders=host&x-id=GetObject)

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
