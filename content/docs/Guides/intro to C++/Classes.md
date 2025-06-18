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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUNFQNG6%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyZrA5a2A3EqGAmWPStMMFgQ8WGqpHFfbS6%2FM8c9Ti5wIgDbCkOKBAiiAi8t4xxUpcW%2FpVerGeu11za3j3T%2BgxtfgqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZj4ereJZj960k5dyrcA6bZoxIFaDGJYNTeVOFa0BFuhhNAkC%2FUrDKjnGoye3D5WWVjNd2XfDCiqnwCKabfDtUqyg6QJ7OmJGLMoWOPJ0inN%2FMDgZ0li1BytSezROSGsArPBXyB9YCEP%2BfyTV6m92yi%2FKlb%2F5iCnxv%2BdE1gmKtkGbseo2V07wyZU0kq3ROTOMmHsxeDsD47L8lRngib1K388wdXiw250P8qepbnnCyp7dlcONHW30ke88GOEfRxUwxIDNK5W3YrFom%2FZ3NeVoBDCdasQi8igNUIgfsVQ1NqBccIBfUVN12e84b0GiflhDR6h4E1R2dG9NSox7jL5hXvClwvgItdLm6aNn1mK%2FOtwdWpNsSof%2BNgrGMmbAPbOECBdxfwMS5DZY%2BQesGfDlxwJnXDn1MKlbDzbuLev47KTXQEV9W3RUHyxr9QMyOCSCeIIy3HqxYUbtpb5%2F4z5Fe7frxtbqWtdhMX8VtAWoGAk52Gv%2Bj3S7F%2Fu%2FN81Q3mBmolo3ngBMMXJS9nPVg37g9VyFQIy2qrAVslz7xcMy66q9WYBkmzlSJE9K7RM6jJha3%2BK0MZ8P%2BVLEuPh4msR9uo4gpvmmA7q8nhHFfetxvcUSWio9R3GzPP9HaTP%2BJnnNW9C0gJk%2BeJRT1WMKX7y8IGOqUBFSqHeM3LJvsQ2%2BeORGAf3ddo1DKavouEDIZL5QvJiZaJ%2BqWnplhPw3f1vkKV1FSp44hc0FwkN9yuSUVfxNnCNhxFcfNXXwqt%2BTaXyofki%2BIfmmY99LLlf5mQ%2FVle551ZeqCgGRL3Iw%2F6CCej6njKSk59BlltGw8yNZ9JnhoCD2BzhokKx8fPVyyd%2BA2epmV17vVLo45UU1dAeLG5bNGoSfJNacH1&X-Amz-Signature=6123f57bc31de1f566d53517d8f1483ffe4bde515333b51d1281bb25d695d45a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
