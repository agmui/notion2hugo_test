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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNHVO763%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ7e8BoFwYPopctqB3HKj%2BnPpZ7Hg%2BkRxVEST9FERXMQIhAPG%2Febs7nLlvKOdDF0KZg5ULb928OElB25q1gjf7ex89KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwm%2Bi%2BT1gaw3mXh3RMq3ANEdousiq7A9ZyxfpS4Q0jJN31VINTccI99mHOX3CxAoj07vP9ETzvvYwljqWLIqJ4tm8ZlnafeYh%2BhO4hoSjoJXuhqRZFr6Cs3pv5cdkCpfnRBdpDyivTtkAr33Qn9ph%2FSJQpS8hz2Gx0%2BZLWEs%2FXV8A2uldX6QH0bjT6KvpZafc6gNVxnJkFqI598Fcrc984crdYKrASN9EMWAyL5OBcowXXoZHSmUaNFC1civ4koByrVlVWa5ZgIMlUyOzAlmTFfIgxwXNlo8Pi1ffaduyHR5c9aNaksJ3BG1NxdLSke10UNnxSsE0lT29YbQ7Q5z%2F0ZRbidRQ1LkhCULyDrQFrZicul8FqooWJBSqJHEEp67WiIOrlXZVbn0Zq7VqRzsT85T0Wwx0Gz6ys4%2B1JkmVbd1dexfbVt9I6kXuY%2FOGHPcqKTzsNaSp1z7uT3kgeE32i3JD5FhoImV2Udt%2BJSycaafbMqy0DUINd6BcWjOxDgSmGEb76UYd8Oj8BQOi9ztRhr%2FUV8gyIoo4APDDUd7lhn1BT%2BX1P%2FdaV5cdntaorJ72jvu7TIiZEgB3Sf2lBjs2akcaqyxpl1ps8mGvlWPRzFreSvRKAZC0EmxbjsgSbr5fWULL58nFj8JzjbsTDfxvi8BjqkAR6G9XPPN0j7aA6SZCmwtLAsMY%2B7wiPi0hFZ1IZwvkaR8gI07qjhTXHG59hLsJgvYMODaQ8WKcOnnFfdQXVdGn3HeBw8HB85h%2Br4pifNTzIlh%2FivjAEotH8TlKNZ5Mgf6tfR1WebOAQ1ugZ%2BOZaNxJoaa%2FditVvErP7bpqnOKKgBExPfeI9%2FjnZO6d6wD3eZMVK%2FG%2FUlIo0EN5re6gmiEB7VVb4K&X-Amz-Signature=1ad4c642e1307ac002cd2627388842cfaac4a03324a6327dac7469a2cd9910dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
