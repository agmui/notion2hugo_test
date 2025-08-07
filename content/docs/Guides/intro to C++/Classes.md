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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KNLTQ3R%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDoneyhP5NdGqTQohRpvoQYGP6PYe5D4wGCxeROQanVUQIgFHJmCt8KSRFS0hbVWDQnAzB3CbhAWIqjkgNgTnyYiUEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDi%2FMTPWZs9axYZqcSrcA1plVvQyO31hZZAG6vt%2B7jYxqZFe4eLOZopQ4CTiXvBOsTYyU63sCX4VSuNfwTkMNSBnba9qBzzCfUFDkLYGPu5b8SbsPuK1p1ltw%2FfPrx5Nzre6jeIprAH6ZCGRWTWwDIFwlNjTKM9r6JW3OXp7CUAjNwdf%2FVCg44Vq4FLQY4Lzli3Wxdv%2FIPpCQDkaBUVqIIRVc5khmhpUADIkQpqD4e5J69yzB8I1%2Bf4YeBYy4%2F9Nw%2FqSZzygqIwTT9IMnyNCiUKIscul2CQV1QfpcAu33AsyreRd%2BIAZxdjN5cCgzEIKeDjRDF%2BmdxhgbmesQKI%2FeYugE5i8a2TcXXpSuVzogBGOpaVMgsuumCiKaBOE5D4o%2Fby4J3%2BpUmD6ApRupcFW4cG3AVolAzn4QFx7VYP2gNPnAJhldABm4CTV%2B025BKnsAoEZLKC7E1hdV0LwLVnpLmqTgNpigPUlAqac1mCxrIk1FukXCIsfHPDq%2FseM7SOxsEPF9VaKFO2h8Zt4Vy%2BIgDNGzkLf5WNqSLnoat2FrxUUZeCexlQ171a1jqSVvhwypQCo9P4pMCRNlxPl0g8oOsW6c4VnVY24hGkV2%2FSETC1aRWG2rdwaltU9X0Q8E15xJEg7Pb%2FQa0JUvF5KMNLu08QGOqUBo8i8%2B2R1cojLIxOAflqYJ7ZTQxEEpoP5Wejbu9mw%2B2Wh9OTfKbHJ5gtKlc3XI4DVp%2FDLdLZHcg1KvUk3lzlZInCOWrhwcs9xqzRaqSxZqKdMKI%2BVige3pvdVEjALcVxaIKjFhezGrfurXzoCdefIIiQxtHWjk9mdjkRYOpfIscTjwGjjhnlWt3QQLFM0mBAAB2k9o9Piz33vRTKd6EjezaWaq6pg&X-Amz-Signature=2b0502bbc827efec2f9931343b05de2dc5bd299bac414e7cbec91882ce673100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
