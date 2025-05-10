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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXX7STMG%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T090740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3i5Ompm8fAD99SMBXe1VIjJsEPALpVtrFPAMa1oxKrAiEApPbSwoOcyy99dEyLtmTOUZfXKz0sQ%2BxuCTEhNhX1s74qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEInjya9D%2F9suoki8yrcA0cc2pb1zjpQ2GSVnoxe5mBm1FoDxIVhhUIlqS2VTPX2SgqRRvZWUNtT6fjahNIxKm17q6QVPLIbBs5owLBaElfu%2B8E5Uqxx6g1fZcOhTWhThounkSV%2BkRGtM%2B5V8qkzTtDnuRa2K6NaHE2xBJKCnDIuvwRLb28FBKeNh8nxqaqmPJHoXY2yOBJg60wRseiyt8Y8H7WrxhTwAVW8yVrl3gdcWX5ipdj9SAteIX0s3xWg4AxxpNLf7UmBIeb6RnHfPxX1DCWh%2BS8CmveuPxkaQexKJTG70Y9u39DK2LY4Pb3dBW29GXqPjZWjXLLAYa7IEYnNBrsxKXywyNRDVoUY2SXyCVgH96ws9pLFkP3AcM75Dh7A6UwFjEjYx3Ied77RP%2Bsih4ez1dJloXh%2Fw6ntZin6SF%2FXc0vkvLfDdFMvrAUB7%2FdrSW3PV3LDLz5sVr8F6HYkZqMbjvHqeEZ2I3h3O8dbRjlSqf6aMO5l3o%2BdMZSyIupHYe5mdqmK0caOOYd4hvuI0k02KFU0%2BCEUBJzFEM1gzKm8YOGRboRPOQx%2FNWPgJ%2FAHiFcQPC8eULn%2FLthUiENO0icEpaOOeMvJlYZBgbqqglhLjPz%2Ba5bq0%2FfLhn%2FG%2FLCbJBFaRi8UWmh0MMuP%2FMAGOqUB1%2BIYl2oUM%2BVRrE4MS8%2Fe7VgQsfwOdJtPtWUAoAmq0E1Dghe8zK1qFs9nCi%2FDWtHRZgFwVG24n%2FZAG%2B4TiVtxT1KcPIkvBnKPJC%2BRjqRH4WAV9Bbla1XIded13JCQnhCoHzeVh52YrWLJUNV4A6MvrrgdnPU6sa3i3W8xZRrc1eNOhZy8N1xHZd3Sh6pPiRIdCFl%2F7POEwIFgCX6dFQ9yjpPqpldu&X-Amz-Signature=f3e4c4ad69a086f3d2e6a8a22586ffbf74c9b624cace13c871e24d5dcf5636a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
