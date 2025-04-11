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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDGZHIEN%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQD%2BKa4hbicEJIMexYrQnaZT31yR10COsaYuEH0n5F5FUQIgENjxiKxhe%2Bhtu8BHfie4ucq7h0%2BZUsOpTcTD1iBuBi8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuGwqT%2ByqmSO28EtyrcA1hEphQqiBV9tVUfrI4JH0vDsVvOzzlKmeGAC9mTgvu%2BLWLeNwsnzenyyRyeLx%2B4BZOqUX%2BsdnBoiMWmCM%2B%2FSlUUmEyGv5%2FV2YdwlntoTcQ7DLoH%2FKnjGXHVIgQTUtHWggnNzhLDmP%2Fs3W81OQamA1is39JA9OrEkApW8fXgZ2oq5aE0ISSQ4T5%2FZMQQnyTRluphjgVOwYzqsqV7s0pxkf%2F%2Br0CqwtmBJrq7uw4Az6U8%2FY2eYKwKcOsiieKSMEIzGCrDQAo0x0vFc95PJ8SYSmVdJ2nouTvWCgxm2BSQSA1r%2FFb9nDC2LAqkXaf%2Bn0B4wVpNP%2BMqLLnSHgVCF%2BxPMxA8ncOH2NZ4AFEVpMJ7UGhWbyFaF7tbyObFYnJ4f2xOEplOBUgwhLkR3pSp%2BxGUohJ3YWTCWQ6n6p8DY0kquN6SsVB%2F41qbjOKdJK2TAL6TTe48gK3nGiw8vumB5VBDy5VmMPcdMDcqiFecFLPkfOy2URabDOTJeyP3muZ9zBheeCTIweCayfnOLC%2BOghCvfRnIopVX9RsZqT9M91MReZ%2FMl91ooez67MC0GPLWuF%2F7HMt5MbYy01PiL11ywZn4txhte5qflzhgSEBbcTzAIs5%2B%2Fpsh0njz8apF88NYMM%2Fd4b8GOqUB1mbpBDpoN763cGCdgDSCi6rXAYNThEwU%2FxFGJNjxznRzrh0Hu0ZDFUvU4sXW41hDbQ2zt0SwaYoYNry2fhUr%2BLZdzloR5aNT6WNb7eD6pXTErYnZdjqZb6NLS6ect4colSvnggztdLbf8lp8aKCM7VMBK%2Fvp3xDx4thBpgkk02kKJUYGIq%2FcyhQ8S5EFn9G7L8msunbCrm4NIGSsBXZj6jx8W9%2Bw&X-Amz-Signature=d4e74cdb666535c08db2f12c31bab2e1c87d42532df91ee16bf3e76a246aab8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
