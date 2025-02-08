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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3QW4P5J%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCQeF9SR9jdq5y75dQ7pT39gdMJr%2FhWYyhJIQebvM%2FsgQIhAKHdY1KUp1U6RdXDqKXU7Yx%2FXoPYkY5qfl%2BBM1pq%2FSZiKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn5TgDVRuuWsqKxkgq3AP66aLMliqYmI%2FXEcQFX%2Be%2FdmUVyQZ4%2B2tbbfdw%2BFOBpDiAU5E3nAd7vUZNcyoVwdds3voHDrzO6sV75MVQARtbgn20LduXaJeulAsFsprBpHtUUk6Y%2BOF%2FzW7E%2FSsF5k75ZrzG1TJ0Z%2ByZDPpfKITo0nmYuneDT73D0gFc1p52DEJ6Avls%2F7hAI1VJMlRlM33LR3xgdVys1ZuGNW7orCC60Ai0IrswvSbLKfJuK8aroDwYH83EPgLv8X61GaJMgzF8ztdvIY%2FTpN3M6kTaie84%2BwnnEHFvGlorbAd2GuV00mwUwGYp8RbcuhOcZRv0fm1pN6Xc%2B3g3Q%2FYZmCa6LM7LLT7ssZoM8vjNueyWS55l421plUqsQy0oliy9I8Ts0YjMbgygfG9UtbFcj%2By4ndZQC7at1VOcNMp%2Budj%2FWFEssyUUrecHsl0aQxkfphxNHEF3jsJpYXLSEEkbhLcK5%2BrlbM3PyTqQr4pJyLLd%2B2zzlxZMFfVOFrJD8P87MDlBzqjsxUK%2BqFVsajaJggnbMrY0jzpy5Y7WSKdGn2QeTPMGoOLvYxHhPGvbbVNeVbFXY%2FYMPkkmXEkaKC6jNllCvuYPJ9g8tu0uLOOlH72P6BiSTiN3qSK6rnyIUv0%2B5DDpkJy9BjqkAdHYsoO3mPDRpW612ROq%2FoBWwhBVQkxSTYcqZ82iLp%2Fp%2BgxNxN2gVof1D4yQRSvh7u%2BLKE%2F7I45inv7yWTkVs5w6mIrs0436bW%2BenUFrtHQgXJ5RGdhRP88qzOKPcpduCgSecqL0EZUIMh5uK2vwqs%2FSqYGxLUZn%2FUr4%2Fo0TTpE0rS%2FVoFpQxnSMhhbGqdy7xKIUC0YKtzaLVfdaGNZK1EvzI71h&X-Amz-Signature=bbc6a86f22604ba60f91222cf864bc4280c9beba46a762e09f256f347c3e4a8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
