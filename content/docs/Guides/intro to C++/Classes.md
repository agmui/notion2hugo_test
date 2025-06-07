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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LDU5AMH%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKPAe%2F%2F1c6YKTc2ElYLMYejnLrrg27LwNGuMLNT2PCYAiEA9oeVNwri1nuAi5h7dLY%2BmUWnqSiznV%2FaYlhLtNqjb7cq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAbpRiczpT8FkXHgMSrcA8rSxAhsycRMhaswp4nq2FeWz47ClkfSNJHN5oNhMpe7ry8JfcCFudCtCOmub0%2B6p0dUHerQ0fDK6VVevK9BbhzEnzg%2BdpQmVExc6UVkEYPPm4NWAorjBXB2cXe0n%2B34qOiyBHHOcyTZV18nbAkhPvq%2F3h4tx0wBRtqWKL6ZJCTGILMKCaQa45frx42qtC1Wtiz8q7eMopW6gssZRT%2FlzQ1gjA5FLbeMhJGr2vgK3gxhxFq6XLdKrIcqm6iI8kiJHC0Eixh7ZvfIlsG9SDz7nGc2hlAwMoZR8zI0LjjuSRa%2BNzUCzq74L9ek%2FGJgumbdpG9Y3Qz0%2Bf4fEmhbzkzftMMqq3gzd4v5SigK5r%2BbXJ6ySMPQ%2Fkx1JVCR12xZHqc1wfzWUr%2FS0KluJf8qnmxTJa8pRuOwSKqb0Y9BdW5mNqZ02CHMXQ%2FgLYFxT%2Bd%2FhwLtjqkEPMyUVDgd10wgj9Z5X8EWJbE9NlruxNcfqKUPx7J0IOP%2FVuAS8v0Y%2BntyjhqkiBFLQTJGpl5V3mv8yDBwipl7ZfrBDg9IpnGAyb7OAAWWKidlpbCia%2Bi5OFc%2BwPALhcqYMB%2FK5SwlRQmnBw8dF9JQHry3maMFMRi71Z9C%2B7eUxmbyMo2BeZyFathWMMf6j8IGOqUBPXYGJHdM%2BvdTjJO3GNV4NAKzDsK3IZp9o1dnBL3VtSRJrx0D89qAfGAnJdC8IkLV36MYa4mdlqsH%2BIXQtfK7%2FsnY67HhXy%2FLZN08XHZLvjJrSV23dV7vZlFQMgtiDOzhd4GpzH4TaDtHn%2FW0unWprEbCy2eO8TNgwcLxGT90QNyEGB4jl2kiJynIPMq094v4XC7Sd0HmGEqUMZkzKp9vRW2duuuO&X-Amz-Signature=3a064ca2a933fa627c70f8755ef1b5e2f83636718cee567c4299896a5ab499b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
