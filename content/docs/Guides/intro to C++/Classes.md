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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q63OE47%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T170657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCID5v8sKRAtPlEB8KoqP12XKhMVSviN6%2F8DyEEHcXrUNfAiAokVhi3G%2FcscpjCKGyXLP5kWe8v5eF9bpwi9eJqA%2FYfiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMElj%2Fyk0kHsIgtLR1KtwDdnziG9pkU1SlqJSN3pPrtO1RDTRw2vaM9nXIv7xt9h1L6EFq4ebzC8g45Vm%2B%2BFokm5mK7QWF30zBLz0UYlnEOPNTwT43h8yJaGlZzeRCbQIm5JeaVPjti4BXDnClhgmAnATYISbiNiF%2BfybqT3%2BrNdsVtSNk3w7L9eeycH9y1ctacF7uMndYLeQqUEHnEaqaSceCphTJZqYaqOqlbup%2Bb%2F9j530NMusMiYQ3eo%2FM9Ovrm577zyTjAllETIS8dpvBrmMZoL6ahHiRxkGEPtmj%2Bjszx8yXQI0BVP7sch%2BHYKBSHVYL9xkWPih7goU6QKnc4paxVVW4uJk8PwT1zW%2BVXZ7VKz224bzAjypiAQDIKIUMp4IMPTMUBUP25kADMjn5ZhvmgSyVIrPB8MgUli61SfeAN0A%2B%2BETM9Di3DcViYcY9WXdUt7%2FVRZL34dPwJNRKGvm3GA818i5Rkl2k2Mh21qCyzq9SM2rgiM%2BiXjKag8M1ZVrCgDA7AgHyCa0wOZV8wLeTt7vuZykXhZBujNELUGYxg6xYB%2FWGKEgSPONTkrmRvRZ9EzRAiYX52WmWdDRPaupxFx9nGZz1xquMY42x57eHI0%2B%2F24bRstlT0hzGnOcTNSxcViphrWJBLzsw35fxwQY6pgEcCt5kbT9g6TuKJ%2F7OQTRXblUSsv6ovlo7eipFiCZD0%2BIA4sgpWrjyivnU3Jc3P9CYHqs03v1Eo9f0EKyiKO%2Bb%2FyHBr2suQubKDiz6dgKIdoZqxhdwnTMWozOXfcApjIx2imD9g1g6HUttBBDCzPwZH90YrFZnoqhpCFmkE80akstyzhGEkjzHiSzRshpqN7nCRK2hcwuoOZJQzFFVt8GTpLH83Gff&X-Amz-Signature=51b1546d4223e9baf15c102f98ee38f9090b7b15e33e4552616a60efa4bacbb2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
