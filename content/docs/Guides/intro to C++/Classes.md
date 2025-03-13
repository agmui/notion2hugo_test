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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BBI3FFN%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMBjnLweZMUWeVxrEav1m%2BDrF%2FHzm32cfcNPJjKwCuiAiEAruRqyffhaNlf3iILPg1Fz5Vm2Ck4Vrsmxx%2FrC3f%2BROMqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDzvde%2FoJ2jJxhgBmSrcA1h%2F%2FZ%2FbNgBs5ssFAO26nJVA7BnaGwAj5jOHj1AVbUh7%2FX0Osxe%2FY6PBDwKJVK5AoD7irp6n4blkMy7JwhFJ7LbDhAHrN%2Fr%2BypG%2BL%2B7rkGZbGw%2BZI6gxECD3PxZC7tKJyiLsOY1jax2uj02rB4OJIReKXBXOq0IIY104uQp4zmKm54AIW9O19VdsjVeCXOz8c34UCLZTH82XVtW9TKO6g7OrEHv8LYzDeEL1jOGc8vNyuFmpBS4yfujO5acxsYMuG6rysSHmoZX3JjUSoY4r1sYZH%2FCV6jslM4NTyeAYu%2F7HFlGgo%2FVxQqLlMNnEytI6YEKChtaXcLT37qcxsXOSt4e7NaileVtVOVXlOK930c0EDYmBjxpF8j5vofeSLiDzAKKw9NTemm1t6OUg38nxYYlKHUwHwbyH6y%2Bmas1SNmkPP%2FfS3lu7W8Ip%2BKyAgKB1DEzhlJMmyNJ8nyKwckpxtX2PbSuSqEHXzQOyrxbQMLSZvDWxeWFXvpWHTLTukDMgl8KZEsZZZs6328vWjOXKcJm8iLsEXz%2FMRSmd5Us8bPZnhWahCtkzldOjHI7QnDXRzxtX8YMYNMzZYmYUQDkOih7JdIVeBp7yuY8sWFG6uuJbjpF2GbQwNyTyGDJSMMv1zL4GOqUBN5bJIlQDMFFg3dnFAawBAACKBq6Hq%2B0d9MFT97nXotYKu0ieZ9TuKpnhswU%2FTwBie%2F3lMbyba2aCL62uuvrZjL%2FMwOkdgx1d1TZH%2B8fXzi8h85E75zctYt7D5VFbLm4rpTqBWX90Qp%2BLRsCTQz63drmgzWo2jMRPmW3xUq9tz%2FEVDvTjB0PnxufeBKxtDPJnZXcCb8p%2BuTuL9KY%2B8qM7eOjV5Mk1&X-Amz-Signature=a90606920fad24b1f3192e5a6fceb681204d1b1498cd0887c550e008c12d3f67&X-Amz-SignedHeaders=host&x-id=GetObject)

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
