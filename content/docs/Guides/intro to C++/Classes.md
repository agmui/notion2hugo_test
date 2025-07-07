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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UHDJP3Z%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIEW68dDVpmVqOzp%2Fcc0PvJDfTRjZtEb%2BiimDEmS4qV17AiEAhLzDdBtLKNk53d9i%2BhOBbAMCdDGmG8SlthDyHQebkq0q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIfP6QJJK1knC8o1cCrcAzBvF6CyTdXyRAX4YXs9KToxD3PttAahNflqOB0oFvafdXD7c1D77EMW6NIKqmy0RDJsJ9Jk6Fc70gRam38s9v1XO8mxvOBqJ7VfWDDtUmL2FXdFIZ0r7QxFebYjd8oeOBFURBdUETgJ%2BreCrCidWPneoQbYs7WVuWKh%2FA4sSZGIBDPIGc%2BiFRs%2BthozERpm8WvUbjFsUGQFRMJq1MIqfErAoEnuxsmeMceiygd6u1IC07ghtDZZ8iX7Wdgsdnd849soVPVuTOZv05BXOTLaGsDKpwOmBmNMqVKttFhBIYbcjMjp2MoTeRO3WH2lus9PFmkXa8y52cFA68cF0eZyFha2G7dbPYzXf72gpvWKTU46F2UdCwvX9%2B%2F2MUv3T8ixZgLnIgUTSfIkQrRpl%2BrxguNijr%2BcRxY9dGQdDOUHLRsDLuN1jc2KhioYBF83CVrBaGL8plM9yaJpmFDTi6dTxYbx1NqwTuNx7qmh%2B5BT0XCtAeScYQjZZ7ol1sehf74Vj1fB3YHxURwVoKBw8qS11btVceh%2FLg85zdB6gcJOjPXDeu%2FLszThwNo4VZhOpEoOzNc1V3nWNwpsAps0Bhfl6hAigOiBej8Nwbe1jWRV3%2B70sbeMU7a09s2f3FgTMN6XrcMGOqUBfEXeJmWgwvj9oemmi1zngft8yxEFu6UPhtopmKvEWkzyxYE1YvC2VGduWQAUWvlTgUl%2BiXsooOhLF%2BOaYZi754SIfxsOmK49Ot1oS7ox4%2FrtwWQlMSA28xYIgX3H52mJMiRbjxjA%2FOLnHmh91m%2F5Szj9jQPnV6alkuyE3tWdNFeVMhSXxbnhimhLHuBZiabKYQOGzmNrW7PDSfxdJ2SSblaUFc6b&X-Amz-Signature=f97a77fc5a05d6c656af9adfdc353b018c5bfe10cacdb7fbb7a28dbb3420f16b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
