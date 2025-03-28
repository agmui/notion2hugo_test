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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYBZJRH6%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T121419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1YdFxYR0XAVL0rLuhbc4KbQsHHHpIIJSqJVFBW79dTAiA%2BOVZKu2cIYub7wNvgp0ogTYMiFcFmifiHSNLD0q6RGCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMUXBidY%2FY2PEoxcanKtwDSJ8h%2BmJB%2FocefFxi2x9iveY2uaz45%2FMq3oEJ3xwmzh1V63YducT8Q0F%2Finpo3I3rIMQGeHkpWPlAlE3AsDL6zuJzKPHf%2F4LSYn5bpNm%2Fssr0NHB3ZDq9igrU8f2zMNH2U5m8dQea88iu3AX%2FjckyRtTQdCyzk3ml4DAEpoT84CY3ygzbjl1vDU6cHxFQXboOJIgNxWskiJLursqTwAzxVAdHEzsbzVh7BHcbFqocOc%2BcMbyiTgTS7czlb04Vv00GPu8%2Bbien0yB4Gbw8NNCn1qJ0WTn1yArZGkKCZefYYJMJYJ%2FMPegTCXol%2FnqzMIAOovfhOYZbwipBrWgHLEDeAdsFKzV0EelJRJMzj%2BdmUkiztiSJuOppRuzPDQNbwxlwGz98DEOswHUn3e%2Bn2jPGjYc98DoXz8CtEaaUuqTvSleaaPNJru0pV%2FJR6%2BxZ19s6jgtFW3FRcWr7IVKXXdYY7dNzLpRiPg3VSswI8LNPkxxBv0QD1pXeUXXBDRwQug3FKOJi3E4ifhqizKBy%2FzDQDoSrIvis7cP41MjMLVCtWGUn9eu72WitOJb7MFvs0K2B8GrjSvaVOCmK7fDnmYl%2BA8l%2BPqG3PeojB%2BY4rI%2BHWI9exULbKT4xEB%2BN4xcwzJSavwY6pgFkMn6wuQvLt9bc1Wxov%2F1C8Uf0dPpkK%2FPEMsm5KL0ux10hGjGrShX68%2FbwoSQKqPCaNJ9PCwJgS0Io8Afm73fcCru7jYkrlFLubgm2S%2B0P5JbsAZ8w7DBic5%2F1GgnxhTz0BMGs2qBYthlUUfSXUpnmYwLE2TL80pIWjpoaIiUkqadrEI5ZS2%2F4kmS9dOpOpRsK6GeYxyofP%2F1MttBA6Tnn%2BUTetK4o&X-Amz-Signature=7192cfa8e0faeeca8be45b6efb8d19a945a3b5bf75ab66356777edbbe9e46b0e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
