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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTWSKXTJ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIBSVO3rjH6W45JEjQCbWz90%2FTuqNv0ev3pPq1iN5b9AEAiBwj8q1URflpSnDyockWkuT1D7WHkaLTULJEdvjPQs0jyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIM7beGvy1yYmPH9Go3KtwDne%2BsMezxTvJoBU%2FvjpOhHYCaf1EapBo9YHx02aus4bRM%2BAQxnINmllU%2FjqV9sR7fB%2BdBzvLuumjuMNwvolkN3lTX2GgP%2F8aOYIhgfyNS47mEOmVzIvMWMGMbBQ4DNT%2BmsVOdtdjkIytROkmXlV99z1UKk4%2FuMC91O%2B9j%2FdqSgv1niy4wjGwg2HFRLoEKMk2A%2BZiOZUNoClUrqUyR%2BUoQgPHsrM6PjgTUTbfpv0kp%2BkJTFHssJHq3bqDgWirwRRW1pYxOTxk2SsbOAdvl6FfcyC56DpvTFnHc8v82SxzZJYyFnxJzzK2JGtK9IULmHuSX5YkBTf3%2F7NDp1hUXakiZ7SPO%2BKOHs6tbIxap4N57ICiOi165TWKNAVzaP5%2F8PhNxpff6cDsMh%2FqAf%2FsQBxtmfpDcElA1i7L0AyDV1vy%2BfwDOoL9ntl4XAUONO51szarZHfRwj6ARBYR8z6ViVjK%2Fhx5pVP%2BgClOzThcWzP3Ij2be8o6rlV1K%2FldU5qVJmk3%2B6T7u6DqvWtbdH9kYKKvKhseVaeWdj%2Fc57j8xPFh3IeDJ8DRPAUBhWD0xj6aQihHDTgMtQ94ZjT2x9Ic9bGQvKwrPY3fFZKHAJ84YqYSqDoec30NkUpTO%2FGSa%2FoYwqY7lwwY6pgGNWFhCt8hNogY7mh34iGZDoc7kIkBaudWJpL63L6KMJm5yxt%2F2rvNCrWOOGWkbvVALja86NrJSLUN8yatughU9MZN6%2FKbJK2WhkmknKv4cKwVHRYuWcvYyW%2Bee2JW%2FSZKEfU9jkwtRJQWeIgA%2BdptqqGjGDBjcF%2FHc%2FsadeW70QB3txZKuvDLv1woQJZbOc1PkDNeKgNUMbcaZ5OXLlF3ylZANDJap&X-Amz-Signature=2c156cc616447fb5089e54abc036d19cdb97e70da08eeabd8ac16358cbbf5a8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
