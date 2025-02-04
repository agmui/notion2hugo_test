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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6RDMZTJ%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICYTihRCs8%2BO56ec6M5buZ0qUGO2Wmg2Ogh%2FS9KoqoFGAiEAwGnTCeYuoeKBK09iHCL2UHOiWOAhM0DL2a2I5RGSc0Eq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCAuREn%2Fz3axOTO0SyrcAzmtw0seUQD1GoXg5%2FmqgQo%2BiDCzWjpQNSmH9mg8LBFUeOm%2FYNWXFgUqBW86%2FGD7jqeBR%2FDYg72pOouRbijZxSI%2BjJmgysVhzqAwIR2LIdc1b2ZMCSkMP%2BTgV3pg%2F1DT2RG9F%2BNWobowt8550207oFuFem7Sey%2BiydYoRx44eqsA%2BFLtKGqzj5rnYO8Ho9ZjA4VdYPE5pqWC%2BnfksRZeCgcKROZnxlftzkebLCFFzWAied89RMzKAhoN4l0n7tXvY5fPMwiOLXfJfoFpUyUe13lKQ2oJKmb0jduO5r7bmXSYSJCAqrGxEmG92x%2FPwKBr%2FMd%2FEwGGIWcwvpIBGwaQNA%2FCmisu3v1RR%2Bwwz5lu2WbubTxQxnfTnuQqrHUuJcAscyVGJMdDqEXQ4AwPN2EZCLi3KWb44uNdrRW%2FjnuVu6r75qjPgpet6ncnv9xb0SLw1SeqFGHE9dimZLDPF%2BzhaobFHIuN59MW9zVmZcEHoaBgNRgOKtdv11tTNfVOwtrFkEaB6BYcI0n4XFGTZ%2FQYhlAzSKI0%2FOCubsqO2h%2BzKMWSKbATd8Btmgs6tqPbMhngw%2F8ajKJsT5ofevNHSkBmykJuimZSM%2BeMt1u6JdHvbRIqQn2H5vuOMREYtxoWMLG%2Bib0GOqUBZDnNGHqdpMdjas8kGNoYUf0%2BunLoVQaO5KuP3%2FsUWW4bwMlg4Ki3wsDZgm6qgPI6jiWwmZLJHyCu7CYisHVxIMsQjqlA1rfGP1SyJGZLm6Sg0G5wcy5jmATpt6hTYOL2jnpv1ooYuXhuti3%2BhrNZOZI8wM%2FVN19Z5MVJTTdaoQ%2FyGtmr03P2nylziDzwhnXcLnH61%2BeaA1blkUfAlmirqOhlGdVg&X-Amz-Signature=cdabbefa9f798a15eafd29317cbf3efd6979a8ddaadb9476534f12be6c425217&X-Amz-SignedHeaders=host&x-id=GetObject)

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
