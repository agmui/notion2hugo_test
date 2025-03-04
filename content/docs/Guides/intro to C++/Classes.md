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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L74JSVO%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClldy3CTsiSEdRG5GgdDOKJZbbRDqYM%2BU8H3vPb0rpagIhAMtiek16a7m7zwMrtVjfDypX4rEomMvLZUYOFPSIGZzxKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQ5oFo0Kr46TVtXZMq3AN60o62BB%2BpK5YY79yZZoMmPhIIpHpRtiTyuWsePZxvPqxszhyivnCEsihh98PiwV%2BXyQceGWwr38%2Fzn3Qco36Wn%2BZ%2FgoaYs7dqG9SSbJA2aWzMJLCppD1RhWLYWoC3yUR9p%2Fkq%2FZ6tKCBfaQNKFQEfe8e5zqxT%2BH4QFPb2A56N0rDmjlFUNs%2BkeRyFzvhq%2FI%2F4OFJHurjI40r6WNFascSsMsu6T2oLn%2BhneHCRLlhiLUZseKADLZy%2Bt0W6PL9MukeGm4IzpFvJiVN238FOt47hQWKXg7Vu15iuHEfDACEXZaB13bw1ZQWgqZ0%2FhWZa6ZGvHjdMBXfNPGOxVnlhqhV%2Fi5fJqW9GUmvAwHWLZfWcp7pcGpBhND5YMozwyV%2BXkjsQXB5L4nIlT%2Bf9Mhqi%2FtnM4yx%2Bx%2FrQkU%2B2SiGykDgJumZIfM2Wze5lqIFtxpXGrD%2BCBF76dGq8V7nOmhIn0ZpOPTmjbBGAtqvJICC8tPvkGdJVre7G%2BxrTQSjZlwPbHZaha4c%2FK4gDPGxJuKNMxnuEVK3rNsI9NeK7WtJZt89c1fvfRilkAf20W%2FeXsgaxk%2FurtIqyz1j8qcZIwCg4LI4bCHM%2FGfEz2OIEZ2QPU2Hht%2BLxJ78rZoSsSZ%2FtlzD9nZq%2BBjqkATJCbvRpvQDrwCLiFaFTKEQ%2BvfbG9EgCWLkJKpV9NTLfSD4XBPx3rgwVmptApvJ42BX7gQ2P9A7dkUSOqRrdLqIznrC0jAPucEI4MJU3wsKb6p0hw8prV0Vp5%2BbT5N7cvx%2FW0jYvP7QlBtTreCm%2Bu9v0ZJMX8dQtfRzxJ5xAX3u8GakjDh1RdcNBMNH9GBwBV%2BWA5PRgL3lCPOFCBEu%2Brdr%2BnGI8&X-Amz-Signature=d70ecad0722f5dde7de7da266ec511367e117824ea5d465a166981f04d9df14a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
