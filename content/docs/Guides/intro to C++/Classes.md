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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IKNHXUE%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCICiE46zyQF0ACfTTOLoChUY4sm8soFsUATA9eKYYLBRDAiADU%2FLJTvHraxbHjZPaWj5iqxjVEPqSNghkcqoQgzy%2F1SqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLivd5fE%2BAx%2FBwftXKtwDTzNCg2GhMvBsqMFstLSqRkgcCtNtN%2BkcKVIcjmiQOXcaDkROms8RXMj0q07IRDfEVgtR6sKmOD7IrDOObtcspVmEpFmHwF9vKGcxhoBQg0lyCT6ZM7op%2B1uyPqUhJ2FU%2BadPK9c2AhsKll5fcwErk7nyBCIqBrBoVRr8%2BTtRXrlXBGXi%2BxvUVoIN8tAygBnLYlrMPUXZvpDLwBqfoOKaO9p1WWNNljEGg55ErNXmoY1m9cYQC8gNnE%2BEoJ6cE3Cnqi6j0zoNAkR4Z7VmCgL8%2BWI0gnRo754a47APZVs4GjvYaJBdTZMdEyvIgEHBqvi6uDP4JVQZA7RdV8ufgQxl%2BaRtKaak8SH2kjr7RQ5f8QP4Qz2cNWdH9%2F0SgN71X9RV197n67RHA8NqOnyErgUiGMO1uzVFO0UGq%2BZ8fWHLeqSefH7Vjckubv32pKK4K2nktfycXa7BW1Dp3XpUhBcgU8nlEY2pMZ6wle7%2Fyf62DfeHpXEiEV4kTh0rHWk1X%2BJKAnwAC%2Bt99wx1rcmPYWTsyclUsVr6igoUY5iIWuRVzL6WgymgoO%2BoKRyIEeMxlzjNX4pXX0oLEn8UiOht6aHyqPhw9uSuFqL6G4h2lWptkzkAzezw5Uf0cH7UfwAw8%2BL9vgY6pgGLgqKkrNDO%2BiOLvYWOq%2BdWEKqLjJoy3WNSaU2sUZXJ870n6cw0AWocMW%2FjUTCCEbbrFYIkO7F8eXliSUJZgVIKdbEzFMb%2F6HGUqyaDbdQNKPRuM95kyIrfKAMbsxshFkr2%2Fzg77j1eZytzG3pyrA0K5KiXK5Ab06SYHZhqc%2FcHLtMrvqT%2Fw2KvFur6U82F9HnSGdhFI5GUvDU99B0zfH2Enq9dbVT0&X-Amz-Signature=ca290d285b2346e3a48605a30a464db34a144c3134f0f3af80cb57f05af6140e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
