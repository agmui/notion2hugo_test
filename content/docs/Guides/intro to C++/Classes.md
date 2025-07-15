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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EKLSO7E%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCBHxC5J7L%2Ba8SL5S884au32LC%2B77YFvGfmTV7joUyQRQIhAL8UtK98Ky1V1usBWhyiGO8HDEjy%2BpONgQJa1JjgE5nXKv8DCEgQABoMNjM3NDIzMTgzODA1IgxN1KfFMmPuFtPHl8gq3APIzBsNDarMS%2BENDVyvLAH9VI5t7Xij0rCYTOD43xT3VWFMtb%2Bapd8Ju84YzfXFYq4PFNVt6vLV6d6Hnmy5gy1sk4sADO8HTIO%2BTlth2tyfmfrB1Z%2Fz1%2FGsoTNYg1n0Cz2JfSBkKZ1P0O0BsxDhjL%2B39Esf12p1YiubtqLEPAIAPJT4DpFy%2FuZGYuuBDebvj%2BqUOJVNb8Nuhj0c7pamS6yoB%2FEoPZAGfHT3rNF9JA6yTqwz85sFzNq5y7alO4%2F13tBnxo2N3Ce40sKgqfu1ymQLh0B1AN4tjeb9rYKdYwPt4ZEgx%2BvtbJjW%2BAJEk%2F5W5esrl1ukAaSet829Fnj9qwvNtyhtKibD84N9C92gke7mCORPd6ZEKWbh%2BSxpNiMw737dfKtZ9tpiCoYad%2F14sVhF%2FVTiUb7yqHZTaAHqTc%2FeO4d2Vjar14Ea2NgixVOfBZC%2BmEvL0RhDLhEicyuiHtrWAYQMfMJRqwYoz%2ByLODPTFEwehDwdjpV89HO5tURsef5SegjVhGgQbNV9hM2JmBnai2x5XDZt96jmtB0l3Jvn3LdtM1emvKprdj7bymVkOaiwjrpgb4iMzfyz3q1oibcD54u6%2BW4YPGcbNIcg8n5ywaw6d6QC5VZLJ0GVijDk2dnDBjqkAdgqFLGMVWewB7D8HLTDuv2Qmh1AczIs7lHULOpTfF1J%2BbezletVkUT1Px9KRaqrFTJ%2BWRRxrDFgZaQHN%2BI7EyYwehGTWGXgyzkGCVUfcT3ViuWzzuXQDSj24oZHcwrxfDs9rKuHDs2AXK%2Br0KW4CyxD38GaBXf%2F7%2B9MAKMWrlob7pgOI8DyqrUF%2FNosaGm8XJf4w87ddTMGtTcaLy3J3%2FH8zZV5&X-Amz-Signature=8924a18222c0560044c03d6c9188961e21f9cfe5ca40d1e7fe76d396ef3ff37b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
