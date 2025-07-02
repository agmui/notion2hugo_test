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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7OI2PEN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiIgJ5qM1J2Q1Z%2FgJ9iEMBMqOJsHmMItL7ASGegwG9TAIgSrKYTsLjb8kpYqd%2FIbMb%2F4fA9EOfiI6%2BIZOqup8uY0cqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkN5BlT7dk6f0xOZircA2p2hOk3mJVaXgjykNNutTo7pQiFXui3AqY11P5rAY97NB0Gujir9lFsqpjlq3GJWZF4dby4qYqhY07zazIYM4JOHcIVyN9F2nElcIbVobadLFOmGSMN%2BSaTHM9wSALdGQeS5c5R5l4zElUcGZLLAgZqsp1dySWnA2UGYDKarxzMh5sdlkAL6CGPQVsbfaWC3P7%2FFwrlMunrOynRQZXh2lPrGB0nYJyNxc8qmilFgK1MIv9acvngcRyqLp8sgiiqrarg7KiCKmRoxxaGxk6eef7T8D63GE3D4AUCTTlOJ9Ibj2uK5NzTWKBLiT%2B85I0gQnLdEvzqPdz5K0jM6alN4L9730fge4U%2FO6knhxkLmapw3BdvvMzD%2Fc3a69PoW14ySULnPqpk3iW2CN4kXXSrHbVue6Wo7hkCcWytZ5EeOlpfVGoLnOtyAvmQL%2B1lr0yXqCBGdDYTDBMgmaaYDuvUy4iwOGe1E2e3HZu4irvaLfohLAI1fDaLmtrVd%2Fwrpj%2BzvdtN8NoQ9o2ywC5WBEGymDe%2FUIz2UGygj1fGsHv8o9E3navS7fSHAgaDtszvyqgy0eaVZmcrJc3jLwocRFRPjyt0RToFZ2HaARQ7xyF1d5ZY3OdHDx%2B8ZmkH9V0zMMDmlMMGOqUB3%2FZ%2FBrjnlSYsyBio%2BZv3E83bkFNvJmxT4drHE06sRsLRfUFpxZSEVHTNwzM8Hg4TFmlt80t8TRRr1Cgyrxj%2B%2BopLnsXFPlISqddbrT5GVAvb05irYpptl%2BKsEuSDtGVU%2FmjHaMH7iIT8F%2BJrfEAnSlholAeklt1KXs6B3H2tJAwiBrgDzqdHHLvYpe24T3VcekUzW1mXeJwH2XUIY16u%2Bjf1s5yz&X-Amz-Signature=3b3638db03963f9988eb86cb845e95a5501e808b79886190b61d8be7a39a9e50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
