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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIPJR7XT%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIG9tnczE38vCu0w0gzpZWZbCmPofOaJ5xtxaN1TX0axEAiEAj1pkY79nPgDRPdQxq4DUUAzFrGd2bTHenBfkU2x9Rfgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCcCZZZSESt0YDbXWCrcA16J2zuiCE%2BMWTlNF4mHuBO0SNM%2FAy7XSqOKK%2BPKNshb3bvpc9b8LHqmykm10TXD%2FXUGZGMfz2urSR%2BHKlmVs1xNxBB8BhkXyiCz5PZWTqkhyiui5hw5atuxZsrVRTnQVMFGESyBTkk6wD3gvpRioeDXpcxNQUk%2F9yXBU62miV4D6q9VaaAAgB7LtSA%2B2nZjOi8k%2BwlaJw9MFEZpVCEp1Zh1%2FTzcu18sNM2X58JPvXymjXcU7c%2BI%2FL2NdLTJ3AIrGi5IB9t464hvfv0lR%2BRSq0ihnqxnwwKHdZ98Udu%2BhoV8C111Zobcl53LajoZVkzaZesuLuC6K6lVV%2BxDCkRl2CbQUytgo%2FlvDM%2FMuLp4S%2BzlT5bYmW%2FOK5AhtId848EHE9P9ZA0co7kV%2FfBsJB5%2B3%2BsUKkQKiuRZQ31n16akX85bSftPgXDpTpyquCByBuSh3IDR2lDPI4obKwSRP7ie67t32ISVE0%2BnJVCIZNjH3p9CBpwyxxMe8m4S4Lj57X9qnfRanIPgzhD%2Bn6x80zgBpQyRHApYWJGLRQfMBl%2BColmKHFdM6aJvfRJDBhxkAc1SB43%2FKXHMyYgTREO%2Bm47zg6WkcEo0uA0e6Nj%2BJwRhcDyqVZLNBMyK9NFeT55PMKz7mMEGOqUBu%2FZVU8uZAPxSsN4iftbsjidQrvXrRq0EwjZu7PsLdVejpCB7lKZgThLmJwFnw48lepCSIY8cVO4myebp7EjnuZprG7AJ5mZf2T9%2BCMbnLYZC8VBJ%2B%2FfcHztgyk6et0C%2FNaOIkIBnUKzo3PvBkTzdvlQL20kMcc97Abqtc8AVU%2Fq%2BE1IOo0xj2xeoGF45VuWI9wJqFAad1ax7Z8zdWqo5OvBnY2gF&X-Amz-Signature=186b0273f9d0a1e9ca6d6b6915df95b889ec79eefc01e2dc7e774e38f62df55e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
