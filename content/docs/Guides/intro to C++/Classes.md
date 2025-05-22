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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C2C7GDV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAVMteaFn4blUU98oc8NQQrQyaQzMyB9bQrJxrmuhEKCAiAsK3RuSkzTHYR6%2FTR6vst2x6HCE1JdgfEBWdgi4CdKLiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTmQ30ICIzEFMYvfVKtwDf50ba7f%2FBdMKonlypUyD%2F6LOp2TcUEwAbxziWuH0bz8CpPAa3hoiCLf6RPan2ipb%2F1u86Obl5RRwsJQ1wULvIDUJKM0ehpwIguA58W933TzbZTl2JtktfGHlz1vXA8xl7Jd4rUsjZHSDO7jnUGVwsfZLhuKD4dMHcj13Pq2LLivzbbdE8voaptnwjmVE%2BaEheKOjIglSNiUMSuLXUei6GNfD5PzqgvypV%2BbGqurfnpTQAHl7OjRkrQI0BFcBvGWUd%2Bmh2MT3ZKWpQqTn2reSaYpxPDbVMH7hWvELL9YRYIlgnpEhUTrt%2FfV2Dda%2Fc0aFRRLauL4Sh3aUv6BBEO7kZJFb1UXu5lvpBejsUCRU4C2KX7praCYO7dSX%2BeLxENawJHymjpEITf9NAHoIsgz7k33fRSbBkJ6nh8fA8eLNRXCCMANmFyphqsWn34XgF%2FO5567qs5U1KnjGmRaTG1leLP3Bt1P9Ud1Iff7zG9Ycn%2Fto%2FULxkyijMMAWuEPyM2io%2BXMfX7PL%2BSCPOZFsO5qdMkaYcfuxBZtm%2F43NApr6ayODitNGnxqKpVKnZhLASTBPlVC9bH8qYmcI55PwvLfY9wcw%2F7LQNNYN9LJGk4vuF7LIHWfIS3ECjrb1QAswpuK8wQY6pgHI07%2FXW%2Foh3M0SmRsWXJ2G1SlbcEW%2FkdjqLNl1CXUPMbZI98FywuBZN6Hu4ihq5GwJV5eJj7Fa9yjNcQfG672SSoDgrpPps4dKdZE%2F%2BvJ102Db26vVLG2faiuCPnoxOJud1LWPCmY4nIi0nCTHKXzpIP%2Fgb8ZDfoThdjc9eSXW8PwIvubGmquxZsA%2BKh5hOopNQ%2BOHfvz5lxSdZq6JXQ7a3cr01hCy&X-Amz-Signature=cfbc9cc181c8a8c8ebee956199aca88ba362272aae350a75e0f406be843dd77c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
