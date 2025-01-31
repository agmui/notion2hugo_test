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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEPFCMMZ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhLC0sjmmfn%2B3QwiTFg%2FzfsvkXFIvnBtyYMZrcr7EU2AiBDHPFYi2j6HnQ2ZPwUhzCRuCaMMcUAcr6D8eC2x2dAYCqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMULxVpTubkq%2Biti1IKtwD5BN%2BoLTdBNhzvvwc%2Fo9sYJEFdI2%2BqOOCdsED51uNImiSlU%2B2giW%2FYWCne96Er8TgtNNmnS5Pyf1MWrfSjySlBlxca8Vy5aobttFjxpsXJyX%2F01fTPQsllXvOveleIWpZJZM0gZ61EOta2fzV3Fsc%2BizGrZPJurkN%2FhNZGQVNJHwtBllMFaSx78pMsvh%2Fmj9lyTFBgL9qy6NutUZHVv6qLO0PgWpP%2BaokqKtFAlgsRbCGpe5TWkKKzXhtAuyNoEV3TYmoYxpER%2BoB3z6awo%2FJ57t9i%2FqKS2KtdwVIug6aSg7V7gkh9a1E47229hYBZjvUu38SA5QGG%2FVauyoRiXKo3wljTNP6Pg%2Bi95R6ZdKLl6HJ7wLnUC2jqPv8asRI2dqDDlVKbtWopqjlTiyBovXJURQ3HdWQ2OAm%2FIWkfVvzI09tCRCta0AGSo7GAolI5Q10Ya1ChqPdslcoTqGarnFxD2DFpI1JF5hDj2HlPw9DTDL5V%2BPqHTm3hp4vpqyDQ8k%2FNlAWmt3IbIOAzvUmHnTxQRPAz%2BE4Hr0u1YbXxE7HR7do2CVL5MzrEXduFdmM9Fr4ysJFYSns5Yqxn4qgCX2v8unSiU4iBJIZi1rNzRehZOqbT60uLrhCMIS7VJwwssnzvAY6pgHZJzJY2odHolvTn1GkLlqyHXC2hndQ92wwV6KqKlupqZIGgpelQpuCwiE8s6sS0FUWrL7RYHAtfjAwvPKcHwufwXBQ9Z%2BO9SwxE6d6zebm%2B9VE6Q3QQ80n%2BWUNEvifEJi0EThbck27JePZ5tKiSxOiQ5ocjrfBHQ1TuS0jAVfavvSitLQwUjUkLZfNvKTDfLr1fBZEnISdM4%2Fw8mQG8EYw40oxQDSN&X-Amz-Signature=fb2f58e59093869066e9e40bf44a4848971cd6bc11468bf1129f7b14d7e7955d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
