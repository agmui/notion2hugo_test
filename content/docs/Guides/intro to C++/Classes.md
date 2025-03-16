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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GYBHJXP%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgqAuxVBfitywkEVow9EqkQlI6VtiazPJ1M2saH3ni1wIhAJbgsxFk8RZNhDTS7E1CC1hxo2s0OtuLZi9EqUmcI8JfKv8DCDQQABoMNjM3NDIzMTgzODA1Igzdw%2F3DyvkEtSlKZt0q3ANdQxYoeUvlBXsThfbu%2Fbm7EmM%2FdyGJkuAlXlWX6hDQhxFOxa%2BQ7qXPPzcePAUZSD52uO4LViU5TiI955%2FWr8S9E388loYHL7WZC9%2FGsgKTDJsniT47Vcf6KQacz%2BrRg06wzqQjCVT9x6vgpD7UtaGA4OqZjodLgCLoDz%2FkaCDELVkVShEP8OhusymDb0AZsyO8K6I8n6uNev9cFUve8xAFZgDLmLDfqgVdhc4j25B2CSvK3wStSX9dkS4R6O6bLCccXduwKU4mtBb2JJWB2DMPbBWt%2BAIAjk0svjNEsAxovrSKs%2BNEfD2SDlAZBgIerobsEbKqu97mr5i9%2BTLSpG7KTJ9NzVAo4vuNOmmrKaKBFd6n463IRPVGQbdlXPieEzHiX0vfHZ8Yi6mJTAtaM65TjZq4coGpTIpakt6p0BZqZ9UgGOM3fPpRa%2FzQOwTn3h7K%2Bg7bhM3EyvkTAPrjHQWkDOTs7ofIbvwa9xi6XGOp5TFBBV4WGzYGCkWJwew6kwd3v4kR4HOtcmHDmnEqpaDHHn35D2lOK2CUvXnNMwe9bTt1OlgwoNZrADlzKw47iQONPkiLFI5iipLWuzEZtuZ5O3cF5wd48j5sDTjp7IFCWGj797Na%2FYd8YnChbzDvvdy%2BBjqkAbHU3GsodDcy7txy4ryP%2BEOq1w2bRWJeM2%2BIradyz%2F3U8qdo9IhVE%2B7FNXV03ySOoU4gJf%2FxpjA9ALypw%2Fp1HF1KOJN%2B8qPJVxGXwu3ZtewxZJOS0KbCdcuWawADmdUvi7Kq%2B1ckpVqYSza898Th7e6o1fTfwhbnMjf12moVO1FQUWdsR4WcR1jNVTPhxhGR%2FGI6eBQcm6%2B6VAYW9yIOu0AR7cU%2F&X-Amz-Signature=81f63615b1472fe50c494b9e4bc18da659914133a3724549e056cf66e359301f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
