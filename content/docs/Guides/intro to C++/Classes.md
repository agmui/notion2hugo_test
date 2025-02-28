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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOTBATXN%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T170701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDXZdWkX4BAavOYg0loXTDFI7f5Nk8mZJlTUXgnQxjlJAIgNOAD5uUqkxtZe7pHYtuOhkemZjghtEiNFMNdcvw2isIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTzjFY%2FFvlGODBMpSrcA7Ov643C1NV%2F1maBmYQl6jZ9h9GaLmTlMf6YmsqnbUPHX4s9Mp6NCUGcvh1N4cqsKlqo4MCABZGglw2obsmS0qtyBBwl%2B5NxobhHT82FQFoC9w5qghIkhM6ZKoZk4fBxtUWMtQrm95u%2B56cSJaMcGCmLdR56TiExLNRRIrZuA6thYCp1mRkAHLqLuvBZNIPm2HsJSALTE4vSd%2FxV8rDLNTRKXCJNgoxG9lHrwZQUupbAhMhCru%2BgqOaBz3A25UQROkEclXnppkDpTENeCZzFtmfS5oF%2BK4bqcVbE8QRBdaVSYevZbbbsD95iubvAHFRK5bj6bS%2B6XcXo1wmqK6FnPMNkvK7joeRRwhN35V1xOdNo%2Bb42U4hpcqdVvzRRzEnON7rL4nSnNFHt5DIhpVEXFmV64%2FsLnZouY7s6XPgyd9iYxNQlOLP28Vmk9AHJ1nWyyBdhJeIdTIH4l%2BvyoVDzcm5RRdrB0b0uvah%2BG3SKFHMKrnzdS9bNuABWieiP5iA3zUt8smz%2F1gsqeqMADAQp6RCQCSwgNRBuCjIvLNgKMYyhYClT2olpM%2BUVKB5d%2BWIWezfhLCB%2Bk%2Fh13PZoNzgCQ7JlM1KQzMwcpPGrsFBLZFfMRueu9KPZpFh%2Fm%2FjLMIHPh74GOqUBo6I%2FEK0j9XUluVOo0PeGzpDceW0k80YViWrmd1GUNUHkxczWqP3J7PBEF93O48maW49R9y8cVgv4fxJ0XuIBc%2FdQ66hSoUtSLFccH1f%2F7kPm0mp8XTwkv3m1NceBbm3rR2KZtinDs00dXmIbxUb%2FA1%2FUIjkUWzJonvuGMGfVGTQ%2BYbcMspVWhcKUx7kLmlo4To%2F9%2BR6cjGrzb%2FOPy2lqBTSwnRGe&X-Amz-Signature=4ea44e94ef122b295bea3f81c9aa88fc3b12ad9fc5ce746c1f964021db51403e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
