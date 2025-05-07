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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4XMPO22%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7PG1EDX0EGJQ0Z6Ia%2B53vp0Imk3nNt5wpkq%2B%2BPRWQAgIhALRg%2Fa140MdDXexai%2Bva%2F6K0yiiTIuVuQCAEoYkPM4vpKv8DCFoQABoMNjM3NDIzMTgzODA1IgyscuPt%2Fw74pbVjiQgq3AO7ghEZyHXO89eY6r81rRTuHjKH15fDlrELZ3Nlp7l31I%2BEKC%2FbgYsG6Do1yTknt%2BAT0HBCtZ7eBIXo4zPpTqQ3CjvbBsGR6lRT6hhlpGQg2pBiN17nRooMqsRXFnyjjf17TqA0bt%2Bax0kuLyJcEOwiYqIdwsKm0wPDdqArp%2FLIBK2iwuuiOVM2dk6XX%2FBs5H961eHLa19YeWZZRPAuq%2B5TUXs0E8JKXXnBWyqYoeXKAkQdVa1E2FL6Mt4LxnNX0gnmQaM%2Bexg%2BFaRSEwJXeiiPuy5HvpDgfv3r8MF3FuNfI1byqsJkl6HWc71OVC0uQSCd4BntcJtYeX8BvCVrBSt%2FqUlVLnPtMCWx0kJTgmg7gmOYe94Is3amjYXkYp71U4cUFSs%2Ft%2F7HC2MDsoy18kLrzj1lsJDu8IG%2FDMSro93kAELIyqV%2FxyASbmwkjG96CnwaVtxvZhZTHx%2FtzieDeI3SkG7pmBT8do%2Fo7viwYIsCtjgWik9TUSLl2lPtx6K48wut%2ByXGb1DqKKc4GO5X2TxpOjtJjmeCrAZ2G6kFqiehKyovgwwmHCqXNe3jKj1whYASCo3Gss0OBruNSKTNre8HswDfd5sqSSGONO%2Fboo0zZJtu73L36j3Na3QGuTD0sezABjqkAdn1F%2BQqZKgd%2BHtMRPJ9bETVsV%2FG7mHYEYiL5d8H1FZ5w8nYoLiFB%2F5GdyGc83rhGfaWPbsW7%2BplpjPURa5LkOBrnjINgnClsGTFqNL2ji8L81h8rTtEH22w3CPxL%2FnINAN34jd233KXmjaE1NP8u43cK930TImMrTGomW3%2F1HfCkWTclr2vdMCj1VVJeGIs%2BiLjGhZdlhmNHyoEsVrVbC7Ebd0s&X-Amz-Signature=a012824b1cd1c262b46818ebf6c4f867990a86d10c3e23c10b7c8aed4313390d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
