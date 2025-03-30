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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ETUJTW6%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIBSxydbkGco8iIPBvKQJ1K%2FWTBH8Z8fZFAIjSEtmNeCeAiA73m3NHnJEYxAxDr6keR%2BZNaob3Ht10bRhCS02JwLBDCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQiEkImQSInn1w%2BsDKtwD08uJPBmHaiB07Bz8vBBXlQ8rWYj6e%2Fe7ij%2FQe1BkTw0ZRVmLg68KqnsifCoGwZ6aP2cAgkrFXmv7%2FRH8bdcdDLWqwscRl9NBrq2ThH6Sq9P61Oez8YwFPVveYjpzUMRGqKqgzZMn%2BjLG7V6OIdKuGC82kct6KkvTshnyr9X8VF7iyAHMGmNKqV23Zf3ZCz5maW2wDzPydi2w6eHoeR4z3SnQ2SiVDEWV4TKhKV4tJE9Rpk3A9nU6gdcuYE60Nvsj7bY17qo%2BUmSs%2BpVbjfeg6Zl5GFhQaCFWPTW%2BT2LiV4phHxeZs9ywKWPGWP0IooaGzotahDvugU0n5dHQXuQWDyqpoPz6hHvl%2Flqnvr0L9O2B43kodzRjM%2Fsyf41z86OTxLYC4Y9Po2a0EOP73%2F3ZSn9tpJW21NhoL0vGYjvRAsg9mf%2FvAkTaY9Y37uXLlA4BDpAZcNX%2FcsKvOv6IeqYYQXHDipaZ5Pu2HNAR9RVTDvYe0dT9ZTcd0wZkwZjGJCfQ7gK2HKgnjuMHvaQQbzMnl0N8GdiEks8IrPMpcEzMs3iYk7hGZ8g60ItrjO6OmE4TuJhYBe%2BxUHXPeYn%2BUC7du1Y1OxKfbX4B%2BsWDvzm8KdZpTwcrlVevsOKpSpcw4umivwY6pgHLaR6HgUuTjSwGAGYtpitFo%2BN7i7zcP%2BlPH4hwFcUm36JWib22q0PE%2Bcu4bxAv6wYfhI0hb%2B36xbQLMFatZ%2BJU2LBQhOrm10n0qio7j9lA8AESsk%2B3pfIOfLntKIek%2FcULllvlzLtLQ12VDAOPiD5irDbbBhsi2103xynhO4%2FSNTPjRFGD6%2F5ZukKrVeqXdbz75uC%2FKj8oxn6QKnYenYstulrw1sBD&X-Amz-Signature=a00fae5750de0d75e45b4785bb7770defdf82d7dc2ab1375a723a39aebf5abc9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
