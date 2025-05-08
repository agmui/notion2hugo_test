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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ASFSXAS%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEw%2BJHwITVt%2BUGq8czgZRMisUq%2FpSKKiNLMEZ1iBRMwaAiA06ECkc%2BtIQmB70CvbqTCrS2OiHzQqRXj02oBDi%2FWCBir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMGFdeMw5HgR2xG90EKtwDqUnFRYTjUpmUpcBKwOAjoc%2BGMkhKC0y8pz3Rj4Hi7GEHHJ4S56LOWlPqmUxqPWa4hNKPBhWGwi2SLVs%2BbnW98d%2B2BckTgX%2BjCmW%2FfO1RV7x3nmUCxEOC0umtAsDmOItV4Ano437Uo6kBulfiHtmzXCwrOkfTNcgCwCxJKuXEXUZdIhHi587JF0L%2B2%2F%2BhOpyVNF6UC1Tg3QUBlTj4xl6W6lM71A5S9vSxbXKP9anBnsyLkYkJ6SFc43eE4Wkv3yxOY%2B4WtxoXhTQ8NCXYc5iMYzov9meJq0bLvkmE1ae6IYZBmbTJwECczGzXJ2hQXSIUOiYz8YerUJ7Rlou7GZs2Kuq9mKTsjuqwVuhBY6lRyxRVfn%2BLs7Tfl358CqY12vI%2BbF1bF7vF9Nnh9fpijf3UQHyZv39mt2t7W4SZI%2FRd3VUJuIEX7lzqbRqnFvsgeiel6mI%2F6DfomjsYeijg9kbne%2B4bW%2FyMNou2EeHBGMkL54%2BvFloSDh56Hybvopje7r9wLSg1nG41gxttzpyXJGDCfjHi42DWTbEF84mQTPrMWZvQR53R9mO%2FVdE6zLm%2BFs95MZ9Hgcl99T2vmaqRrc%2BqQAMnWxButQ6eC3D4tyM0gZ7y2R8XslkmDZr4pYcw%2BN%2FxwAY6pgEUcdrMe2iX6b0n3gMrnhpwZiHjICUCad%2BuuvxzRe61soXC9LU5VA0fVd4UAHom7jimv5%2FUpxTIgMvdMUs05MAw%2FsCUhDU%2B4qmMaq1gXdWgDkWYUweq2Gi987LMuqvICKSM6NoxuqKRQ5bxBmWJrv4nCFfK7igmMzVKWTKcrykDHXcFelTd2i2cJKPGgNojuk%2BrRp5%2B6PdJ10c0qS1Jt%2Fzb02cRS9bK&X-Amz-Signature=ef26cf789cd22f324ff638f6cdf0091f4814192690bf6c3e27ffe7d87e6bd578&X-Amz-SignedHeaders=host&x-id=GetObject)

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
