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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGOEHAWQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByslR7NYHRPg4xWboKPDIkW8%2F8Z%2FSgXYUegKg5ofobAAiEAr3rtFdKXn1As7Vf%2BHN4epGtiQT20qLfCMczH17%2BwWWEq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDI2qwbCrF1bKjAtpOyrcAwsws%2FMJCq5%2FKmHpaAhq4rxEzCyP8hJghWNNcsChmLwz4z%2F%2BD0uNU6WufqbGiaqAcA0WyqgW0k2GsU8z5lLhIp2v%2B0RuFY55ShzDEA8vQL9r9dRLnF9MfAemuWDKnhkt7M108cXEo9tKv8CN4OGy1BGJou9mGFITBeLHyNfXitlOzgd4Gibg1yig2mS3dt6iveBSx19X1f08P7TWg53k%2F6aIFQMIRovdTiLLf%2B1URlc2Opm2LtDNpKw0g9s5506vLwi4FalCQLL7zL5sbKwI%2B1Yqdrke%2Fapo8KRq8ZYGQRxuVe%2FMfkOOE8jzMV0K48CVnrM98i4Om41KdNZxRytltIiGjs5NEqUUz250dr%2Fm%2BA3Xat8CCFInGgk0BxUQ%2FXL3uNUaKyrNwOZHdr9NdzpfDazS6n60bOU2CY%2FT0oS2Un%2B3wG5oowmhNk9QTaSinEgeTamlpY9We83QLZfOeqGSI2CKI4MBLmj3xXDt9%2FTwWWFwWmhJw96OJWIKI2a%2FPBjSSn0ctvfpHGh1GjouohGPp9C1guKhLQL94PyBjj87YDX4gVHd%2BFSiTiYiuo7tZC9E8SlSKBUALp5OYhoITYk9VIARtv%2F0101uqdUUS3sDH8b6hI%2FOxL60LH%2Fg4OFbMMTXkL8GOqUBuwcBjszKSFT92ftX1fysNruPwkpWye4W%2FGkvgI3JVvnhNWJmr4DP%2BmyEQ12PBOYNcdgF2hAAJx73oPWSCgbLXk9zgXx4M1AXSZS%2BWvXZLC2kBOFcEegBAJMSdFTRMNZvMWbDuIGiijtcKRG1%2BcKAW3e38vA4yxI8RjzkT0vkgkiTy2X0P7c3tq9RL9Vw9%2FcITRup%2FuIEP%2FIvYVaAo%2FMhHC0ZsdQ4&X-Amz-Signature=9d456be3d85e26a9609bc24abcb60818e68e7abd1139756fb6e1ee36b134e782&X-Amz-SignedHeaders=host&x-id=GetObject)

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
