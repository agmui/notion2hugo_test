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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFSBFKHU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEE7kzOy0qTlBw8g3dZmhI6qkXdfyMf7mpAliN23m3LaAiAnFsqAhmW6p6oMnHUGGfIlXGFms%2BPT467PoMWqqLjuWyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMve17HkXdRGstuwGKKtwDWN%2FWSCH1W6E0hQUm8MQGPsk1ejYwC5m%2FpC7KNscZ5OxRm%2FxtFTsVTg2ilbHaqTINepSTUergZ96O%2B4Bjzpc0mKPOm2osvD49dhMpw6G5h3Ccxd%2FssAAowSBwlMd12sTJACFh9vK2kwXF7m77tie8X%2FrNfcn8E3whyhu5Nq9%2BiM6WWQt%2FxZZHjfmbhkbDqDstGrfqaK9B1TSRc%2FQYOW1oO%2BbbL49L6hfQ%2BpDBP1qd3r%2FndonzsUvwnuF%2BE7CuUrTJ44k%2Bjon8CYd0%2BXspDbjHoIu2Y5p22SxHgodlOBEyw6ldruZ94Y6N6lGFbt5tCUOyjAsG6YYuStEoh7bxwZoePL1wFu2GrOaZhUXcLeVAUHH9rTDI9I3EktYh4h5LwgxT9MHIiDH0%2FNd9FINRpVo%2For8%2BJ7MvH%2B5kev9MaFz8ruvd36X3J4i9NdtVYVWUO0KnaAB0TeCjdrICjf1ZgZrrmP5tXcAIhFTDXBkxXaJEbyV16Gls83A2iHzxZiqxsOIsmHk1p0%2B1BtWrToqeeJPtDB%2B7VGPyc1fBWVdCkWpDL4gmL1FKaEct0pfqb3rczvjQ2BmJirGM3sqbBQR1iDVvPMtAICxSq1Lv4rhQ6Qr00UVNTObMlfkFXXDq7jgw%2F7juwwY6pgH3a188R6oJKTd7t1Rb%2BiVg4NjuGi51g55ETPKvyV8O2I5DkAZdrdGnSx3khKBbSotkRTdZ%2BXkF%2FKqfIF7NHF0b99OJ6YSLuu3VzNzEpWD6qLSe8FR%2FKA2NJ%2BbxvvUcssU9GvEUYIknQsCKtpOqDq2LaOGxijJd6wiDUFeIW3%2BfEfcj2Zym4BeFbrirVXG%2BXSKjr3xR5dslrq1qzx47PTFgBjR9%2BRJp&X-Amz-Signature=97002bbe7d531e5c14ac80e61b2a2abf64b9d82ea691748e25f74cbd42dcef49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
