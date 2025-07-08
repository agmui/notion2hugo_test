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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB3MTIK4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T024234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDJmtOjsUeSj8xHBx9obsq4Q5EtyYLqyqusUajM2RkjJAIgX%2Fg8ee9nD5q0RmgttW7Ow2G2cHR9C4caUacwNfi%2FjXEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQK4CgzC00aarFBhSrcAzcT3tduS4ebZmGk13Woxc0Qg3%2FarXFzuWD%2Fc5czerhT63p2PzMAAcNGBjmmomfuHzqSnNUELBTBHUSvPkwsu8H%2F0cEE7eVTfySsO4Yjjbkc0EFP83Ypo4Rmkxtu%2BYqvq5PpxxbzY6fccBSuh1zVQweVlmKE4N%2BTCpvP2xO%2BubTX2dXa6MMFHKI%2FvSVvBvX5KRJGtW8WpaYaPJ46pvI9p6%2FHI9vt%2FnSkY%2BLBkTxov%2BZA3DaY4ihwmoeUuDgLhPeDhc73eYJrDa%2BtQVhDnqlqCEWVBKn35l8XzuNmv4dYjP8Jp01k9CPxFFP1xtM%2BhIAXGwoAIiQQVJnWHIOYwDAP9jeIctqIv%2BtduhnPVACft2hxYNJyXz7HhUv40ydc17qts90vrwcTL%2BPXP8wnj5AAPOpobWigo%2BH7bdsVi8PoOksR4UKEemmPNDiiOLI3HpolqISQ8u2wX1JZDeVDIbMCiRQk4dBs%2F26HW%2Fa%2FKuVL2x4qfNrF%2FwMHT3UQuk%2FFXxhGAv62Nn5ONaoaREN2uNMIvQcna%2BZwcbuIuAKQ5NUqhmA6S5xGUr%2FVckgP%2B0q0A%2BRnBYHbRHbR3aBRtOtFz%2Bb99ZdLh2Z7TFYVVRAav%2BXUGtWO5Z9Yk8TLSkSc9liuMIeEssMGOqUBqK4CqaHCSZG9UEDFThv%2Bj9yQcMwx7VG%2BZwKyoTjQ9CC7J2wm66alMbUkob0Li%2B7DDbZ%2FpZf36ekihOp%2Fd855avizbgnrkfCT9NtE9J76bSEyD1z8XyvuDAeolcUELQpLHkg3%2FVI8e3q9yIplKM6XKCSyyHAuQdFIrWNeeP9lLQgTxLODf1Tf0Nq7HnmVyp4a5wpl%2F%2FIOpXvBkz4MYsv6091%2FOHQC&X-Amz-Signature=05fb194e646da48d04bc9019a3c9f49fb01a15cb24234795e19159fcf537c4f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
