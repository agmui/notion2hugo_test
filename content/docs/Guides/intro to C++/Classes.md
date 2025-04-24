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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6FZWLFJ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDScuu%2FUyB1mLrfvKcdOm4OC8oLawuCb95uSN%2FSj3E9MgIhANeeB0T635lc7Ef2Eesk9j%2BPUPwoWsClzV7Ejt3hg5ynKv8DCBsQABoMNjM3NDIzMTgzODA1IgwmLnQmvTX2ZW6cvbsq3AM7WKu7k5BXd5nF8CyKbRAPEXWlQjgEWVPshh1aM3vkNlqbM9Tvs7Qg22TWIvvIVh2eLd%2BGUrbqYHflLOL%2Fyvp1Ow1l4xlteUh9l1kjZuwPN945F57hlP5sTprtpbOwTR6aBE8bCIF30WVdLbQK59vVYFYOdYWnWmoL1Trlh2paQM%2Byqd%2BoPiWIn41ewEmjMmqX3p0xknlVV5y%2F3lT9PTgJI408pzC9wjKSaoicKx1Qs39IGsM4zc2Q2T7zIsz2GqZdTCgW9E4zut3G8k5nqMa3GTQ3Z0bZ1ttdXKjrGG5UzQ6qBqqRAKpnAkEVE2xnFXuM0fH8UYAKmBnR01bJzuaIkMfc2HXyMlRAHwsLGJsNu8mPBk%2Fh9dopQEOEVjfK2b4uO%2Bn3%2BwUPVC88XjVxhbhu69pZEDH2FTL0i2iuTdkvnjHxhzUtdTyEvAgv%2FFdLd0rZdYkX8OB%2BiEjfsV%2Bf5WM7W%2BArO%2F2m%2B3NFaWj5kphdg15b3mT1JvLudGQKoX77kO41AffrgAFe4hCzUPsOmRBqiIjZIQ9REZg83iAjiTHhoypOrdK0G0A2KHIdRXlFBujvgWzhdPRg99p5t5h%2BhHIjGVWQIeXgvlOhdkzNfCiHSgF7tPDqLw3DabBhMDCM8anABjqkAYujbi5nzNVf%2FB1RqngAC1TKyEXuEMdHgLvb8EZW0P3H8fjGp3qTYU99mxKdJUvZBufj%2FKk1J5xfVPG86MVvF1%2B3o1TZFb%2BUsy0SXENXQDbb3M7WwZ3qkPKVKbwORXJ2pUumy%2FQ7IPTueNCaQKO84m%2BI%2BkL%2Bp29YA4OUvC8Gagw%2FQnSNJ9mP%2Bkm2euKdo0CuNHkpZA2cvCkVuuwN3ktzkSAFyIz%2F&X-Amz-Signature=d16c46b4b2fc10dbd576b3a20c039f0d9d858041ee9f48e8332cde5a1602b082&X-Amz-SignedHeaders=host&x-id=GetObject)

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
