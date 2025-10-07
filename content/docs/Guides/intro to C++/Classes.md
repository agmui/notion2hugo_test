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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPTGURUQ%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIAWM3yjNGHELEGvxEZ2Ui834jDn0n6SFUal%2BCU90L1bvAiANjMVSpA0B1kwZkmptBv75XumiR0GtHeVTmicMwVkY8SqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWbVHMLmH%2BcMozicbKtwDRp%2F8dQooIi9bHpewIJzJmQeEWMlNEu2ajxff7BoLcFG%2FTENiEJvEOGk1XUrO3BqC9%2BVJw%2FtSzyFYXMDImmRKv%2FspQofYs8ZdCIjSdf77nULe2V%2Bm1cc1smFmUxght1YD497lnbGybNZv0%2FpH5ORNxmQzrgP%2BDor%2FAZpJ7Ju7C2sNXG1I25t1LHkMkxd%2F3wD3SZkDBTCt5ypqWugcMeVLA7uKSYhEwwfMl2ThQZgPRN8DRv38qyL3Y0ScvfTJlerV%2FehJqsk6bpYwn%2By9NCDN3fI7Qnss8UQxDcMK06e95KN6KLR%2BasxFyurrFc3rKnIHoYkDJ53LvQ1C%2FNLbotv9SLbdexgQgcShoGJ6oRyrY%2BervN1OXtGo%2BV0XIpDUXz8oG7c889lejE5FimbyjckN53bc1S3zLq%2BK1x67ytgmXejDTsV9OUI5Y4TEYkRPSSTJ1FPleZkFuqBwC6C3eo8lEoegmwKaKPMgAbyT1WdcQvKSZ4aIyZQu6%2Bs2OcpciQoXUVMUwnJMiaH%2BqT3N%2BUnDy%2BEArSQSrxBGk8qcmuqSIxAzc3G5fSc3DZdmMhZaR4MnZh2y1Bzq3Qr5J%2BwbkH04iPZV9rZzNhYXel8vNTBK5I4h2jfUT5IkQk6cYPowssmRxwY6pgHp8YuQGUEcLIuSnXDVpU27xfeA5OdUvFiq%2FniLPhMp8d1hEP5sr%2FWkHBXwBjyAMHkpS2ptZ2a%2FY0DE6%2FseY7RNAggBFyShrN13XyVrUjdJqnUC61MKpJwC1TGl5W3MGhGtbstoVOOLYu8g%2FIBTBJ3UgJk66fhywy21g5e6E%2FLXm6t1baMLcWm19ZrhAqsLihqzNAuX6TJMS2d2QcRIWRH5QOFHceU0&X-Amz-Signature=9a4260ae906bd01b4d23ba9fe99f12caeaf310e0ff3026a080050f6e6b954caa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
