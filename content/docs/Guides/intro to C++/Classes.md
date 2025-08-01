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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I7IHTAP%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHZCoSTQIa%2Bt0eER4l1gFosdUA4dploiWQrMOgjWBwRAiBHibftKQzGtcT7iSW%2FC9tipHDXQ7o3C19wTbE%2BpKgOjCqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxjyXnBxsddeZqJiQKtwDOSZcfCZVrJR4pXk69AIw4NbpxRogSUIMG4ThiULlRJv2zFG%2FTcAAL%2FxAfV7bd7ioQaRKTGYNWr92VkIU9LW6rdwHYpUsZZXiU6OoTgWHDprsgz0zjneom%2F9RyjN5RfQiB6pOsgeje8z5rp2URZeofpc2ccMMZ2IzgNxp4Je6IWG155qDY0dH5r5yo%2BY8%2BhGiau6WZwesqZDOTVEj%2FVtcf%2BLkkbTiAUcwZZzxEUFyNRusZ9M8AW36xv7CdUjDEfjY%2Fi4HNSDczTvAx8KAq93bv3Q4edLrHweyDhWfqn6CV1fq9FPq3zkVUGjTUs4LSzfSpUZ8M6DjaY%2FNkFT7NItawIm3nE0BO9n72Yy0PpOAt6qXr0qCvNXFdyU08Ko%2F8C%2Fkb7MAweDEy8PWaN%2FZIv3O2qrJ9eb66tKHMJ0RcUCP3seKOG4UY%2FhmpLDmQL5%2FxIacNksWCZRy94vJa3UxiDRwSM0OaD7H5rDNZZeG5841DDko6tbC8f0G2sJkDNx%2F%2Bhm2WK3ZKndE1wUHvjFYu2y4HlRHhUWO5PBw6hsihP69WC5QPOJiDC%2Bo%2BT56FAv3fbzZHzN7U6ce6iUFjM0ySePuMUzNg72CJNuuHvlw%2FsMUWPvUS64MPACi%2FA8KYXQwxfqzxAY6pgGlIicX9VKxLHMT4i3sqkecrmyXooQw9fsK8tTFZw5Vd8l%2BqKx8FZhiI9GgqxJreD0VPFQyHhrJplLJL2vyjMd17%2FD4za0nucpsKCTD3I5NeTgEqraMY4XORJptORqSSa8EjCsOzp14jfHhMUtEcQxxPWZXpKxdO08cINLWPX83LcYTo86Mjze%2FBppDUL8FbaYJxQ7uR8EbD0L0uE0hueh%2FTvCuci11&X-Amz-Signature=9cb58bc22012a3181072545f8cca4ecdd81e1e3cbc0638765958d3839a5c8a75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
