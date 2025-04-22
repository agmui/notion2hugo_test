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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3OG4LI6%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCHQTU0NGKEUHzyCdszJCeZ%2BX6YucWQiFLijugkU8Be1QIhAPq34Kp1E%2Ff%2BT1bF8CMPYJUTY46l1Kn4uvITDbnrpqkqKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwsultv5s0lISGt08wq3ANvkeqHkLiAlAnwUbinTRF6Jiou9%2Bk6ouNXeoK0aVkaEs7%2FgZGoy1QyPwjDOHcAAm6DVrjIG7i1wc0Ot1%2B4tGfdUMZ7nqhfopKB5xa7JYIXT2wx3uenofLHcL6stu%2Boqw7mEmw%2BqBnX9KdPdW5e9SapzwVDSRQ%2FKvtqslWyWRrhweO7rx5TmhtMC5NlRGdKlewSbWFkyY00KvDosWoWKhbqEzqES6XQpDNGP%2FEJGZ4bh1y2sNfWU39mmJTNOxDeRYlc5CNWhGu3rX6slzM3QSNMvK9NGeb4hzjgsFvwV59jI8Ny2qta%2BHQxCY2GaAWi4tgrolgbYn43UHSiA0Nk%2BCA1IUClSDrfknTNsrpqIm%2FTKYE3aKtXJJBLqUX0%2BkY4R3ln9EnBA2r9NUihZKOnUTOp8iM2g6oM3KQSy6OB5YJna%2FXEnfHLZpEna5pAC8wejT8%2B%2BGcMo%2BLqdy3gIsjo34Pj2XpSjULsP3dzocQb94lEB8jzBWAuDpnCRT8zZoeSoVqX1%2FnopEL7kCKTQ3NXKF0lFoeEqFD3XRthgKu1gA%2Fv0owwtD1d2827O8SHTekOvteSlTJqf8ljQcm%2FgEe60VPfrAApugE%2FknxdQhqg4g4BvMUd2tpVR21KM6pGZjDCiaDABjqkAbS1LvuUMyMPIqcqKywqWVZ0DRIZFcvy1H3YLqJrlx4QTzjgOMMhXZHsf65SxFLr6rld%2FvvIdlmUgZqDr0jNAgZnqua9kmJd7o433L8xIUGaRUlbVeBn%2BFdzJxUdiDvt4ExXH7Q7PtRKtTPMzM8FVtw5JQ4uXxA3j%2BWHzY6JdUfnT6b4Vvb4XOVgXDuQav%2FV5iusKqVIK6M%2FqHxoqSiX4Qbf9BVK&X-Amz-Signature=c11eaf8a3fbe6f18bfed58b57202f383c85dc8dec93246fe3c95a7f089f0386a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
