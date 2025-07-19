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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W4NKCZM%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHL4d8dOo4Oo9yWovAox3rZkDx3E%2BxXeDAkNMLXAgD%2FFAiEA4HrqLIAVKURdWo6nMmNnbkzGYsWFLDHuGeBPgVOumrMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFR2XyDXMv37ywLxyrcA0xJyhkiLY0%2BVDe9ngwffq5F1%2FgKip1j9OnuoPi87iP2bPysxXrIKTwcdsop6Yunl8O%2BfVgAgdYNHEcQVZ8Eq8XnQ9Ch5vzNHtrP530Fsh1KLTZ%2FkZ0vKE%2Fgi2DZygeZlNlpuDHZzjbAeITLNGU4L7cbB62xegi0liKw3%2BLbEGxqrzHJ%2FRZ3Iwspkj%2BlTQ5MWLgXtGXPogn4OSNZt4tgmFIoSVADrLXmRFzZE1Ca4%2FJbPACuyoOwVO7bGAeA1RrKznfkTzsMjjuG8JHG9%2FXnyhA3Fx3dAJaJpvEOTk06m8mEfdgjOMa8p9yVMwaVpiUwos2%2FObjn03Z5sJypKUa4zTMeQDTUqI740aOUs45HK7kQpE2gMcKgf0rK%2B5ZLHCvfV0gjQ3lvSdoGKiSbdnKrcZLcswi3Abn3I89bEzaHQ4tpWT4jDBY9h48hbHU1FBLFUGmhvxdBeJiGddzkAaD5kS8nzm7433yojbpcQk7diILllYfMVQAo%2BpsKb39798yQ0zPkzlhhVfoMTwgPF%2Fb4E3ltBW3iEoTrJd4YPUiFnr6PkHYviSo%2FBHiwPud15Wp5DWmoUOXkcexAZfSXB9agtk6cgatTvOuaFXlVtD%2BadO3KmOpbSaN9iA%2FKNSpQMJzm7cMGOqUBEQ5XhByGQ7pmnrp%2Fbq%2FnDsFYO7nCiwyMnXrcB0n1pKK72cb81KClrsmGt4MpviWZQiNtH67jJ6xYKzFMzkhc4oxHoYLN3ulUouy2wmGTPInDyhO60aAftsq017sj%2B35ozsoVGBa%2BP9hPpbRzn62JXF3uYNrHFCCs1JkyRP7Ow3ctvFXiNdU5I%2FyNkQ4pQ416fGEP91VB8U1hdNSlPxVS2eEqrVB0&X-Amz-Signature=2b1e4733f12ff808d2c3830804bcf4cacd56f7eaffd65f5752520201a067d008&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
