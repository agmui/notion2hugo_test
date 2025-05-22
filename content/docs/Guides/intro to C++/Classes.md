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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A7DSXOK%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIAywyhaB44v2ptXNqOerHzDEa2yT5AwqETFogsXg3laOAiBoZdAUyHsrxctg0TY%2BeNO4BdgCPeAGas8eqPSwjUOH8iqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsnoypC7%2FfaiOyZR1KtwDcaHDY3e44YAoeOmEjKUdWJZA8mi4e7yJHQt9erLEQEXC40zkaI1eA5uXKpUlkjRAs4oNadG9wCavSEUY4BOg5Mn5KMNjtPLADY5%2BRsUSDgQpfsMqylXX4ibE5m24NQQIEpyhcBbMbjC5xp0DP8yEU8LyQhP%2FmCLtkjHCWcKIihWzTaOns91IgfGAJeud%2FYRVgcVTTAD1AXHfIRi%2BJUMJgl%2FvRC%2F%2FftiyQUbplAyLVcBJuf1dN2soqpB5oH98ctsTRYR8qIo1pKRnoSh%2FF41uQ6wHGYfNJIX8pSkQUta0P66fL%2BQnozBIhLOocE9vIXhs2k1tXSY4kFn4pJVFIqd5%2F8RVEMGUoGbhZPRX4DoNjPZKL5x%2F8YdlLHYCJgtwovgTwVuXGccRvD5%2FUEBytcmlfl6q5Okd8aGXjbqp8g6vjuj6SC%2B5%2FP%2Bp5MKQe%2Fod2t49T0jEjY7X6UJs%2FAK2x5q7m3kyENzXXduzRiJlHqW73bDbQZT5fPnDG4hImrqOuHLcRAQcXGxbE7JMudDRfvWPffexp7ZLXqmNBjgjwfAtMaHWmWRGpJMcGRW6fMRW0YAYWWw%2BHfFLoay9EUkqpuNTyllMvg8a17AGsHTzW7Urt7BBjr4dCXAX2845JzEwyqq%2BwQY6pgEt4DcU67nHM3256GJDg2xmVx9xuGBjhsE4LDBLS4MSpR3%2BeT4tB53dTYmt%2BRSNOJe0iEK3YAgwhgwI2jE5vkM6tf%2F98Ebg3giwlH0lqLdHizNU4Xx9WYFrNxeEACAm31PKgyyjZPdFbMW7RyI65qtUN%2FpdpfVqReYf0gUsoxGTB%2BhkIa1fGpxcxMzR%2BqsVnUg2eVgKkwykAPZO50y7LLnU2QoFfclb&X-Amz-Signature=8ae7b843ab146a14d2325a4bf1223f84e9f252eb71f3c3a9b941b458d130a6e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
