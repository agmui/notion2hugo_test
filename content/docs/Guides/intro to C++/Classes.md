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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFSWAQKF%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIEowmD00vIkzq2%2F3P%2Fueuo5Sz7t2PsYnnqCc0snzkSQ7AiAodLOsRa%2FQBKQArklDsQQMvhemVfO%2FhzKJpRAB8QMQxiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4%2BNcw2CRLvbbO%2BwSKtwDobRwhJtZbcTdhF%2FZnScTZ%2BdCWbEnL0843CZbDXfpt55v29VhEWeAftPtnlo5QHi0MosgHVPrzmqG70McHCPx5xP1S2JvbYeS39nMR2nDrv1r1Myntf7sf4o5EZr7%2BYgGSemHryVjE8iIvloGrnyAhnIsQccTeRrMo7Amcs41N%2FVwEBb7aJSc0dnnI6d3Z3%2FHOLGcqGUuSb2ErfPgGpiM25ug6VR%2BR%2BZ%2BlX5gtOxMiVU%2Bx1tozFE0nqv0IubJiGUN9M%2BKrz%2Bhc2B5fcZIwOcR82tUcmq1lQIAu2DQLwO0hraH4XDYA9hZRKwlT5WkdJsubpIqlwercHtFLsCD0FrTIGi%2BufcFEJzEoSK3Be%2FOtrtKhu8zAJ0UOKeE84o%2BU5dayBzUQPDcV6nPxnvQ2Hcf%2FpCS3F4EZBqC3Ksj0PXyc5RU%2FKyA8TOQWea40W8AVVzq6cl1jo4zxQ7vxqBUh%2BRMq16TktBkaYwN0BdhdV0jJhv3H8ZoL2HmiNu7T%2BNe23DOya0s2xmxH7Zk6wXXOhv9ONGlixbA7l6ClPhKDqedvq4uG0b6QQb0l8zo69ppA3vzidnMlF6pQkapbRupe3iRj28lRO92f9nI7Tf6BkGs43ZlOkQ41z5FJjuKtqgw6bGixAY6pgGWBGOvADNmix8yMoJfjjheCE2og4XP3HW0FsFWqVZDkKgXHLl1gM%2FnxYwSxby7OasBr2EB4OMbmxctGrVaWiTD6WhE2EvopK1hqeBl1r3qiE09ynJR6gD%2F7IOTYSdQYXDPCN%2BAGKo0jv3ZJR2jyGsjFXCYCkEi2gkuDsEMB8cBVGfd6b3qnykJ35EGDfFgwSaNNenKcLsFO8ltM%2FkgKQ3XscF%2FfNxn&X-Amz-Signature=8ed24aa1332ee26f4fc3e6d86ae7b2b655ba73637c912523259c92398dce487f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
