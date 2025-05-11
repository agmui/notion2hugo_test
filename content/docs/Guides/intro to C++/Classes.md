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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4K5ZLUS%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCHpVZ5m6ni8tVrn39ZexvOhMIe1xBedh5n2aVg8WkRtwIhAIBWw6RsV3UBFAjPxcDXy26U%2F5dZ1R%2FTcuZkWiaFmDBdKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyClTeOtfVMRT6Ghz4q3AOYnBGpBoKHvNo6atgZ%2Fee09m%2BmRcqIJVkC7Kyf4KzFWjvlLGSxdzZtNMZMILez%2F44I30Bet51Z1tkpPuFZsz57EKw4mWgIUj1Rx10NSe7QWz7uu7LqJ2Ut4i%2B4qWTea5Yj1497ZIjg1WhbCXE5UxaobzpTg3wwjrynKv3GvhMPoT5VRl2vb4cpgJF%2BpOntADPdrTSwPPRoU95bkaWcv3JiRAHNBmpcX5FNy8xSHuVw6%2Bx5ZQ0H8kF5o4veSYg%2BMMOK5qkJGmzDmDxeM3G1Gq%2BbEBYAcN3J58ix%2F%2BhrqIlNJVZM6O6M2UXEs0nv5wKHFcqNFrtJyU2wTyT50qFU8iS4Efzg5FWUnwXLXs0eUg5AMmZ%2F19TiJmich%2BHYGNPGhbnSFDI4nMGzB9jmQq0JebaAGcSeEhcR6pJxFWboJaEYr743YzQ2xqkrTvHqzvvfXemw%2FXuHIxJ%2BRMVK3LS%2FyfYOBLs8JKimRo8rL7FLGxUHqjzmLBMVo%2Bqt5Cah9fPS7ETJOZQUnQoqSQdnkWT6qj%2FQ9M9FENamtv%2BjahnL23lFq7BQEDsblis6mLkg%2BRyW5iSqXfXHV%2B0OAbVCJVFZv2uEjbAVWp4kO5If2Yv0KAf5hk1vBt476aoi5KD13TCTooPBBjqkAYBfQx9C2Hy8i0cjyxC%2FRr9RoQH6Xc%2FV%2BqAwoyXMX5mO7603yc8zWpKKHNGz0GXZfj385Irr8qTKMJxDAWriLk4IwEcyodC6CTo0KD40awJ1pzyZq34P9yQWHpLQGrYyDanyv8PSM7fvyXtXL%2FbWf1BHIe%2B8FrMtG370cV0W0GxrkEcQv7NaKECxyGx8DPninQTIiprqBBoNfU4wAO87apfbBNAt&X-Amz-Signature=454520e317478577e25f1716acfce89e46ee352e1bbdc5f442df23f4caf03d3f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
