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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XNZB75V%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbSf5YrZDPA%2BPaD3bxeLR7x9A97TFFdI2ie6F9qQX07gIhAI1SPLfshZB1x77ucCJSjMTW2KwqRPFj810%2BlvkxqWaGKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2kzTxPe%2FuZ46wdtMq3ANyVn6U2NlhWblP5zyGEOtEB%2F8X1NUR3eOtAqwq2HNeyDbwQTTLPCW05oA3YDkx5FKhcs75QzWLhbNGJXRyDH0JBHe%2FPZohdDLvoFVLPY29SXGICecnxWr1OQTAuUIF8VhwxL7D6FGOqWQMqatw46qy%2Fvs9KxY7SpjM85lzNlgo2PZBGIOcFjA98Zt7Gq2Ul1ffqu6bkhoYtf7Cp2zibPQ0piE1IHlch0559ZZ5fFIlWTwblzLCffvxhwxX4poOtp2K9uTnrscA9t6dTSgXR%2Fsmh%2B1ooDULAyEFpiNcTDq3ddhPaz4%2FZg7jOlrowNRGFusLMYLUoNFhGDrGScp6wulJwtjYOnpvruL9cMfvmMLu7QKkLIej6YgR6TrxZlyCQhkS1lpUV3k0u%2FKpYVTGGqp6%2B%2BNmyPQikRw0rXicgWAvKNTQQ7owoRDXfT196dcT6wdjA4ELo9YBIVB3C0NkLjaa1oMyhTEs%2FTrmlKVcfqWbj1Uvavym2ZX3e1VdiblfCY9DC3cLyrF9xfu5%2Bmsbi9UmeOFYA3T6LyR8UEGdm1nOJidU4jnh1Oc93glShfkoQx6Miv2AUsDEqdfJT2t6W9PoXnH6HF8d4TU%2FPPZ2yarCUgNW3zqDrXucm18AqDDHvqDCBjqkAfJJ%2BJMSwH15s%2FNBQ4QI1aRCTWwDKppErX2kxzkh8o7CQCMNhf%2FbQeC%2FvHz50G9HNo15i0pUdbz%2B5sNiQtqcjSuwQDKA7PV87MpoYOZZ4VTlyx8dCDyK51zKauV8mgWRFatDp2HPSji7rpmAsL2tFNNGM7sLyFYcLSRYdy2xDufkrzwAG7CsRt77x6RzjIn4zgyKaREV%2FWRJrQmdiAm2%2FOgp8L3T&X-Amz-Signature=d8fdbffd1c1934c4ece59ba97a04b2682eb498be3a389e682f0f81a976d621d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
