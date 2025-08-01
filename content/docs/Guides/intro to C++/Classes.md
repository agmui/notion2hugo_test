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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466465KYVUP%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5jR%2B8OfSLhfOqdulD2li6Aa66qlF95uAwIieMKLUsJAIhALTsvCLVFxq0wJA1rCiV3L2hqm6e5v%2BMuYGlZrhRoX88KogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FpbaOHKY62C7B5y8q3AMVTyiSddJOqfKIwscQI0Xldk7efFy8Yl3RWZ4lPPVPk%2B24lG525fuOgb2AfRdNJmLFFjRNVFv%2FlqcZc4mqAcQDvvA6lHJLwuBQ8BnlM7IqHwmrzksc7J0qUCXKmMNPBZPXm8fYtIN8bEKCLIua8QZYQpGsj1PXImDgPySh%2FEKpM01Qcmk7%2B0sXr9e7OfLKu8zJmHlX8dr33jKCxJqub5cJXXEQ6YLymoyj37qpDXoEnlpPG3jwqW29Mr45xtehK%2FLPBnDt%2BdLLDcsEbNrlVMzBc3c7OnDi3RBjSYMow4HNFBba8JpDaxWGAVZVoBUPZwJuDSkCSCPH6tn2DN3WjlocbB8RAMcDrJGPufgzH26D2GCOTN2MI4Ag3aIXWPehpfmmJFDcWgZItP8TPspGWTTLD9VoIcny7IWvIGLZU44EmQVzZcBASiNHUk3kaZYzf5fPC6i5MtO1zv8j5cqCCr6Aocm42RNp8F6fmmmtsD9T8hIVNzheuLYsUuzfn0Ezv3Ba8YLWbKrDLpnZKyNneNBMKR4Tx%2Fj%2FfKBv2Jkgz8IqAaxjpHfSC3ekWfGq7wH8cnVaOewjXnjO08ULE9I3o1hpKW0%2F6PDPVw%2By8Yslu%2FQdhNeDwk4Alj92RINCXjDA%2BrPEBjqkAcZYnqBGrLRqKbvPg4CVIuI0ogff2CD8lJACRyvCBqyNbkPZdM5TLV0%2BG0p9g05%2B62mBCUWPz1yFnFJ%2Bt31VG24QHm9%2B1x0vZcR0JcweN0WXOj0Xu7OkbcLbdLXf7IUk%2BixaWZ5aemwwfi7MPzqyE7oTMS40cbSFaLtsle3Gg7hYLnAIbBiWvnhhIIpTqEMyvCR6LxEubgbiCeZcVLl5Vv9Ffe8H&X-Amz-Signature=9cd329ddaceffa22a6f045d993c82c4154e6b6af62c4cb3aa0578f5838d4ac8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
