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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WH7U7VN%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6yNdLncYBuH4Fmw5GYAyJKyoRIOk%2BIpZOCgeTkQRUiQIhALPsu3Q0v3gaZK6UbZdVRId7v0WL%2BIMKB6mmx90WORawKv8DCGMQABoMNjM3NDIzMTgzODA1IgwYuSjCDWTz3RO6jYEq3APpv1yqfArovnCwEI75VnIY6iVibgwzMbdA2l7MygRj9AlTrUW6NO5eGFL73jciUZ%2FoLDRJ%2B75%2B7W9H7wld8IZ5luqEIZKgIIq%2FIfjIidOMT0v0hG5YBm1mV9EGuzJf%2Bh1x2DYlug6gV3dXCJgwM1%2FvBQYOkXCzwA4n%2F39p%2BHVwzRVaf1l2LYmoM810dBEjtxfL5qGtohBn1OyiyK2dNyprzr3EMVEBy8%2B0tRV%2FCWGykHMVGGNX6S2FSrD7PZo6NnwheZkO9a1JPSzRK8TFnM73zAj6VYBQl1Lu30pTT2iiitrfeHlsAsArgUvMLjzhtxQJl26BkDmLMni%2BqpMrIFk6d9fVm6Erdw2y1u4CfktbvoX1qTixb1FdQ4YVYBnqfiJGNhclnBy%2FTFqWG%2FNdEdUk8fRxTYkDH5P4K5L7nveoI3ZerKrHS28WaSEw46BnDnULrCxxoOfMXrYiAQwQqzkQbCvg0LdCRB0lyq8MK1vg%2Bv7CnI%2BKQZpivGfmpOLMhE%2BMfz5CgwZ%2B%2FaxYNOrp2djp%2BLF6VbhYM2KHH6%2F5UrTCXTIlNvgsofzH7cVGpd5C9d6pTee3QUEuWYdyMyAhM6Zhv0NuL%2FbCTXi5Fw0mYzIiwP16K%2FTgGJ7Uv5j1BDCsue7ABjqkAQnnz%2FFFyf2m7b1FgFlGwwjSBBx0ZD9PeRjFnrsuC2xXx11i5EUxt28aZz1H4ZbesKeZNOAs7BQiH7%2BZ%2BrZCUHJ6kOsdOtGMH%2BxTSZIJQEu9HEnYJnfTJTidlbywSDB4jNR5KogA07HGW20Xg7S9MaetJwms0pekbHXTjMwVn6oSs%2BY%2F3J6e6fZe9NYgS4pYPpYLpSJcF8iK6Y3GYf1YW5cUXMKD&X-Amz-Signature=9a2dcde20384974f00dc859713b3cb5799bed87dcf2fe629154a7a3c229a5be6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
