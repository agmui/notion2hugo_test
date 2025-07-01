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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCYHRMR2%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTqnMp0hFDlzz%2F3XHi3JnKKPCRJL%2FaIOC4ujdWcfFNzQIgYr0FvAK8EKdZMiOxlFu%2B%2BvIyN5n5wOrz%2Bmkmfs5DOJ0qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIdoT4uopJ889l7FircA5HqRYkJYCe2gfRipfZuXvw1gjEMZ7kOZp813LMGvUDeJ2ee9OA%2B6HZAqmxw3YH%2B%2B1E68r%2Fo1fXYOqZQiTP6I2Z5ghDTJan7C%2BEeXE2hJaC7ugMdU4%2BBpS0ra%2FRS92T5y8p5uZqt%2FEykyrUOQfVvPh1ILE8STnCgpLZkmnNU3W0AkBPTn5l12HKw%2F82PvEXAQwpNVDGk3Y5sBNBYpVp5%2FInJEAGV3YqdWpWzEYX6OfsHS9iGm%2Bv9276cG1R6%2Bz0agpQbrfiR8DDnliHJY8Bpxwpf3IT5E1dxNYYx0U0MyK%2Ftwt0cpLEdwXI9lVKbro4YatY6EItDPaOLByZphUJAE%2F8V1K7%2Fb1ttFdpqj0nmHqgeHXLRSzziBeBA9eauzad6Y0DNAzLKqpV9%2Bg8Kv3o5LTxyk9aCIcy5KP0jNd%2BScg%2FFCTnP2n%2Bw5mZAtlquUOWhLLzUjXxwGRubQUs6%2Bds58AWI0ocaQYkz5ZbCqxgrrshdKidTvaXXLom6EupTf7ceP7QMtjDudGRKuNziKbKihDSU931LvK3Z1hMzuw7RmrAaEvc67jHW5S%2FCXeMl%2BRCvp%2Fw0yOjoekpkLjv9MK7H0gFiEpcHqqwPXvXYNaLQNXFrI6VbNfXpLUjYGAuZMLaHkMMGOqUBw%2FqQEz%2FFW3msRaj0gm9SPXO1g9rP2y%2B1ynVMa4uzd1MXYIJ3RSoMkrcjBbNchb80i4jR832UJc1z%2B1wf955ps4he9p2d0qlDJpJzq8OOOKNW4fBT7HDOCfBRf%2Bo%2BvUr%2F2p%2F1Gp%2BeSRbELiz2C%2Bxa8%2BunkoTB5QBDnpwryxYV3eUxo3PlZBa6cZPlnvFuc%2Be%2Fo6%2BBU0PIlr2EvXncUrTiRAGdXB4W&X-Amz-Signature=369dbd3ba4ebe0727d33bdf45e31db64b487b0b93457fb228877485a1c872b49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
