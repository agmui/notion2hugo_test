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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIJFOXDQ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLka8GweJNmpErTWtZLStm%2BcLrcsjgIeQWUq3pxVSt6gIhALdDB%2BdLxF%2BPAyC%2Bb0f2dWMGm3wfj%2F5DXRgEA%2F3yqxe2KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwb7aYZ5L2vjsXHRg4q3AMFmrYg9zJnnv2CkmbuD6Zgv%2FIPjYzhOPZLz8kc73Pa6%2B%2F3sTnInURwUlGq97PmeQ72FqZ0AyouE3oiJ3ONJPgwOPcM1dCIdzDoF5k0kokLSzVYoJ%2BgbKlIVIebAoWGJFbLUVYcnfFQ0zWpGO%2F%2FPJNIX1toAsDpSYtAq0hmOLfjlK43QtMnjwlkytjT1rMBvOR2yoqtSExCCkrIq%2BGfamAViWppQM9WVTcBm8OjxJy1i%2F85QDqepBY1AXrnZQJhpwAlC2HMV6BX1k3KVQ3uTlWH2mQRPLBcdtsKut2bg1Z1itWBE1YkNzfStaIwgd3JZFXud1wqx1YF%2F1fCj%2Ffhbtt5qfmxZZ661fhF0VMqdjpTb0OMZIq%2BEA%2BB2YhgdEVHSWusZGqI1OuhmPH77VdwrRfJ7ytyEquxZAzKHbygfl3Y2teFMuMcdjCR6goE9LD5a7k8fdoXARO0T%2FNDFWygF%2FOBR01I1JpDpcLQPEazhUpiQUQriQPikPBqaVxldhHYr%2FhKSo2lyzTRPpKue%2FaLfUr6OcfxP6P1%2FV%2FBCpYALChE7vgFMXn%2FNSPqAh8bK1yanwoiv45Rr5Pg42%2BkNHUMMPM5HEKmTZtjWVhqezZTZZ4Znmu5REdQ3YfD2WSeDTCKx%2B%2B8BjqkAUQ%2BAkqPZKbIKcLWBl9ukNv6LCpHWPtghpdiWjm0qzRsmGyNW%2F1Szsmkn5rYgGiyDrg8tQxa9KD9KKA2qzEO%2BKgzaAQhYzvYhR%2FkhX1VjW%2BSQ2xxAn35sBV090QI8NQdmVermdaXoMY8pFrM1xXJWYQXRB%2FWux%2BfoxEB%2BFEVUpj8gJtNIGqgqjEttMa7h5DLawM77CXZVyVNyDRKAoVSnnJ06%2Be3&X-Amz-Signature=71f6af1ca39786cd8c70a91130866d32087d9976e34139ef20cca16435b28dce&X-Amz-SignedHeaders=host&x-id=GetObject)

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
