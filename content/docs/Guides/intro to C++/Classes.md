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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GRLUASZ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIES3jGQ3SwzxtussywdCoTPi%2Bf6d3M0BO9A9CR6o%2B%2B4iAiAjXhQ4mDkENGDFq%2BZ6mN2OTr8ZnaQc%2FjruoZG03YN52Sr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM3u2Mc5o7vx6GnRFSKtwDYAIkUoKgK4GtbagytMW9bzgzCykogBiroM2BEiAjy2v%2B0wSSdWPWYrOrxUHMP1YofBXUo3%2BvKtfEWyY6Lm5uZ1F5573AjF9p%2FI8KlDGFsiqOYcTNL5MmQeDjVqMwoR42wEgO51RRAIBmxkr8sni5GTCsfyxIyGb9CbOie7XF4UdZLVm4Zl9lWutB796VJe1Myyby%2BccoLQAIXZadvxwWkp8ABWRsiu6Zt9Opdf%2BV6QHmimd4A0%2B9gIegKPlSe3YbkDGP7k5qlyC6ujwFItzuxw%2FvuKNocPVNy%2BXkG7E72r7yghAOfB7DLb7stIi7CffI8lFq50ZrJVeDoB1iTCuc2ZL8F5Z%2F%2B3R6JjZE2zqXxb3K2dDbQ8cabX0l1U9hzCtUPR5X0NpNgpxsuW8qoyIGrc02BuzH4R%2FigPU2SktPn5praiEwaekiNyqF%2FJ%2FLCrFKZQuQauDFSgZ%2BIGyEdFfJqSW8%2FYvirLAMgzRhAUOem7DGnc2HMcmA20Ioa2bQRnP9dNgJWGz4L1f%2FAHI%2BnbkiaV8EWm5Lw3cfzS60urlgM45amEmkU%2BJMNfxZAVZFI1AvRvCY0X3pRSo4MWOK3qWk7UGuerO8smvNLIggR5VSxYm4SobWwSa6SjXp86gw8bSnwAY6pgFd64QxdYYTy%2FGW%2F2nP64wgrY8Ebys%2BxF0xC%2Bzk%2FGIu7xKHscXFjvQUQ9%2FlYo4cX89kgqghAImsYdm0GccZh5x%2BqhqxPPpc1Rex2WKiW1dLSMFE3ExYWU%2BD8kE6%2Bt%2F1c%2BTmBmHbjzaInyOuy9AOmOvRSOMhDUoKNjuPRLYPYMKqNGsMjgInVZtpNg2ZdADsVfoQWNptdJgPxU6ksEt6UDcdnWsl5sbU&X-Amz-Signature=3064285f7f8a9de81b2766b19cc9b0e8403d58225ba77222910c79e6282504b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
