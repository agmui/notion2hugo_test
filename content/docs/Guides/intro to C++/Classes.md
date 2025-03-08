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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNK4XGRV%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC8flHU5zv49Y7qc8xjUUMGWBrWRnU9rDnA810Tuoi8NgIgZqiymSg%2BQ7VcHZIsdlKPGAkp5xsdO3WAFGiNXaOFM%2FMq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDEEY%2Fcw6ARDKgnSIZircA5EtRgrZjzRngrqIELeMSp7rPSFene2X%2BEsvJ3sxwYcKLkbITU3THiDwnLxo3VEHN5Bxi%2Bea9Cl18xXUu8rm760XgTTTu9iZ9pokx8MBN%2BVANM5l1DFNxQqoEFDLpz7Bclg0xQFSR7zddXmNC%2Ffy3hnE7H6kmGhnJFDaCe%2BtkjtKoIJG%2FK6TKFjiCoGdajsEF3KdmRzRTar53DdcEBfeTrgEExq1CvWHuoZrrxggTqwWXH6aXY13RwpAZAU04xMcgWGHT4a4SEKQ23hVfY0YnDjznGNrNT%2BLoKcrKsAh2aSXfrkRxGSkQcDW0eLjD6KZqMUVZBp3YZO5DzBGm4ACAU6o%2BssGrzgZEFjbWJNs5osrpnSrsLcd%2FtB0vtJ6C33GuUaAr9JMV8UE%2BqNwp2vDHQzA2LDClGfcMbqAuwSVWDXKFtOSMwmr7clSKH99%2FnL%2BFDidlIS9bReqHnDov3NNPq22Ub5jwhWV1NYhV%2FLXJp5m41HS42c8g7zd8Qs%2BQ1Qni3xmDl%2F63Ec8g%2B0v4nZVudZr3yLMImIfPG9VuKUQ%2B9Ecntv%2BCme4bfwj42982Z0KncU8ruhwqcS9Ni9Xb5Fgh%2BejghdWTOcAApjezb66mCi6Vv7mm4ZtT1OFqZgFMJ7gr74GOqUBmetK%2FaXsLk3oqVIe%2FJmBXCq5fna%2BZ%2F300wBwNsHyp2mmA92cu49x4VROPO30u52dHI47fiPBQfJKZpbKpSjLULFbjTlcajz1SXg6O91ymXHFI3zv66EQm7SDrPsUXFFDRtE9V%2BUYcqBjE1JWd4O%2BnNS5FJwm7OAo4gxwaiw5bWtC%2Bfd5ffRJ%2FBfunk7qxSE9tKLzaUG0ZVrUpu2N9qZzUwaXC8OI&X-Amz-Signature=8dda3521a25e64509634d3f8d4d62c54a49fecc896a45309dace96d2d04dacfc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
