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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AK5H74O%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIDhSJDDbTJOntksvEudfxadqKKOqERpZeK9cHblAAmKxAiEA4avoCdQjQ%2Bolsk0leZsRVKhav3BPZT5JfMrGCaIvNI4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmoLcq2qeK8CDlMPCrcAwqCIzbDPOHteTtq%2FpliOUjcOOvbENaAdl0P%2BRKD1vFC5KEonEwv6DaWVURweJwWoXY19mtpTBQDDvuv3VL1xGIIcwdUKpM45sTMJgXNfK%2FRMXEn0bWC9Lh%2FKcYZYVCILcYqdh1j2c9PxXqOn%2FWK1ho%2BQEjrGojUeEFnQHPNl88MekMkgZv4P7r5cBc%2BLcC005pKvfa5j7vr0oYAU1GfdTrQtXKeFOoglRsxrVBIM6e1nOag2FztEZV5APYAlODVtpfElo0voLQV91bjNVBCADL4SgeWc%2FJ78Lb6tNodrNEbOsyM5NY8%2BcozxbMVPB86U%2FLfVKbAPqQ6flNikNnnEwTBjSHqHY%2B%2BC5aL85449ryY%2F1E7fRdSO3Uss2l62EoeQytclFYk9rpXjLskDPjupXPdKr8TF4OXWrn7cJvUKKtpzU9UO4zsxjuBRrduX%2BzjMqLAqBqFt58yZCH1CrBs59Bs3q3ZLRMSraAGxYR1hkt7QDItxBJCQ1cISAUdXmKqyAMM%2BEfaAYh1D2uOUf%2FsF2gLlIyZ8h4tRIDHBmBujfVz1Y%2FPDGbUKzrg%2BmStwUVNosvQTa2651Ekpc8cClKHsroqHOvkNBA%2FJ6GU%2Fr3GJGXfxYDzQMLGbrzjwkCaMKmg%2FsAGOqUBPDSBMlC13OewV0eJEIf449GE2fwb48gWlPDhng64Rs%2FAz7%2F2ygBRO%2BIipTBBixaZaSVW8U8yFa6dIuwsNjsZTfa8Oh5v%2Bad58i6KkgvjOlJftc0FcTYPJlt5YW0AWUrw2ZLz0XUnpKDSFDZJHxRqviVuKzEZtikr971zVkhjwWU%2FNlE65Dk6SdAyjctnNwGG4%2FWYTbNRKNyNeGorQlsVei0lJhli&X-Amz-Signature=b65a4a77b07a71bbd0f5516b617ef4802957595f3a2d323a7efad9264661eb1c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
