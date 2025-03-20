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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFMAU73O%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQD%2BKIr5WafeIQC8%2BMmXPtVP4WoZ7UNSC3JBrbGLvqnAQwIhAIyemaVbK0uVc1t6MefgppLMrPO6C4iiKTmqJGb6zgvpKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy74buOpWkCePxNaQYq3APESRx3tG%2FQHG8YGVr6Rh2Fcgu2iaS4UR1f%2FAR37DSsnwx9sZw1sTPFs%2FE2uUAQ2vRUrHRJlq6cTSpMP6qx3AjrQL04TJeBrlUgm%2FDn7wB1EHwDL5nDBNxNut%2FPwhFeI5yQRjYHkZGrdjr%2Fm6Oes6Uh%2Fqw2PEKgqcNYbb4rCoIYz7AWCnyU%2FyzDwDS%2Brk6FsbUKWUPnOH1flFJ54o1UGdc1ce6h%2FPssSR%2F4kRX28zCJkxnrxKEEg60ycR01ekHHqgRkU1GdGbyrbP5lJhwYPZcWklu%2BU%2F8a6hWjVB51%2B4NHGXYIZdxRivj4U1%2BWo6Avix51ZfidqqDNIlgaRtkgMWJourztNxSr7oaonYqkYfNE8NoJPNOY4S7KdkOjcxvHYLjZ033cvRYW3K2pcqc7zBWWIi3BDOLuZXfi7xGefRAAW7baudbTGQaBeQq5%2B3XiOzXTDJYK73L%2BoW4yFKDdg9fUKOqrGsdbR06OoTs3j%2FYbWaKo6HNyxmgFqnstWUFyEGxzIQtcrtpnYvtHQFd%2F6H6dou0eKHw8viICci%2FoPjkeo5ssVrlkrcYBGwB82K1g59jMfoJ4Tyj%2FBVMK1uL1nsZOGGKWQPEI5kNfaQLOLD6tDEQQ795CJj8I7lo28jDax%2B6%2BBjqkAZS3fMSBtkyxTOlXQwyQbhO2n4VjQgksdH%2F5rGry2NnhWy367QfH5PsCnRVn2ho6m7mAEJJmmq2wFnQ0JEHKWYrOk0XJCc8WP4j1xfS6C2UHYqFdgoQuR%2BP585lad3Hz5zONvRgy1PrMwG3%2BoJe26D7Z3wGBIfWKWNA5UNqP5xVtyCkPonRG25%2FABGwHLtsgYYw2i5w%2FKErByovTbH%2B0d%2BlSZYz8&X-Amz-Signature=0024b5523fda227ea4b619b7cb8e2fa0f0152b18b977c1d8110fd0dd185ba95a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
