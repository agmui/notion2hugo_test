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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DOSKUZ3%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQD%2Fm7PER%2Bd1WWUja25OUiBzN2T7vA%2B%2FZidbGh4iYZf7HAIhAI7ZSIAakpZzRWhfJrG%2FbPLN2fhIlUxOnwEDkzZQ0%2FB7Kv8DCF8QABoMNjM3NDIzMTgzODA1IgyQxPJkriY9UjSVzxIq3ANCfDsGxk70TQFr%2BxZ3RPx%2B%2FYA1pFNAx7IZEDB3fPkUySscAYAgQb44ZxJSqp%2BArXGb1wQ6RuIhaDtlsP%2F2py6I6DGcjzqBElJyCuXp8LvTG1%2FTUo68sWbwmqYz8XnnqvMUu4e%2FjjbTOAGIxACVDk%2FEZ9ufRtR%2B%2FUMBY9CRV7nB5hkLgirD0Kf%2BT2EVeyAcVtKx2r24wGzzCOKJ9kCFE4jtSbB1iYd26WUCyYncAVA1jc3WKCRmNiZtVb6TI7gF%2BCvEniTISqgmRqhlFkdXnzmsbPYQhO%2Fz1jiiuydxgZDkvLB%2FOtSd7LFXkgbyN3%2FUia4kS53Evu8GhyMgEyXrMQt0yJFjSdDezhG1FgqeJOqrJp7%2BO74%2BO9tWUjhUfYjyFs48FusU3AFF7O8Grbe0euZt0Qu0TDZxSpPmwmGkJCSkFLKH0lwp4nWmE7sGQ5fhS1dwZ1nRnuoSJSe3kx2%2BzRr%2FnYyzaESylQflCLrbcyDGlg%2Fr65TUsI3kyDU2AxQiRRLtyxvLLh0VntdyEyJestcs8%2F7L4p6TvLsxJRzKRhnKC4DAl%2FeQ%2BMQBNQN58pqvVMXD1c%2Fnk79vvdiO3skrU3rVqYBMlA5Ass%2BLJdTAsTxrgGUfAHjhSNBMlBbA0jCM9eW%2BBjqkAf9%2B33wGlwYo942KG63Dy2u4fVACixZw%2Fj1T7zmMMHuW%2FgMlH%2FMoR8PML5KucTf6yLicy1sTZlEPXzMO%2Fczs5QQTI5XTom9uMqQprIgkEhusFOZXs2PgX1QPvsRw9sIK2Y%2BNQiRC9WQUDRApI7oQHTuRiBkDLl8xBOYof32jco56FIKls3QK9P5vfUiN3AdYhw2HnIcq4xFdxQUPeqnaqstIUnk8&X-Amz-Signature=dbf5caeed2727adea63a069df8ac2af1e4983989962d53897ea4cc167ab00bcd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
