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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVEQMSGT%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T004541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIH1LMU4ycqxJV2OO1zB9JASku50AUASzgye%2BCVjTOME4AiA79zrHwad6fXJZDIsxF5bqogserTvZ5kfxvSepiOkvtyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMNCoi06ZtMW9CY2uqKtwDauMCzohS%2B2AoS9CYZ%2B9EbXUjkvsxNRWT6L04ZwA6bWOaoGEjp3TmmZmGRoaAf2BiuYGhiVJffhS8l5CqpwWzcoWtQHYhivD4ZtD89D6rHHoWrrBxUqZwSYleRppV4kPU3UHDkmHScXqxOHSgGbzrxE1FGcSUrw992HXF%2Fi7Ab6NVbMfcZH9mzsFoXWgqDseDJXU5sC4a3GjU7BJeRS0hsqtCAOnC245pMMlPuMB5wHKGumnHjEB5K29dQyN%2BRObHTJ1Iox6J%2FIlnrQTB%2BFKeqrDD0c1BfVGwNRi53qKwDKCHxT7tmu%2FOQDbk7NTBu%2FN9%2Bd3VlO9pgEzeojgSXowzB5TuMnoDKIs5SSiSKYXzuLs6fGEs339bB%2FcF%2F7dpVfNfohR7ue2UVUMplev%2F%2Blq1I2TtybYR6ldaQetuGcdpnM6692gEwPtCURvahJuI0eEBAk0qJZwCraAkeNBfXx%2B0pvei1bFwQUUqoEeBmEZBc97t4yO2%2BKEiwWNUq9%2FLd0QRS5lqy44lGdbwtMcy3zDu7OHdX5TYMRX1FerQFHW0u99Aoywy4djcFU%2FMHsY6WuZkpWlJx0XoXwn0%2FR9O3Z7UeIT3mX72oQpyRWQ8S%2BWSIzzi78SBNa7WMshr4dswmaXWwwY6pgEPRDDS8VwJfIMD7qxsQpRIVExCGX%2BNNL%2FRwwXjYFw5cFT5BckWINANXAG9Knng245MYzRiG5CjDfkcGiEkhAIpnsJAQghhW%2F7Dm7toePeH%2FQS%2FPxd1IeOPoeQfNJ7tP9yC%2Brb6mKn%2BG0nYMc59Uv4t0zSu5ziBuegvgqIiUkKmhJfN7cipJ9bxV3Q3e9KUbMxPDcGc7XdBUTHHBzFcEVei17HkwJQw&X-Amz-Signature=547ebd43a84b750831d4ef8bb1c3ea647b63ed7baaff6ef722461514d177f8af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
