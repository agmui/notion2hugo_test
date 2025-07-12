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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SWBFCC2%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHTxqaGraYG3oSaXjro3zQBIV7Jz4%2BuDJPrpCcB%2F6GZgIhAJMobZunB5Fe7omQ6Daw9VAK42VlzkmmY6FnoLoiUWRrKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1x9ic5LDr%2BrgcTDIq3AOtlRwJSydmavtGAHwMMHAq7GnNaUdBTpJOiTxp%2FqNWPtAAdsWXDQKnbJhDII1EBDAQhlElb7a7kyF4IerMrbonP6KXm6wqrJF5cs789EEwu%2FcKOmKq880jkaPx81DMHD1pnzViUPiWRCN7L6cnI%2BJeMi3bsYstH93ufVMRKs9kfy%2BdiAVml6cs%2FMPf6BWPd7ncs7fgoo8GTi0V2IvxUTVabygB15iY9%2BcDl3wDXLWS27%2FBQD8GDAnCDDdVl90gG1H6Bw0ybzsTYNfNitKSbc32N%2F2ySDhB5WEh1H%2BfEJJ%2FSGSGeJHCdvPoxR6FGT21T4Ct5F6Vj2Eo9LmkCZaNTCu6GcenalGhxniVBDWvEQBnd4kQPKOqJz4OvTozMv4dvBugALH51veCEqEyLA3Nwsz5J8Csh0qqzVGV111HfQErQtEduMWkjTKGUaMmBip6W2xJafewZ3%2BV%2F9UJFe1nQJ8zP1gUFPSBStB1FfEUT0al5%2FRNP7bMKJ8jKHh5xydQmy0Fnbcj5%2BHg9%2FtvfkWyYj%2FzT2U9LHR%2FPchaEuOydFJBzyWWoAoB%2F2jf5IGGyl%2BNiKLY71Is1IDBmId2DBYQNOc5%2FKRWA6F1SdPrgIqsgiy7vBBkgpjuNsecrBgDuDDUtcbDBjqkAcrbuvT8GSRSUbBV4I7MbiUMWlluBLk8mxmSaNoMD0%2Bc%2BAdhn4%2BQLKDP7x1o0gTRH1kqjykpYzRJptwd2M6jkNgorzP%2B0KZfTantP4O0pyxkK9RHG4tpL%2Fzr89fZomTkn0%2FKUWzXHuQb%2BS1DYA5ths%2FPW3FvURf2VSx0gSUzHHoyf%2BNOo4vwOzunSX9uhKtpGPGsgNEbH0LNbH71uBkV1yPeHZv8&X-Amz-Signature=bed7fa3519c972d3220f26fb2619173649a44e09960aed5f61ec7307b2068417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
