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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHRUJTFG%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZ2BQRMsdJ3A6u%2FjqCNd38NGVBAmbwpdu6jaeOuozS%2FAiEA8pBgZ%2FXbCl2XUFhd6BLrP%2BkV7JQTJxl1bmGVsqe%2B%2Fw0qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7yQf0PfLLSUXetYircA9yt7xwZzueo61uL311St0F2OBtHA2uKspVYYVigLQcd8yFlkVbpH7hmG3u1lf%2Bu7RyDXpOrgF9ZBCMOImBKOG5Tcz%2BCDtuShuewf16hRWHOG2EVQpXiRbW9Q81yhL5FOpX7tPSZR8ud6bC60N2WqHFi%2F57yst%2B1kjE%2F4NVEzLXQ%2BA2nkBWrlBryld5CvF2QFXVWvEC3Bdx9kMRx%2FCfpPTaJINoUgKGQb%2BeCkj%2BFjcekIf2O%2FVYV6GtV4RaeLPKbGqJZPtWDOgJEjWuYoRk6cGoBHdZaFp7vjuuJT5zGcUvuS%2BABle8WumWKViacctEIPfdEjEN9VXyrfm9gZSzqxF2rbLDxAYHJLx7bSOtKFAYFJUwogNVmE%2Be7hzM3X6JISzV44aIyudbZfjUUobe%2FHnhddMMxiPHUV%2BNkcxqHsEeUhoM1TJEDPD53m3oBEUBHJVmZ6sR6iRN5YUzem%2F2UvQmrRM%2FW0vmHR5WIO%2BJvDKCQtq2MzZR7QhRsagsEQI7xJ64MXiVxPlApmMxeeJr7UnnOu%2F4QMxV3QoUo%2FZs%2FjJNC1XW1TtwyaxquFtVTap6pTg9C2U5l5LGLz8ozv%2BP1mOJn9lWO3HgENv1UJpR8pVBiuwIwlRm8Mcc%2B1holMKXYzMMGOqUB%2B7G%2B2Qg0o2%2BVSoC4gPeqIvg9NK%2B5M41mGdNiffQOeZyetugA%2BPnbYgWzhyrAbWcF1pzSTu69Sn%2F6TIQig4IS4%2Ba%2Fx7l%2BtBOj08p9Kqhoea4%2B0J9fOdtPm3L9YSV0Bmzzjmipup36bubn2wFjO8d%2Bgo6gyJOuz4g7ugp4cb5s%2FS9WUCygNAqhHSUoeeE9j51iIG6Pu6Tfao2ofRCwciNbZkUFI7LL&X-Amz-Signature=c6d8cd474459ef8e0b9616536aee78edabe2103eafa5d1d169196845603cc1ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
