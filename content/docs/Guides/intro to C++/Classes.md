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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAVKKTVY%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T025003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFfQeZojvS5WRf0EIbeGEl26F1LfT6R7z8QIYgBmoe09AiAQ%2Fb7pfvjtLLEKGzvNwn8338ceC%2BdA6AB%2BXKZwCQ1f3yr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMo9buTA%2FCI2owuu0vKtwDUrUAm5g0BLX9SBxUtXc6c%2Fc0VlGQZ5ixEAgRfd2o5C%2B4zFmuJ6adWxoTbfvM1%2FXWyNFYP3uAGSf2PhswW%2Bi4uvPEyZpDVRyhKgm45YZhEcbe0Crf74uELh9JlNBc22BKbJ%2BbILoFgM89NV140aKIOwjEL9nvKwtuQ1XQ2G32NKJcZPs9swX2ZwNWk70QpNJciQxi4TkTM0NFhTrann5IVB%2BoeTYVz64PvXavJyNxp%2BQrVcx7jww8UnNdNZ6vsokTIPIen%2FGnnZSAAYoz9tlRRtyX2YNTV2GH5STNnpcSNba%2BEwWA1Rb0F8McBIBMw5Pff4EfgWl5%2BcPZhdHM1T2%2FpU03%2B5DC8wO8QxtGWhu1PtwE6E%2BTNKhUihxvUm%2BWw9wy9RNlaiIrQoNHxRrVOF7NKuxIluNzjj6DRLUUIRnmJJsCn6jnn5AFKeO4izJvjmVirSwqAIDh7oLFnX9yVoYqCA%2BdTn1XqydH7KBNoUm5lRSF4SxFo8jXuTU1hkMFo%2FGUHRGucuz0%2F7QFRsoHqHpN3yrt1v%2FF0PvY9dglIkIE3G0rRTP8b97h5qfxVbXjUZ85mfBivz5%2F9gDXHjbIWrezy16S8ZZM7YVGAT5%2FT73uwOCwR3SU%2BYcuKsVdkFow1pmnwwY6pgELIMSMeIW%2FtRf8sEvF0ZO%2B1d4dI4DH5tlemcRraEzile7e5NIkMnA%2BAg0XnCt%2BL0Yl81BriGVVrSHlOJSCPkHWpGuzuKSUtJdLZl46iGu4f98IsZtHbQtTssVAUdkJCOdl5dfBFiqu9xgTnyf0fO%2BOSdfhO0EwSdTpv%2BzyT1Lr%2BMvwXfYxQtLKC8Ws9PqwFUF2bV7KySQWPGGwC7MmxUfExfvqvLnP&X-Amz-Signature=d5ab9f1189304a9a316f0f5bb3a0e6b1458f611eb47a1ad7a6d9b9d2df41d64d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
