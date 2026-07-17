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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6PASBB2%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfU0a5vi4ogLDafmV7zxdNiZgmxlcaJBcVIm%2FYvV1yyAiANDzkL2pBFMV5nkErc4Fax0gVbPtmR60K9vSi2sXyTDSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM29bmPIPZ3jO9Ef25KtwDTuXafG73I6VM9a4batZ%2FEy0Y6Kzs5DQuSPpLl8iSB3p6WKTyIIdtVZInJ9adyQ0jGu44StkVROfULQX3UuYUKBd7N8AluFvrHxU53keQxQcau3XMbulKmifJa%2BN%2FaFNA4ikrBzPmZ0xvZyELsUBOPT6gXtlFLxe2ssuVTJ4eCe3u84zcwL0jNKQBDAAlZLOAPTMKuDjE1CsQ%2FluabF%2FscdPzeO8R%2FMl1AiKQdmR6CFwhJoosXfBDpKPt15BXT4zngZKr0RYCJmeOv0mFvEE6rxy50OhCw0fGuEoMW5tljrBAPsvKqbMo%2FlTIiTj32Vy0%2B9YHO%2F3UZWH8slvDCKX8CqsjgEngF7ZuTL4rmmbgPeCSVbA2CFAhlzkFrgcCzlnrM58xO%2F16xQhMFcpgVmpEAFlxA1ZHaDEUH3ZSUX7iTjr0vW%2BToOt8rbnVHRGFnnhAEX0W%2FJTDLLrv3gNzAQh9m0MTst8M7VjYZStU4uYgIlaInAm5lem1yIoeQkMRX6lt1584S3ysrLTezR5P4dzGxiLKqLA9Ggf11O3VEveXRsmNcelxvs6krKZ6jurABNexORZwCFHPikQcLUF84MKMOCsvuOu79oE12tVTD8Rnv4p9h2VI7tlEw8%2FOlyEwtafm0gY6pgFVTVoltP61KyVG4kTmHML8g0yCEOUuDBVmgtJvz09BF7q%2Fx5YSvBtrG7wlz71fKaa3gIs%2B5Cib9gNJ7yXbii2v0adWEM8zY9IbCdVNc14RnSC7yrehI4wRFN6QQGBgOvZZ6tAd%2BMoznB6%2FwQzwowRRfC4Oy4ZHeBndYstu%2B48jvsQGG%2Fo6V9oX5TXVAA4l3JbJK8ylfywN3uAk74mS7CLr8EVri4UF&X-Amz-Signature=0c754e384c4a73cbbfd2fe0dea08da5b5a151c89916b59bb8ae2e27839ac5f4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
