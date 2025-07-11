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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QUEYK5Y%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGLlK4mEAlaS6Dk3uY7ZAKm72lKwWHyzGZVqyP2OAZUAiEAuP6BtLb3%2BRqReAkjMMaKhU3B1PCmNAUCukOtsv4hjjEqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6ASAiX501tA4YSuyrcA7g7kXl018Yf0%2BUG6ujdGbLkrvDeCAuuViU6Y%2FmkUVe2qTuOUVkMkbi8TZ%2B1IPlUVwvMpfiOnAyd7MLG%2FuaP9FVtjdqQUHFW%2FADoK4IGSMvG0rfjzBCdXVe3YclYuSRF9eurb3IOddrVs3ouTCpXgW37EfjPT2PkTYTciRlykIjbDC3kWY%2Fk46RGAE0Y4Pb87lRMCzMinR%2FETKDy2pgIEaTFjPIBet%2BkhWrTTCXiytoO03F2Z8hmHAeQFWE2HtmwNESstCW26vWS9KoNeq1KGfaqVAhMLdmWvhHW0yHXE8e9jcFmuH16LEAjMNLecppigQn9ATbaf%2BPX4M5lgrxjcOmwwhPpkmQwXvb4c6GwPLAZ%2B3VYvQTQI9PPi4Y8LElPk3U7lNcbyrDMgdDRhR3Y9dPKt9VNcA%2BhKaJs1%2FjiKuCEoEbZI32QHTXs4t9z96V70RonjMYOH%2BqgZU1a7plxi8xURCYd8rePS5ipNsnrUVXTVt5NfQ1oA8dT1JtnFEriyx1g2bb0TMAOYTRVQPZV6RI6q3%2BcEh5G1CIGjEdfvryefPBKVD3K4KQOOMj5MCX7AD%2F1JrcoB%2BGtANKmwXXw67Z%2F3fsQYNdiDeNjMAFF5m8GR1qjZaaWtOsNy2YBMKyDxsMGOqUBwL7K3oNexz%2FqSOB6p%2Fjq%2F9cHirr4zMH4oaGcArjBp1Ua4bP4%2FTf8bvRU2pUgu0Kt0VRS50vlyuRz0HW6Lc%2Br%2BFq%2FGPVV8oTuMODd2%2BXxupMab9knqs3lCYIa1U5OCqzcPE8yUPCsHSsaC75%2BYcaS3ZWxaNnuA7YKmsoFz94yeA4F8oP6QrWKdsMIwaF1SSD%2BkSPjQ4djvqnkSV7zISaBnTYcv9Zs&X-Amz-Signature=875af6665f6327e7a45552e39f631cb1ce73f7f2c4f8973ad5ad9451b80257dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
