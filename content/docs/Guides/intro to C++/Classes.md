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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WXS65QA%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsHHAa0%2FCYCDeWHusTI2Mj0nEN8z2h8HSPonZbc%2FUQQAIhALH1YcU5rxkvcD4I6Oo%2ByPYKEEpWI1m1ISX0sR3VjvF%2FKv8DCBgQABoMNjM3NDIzMTgzODA1IgxkHg9CsHYKOeotfmgq3AO9cOqxmtQfTnTa8fafkyndfgfhDihole2k%2BgiAFqxWiZn9EYOZKqynwMGrY5yFvDcnH%2F89dcyRqtAkpnQRPiF4ASSBa2Hasaq%2Bm7mONXkAr7%2B%2BxZ84hjOurkULae%2F9sNU0t2swfMfLt0tLjsHxvC%2BHZ1T73V%2B%2FR9wc%2BE3uZ197TD7MtnM%2FUNcZdHnbfb9nYplZu8LSCznbeAK4zIvC6P7EPKmqqHU72StbZyjtw9OwdHVc6M5EIvD5dLyxPjOtIXlSBx5LBxiCIFXaiQjHQZS0Zq8Db6Xp23vsqyMrv1nkkcQ1ou5%2BSqPQcP1YG%2FSax0d2Qaf97LJEkpBauStHVtgEdIGL%2Fbs6cIgC3t41H%2FExauijyWOXdnEYNfD0u3b4UZh4%2Fq1VyGJLzgEQ0hWOGLHW0lzraZhFSReBGEzugbFJe4loqsDXACVP%2FLI5A9QU7vEnADAbid7k2NV09%2FHB48gn%2BbemISlqkxYHHEMzhp6SxnoQzFAqMKY1%2FZpNiS6StBHIfFefnhtS%2FpnTdfOzCK8MI6L5ssSdt%2Fg%2Fd4%2FLUSzoCkiT0FkKOBVkjDbWLp7di1qfFVWQHgGgrjmYQO5BMpEQyGvX6HNOy5w%2BSBCpWvpzaTPgmHuyCSmdWlFcCzD%2BhYu%2FBjqkATaC3HwH2JEq1fPyjw3g%2ByPCqBhp%2Fh0AAXxPdmStkEhdWF0yrltXSKawhzkvataDj3ZCfHwhD8FuTyTEVhmkjLOMEx0Lo4pE%2BlYikk1148sH66fb4XJgip5WQ%2B6EyZQroYmpv%2BOSIlJvIBdnWsVqIFBEDSSA8F5P8lE7%2Bn2jsw37aJKm2lpavJLRMXjode28PT97%2FUdBbjTKwfJPW3i%2FHjX3GF3i&X-Amz-Signature=92b6491ce3202ab9dc459de9c3078a126144e9bb3c7341b90fe7ddd7dc28fe5d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
