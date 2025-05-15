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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RFIFUZH%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQC4DMoJAOdmvRmnGWbegwP0NH1KpDzZjssafqA6Iz6szgIgZYMD9lEkMLTlRLSrb7h3ZfDy3uS%2B4qqjcTs85FJP%2BFoq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBCK8uGucfPIDpTb0ircA0J3gHQW8%2FYDOTBTtQIHBUesov%2FFsVfXv7Gie9HOQR0cp8Wptgb0XSzlZtkkDFTN6kTKyC%2Btw%2BD3eI6XiZ7LG1OjuhDjGfg8fZx8oKYua1Trj3I8pxK9rtJyGoch66BjkTagdVb8yC%2BhZ5froiPSSDU6mMdWk9lGYnU00erR1aP9hCM9ybyUZtiLEBQ%2FvArddqVVUcYdibV%2BtpQ5G%2BStO4ULm%2FnuDY3Dye6fFXqtNDaPkuVE6Tow1dqr47kbIqpRnMdw901mxuMLETymznYb%2BE20tMDFnX8OAAjsGGxRH8Y%2BMIrDO4Av4VyxObDixbbbu7Z13sJGkJ%2FhX0l0XMlEOmDtDz2vtnCEJps40npXqj2kHycftZNYM4fv0oPtZII5z%2BshQ5YFL0R9lSVdMu0NE%2FW6Cd%2BXgAT7HVkiTPlTRrkSKHLrOFl4d6FNbtzGT7yvoRRv50pogNWya9Yuu385bE5FbIjkfZS5%2F4DO05G58AO0t2e2g06%2BYLRWeB2aF7A52hZGnxXmCnEdrDtPmnH7uM6%2FnUViDImKDMor5b2m7G73SuIw%2BnefTeNA794lj4vYISSfbN0BmPyxRWPw4TgcgyTwlkhUT6ZhFujDRNtLSQvYFNns%2Bc2gyH%2BLvN2pMO2ElsEGOqUB7z87HzaxnufUmLl6m7zc6BdwI%2BpeahZkYZV41YIWoONy91CyPr5lxRkEfJUiOsLO4z2y%2Fg%2FvosXNj590lLDot%2FCRe8FVlwXQeS6G%2FjSWMG%2Fy2W7WDg%2FVsl9i5KrhnXwyqyS3fAqfE7pDnyv3407a8v4%2BPJo2gv6%2BRFuTEVwIDgbetYM%2FHJqH%2FKXd87bDYdzG4erywfuSPI%2BQdu26VTulREOLPMEm&X-Amz-Signature=f055c4326a5c53c415230b6ba9f01aab734eeb70e8d9aa34f21df7e45fe32e5a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
