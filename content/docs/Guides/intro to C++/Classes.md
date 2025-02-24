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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FVG6PTU%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKRu1MVADFa6JunmRnmIk6l%2BkwrYU2GAvYLkhfDqN6dAiEA70Sz9ijippvFOi7O2BBxfaC5KWobvehtlbZ8BjUaWdUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDObFBXVI1vtwM90%2BXyrcAy7ihClekIOraMNwIMwnC4iwb8VrePDDuYsPmoxN97%2BHutKhMAjZW%2FOTxaQiTzs3lJMUL7oUC8QOlvoQ7D%2BXK7ADFyhF%2B0BPw8Mof0vKyLsZHtehLotkHasWJJ8WwteB3fYbryaFyN07qEE4Vbwa3Vl6gXRRH3D27aTpQwP6vKDR1SYRlUg8rL%2FaK%2FDqgZNqv96YqEfcdl6iaN6XRLXZ7C76RaGWbXWM1VLNcOe72R%2FmQwareBsGU4SGUK7nPvHTlVywpLol9LdV5MRDxmgsUFMVlxilW8IvPlMiYNoN5j0DWMx7I1VRdSHnlN7IBVjOgXRBCvGYP46FIdF55TlNcWUtg57wAw83a2ylbmjcxb1S%2BQiWGun%2FknmcV32qnKjCtmuUGDavBFmF37GBU3ohlPhUmWgRGhVjWamoqYWC1YhZW4yAG4OOEh%2FotRODLjrrDXgl4gb%2BASYjaHPxQi93ax9VaPPkKG2vZ%2Fd5MuOuUVtXBprLiNYNGRny%2F0rLzMuH5h5mDedCesLV1ycbxZqCV5PYl94ZkrLMwbgDN20zRWYSjOc%2BBLFfh0fCzAxP74ovtHddoTQ%2BYj3aXDJyxxWSb10aEqGKG9zUoW2k9YsTlTi0OxJ7tso9Jkf0AH2RMLvV870GOqUB2k%2FzBAmP62tXcvEHidPlp9a1tA%2BINscEGBZudo6kiiTNm0LicHFvhSocBx3wnvzRFQ8P9XGuwf991inDpGABTEiJWj4MG036pNXS8BFea9myRTQZg7qjM5VqsxwZesT%2B1m2Lhqcr%2FuP14VuwaSAIVSDdG99Cxzzlx3mFn5Iul2ynKA1sRVQE5Jk6ZipeeudWoYPr2YmO1s2tAOK9V4ll1GCcWHh5&X-Amz-Signature=ad8de36aa286e3d193390ddc703fc778d89ea87a5124fac83fffa2b62a1759da&X-Amz-SignedHeaders=host&x-id=GetObject)

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
