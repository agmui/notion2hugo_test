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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIUH4FQX%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDFu39vf2F9LaN6RKE3EEsHt94KHy%2FpQgn08nd9O04mIwIhAJs7MbZjh2OqBABrhG8RkkVfXDAQDYUug4BkNbNkDX%2F4KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTdi%2B3iDUqsIMrOZAq3ANm0Yp5fVKz1wvrknLWDXkgzWaq%2FxLhEam4FJm4HsUgx8vkSBsy0cQWhm0cOkbIG0rlxcRfiIss8yIL4lfLW5ZuJbS7J0dfHQ9bYd8t%2B3anON9Qet%2BUz936gZC7Ti0pgTywFDCONIhWRkUA9qtG%2F6noJkpnouWzNffXliIyK5IlFWKq7V%2FEAIpCDWgO9naMogOYs5noo%2BtRFPEzzTpIR75xHYqvL%2B8Y9LuV7XA5Mx7jUIdc2V%2FDGINnhXB00YysmSSmNFv9%2BA3ZCUJmw%2Bi%2BHOTOAam%2FXvVedzt0cckMa%2BYJZMQLZSygUQ4VRxAWseVx2FFAUaBN5NoVHWnsokFN8jPV9zi6%2F1zVHbShoLIHHp8IDw56Ekz8CiyoBotgy7ZfP0j7RZaYaeYY3z734IqDoxJUkirhylvkjHFcxm8knpEOaMetM0krGbgkCJ9GiLbvECopb0QG35mLJ47QSG02kwkakYLMkrT9O%2BdTDR%2F%2ByHgntws4vOT0w3vzb0CituM9vhmnkuSp6L0PLKSFY517FkKiaDDPzTMyskHEa0WvYzni7JWrN3nTc3f57vZLyI42HRAR0zOm1uDay3%2BQtUBO%2FisXj9UtsSmLm3unUxKk8Vdku9%2BAymwWBf0ZqhG8mzD3hrC%2FBjqkAVru0zqKCYsuyYmdgVIUyDOSS5i1%2BIlaU26pXYJ6nFgXSf0ldFWq%2BQXeX4ioVEPqlH4UwlH3MRHrZ0LQDdGK%2Fi8DoB8Y7fUFvVIAJoVMGEkXDJ0EjH83EFwY%2F9%2FeQoFbJNqksLHsVvlryBOFbBibJlNJhJklEUSNOXJ11Laoc82O0ZB8q18VzRYcqFW2d0KgoQG9oFL8E0S%2FQcM%2B4zxpihHt51XG&X-Amz-Signature=88c2edae8b4ffbdb25077c97aad75093551baaac4b963923febbb83e81fbd228&X-Amz-SignedHeaders=host&x-id=GetObject)

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
