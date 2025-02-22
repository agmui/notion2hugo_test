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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRWGZKBI%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4sCjdsr9DRbxQyz90JQEQUdRfyZkPWJo6tSgd6SWbagIhAOvXwwlMpFLXEQFHmxqhljyzgMCNkUVi7XbtL9pQu%2BnOKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybMBms5DJWxFsIOzkq3ANBbIfl3UFnGycpEt1S9bbO%2FDMSoN84Wb7rKFZC3T7D%2Fsl%2BIrUR3KDFaX%2Bypd5n87qI89crg5p9DjypUrPQ5P3nnUuxRPan9ymAKAvbtVSNt3Qe%2BlVIGYDznKT5WATB%2BvV7cHzucnRSHzTRWuf86%2FrLjzKfqCi%2Bp%2BoJAUHrwodW%2FDqQrY3JFWyEJjNLbdj6f7qtWUPA9X6OrhdNUODhlCa4Wmug3BXNV0V9Z24E7l4cNfoJJOTPQZzbwpAv1m2nSrkt1knL4f2dVpVFxX9O5rsQ8ixyWwMhVExmy3SunFP%2BcUGwkceD6TPWHfjoS6ykvj8auIDaNC5vRIiXXavXbBgVKQ%2B63Y1cKN0ddkQq2zbwEumOQGm03pUd4IqEN2vZAybn2rUWvp7gOCAuUPrp2dBlMCK4ouPTUmFO1J%2FFPHaAdPzvYZPCNvFYWFXHxkPaKf03ED9yvscUsUOM%2FMVYf3ptWU6ASn2DDF9fQ4NgX7%2B2pl8jwuNKvKpGqRjq3knO9ZCIXOsQPBVaHvpf9rIrg38zTPHSXhydCfy9XGY4aPYasNY1mCEyV7mAI%2BsL4xXXYEb8uWnsS4IsyoFp8mpwQcJcPSKuJau0eWlBtB1iixplgv%2BmuIMYm%2FUlZr1FeDC7x%2BW9BjqkAU6CiHFAcZiY5V9go9B%2FK9q2Vj7cPEKK53Mr97lUSFm1t%2BqvnfykFJicGTI3pVlLPN73jEcGRmSk1wqf%2FU8S%2Fekgdg6UW72wG161nr%2Fx6cAyOQRLqKMWxnRuCAfE12Ol%2Fxki%2Blv9CtnMFCLb5zb5fNP5tbrcka0QYIZDx8H5mzFQZRHIPhniZhN2Zv2LX19Ou3SJs2dSQt59yoFnBAWPS7NoHGY9&X-Amz-Signature=86e0d906ed5008293be4559693fdb2e0aab271f9a4c29395301170cde46efe18&X-Amz-SignedHeaders=host&x-id=GetObject)

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
