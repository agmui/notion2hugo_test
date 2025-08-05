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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXA36ZLZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDQ%2Bat48NgFpwXgZL96npY8Vt1DTPO7lVe8iJYVZHB5xQIgBoP%2BiZmzNwFukhsTU5rjl1J%2Bpq7mRtcTSLR5FvhZhCAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDDdRiTFDwIPzVJw4ASrcA0Anqu0eBCy9OGUVcYzQn7QYHsXjRne9uYecuHLu8dXDw94JUag66b4ceIHZYI3tW7qcB%2Fo4M%2BeFn4EMEIRbMlaLqjpylazRxWUey0THfqq2dCdbbD1SwFedztiFaMlEtsZrdMKJ8S2JxXaRNjwaWtAhgoKM41FWy8VmdQy432s3%2BX72kaQLps7M6oS0Xi%2BO5xVNqBpF8vVscEe6mJq%2BrHTvGqRcBTPHRFs9lJxU0xpTOPDk33gAPXduiQDyZmojJnNBCGe1CLpPTr4B5MGyF%2B7DOEDcdOIwVXVWnA25zEuf%2BWzdg5FI7fSdNLd942cD9QCd1qgnnTtK7dXefn5x%2BEtOiJcX4%2BZw0q11SmGxJSsR5L5fVhnejIjTsnp%2FMZS9iy%2Bv%2BCCJnsJZk%2Fh43XYOyr9UpPCVpV8o2oHFXnPJcjrEgPVx6ZCc3LmYR2wNJHQoXJuqOY9%2F6SmL816p3mI64EdzbVBT8P48KkQsPA%2F5QGGD%2BAzJnG34rktqtXfbLrf3FFEw95cAeO3MSOMotOAv3tmSI5MdfXP5%2BkLZwTHt0br70TtkWKn3Euy3wyT4VL2n34BHYnm2Ujt2di1sXl%2BJxKk8aG0bV1cfU%2F8O0BkI%2FxO057E0plQsMpVjpbwOMITiycQGOqUBLOkM2rz3jSD%2B4G9MKxXvFo3Zk6KuV1sy9kW4ZO73JkI%2FsFRMt9fw126Npp4i0MFo2U2hGGIifbSx0Fm29Ep2aUlSyDoKsXJUsJJUpPF6l3rOj3DoutIMlacKteKdr%2FypRRlbXsEhMj6LCknH00fTYaJiKE2K7thhze%2Byn7l%2Bh%2B4RwMIs9leUQIQM7sDh35gm0lbPCGDqpfgz2lfc1ySxmCz0YSc8&X-Amz-Signature=e0e39c7ca44d2ccd5006ae41cda8aafb41392d0e274b58ca54c8829d45792ffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
