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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR52BSSO%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDirTkJuWjvIk%2FhGHVMqvnutDAHvqW7tsgr%2F4Ky9hg%2BzQIhALRX61zpg17cU8W%2FeUIBwMorS%2BIPSXfesEmK5LdPA6gPKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwek73dmK2%2BDddlWfQq3APUjikAlRukEEBiWCywjG4ExwmGPb%2Bq4cXOK%2FJIOqmPbYMMEI4aDKeps09nSXrsf2T%2BcPuevll877ZXZep%2FjG1L%2BZAS%2FBt4g3LrTTam4K804fUeDTVgwg8Cvwjnajpu4yzEiCWEvHQS8iTsNGwypZ634yaqEobETkn3XjI0KlRBEz6Lzw%2F5STKZns6PoSwccaZjOrdOkp0oNuQymMZwtNsDLwRZA0YTIGZONqlVrKL72Orce94tl44U55w9kHqPke1ewnjtRiq1JURmWd9G%2Biw3GU%2FC%2FzlyBrE92BYKyHX1tBMe9d5fiLpDc6FcpXcwBIu76u3cEE5mLR%2BgTzeGzDMzJ07JtReOpo3J0fQdc3m13%2BgXhp9k0CRY4iaqRyX3yd0Rjqi%2BCYyUhahNqOIFJaON9uPVGb%2FAyAo5VaZJhSWxWrx0%2BOm3UBsKspY%2BOgZ96YvEZ2wNZPv8jv9O%2Fuxv5iF%2B44PJT0FHpGIniXLBkCjQNtt0nr%2BAXewZlwjO%2Bwk7uWPpNve%2BALsyW82ERS9TMkgoNFcFjXyxO87VFdZR2%2Bwml0QjPlZ%2BQsb6PjHCcOFsLnyMLEHtENQnA0qnkOlfeJdKZJH7DQXVv%2FiwfkoxqJgcpeZrWTrGF4fH8gUP0TC9spbCBjqkAdQNXoSynd%2Br0%2BAJBwpoXDoUFwC3MyjqeJqW5sLLBfw7WXucLvbTFnEPCHsHgFgEny0f%2Fkd07OR7X4ORsBiKJKIrd7b%2FGpZEOjSwPXn9fVxYvgVGvWDOP3toQkzag5PKj%2BEEcXp9Ej42lX9W2csp8u6FgYTF1mwMZihcOIi7Ip83bXAxtbbKEk4entVKArr6KCxfsBw5AZ5WBkCmbNOqxuawDCtf&X-Amz-Signature=71d06db14b47c02105a548eff926aab29aeb5d4c4aa5969f5995f99e18980e8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
