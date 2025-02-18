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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJIDLRLY%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCr1zUMRVJ2jD%2FQGT%2F0OE0ftGGjq4hrhaIqy7rF8RGQCgIhANSpIgZn%2BMh3oZyjZtIDeEHqSBXauSV1dCDA7n0fjOWFKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFY4dC9qfQHFKILhkq3AM%2FtS%2FQtUCS%2FUzcx%2FZ4PlHd9Iq%2BrCpT759JLPmoWTom3zDD1SUNr4RMIbgLPy7CzEAwo9VU1hbJdFILCfTfoS39fYyjfw5aO%2ByqnnibK1uQTIZQlQqlA585%2FGvNAIuLD1bSvunf1rg3cUA6Vzs420KloMEhysXNf88DH7cTG8Ip%2BEXaYA2I1%2F2N%2FfyGLp9nLO8JiYNTHmBWQ4rNCYeT3Htl%2Fx%2BCQ7Ksr87t380wrWZjYqulsQ0svuGqSWGxwom7DPor5%2FGd0ETGlvGbsLZo%2FbT1sbo3Hsuc3bedu7S4XFCAmUNz5jpmYZ1pyDVHGLGYnKYkCia3Ass9w5cxmTnP4a2%2Fl%2FheliamZa3TEDf4FY%2B84PgXlHtbsCKOkgc7WM8QFPRY9OxQnWDNk8rW7xbURdCz3ghD070dujG63lE39Ce7jpTYrnWKStBuoUBPNiVKYqKVEipQna3auXdABqlDXWOg6ed6845JnqqRsLx7mWYeYThWf9NwLnrNmIhzqA7EoXuMw6xIJ9UwM7Opo2aXOur3UNOssekgqX7wlANNOa%2FFjLFEd2P40Jwh7Ic37sXroNHu98tlii1kZYWYds0v%2Fiws%2FX8gPdVm6qkU8z%2FrXDJkqLq7ovk3J6Dj4ZaGFjCr%2F9C9BjqkAfyxWe4f1YykvBjD94wgyyjf94pnjQwiCNp%2B%2FaSUnLpMGaMqyqQaTB8oGkpNRZ2V9aifRl7ndM3j50Eu0XaAePesTxwQp5%2BNpkY1ZCXk7UdvdEM5Q6%2BMSnzGMBftA18LxpHlXNVLA6WRejRYIY5N6T2O4d%2FunuZJKvLqIHjLVOT%2BcD2r6njZ1qFPetm%2B7wVnJwe179bsewUy2TNwp8vw%2BH8wQ%2By2&X-Amz-Signature=907a0dc7510eba98025dfcbee5260485b63b20dfaeb83480d692043ef63f5685&X-Amz-SignedHeaders=host&x-id=GetObject)

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
