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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZI7S5UX%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQC%2F1329eAkPIp4b0tVNU1iTwrq%2BjDoJDZvOppHPBAZjMAIgCRR1P13VOgR1%2FB5Xvig%2FFDjCDfmZuGyF8JnMbRCWjbIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDERq5I24tSFc4dxMbircAxt5j0v3oI95xvTNr8cepSd7xJWWqR87aH%2FSXd2OqVSWFT1CpV0Hc32kCZr7UOruCb55VSjcqHwpA1Q%2BlPLsZTSfHlfXvF1Wi%2BzP7bn%2FQ0qW7aTstUTKvKDlRMDIEdF5BLWLI%2FbB0ZqJLA%2B44cpsCQJKSOE6jAKs8pOztm2hH0HElwyN9uFYU09kuoPgqJw0qb0WIYpIalkDnKkpd1JaeyxStlDOQKo5Lk1LZmKKsWKY82BYsK2qvvrJ%2FD3vEi2hkJOlBPjPg1JcmQE4GlvxaBM4Cf4yHVGWJNMWj1nOQk7rzGlktinfMKUEeMf9REW32hX7cKiwyHu2Whd%2B7GyifO8t%2FQBHShhIWtZ9ou%2FB2CpcvdwoVzg2MjN1ngBQlVuAEYpSbAejhg%2F8o%2FLSxbDVwDYqTXcLwJv549FSz9HEVJ2r%2F4Tc574Kn4kpeO3j3KNamtnxTEIHlduiLQM6bpOb0ABaZeJ3zUFbHx1aJtYWB8Al2aO06OAN7M9p1ReMyvHn9PR9ZkyaEn3Kg0oChSeLxLah%2BukBUykRQqlYIsFdY6D1uLGi3Y%2F%2FAOw180nu55LcdYHEMbZ43eYIrZVZvCoCDP28KqYKJdT1%2BKGYPF%2Fk0MVi%2BJ%2FFjDbv%2F5kZnp6EMIr%2B6L4GOqUBdd46V8O7smF%2BZ%2FA1T%2F5rAbqlNtdokZCoeLDvkfAd8cqGsI2E%2F69ArGrHzVOdhAvqvTU%2BUwxg%2BBZnPLsAycIILpNQuCttgx0q9jHuhyZhL%2BbDlW2LF5UiHSHrUi0ussYd0bzVqnPdcAptyrTS%2BDG2XLnG4rhen6iGS5vmxqdjQFGOa0Rh%2FOF59HfbdXrM64GdYVTBEc7YsOa2se7vu%2FAkC8ZOkW%2F3&X-Amz-Signature=07a067d23c7784203f06d65adf09818618977a55c7e0bc31c9e3f638907b5862&X-Amz-SignedHeaders=host&x-id=GetObject)

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
