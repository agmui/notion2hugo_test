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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKRKKVWF%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvtkQzUmTahX%2FBTMOOEcP%2FLat3SpfjmYKxluqIRMHDeAiAgDavUuEkuXuToH%2BNGa%2Bl7rVcWp5zx3QYmr3ypHeRCfiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpxf5Wiw97bH93KVCKtwDj%2FhY149Vh9GGs62BYX0PZ3IxzZR7b%2BA7Nx5PIV0d4OHflKNxxYPlEey8iQvNO%2FFKRuuKAidBMKqf5UxFratIve50AlL4tr3N8UVtEW2%2FUeRnVFXz%2FbJQ%2FJXGg0n2NJcjqKdwMIx4Vt7BJmFPd2psaKX0xTjrJJqMhxtUDDNCU%2BDrFCjVUJTAyQ2lM%2FTHkUbhoJd7ZL2lP8TtXEg7Gg1WgklH7ARzk7sUecGxuI%2BnJClYGF4M2VNJZgEQist6%2Fp5Q%2FXsW612hC6Hdc74HuBoqg0QzVHhW5jLstWHrX6vtIQ6FqwlVjhrjkjElh6%2Fg8PUtA8uNPp4IbKI2C%2B%2BZ3NwMgR1A6b1rXYjrvyE34XJrbn3jJswitQSV97pOh42TVOSCVo2B2uyClTt2UpnnMFvs3wSCCl70k1PVpcn42H7P%2BWQ3FmHGRMqAvVu%2FyfIF1Euj6%2FobP3q4m4DkDE0dREk2quVyzLSaz5EFS1NP5NCnRuByazFzroorgkabDVkJIZ9x184Tmwvc9F687oDkq2BHGsu%2B0fHQVOKmtD3IlmSq%2B%2Fxe83HU5bJVsezb8I2%2FHJWStKQR8JD1JZyhgL4Bs9cHLhF2tRLuQByYSnex9VYhF%2Fpxn9FWVEFa9RbuIbIw4fj4wwY6pgFpdWOvJYxuLGE72BJt5rCfi4YS%2BggOE4%2BYnwv5rZcHmpuNGr6uqwLDXGA7jwpSKPUzj52FWoj81grf%2FQFI2zlvPGglRAOkUlG6ks7%2B9t1Iw837VB%2BgjorGWHlL%2FcSQ8Y5UQEJuVUhnnmz7dviHqJ7udZYa1rZL0HwdnCcFxLcdbrXSSYx0cpRmbXGZ2Ilwac3os0QYN9R3ZwfRTIz5XSHP03WDRFMu&X-Amz-Signature=da8351695eb8f6b5374b9c35c0a85ae6dd1040792e02c849187a0886364a5917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
