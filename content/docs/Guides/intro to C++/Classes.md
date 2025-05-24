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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7IURLDU%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T150705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCUMM1qJcHkm5Z8pTW%2FizWdHCSbefeK4vY819anrcSo1gIgE7%2FgEBWkRiYV965UglYONzBSNnLmWP5mKIWuV9vPgp8q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDCID2Jcl3eFuMN2UOircA%2FHQPInYueXLGAgkhi5mtMgXuSxoan1BdY3RIJiC0xwR59B1lDyp1fnCzTDd5QnPLRDaydz9YoaH9ExIKiubV%2FAgbzlkrnuV%2Fce%2F154ASDjLiNfVewpey7C3kWU9KnoiGrTvS5wkKBQCUVZGfaBqvC1IpqJdK2KTixAA0nDE%2F4KPbIQ5neDtuvVZmSuB00Yyj33gTgO%2BtBAhgGuKYxzmaTLQ2ogA8Wa36CoCManN%2FI0F3dLCy6HqMt1JFtnkMX5DEXraUQ5R7zMUli5amgNYRALX0de9GZHAa3a0196FwsBMHrPh%2F4wYfgqWNvL57QYpezQKJ5orvp7o%2BkgwBxLb1GXgKCJwxHnGFc7r2IupYfbohlDSqPranvMoaSt2sdl1WOj7AHm31w7qiXCQuKCjLhRsGk4ozPajRYHegSEHoLD00D40xwO2crCubX9Q%2FfSwlAVmgWqZ%2FXhdjo6EdokBnTF86dG7D2vKcZGfvDY07%2B9yg4a4yuH1BGlmUDTnTnvZvXKRs2mOHALLPmNdz3Kq3SCZFFied3yPeFOck1MLe8%2F%2BRCcOndogq1u8mR7MTjirw6%2Fpt1Va86JWnS1zIpCSFw9bpr9Slq729z5ur4wohRdTn%2BQalZ2FNFrHVt02MLHYxsEGOqUBitV%2BedYg7xoY3sBpPXEa5fusU7nFgOYL%2Fu1J8ehxRnLf%2FgHdw4eaLEedLrJrZ631%2B7oVKp2SXv1nmYtvRl3%2BYmK34zAhklTbsCfvBdVLvdc%2BZxPnYMF44Cep7Z%2BA18VGtOIWyxsxT6%2FOSKc%2BBXFrx2BPD1t%2BU4GVJRVLZSHbwiiwUGN5muSRLh5vEXKLKp0c8q%2BQA%2F2WbKp8vFa6LaKxNOduEp8c&X-Amz-Signature=97fc0257376ce3a1288f0f6aaaa0175d075379997208c790c673476c721195e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
