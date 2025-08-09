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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JQOP2PW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7BRVDqrmtdFLLyK3fAIXPo22amagjceoKtLTS1SIjYAiEAgZhKKvqcj6ab1ttRDjXQkFKCr48jjR8UlyVRDLOQejAqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpdD5wmeqW2gkDYZyrcA8yC0Lyb7mFQ48t76GBvKdgibxJfEM4vuvCGBEmMLPXODIi%2FxPLIzPMYfslQ1f8WIgSHbgslx5m9QsbidruvaWjC%2Fx67S2zgUq1wPdOAcpcXs2hvCZpsbo8ODp5bKmRRR81UYdBFZzHTYmEHLAofm1VBxxarqoh8oEZwKAJHJXwmKbSeeM0vojM9SQGXj5TejrcZCI1CF9pCjWSfbpUDbet9%2Fg0OwCn43B%2F1H9iq1bmHXJjQI9bNc01sajlUrDJ2tJAvpK2h1htEdb6KgqVr9tNYETvVGHm0BGMWDHnjy1yRcEBg4MBeHt%2BMlp71wRRxmpicNPCaM7XqniaiVcWyDSWeUXpiaPSn%2Fg05KsppOHlLj48HpLTFqLjL6tpC3o6ObUnhWTnPamP9uYJNABBh%2FiTdz5ucokUI28%2BfCMJoNdR0jT%2BQyTI0VArlG9snaDL2917UYGl3o0ospSBpyUaItWFzDaK2LfJLfcg4kbyipdwkOSk%2BNuzUF94cFW0OxDKexbGQbTbU1S1AtC1Dcp3XevPoqn8WPJBJYnn23XeK71kWEMPDOl%2Fn3h6x9Bse5t0QvDUp5SRcmt44SBS85%2FaP5Nrs5i2QCi0z1Y78BaLO3%2B9DVQ1LqqNzOGbdW62MMKWU3sQGOqUB%2BGGmcz73GwA2FNBSveEz0YCtNqTKnWqL8g4r%2FkAD0%2FX4uwEPdILY3Ll1phpjjByZeejxMOSzQpgnsH4OveH47wdTv6Ith2hvW6Bvp5nTzldtWivG8dGA5r7ystiXhsTb7w7z2cjbIHJfqN5KcmlJeZwWsXs4PZuBynmjX%2FOoaC34lSt6H8OhMTZn2q%2FlQpk5jiRw7ux5H%2FsGOUEy%2BZDRMIc19z82&X-Amz-Signature=fb62fd4fe0e872967157cc668dbac1e4f2f0f915d9b3ff29155bb54b5c5d5be0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
