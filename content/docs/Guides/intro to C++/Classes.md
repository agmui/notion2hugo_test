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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VBRL6YY%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJU9kwnm%2FQrtpFcJp8C%2Bhrom7jVPskV1WXsgyznxWw%2BAiAl8Tv9TEEKl0By4f8XTCTeF2cRDB2WTomBCRmM%2BVjSoSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBSx6mHClFm%2BOvVu2KtwDBKjHPAjwou0%2F37PBILhyhvysMn29Ks%2BSIVXsAmzpsL%2Fgi0O3b3c1Ia7nMxP%2Bwb5rVa2%2BYJVoqk8ZVLoSjoIKKizM2yQy%2Bf4SXxoPtuJqBRcxSniLSowmU%2BkIS5%2Bue5IjGpYBLzUa3nO406XG926c6IOeMJAhLuRmHWCToKeMZxzvbFXy3tjem0RNu8zjpZ1hMpO5h%2FM0ICk01l1RY1raTDkSI4fp01cNwSQ%2Bvtm2A5V9LJyOEr11%2Ft54uooN8mNwAzPUU4eWg9BdGyCoJI9BneKCMC%2F72cYpRGnWdHD%2Bk8l2GPcfLoqsEeepvOvbBQRGwA3bl5bu3kaQOmNT73R6WWWF4DLoOeiG2SxICKcgHWCEBWRqF%2Fqe7nBzM5qoYXaINmuSCpkz7iQIXc4GtYorub5U8LWtS181mfpgypAuFY2D2B0cJw4bOqyIA9RakPNa5R8d1BsmB%2Bxh0xquZjoKdoa8XE2nO4kk0O5grTlAijIcf3e7BoGWPFe1iLYm8l7zFJzYqS1Lg50rttxTGhzd0zMPcpDoJ7M3rgqFxEqZUNjW4Jz3BDfQgcpZzdzCn%2F8jzZ5WPMZbyk2TBhDU%2BsSTuC4pFjDT%2BnXUFZifMvi%2B5TzXc3VW7%2B82szv3qIYw1IjQwgY6pgHavV2VkNufU4XdtJ%2BUwHPV8bv%2BrhdN5BP1WGo%2FhClqTRdyuZf6pD03S9%2B1cXpfFRREy0xrx6U4ZwfUmAJ0ECF4f%2F%2B4X7ZnO3JtvYeBq3cEMnVjTvaI7kO2RLAvUmiarW5mxVlJgbFyrC65DhixzJRIZKdo4mvOCqg8VnttgjfPl5w%2BS0oQD4lBrnNk5LhWuqnNaffZa1rPARAhYOuGix3ykRCsSXpr&X-Amz-Signature=85bf74da6329909d4f505a0470e5f939dfb58923457e2679b6102577eaee5841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
