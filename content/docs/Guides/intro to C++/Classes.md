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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULIKZFF7%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T140824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMdy%2Bm1P6pxk%2Bb25wAx3RQoLCXyGliOfWCwttuzSJ3DgIhALgoZpWZlULz%2FGQ2Ij%2FEbNz8xUemOQmir48TFeHd%2B%2BXbKv8DCHcQABoMNjM3NDIzMTgzODA1Igw4LYqpJDnqjwNlkI8q3AN2MY6qCU2GAwkLKvcm3hUBEoZTR7Bl4XNx17%2FFJHyFIhF8VngSg2Sf3QpAlS0jL5yff6%2FRcdYSHAGOxaRqYqw7CcQKYPDM5hNf4MUt5%2FnNDnpeR4x0B2VjEGBs5jUV6WD3QbaIuWaQrp6M2InGNpMOA%2FkbiNBlwyVWz%2Bn0BEzO0gLwfS8Xje%2FDEZk7WLdjfRvTNV9d%2FB5qpk0YcCbNDQsP4J4YggBx31T5GCJH7RGhyjAuf8uEqXP1Lf5vrus7VRbJhIUeIFbZ63PeuNKjXZQ58jwG7qYRIi%2F3u%2B7EIx3Ee%2FeZMpxNINDWutkMTyigdP4%2F%2FxyeCiHI0GTpooMSQ124rihjKgtsPBPVn0VryRqX2N4874t4vNesZgcLX1FqvizU6vZ2YEJpzXNrkKL3UnFlusS6fJ04Thk%2FmfpanyQ4uhnl3ZAjMserj7XHQo%2BO2j60v%2F6o3h5MR%2BS3Ru41TAS5C1fGtwllt5mfRMv3UqFniJnrAmioKPtDo99xbl3vQ4iWk7amOzvC8JwmFe4ImjmlbXJVO8yIac48oWzTDxTNczLsKbPkdWo72WkzB07iDcm1TEf474T7KiOA7nprP6w2WWWOb2bq6gXiBaXasn9aimbGyxdsk5%2FJnrudXjDf19S%2FBjqkAYdtJZS8gjgJLSY9nhE1e1yild6zvsAmswrrLter%2FbzNixKbG008CFi94uwx9rBd6V9ev5iGit571O1yzxuf0PWi33q6%2BD9Bz7tQpJzYt97Hqfns%2FSTr%2B1VoDQ2%2B7LJiG4o%2BaHrfcaWBM41c2W4SXTZSP9w6iW%2FKMS8by3IazChUM3QVp9V%2BxgcWx1TLCQK7J2WFFWb5npv5oq3smP3MqFdr7NHI&X-Amz-Signature=1bcf445dd8cbf30385e076525fb964a09693d325057756aa899302b4c295e452&X-Amz-SignedHeaders=host&x-id=GetObject)

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
