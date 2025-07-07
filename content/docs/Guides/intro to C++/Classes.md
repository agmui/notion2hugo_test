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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DQXKZNP%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCICavhApqjMqfSMvRQJ26883qb2aP7ykr%2FQrk861sQZsIAiEAvF12xRsy63Z%2BmTHTW9TMh918gKos3AaajjymkidKC2Yq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDJT1lB3QIBQY8KxnqSrcA2bdKX%2B4tvWtGu360EUX%2BuV3zmqvvCdZfFoBNEAjORzEv61t6pfKc9BYU7rv%2B4iZH%2FgHR2Czz6I830baokMT5E5unEDckwcvhiB7EGkC6JF6Cx10kFEN5%2BoKWG6p9znE5NmpdJf6XNq1Dod%2Bv804zcJBvLID62dvjMSYNcD6WKluVcwKl45rCFd0Jy%2F7idbiMbUf7cODpGrgptVciL6uWu2RmgrxcGnvTZaykWi1C8pVoeJ04ZIF31e6mb%2BhqlIOjvsUhfqEIkOB1AHT8PstyvdtSHkaBXsP9%2F4MYcCRh5zfPQDkW7TNKz%2FYhKOMKO9yatMCtpOsPPZ1pwoWJ82GPTveMdrfUlHSj%2F%2F278o0nPWzp%2B%2Fq9RzhxD3LM4yQvixkDqU53ugvaAuDYRhjN%2BbweGwQ4h1%2BWjjyfcOERzpTKJ3hpfLNHaRJZxGfXK%2BK%2BFTYd2EQu04kEoiy8BmhVFk756LuMAEvIXcfAdV1EARl3rtQnterOs0%2BE9pt20a2%2FyIqUAQhAH%2FwdAO7%2Fzr6MAfv4DxMAZ7dDAg6DRYzdJSGHrS%2BdmNna9qZ1Ru614n6sCocX1tsG3PMmAYMfsePqVKszKK7jDVEWjIEe7oJjug5Sgi0BXbTucrxrkmRZ8TmMK%2B5r8MGOqUBynlyc3eiYx0kmEjRP2Mk0fTj2wuzVrcmgmHvqcu0cLQDtg83WCy3BWNWqf8AXRBQkgTPnB%2FmZ%2FjigRu4C7mb%2FTtsOaKya%2BeT%2F%2B82zOAeS36tWeciy6eOq7QUPZ6T6pvfoM27H1rtiTHFe0O%2FC8NnSMNSD40R3lvOt4B9PrqKn91ZDHvCKboJcxuHyPKyjqEefGddZ5de2cF3pFni10ddYv%2FmCpVX&X-Amz-Signature=649d0d3e1b8fb69af92a2efb9c507a3f5174edde7d2b1b0457403cc8fab5eb0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
