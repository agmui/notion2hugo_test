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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QX44J5B%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEwhiMQnz5mMLkxm2%2FpIYyeWc5bEOaQEvEf8WiZlgie8AiBwwgBQTl4YiM32JaqSv5Fw4cYG%2FZMlp00TT%2BIA9lnBbSqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhnldTUtE%2FemkeSVnKtwDPdProSYwiQNEkcupi5gN8%2BqUFgskU8CchOkVLGDAViLh8SakRa6Gj5JtcGwabbG8slDXYPEnZ3Mqqv%2BX%2FuF4Gr58DKLOHpxpGznYLkGh8hoZY2nbt4h6PHApYy6z527Owa2jP3W%2BsKbrFQGZMl9mDf3J2o2eEtObWdzjYlAHB8kq8w6dCbRoFfbKE%2BYpaK9O%2BGJxstZLe%2BmutylRCu8H%2BzPf4VLo%2FC4%2FPYyBBj2vEZbcOILJjsl8%2BL4ImX04dFNFV3fZC4OSAkr10Uh4iMGJPxF6q2RSF2HyhB0wSYD2wslYhu3LDBIZsq9DwPLA1hYccttjzWEV2uYYCIlCblfToylazGvFw%2FDEi9vX%2Belub9ZQRlM2GnownVnmHjwEYqENZBrLUh%2F%2B%2FKIa0woK5hWOLtrpyxCZgcxG1sWE2%2FKPNDB%2Bi3j%2BQY2deYjYvJ2uuqtGDNarwR6CCvdd4wdt4kR3dBxdFf5NjTaOXVQV3T9gwHcan1NdDOIrdwNOhV6MXgv7N8PAqc6QuRro9Mz5SR5oUNnlpyG%2FJYwMyPb144nt1%2FbD4q5VrgJNGwVeZbZ55jHnq6QcPewPNy0kbuaDCxBOGN%2FPDgqeSJJnPm4mblUaWBULOz9MXP%2BXl7n6QQMwl6HoxAY6pgHVsxUyIVtPGM2fM7EALxKMHcXsdP%2FUMF13R6iNpZQVsW%2BNgCaYxknNj3FR742MqtisclqyZs%2FT%2B9kt1vNproJdoDsHDCwcszC%2BQuYOKmaOassDnpgD3TMuAyx%2FKcsy7JAW1BE5lCboFYQppDQv25PnNKT9rwhgCq5fXkdzzfyzP3CLRXM6O%2FRzP%2FBzeAPwmMjMcFYDTnaa8T2TlK1xB49rnyS0leJ8&X-Amz-Signature=ae5675c6ada477a16f0e329964e3361c13bc98a89284710e106275d4c8c4a514&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
