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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNE2MG23%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCS7It5B8mcKCKcsneIui%2BlK4wz3ry%2BJbGbRqUZBCduEQIhAI1BBGvjlZ5JzxZNWwxcIOg7YoFfqV97apdo2YwPJTWJKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2i9KLcSSMe%2BlqZkwq3AMFAqXZRdjGXSA4ebdWlDMP8F5P3T1NzaVJQ2Gcia%2FNNTZBKk6PMwaA2l9McjLYB9Li6jJZRWwH4PSLr7FhdhXESDQr62ZvBTdNmX%2FbfqFWyHFwTiqffUef3MXrycqT5dpS2Z5KN6%2F353tEOjIqtPULmwWz6gJxKHvDNDiKk0QL78rWi008ImqT8JlH%2FQOl5fiRA%2BIRKWpgpsFfNEnDV8kjiKpM2YIIkDHoVlIS5tI%2F7YaSLpkfIcPmLzWew3OrynPvV%2Beah6hhcail%2FBD3bECPCP6KT7CEDZboNDjAHCBIYIzFuSfKqDop76xjxCLwEBsD%2Bqc1X2Dsx6y0bTVfI1%2F1%2F0DoMHtu2M%2F4z0Ej0Hw1%2FeNLxAkfiBqQIqF5wkjYlR%2F6nl588smPgmt9JdTyDmLKpjWqDV7XTI0EZwYyUGoAOzjTQ796XjEpoQ6PV8Ldg7DhEQQzazJHMvV41BZX9F6i2zoe1SF4JlteNhsvdrQTbHG9fYh43I8bKcYg6vTEIiUjR6Qorp6q%2FMUpksNcISXkhah2KfHKaPxMdV7JmKFXoXWiotZTbPnCX6K3iV%2FzVDhL9A%2FzzQhQJ1G%2FvB%2FE6QYdyHkn9u8kRbDVSg2LLJHEeMl6OntRnBolEkkF%2BjC%2FlqTCBjqkAR6CG7OW%2BJHcAxXSqpxam9l58d2jDIaGCUDadT6tP%2F4mNIc6QkGkfGCiLj4Q5SkRHv9sGzM6m33ZcNjEE9V7ycyZZdBPKaEwsFLkMVQModpTeXICG1oDLfQwkQ6jIGNGyMVnG1f1qatYlScyUu%2FDwcGqTPXQlRKas1ZSwLyKBIoz7fuLJ8ncqcZdTLYYlvdtT2KGOD0WmmraTEpAVP6TBm8VGd%2Fm&X-Amz-Signature=d6a8b8c6bd6f8634f1520a01ad4ed0661d901c1a96c1e35724f394b28655bda3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
