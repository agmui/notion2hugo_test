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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643R3L4RU%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAH3wgwSG8rGolLrNUoC0Lkd2H3h%2Bx3kxMW7j2ex4KTAiBX4bI8o81IVKyD184av0lULO7xpSF6EdMTcb4WYm4FqyqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFDrz8CgWjBFKkLREKtwDrTl6OJJmFQoHfqlBONZi%2BQe67NLa096TW%2BpY0eCxDiQeoVnajoIIazP%2BaIoFUS4i6F8%2BzYP4MK%2FCdbkdThPOdxfZ1Qh714924xyL7O1T4cI%2BwostjdjhuBRKgMv0hu4HnJJOlep%2FN74OB0e2vg9u41zLy%2BTlBqmQdby%2FUQ9b5WuX0mgqVszKNekxaioKHhTdDytPLQBtUqRVB%2BS9bR3AvC6QXQHHEKX40bmll8sZQboGe%2BNYunrBYsb5miwopZT5FD0mVrA88eF2F2i4qPlQ%2FCk9H%2B%2FkfyRvLv6bkI%2Fwf0sgA%2FYDEJLwqyzMDwxmgLpkulE2Mwxs2bdntIWzQZPZzrqqpzcC7EB4A5pU0RcPWU5RYtZU7Jt985SfJCJHqL24ZmLK5zNy8wPINq31sWY219XA71yn6An1qo3sohsBYd9E%2FGY%2B8qVd500Xei6BKcHyT6fxE2Of1V7W%2FuiuCQQoYI3OqG7JfBesGpjZoCjlzBY%2Feb8RUJFxv9g9ApY99HmgnM4J5M1d%2FtutOCtdtebMmG39j33ZHojPa%2BKsusDySCeN4czTPHkbi3BKHMaB40QPX24uTd00zZXNWR34FNtDJgnrpiIyN18%2Bz1MQr0USn2OgdByoAyO4V0e6k44w947bwgY6pgGzg0RD2pjuGFwGGhcrf%2FDG4URudoL0xWsQ81nOwkGCzCyoCaUMy1zp1pPccbUYCpnnsydbwMmWRl2xe8Lq%2B%2FcGurCtUW%2FVSaXLHQ99ER0Ycif9nrVs3gLMTVPs3zW9sQdYdgTNg8ABkig75wOWerlU1Rc72UCe9uFBhj2TQWYsECqNh18EzG5V185%2BeUrRhCVZY9QFIvjWwVpLTpZXN1m9cTNF7bMo&X-Amz-Signature=399dfe8a9c46d73961c49feeec4286ec7be81aab6712e0fe391663ce48470015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
