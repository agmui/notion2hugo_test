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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL7ZEGXZ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T090853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnW%2BFGc6gwh%2BkLv%2F72p292vD6B%2FzzC0fuTUJfu02erRgIhALpPKle7die02uiTDo4gezlvbaLjpex2HiUoa11KMbjBKv8DCBEQABoMNjM3NDIzMTgzODA1IgzNio1AeNqhv637ybEq3AN8cgBFDWpgzLB7OTWEGZxfh%2FWYNdIYat%2B9U9IH3ArSOMj5B5sRqcW4J8yNFwzjwnXlVYc6NaPuqvag5Sz3HQwkNzinI4C2iOrVOP3V0wA4CKcFrN%2FG5JmFUebaBQLRbFX6rKlLQ9UWEGnV1czfl16JiqjY4vobsRprRVdVqYXZPHL8%2FHKz3kP%2BZAhNE3VoWRUZTCrp6TCW0Ot82x9KZYiYbNAFu0Cnd7w51gXrTKleqdGNa1bB4p6B1MFlfdy6CQPnU%2Ft3WJg0499rZdzyNPU2CcijnWv9wQqRXLUQIAtVni00ybNI%2FP7OC07nc45Znj2b%2FYCDBN1Vhtb7pGAoWJr9IWGxlT2Pr5tGcXw3knQ%2FgcqtF2owplMdkF2bO6%2FXxFhf2kMpfDhfIpws%2F%2F29T9qwtGhCk6OnkbPGhEgpfuEhb6xcyT5DBv%2FkU5UEP%2FmkKCBf8RIqOqGjRdQObsNR1VERf9sXWO4di1%2Fra62iDb6Wm302mXui7h4wodO1S2vaiBfeHt8H8VibdVjAoc%2BVIuk7ZLwunyBZENBKyKP0k2y1OXBvlO2GM%2FpfIUPVv6x5LNZxFTMBYl2R3ttvmG6XkyMUBPVU16EgWZHeqLGfeVDUyX9zXkfDjvR%2FaQbaCDD0i6C%2BBjqkAQMojj1Cj2%2FqJ%2FoK19SQwoUZMb%2FdKsu0BRxqs1IZaBMkuKMEV6PAXfHFX57SDMkaObtWw0NfxCoJ3qQeztZ3srD9tAUypZJfejFHil%2FdotT%2FBnm08UcNjW5jg8vnxQJJooHTCtHODo0P0a%2BNGwBrag%2FNdsL4QWvAKAALb6DPKbhZyugu3DnxNqKRf1AyPChUknXPPYHwrRL2CVt4MMfjHAzhBZ4c&X-Amz-Signature=befe9b26a5c224c10f02be3b83076f2dc6f904fd80fc69907fdef0d5c6a156b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
