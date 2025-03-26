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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627FHSYDI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbJwPLyc4G%2BfjXifXRP4C3pSGosfNYQV5ZZSeNIuuByQIgJ8%2FIG%2F5Sxxk6Q1RuhQkY1p%2FFDX3L27H4HyFdllyret4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDDcNorYv%2BkU71ixR%2BCrcA0WXitpyoLFq%2BzjA8xeDhcKgIFYs68ATPaiEhmD1%2FdallW2qikfFKeKD1PVu%2F10Szlr4O621jtn9j4250qejKWc2MqR7gXjep6MM2Eleb8bumpk8APmFrtDL0ke9LCT%2BSpR%2FadvySpAgBROEgOV560kHO%2Fkm9Od22MqygipRiwLkYXa%2FhT2ZFJG6%2FrMdn1kRif2sgS8i91xx8jkU0AAKAdRIKeFAPHvW8%2FmHJpEXJKsS9X%2BwuhlnxRN3vd4Ri5VSDwwkT3Z0Uaa1O8tiGwuUgEVsLjSrLz1Fk%2BuI2PqlDGz1E8P1UK%2BogXbPEhURBlJcAkH1U9pTImP0RFtFo7DKfclkjt1k0%2Buv3RWl0pm7a7KADcpOxDJBU98jFaNI2wIvBxKxwhRt2skq%2FU8mlsK%2F8ta1jO8Y08aPUZHh1ZUuH07V1sEAwip%2FIdEdBpl6UN8Jcl7%2Bn%2B4DFPdFkRUhcbOP3jX4U60MiRoTHlZKAOcYEEEaVGaBEyKdRuiYzRpSapi1F1GMxGK9eb%2BHmWwsQq95nZvsxUHL7RcdWbr6uN2UMzUlX5EWJwvQYBOkw9G%2BnGDPt9pMgd2Gkz9QqG1K6HyZLaVvmaDC7xhmAlmGRg%2BERqnYF3mVaqdYzPsa88CjMLfykb8GOqUBkYCoBT%2BcVeRNZBVwCGVRfmlYkkQzX7LAuK%2BaOIJL5IDZylb%2BFZqM1vqE4LQwXfYd%2BE2qxDDmS6hYixUSf9tccNsKS5g7dTeLtajzqqmfnC8FVSJv7ehiULtxfBBW0rAnG2TbfF6R%2BoogQUoenWwCbNSVDscBvT%2FHaESOuYV%2FwgHdle48i5vlta%2BWt2Yjna9sBXBny0Dzhh9iS%2B2VhDNWeCiEQU%2Fk&X-Amz-Signature=2f043f61c0e3ecc855b98463ca23f34b2bba0cf1b7915323d491fc8a5e57706d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
