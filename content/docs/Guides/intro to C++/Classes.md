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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN3P5YXX%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID67RhXkdDRG%2FOKMNPlMXjDn6semOWg0JSLcDJpZfrNjAiEAr4x631k37a5BSRYw%2BKnIhUBZFmtIDsbfjVRCOI11dFcq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDD2riUu4xxz7%2FGPkLyrcAzoEpeTtK%2BPmM5nNF3yX0Hk0XiybA8wcXxE%2FO5Rp%2BSbjolzrVluCq2WrM4yRBGBTsh5VlwF09SRvHScd15M2wIWXs9AwFtdz3ib1lUjvu139KW%2FBD8pq9oHM6hsjyPKuEmfZSRONfhveJK1TTaHjuORdkYGD78dvcE2RZ7eudUiyC5utaA4FvN%2F8TMbTs8vxrr%2BzvkTZ1djDgUbO92QgIgJ35eVsoCqhyIiqN2iYCYoAq8W3iT4011RCdKbMT0qWJY%2FzUaKHXKIX%2FiAuiLB%2BKz4bo95SNyJS69yAtKh3ESBp86ovD6YbPX4TZlVgeaiinQTO328%2FzyNoILtN%2BSuquRYmXQVmOlFGSx2rZ7atrvckd%2B%2BWJon2kztCB3HHObrwbrnI%2BXRbb%2BhEYB9i38ab%2FfXYfxCJIs540liFGgnPIr1ApfgQS7rZeijSRlUybTdIRbySJP9O8oTkGSfr4FBKsi8ReIbaUEv1B%2BTFy2fqC0bk6DS000Ro9JqIQBjCfq5WXAs5WyGMNxCsPl2lU9%2B%2FlHJUGYqkkB9j00qAkm0Jxvw2vwjHF4tHMf5BeKc%2FJVwBBAiwIRB3i1ZOIx2d5s%2FaAv5qaXvLKFVl5W3%2Fcdn83V%2B8yynLSCIGQW5%2BU%2BBOMNGx7MAGOqUBcCtL%2BrKTnbl8j2G4vEfq3PNOSiwA9inMJaKLtazz2aErVxCeJA3MWLwWU2HwewhYY1sM5MxF388xCRn%2FuhDC92Pan7Pma9Tv6CZ3MWCOBBKGx85GYSZy94pH78MPMkdwzTPxrabj9BO7nzfsAKnIjqDg6MZbZXwZm55VY6TcVte7VvG%2BEfdZMzC20XCO3aV2FYmBKAN13lqSpFEuCHxuZGvOdbhv&X-Amz-Signature=1c90a62d8e72a19b7b0ebb117588e3b148a2b709d7b9377055724cf129721104&X-Amz-SignedHeaders=host&x-id=GetObject)

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
