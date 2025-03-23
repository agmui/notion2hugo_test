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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AS46AY3%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCWiLroPanuxE3N21EOwG1wduNZZFHv4wLLSwkFigqpCwIhAPa%2F2R%2FbCfeO4WNRf8sDNriiM%2F4skKySPELv4CX6k9GsKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FpcjE%2BJuZEKcsygkq3ANfnRlDEFpXKQ5xBNVdRG4t1is%2F3CALsP86TZkc8VPhj5303VAlqe94BgT%2BubrBt5KKu7IU0TBbkWbUsjsUoTY8ZqIIHZd0gFPetFbn2Ngk6%2BFqNZZZEhEvQUMraep8cw%2BNEiHK1mc3h0yhEl9wa8jFNgZmXZUIF%2FhXnQsFb6EOmbeth0iu06J2DDvVla17MNdhyoDMg4onMr7SXyWb2xh5UuGL%2Fp6OUJJNrcY5Ui6Lzj5VhDyGTKMKWqLzzZ2ZzYLfcxMM0PPCcslbaJH9A7o%2BlVb6yz9c5sjkieWpWQ%2BQFKQ6aqaJTO7O%2B9k4KGnbeZrP5xX0BK5eA43lBLptKsUNWnthXoFMEoYU8%2FNMz2wZGtkSlWpwJwW60M%2Fo36qTfGcyjh7LtfxuCHacuqw0U0csQPGCW3TfUCnmv%2FEoMn69gtjN7v6b7hnOOxf3dL1FMYTTLeiMIZmAqhFEmjN%2BHB%2BF2O%2BrDr43wwfMvt7wwWueB0RZVpcEtwbpnxAG%2FuAuqY29aFnEwNpM43TYCPW3GrLSXEjjGQYvZFEh3ghLRHGwcTcwvy1cbtTHt8K0lEeGYdlqrqOEKOcE%2F5rLXijK3ZnI2SOgiSu8vdZinicz%2BgJK3Ssekpz48x9bBEo8DzCIt%2Fy%2BBjqkASgz%2F4xb%2BPG2eSQ6rEQ%2FpOtWMcaKm89630DjzhNXXLf34gA8jqf6A0fKA%2BRgSuGPF9qUrK5XM8VBEfx0jYm14X%2BayvMon2SBlRoO8P5E%2BgCLw%2BTIRL8CUgIKJBofVMQfoMfaozLtKigpvGKnZ8xl0lRfLov%2FGniQXwP%2BitI%2FEPheROF9Mzu1YkGjX2MLy5s5FOGBmePjJMG6BM%2FuxL%2BmNCgmFh0h&X-Amz-Signature=24aa70be22e181185b67800546e4aaab3fc7fdc7734851abb0826dd741cddf2e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
