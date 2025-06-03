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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TMDHZCR%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCHw1yMat1uaykheU2GOxzPYo5OlItoTG1R3uvqXtt4TwIgJDZGPTWF%2FCxDPH02mirw2hOfVM1Xfo7cKvZl3SQkzYcq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDIuWRM2wx3DcRJpP8yrcA6EOZumtO67QVXN7Gm418MKspk%2BUja%2BvD3plYgcI6MXUi0ubqdOmWDow%2FNhSMOaPHiV0Nya87fM5Zkrt6RcgVxWFFGL66%2Fwv9McO3smexbWJHZUsJqKwdN38ad1eyHVwhQkcStkTheymNPiRqJl4CJ6NpNWSxTfd1PScIx%2BbDJyYBWZyQt8aIgmIAUlwDAUPwFRLyBwjzx5BgL10d4BD1%2B0x76VM%2F2HVjf4ACKAGU6TY%2FV63sIGcqvBYLqCVydAAFctg9nBHdH%2F9cu%2FHAbRkhxzJFm%2FZDGWr1xN%2BCIbzRavGgTPMRaaLH5QIGyqMeXR9ggC6oY31Z%2FpGWkZOSBIQqH7Z9G8iIkWgafUp78I05JMUYWzCuRQILMH%2BmjMkW8yRuoiyJMpjb4do8YYHPikaODoa2jkFYxLPBi94Z3O7Yn7oy6GKVno7zmFiWfaVyAKdkqj6Ce6k3Cse1CCds1VqKUNBZ8uv8jsITBDN6dtrWWhgRyxPNHnRZ4CuXSluQkutEpEU952FgBtmbXdlWe4Zf40VNZKaBRG6C5zhn5g0Mg5ZtXvPXxBHcjXHjiPG1eXcceeND2L1Bi31Yg6b4qnQwhOj%2Fu2RfiHg83AZ2gv8GxLFjfHPOBYhVJqrqDAiMPGs%2B8EGOqUB66c7ArDs1%2Ba345em%2FggLmEitZPg5T9t3X18yZxFXB0HBLT8yB12qknfRWN4He0e6JsDYkwwg1igCM7EGw8f9SAkdqZS1SH%2Fv6H3NIydX03GIT4Xy1c5%2FxJvchLwmt1RIl1eFt1u2EPuYHTwoUGT3v%2B0YTl2VA2UkTOOHTgruSFeV6dvlNXki9KtqS3NVutcPyHMxLPMd1hOUoLkJ55YrDovEYpsF&X-Amz-Signature=2935b11f874b7f47f736acba7f27667bc8f1be88032600d2a2d4ef57f015ca0e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
