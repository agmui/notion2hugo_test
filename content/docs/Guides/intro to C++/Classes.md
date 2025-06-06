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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCKYZNUM%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T181211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE15KdGVHtnX0dD549b%2BQxxQMwiLCHo9bwHHCIRWeBuzAiEA1j5r%2BXMIpOYYKrzQk6BPS2jownN6N3KTEEWJiYS%2F%2FBAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLIGvhi2AUqfJl7EBCrcA%2FZf%2BQlyOkQfoa228IjtTRUpFnxBoA%2F%2FvOa9dX%2Bu8sCq5Frr%2FMXEcj4bKCEiAC4h%2BLAfzG2ZxnSaFs5IjWNru1KosFqkld2Ic32VufVC8mycIBgvbPdZ4sd4OGMyqt2DT6h2A%2F6oYrrA6Z5QXXtf9EhP5IR7orOGUi9RQaz9%2FYDEF1b4zZlTswzyyY3BGkNCTlNPXbxT06Bb2%2BJx91TskFodPVWZdw4mImNq683d%2FX2TV8IBeYz3yfqjl3uQDttzhl8%2B%2B8tp6pHC%2F4W0lRwFsgF%2Fw17nOUSlin88XtDYrKuI%2Fq8KmUFha%2B5RZcQfhWlmjN%2F3NyTVU20nBs4kwOhiuNyYTGHX5vB%2FF0QTOLAxAzLxEGYErS069t4b6oTao7EtPiDJiiTOgqY7wmtG8cqFYzPmmxjFSjrBKBmX2rMWQtxeJcSS%2BWabObdk6pMwHPO6OFfdqkMw8azTYQK1BaRS2NkDtz8DS0tRKa2TuWdH3gR%2BcELBs95kVH9GtUhbyCDSw6TqWJMSOH5%2BnjR7LOwSfYh2kGJb%2FQO5eZ99%2BzRTpjpcGMq%2B1Nl8zH96eGTZ%2BtAwsjN1B11o9oQA33hFJ9xFbwtQBK%2F2fm5iHQsxr%2FRhFKYk5gBquJfhGMAxsHbfMK3WjMIGOqUBk7C5SmfPZHBxdEhOUU2LkRA9yXCO6W1WJAqNY9TrhNkk72OihvKGN50WWYME1Hgye0MWJNCKXUwYrMQW8l1LK1D2Q2WLxscFurJywZaf1yRMRZp9b%2BGbs8%2FOwkJLYKtYm5tJgyzoESmcGr9uW%2F0R%2FpH0Ep4u2ddshticvvl8QxoPivcKf4skdi6ZaHNwhwvS8%2BVP%2Bz%2BkpvDCtrhhWv%2BEP109PLuC&X-Amz-Signature=64e444a9d429c02722536753b4e810dce8235ab6908ac1c664efdf3be0515e47&X-Amz-SignedHeaders=host&x-id=GetObject)

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
