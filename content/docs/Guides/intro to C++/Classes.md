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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGECUCES%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDojgu8R6MWJOOomOIiJRVqXn5ygH0rtyf3XhL7tj1tOwIhANVpfocTGcVN%2BygRcLHt0J0a2n8GMddNvWc78T2mcdqnKv8DCEoQABoMNjM3NDIzMTgzODA1Igxxe7INGT7L0eLomMwq3AOAdtu6WkEU5l92CHbTMbfNqkCp%2FzulcwgWBM117HVwp2%2B02ttu6yy5tmw8DnE2KoaluUDofFB8rK1XAfkVjOoj2HV0qt8pBZPFeWMnJKYKZON2QQOn2MGUvBHnO3cXBz%2B3fD6lF6AGgbQziP9vFwykirO%2B55BA6NEUwk7cUE8SfLeLPe0PH1NGAwzyrookBFfP1muPn1IfM6hFJFj3ztlU7OJZ32%2BECQGm22Fx4YUMDomT4m6cnZoWvh6NafjZkAlUDGQjAqV1Thc%2F%2BLB8xl0b%2F7RaqJd9wsdpzaytLwSdWE3xTFr91uiEIdJcvBe%2FEquza8qD4BGHSDBWV49ARHDe3KNtG1nMlF1PbFX9HkpAaZ5IGdV2yMZytRlzkFDEtujSNygjORT6%2B34V92Lvn7qIylWGS2wpDC4f9I%2BaKLifPYZNHsRcOfJZF36DXptAWbTNb1CMzYf2IWMLicrf62wEvwSBX%2FE0IPmhJeXkz0IIqv4JFIoqs148hTg8oWkn%2Fc3x%2FDI1KlW4vbsfTl38qtIbfJHCgWXx2VBaO3GpCqI0dJnRFYtIFxOcIXLnlHnExDYnX9cEp7wIjG0LxTxuqoyx0CCDegbnvYQFZtyzJa6VVGN320%2BcDvqdG5LVZDDQp%2BG%2BBjqkAeX4F73TijP4nYfzEMWR%2BS9cN3kErLxaCt1RPNAWwJf%2FrDa8bvpVWPQMSeXiCQn5zLrnYe%2FANLm4ztNlAWkrmDo8JfmjPaAK%2BkqM%2BD%2FPRNE4TG9Pf3k9e%2Bi85yXs1X7yo1X2hjX%2BgJGZ4GZ60Q2EPOBWReJJdfhbNMm9irfy4H6F71ssg7I45y%2F1mg5VGmQrO86JB7TQzCUirmDG203pGIlqYNUZ&X-Amz-Signature=ff7f3419e91105407494a7fc2c7ad654980e08777ebb29cbe0e3978308cbf623&X-Amz-SignedHeaders=host&x-id=GetObject)

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
