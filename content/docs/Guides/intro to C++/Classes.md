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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XUOS7CK%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCwAli%2F7vNHpPzu0k3ooCjPRtyNypjqCwd0NgJtYjLIhAIgSB22lj%2Fq%2Bex%2Bgm1rti9WV6kmtHAZezDVnYF0bU0%2F1xIq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHLr1LzXfopmNj8Y%2BircAyFpgFPn9jFwY8YdLwqM3sfEPoq1cGUCDDwyzNIXHhFoAk69t0hI13FNIpnX2K3iMMPSeqQbTNv8oRetRE3%2FB9CZHws8OlMC0Vas8SnK%2Byw%2FbVFWlfpKMGS8lPOhK1n87v3atNDz5w%2FglHe1k1u7RXq1SNdHLk5fVqNY9e%2BvCKk7tdc%2FUahjx%2FyENUTs5xybowdpQk6TpEVWFigCuIrHuwp5qJQDkEtY0VIRRhpe3njDBgS4%2ByLjMiCJ5nUHzYRnQU0F0VxnFLjhzA8AN8DEIasWSIVuKxnyJ%2BM78VCNx7EvNf3M2FEfrwYj6TCVb9eZizKfv2zepMwPogU90jl7wPCcI1nZkOmd5fq9QiWxYVqj0H%2F8EzEtAT5MCYD2wRpKoDUQYGTc%2BcrQOTLPnQ5DJLdDs2El0%2FAGNXGhA9Cs%2F%2BIIcBm98T4ABnjMLXrVYP2GYn2M7pX3GkbFUyh5ls%2Bsvnt8b4gzUDY5qDkFU6Vsd6NNt8DVRMyQPuGF61ZPFlzw%2FfNndDnkB%2B2VgY31DOpD9PWzLUKSDAoioecLt%2FDrVVG1QGqSjVk20HkGx69AgxY27cqJKkaLVMlxTOpa2erKw8HhSmlKBWpPfigWbw0MnrTjEhnnSWa2uyq6U1OUMK6YisIGOqUBFMfQG%2FXrxooIMFRgrlH2cufEyv2HLNp3Yfqo3js8QuIqFKH1Vn1CdllkIJes%2BA2PEJLHP%2FU4MCoGlSNt%2B0uZDL09NplpEbqR7BICKo2xxW168Ij6MS%2Br4ZbHtRaAmqYYsmUOWKyNcqmLMBn7mTnQjKwPlVGfrCgmtB%2BU%2Fkh5Vpsks8Kh0wB59M6Y5NpZ2Kq4mBhlZUf20wOl9so2W6VhTdhwlGuA&X-Amz-Signature=73341b703753507130bb347b8cabdc7753fa6bea07bfefa4cb42729d38996242&X-Amz-SignedHeaders=host&x-id=GetObject)

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
