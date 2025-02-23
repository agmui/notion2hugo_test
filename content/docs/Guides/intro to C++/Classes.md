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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLWCG25U%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhe%2FRR9jx0RsX1i7Gly75BpJZDfLMl29O5HsewOUjXMAiB25Q87p2wI6Q3hLWxziLbf7yv0Cty2JNOSKxHoPE%2Fw%2Bir%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMMwQCXgvtaeu5EsDBKtwDzPqQ7Jh8WMJ%2F6oA%2FOTAXHpGq0z8vvbuiXH9AYuJK3MAVtQzs1aGtTD93glMTDjoCr4CBuoV%2BMaW7zznwUq%2FXGGmRox0semYORlvZdXdh%2F3wCIUbjFgC0vY3b%2BlFuSeSHFrVarM6yQC19KIa80avZ8x2QauT7vouWEM9WA4yQ3K3HnIjhpIhe3HRsxZS6jkRMUkKMYdI95EQRDfZVJLA4svULozDZYtAGLQg1nbAjWD1knLuZKyYwNnyCm0CuV%2FSc1uTtzTTHH%2Fwr9bP36UChpEnNKi1X7%2Bjl4lkd2QyjcP3t4oqfHZFvA%2Bidxi%2BOk1ajjHLjfuyiSSHub1fYmRPqVlFwByQxIkcH6uT02N11%2F3SnmrkB1%2FOGqJZJZZQ2q%2FEz4YeUxIwkfmzARCPN%2BCu1YMnuBI1DhODE0xIgAZ8e3FKCDZEUPdCQx6Ert5lhBgqz7FRlw5y9hCk8%2BlBsxnxZbVyXpMZSAjuw01RI5A9dq2ipJ3EDzRjLbhZohH63kIAFtQd9Aknn6D9%2FpPsaMA4gV%2FnIDJshULXzg40ofI1OkcQ7An%2BQEs6YE8dXMGbUW8kmD9xfS%2BKVbhLbIxyRPDoSaRvXXTD9awOdCvxe1RPYl79LdGw80hF1v%2Fc0f2MwlJPsvQY6pgF7VNSmf08P1ByGEAIoEmEHynP%2BbddrPaILNhxrCCUvXHhIjRvKx1y5rFTVndXsckHzQMZ5C67fCR7tAst781Gbvj%2F5kAmsto%2BlXsPKTD059MT%2BrgeV0UtFCQ3SfKm%2FtEqSmnA2zh%2BgZFxZMlkzwqkgBIOKYhIOVJygJAvAWvVAetcyWfBGYn68ZGbyzFJ%2FvoaC07%2BB1PHq7VqOksDdHOhTT7XMgWK2&X-Amz-Signature=b2ff83c34696b1b4e55c7aa724f7e7d4122d9f67a71ffe632731ad5805e7d76e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
