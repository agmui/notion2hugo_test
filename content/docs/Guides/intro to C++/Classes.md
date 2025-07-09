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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LXVFX2B%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbIUM91p3NIdOuV6nRfS8GpgAjRS6MTOJvuRDSSbM2GAiEA2iVse%2BLy1fS7SU5nqPxKtSNmpMQ1Ml7HzZgjgFEihdIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqonZ66h2g65dLROircA2xS9gF%2FtDMj%2FQStFTpTc3Fr3bbr6XbDXdu0j3or%2BdHV9QrX9Cc9QRmtK9ybd2rl2%2FvC8YrQL057mVq3Q4l6tYO1UGAAVmKzibP%2ByTi69u3y5sQuF6R%2Bn2BQC3FAu%2FQBV8EB2eaWbx2eKjRKAeq0UvnntGfaKd7I%2FMktBroYyZ8OKQTGO31Zei75cwaPVKRrrq3vDv3wJh2yPuOJo%2FJh%2FpHbQBsLI06Jkl%2BLT59bQ%2FGhxlmIZ6jdvuAYMrZYBVU5z2qlk6VmbG2%2B9Jhe89i3Qayilo%2BVo0VQ9a1Q87muFml1%2FVvtEXPohnZo5mAxNsMH2SfO8MFxAlZtS2TLyiN2dbQwN%2B8Wbo3VVQQQN1hfKXac8Ujd4L6YKPpZRhA7Jxf0dIZMG7%2BsHLlilEXeOrarEtfpkTSGBCLDmzaZ%2BSlIvGhg05jye%2BNvGYRBmIU6028lyEMKOooq5i6ZFrBbQZgkIWAX1iwGQn8x00WGFiNmhO91xYjZfl6g%2F4Irk7eRVARDlSD38ZV4w6zAHRZ3qdJC%2FsR7WXyCWTeBaw%2Fc8b4IsBh91WmF7MNBtH0hlylDx%2FSs4eU5oomEpH9UJ6fpPQUztij0T0uLc39QvXWgVgKOOf4V2EFkQlV3HbrlP0DGMLmkuMMGOqUBHwYlU0LNtLN%2F0AJKB%2F5bIja2yoQ%2BMn%2FzooOLQE34d0m3I1sxD3blPIU2Hc9HmK%2FzuQqWLvkg896VTAJDrh9wESfDxyPYMLlwuTuOQvNVzHVkwQ1Sdb9VePhXA7N1xlTI1cORsyT5NE5KzL0%2Fl8aTc6E5J5X4rIS20eTpGF%2BeXGPiNg38236ZQLtS2%2Bd7ywd9kIKFa%2B%2BmxIjsRgy4Ty8yOJi%2BeNJd&X-Amz-Signature=0e9c788048b0e3968cb4a548480361f24c1f1d07d7a90eac7ea906dedcaea060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
