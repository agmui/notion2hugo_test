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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBSZM7QW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQC7gf4L%2BLh3Lq4fAe1Wj2keAD%2Bvu86gaerbJjefnMj%2FWgIgQTPoA1SJQq3R%2BxB4Xd3MqLdMEEyWpAhDPDMKGcko15UqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5SKN3i52TzNe%2Bs4SrcA7L3TJPUrXT2Lo4xy%2BtPZgUAyAqJZW4kG%2Bs0TGJ6bH7z32KxLZG7Kw3f3wilmXx0RUZb6I6eKaAtGoDnyw950vj1%2FT%2BFPLCsIwWY1JRP4Pl6nAIWqUi2EKG0JWuILtJYuLJTCeWa3eyd3ByDwK3NXc8Oc3gPPf8wLtzh7%2FSrOBqvLT3i1vu%2FXgtTOj%2BtdT7aL1oE0%2FUQhPkuohCaiWvgifO4DEy24MbyYmKveNMcZfTTx9uacd6X2dv2e6skLfCAWvwXFcGHl5JM2fiwQ2ByyIZiPGiR%2FLPLPBE4Uw2bqipAAMlpqXAR%2FsPOTxb4%2Fnyg0YtXbJUSu9rGKZt8FOEqhxYQ9cpRGvC%2FTn6svuFXK%2B%2FoVNB2CYqojI0zABT1v3ZjqqzQIPijcFfFJe9HtzQzUCdHwqRGlqm%2BPVGDM04bRPLqYVPJV%2F0USnO6fakQS8mxTiqagq%2FZB7VJ6hPV32S4JD1qW0kikZQ2Fzb3yxj5R7gKwk5iwqSxp%2BK2xb21MKIU6c4%2FkjSw%2BuVxamrGAgW7aB1%2FfHiAL9yGf8osZQWtlopmTKBoYPLJh7XJoIgDtTYmhqjYcf%2Bb2g3a4C%2F4ufRgioevL2fthsbzLlMRxe4eGhLDe8ZCx%2BCJHFOaZcGyMJrqor8GOqUBtDs0OJC0tINXAQDur3U8WtSYGV%2BjQvujKlr2SiZdjCi4DuRPPq7qNIGxbCF4OBiZ4H15hIaV%2FanjQGZ2U3HEQID7yolyaAUjsAUFDoKRyldW7%2BFvd%2F%2BdleQ2XLGJ5lz7PqajCnD7Hrk1U5%2BCuw68d3uaomGeh1goLs4Ngq0m4iejp98YgZYWS92uVDcp6uGftekcGsOs2itRPDQGllP9P%2FopX%2BJu&X-Amz-Signature=8f53cd2528565d75bdf70c4a5b3c29ad3e8463df817bd1db724f567236e51c36&X-Amz-SignedHeaders=host&x-id=GetObject)

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
