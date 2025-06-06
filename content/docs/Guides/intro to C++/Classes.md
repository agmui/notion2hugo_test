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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZXSWCY2%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T004144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCdO9QVKNlR9DCTQRep6zMYgsnYEOzWi7fuXtClSzAopwIhAPPN%2FUhz4kd4Y3EuBT7vIEkiUOjEjLwesLTkgwa%2BnX3PKv8DCEwQABoMNjM3NDIzMTgzODA1Igx23XIh5mcrLgcCcmQq3APW4ZgvgdY5tK0em2YTOzbsOeNItxvq%2FO0YEO3GOpkOPXmy8mMvLs1auYn8DTHnAX5DkZjHxHBQ9zdDB9aybvmIgWt7a1dbbY5Sebyu3JQxl9tNq%2BlKEGgGBDJ3D%2BB%2BZWhK9jcJDSTFo52XM0dbowJyCI2mCKtdGG3J7ALoALfi0RDYr0BcFtz8bG%2FsxU1NhWmF4uMMkQ0OYYZJBRGKYL2WnDFq%2BVq5zhr8K2pogFyY737%2BRFEi41inSGn7aOi%2Ba2GzSJsPmCb0Nhc%2B3tdKGnZN1fDqfnv8GNR6ty6WHMwGltmG3un9z5SZOouHewCe6HDFA21Fne4cOOe9zZSlyqcnnfAVnDTmWpZmWfA6gxaz6UwhAaFknpmqO9rmU3fNG2v3JaFBXIgrpGEHIe%2Bl%2F8w98BrWATA%2B3hXJVcJGbnove2rU77Td4jQTXemkcxRVjZYVzyGP7aF0QgCc8bi0PFC7CY%2Bp8aLfNKqBRUARNwbkGlxO2bBL%2FR%2Bby2JEHP8Urphv%2BeDU6ZcfCn5aPEbl1NFXNMP8VDD%2BTRyqBkT2IAbv3oO%2BVfII%2FcMPWftOow6brgmzj5Bh15aKBzCd2adwAwLf7n6U6qtKLkvNQ3KCubdAa2bAS93Dy%2B6eMCQ%2FszD014fCBjqkAeX2UAm%2FG5OjpCE657TUPRxlbY5H0HirYXQilEwtDhtmxfI5a8sXmte9lKPBbDRiQOOu3Db63suy8O2YaLjylR%2Byudquq7l2dPDcySCzatqkeWlTbshOYveLrADvFpoCgVJ7QzL%2FeydFKc8pnEsNocpMcheVdKavgvQdTVo6EvlBDt3DQ7nVNICHX3yqnHQy7q04YuV7RUo%2B4oyswNHR%2Bb8Raqt8&X-Amz-Signature=440573eefb46495f6cbf80530676ca0c36b69a930dfc56df686a7ba13d48dce2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
