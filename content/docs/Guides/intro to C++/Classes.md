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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SEPVLBV%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T190421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIr%2FbKRzAVApGRz2B7CXggRY1TJ%2BSznaKzUsfTi6bXqAIgZLpZprSaRk7EBnljefWJfHxjPBFiKMIM0biBnnElgKsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGj5NqWxYRN8sv8e5SrcA2jEHsY%2FOHzGPU2ialgrdtpGkPDZZGKfXuQLPXyPQaXToVoEFJJE3it6uSMS4Y3fw0KuQ7LEvEv2RIcvhb33zwuZ%2FzXpa4UCKPz4kVdkVgfuMljwwQvWpDJ4L2TTUEyz8OpGyHFQHBe7ragXJvXbg82qWz1JWYR6H23rl6CHoKwwvWDGjyh6DnTMFH0J96rIwMcNCRQTt%2B825sb7rOn3aSa9YcWxcNFuFDz%2By%2B7lmtNAV%2Fvm%2F4JcA9gOVisMGHp0aO4E6JPYvrGzjJuZlaNg4PufaLGia1V8aRzo%2Fu8lAs7%2B9D5ghdaX4hnHEUiOEg3c1HxXFvvxucFWPav1mRsM8yt1UfsS0afX%2B4%2BW7SR%2BQwRgcjQpwiKypR7GuxrTgvK0JVqa5AzeOIUlt9PHI%2BUtqMt76oneADZHnkvOy087CSkLF3CppGj63Ela8fA2bSNT9kU0gl2h7dLbjMFbbHTehf%2BjPKslhuIEzf0cepCSzoRAvpEggIfeZ%2FCf0TWd%2FSc0PXla3rkzdF288QIiF2ee%2BLVyN93Z6u%2F3h5bpZp%2BOngh%2F%2FZYU93u4QxduBSiSyB2NoayNNSi%2Fr92YmaBjtkMuXgnhQ%2BatbrXstkjt14FMray9gWNhAk5DRhLNbUo8MLyYs8EGOqUBhUBG4a4s%2B8JqUN%2BRxiSwRTCxeLQn%2BplLk7KXdwoTgPf9PueZ%2FCi27JzHajRBihwL%2FCbqBo3SrypLmYliqeXJRrzDVUdeKlLkLPWLIgSUV61pTx5i7HY8tu1MTIvQW3Rw4j2JA79qVZw0HL9V63r6wEzkNCCHXaMFu%2B4vPYWKZQmpNox3Zt5N%2BICDUZUkzrFEoomTN2XyLB763wpjxqbeWqnuzU32&X-Amz-Signature=4e25d848f7b169724bad383ca392515939b9701a52d4b8e924bc0d683066c8b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
