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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVM7MCKN%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIGM1qqZEbi%2BuUYiU8bLr7ZfYn4xkO49%2BiTXswobYR6MPAiEAkTh%2FI96IOegu4Zu0XSdPc63j%2B5FJ1rIGAt%2BBz7MJvogq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOzTwAbGby8L4rNYEyrcA62LYyoYeFZVMf4hDeuOG5brQyAPEF9okwAjsV6HZ2NT3TdS2i5A%2F8nYJdRae2EeKDuejO9AdSzRlmX5ktBFHDzNIz0PAnGKF5DbX6gqsAElGHcUzr5%2BS0y%2BDR3paylgDuMQq%2FMvj%2FAgYamFqOpqPhR5xD22SzpRawWo8zv27v02atPZHitpm1oEyz2%2BJ3bu6hmjNX0dzqi%2BQqPQhB1AHyXhwMH31CDyfi3d52CWUBws4Hyk6y9CsJvKeJ508F5fuaUImA%2FNw0GcEe9QiDiOQOO3n%2Fs79NWqb1IgmF4dfUQCbsFB7VP5C8TT3DP2kfKEBh4fWHTvUItgmPmey2mZM7wXzkySgw3D98cLUf6YlBbSIjE4Lx88m%2BOBWfGeF8kbQ9V%2Fbacr%2FstZNhdjM7QPYSuNs6T0zfwxxKceyFt1LnNQh8MxwH1f08EnLEE8%2BoCpDegyHqDNrDj3m5Zda3%2BwcQFe7SVm5TYalc6IqaYX87Dv%2F2E1I%2ByjJtDn%2FpB5QmVuFP0Fh9XgxrMPWkphL8h47MEyDe0mCmOoIz%2FONcmKtoN8k2Ih66cBJsPngoVChm9yYd%2FzKNM%2B34hp9qiLx8UH9H6PIH3QqsgnsTu1zfcDDt9kwFLnkFQacxEK7HThMNzhrsMGOqUB%2BRKYJAfYjE5mihKubCy9kcaF8R1VcKff9pwlb7nVOqs4EDW59GY8zcILO85uBSa1foM8xV0bq%2FK%2BoV%2BS3ahZGOFZ65mUuJyeX97YNY6qKP0egjmRxe5w5IZR%2BeEucsaFSXW5Aw9Coql0X8WA4ckOG51R8OLPYFH7v%2FBMo7WRKytmi5g5wcVSW0huMWIYpqabzSmokJ9C0yTmcPOu%2BvXNbbUyFJ5a&X-Amz-Signature=7dec4aad338663415ef54af01eb9536cc58e2a7a8ea480468a974f005eb4c031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
