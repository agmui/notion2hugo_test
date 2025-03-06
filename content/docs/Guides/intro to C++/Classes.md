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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YILBHV3K%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCS99cTX%2B2zX4vve69WyyXlyMONQT%2FaM800CXLpzhisgQIhALiLkaT12lApw8v4ua9dZ%2BNlfHE9VYi5YW1xxfdxCxjZKv8DCCYQABoMNjM3NDIzMTgzODA1IgzBE43Ddmy5JQzqTLsq3AO1Vteumd4%2FRPmVrbJkKzwQ0LJTNYZ%2Ft0%2FsbDdm0hv5lLVOAO74oeM6AgSch1jYhD8SojzG86tS02OFtE8TQ5x8pnG8u7xxiruSmmTCGRpqSlXfQZgkhZ47kHHxtnD2TclDj6VVkSOpgXGmi8sOV7TwOzCE0tEb209h6UaEMDYvRgXuMFHABX8DWWlNHTfzR87fbtaFlGQRou0C7KuTNjzqJVGGio7HLHOBqMFPxlX7%2F1bCon1z7L8ubKGp1BXS1YBrI3BFwvW1LNArqrcD7tWGFWrSW%2F7OEwlzFkd1Ztjnmd8TU%2FCHNHAIDN2wpk%2Ffkiyli2Hhlqaet3Iewe8GJ5o4x3LJGDlf4m%2BCvYhSGv7JymzvEdmVezvYt9S9FMriQjv9sCltzFulyaaC1suc0tJS%2B2EbVHZ%2BClgWCURnSmsBwwdQsiSp3qtymQ1C6OzigVB%2B7g5YOuUGmV7vpd3CrXzYvkC56voUDHf4FUmVZJtPos9km%2FvFux6plwIpMideDeZrcl0KzN%2B55N59fLBX8D5Qj9YCRRVMRdbBgBJJ%2FrZ1mTOnokCjJBvqy8Z%2B%2FoscRItOLYqXPEL8poxhoxFRtlhFntMtlTtXQXG8O25EQ3HkrXFMZbH7IlCUHdM%2FUDCB2aS%2BBjqkAXDfK%2FQd161ZzUP%2BztKLbCn3L9j79TcEkpJWIlAcpNsirA7kYNoLQXA37Raz1SoWCDlAufDkkfVkq2lJfHBUQ6LSo%2BDIEfnolmuqmoPpG0%2Bw1xYDBhl2XMWrjhhle%2FjjsU%2BS5JzjfuEI6G0TGDUnU2IRTLBkWtiJE8QR0xUl5hkjSQW6TTmiYAFMQ2rkcYte3zU%2BlSnb%2BBfub%2FNQLrkWu0rY1Xg0&X-Amz-Signature=16797311f259bf3d59558d647d4274bcd483ea45defd38c822f502a47d3f2c1d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
