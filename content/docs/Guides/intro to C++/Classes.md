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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDIEQIQE%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCgWRlF%2F2OH%2FXejzsry1lUpQNEr9%2FQe09xcO3mCwnChpgIhAN6RdssUfiT4D9ySOCMowhTgrWYy%2BFLFIvTWU3oLLTgHKv8DCCcQABoMNjM3NDIzMTgzODA1Igyzfe1fFeCAhMOt%2F1Yq3ANQpQER%2BRzWbBXpJv72TXZwyCeIIVZVdUUTasY%2Brksgd%2FHiCrCGRZHrmUL35aNyjpJDQnYTIEwGWKPtDHFH0%2Bq9vvfPnzKux9iBWHMLTHI68d1MRfWRWKCiRO3SY5TO%2BjIKK0C3OxVKq7QAZzi%2BpQCmhewpadNXgj77atptUrkRngoPpw4HCtZDtfeQ55Yleb67bL8i%2FGfa0GQ9D%2FYaR6hDKU%2B5AY9lVVIHiVVXpd8mU6s5BrPsXX5c99%2Fkg3jiyTZVujUMj4nDkT8P8UF6U8WwF5uT%2FWmpyTZs8QmAaowqnVyd2A2Nm82%2F2giOGrqqKBKrIpCMUUsBWuzU2mRAkGBaPFAyT6hP2aZkIiUPuc71tiGv6DMX2X6Tw7wyr1ct%2FrAb7U76tRxHBGSAEVBCVugzbkbYxtMA3OIWyAGXPdo8iPwvB3pyXVRumPCh2igUBeXzYF2nzjhQwSnSaYdi2AJKNdY5JOtOfFdvZlOKVRVTy%2Baf10e42lFmqR706UvqNP%2BYSmxSYwbgpjjBi4P%2FL1WyD0dkeNtrglz3nPFu3xZ7ssWwAp259WN8yzjFAF07HZw2xljnU%2FyNYTNH75PP%2BKHtaCv%2Fu%2BRhXXIYiGYkoEOfEc%2F4U3pie5c96TXbBzDs4J3DBjqkAcW7TgKEO6CNzmvy3VmAqt75lldLGdSKcgiPqVwVOYtUdeRsORliJ2N2vNOu5R8sUL4lvJPtmc%2B4T90ahpNerYCfODzR0RWMy76J1QEyTzc6rwX4S84qr8t9Sk%2B8xsEE3lizJmRzBEijf6mLv9qjHYnHL9NRkzuRkjtN4V1Qjr2GU%2Foa19H526DGDqo3VsueBJ%2FwUPXS1YwBb6v%2BAE9kusxd1ygy&X-Amz-Signature=e941e5bc922fa387e181ff44a8d092b2fc5345631d2ce4d7634a64a74f12d644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
