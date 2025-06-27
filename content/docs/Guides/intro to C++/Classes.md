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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHOBLVI7%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQC2ZfKHZW%2FPjYP56rxKTuuzoNnbNfwp9lEek2eWt5uo5gIhAPNT15YcY91i0fu2CsyeZSCWUXrfQPAQL7C7E7Mxzc1IKv8DCGoQABoMNjM3NDIzMTgzODA1IgxRKHojSD3WpF0uCnQq3AOQqE%2B3jvFTETQ%2FSLihQs6eQrwaNIGI8viJKgMeIv8DcmmA4NjfoU0txZmnt6YEOkWD4hELkND%2FK3vIlLTx60AOyGamIYKAR9Ghze%2BZBNCWbV2Geo5GWxQl4C7vHq1w7KXAYj6PukkXVHDeYEeWYt9qNzb8njvKHrWw9o%2FrcOMEH8G3DC6roVT6ps%2BhLOS4xJp2aqIxA4eyEzvIP9bfdvmiJdDk7nUYa0drHNsoR9p4JTqVXR9XgLJG0vwbNx%2FwKhhK2RumGNtXmWtUd5rekMz6OVD2Qr9q29hBSFjZgJbfCz5adnoKl0gOG6N0SJ0kSqTmJSmwJFG73iZU9ze%2BNg2FgDqA2uqnmv5NUrC4EwY5safwHDvule%2BbM282DJzJ1Hl70qMl5QHQlKGCZeXDK0Bz0E2NMvb8vyrubHUVUJN4CV9czvu2W71J56eGC3mIBlrdNVCIrT6aZjDAydzrka9n7MCebUa%2B8V44NnHd%2BSHGlh2l65v7GdIn8Kh%2FslkJoyoHzhF2wFlkPd0NQglksNXt3OGOMra0IMpbz78ZG1wZCL7IjvDs9GqMrrpkly3SgPsoOpz09LIAFC2N%2F6r61w%2F5yRxZeVi44sCpytXLwMkAZhGb1der2wR6GLu75DDCy%2FfCBjqkAfHdKo1xzhSZ7ZoCRuh5Y1H%2BICIiJd7VahO8HvmMwGjtLNAD8qJyd8R8jWB22gDJSbPRrfSTlhHK5JWGHodO9kmTflJJfzUPwqLNF0FmmayOGzVrgB8aRz3A69Q5TjiV%2BhVFve9xY9RHdsEgcOjtTyq6MlrLr4hYuQF7vGII%2Fi3TKRGfcsaIaQOY5kldJ8liDnX%2BOnxXp9CM7wQ3%2BfW7RYBbbBCQ&X-Amz-Signature=e593a58bc4b6c1cdcb14cbd5b7f0bd2919d981774ae03903041727fe5c694be4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
