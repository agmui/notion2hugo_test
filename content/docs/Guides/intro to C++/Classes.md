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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ADNJFX4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwHMHXP5kKLbiWVB7DRgJVUS5iPKgnyYdSfpejdiFqVgIhAIMN0vgeKdgZKyWmPzmGgmHcoOXRUZRwDIZ1vis1qeMFKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0%2BwAoAMDI4ztwNfcq3AOWVoPoZYU4OuYzWrBXEExD0YF8jnJEEd%2BlJEtcUiFl2YOe8GXkJNWbbilhORB3CrwO1fq5wQYchHb1cQEc0S9VxvtWwo%2BLlw76jVBpiywtQ3UrP1Y6eXTIkupi4w45htjRL28G4JfirOFEFkI05RTBPKSVwj8JWD01kK6O6snaRij71dZfTqQj7A%2BlB9shstqC7HPRwz5El4cp7Us%2BA0GN7aYX%2BR%2Fq6cRYHDrKgz7E1UeUbzmEHPsHhozzLU%2FpGbqYZbpnOuUQszUpCGOmuDO08JKqKE3Y0uHfnh1YJb8jLVLQ8Z%2BhLtA%2FXgvA%2FmVq9dqQfIk1owariDrPRPqULNDn6dlDhzMUXZ0rrLkLPqYSXtzY4U9h7rQwdbUv3JAcg3Cczd8pWBt7VDIM6hg30tSgX%2FhBM4DCU6n%2FZD71gm%2Bct9sn1xn9AbYWIrVb4j9lvBZDznmnhaLul2idvJOQ79IC0j%2B2Vrdr8P%2BUf49uNLhPftrosOlihuYTRPb%2FztZ4pAr6LzgCdR4DRetr5dktd8lDbI0dmUvhB0iFk8ZIYGMI%2FSKe7Ot3xCWkuLPCbvdFAg8t2cbQtsOaXUwGM%2BxxnNVi5aybsLl5FRKVRgRMijxKjoFJ7sR3zkLa4OndQjCAm6bEBjqkATrBMiubXlleOjUsJ8raJyN4cBSQdwqU%2FKtTdvgiJKX%2FdO5J%2FE0r9Y3llGp5RTXcw7uOKFTWZVWRZVKSHJPJwToIE8j3dc0t9K7Cpp%2Fs7M2Fi%2By2uqCltJtQTT93hCZDXNisjjsQnrRDMOhSsU17seJxkvlmYVphTuoI71T%2BSRvJG%2B%2BvwWjjHaMOmzcPhc27KHxM78lgtMuWd2ms3qsEghM%2Bol%2Fo&X-Amz-Signature=aea7bd3370e139f45dfbe7701d267e1bf69f85a9ec2f017423e16660de57047b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
