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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM7MNAIG%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T181113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIBlj0M8GTLqa2x0Kdp2FPKlpQNOxipuXCYVLnPADu1z6AiAmN0iogVEWzCWqbSimVxZwD4NopOjJLaOp8HYScIx6jyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMG0R9HACyodWpRElIKtwDsuTg4MVXz6oJxlmQfxoyb4TkRYAj9j%2FS2RZ9EmUnanfogsw7Cl8IxSdOv%2BoBt%2FxXkj6ICVRamAkgjq%2F6ZEewJdEnGZ4xNTX79AcRkupmkzeV2GIROZeJULl7kua5XLXTYr4gzInc3Sxeil%2BEyU9%2FHErLm9%2F9LrzsrkcY17Fwiwq%2Be%2FiX7DBPH2YMFq09Ms00i2UTZPviBeLF7YX9YtSSEUzd0jHm2Ybakz0ImefP7ldB8AbP%2F0MXeX%2FwkawaWUt%2FdMdqm%2FDcmsRERq8wlUzk0hLCHufC1h21Fp32hYL%2B4nASFueibkdA9R6IpWRwYiI93d%2BmeGlAB7HunJWM3IpYPrrVwqzFtniKZqFvsTjP3cwe%2BgKEqLTUAWMqS14r6koFSHtt5t90VEASe%2BQyNT8futbehw01E0iPWqn7DgOQnwId8DiKKRU%2BvywisINDO5eM6vxY2Mb0aeAIDhrHsjYnfZbuXwaiNFaZqKF%2F6eFQAupMI3J5K%2FklY%2BVoAD5YZiLYx2c9BT9RTM4ZTxNzcOhzzmUfA4z0wK%2BcfMO8%2BV9Asr4Z%2BGpe80HxlWthJeoWQY1piJNECQEdrXdYl0uQR%2FZgaN1GF%2BwUZ8y5lRAaAdqm2zi4JIN6%2Fcf0aSpsjGUwoY34vQY6pgEmxmdrn0ULKbqVzrHF5R5e7SrDA790TIO%2FnBJEPhm8dQOyxO4f5CIsTUwWzxadQOlxVlFaS7EpJMWvKngJhJTsF7oTEuNANZIRwBJumWazxaMgXh0HivX6x2zIuypbnII8PXrf5gcjAsljHuLkXTzjszJnckPrDI4mmOr3PWtOxaxyXANTogHckWqFF6%2F%2BC9RhB9loEGaTkgwd5olQIIUx32FPlszK&X-Amz-Signature=f5e802d16d724655485cce6f48b2752f3954c48f6ef4ab6c42f361d048633de6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
