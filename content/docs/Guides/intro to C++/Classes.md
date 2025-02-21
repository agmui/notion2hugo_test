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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632FTPDJJ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtWwWU1q3zC94CYtAj%2FjNWHu5fQRVRwZEWaoEtxeYeKAiAVE2enfO6N%2F29LXSrWCBnd3kqClNiWFMjskdcEsRpobSqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYLVJckxYFpLljkygKtwDkACKjERkdLEzJ6CMH9%2FHvnuWsLA9xoQ25PE30T24Pr60FGHUO8swuuHUFByLI18tmfR6fOip9whdz0YqyxDpZtPJHZwH9Gf47HIiJ2247oiPkkhJKlaOnAcvly56mc9YBoIxwS6ejQcMS7agFRobG7KZnG1c%2BvZb5NOKHjOj5cLfeiKtWaxbzUZzZzi0FoU5D0mbJAkyMtpI%2BakV%2FDoHvnn%2BfNLX%2BN%2FX626hbC2ipOHCUfB%2FNdrKCrqHq8y3AU%2F7%2FJ%2BFJ61EabJYlViODM1IhG4YlcKZQpc1b%2BlTsUXkuXP9ZQo3vV7CDvAzpLhTo9T4YZfRbA4hzAR1sU%2B1tUrpaiXJxW%2B0Spb3B2jTTqdBOQKX4i%2Bx9leBE9CIy6uvMBx0VUBCztRQjjVoaaVspUVElcroa0Mnn6%2F1y8u5Br3ujTQidoYCsNPOc6MyyITVs9g4jqvxAl79xmiGrSNz2KWXQQZ9v4nL3SmZVbJtD250rD7BDemtp%2BLVQubQKe6rqKI0%2FoOK6uXtvhL%2BkIIbmZdKFf2rZqWB9Oxj3JPVH3xbw4b0rnBOdgCZrmC5gSBAF5%2FHt3nmoSd6mR8n28D6DKYn8BCB9Y%2BoCIDr1BM5iPcYkPSUCu0RNxscF9ujgn0wwYXfvQY6pgF7Ab7L1HSlboxrIrbuf0hUjE2cH%2Bp1%2FMygfG2J218F7L7gn9ygIIsVloxY6%2BvtotTGyuPo%2FHgfhdfNzgcOg6KQNQjT5v2ju78yomm3hkXBPwDYTQRyLmxNg6Kwtvpj5ilbz33uJakqlgwxznmFQYkNGf0PbeLLKhiwNffBOwViUZWR%2B5G9qmIbxkE67HbctMwmHH%2FQzJSIzelJJZZ%2B38V2yMOsaDL%2B&X-Amz-Signature=f65cb86ad74c0cc22e251df1d0fbca2fb2b9a7b90bb1f6e921b8334316006e52&X-Amz-SignedHeaders=host&x-id=GetObject)

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
