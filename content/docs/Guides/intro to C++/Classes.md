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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677ECVJAY%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICf0pF8pYcmnn1qhe14N1RQykWe7PW4OYIcVJP%2BhcNwJAiEAg9fBE%2FpST9nVOnCU3V%2Fp%2B%2Fqa62XgcaOZbShKadiicuAq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDPfUSDkxh64QxhaksircA0BRfJRQGdyHQpqGg4G75CV%2BnmlS4raUXBahpOZuZlYeHHI82Zl%2F%2FDZZYAu5C%2F95UjwF2xnLQcbBE0x85aSULU1R%2F4jW7cXKqVdyOXsAq8yaNwwY%2F32R92fENLibCvW6qpvdWcPNvLfohHRZ1U7a1jivn9lKlzfZXlaDwhc5QwwJcdxof55Hm0%2Fkh2f%2BnkJc6TPX0YAcASUk8YJCXcRZkEYXH%2BBBwQW5mX1qSjxX%2FQKFXVyXQ003pmv3HHxm4ME9xFY4KNprhm4UZosEfSqRWSY%2F5a5gcdcD16rucldoJDy807GBTjOFj10Jg0Z1BjDG842KjJ6mpf25sXxLwp4KYY9gYU1D%2Fk8c97vY9tubX1%2BVQNwUpvWlVS6%2F2a477GJ%2BY1b5ZYu6Ca30GrLff7nyJJSJtXO7qht2StKm7MWWEwrwHig2SnMlvVBgC6baSinPpNHfXG5JRzOjY0O89JYtDR%2Buc7ZWpdzDnU%2BpwSwsxnqDpzBSLN%2FqAwOtzpCJVMnxdXuwtcrCnUGfLmbfasBnmgPXRhMFIN8jd8RzZGojVPsnbPH0D34Oyy36Rok8xBVsvwKLiZ%2BzK%2F3otYQoRi%2BQFXDN4208DdDI%2BBBWT3Thn30DbvidOwXt4EatKSJCMOqhjMIGOqUBnDUCe%2F7ftlY8kYMW%2BAySUKT8V8zWzeT6rMcDD4cO%2FyWVIL3q0IapOyveub6I%2BFtk7D%2FeZBH9tJOZmcQNR504ftGg9MZ4dBxZx9yS%2FV9vCOaiRjG8N5YUXBMEZtvVHGkNl8gj6Xpey3j6T62LV3hW%2BNl0A3WVOQsAk1r0SjX4T1g%2FtDdsVTF%2BSPOETf3UsGq2P8gtaPsL5ZyjO4h6HV9%2F56ejJOBG&X-Amz-Signature=876f95fca49e0311d6fcf7607ebf72eb64b5a276662e803785b9352a1178bb87&X-Amz-SignedHeaders=host&x-id=GetObject)

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
