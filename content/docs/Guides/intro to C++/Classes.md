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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V32RIUHO%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDwbctmilzbjLOWRk8k%2FacIhDeVMqErjEjmag7Z3z%2BqmAiEA21P5rRo9sQrUlKlUxUskEHXL9BPiij1NXrj6Hqo%2FDsoq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDGO9GDlyVvfU2%2FaxSircA56bYI6%2BSFSidgSA25GQr%2Fa5sosR3fSzPZ%2Fe3%2BwUlvJUYITUtaW6CX78tHL9Cx03xKsYcUNb8aHN0cv31T0ZKnWjtC7mtTceV%2BOjhUw%2FAsP57FAPOqIP4UaSjKxQPfs9Exk74fZ3Rork3dhp3pf33KPHC3jAhkwTxZFTWRm9Ood%2FQY%2FNVRmcAA5U4KCCpXraV9g1NPz69%2FQKN5rorTTDUTTb2IZCN0IzJ%2FiUESTOwoBwt0FnPVpNdY15ua%2BaRFGZJMWBoJ2J%2B%2Bi92LHXPHwXVnBEkwvSASFTV9B9Dhz88p%2BqbTbxTuL9qrSR1UwlHS99EyHjxLUa%2FOxMAgaZ7z%2FzTAePP4hTPHXexweaRdynVXZU%2BG4ijn5TrQJ4ZklemFWBNp7rRXsxzCF5%2FFb9vstkerglzcX6u5Fxu%2BMWMdk1Z8HkHcNiNJR9%2BxF9ALgiigwHt763RS5WKeLOHZF4DDjrUksZlOE3UB1Msm%2FhA3nBXwR9NtnK4PYHCB2f9bl9IxBOJ%2Fjyn4AfJ68ZF%2FpqjqAL1dCeujgc1%2BlEVz7n9nbcuXA9RzyJ2iDdD4YJfaHM9oAGKXBtCfv9xCLZbSFFBhj7v89FzvwkI4qnelDmNim89BiUnhDg%2Fn6ufJXQLUA2MJuMmL0GOqUB6t34UB1F4%2BvdiuOChUo3r7Mlt%2BrzdT93jRLbLg9dXLlxlM8I6T75ReJkTBZtsUZK16CZ3g8cGQWelmO%2Fa1gjDS7otrs2p8rc6B8bnT0m7s9NhzwxfXaWTbP55oUBmGfkSgFQKedpfAv9vPVP09RkZO8dAHXDvHVVTtaT0n%2Fntcd%2Flf3xFDJgBtj0oTT%2BODf95l8M4vHgmOAnFJDuZc0Bd6aMZV6G&X-Amz-Signature=f7efa27f7b5a0cc3a7b88d086cc8cbde17f2ec52d9809017a183007406be04d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
