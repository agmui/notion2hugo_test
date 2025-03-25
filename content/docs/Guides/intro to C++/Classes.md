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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3ZLDM6V%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T003835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQoF8CFr8YxfeguIpKkg%2FGLTTKi0rW00pna4NmEPGC2wIhAOXwIoH1dSn1zjeMClMAQY8bxpmTyZ9lqv5WyQr0ScDXKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlzNVZvyJsadExMusq3AMPuycD7jDIc7gq87L1eoFZrDCNeNyKW1%2FT6098M5e0unz%2Bmlb9bjQztqC5C9Fiyvab97jx0iJQsfDGL7D%2FAqTHFBy68vueXysSS19eme8F2cq2%2BYCST4Qk5qjooiBN8PqGARUf0WyXZpptfH4OHYWp%2FO1IrDN6ohCmtEEQ9A8nq3FufjhXovps%2FLQOt1ekK97w%2BObUSwp6TVlS5Fl7CMo4n0G6mPk63pV8MgCkpfO28Dz2sAIgyYYkX1PPAB02cIghe6ngVKj6pAnNvXa08x8Hi8J49HF1DktOej%2Bkeed7GU6NtfSasyyrofhMbukuThFn8v4CIGw9Ux8KeFttpSzVRQv0lpxi0PRUlYWFy3ZCVKqHvXKbbHrgWTNIgKnk1%2BQnLMO7NsJEsSZOPQ1HCb61SloHeEBSbP7Y9OdwlVw1YUaFBpfe2%2Ft59nhxzMWvMz06IfpYkAnho4kxES0EtbTRRPA6DihBbN022h9VCXserXybUikjCEhInum%2Fr3L%2B7ypu4IvTnsu1LS2XSfYu5aBBUvmflY5jXYCdF9rsSnY7kcNIm%2B6hAYdjcsXxO9vYYbEz0kalYNAld5ER6KAOG31mRCLk3SyKNxFdWBZ3I5O2tlL8zJMYYQCPD5pyfDCL8Ie%2FBjqkAQn9pL7azzjI8mEQ3cCSqNIWifD95ZHDKXk43wBfCrIHXIm8DBOqy7TJQkDpFVl%2FMoksvCLs7cR8UOPBj5wr3PgPsKmQH%2BpuH2EUxiDQamydsRJrcTFParQsYeTN6TLQ3Q5rd%2FE8Q8G3noTTntP5zoXZED2rjXCzNDCk9ZCyYTKz%2FHeIeEG24B7u7SvbM5YnItJGlfUUexEAIMKotwcRmkinSVyb&X-Amz-Signature=de3cfd68342eda08f215cb7bec505549097fa76ec1fd534dedf9e72221f28113&X-Amz-SignedHeaders=host&x-id=GetObject)

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
