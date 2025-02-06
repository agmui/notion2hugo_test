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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAJOQZ3L%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCZsUGAVcJA0oXeBPq6p3AONvmEb1mxntHj92NF%2F3%2FWcwIgWGp4Has1YBLPnVcmZu3QTyEcEkSoSxTJ5KwSVSpJ1Kgq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAau%2BgYxMXmNXZJ8WSrcAzJB5W37uISWifqxwBMbb77UXmeGMwX3PTnEfecYmKBk3SvKXiYzEEqKo8bhtoTzAlmk09msLLksyHcNqjkFmEIvDoyMEOx5%2F7Sr7unle7MX8ePLS%2F6sQLtsPmmVI6cvx3Fu%2F9ApY0YlTp%2BtBBOBQBoJPhJi4fhUAdtj3RAOmr5rHX3pU8Gr0%2BUP7TlXWDbJ3lPQJPP%2Fa6tLblntA38vX1i1t4fbKtZILLMBk0pjNy3NilqPkwlalVKPYWykjdq44FLewxO%2FdJHNe%2Fs5745dr9t9Qgz5ueAvx3RCSK2sgZty64dKnhfv4tWmr%2Fxf6wzeWaVHs3LgVtBRiZVFJ%2BAJyaGgtg4AEvAtSdyWWJcUBY%2FpsrWtCw%2FFxoeA6SM%2BsiUnALQy4WufyweSfda4wX9uCDNcAr0Q25xzwxARrDcVdTBxFbPNYLAp8t34w2l50SzVNmYkArnO2p5zDwhvEU3RaqRvx7WkfTH8O3aMzyUkush0SJ6HbctlHX%2FQHILwk4Y4NBtqj9f9imzdHqASVq9AJ9NUKDicErLQrNwHTvu0e5v%2BxHlxwoADaKkQzZzCQZJOL3D1hR6YaWlQZeLOTj8KhFEviirZ1BTzSG1Uj9cQNDnbmIF51kPQSaUlVGKHMM%2FhkL0GOqUBNq7TLlkYaQi%2FOsEM0YK0czOgy%2B%2FBkON2ExridSTEFQ4AHoclsfDgFFInWrAQweplqZaOjrtGohWyR1mK3Gama6snGfRc2RBfqxPSbIhKMKoxBa7TfIQJUgXgWtZlUUyl52F0ZuCeNN3vOp68FVHPa40DJGQxVVep2LageS3EwhOuPrs2b6SQHr0vGDcztNW84s2BKdDQlBf%2FKKRro0rVde80oTLx&X-Amz-Signature=5269cfd2209ca6f0014ad29798e51570d5e750d1425cd466c494093c4f922288&X-Amz-SignedHeaders=host&x-id=GetObject)

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
