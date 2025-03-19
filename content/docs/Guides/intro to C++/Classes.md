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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7AENC4F%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC32ZZiuqIxaMAXjBInVXS4BQyZrW3BUbcjfwyT1sLbBwIgCgbeEDpErc%2B%2BfqPxakrTHGBjiwdZXwVQCTeexwhZ1x0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDD5sK143pLoVjbyadyrcA8BlROabRDNxWl%2Fm%2BlVIDPubZBrbxDVQTfU30pubs1DxQpo%2B6UZxGUY9nqTHS2elNOzsdEUVNAht0c96sQ4ZcTGeHVyqiGM7%2Fldk3eo6evEaPyLGjFLTI8YDnpP%2F3iygp65ucgaxWEP1xDFMhanb1PZnFfu8AfZzqrgsQjnaxelbav1nRKVodmWW5eG%2BSSRRncmcaEZRkOk4tNo%2Fvu%2FCAN93H1pQ5GZ9T6hVNBTR0BAXAzWab%2Bh2DapWDuzYf6IoSTBk9POBA2nd%2BC%2BsFbrTgXS70v3prswfoBq%2FgBYUM0uIT3Jg08nARpp0D6sFtMvY3D2Fn%2B8GfJGavIzVFO80crlomxd%2FgpaaGWILoONr4%2BMoVRAcujyoxRXvZgUQsWaV6xD462mVrYY1%2F619XPaah%2Bgzf6C0KIXQsFxhUaMGM8%2Bd5Ppyf4FYVaQW0QR%2BsEe7z7Aq%2F7hjIOesvNsxe6bZFTw0GvDbFj7zf7zy7t0effUhIfNMGnzYeo4Sc4E7HH3Qcvy3n95jM4oKMBU0oOlNT4XivW1aLW9za6aRNsMhljTqzZIr48ttso36h7dhbQ1u8SjVycEawq5w9jCWJuH8x8hd78v0zmJgTPI5pwFofLQsGrJf0MkgKdgELiqsMMnd6L4GOqUB2QUUsX4AXMleUzmdgEHQX89cw%2Br5sZ6AlIJ4GNVWfMR4rPR1KCTxbiIJEZYtfTaff3ktTpohsjdnK1KBJvg5GcI1CcEFC5zJmLyCcIn0qhlM3NeGznsZmizf0F65T7Oh8unKzv0OQX6H44iND1qIcG3qKqSSD%2BoU5aZjWUN6T7lScD%2BG4NuqTJXeiyw%2BGokjJ0tTSVsyK3sX5v5Wc0AM2%2FxYfeD7&X-Amz-Signature=fe9ab7281f25c1a2ce53c426c80acb36175cc1317c4023fe0268a7f452183c99&X-Amz-SignedHeaders=host&x-id=GetObject)

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
