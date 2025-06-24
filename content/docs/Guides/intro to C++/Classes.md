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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKBGZY6B%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDjMiHufUm%2B66YmTXb8hNCD%2FSdBBxdLWicqX%2BMU%2BWm5zAIgJ4PTicMkluHQ4T4ETtka06frSvUT24YWLyO0LRHXGjYq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDELC0E5b1sB9Db%2FmuCrcAwtMYly1k0tMtjPvOvqMlgqc65FIe%2F9M8TCo%2FubX4KzD%2F3vrmxm6xlwzUOPhJ6VHMlqTUfEZTjxripmZB1vfYQOPlmfe8RpLPO%2BIorZ%2Fm252Tk9rZDa5d0bA18OqWm6aThBC%2F3jpzFxjBpLp5RsoHKzAdbjGDIc6x5lcEViMomJ7Qk5ow8M%2Bh5651g%2BZN2eYu0V8A0fGsqZUrW5Y%2B8JICqUyAyRjg%2FVnA79YmvAWwZ2R8wImQuL80tBtn8bXrsaZ6lwBxuMOQgk3ly49ZCubV90xrU%2FH1baG18FiRojbikeWr8bcz9%2FssMDlyNVKAor0GMLvgA%2Fq5lpdjbo3NZe1tN8uo86URpblImYMM6P%2Bi902FsVNMq0uzjcwp2HsafVhhWWQ5Cs%2BcJymW0G91%2Fmz9SpaFRYbcj%2BzPR49bmL%2BnFmQplifg2dxSyxXP%2Bvd%2FpkqP29RAq1t71UIvBktRCmgjXwAwJvNnEEgYzzGQ1%2BxDiAevgwubPklV1CB4imO%2BrMXXkuNUK%2F%2BNZeyWCP%2BLXJhFsS2s1zjkzWdGSOF%2BIuExnCc1QICg%2BA8zpxAqH2K5Gw5L%2FbklEE4wlbs3Ipv7MkzLd5DSiVqPpG2DIwNlThYWOv9Dvc5ZiFwi%2B2wr9GxMIS47MIGOqUBdRN58KKPfpgx1A9tcrG6woLag4NxqVJ0lSYVpuhCMOx28RO7OJBlqkdCyAkJdDgE4gyVPCClut0TF%2F04PQ4wPlolDNkDMDpxnGsjC6D2o5gHKjY%2Frzni49ttkcg119WZ6xh5gTF6iRARgV1KdTCN%2Fyy1DDV7vF7M44TIz8FvDjzaYJ4wLg6KbWYPZsGkZUZm4Ayv%2F5f2%2BXJY9VD7hRabJw8QX%2FtU&X-Amz-Signature=9103ef69763bc0a7810c2336e524664605172de3e9591a3d5623b7b47b573bed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
