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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSOA4K2V%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD7QZ9%2Bw8nIt5o9rplBhVl4le2yLMoD7H2xyPy1iqQg1QIhAJ2aXvfrDDsyJkI80Q1dVf1IMMDXFiIpPtOPd09TTSTsKv8DCHMQABoMNjM3NDIzMTgzODA1IgzB5MiN7goIbEZBdkIq3ANkCxpCd5LvVCAdIsl%2Fb46J5hj09NVbiuD6Zw86Hcnbp9ZGE%2FzFZqIHKkQ%2Fg5LbMcyKQhJforDa6BUwdFLsMVvdH8W6hoWK20Gvnki4%2FDEHCdjmAvmmdqrhav%2BoiUmoOxzjUOAyWpkNYM2rln1H7z%2FIMZfxPAEWj9W2CdNPngr4yhnrzJxx%2F5fsafHYZQUxY5HK%2BATRSRjvzyBazEEa00Fe4cV44VaHLSiOgMrH5%2FaTN1B0qmefwxZh1bCsZvfGpuUeD1Jtr%2F6azqSvwGDuiRNnaLpJ3ohJim1L7nOHVoFeuIIwD%2FalCCt821uPLWIDRr32ugjlY0eyB2mRvI3m0XZ0ui0egK%2FSIH1qnsCKXnoKg9qBQeQuz5QHaVSB94Y7Xpo23x4WJ%2BZ0IqrXLEf56R3evZs5iBGGq3tlMNEKNNfpSkJxhRs5yd0y9C%2BPSV2dZZ75iZWZiu8KmeTDKv8tWVjxbdEyrk6axt8CF4QPytPaWaQ3e%2BjPKEjJPROsEwWfkBADuK0kviUrI521xBZvTBNsIcdsDk6UJnq7XTP7alTCaxgnOSHt%2F5niu1N2N9O26WL4B%2F%2B8A7X%2FA5zOqv0NMPsZuCCbTL1%2B6rKv1NTRAx5Rlfz6dsXxb3%2F4i0jWnTC1i5%2B%2FBjqkAecAcd63wPHB5h%2FuXM30MSXdTGDDEBhQPwkqhMJZx9sNsXqaaVr9XLSFNSN4kdfeQkHUEyxD7%2BgTVqIPqs0%2FvM5TNx0%2FlbMTQ3YuHsuzIlCt%2F5TZImPvxcUG%2BLejq0N4vbw3OCeDmUogxONOShZs4tjcTcgmFpokQgrzYr%2Bym1TtMGXpf9Pux6PlkOrVj9xyFdRTwvJ67cgqFj1IxRd%2F%2Be0X84mN&X-Amz-Signature=cd54884ab55e2fad935caa332acc370f221df691c64289a59f01d780c6976118&X-Amz-SignedHeaders=host&x-id=GetObject)

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
