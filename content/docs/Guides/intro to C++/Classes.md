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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYCIFB24%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm00I3QR1%2FE8pvZ1oJbvq59l%2BzM35djALJFIyLGPoyoQIhANs7NEy7stuT%2FXxw2CBGhmOfPgLkTX0R0oXJP33CgR1AKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvVgW5Ul1UGiA9exEq3ANOh0Q7Toc%2FBmjMtwhfaDh00oSe%2BLplbzydIkIRk6z2H4Hfku7YbGOaXxJ7m9hbLv3zv4GfT8DKkUAVP1w%2FR4VUe5jRg1pZ5Oe7Nw7u95pGuyUiG0fAnhtBvmYgvYlTpuxCy3zG0pDV3Du6wvL2In%2Fqx6vi4pNk3n97ouzNB1ydC8eVoZvgsszt8U1bCAI0waVgqnE4fkUHefC36b3M9UCM58UGLcZL6LxPQ0uOcdnG%2F6FIZpFhfYC87nq1VKwi0nJxWEEcg2UtkfU%2B6Hh7ERerIMATtJ2e1GFYLdvMpdcWKfaRDkYh4Rx073rD%2F0nzEfeGpYcQrU9n%2BmL2jcP2eTq4hQUyA1k1h9TgaY5zwG%2Fs4FYuzNaeswI1N4PWVC5TardBff7sP8K%2BgUQ1S3vGZK0U1LIMIZp%2FdjFuf5PrfiP7QtmJWIvviTRCBmrcfg%2Bq0BWydAKgTZSS68Jcsqdd%2BJG3tKdjVG%2BaPg6YGwRo%2BSsBt62T%2BtsO1MSvGRuD6HmIu3YjyOarfBHarmXPs3nN%2FPZt%2FecTbA%2Fxf6mYToWlh7L%2FI2L1OW7hKiyLizxFq%2BSFG65MiMUoDV6926FiGH2JI8qm0NO7cgPN7Waok64JFuv5ZWoOtA%2FLzOEWaX4UFDD88LvDBjqkAf6pA7fz9uP2kwsRSW5e6Ey9%2BZQvO4SMYCE5kBzgWZC1mmKJ7fV2bc317KSRt8LnGibWNL7feDY3hJId82MdwPtKGniTt4WpfZfaOyBLsXkbqqJH7Xbfqu0V1aDQX70F6Nadxp7SPuLScT5%2BXHNpVETWAp52DJGySCgCUPdm1TTnac6X5h30uouo%2FO3n6Yry9wN4Rz%2BqnSOJH%2F3Sjk%2F8CL4LPHeA&X-Amz-Signature=110880f5d87569d421c1414b07f9f4c0b575470f640d55de8face7fc3483511a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
