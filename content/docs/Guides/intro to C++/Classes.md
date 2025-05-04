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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRE2ES5I%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T100815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDCYbATJnQBIB97Td5z0igKJJi94BL5JGjuJgYIE80oNgIgQS%2F6ZBUTJ898pq%2FYyFB5y%2FSAii2hGJhT6Bc9BRp0%2FjMqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4npFAqyP%2FcoziRwSrcA0A2Z70yAWT3X9F2BbQ2xhm7ypv0r%2BFC1Xmow6Fq1OMiskMhOqxwcmpYu24igT%2BGVBDk66N%2Botv52%2FaIsTUeN1%2BYdOK2JRYj6F2s5rWyU4Qp1XqrAxpMawocTeX8KCWwLSadpa0dk4YHcAKkorA6pcdwaICJTJr8BNFkiEVIxNYdXEVYbjrLoPF8LHawW0xGEDt0TgGhZQH%2FS2ugu1J1eAfo9nuuovM2AWcPHOVlF%2FhQl4SK59nBAbONNd7nnTMdda581fAnPcHV2lrsP7KW8MDMxLhkbjGH7qz6ODyFSJwZ93Zvo1cBsrd1HcdWGd6XSkCgtvi9heJzHOwxdDeiqmvgWKJpovgkvJBOF09wNWymScQzaunxPYQFpUplP5gx34nXBpUvPfuE8pBqNDooYD1Biu8dDMmHEUXZpWBfLjCSMHvfJnjiFIfJalBV%2FzVErouzRiYYCDxMVrUkYyTsXpERVnfz%2F%2F6O%2BqYDBsPRqPdrQmcqFudAUFTBCwK3fRidrUn8qlIwpmVA%2BAWy4urIaSSv1TO3LX9jcnSsfxPjg%2FoTrka9umJhRlFGdJ0somIcmxh%2FogfPopaHNCujC7fAApI2kFEhF4%2Bbk2%2FBCEB6xLa0jeYCl6dsQXacsegHMJrr28AGOqUBJ6K4iD%2F8t32geCL2WxK3QwPwmGaHd50I2SHx%2BBr0IBsyOmZNUgrx49J75pzouyw3Xh4kShTr3dbFWOh24VUj%2Fnf1Edlmf1IEFU4ZU5Swjp0JlTkXTcfPBIkYDxcYoUZIRJqMLB7fhMlcuOw7ktKJnBt29oGj2iqONwOl6dpGtROBUxF3kvwFskDjS93tRddE6%2BurwZimbP2mAUM1zRXR3JQ9oPbY&X-Amz-Signature=377c132d31f68249c5fcdd7453776c0351fd32e191a034ae453cd694bec5b169&X-Amz-SignedHeaders=host&x-id=GetObject)

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
