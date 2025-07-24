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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A3CMJWW%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIDjR548XdcUyaoFSQ5VRo6pt2ywi%2FS7BefwGOVg83MMBAiEA%2BS6YJMDuqEyDSh33TVHRk0UN%2FWDrsjhgSY%2BdgDu5IZoq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDLkDiBX4fPjTTqoYsircA%2BRSLTFLQcFYpEY1Nqcrz31ggbHMPGYfthS9UBGdZc2l0dXRnrIRZMDi5%2FJpYpq6kL752JdQHgzknGnm0ScByzKGdzyj8HFWbSDsHLP%2F1plFpJuetSI40kvbP%2Fas4Nf5SIyMHdRn8DX9BRAlMg%2BrLg2%2Bf4EK%2Fk6TxbILqS5%2FBnloesaLD%2F4ehHEpe2Axdv9kIMidnQIM910r9eejZJQlxqpU6dJ7CnVJEsvU5jdIPAv%2FJPO4RI%2B7dGHEKj3lyTQc2%2F%2BSpSLPGBZ8ySSA4LwZxJNi5qJuilYzE4mzu%2BGrgQ54aSOZmin4cl4d7qFcP8bbqpXxVx8ZRCEPplDebSMzwkuAcmRVQRWNi8kN30SU1V0avtMkkiO4M%2FqioX8b70eVrZb2nRJOJ3ooqIV57SdM2VPCmtpWkZ5kE9dYJd0H3QrjubDXWfE4X0EVZyHHSOB%2BQpLUcamxxfDoOdqe%2FcR1hRJki3DjO3948yQugxO9bs7G5JDS%2Bh56Qqg5RUWgW%2BW%2BvcsVm6hePNowIYR9Ojme1SxHI2DP14E%2FOCaIbih9hKxhN41CwzZy7TNsVnqYr7H5ajfEoG%2FDEdZrlhp48afBDTBChL8yjw8dGxjGq5PjY%2BSPjeZu6giRqWMjyCVrMPCxicQGOqUBPrpoResq8ZtdJYCSXf47Sk4DlO%2FsSh%2Fva%2BDNRUhUZwLugCTUforpGYMvj8dqY25lWn21L56u5Pvt51xSMzfdmQjsKp3NFUqiGD3Q9t7k7xX%2BlzFr1bYuNeCE%2B%2FfWO0ywreqAuRn7vt%2BYgk8iu1hWebnPAYUMfAPFUFAR18W1GwHgxYeWUVng6%2F%2BSR6DJw1SXzvs4OEUJQ6TUCdqXhxTBLPAZSR9J&X-Amz-Signature=91cca29531acedb7baf83b09dfeeb6a30bc680e0e1d69ac228defd257041c61b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
