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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUQKK74G%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCOyXwZ%2FZJS3cXGuqh9NqJ6aig8uwAuuNYI9I2YHLtJIQIgAqCi61EPa28I%2BmWBH6Ij13%2BRy%2FjDlFielQELhtJWVpoq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIDyWt%2Fq%2B%2BiCGnM4NyrcA0S0IRCRGznPaxw96t34QdU7rnbw4xGQnzRVQCJ%2F74F6lRp84vuiBu45qY%2FcAee9Vq%2F9%2BbMF8HYnNfj67ELQfcSXmZui4tO48sDaU9p1qgVNUEFByLZsVxR1bMHAIViFxPNS8sSAML9O5gcqO7V5v6i55BsnOP9xxRbVEU6ccQ8cRr32vy6QS2LvPYxtBgWEoBlewcgwd9RgpmW1SLrTM5Fc3LyTeqCX2aae8XfJbgoG0SMf%2Fcrw0nGgif7qW8gSHz%2B%2FuT5fihqb3AC838U%2FXf5GqVfH8sAyuDxDHOkpe3HuEiDVtYk%2Bk2kuGvaRbCd11K%2FcQjuyoQimTjNBPMouLH%2BFtHFiVsRIFrWGUkCP1RxeTxCGejLZdGsxa0iAQIIKo%2BbKeZqdHT7eMsbDD9WhLRwkO8cin6T5O6rQ%2FkbbcEr1H2ypoKZdbT%2FdqYI781TB0n%2BGZrO%2Br3P6dCnYud%2FsLZNvHIkAd0cQM7boRMFl3ePfxlVHeRF9kT3YuySAWc4UOXTiFeDjnXfS7fTszghZ0HDSt%2Fn0jELiIhs%2FgCTfnUw4x5oc8hQNa72zIlgFOYR5ZaGF6pMw4sNwQphwPrIM0e7YhlF5ev7eEFeD5yAWSvJaXdLIFXvFDFc9T%2FUUMM%2FT%2BcIGOqUBDGUWdjBEVsnIjSEcN2%2BySe0K9ugrFxH94taZMi7ycV6cjW0zA4iCt5ayIzpnHwS6%2B6gPhVnC7BeoxAZYlIkN2rvDM%2Fpy7BsLyMl3kdH7tTKRFShuAck0mbx9U7WD60cGt56Eha5xaaZOfYwNlSaQVb0MIsHbQzT0Sq0NQs4ku6V%2Bix33diVLbJsWvR%2BVIxdvHnRYu7ZzIFZHZwhXW9iTKAIBiKMN&X-Amz-Signature=25ac248fd3d79c516b16b8e0f5402fa0a16bde8f158c85a535ed87a13a5d9a27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
