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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV7X4HEC%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG99i2QYiVED8xPU35VNMto6OenxR7svZLQStedaqRYrAiEA5Cu5IneGNfjFwh8Pk7DAg8CSo9SjFZ2Bi2MTxt%2BAKUEqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM69ZZ4xAVUyf2al%2BCrcAwguPq9c%2BRKUTfnEa7o2%2BSBOnvOxUwkgXilSnvOkJ47Y%2BYCoJwIBpaoCkYzS4iuvurrcpUjL0QMeL5YP9K5jYNFsBxrv%2Fozldq4vUHJHGIqKHsv5Kh%2B9rh2PllpCMOGxm67czRRwXSgWIs%2BwKG6bGl3rFDbu8p3MKkQz6EVc6%2BEPHrqOVDVoiZpTBbLVXvjgIxXtpUzqxOexcW4uYvj5r%2BdF4rGGG0tqT23HcRSU%2BbfVwk2I7Dtu2%2Fiz2R%2Fq1hIL3eBGD8YXBXB%2Fho3FIxN18hES3ZHPIQRh3evqSZTe5Y8L2W3lMmvo%2F3I4tNwBQEc2ml76BQGvwm2%2Bl2u1drBBmE1ZOCKsf7SwRh6%2Bzqku%2Fr3A%2B5UTOfyJB8kASY4BKKVcV8%2F8MqLKLEAb%2FbwxX0o2dnFs7Gxx6H%2FFQOoVszhlUjlJF%2BhFZqNG2uHR91fwJ8wsj4oVI0oU4wgESAoytVweJU20vrbqTNwZXWwVH7o2wSibYapzuUXLdUcHypSE7OQlZ%2BUyqFpKmIUsl98o17Kyee7HTw6ZBu8KKmnW7y%2BYFm3Dca%2BMSZIazru6ZJGLfMf3eqP7kkikGxDGv9%2BNEq14GXrt2ixftDsvQMsPAwg%2By7k1ZVW00%2F8y1ipTkInpMK6EzsIGOqUB1rpHX9K7qlMEj%2BNDXnF7rIrWdoaO6%2BrGIUfR43%2F2IcVtAduk4ZL0PEbrNrojtkKw%2B5cKP9GOStjc0n%2B%2FffsFSoZd3SuMjZcShSSGRkA7UWSll7eVw9YplfOR0Ofy5o99RU4PaVzwlyyn8PE3%2BW05eaXVfkgO4e12iAcfTpYAPSeV3EWenKhVvzeWa%2BeV8JTqQk4yYCi8saAv2mGmCMggT%2Fas3ET%2F&X-Amz-Signature=88d823109da71797573cfc24f96bdf078f5e7fc8af4ef64d3ed19a341de504c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
