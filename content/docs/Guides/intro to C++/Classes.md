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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXKBSBSV%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2FwdKw14W%2F8Ms7kMz%2F6CRohu1%2BSZ8D3yKc%2Fp0Wjx0I9AiB3msfr1OFfPiqgThDXRfLzA21a78BHWJHhXSZrkZmJNyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMoGrvHt8O52gaTSj9KtwDna7W89GnRGX2fQzcr2yF%2FrIQqUMHOse4P9rJY7o8bYqqu%2FgwRKNEZ0vOErYKBgTf8MlErjNOPmJDrhMwrs3IU37%2FDXsGPKsGT5w5kAPzHiUu3tRGm%2FsLq%2FQKkfa%2FpDE9AdShJ97Hd2Ek4Wvv%2BERqyZcy5ci94Rx1dcGr%2FBLJbe%2FuTXxzPCohn7tNSiRVGFm902N4DdtMrQZyXacBG6Dph69jGc398CZGmdmsYEnrqYnKo5TcQtVyzrB6d%2FI8D3jEsbZkRP%2BxN5HnUxHNyWA4qvPaQJ4FTXha5E%2FkgPShngiT8FQPtPF24arY%2FCX8utsWRKXnJp1aKK6VIxgPocI3K6zlx5j6HMRe5bjEMjZT8G8NIxNXMZP1rndyWZaNmiNOjlgK2H9ary8%2B777CY01bGzy%2B%2F%2BCC%2Bbmp%2FpADgK2fL0%2B%2FM2FrImE2Jd%2FfkFOk4goVGBq28D3pNeulYgEb%2B7QGZR5Pw3bTWR%2FQiFjxMMt7t4%2Bi3h%2F%2ByEpG6EcQdaUmaheazd1p6kkxjClRVXXo6qDxM2egMUYY1jUNa4PktxWn1oIiD98FHDCrnWJLnKjemvnqP3rtvxclTbQbu83wfBEbJEIHEMaN3CbiCHxooyjU5rhQO9sZEqryKcGB0bQwofjvwAY6pgFUlVbcFWoqaHyTZmpEPkBSznn%2FfK8VdLfXEX0ofrNxDsxwtehiHrClxqwTAVCYAcpDD%2BxqOH9UA7EicNeJa6vGrq2XI%2BTLhRklJ5h%2Fv6Czp1%2FP1RyHXZm4yddGQUK0yKFVOZuM45Ty%2FFKbfoECQYPKj9Ae6mowiUXEHYHdP2U2dvQw1e1kvTuv1uBWVmypUNZifn61PXP1LLDV63%2Bo%2FlGd%2BbbtT8Oq&X-Amz-Signature=fc9bed221ce5ff776bae0be2aa1704b2962bc5dd73a77344dcd2c78be5eb0807&X-Amz-SignedHeaders=host&x-id=GetObject)

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
