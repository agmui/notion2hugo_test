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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656GY65G4%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsWch8izRXA%2BLbaY%2BcEguLWkil8Q%2FmkKKanJul60QCPwIgFcfLf6PIdJvZzQakPXrysVWNLKSCLrD5n%2FRgOBqoE7cqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9aNo%2Bh0BjvGwWLWCrcAyIShiq2GjqAfarlbtEIhdgOJXJT7FIAl2XYopTYZbeV3FbZ%2F%2BcsvA0j6o1R0DMWqeMOxmOJmvcmmisBi3sa%2FSR2mBn2BI7i90AdDpf62qWb221MxjY16UFjxlvIUKA1WzeSF7n5XXDLkSyNBpWeRaOMUoWsn%2FsYx0Xi1PpwNDNO6mmG2QG%2F8NpobXOp5vw8fmNW9iIzUnYYqbyiZjsPb96PBESkUUEbdILx9zmBeMEG%2BINZIjoXzkQU86DF3B8W94q5yfhgXh3c9Sh4Tnx4N7ylpP%2FO3epmao237DEoiiGswYsAFZ5oRjO8r5erBZN9mc%2FxfN7iyc9%2FKN2RgP1Ta8LqBWIlYRWLJTz%2Fm%2BYd54ScKZsybGmYR16jaZg%2B2cyvnVWwnNOpYXVHmpMlIVTgn7au5Z91qgHECO9PMmIF57tpX1kSUG6PE08VwVMm%2B2qIl6UOR0oVFSiG9XfohmAUXB9aiHh0cBnpyB9l6aqEpIEYnh0rymB0HdpOLD6SdLz2a3VgtBqEZLR2xgXlKAz7KA0rCMNvrc6redP4CGnVq12PyA6IB2hKEohKbnsD86hmloSJ%2BM32XLV4NUjv0sMEQkECMxsu%2B6lZ3FNlyILUEUrgziIEfFxzIk5VmO%2BPMI2yrMEGOqUBMBe0v3MwUqG5g8ybke3AFWXiwNmljF5PStX42OE9Ib5htVRVeeHPT%2BMdtQ1wRGByWIJ99tQL%2FXBWfegeUwr1LFUq8kk3lpcVoFpCl6hqbsPIF9JZNFr5cip3mzmyYyBNsiWmWGaQjw9LajxrX2VHpISISz%2B%2Fr8Z6pIUH%2Fa%2F%2BQeGWII%2B7ABpZEOB5Fba5FiVn59JTsnUwWCBkJZE%2BVX%2FUnWi%2BJROD&X-Amz-Signature=afa195ae0bf4ced3118b8fea276f5cb4856d55d04c842bca7b5ee0dcfb08d769&X-Amz-SignedHeaders=host&x-id=GetObject)

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
