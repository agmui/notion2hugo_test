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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKXFAGIH%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeeXXRfUAFyVc0Ua3YDdBJNS%2BENW%2Fr0ohAjN75%2BCU6CAiEA8FHXY%2FAVXPi%2BehIA7ZPsO%2BUukEKwus7S%2BBjkwjIQyHgq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAy8rUK7tej9PcQcfSrcA9al9rNirSp06xJn%2FK5rDKkcV3kKq8LEo2M3jwHksc1UdPtFelbeY22C7l7pRI6HmQc%2F%2Fkvwgwgd6CtGGG%2F7nwj2u5sENohKSiPSpFoYw0VZtaixbFGGyS23kJOIDyEefUNahc3Dy1580JjNZGgbfUVWy1njFWHpiqXixdRCGJX4ECs1bmJuozNpR8fpdnE14UycBzn%2BIOPzGNVfpnEXe3%2Bg1am%2BidTdMbQXlw%2FWBsIgrof%2F53L0aI6Ts0aPsyMkdtfCayee65bSVdLA7cz3ARQBl6TRPex9Bqvpwtrjw%2Btd8sM1xFlli6p3smxD0WICPML3hL8%2Fy7%2BP6qCAOi4llk7f%2BH04jWZK3DW0NyDJ7ryedDbGHXDfXnC13iusKsgrBC7ZtwS8zk6pmLGz1qNX45at%2Fw9NdDIiJLOtyeCrh8p%2FIs0lsPoUuOQfjO8q%2FYfNnUP2bWpJq3StFQGDqUjoZ5o2Tb%2BzWczFupi%2BZDCygc3ziLmM6dm0scTmjtdgSZor10xvBGcqEFbfBXW2b2549L477syBButYIkvyoMpWQMz60SihEeTa3arVf4WVmm5qk9G6Uhktqs39tuyal9zk%2BBPAkJ%2B9sR0HoqOXJQlypB3Zj5OfrpNlOqYcQYyDMLSitcAGOqUBMERQYH%2BRb8x6omp3b3b0g0wYYg7sC5XcqXJodiw2KLthXNA5vpJ%2BVGz%2FiG7H1KelT5GgFeO6PF%2BIX8HZ%2FK8m7odmEPxWaKGy2EWc0RdUkVYWqd8YfT2PL4uCi2J4AMlNzAWG1i1x6YtUGYxDAM8TY6maKnBFA4%2FKwofWop2QFgHuhSBrxdbAoUkwCY6qybST5bW03nrfAcKoRnvoeOhToJz7UT7B&X-Amz-Signature=a94dea69e91cab60b57aff621c5bcdb7147bc31980dd5e6d8a2ddd1d3fdc30f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
