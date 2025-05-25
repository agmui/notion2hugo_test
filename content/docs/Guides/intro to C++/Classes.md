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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W2QGXWV%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIH0IjzRpW1KlZC%2FpJPl%2BvZw1lBWwi8qAvIPT%2FBDY0%2F3dAiEArO8xcKEiSAyfYG75bUlm%2BO%2FfAHihs%2BBccng7%2BlWH12wq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPl3FqnT89cci4NCRSrcA4Js%2BnFFcPRw%2B6EQ%2FsowGxWtGMIeILV4ihqe0giWa9DGTIdWGqImgDKi%2F3PHzXK8HsHRurbC7WiRAD%2B64UBEe1VdyieLEsWOivF6HDVeZEgwWQgTTuQuNz3exXszjfrZ%2F0otoUG6z16VSn%2FeWJfE1cx0%2FKZ2sErxLdbY4culFqaY1YDKtzbyriRRGAF4pC4MFqexrsLvGkMxMuPYEz8uSJ%2Fg6yU2liHbELGthBxKMC7pZfTXI3UwKSNlygf%2BWR50JwaPwo0qARMCvdUlvN%2BH1O6y68%2Fdr4Ac8sH%2BZGtPjvA4l2Dkqum18sEsfRx%2F4qO%2F7SSDFLUm1nV2J2ov9IYzz011LQWTPKSAohnymYlHDjnMb70tRE2pXy2lDmEACoRySAZW23b%2FQQiwim8Zzq%2FJLn2xBFbNLacjELWMq9XUDWKGOtlmGZaxZa%2BNm2gwJFzu1lozFNf7kVLjBLwUWW7jQorXePIaeGQY9HitXFb8DaKK3bT4Nhx4DHjQ%2FoKHnQAO96T9oQ4N2asT7%2BC6oYz%2BoZsJ2gwz%2Fqs%2BiGSZYPRpvKR87GUXektFE1dwqamMjRgG3oMqlwAK4%2FWz%2F7fCx6LZEE0YHlfR6qbdQpZVBrBdV4O4ZG7HCQDrLRqS7s75MImYysEGOqUB6OxeQJhP14CO%2BzMQHXZwl%2FzPI349L6n2siivkKQOsZz7%2FNFCa46oAbSI3y%2FimRDu8JF09ZZd1kIN%2BM3s%2BoNyemIumjncO9s0QqGUjjJ43gvT73CvnMPC9tidhr0O4klh1ff2g29xpIHIdhIPxLVYQzxh2tfMnqkU7h3uKBSug4d%2FqG0h2m3XBKINrsCz8wzAu5%2BrrCT4dstsHjA9ghiNPf8dZIp4&X-Amz-Signature=7ed05f98c9170ff7a6bdbec8dc3febc79a12d925f4db60b925f5d40e2f63fc06&X-Amz-SignedHeaders=host&x-id=GetObject)

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
