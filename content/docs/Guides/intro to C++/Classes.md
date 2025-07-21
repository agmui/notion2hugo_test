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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647C6OB3D%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1feHa%2FAi%2ByGzHZnWz1SkP4wDez5umlBKwNqvS5U6gmAiEA%2BchoC5tSg%2Bqf1h%2Bbl5LkVfdp8JcN8fElMLoRzdHZFHgqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCxEi1cji4QWA%2B5uCrcAz8rBDLvaGp0CgxZ1QCGA2FrB%2FXtNZS5ioDN270gu9KKBC6Xoi2ssWH6P%2BZQ%2FE3Rcqy9oJlhmrjqAJByq9IBvpb0Jdgmd%2BVnfN%2FoFoMwvOlB6d%2BuenFlmKSeMuxbuIsrEhjbWk6mxOxBgbpT4P6lURsXF2SmUrU2cf0CkLIVNOqdWvF4E7fGDeNcYJLuYuxlUiw11Ymq023AKoMxacKyOLXkcyilHpM9y1yHg1RzWJvyDQeJejG1b4T7Blt%2F%2BIZEpxfPPLOwsDbd7yoO%2BttlMpMLf9jSUiXAy3UM2PbCWzcRSJD2y6QlH8e363YinpzOTEr53evWJ6YiLAAe5CcichmSo%2FNAcX9TSwObsW8bD3Gk%2FuW6XPQ7udqacjQFH%2F81Qzj4EjI4to1cZuQ%2BUE1qe55PqvCtNSDOX8d4Y96H31%2FL2rT%2BXivShBOBVTHy%2FlvmFqMnp8y0wksMPyLe98N6zEWJIG%2BckP8e7nJZ964QRvW%2BBW%2FNRta2eWRRAzzou1ByQ63ZuDHkHAoZ%2B2pjV63hZCTXfkMjpj%2Fsqf5JRSIcxZuG0qo6ewfsgqVObtnae8I6T3I34DNSWF1lY6lEOIWqWLG64viXHLUpmxB2hO3B3Znc8s32uuSqfhbqNGd1MJ%2BT98MGOqUBTzXfk4mh21yOvCAPhrCNvkJYKnF0r42qQtbz%2FcMXQTzjNZVvE5oQbS6A%2BJ%2FGnSF5OAx8GbztYtWCxDOspc9vH2ll2QSC7k%2Fs5A6LK2PHCjeWXLt5Rr%2F9ZhZVT2ZNabUCNSscRCv%2FJGyqwPXAWpXdOB9er2ZNilYeTfTbWC7U8q8OW%2FPQeHpNKPjQJQ61NkuRGnBsvSmusSrUXF2QL97U8x8SBeoM&X-Amz-Signature=42c24ce325a302f3fc826f41ba51ec231b3271b09b55248c3fc3b49f89b0b074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
