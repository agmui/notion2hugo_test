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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVRUQN7Z%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEeFj%2BYOjkD%2B6%2BilbL8GZ%2Bv6dH2%2BbpXsL9xRshSptzRAiBW2O8EbydJzHox%2Bfkn%2FkooJpAdwQuTl1LE52LY9DsbMCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlLadTpcrIWulmtAoKtwDVMy%2FDCygipafoozhVs3kmvbB2ZztOMno3cfnJ8nAQYn8iKjzvzdX6i2IoppWDsMRot43z%2FyeVadOyAFjzpp5KAY7ITuY6a7xXI41VDFQn2bSHmSJ2XuJNm3ATEZ0tpuDDi41DlBI1YEnFSimbseYOjDR4zmxu4QJLJ3v3WtINoHcFu3if6PVJYoePVAO9%2FOxeif54qWsf8DirbPWTxTdV4vC74awzspmpNuy8CJ6Yqq9B03Y9YDyTnKzdZvBN8t%2F2vINmi7P0FKbnJk7xqG86iW1rjjoD9eIU1SgGAvynwhPbetfBIrVOXjFUIh68BS093vfKwXp3wo3%2FYjZAwk%2FOootYwUpCPKy7C97gHhB%2BdziiO%2BFk9Xv6Kr7P24ZCLef%2BK9nqF7SpPxI84qkYTYRsOmprjRhAhoqAD6cEXw2mEvcRBBRA6WrvYp0giqm027fpprot9lQWkEj8UrvdTau4QzdfE3NTlR%2F9%2BMHRcfswakvvMcojUyrNzBViUMfGzO6KEFKxXTvIFijR5UUX1F2OEnGKmfw%2F8mGKUnib6KmRuDh6LzevVWw%2FJKbvTUAA%2F8EyH7Nkg55pws9up2OxiwqIo8%2FB1GIBqrZtx7%2BlGrtlym%2BjM02saNElxhVO2ow5Zy2xAY6pgGqCYXMOX6%2F7yLL8x21hzMzjHgHpqALjH6XIV6Fookq8tDJlIV5IayFPgyRbiqVvGjxpqnGDbuvlrtnbqt2Ah0gTKKKzruoMN4nvEeCFB9AQcrv4JurBTY%2BLo2fr4YiNAN2mS8vqNoBfurnyjhHtQUBu%2FCu9KHJinyoxcx6vUWrJPaQTuw6IhUdUV9qceBGIUxes2SiMS0%2BnxDAtyg4U%2Bs8iv2GN1r7&X-Amz-Signature=e1a1e1797adaa3c2d35bd29fb2d4c63350ddb594a1930a07f9b416275a7436c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
