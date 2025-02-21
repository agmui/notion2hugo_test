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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5NRQCUC%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC00AtSvslk1n91%2FmiXTty048XnPdhj85Fja03MdgtE9QIhAJyoJIwLMuALb50moslxmnBFSx7GAHl8qtedV%2BEG7uLeKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoTDGg5tYJcjNkpzkq3AOwRss3GhJ4tsreWvirSJDYrlsgJxeLzYSt6EdCyUKJa%2FCGivUy1T2ZYKo3bCIL2KDjovqSKYqakH5VcJsH%2BIuPRvyC3Es8p%2FfZHn66nTpARkjSyrUz6GwUjp5bC10vkRq7ZvIckCVxwqgToW8aWaq8rWrgxI5nyBFfDhEHPjocsWp7fb3q1kxVuu%2FL%2Fuox%2Fcz%2B0bE%2FbcS0sotGCbtULLCBKtQqOOdtsj0YJC6gQsfRG4EVYfbRgYxLpEhPfDo%2F2Q%2FHmQoj%2BaoZ5cQdPFRydz2y7oX8AqPpvlmcROV%2BErJ3UW%2Fo215tkFZ1xBAOr%2FQoRHbI2nhvqRS9Mq1VoVKLVQO4N19wSMTBDphrzhDE0YRRA8H9Wk68uMFDosZAo9T2wWRi3sj7GeUKtxbXtEwZC8V3loF8yQGEjxwOUpgYCh0c%2B5Obh7D4R3IGajLArXrmzQY8c8K%2B8vhRvNT9yPGl2O7eLue7JE8JsCBI1Qc9MBq3hFrCnaHEsPTFKeFiWRdvY7siqdmpEml%2Fn2M1yd0k6wRFpxwdA%2FzhhcWXIbsWzYcLiG0wrogEaCctOQ8LEFRs3jrGHlWOGPCqf6bFzjubi1a9xWmoUAELLIB1dimG%2B3rXQU0oUvATYo1UQgchjjCpg%2BK9BjqkAbk6kdYY1FgqLeItL3qV5TibLk2p8cbBP%2F17ST51YLRYZ5URKtwoQRM5uYJXty7CCgzlJ9DatSrXXJxPO8XL%2FDDKTT36APkcQUnnbkiq9TYAxmyRoqdfCn43xzr%2BhlSscQEfs4%2F9kLsZYqA%2F2ugRBkXkqBwMhs612VQFWdS6%2BseLVvUnZdjwMz5KMhaWpiVIcXjYGaxoR%2FM7xPvu41PHApd3eSTt&X-Amz-Signature=d5bcac9aef13b13fac5cde9b42fe905c644f1670bbcba1e5cf61ef4a2ea3ed48&X-Amz-SignedHeaders=host&x-id=GetObject)

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
