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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVGQ5FMZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIEflzeMt5ARjbrrsel%2BWw9Tsy%2F3ifyPqTLwXqyBmGH1UAiEA6BA1Oiwq7MUQdXL%2B4XvotB6qr0lutzqTfKHXY8rZ6gIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLtlkljnp%2BleQufu1SrcA%2F6vsgmlkYisBigZjoFDpJhwE3vPbqrvA7A%2BS4ZksS0PyKjr7nMvAeq0E5n98WwYIj8tJKkKEotE%2BM0xBYU8sccMAnDX4NnmLTb51qjINib4sJ4Z0NE%2F7NrL7kfQmzn8%2FM6%2F7UtJ%2BAaroYBorBrSwAoeoheJA56R%2BTDMM8QW3w0ejExfmMwS1tkbA2oTL77kkBoqsi0TwZhBO2hkMJdxmFZAPDCaIo3WC03ev9O%2BY3IrdoNEY4JLCp%2Fc9kAcdQiZpuq%2BuT6UCXWSFoF9vWIcHmNbgqM%2BH0zjHibGZ22IYtkWTp6r988xPnD%2BJVjJ%2FdBmPi0uVXMBOAq%2FKavajp48rNZXwh1F8p0g1IJ5S9m0k1CKG7vAeNCHEKBIrfp1ItEnLY0F8m7BkoFRgnjhCi2NCWnVm50fVz3xnrWm11zVNNmE8O3DuDQjlwmNGgdZGZ%2BQSy6R%2F%2B4nsYa3W1F%2BCasZ4HUKUefN57ITmg02JdJiS3neDjOKpKQ%2FgRcIeQ%2F3%2BdAGP08LmwclV7jZAjsnDuZQOQXJpXYz4BY8%2FX56ITt2Yr0G9UkGou7P75AZUDQDPICDdWop%2BRxjftXFAzBK5%2BgbnHwZSrLSSOMW%2F1QI88yw6toUoqNsTlY9HPf%2BxJR3MN2qj8QGOqUB%2Bm89jOPyaeU42IlmcCE3Mq3Cytn4iut6H%2By06TPln2AbGC4aExfcKwtsWDJ6h9SZ%2FI0myia%2FWdP62ZlCVbBmmrMJBguKW7eGWgdxdct0aMz2c8oK5cn1CXB%2FVqScN3zJKtstJHRZyszqQxrvQoNJ7FgCKhuYzYmScvXi1AgUuE3wX8ZDpQ8jiWTrWlsE3ZNyXwczd%2FNrr0XoFdvNH8kSU2jkJ8Wp&X-Amz-Signature=7bed2420bc65220c7c6e06640137dfaae5d5703d30045b1f3771ddcbe4ce4462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
