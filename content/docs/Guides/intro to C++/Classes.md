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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKWG3L2U%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCID85HwI%2BhUT5bYyREEhSH3WmeUKgPeuGS%2BQ4zdNJvNv9AiEAoaGSq6Vh4CqLsj4VsmmU2vvxDD7nVyAKpNfBWbMPNV4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKXhVsCqubUBYQw%2F0SrcA0ZRJYiNBCcq2QXzHr3ub3ddWTFPRbsnN6z%2FGLr6KFHKIfcbNQW%2BWQ4SQiYfCyq1WEosg0AZiN%2Fjsi2eKEdlMoy6Ukv0bVYfJjj1ewzcFZniLIPM1uVR%2FkDF5AsDuzw9Cot12HaNn5uKFZ4bQWhR9CKL%2BZuAP8DaSvFqABKBi8LOf2RQBtJZTF1LXmcULhv10E7isTSpz1DmWjBynf4liGBq2f22CYjkr6YWfz7bVaOV7FDX0CZmKnC%2BYVT0GulubnbgHib7CD%2FFE%2BeuOKQR5Kelt10ZHobssj15eK%2FxNqVivoMCmP2F2dnu5OpK%2BlvKapu7rFoBc99tPaXX37QHsZ91dAMVmRwyNRc%2Bt%2BpsUnBkFZpAuyG4JIrGwAayIZz%2Fu6sOGzEcO95fRT%2FbiV%2BzDRvjsnhSvzzJIe31p8JL%2BGMAwiXWlvjH6G0kOC0Z4i5yslVUkBVBZu8QGlUR5h%2F%2BQaGpnPVomFiL8IElnPZ0IkqLC9KYcLpiq595bsxEGNx7s7rLK5RlEHu1NWDJpcJsAdj2IrCTw4M2YkD7wu%2BR%2F5wtpxgOXUmXDdYf9N3NEmTEySO8WL7YVFJ1KQ6nfpJXAquhSmca4R1WnDxE6kD1cbg%2BjGC1mWx5PtBXnsCdMJaugsIGOqUBtrFhzfV49RrWW%2BvMLM%2B6a6Gax0A6hJQ6H75VEIiBXaWU4B%2FSBso39yr%2BfyNW6L8L8mb%2FBmjPjk547MzV3F%2F2YTH0E3E60sMLm8UGf%2FErLHaqgi9dlev%2FFmLfC5agiUgf1ZEL8Mbqy3bPYdueusbi2KZcp%2FTooTFQq8GLSNXGjegGCEQdmMoU2mInZlFcT5UtY990%2BOX2FdTsN0YCCgoWw9vS1emT&X-Amz-Signature=5e2b98d11c5924303d00ff354e94a6d419153346157dced3261debfb1019f951&X-Amz-SignedHeaders=host&x-id=GetObject)

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
