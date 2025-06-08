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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVKKXNO6%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPqShOF9FizZj0NqJ53C4Or2kX5u%2BpV3VapKbiyjH0hQIhAP%2BqQ7uelXpT%2BkNDS5DAgrEapwijam7DTeVVdAcg7iT0KogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkifWThAcKydjOk8Yq3AOtm6248GtFiRaNznDKfCd6Kuw%2B3bQ16RjWdieDbO6EPpIiuznSbB9PK0gSAn3ndNZglNao1wmDGQfDvKjLBKTaO%2BG44cjXfRs%2Fe9%2FNxKLIxBoo3oifD5EmJcdz4QVpqdfB0bN6CT5l%2BKqPnSLGjURr697MqKrucPpdzanp5dIPc8hnrFpl8Ju0IuVnNp%2F5GHSsEpLBBE4FXcmTtjb%2FZcX5juKVgmF1QQj23TAZL%2FVhSeAicgTO1o7dC8fDl5DKTlzNXGSm7GO1n4e8%2FqBL7FORHOahQbaWCCqzWUEZnbMxrUELjXn0UL97zc6EwbgsVXlI%2FCH%2B832UG8X%2FcXMNtI3%2BHwv69jpnMu4fDO3zTc9U3j%2FwS%2BEA5%2BE63gAMfa%2FO9X05HGOtkAGpLD4RcaXy1jBbSz27DaaH3vtXd2c3CWIXwD2nu%2FuBwzi%2FbTwCwo2X%2Ft62cYU0UZTyXHNYVzOgLJ%2Bemka%2B7gh2hKzu3ln%2BmHVA6lIhQtfotOxg4JxNbW12YF4CKwANs53inPgFi7iJkQWBogqZOvz7Ijt8n2agSkmykeLUGlsg7RCwygU84vXSeJa53fVUhxmQD%2BkAbt1EjTJxbCItmkwyPWrVzBurFuLeo5YNw8weH5tFN7x%2FIDCk15fCBjqkAQnuHTBngppBM7EMKeh4COB300TD04ikfSF5gyeqf7VfKraI0Zg8%2BnNTQAe6apohEWN8McLy1D7fDrdBgF%2Fn7sicPzd9dSTNZ%2FEzkB5EzLA%2FzsmOhoxRqcPPlFnp3uOvciX4udTHa7qiWIiDRNbOKg0SsFmoU7AHjOmeNJ%2F84n4E3BsLSVeoCMsStZD16syqTtfJy8WHcrjrSYKtya9Ng2y47h4C&X-Amz-Signature=b3c8981d442bb544d510068ae20a854fe488737a2bb97bd467b1b6212a905040&X-Amz-SignedHeaders=host&x-id=GetObject)

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
