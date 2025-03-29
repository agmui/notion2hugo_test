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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXST5YRM%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQD18Wjf1s6OREwSicrAtLQHTqYr9XbDms5x0L5aA9Sf%2FQIhANIOcjlZMaXy0iqLZGp9Mt8qOtAlazsVDnKvyucvyIejKv8DCHIQABoMNjM3NDIzMTgzODA1Igxtf7Mw05ZhtxibKbUq3APVP7tYZ76EscFKk1bFeoT9BMFAJgSJFCxigIcw6hlRBQC7RdzqizrlOS8loemqE80rvYjw8%2FSU7%2F%2BzV59J6WjxlRxg6vImtpMXoFS483i38Au3AN66Qp79KAkFfxAY70a6lAHnHF2FD%2FoZFVYH6B9u4shcDAqqmaCEOML9U%2F09Ek6ZDs18YD3PYYx%2B%2FnpkWRSMnAtZ86chCpQYTkq7y9p%2Fj9Vdzt1NViPsVmI5xo26wxpIpWJfR4FrzixjSBG9iSwOCSiwxWjIpp36RlTQhBc2rhJ8qf41JMtI0kyNC1r2CrU516u2kZw5lv2J%2FZlHXN9o83VLCPlw3ZthrPk%2Ft2Y1A%2Bn56Dnx7J4OYVeUM5sn2Clq5qhQCMDMg%2BWeeB8%2BZjg4y9MeAZJWx2DEpuHAgyZ7Ii66O%2F4QkwN9%2FUiNWlYPAN%2B38UBOR9xdE0MgzIhfZXlVWRDRRfWS88ZY7YIHC2pqfDKlG8RYqCF3o0sCbtxDo4Jf3KVXBv9j2UA68FHHI%2F%2Fe8M8%2FaHKJ3UHGDOPNGUClK2rcP%2FxIm5lVJjwhd79WVBCwJ6B88UDRL5n4e%2FNULw6RSWfUQO16Arm4ZXvvjGuqjrdL%2FQFqHBC5JjCcebPHErQSqI6sE4B0Lm1JeDDQ4p6%2FBjqkASGrTEG%2BDu3N1tA%2FtLMSMspL7tpyh%2BqEAs9T9o5wQz5rGAFIeFmV3q75ZUg76U4yllmcY6fPXPk1rXp1ZVmact0fi7HQYHTl1QDDfq8ugRF8ugd8bNtbr8iPHCyY5FTApqkIOduflsIH5RXGPRKo5KkEZgon%2FcZ0EEjCFM3iiEmc8%2FNURPk6sjQdlKSuJAPb2SyQg1sOkfJT64DvYWs48DQLbWui&X-Amz-Signature=c35c4ace51998c6bd2182bdc6b2c53d070b56363480e1325f7c6a74860a0a4b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
