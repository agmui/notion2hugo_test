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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QPK4DJ7%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvemGTVLwlyKeWkQk2PCOK2ptTp9A7ZbWV94UXbdObNAiAzC0ykKrZMV3rdPjJqlka7pnceq6QoNMOl5LgtIa85dCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOLpZrOvGjJ81yQ52KtwDXZLy%2Fmlf9YRT1g5VSIYseA6VLfWOj%2FAauBxfggI%2FKinzRd65HrWMqSUMMHtAuYwyn%2BZTNGu4toVpIdb9lBO1HjUwooeSehIWjkVbA5D9XBXvc79fDEgVxck0X9tAr5dzzbQEzCkJFWfhUdJAGS3bfR2gGkYAwHYGdGj0miekBMezkSPId9gdfTFnDSlJZVtLx0h6tSIEw2PyAlU6qCb%2FBHHL%2B7%2FduQlncCxW2ca0MqtFbvyE8rLXslIoYFZPXgfJ%2BMRmYKsU6hwfXxQTQB9BMswOjiKAyyQKgAnhB7ELLdSA57llSNKL76OHmKXRMXqiwPqpAaUZ9GkFqwj7Yhuuu6LAX75fvPlZ%2FRmeskWIY02ItkYT4CxvNwjNO2Q0cgqXrNEzaEEKMmtpJy8KEDV%2BBUhf8oNZip3WF1rf%2FRTpcnnpeVjLhIXZRd6GuJXDV%2Bw7n%2BFW9ctYkchvcMALzhL9eZKVjd42etvvDu6e3D0khiiNaTyCDcsdxCFREh4OB5t4C5YpoPbY%2Ft001NcMgga95DZgTeC7v6b72hSC91qmNErcZ57Veogc7JFiVOXgX6AInsEF1P5aD%2F06m23YayEyGv%2Bh76MFW820vHdhu1Cfto8G3A1ulSRWUi2KXFUwoKONwwY6pgEhWfMCd1aCOUrz8sIbbWFDI%2Bc4p6TXTin6kwl6KKXFnF1lvZOpez3RP5Db3uXJhCBNLjVbEFtedUXabm6k9hq1ir8Ln1b83ER34kp%2FBBqr8c66ABzQnk15tSxQs8ZwnVIEOQcCGA%2F81sZOkd2gXNGp3aOCGIChLjw%2FWlseQDig0nIi9JGgp2bkdH0PqfFUo7%2BiT5z%2BaSM7dJvsRtG4ouho3J4H%2B02b&X-Amz-Signature=f2d438488554bcb622e7620d5e5daa485dd4f660d77d772ce4d835592eca97bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
