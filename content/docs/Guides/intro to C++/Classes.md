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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6I3FPEV%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaZzkp91w61kXywK%2BU8i%2BMrodHio8%2Fw1BZX0Zmmu3N7AIhAMOs8OxFCvly%2BazXlZCfRK79wH3CSX89s%2BsoPg5y12%2FzKv8DCCoQABoMNjM3NDIzMTgzODA1IgyCAzGV8EgK8il8Cv8q3ANJGMBvXnorJsroArKuvPBmOdPrpwqpQZtMeSWEbiWDCXXEdW4yiLtYv%2Fl9UIFgzux8h4CuveVnZl1ErUeKeDUKyDB1j5dLPp7jLaZN77leRY4AAN%2Fwk%2BLqAeG9mXIQOruIZereWbGF%2F6uHmRZ7gFDFq5EYhUQhlQaNmsV7G0WHiaVOOY05JsSwsvEsI5dg1kVnI7jdv%2BR1GR9fNExZTnfiyG2elt9ZyROh10cfpUfJGU%2Fqluu4mQ2p8A5dQAGC7jFQ1uKlD1BRXEuP7C9VDUYXZ2BlPL4Qyrpszj8gDB131l%2BEyoc0JLBO00M1DAcdvcKO0teh4xsI4TcPfwhrU89JzKtcRpGsWHXWLSqilWTzinYfAgZTwHKDGc8NXmO55y04Bu1qXub4KIX7t4pPcK6itWE0jHr4HHNlW1WnVJO3qp%2FAgG7NgRWB7deFOI8mvj5yPBo30PRzpOPJZ4SOOvLyTtj7kzeyr6BtgtWavu8602Q7nKrykhfr95NmUmhbzJ7Jn%2FmuXrdWLbEVXSTZSM80Ip5YmASOuHUvs29TTUmzdrr6O649WC91kIOOKkaOSjOS7fyHD5Q%2Bx1x5zEK6YhvarODFBFNg%2B0bNOQONcLsP4iPr%2BLyYqXhhy8ZkPDCK7PC9BjqkAVKR%2FVCv%2FtQSez7TNTQFYYhj5yTcbbuD0y1sRGRcThlgwJ5LEeNqW2mf5PEk8MZr5e4GlZqJzC93TgmvrNpq3TRZ4NFXcgk5DPTZrxWDbW0fqtt56rTzxucvVyurej8fsjwqERFJG9IwGwZkQqkkoYVt6oeAkMYtnVgcm210qi3FB6LT80eEEmIf%2FXHBYrgxbtAtwk92J1rBnUcAW24Y1bXPLMKM&X-Amz-Signature=748c247d2a14d00178ceaf79b4578007fa89cbe46ed7dd1687943d8afe02ae68&X-Amz-SignedHeaders=host&x-id=GetObject)

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
