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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EW4IYYB%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4RQX3NRy6FRqH2ifW044CZZXuCjhUyQUn6g3P%2FsEY4AiBfEb90piNQ4sHJZYoT1u3FR2gwqWD0XrT3ellPlGomnSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMJM9feouuezpS4dT2KtwDpPLP1JocL1qZ6hWvHjjxxZn9SS0Ey0yP8mcSudPD714FuZgzmutY8qUGfFqchOf7PIRKAGRCd9TH28wjCMZcmiiyfStPykKn3N%2FpuksV9oM1B0BK02pg6NdwJ7A2BVXYOp5R8%2B%2B%2FJw5MkUlNUe%2BT3IEtU4IYH09uF5PtTIZhW5SOl2J8cACo2nPKElShJuTUWkPXDeXhQX7XMKrn%2BDmxax%2BSXT29nNMsR6t0PlSPCvdxcHFAzsAJF1GM5UBiUkxY29p5gktJx%2Fb%2FvXsSmZvNj7a5Y7ARVNlgJ8XUe4xrLjfV0%2Bz6zCTxv9ds4iR9WkrMKa7yxNkjK%2B%2FmZpOgZIv%2FR5ednvsZ2K8RRGlSmf7Y1isNDXmeiLRO2F0Ht612eVMeCPfTjAF2ekJwHJYY07P8DcJ8M76aZBWtDlzQDYNFk%2BPJ0BKoP3Og2AL2GtplQtpOjm9ZX7KX%2BAq3yr0UFz%2BZezoUFrRsUOtCmoNonr7ozKEzUtbwqBhEOJlZJdIW8hjNV2OMf7LKDdYIZjnWFJQPClVxaHxafo6hQZlS%2BBHhpHv1M6rVBWelFB%2Bhm8hLPNOI%2B8HumYltXfR1SDlM8hIGi5BQx4I%2Ffh5%2FXyj3qpvuAivt5BJCbMES7TWMR3ww0bGZyQY6pgHO08vV9hVXXpFqyD1CAr7Q5buuWzMw3pPGH1xjguq%2BiSxOSLX2Zq0NsX%2Bq6bZg8myCGV37m%2B89V6U42iZRLbcrEXqiqEaEYoTIrT36zDLrwATSZeKUvufO5RrAyHCnwfedvG9wdlbSe9h6y5OFnyb4pQUpjz0a8G%2BA58RYWEGT4%2Bcu7e%2F%2F%2BW3nCiPR2nrykf5eU5iBLDIonEGuq1WmcVpirXWxYY%2Fc&X-Amz-Signature=d64cc588aebe5ed19ded753b2d73170ef8010f89f77384ceb8a6441cdbfae1c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
