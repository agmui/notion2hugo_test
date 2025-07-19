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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCSKFOVT%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAV67ACturkKp5cMnqLjcw9oZiRbW0ML4FZVRuKlnZ3DAiAPRLHXQZV%2FVaSTJkIgCdMxJdssIgl0KCfK3R5NoAO2eCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoF70Epm6zOZ%2BSkC3KtwDpmew8nD%2BznY3WbU9uzZrqaXTL07n4FdVJdgCwPhBspZhA8LKwihubHaWsqxruULFAhXhNtY%2BSvj8u9THh7%2BCsKQhgYwGotbHKJSjkSsMNTxK%2BtHiU9TUGCQvuRrq2RvSxAsOZjRSXZ%2B4k5BJcgIOvwAKHRZDnnpwGeCBfyMOk3GIPq%2B9HGDMGoMwwP8%2FjhB3W4vNjOkepvVhRSyUMP6V95RUFJvGzuZow9ydWhn7I%2F37YI5fFLjBp6pNk3cEVXF89v9FNFid7nekSFsUoEeUTjOAzDHe%2Bm5MhGaclEJRm2dcLvg08Fwl6kgZGy5jJraOB2Hpuggbaia4viIewNvld1Gtk8LtZVeBUmo4kAv6y8iAzXL1fekLaoniwSCPCpdHBKiAv8GUjbMTGcaLp9nN4ixj3%2Bv7dsPdyiRXOPp74XEldX%2FegAjVmwTWtxNXuIKoWiTRb%2BZwqlYwUTlpsZhfNZ2wCfZBLaEF3uktZ%2B5eDtL2dejGl%2Fp%2BosNRJ8tmSrE50zmB8j5gc5bSofF0VVdnsSkdSncF0ikYQVg%2FI2d6PHcqvDDZa7u6IaeYyBPImGHR0ymzU59kkbVNYvcDIXGAz3lfgLwuVLCYewsbnFk%2BVidM3IO1xYyflT7uiJUw7sXswwY6pgEK8GeQUEwkHI0Z7gaWfMAGDshC99%2BdLanI29y0srIeUTSLJvzHD5Mbra2%2BX941WBI3HPZ3myWmI4uhhVfRdmCphLC5ouZ7HHc%2B3GQc0Pmsb11yE7QiNvdp2wVArZRTpxlsxYsTWupQ2FuQBpMcJ7adnMj1X1Wi9LkrZVzFZhe91dxZO1DfhPvTaVOh%2BH7aWhZPiKzPUR2WOv1kvmnNIaZVlHdua1J5&X-Amz-Signature=354c0ac6dcf8312c25a4cef598cd148ad0019bce66ac87a0ed6820790e4e4348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
