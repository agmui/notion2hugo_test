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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SUN3YX5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQD%2FsNOEZvsYRwlHr5a5GBHzPFw%2Fac11SFvnt4rH6z1JygIhAO%2FfllDEjcl4pXeaSpISv5O5ivywAUra831jpmiyYg02KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxmky5MbzUm2InzBbgq3AMcoVZIzUEqpFje%2BP3sIkkJarGgiWCkxmEPVfYGBk%2BQ6LdgpUUT8pyZBTgJy%2BC6CGAup4%2FyOftqM2xNqh8QnsxpIar4Dic%2Bgv1sh8zGCLH6KNhg8NFa%2BoqQOtAWKerE4tK0Q33gF16lWgPH9ai%2BDjN8UDYr7qwkwjYy3iQf3ubR472JQOInAgGt5Op8y3S2vqMD24Ym94FHl8Y%2B96iu0SYW4soaS2vPEahmJI4AG6TXNxLbMEV7IYw1Lshcnh8DnqAgzFaXztJBwNFCXRHbRhR2%2BIJsF1wdoSSi4JNqetrADSRMoDa%2Fp1ruc6SQ%2BEgKR%2B9FrTP6il6twQSbV%2BbWCBqE%2FzrqrBIbOjHRNH2FogRU4CkXMwyE%2F5CaKCmcol8SeRGn%2FKlmncCFh5fErkrHHTIiyEY2AAWRhpCCTBYeaifwHjBo3DhrbpvNCVWZE0q164Ko4wUYKyz4D1l5wVikNkJ81Ux%2BZ6lOwyXQPKpmNagkb%2BuvjmdSlaUUG8wbluhvCaqXrX9TfMoRdkEDor7Qc7fSLqPdaF7R0vw6LhRij0Bq%2B9uvmX2sX9VC79q6dZtl11M0yPRz7nq3b5tjmEVk3IBS9n2ACQHaAjgHsXEdsdK4Jo%2Ffsw1QwkKfKYBL2zDWiNXABjqkAaF2MUleKs96sMw6RUFgiaYcGZy9J0bImmlLm1cBZKHGbYlNQxlLilTxQOccmUGf1hRmlXJ1yCtl5jHLPSfskq9gv%2FE68ntPAqZwgphqi%2BAoV2%2B0OBBhKR2dZ3yfe0WuMX5o0z%2BLqk%2FWp4Llv%2BQPxPu3nlHxg4Em3sUP%2FeHHQqyYNBfuHdKFKhx58gOxK8zplrGlY1qsNaDSENkScXVGQFkuMkdA&X-Amz-Signature=2bb72571f67a5548b8d463da2f1fd04e4dc5971a39bc4e3d6f1c2e3935f7b9e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
