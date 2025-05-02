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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHMPVRHV%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCf0bXne4FwqN0R6gliWrx5rtfNqv9Wm9JWNVX%2FESDiuwIhALUV%2BIrwax6t1BOwkCBBpTmCzZcCCvSGS%2F5QupuvqP%2FUKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCf9VW%2BsiYoOcp0uYq3ANLGS5gQc9FkThIN6sHvhcZ5qkYgdbXr%2BozJ6vaK3FjIS2UxokDUyoXTEGlugtLWotPZQnbIAOUbJCFJ%2BtJVu23CbnL3as6Pezn4JXwq7Vw22xuncF3fnlb6Q2BjIwUkKphcqW94uShyVHaL1vgeXtg99mfKoKgGpULFNDpNaV94CkVv346FOCqnBw09yCAuyr8ABf8nOilr5v7JzMRLg0%2Fi9xgdC6XEQevCh85jrdpXkUV5yKIWMnrOHHyzhquPmuaf%2BbqscBR13pQFer2kAIZt5Mx%2F7fqJDtAwClQX3zCvZSOIsrITfYwK%2BhBsx3sRPBD%2Fj8HxLOK73R49BDVFA4MsVW9pylhN1%2B2VZGwTSI1I5wdq9p%2BPlpqo3msVxj5rtP48c%2Bz9I3MUi1zqX3U2JcD%2F4LAbDRtWTTNZQtod7XcRZ3YU8DiHFKKMtPCoqxLoqdoU1gaFi0t5uS6%2FqUTmuc7lTJTx1OwMoYe0VxdUjNd9dEqxYPtJ%2FObLf%2BRMj4g%2BxlMqy18KmIVscUCSc2TkFcJuGshAOJG1H9Q1bq2GpR18%2BLekyMxyhtDxFZ9etA5c4sUIymqEFniRS5SCfUW0cPx7MAuARutmGpJwXvjAdvY3v3eQavjdMbYjqMtezCtrNPABjqkAVR4S7XmQgrhez1x2RJlNw36HWdfkaIla%2FPF4aSF9MxZFmI8Y4tpw7OHdvPF9eCQococh1pFqMDyMdzwyg4b6T1c%2FLKOoXoIyRqHRKJY26PqfKs9wfwq534PEYiDxMwjrnHyoBwQnleJhHjwDJI%2Bdqc4%2FNPn163h8A5ZOEtIedBVeunk6Ngkr%2BbHGbKTCV2SldmWSLKGIn5cWQSA9f7SVdCSbxPX&X-Amz-Signature=088bd2384c28f5265f266b979c267574048812c5adfed60f842d9a32d9753011&X-Amz-SignedHeaders=host&x-id=GetObject)

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
