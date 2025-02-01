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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ7RGVAR%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T060917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAz%2BN1nAcIgUrWaczllX%2FS3I1NrZ5SnIoTnzleggqFSvAiA2VbPDVC6Upd5sQkn9DdVIgGYDXNPUAwIB6A599OYV4CqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLg7FyQQtoxq0uhMgKtwDa0QQh3Jh1dPEWVHAyU0GZpfWVtjlvATYCjYW39vsUuFJr9B6AGrv98nCOvFjZhVL25jl0b3SYussQHGte30yYH592fVrSZzuxKZ51G0PpNNR5fhNLAYp%2BP7ULyJy8BvB3CIwDT3MZcTOmQJc1yksTSIIombraqRD4Z06MpwORzbuWZlK%2FtZ0ILXWGspMuBt8BBCBnDyryQObCgUXBXm8Glq4UbU%2F2WTT8ciQ5x1d4BLXW4UqVGBFLcZgMHLn18HGKBlXNc1kskdELNtuLDLUGVZ6R3a1og%2FciYcF6pKrsRbkD1XjrWs6GNhmaXEKMfafoL5tH2fBSgsId5Md3%2FmUItUuEKbtyjl8b7WdvG1xixf15IEMo98Jm1M9Vvbxa8E9cbZxm3fhccV%2BNzxkLXYaNxyLOkrJJwhXwTwSZy%2BJ%2Br7ghU3AjJa0vosHoRKns5exbj%2F346P8gWOEV46ZVK3j1ffdntrcWm55q2NA%2FdM57eV80G3twq1ID8ykBjxn0%2BYI0LAKQ3U5u02zfQFR3ClcXHGFV3pTLCeDhYmPHAWBQGl90SS%2Fd%2FiHEoIaewExsdKg0JXQIWHpw2XSMGoiJWxEJZCnzPhYwS7FY4ZvYtoix56cM1Rr8DR0iNzTBrYw8d72vAY6pgHqtsMaiYEP9lo8Vbp2WtvdVPYhqge4iJpg9Oa5HvuJauYdzuLPg9NNUHCSo4qs48jZrd2tp5RgIPKUdIoOsbnoyEZobZO5Hyj6dPJfEAt5aW5HBJ2XV3zWC9xhN3Wz6lIFZ0MixVCbO5NXoUCZb0CiA%2BeZwpNLqm6ou72%2BsKFKr78gGhZY3uY1dQ4NvELHknHGYBgXOl%2BePhRXOAHSFjQFgHykGJQ5&X-Amz-Signature=4ef98e24b8858e615181eacb5400339921f852653551dadb115c993eb0bcef54&X-Amz-SignedHeaders=host&x-id=GetObject)

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
