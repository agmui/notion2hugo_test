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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW3WMTTY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV4lWo75C7loVuqhxJdlnM3nwRhejhIWOpExlwN1IT0QIhANWrJD887Vao2NbZnEP1bnONns6OarSugv8UahkJwy7KKv8DCEAQABoMNjM3NDIzMTgzODA1IgwZsZUnLgaYta0mbXcq3AMZzYYYaV9LBSDcV6PsKk%2B%2FQCD4DXVNALuYgbUkdhyWr7gRXM0erbzUT90Fnv7J%2FndB9%2FhuM1Xqu%2ByCCnt43iIiYkkzvSvS83budvWWPeJuCFnJxy3y02vx2o1DfRc%2FhSjz6ZSY6WW2RvhO7uaEzKH2GfVP3%2FrSyiI2VThvNigpDs%2BWIV0O5yaRLLpb%2Bzttfgn8cSzuSwjEyp6KDcqBVwi5kcSHCG8BOl1V8hK7eHd%2FckaIOoy6o62wbT1qzX48RRkoEV%2B1ZXadJLY%2BvWMiuKrxlWOblqsDWjfN64OyhAlwSlMLOB5e6CGgDcpk1muNnpHmN9uL4Ps%2FxCvV3dBqxV7QR%2FTV785wpIF3d1m%2BXnMcVWv9LkScRy2YdbP56UU1DTazyGBWL3BDxIluSrbMqm%2Bb5aoxmhk2CX9myuiITSFAWsG3etsVThc0eCayIwUYTHYcRzT8YqjEBi0Tti%2FsbY%2B%2FH%2Fheus6Aifq9jXJ5Akx5PPmCFKUEQDZ1o%2B%2F0woxpYeSOetYgzu69MQlKH5cfUuZ1%2BidY%2FNytcSpOlM9zu6NiEu5xC9%2Bb6y24ridHZH2DVX3DhMgTsG3Eq00TmFYVZSjimZWNe%2FUOKecjTeWA32H4sHYYkJzlAQuulVLcrDCjqKq%2BBjqkAdYiHDvfRkQdzsLzM5YADrDqd66RhwgD9uW69xZCs79lMZcJkAAdTfO6cCERHCFhcFUa7V9bAyI33oXTnB9zleHC1VIO3%2FkxchRGKITikK93hZ9MslaAW4dSWJ08DiZ9fzgrWT3OlFHMBaPI%2Bih98DEweTmbSJxahuR8pYCdIezeFvw4lhUTiEtIyZTiZ4T7hJrVw%2FG6a68yjM8UfyVBSCdnsTFd&X-Amz-Signature=28a202c4f1498817a7920e699bb0ed6f2edf7fcbd3e07fd9c54d3b460a33c7a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
