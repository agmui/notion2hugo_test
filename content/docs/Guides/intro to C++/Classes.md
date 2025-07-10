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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7ZQWO4N%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7Jz%2FS8Qh%2BXTEHzJykgmiaZqH1oG5PA9aZOV5yUFRR%2BAIhAMZ7YTl9%2FYKaylVpdGjjCMhWaqLHGtNhkwS75Dmxq4GTKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQLVCsj6WvjT2ZmuMq3AP9O%2FHc8h51HfmVflWEF1Q0jptZwuOuxaYBnTWVj%2BKrbYr0QHmj8iFkPL2KEwuM%2FJWEjd31UsKNCH4t20D%2FbqCAPrQqgeRWf6G%2FVyoBt4U2n9mqYlx1iJN81gcQr%2BwlEeQFQTH1Ss1vbXPLHPYZoDnvCekGvvO%2FlsyPUGOUdc5CsmxQIV2wjPAZVE5KWyCLOoQEkeYDJqwWtYyEWFGZjrbg62Af2fMIieXOoW%2FD%2FlvHdee51eE619zFBNPK%2FL%2BZOgLiS1hK%2B0QlBiRpJXPd%2FB9hbYAW6uLD5EpTvwVaZUjS7BcsiKgSgiWzk5meJ7SSkPbgLdUO7AMCtOdhpaBNoDhuNBwvh3odPjbblYUthLvtq0nRWvLnt09RZiuF2xLFXr1uObxoShBN5LSS9cRhfGaZDZiW%2F1pc74W7fpDUxalEhiB3fM8oRXNRPa%2Ff7wn45Bdji4KEqCMtampVO3y6ZP5NjWW8sxuyI9W766vndQnwlYMwNsIulyDeTBk0taxFHWqhA4iKj%2BjP5WhGY1j6Eb6fpgO3iLpUMfW7ObUStzlPTrYTwCfrmG%2FtVuVwDePl9av5PYvEX7W0faumox6KYdBNxtq6SUbY9pAL728mUHJ2r%2BnEJoXdFUVPUD9r1TCv%2BL%2FDBjqkAU%2F0ziQujRLnB3kcUtGqVpUVRZqBtDxhps%2Bk%2BDhz8uIjCMOHCNoyrURO0iirrkPbkufLKTnC8mPlR0pC4O6wL%2B4LExaNBe2LvLQE8yMmtgMHoy%2BMALPKhU1sC9YArKKWlZo0m5QmXV4B50KMBr%2Fau0HgdtgWZy0lnoawH4CN37X7pFrZCTOTtrVDgXIOTHwPzhfdgsaNs6sbOFSF0XFXIoDZ6hTx&X-Amz-Signature=1b30c73804bb51d39260bc86090c4856d2696926d2bfe896f8ac0167c728839e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
