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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657EEO5U6%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3VrlBW0uuXYRN%2Fl6LYM592gfMYHrAGkujBc1zwL%2FLIQIhAL9fVkw%2BCKrHQ6GUc6El7gtxH%2F66ZXhGCinfOLYaoqGAKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3Krn2qW%2BExIfdBLMq3AMEbw83j6Mj3qiVQpw1j03rVXetTg1HGkJN2Le76vS8dLLGXOkLHE%2B6%2FuNcHxxLVHVoSG%2Fp6YsRhlPYhQEQvNhHAvSxdUy7BTjIsPqHRjc8f0Lz%2BhOGuB0YrW%2BA5blJj7Yaz1iOU89y5SZ13Oc5kysO17eLorao4dbHdVvd9CVClsAvYMHJpzeIqWkgnXb%2FgLd0WNx%2Ft7iecagz7vRZY0edcSMaVPHqtjFjA%2B3mg2AqLcl91adyeIsNDP66K382KNncfCZlGmRIcGw7XQE0fK%2FYQNS4LmqdP39NpnejX48WjOllI1aCh4xiEk%2Fmc4W67ejMN1wQps7qFrzD5OqUajPyAJasT6DzwqTk%2BPQsLOAi7QeCZEZwk7yBbme2mtxTa%2FAVzWnmtSzjOCI9z5751qv2RegGQV4qtPMg%2BHrVlTgzkNKPWGUT8s5W9NoOc0pbBH7fioc3%2Fk%2F%2FSS5SkerOCgahFGKBdCn8yl4HXKjRb7eIaUP%2B6uLquWBxWrmpwf6zFUFHR9dFH3nr5Fxin69sZ9AOJ9r2MzDqs%2F75qwshlYxucVtnCHAhh9Gqmb4OyRVCWkClxMN6CLr2nyc0glqd8ZEYFxukuyNEUSOxuvr5%2BCKeafzyvlcenAeXBp6XtTCN5aLCBjqkAQourdHwGt2nNOSK4p6uQejFpGb4A4a384B0Kwube6l0%2BKaE8ZEtRdrc0RTlhVbzIlH9j7LNuyNUh91N9xuSi5Xiwtnhp8mWYN76kQNOVpwuBReIAsEGcm5jDhAL0smZRyKP95JmQA69th0dYY9pnQKVbkIvqdRMBJAJaC2CP26FZt1ENpd1o%2BKxldtm83DCJQh%2FR8x7emyMeuas37KO7erRYLHK&X-Amz-Signature=631aaca8f581cf259ed6cbb9e2ce570bf74a9e99ce0ec34e2739ef7a1f20b246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
