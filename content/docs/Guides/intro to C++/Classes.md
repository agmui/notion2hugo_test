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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VWOMMDL%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T150925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGA4B4ihRskV15IKx40s51JXplOq0JKg%2Ba%2BUt%2BmubezSAiBYHL%2BXZPeUGBt%2BiktzHzDPSNE98MK%2BNrmT%2B7k9ksoNRyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzX4NijM8Mtk3c%2BjJKtwDKGLA6ypz4Tk62kVZwCmd1cFsXkbLGQF44bbNJc%2FhIoQAEcXR3FJtEHpJTmoPSeCpwZdSNeMTG6byn5PLVVWvP6shEnuEiQdmhUztWcU2r89t%2FVgYUpt4DzOmvmyn6W2NCgCPCQA%2F3uIi0bKUpHE%2FWuw%2F2qNf0eYdlkmiXhvZ%2FHRUThwcKyFMzF%2FOSRC8cfCMwWzoAsO0%2FH5ac8zdHveDGxnnSUqyF7HJ6zZ%2BMDgVYBr0CTvfxgDIbAt%2BNgJXlUPunyj1dVz6zWr44H4BRicXoeQq8kKdRMJz%2FnO0GaBtGH35wAiLd%2BZ1Js7fOLdx7HHXsI4KLY9vDhNEaNTel3dVwlZ2OCdU%2FnW0zUVL%2FMrX7u8Kfhn0BrnZL33usuN4252UwGO0bDbUMHUjDIVq7UCl1p3jKwIlZf41iZrVJfir7oPKgMEhg6SpV0b9WJ0IVjPAs8lhGem5kcX01BiesfvgWutAD2Muc3ipUT8U6GWIQStlejTG2BT7%2FSk9LMpAv%2BCjcxrsUbEK28GJOUhZ6eNjUpjNjVU6hBhMHVb6JCpZZLCUSeH76rq%2FFCFibjbIN%2FHQRmedVIoJY04vmP9YqzA%2FPxWL%2BOr7iWBpN2sGKNljnPXJaxESLioYMszAqecwgtqPwwY6pgHn%2FICUOfsrGccf8hW%2FFqJsOaKFgR7gN7kIp6ZArD6WQbs%2B0iBKbJtUZs8p7shtfuvEpGmqrIlomYXBATEg9ugf7kHDKQfinR32VbHuvW8wFt2yS31tMraIev9a6Vm1q94rPD0vNVj36O1dSovEybseCtipSJ%2F3goLmFdcem9S0qTtTOEBOSbRYLPTRL4TlEA7VMTT5Ud39fIAi%2Fog%2BjTU06byreaqN&X-Amz-Signature=254e77dca50f4a29f2ad8f7b36c9b400c4fa11cad5589820913658b431f8c0a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
