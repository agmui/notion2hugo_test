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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LM4QNPV%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDDIeEQPG4Ffi28ppIyjC%2BOAhF6AReDNqS3trxq9RAQQAiAq%2BLKPndeSXCoxFEx5HdDMc%2BxnTvUEJPrfWQsdyfM3SCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMVhAG3haukkT6xfNKtwD76vcsqOvanPnRITemBw8VdUSeLEs%2FEcbrW2CgNxE4awyWGH7FjSkXqZ%2Bk4zwjAEvFAvK6tHcpktLv3Omh7M6tXU6MtanFotjBjuJf7D9rTcDKFs3QaXcLmS2cNx2lqNmSXq%2F5wyi%2F9ea98ru9cPEBpXoVN3W2H5%2FFFgdWIc6xZdiNuBG5HRFzaakD8zd%2FV4ArFd0iw8YVw0wczEUBcHG0nwCQKlXSWnQgK9Oo1H9bs2jy7ZyYyIjHSxXV1%2BGfs3nrGu90aw0Agnco4%2FIml4RyXGHA26vBWNvMRJGnilf5DH%2FeosGxqJb2dQAMJOhTFBSc43OkgpIWTWU1cnPhH5b6Zs3Ffk1VGgv%2FJjTBagBSLtKIeXCNLDrlQdQ1GzlZ28vUlA4HyMRwASi1ePYCU28ITB5vf9xIkXBCjg4h3Rbqb4iRQRTk5ltDblEmSW%2FVOdHxnA2wIl5vUQtUbORE73W4ccC8au5%2BIoHnAtf2A9vQjqVQtsWqmNhBeK5MD639%2FKXx9jYekcV8UuN5G%2B08w9%2FOWc9GyaS6%2BW%2BcF86ZD6DmI%2BIi5wBkNFYEKuzfN87W3f226Uczveb8EVL020Z3G8jk25Uo3ZgzblBb%2BHYdWT9gpkPKV2IhsyxoxMxlYYwtZ%2BEvwY6pgFmgbgbXsHRZ7ZBlNct23IYymL3%2Bg1ZMQPwcHALL9EYMTE2BqBxoeXWlGDFd9tDZfkpUXjGl4Uqmcti%2BvieK9PimaWsAbea4iTAYdCXA8%2Bdp3rfU7psXFr0XtTWal1j0XhxkARYTxQAmxMasQO2yvHpKOgAow39u5xZMHoel2M0UwVu1gJZA%2Br140ISefPnsEyUz4ohWz0r1ifwWJVs5SRNjoUEGtlA&X-Amz-Signature=14678040706aaf1d263ea752ced1e891f5a86825998443104ebf5c486e066722&X-Amz-SignedHeaders=host&x-id=GetObject)

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
