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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOFWELVK%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCD32dUkNc85ylIGXQ6lZsl5MSwrkmzB0GBRna9ntVAbwIhAMw3x1il%2FrKgKOcdBRdtPtaQ%2B9fDjaro8I5xoSFd%2F2GKKv8DCFYQABoMNjM3NDIzMTgzODA1IgyxC%2BeJ5sXWgJnuPdgq3ANoGnf0iWaW1oKz%2BnutdViJQzYrvakORzpsbUIw3dPvxZMMmRPy5iLfO1CuFVOoG3NbB0wexZSrxPT7DWYWfmR4YgwCjXjQH%2BBmG83uwO9wRMVuyyvFUo1FseO6YpxJtn2BhTQj04YP%2B%2B2ymledrRioV7ZGW7MeNTw0zhJZlhk%2FOzJrrXSEh64A3Z1ZvAMbgKxVwELxdyuXyzV5AZ%2BqDbYdQ8PJ9UeAaYYufAuxWrmna85alyVcQrJGhi8qiupKVNMQDxarLtgPohrtEVJXryesfJoJMIs%2BXJYoAalozJeF7xIcVctf323Q6UTVGmDT%2B4eZQl6UmAE52zJ3O1IqNY%2BJbwFg4a1j6tQLQYYdnNUWkAYybGDym90oEcvvyqUcjTCrP%2F4kW93dJhkiijcqgD8BUaKKREs4us7NyPzg2gTjuVdIk3XBmxNSNIpluk2IxIKr0blNCT9mcoUzraXh2mTrIf63O3vhqDOJbHXbRnKQqEZmbjAxfi1tVTdkpQ9Aswc8oY4iXtsR10ipcPZbwBd3OvLVMCxrHHb0u207jN8Cy2hodXFnzbwatd8azkYR7wz1%2FhBZS6pY4aYLvwlFI3M9bOFyXSyIDAsJhVjOpPDSIcZ8PuO8vkg3yv535DCl5YnCBjqkAQBJaXqO%2FSeL4dV3%2F%2BQbG%2BtdRwl%2FNqjyyLUwkChH2mF7K%2FeQy93K5lRVEMY8wYsxmtInPHcSnODtDIZbDMGe%2FCxCpS7O%2BnaJmyaBjEvKCcQzKByj%2FGgXAGbB1WCXjTpalP58Q1Elde5VF4FCcuJodeFOSfkXYIi7OhWHXdpXWl52gQsfWtrIUR%2BQ9mwTk%2FNqeQhqPn40farCp%2FUGd%2BRdEpp2QOwI&X-Amz-Signature=93600d01a5d1d39e4a966f57fccb9bff7b80e2a66477871e578d477e0ea293d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
