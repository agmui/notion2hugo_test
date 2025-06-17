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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4YAKPDG%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeJI%2BawkrXlbCahUdMOXllXtLDv5PbMfbTE9zUOiLTmgIhANP%2FAgkAySik9mhEUYkxFP86EOOMydD1ZJo%2BDSRpHX7iKv8DCHUQABoMNjM3NDIzMTgzODA1Igy%2Fl1nvip6hPSbCA1sq3AOEYZtoqhKJ6A0dA1%2B3qWtdUNS0uFx%2BUrCQ1uxDu0FwPGKNXSkG%2FVyL%2BITvKIJ%2FSb8z5eoWSskzbomrdTV4aa4hya8WAmb8tTk1xI0%2BW53qA6BK2RAuif4Cw3GWoENwz8TYcpR%2BNlzlJrccIncPYTSEgAnc%2BfQTvl%2FauoLw107SjdoOd%2F%2F1kzeFscWfEOfGSUJXUUFXYGkKfL1ylSRlmQPpKs4E2pc1W26ZHJ6JrQkAVyZx4sUrzWSwdN9KcGKfdWEb6y6xFaF%2F%2BSK77sdy%2Bns%2Fkz%2FtGQwBcJFfx9igBHiqNvsNRJqqHFS2YcAGY202QdhavaJoduV9JT4iR%2BJnmX1E9vJNi%2BB3SOmf5ay%2BcyNv2GlDqCNzXKef1BQXlmwJqlgWarfPrrEOTdYCnhWXs4kyBqD4wIoccnBTGBzzfPyInirUoD1J1Ttd%2BN%2BhpWsmt7FObUIh73ORonbHrcL7aoSxNh%2BQ1JS2zUnumlugkL8RTtceTIO0Y1V90PofgezMDXBKysEt4ls%2BtDh4kIeW3H%2FoWMGAbNysjZhsAP%2FLctl01MGzmFm6hU0BLmoAxhmbh2LDxQFpiOh%2BulWCD%2BsID6EXBIOEkafejw6cmgxFBYDxD12wG7iuFBXXCsOh%2BTDHpsXCBjqkAfcxt%2BHQAz%2FCgVf5HuOKAKjQbPCm6M75v29P%2BHv1CTa%2B5DSILLngOKUD0fVq5YJoCrR55wqTcjM64OT%2BpWifkmMQfNVoUH0MgVomNu453sYElbmkGI03moRyoRLuYlUwUQqcyU6n3qDEd5UAfxdLN4eLaj78AaKBy%2Bb7y%2BUwVPPOSY1fnvp23%2FIFD0ovCrji0MBgedQND30qd1hUXfFf4B3khcoC&X-Amz-Signature=9a7072519187640072f593f5631241be8a6be7816e22e81d45eb4561ae82900d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
