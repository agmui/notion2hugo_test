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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJJ63OVR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCW44zyFWp2dFYjtx62%2FOc7qlOkisZizNawDzw9zQstXQIgZpDXtf2Vhr61h2lrbW0jFO0LlvuHEzC6bfTwDh%2Bp4Gsq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCJV44FV%2FpHQ%2F9DLESrcA7aRI6ljZW3q1Q7opcuWh%2B7sgA%2FttIbevciOj1xbAElkXAlhU5fdC6h3C9mrPq15eP2BiqE4YmdjRrPWR%2Bt7EJHNLAb2irtx%2BbMHaGt7tn6nrNi2qcD8hTqXaFJACqT6oRBkXelRGNpL%2B4ukXVDeKfw7LG2NmJwPh88ZPg63D4omgbsNCnJMckgA8adrPjRenX6n2nhYn8LJ%2FhCvp6CAy2Ep0JMnawhLvIkf2sr%2BjE0RsOyCE0Knnzy03%2BBzPIciQ92xIUiHpE6ZVomaNDxMtq5w3DILIu6Ex%2F%2FRrF%2BYuHiRA70XOTsUbdSuVkL1ymO4m8sw6wCggT5rxemmeT%2FLygnotPb7qUf0lEdcag%2FZ5zIZomVu2l8zl2YxJNo1m6aVPCXz7IZUHtjlpqR5g68YYp1YlP7qb8PBM0dmdNIlKMw%2Bu%2BE%2FS94KRi5hRuOw3519kVMl4GJMHo8mssOqfPuxnCzvevJuI%2BWSa01ilnoTJ5AkTz0HVD1UF3jPNgUI06BgzL8HlrOAdsKLbzU1MKYrk6ErATNM7SPtWZG6k9Da3OQ%2F4LAmNcH0sMsk%2BbAKMoXxFF8rRQeKdlS5GHQiChZkUZ6QQCrkhYF95Jch2MdrJvhIhmGAfr3P6P4YxzFiMNaPiMQGOqUBjp2UM2Q89p99zxn3XBR0WtFEZ9UJAX1SS6Xn2EQNUdyJm9IQWF32%2F19U3AOmuQBWLZaFekNM8BkBi0LznqejDdODJKHl34k6Jemv%2FA2DSzeKfeA5%2F5B59Pw6Vnbkkdmt3OerTDVpStcOTnVqi%2F9X%2FU35bhB7jp4GVeVvD2nnvX%2Fo23BfdB0%2BUjX0L9CmS%2BxTJzdbhiNjVbPurGXqr%2FnMBWGPT6OU&X-Amz-Signature=f7d6f9b2a44b860f825f1333a0727e1fa1ff448991688cfbdf5b8c2c143c2722&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
