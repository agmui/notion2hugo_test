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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654XWTFBV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T140715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBW%2FufAVWFBY4yF1LsYJIWtXFgcZH4BCls1ukByGfQGbAiEA4Qeka0bdbOwO9LJDtpcj1YROXVTBHsqtvTuILTO2ZwUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeaZAkK%2FZLf6GSkcyrcA%2F0D3ID9M7X68XqNKBG3Hfo%2B28f6yxLPKqqLPFBebx7xl7K%2FPxMYgPpiU0H5fXawO73rp7cMcYuS%2FozxqqoxVlz6HVDTE%2FOz86kD2EVAOF7k0ApFbheIrU8DfodTmuG139lZajMYyB2d20e%2BY5mCfY6%2BZOfZW4c9AVN26y1JX1kcEppQf5X41NeDuDVbNyNZQ4yUEQ8UWmG3vjhgOiQFyhmjlat%2FlEOU7Gc%2FBUP8ceV65GVOv4HqJNypdSxTp0PWrKeFbAlZPVRDbUs0c7qDl3pfLHrgjhmb4qnzBq%2BEegBe5EvHrG98SBs0FQlcTS%2FGv2Q0V8S28upm%2B%2Fj9CweMPlaHsrwQaNLI1v4eXZbx3gZv%2F8Dfx57TJgWgJ1BQBi0id5BWN%2BIDK9Z8NiutCDpWW1S21FjTvIGdcEOuuxwP5d5jnYUagIQP61MhGZUGI2M6VR%2FeuPHPn23se3yDntJToCdu360oqIr36KY9%2FH0EEona6FX2i1DR3z0E9FDzKa%2Bsa8fJTEPiYbutA1VHUKwRtCazK0XTsNYCC%2FIKMbKADTROevvlpgJcZlAy1CPX%2BI73E0p%2BztnoieuuyQGPEbFG5ER5l8hOvQVcajDYpG8B8mv77CUOLSDgHlkp8EoSMI7LhMMGOqUB3rDRLN3EVg83N9i8uUf76wzH3hVfs7QzHhhbEZCgCsgki0A3yhWSyuuQAlqViolcdKhkjctsIPbo%2FbitH5B2Uu82BuLI23eJIbd0Xz6OunTOGkHe9u8byJrMW45iizZ2g1Gj7fHhlftSGCGsSsKF7%2Bbyzepu6gSAodfDCNRzmozAnH7hz3fHXEco%2FRg8PMxBdwWjG1LKpAPFae1iqg1u0%2B6Es%2BLw&X-Amz-Signature=1aac41ca43f4edebb451b3f22ead26718fcfff5211ada65dc0e6425deb50e176&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
