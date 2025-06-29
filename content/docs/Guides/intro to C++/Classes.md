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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC3JZJIH%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5F5NHzLzwMOQ77qjC4mSYPsAyD8VUm1IlojPmUN0EngIgLe8u5n8m7wRtCfsSOp1xnPW1NNMScyge1zZC15GbsgMqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvmhMUgRznv3HL2jircA11umO0NU0BnYR%2BUlB2C8MEi73CCl6GFqwnIZGkCNUjq6uK2NIRsyeCE3vdYpjYX2TiGfuB1f1sUJx2zGsSkM8pzj%2B5GYU13rhGFxvR8EHyMr5IH2JHT7HCGmP2dFwjtAl9w3ws%2FnUZ6iQ3uwuaFQBmXmjVcX%2FTuiiawmoHQZrIJnxZEbF8XxTAefanEe4EZXSk3PzrWKSE9hjVBIzkQh5RoOjUIiytxkqT3RsA1nHtRGYH3BFrrE24MCe4WggF1krCnwfwUE990CS%2Bw8WA2eKNehOCAMQBgovBeEbR%2FtEIpYC7%2FcCnqQeX3nVEhF1uamwmETSdC8WTKll0U2hdwfADqjozI8CyhRT%2BwoJd6RhLBkpzU157QmtYxImmT8XG1SfOuYPLChuLLG5EDGlCL9tx1gSRY1RXX2sPBARPO8%2F3zSknPZ6iUmH%2FU1t6i0QPLziaCxurDe3iWrjNBYVhUhydO0%2BRKZOBVG5xjw4R9xxBiNAe1DP9Z9ykx4V2i9ZJbun480BlZeQV0NSIXaxZ%2F2KAijYvDR6l5erN5QyZD0PlvA2PPLtXiLOqUjEnr0Bl7GW6YPyFvmjSZ9Q2WnrUz9Ndy3pgDVc8qND5X4F7kqSgn%2FQRNF48H9kSnbOS1MK36hcMGOqUBl6m%2F2T0oh2a9aTBJWXMhCZw31uwKt4wTO6LCsfCkyxEX565MTcHOlmynjuNyxk5Hm1RkEMr4899S5EZLfM9GeA4muSuVOSzQKpJb0ODs7tUzhzw0Us2A%2FTSdVAdCGr5ODT9O7HVMF%2B%2FetIKMoEwnnoGDAHM29q%2Bib0Xk1wDu7o0bY5Us8kkCyq9XLt4ntcJ7Qfs3f%2FVfYD%2BwyBDwUlq%2BefTj8wWC&X-Amz-Signature=7de1f952b0510210346fe86c556b487d0053355e831ae123b6b29fc0c0b22c77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
