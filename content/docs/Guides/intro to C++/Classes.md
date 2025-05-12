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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T46QTGGI%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIFWzTMkbtuAn5YeJz2PnEfHYPij7wwlNVhzIl0exIAi1AiAvkIut4q%2BFlpbc7b%2BJ9VlMqI928%2FYyEiZi33lFjc3pISqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOUUkIrfW5hMjzXPrKtwDZqy8ZrAHWRWI3%2Fxt27QabHCyc9tYJmJh4%2BEILm%2BKRd9vSFyb4%2FZ6RrMubcp4iIf4q2SpEgRXSJ4nROvTUbRjWwTPrGo7%2BN8Wz1gPJeJBQ%2B43cTR2VbNHW96poKuXr3GHlX81e5MZm%2B37LrHFwbR3iK6O%2FK2E4POHrn8%2F35m94MxlqwM6QrflnT4rcfbva%2B7wgg6apr2x4tgCVjVa6bVbPOPJKy23XcZbVKPiZqN0%2FskfE0kQrd7EF9lSesdvOGvgZtTNpM%2BY8A4qprindSbS2Kvn2N8zOzMdZ5nwQ2rZARJmjFwNtjuGdNS6s7qBU0Z6N%2B3uYLBdHHkFqgweX5R16DX3x3FeZxSoAvOZfV03Y19zypi8uZL4gtQQt0G4vZ84ehO5Q1S%2F0vzgNtbnNyHrobZNMOeDpufsoXZGJnaEqaAsdQxv17%2BmzjIPRS81yLqHJZ9QVH0IVYpwsDUb2nZwEdWiewaF8Mu2T%2BaQ7BBMi6b9sD4qgFNBxx85LQht%2FcFyDgb6%2BrbTQu3bX8fVp3q0OgKBdx0BiRVBZDQQKWTpzN1IYmyNnqx%2FSltZlIi5QqfnDN2E1DYq0x2QLZ2RDVlkQkdKhlSzovlWz5nNsG5ih2glEAvrQOiirxJql%2F0wmYWGwQY6pgGL6bMGExm4nynDrnv6rj5sysJ7cDEyjs%2Bsk9pwG%2FdXRcsUfcGEiEUauE79AL3vwNNxMRVnlCLRg13kbTR48%2BLzN32RbRmt2kK5eKdLltibGlcUPCC4PP3xKYPRwwr6B6IbJHfRmcHESwFJ21Uv%2FcTN6iNyEQS%2B2UNkpH2zVoiG8DTelxaHfdEeifIuFDp2T3c0ac6AGO%2BsAm4vZP1HmMWSIpX9E9nF&X-Amz-Signature=67129ab8f4557f37051048d51cdc7b315147e377a7c3c7f7046866bc4148dd91&X-Amz-SignedHeaders=host&x-id=GetObject)

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
