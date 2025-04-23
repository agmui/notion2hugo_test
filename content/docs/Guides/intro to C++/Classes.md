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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676T6W7Y4%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCS7Raq%2BOahRy9h%2BcKr0ge3hyfDL0H5%2FbUe9VTgdXzVOQIhAKmk5ZIGxJmlWpxqJ%2Flt4dmb67l1hfTK7YJue1Io%2B7q%2BKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyj4UfKliOrKvWQYF8q3AMZ8P%2F9jPrxt0GtA%2BKxWjnPFeGUlmzqUotaRrJla0LDL8AeE9H30hf54N%2BmN82bFzKpXK1U8k6qVHsNpNbPsWdU13KNuF0VwN%2F9wylrP7pWWrZODxi9VJ%2FlWk0au3AfCY%2BUvlvYuTXfqKHjIbCyl%2BrUEXVK1CNWomj8kSA66ezT9NyEA4MvwEWkKxgXFMfW8lZbqDI870OCnfgeb7Thudp1QrsTm7kZF%2BYZKfmG0tmtma4T6jzAYeJcw%2FFQamSWxQ4YOaYn8lzrh3MqzVzzxJ9%2B1vsO6SYYVCBUX3%2BGYLGr8F6nPb7ddvLylL0f8EOOLSBTSA5IhXOqx8xeMmMnyXnvdzsQhRAHQ8BSABbTcXyU9aNNnFgPh4ozJpA5MWTVZCcN5viTEpQl3Hmz9j0zr%2BuheJnWTjTdQiddKxcGjQisU91EyYwG3TCMrzUp5t%2FaNO7OK03U0HTSBEmP978MJLS7qWPlzSxzUts6mic0Yh4lVgzB0pA6vgf0Zt1JKunuMbk%2BU%2BETfxdnBkfyOsrVbQienrAmqHNR5NrxbDd%2FsomGZT%2FhfmHRuN2nLshBPldEOy4GjcvOQReDeCGibNkOSI2XZWEBaokJMZtqqf7F6dCnNxFoL%2B0OjQDPVZ9VGTCE16TABjqkAfEgRB7083Z2gHXNhEzMoAO2ucJgRFpw04tM18mFUXigw8G75DFjWEHPy01n2zQj5JTtJG6Q320oark8a7fn2P8pGUesH8x6depddP9yftkU34CxWQK9I4XYtqyQZ2BJzcm03aLi520rB2m1CxfRDRvcgWvF6flnzYXZXUoaGCQR%2B1G39aDULQ%2FvUMJku2VA3ltc4Biiv2Sod1V6LSubJ4v6bq7M&X-Amz-Signature=845d123da6189386ad7fb8b88a92dd9307085cac8be20203947d42e9404b21fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
