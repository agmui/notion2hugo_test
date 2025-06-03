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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOFPDMYF%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCP8qheCw5TVmKMPt6dvwRMX6Ft3Qmet95s2zNJSs7vrAIgbStiuN%2BdwctQmvOob%2BlVV2T4RFNYmAgIuc63lD4pRrcq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDO3HO8dho26p4mvM%2BSrcA5nd5EkbBuvCq93A2hI2bl8H8OxCMpA5fxTMTahCJLSaRotjBkfCu768%2FnfXqFgmALtq7IgYkX054qIcn94TNUCP%2FfzlA7l8QDCpeyaxAJnxG2FpiiS%2Btl7oOOi32brVMhyXWXPYyJrT9ushHSa9wjcuchmfy29XzT7L2v12bsAlkp7UxkT%2BDfQXGKtOdfClSyoPYrOczPy%2B08u7py8okl8Hb8YvqCMzI3BmoaQpNvENyZzszYP%2FoamsBT2lIKGpGyKCQfNyn2QekXPrerSrG%2B8gVml4%2FhFPmzzhuQFHiaWjCTuE2ogIUKEnlvEXxHVSLTQ9SkYEyz0pKD5L9cktLwbP%2FEesC3%2FI9IMAejo1EfoL1xxZ5w0q57W6RReXSWqXVatgOmc9JE6Ny%2FniZE%2FtHJkewbQkf1DA1ZloEUNa1ohuQq4NCmPgqdZJK6TU%2FPs9AnKpRdE2m1bllioA0P1hPEaxvTEpSvW16Nn3ESSqsYkgRAXJA4%2FeibMp9QGNpSlB1N4kRfOjcoFz%2F0wSYVHpTbolI%2BuyMoNE6UgYd7Qf2SYQhREM7S6mFXX2l2y2O6CxrEqJWEK3EbXm70MxaqQCRMEhdHU2xKmsFXayCn%2BX4x1ZbE99GG%2FJ5260qxWGMO6s%2B8EGOqUBKN9Qi7vKbvrAH6Y18ChK0bsG7Ot1168G2UbXa1HvUvrxr94Zfxm4KQHXrNcu3UExKY%2B%2F%2Fkqg3jFJyXbgXucESgQGGg3r9DZMqWBHEzJ%2F9azx2N6QKt15KZPIj7lvlWZXKsCjow5E7PBugPWIXs3wX%2FUATlcOcH65%2FqIcexUmADd6Bpx0zg7uZqtbb2PTIxHqBKZnEHkJgrXlFU%2F3Af92mfw8Zlz4&X-Amz-Signature=b4ebdb2e01ca9d11e02bb3badedde1de8e0b49c65adf2a759274cd08272d2b07&X-Amz-SignedHeaders=host&x-id=GetObject)

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
