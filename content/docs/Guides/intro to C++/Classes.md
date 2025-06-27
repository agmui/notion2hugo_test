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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7SLRQB4%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIDL2Tfj1xmvp7%2FFvrsT3e0zxc32fTwSZA830wc8zjBqRAiAR5UhJbh6D3nXX8WPWXwzB98MzuSV6poDp4JeS9ar0rCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMTSnsWgSnoXFAZuQgKtwD1HNNB7Rii0H0kR0%2FSzpgY%2F0O5F6T7IzlMglSz88QhaipP9B2Sg0tJKy0hWbCOoiLI%2FencIrzzthxcClpPNJSvdYHS%2F870U75XHaTZoDGYoM5sYzgKOdEo39odYdl4lZ49KCXaH%2FCvWNO3flU%2BT%2FHzmREMeaUfAOVMUnCOrGcsTVp2HJfo2ytrdDKh54vAHeRYM7Z7ry1dw7KR2tbhQBXcmhbcoi%2FkO646bsojxOkZvudCdbfZqYZ2mA5ofl0dA9l2jd1SD5xNTyrqgU75NtQ0jl0jix%2BNretDoUH%2Fqulrw8G%2BaMJoWZZcgscyTmdgyvp%2BF%2FWJAvGS5%2FYbjYxcIHXHEIhfjxBUrjJ27qaQtonOmwyYxWyEVCAoG%2Fs6c8ZfUer5LzB7wqs%2BMDa2Oh9PG%2BpiPYT0aRK%2Fn1SKznvtLZFp4Yf3xKM8xJ%2BiawFgvysNSQddL5f0Dm1Uv278Sl16SaMM9LUAt7y9vI9RJ%2B8URtOnRi3iMcl2k%2FrGr1RJaPQYUaK5IVhl3wcX1tg3Sh0V5Mjg00uaHF1IzIzsJt19cBWn3CB5F6bHD24L%2F2EGWn%2FP3twbECLcDOsqSRRj6gd9B63%2FOBDI7PwzGGY2g0VuQNZgU%2BSfMXWNKT7X2jun2EwiqD4wgY6pgGIv%2F68B9uBy%2Bh9G2xuQqQowLxIwHAhdOF4MQgRCoMoyb781VHZY75nwH3xCq%2BZF4HgR6iC6aj8WCVb39BC52xZNvdMPiFS5r6NF7BMkv5ovpDNuwKbqiHFV%2B7cZFVV%2F7%2B5YhGt8FsiA4XdmDWIqnsRmR%2FNByDLLzrKo5hLdUfaCUoN6U0CHdfKWn7swKW8%2F3JbwzVX7ckj1qzMILjvNvjNJOXoUYfO&X-Amz-Signature=9bc98c58464bdd55dd52eb4927110e7febdf39c9b1dd9fbb244d88db29ab4041&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
