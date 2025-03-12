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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXZJWFRE%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T181114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIHRIk9GkZT0QIg6HDOffUKoXn87RfHWXOsK1utTAsCdOAiArdATOhNW56IM2jtYAjPbUvPwOb5sSRxxNHjtEaDBWfyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCpEA9s8Qoz9fMjKfKtwDCBpCh5iJt12gxKD5fbCsuGeJQmgqFQq4S%2FRsAO5U8tZ%2BrEhLDwBjirrh0e%2B5FJUAmQmDd0FjHCHGKg%2FcsbCyE95KV%2FWMzYGUCcXEVJgUJLmgkmufsAc9sdTLq5u%2FepaFDQfSlEr2rmYGNzqqeuMFwxZCGWWNAlUpcYFlTlJKVz%2FbwpJl9h0DeoS3pz7uMNsNXGg8XISLZWG4%2BjsU8hFQ82EtgRPpwyJ6Tzdyae6aocyI0x%2BJCR0xylpcv%2Fs0AFG77F1XSFl7sob6TlLGiYUf3Uy5ST34bKcY8CLn2MjUIiN7F7hek%2Bb3HYxHi6FWu9KodQkekC2u%2FXIWb7e5cpOavfWnWM9UPMhfXc4ffgpGJHpf1%2FlJ1nTPXH1adMlJqJd6O23n5mfIU%2FIerzi%2BDdRU%2BVcLo4dEVzs46YNyb3kpAnNr5LY1aRTJ15G2vQCcBRdmlYYQvbwi8fO0unths1aXeShjEA6E7fnsf%2BjAETv6hCWiXurjz14PTABzfi%2BFp8fGxqFE3R7g4rjbDuA5rTVELcwdhDkCavV21u%2FLY7wVb3WKFJnRSqyxXNfRWPciU4VKbsM3RuLh55jzWhHxlz17QGCOpx23Lu%2FJ3IfwVF9Y1BHIQIwMzbmwYMxk%2B2IwzIDHvgY6pgGWCNKqDxCvC9zKEAG%2BLsFZ%2FuxfZoDvqNC%2FJ4gJAv9HXAIEbsK4Y8DU77hEds2wCnZYF%2FK6TP%2B0vIoytK5vqdWjxDDnK4FJ%2BlGzVB7kRcMGccmegPeL7JOqfOBWHPKWIjrknCMfDt29xNKLcKVliCdXzaSs7aHg2PiGh5R0V0a1nSDL2OJPMIquYZA%2FeTjkh2E3tKxWItbZTydC4Q0e8WZjX%2FQ9Bur7&X-Amz-Signature=87a7ffc418bba46ac9815fdce0817bfdbfd443531a65275c8ed03e05f95d7382&X-Amz-SignedHeaders=host&x-id=GetObject)

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
