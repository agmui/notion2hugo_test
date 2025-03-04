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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XL2SBJG%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T200856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSRiAcKfj5ISSmj%2BJODd8q6y1Uey4KLFLLlN0uD6omKAIhAPOo%2BS0fgqIWhckd7C34WFy7Yos2NcDGiTIoZc8wUQlGKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrN4aJ2dGarexKkUQq3AOQGvwS92EZ0oBg%2BjGhuW6JPqJlrNPqSKAd2k08JJYLngnEbdlzlmMqJUe3ZioftMLIRpppO3QYRxLO%2FPooQEREnovV8PNj0W3CwnBUDMAsa6oXh8Zo96nciCtdNU1wc6L4%2F%2B1u%2BJXBLCc6FuwV5KQsYhB8VPKzScJk7ZYCCiDOcs93xaZ52u0NIocRult4sDW0Nmt65NZdpyNut1jcxi2WWxSR0qyY6vr2hmShXzAB72esP5t%2BzECiX9O8JcSmI%2BiIXjyts%2F9SzX9d4xapBnQo6wJSMtOaOfUfFN7%2B3%2B7KQC3Mh2R8RnPEJIfaxP8cmlOOa9w6EjmUGUjeqwFBl88E9uK57pnStYMMDKEh1WNkEN1fbTu3wchK8CEgZe4nHYEuOZTe3KfqXIcb6aom4FNlf9o9Q8xruneoEnPPXMSb1bkcqXNiXRMlL9qFYkjtWZRkfJuJcwfQjTcsJH3xFzD65DtBTFMtGz8t5w4eCY%2FY%2ByxEiBkYaixLK1hNWzdPdDuLkvwFrDTL8IQiVDCF7pp7nszi0mpXRKdM2jP1xxC%2FfzKPbg0U8%2BHxXgfC94xsewZmjUAhfwZKLocaqFCtbaCsFSkMmDG3V1rb7gsTBDYU5jUZEkREh8ZSB0F7vzCVup2%2BBjqkAVxXeD9zHxTTngJpXeDeYk63QmJjhscdAv%2BXhslGQfrlg5W1iVki15HsvEQeaVhDVA1tqgddlEJ4wz2n%2BmZ5uwwr4%2BR1LUi2v3dsyz25QJk%2FmCvwJgDhDn5DKD4HmfUXxEbofM69TClvpLImeDUX6wo49vAeDYCcBz3Gf%2Bf1dHy%2B7J0TBtu7DRSQO894Y%2FO7ECB67xnBPKDQNf21fGsIYHpiUlsh&X-Amz-Signature=e72e70166b265fd6dba144373e21b6fc79fd4c1b50214afd5245e9d04f503619&X-Amz-SignedHeaders=host&x-id=GetObject)

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
