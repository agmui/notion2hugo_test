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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTY2FQVD%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDe%2FAmPcTlXkX4hbWeLmMbTQThqYKSzyOTe%2FUEb%2B7m%2FcgIgPWMMuBe0%2BpAqrJTKIISMA57r%2FNM6yPJW%2B3PnTZXHdZ0qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2Fum4jooXsA%2BYhFRCrcA0Wvz8OQVs8GD%2BJgkcxBrnlWSh511vZxA9yyT0JCKx6Wzf%2FjeMEZmHzwOkucH%2FK74IKlCWpjhThTKVrhnjuQqbJK6rfp1MDjtbKjmh1aglUf6ZWVPaPe1W2npfMC8phINQrkKXfzcb5DZjesuU9bqO%2F5uEUaSXbZbA7u0Xh9RbZyQDzHcQsXVyBSf1zLDKAVijhbPiQ6KC0EmJU5BQGCblJw8vK1v%2FBtZP%2FP4k%2FhxmsXBc698e0oSyw1enYzdP0ockemtZVW9HLZXcvgtLfLLYbvorr8QDwTVcvgYOE4jhA0iSgu2e%2FJZUG4Xx16%2B9NSJvtcLJBi34H7EE6P7OTCVM5%2FFe3nuYJi1FLV6SHAC3KDo2SjUoB5dItH6IJEyiI2lvDUXNPtcpJn4c1sU%2FQenwpIHOyCBhPdQ620SrJYHp47PuBa4pjBRfa86Iv4IBy5KPO6bbfYcMuF%2B6mMZ6BWDFJO4USvuTEBmJIndHfcfEnVPuwJIDsrNC%2BomzCLxLYcv1AcBs7mv1M6vdz73ANPouIF59aE4T0YIGVgsbZow24irhyldCvZSlJwshMK3YhZ1wTgQnA3XPF2t8z%2BxDjVfU7ui40UYtQnCiJzG15ljpIVkns3II%2FS%2F6%2BbZauyMIKT4r8GOqUBKgNDD8yftEqa4pQmw8TX4bO%2B53TqdeyhdaInKPoGkuvYvK090IIdney82rvOZvxx6H5QwdjD9ogbntE5UlDA9TeDkMXCGZHhEW4ycZYkp0K3WUIVCmA5oyD2SD76rISNqfmRQ49uvY0eCd%2Fov6X2dqTGNVCDX2sDlgq0YclnBUniJ47L5f7J8bX02uQx4diL4zQEuCwMECNvTGQAgcmiDCJk5NHO&X-Amz-Signature=a4a66cab2f0761fef0ee4fd8a80d39a2f4f4fe739c6277171f5bd1d81333d629&X-Amz-SignedHeaders=host&x-id=GetObject)

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
