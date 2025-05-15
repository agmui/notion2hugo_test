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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TD7CUU3%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T150910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIBVZLQmyCphrvHsJlbaiPo4%2BtUqHUlpIVqYIKe9rnIKlAiBl8oTA8AuIjoWGobxtFY9HAWye8YW%2FWa%2B4UHtR3YfrFSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMVszP%2Fg55UMSAquPoKtwDAxD5bD96zSunAX9CYTSjkCSn4xjTqq9uLUFn8U0s2RoJ%2B3I0xNoHFFUmtL3fUaEH4bw0L2FN%2FiPGyYeQdUbyjcfFpF9zPTsN3yz%2FjKvsl9OiuFe4iS9rGGG0aCizCqR%2FdlUqQGrux19bkeU3AZTjwoa5i7KHwQz%2Bvpt4ReIoFWu9tQpM0Hwrs3gfuTvtcqibyVZOdoSRfvlOg115QGrbikE0TxRNh1TkVlXxQqTXiPqaNnG%2FkBdTumU2XnDJaEn4Js1PjP2Rgw5rJT4o%2FQWR9vaVEvICREQodZNUY%2FK4QhmEuGNHXQkvnBANOssKKJyLPANIUJtssnVc3%2F8yrytQA7Rkx3oRhr64O0Z9rfH%2By2Ue%2FazbPAoyejaL5tavytclaUTa6H2gw%2BP%2BPyTq3Pyt1W1F2hdp5LL6%2BF4VAx28%2Bur8l0ghNIuciAFOhZXaXqAJhJD85nMC%2FqrV91Adbj7AqeCzEKSZD3oPtkCBgpsyr%2BK7r65eL7SLWHpNDNy3BL2xZi1HvqFQQxSyYuTOFiUimkWtG0HnW6Al38NGB%2BIx0PR3lckoGPiHVYReT%2BZ7xdtxUijjphLMI0TbDZ765lrzUdTZxp95uWQ6LnujP5K7Djtro1m78BLyHNjR%2FjowmvCXwQY6pgGgCh9wuGvkfqyesAVtUiYJg3rfrsWnn8acVZS04ZMsP3xX42AfLCST2ZPAtwHiA3waeL2R9fn4r7joMEUhgVWnszJkUo8uw%2BnO%2F5FzW61nyFC0jbPXMc%2Bm1vq56Zwb5I78MXDAtseRwLiVGaib3SZusu38WUFv8ZEBBIH0ZOWYeJ8WejYA77bH9AbziVearoaJik8%2Bwf5xIjS4V78fa6UsIc%2BSRMWv&X-Amz-Signature=b61634b74ca0e336086570a9b75164ffac92c8371548f2eef9d794f479fe2fb5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
