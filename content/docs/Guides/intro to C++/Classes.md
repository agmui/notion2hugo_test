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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNDMDIJX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9TfdIWi%2Fw8nAtXnxjdIsjzqXBQRQn1MyJp8CBryc7yAIgacHYrG%2FJz7XjPwFQOdrmOeHihJQPnwaYyxo3cyOtCR4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNKNyQZ92pKTFTdPircAy64xOs3VBlPuslso6ThP490oLCyFx1rqtVsuNonpAIOval0ImBcXUcAOozoXVBSuE5amzNkoq28yV5PBtMJ%2Biuqa4c1WVhpEvfSzIDys4aUFGP6Iod7oAkW6xmHcpKnZjO%2FNmG8bDprsEdkTRQrJnkFIZvAPTP2XA1sQ20eA663ZK%2FmkaMWCfdU%2F%2FOU4FgRq3LGuKnXuJ3eT3gj0NMmN0VfP6ovzBg84HXptLAVW4%2BTpTFD4tG3xmvks8z2DbYedCp1u11By%2BzgutrfWn%2Fh5QgISWYvnedCUa64Pb%2BEDiFRRJrP%2Fe8%2FSgcLAmQ5nIfRUWJO%2FzjyphJaqUoKjqWK9v0PU4nTPz4Etp1iaUUmFPkYfHY0BZVbWY0vITVtS%2BhEhmRVpzqVCnJENkWyTTwXf%2BVU%2F9myzWJTGMpNtasNFBo2cthutomVXpUybLdax%2BGba7Kgednmv1pOWAXhBaR1SjHKZxW%2BZ%2FQgOcV%2FeK9wldLgJYED6KK%2Bg0Qkc21v18AzAhoae0XDA17vdHbuslOVZrx%2FzXArLH4V1%2FNZ4MNakp5NGzukNJV9a6LpdDeZOV3C9A2RXiyLARkJ1%2BMuUi%2F%2FoNnmNYfncLHdeAPzIFJ9ahTmwinyaJHZpVMifbBBMJe%2F4sQGOqUBrAmwQWjMpIjEVmw0VIUB%2Bfax763cqCn85y6avGJyTTCSA9%2BDah42Dqsgpngv7ftW66w1g2AmkJgyOYtFH4IjCFj8PdwvKJKN8TRRaE6KlDTMbcGHWBuUjL2Mf%2BJ3ZNaufPpLUpCiU%2FWRCI7oyyiTkdKjlP0pYewxVSoYoETRWbr7%2Ff268uzSl65XZmWzQ789xm1gmgzxkxMEgVCeLYCv%2BDsE4rUX&X-Amz-Signature=c2a687965f6ace7d76baa15d43292c660277f302298f09f5e3066d20b6db8603&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
