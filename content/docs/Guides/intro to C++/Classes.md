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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ6I6ZGE%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCyppVpptT2bR%2FIc7o%2FNMP5QpIjjqf7ovOMf53gBx5yFQIhANVr6SlLl9VUDy9nQJnvDsxXTR5xpWfumaIW%2BtcAOjpHKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGNfWlehQIspv5qnkq3AOZD6b1jQkgGQTrwSvTg%2FN2pWDe2jg3TPiLxL29FKveNwHrWZxn8vNeZhfnYRn0kVD2ra5ZkG%2F8D0eMEtQXjmoHIwrxLaSAr4WSvdQ71y9bohhEhSnp3uYnyC1xdTg%2BZ8x1rMRjpNLYaKVyoMgpsJ6X7DhMUqhjut1PDilWo34uMvWEsxWaKf0GftaFkTc72tz%2B%2FAMRtjzllUrj0qD9ghAIQG8%2Fnn%2B1%2B3hERmKntogma11pq8ch2R1UtNKM%2Bmds9heOYxfDmujhwsklasWPuWKWFcOMBlUk7d6XbMOmZfqTsjYP1Hi2R6q4TO0DJFts6vkBj1xE3me67U6mV0Z66u94KohOgJFAd7Ij8HfgTIXhYuGvPqiekbww5a%2FedGNxtLwdRS%2BDhV%2BBJirqYjGK0oubx6XgXTa5RMuQ%2BS2HIClxStEJ6Ni0%2BOJR3jIYqon3iJihsgQxvK6zqAJ%2BI731YrvC0GV1a7v4EMVQ8y8s0lcFIlna%2FphAk1jgJ%2BQi5NY8eUXvQ70U62DQ0SWem%2BhfUTchf3%2BLtKwMnac9ORIMSxzwGUZ9AWnR%2BKfIsyKcA1I0E2MVkzUHNDvabsMZNQM3eSEV9SEYgQG8K1KokgjwyZZyBHJL0maNrwk9RnakrDCf6qK%2FBjqkAUfIbjaMCFn3s7YUb56w6gUxqKFjtG2BMz9jYFqfHli6%2B7IdM6BGtWPSzGFgw7Da8L8jSAtVH9u%2FVZ%2BrLDYwmWqop5KTyC%2Bgzt%2BsDSlM3soeoxdcIRpUehWN5anCQQAHviPAY1X%2FUL4VhbIPPK83ViQ5ooRXhLL0fQBcS1zA3c6Mk6Xb2saxJXynVLnEd73NS3vG5fynpVAsRwsE%2FFvlKWfSL%2Fmy&X-Amz-Signature=805cdc8d6570f4281711a667a473597de6d44f4c732e57f3b285592865bf6ed4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
