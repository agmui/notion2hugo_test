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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WQD2LJ5%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIEA5%2F65ae5Y3d%2BB58j3OZ6LvzSxPJHv7c49uQ5Z3AJLaAiBFhI74PAuw%2BAb%2FLdh1lzt8bJ90VF0McLYgzm7aPRGiJCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTTh4fw%2B98RRaDTwDKtwD3bj4AWJ4xA0ou6kWengqDx9CQVqnq5NTjhg%2BkY%2BEkL8FilMk5LqBbBchwTw1bPbcSAAtag6WOCo%2F9lbbkwe7X3JEmyPn0Z3KdGpb5yBABgssSABlgS3vc8MceNHRYXCGJsQs%2FRXaHfr%2BwKTDQ3oNl5QRjOFasCJ07Erg24JFiF300o8DKQWMQ29bdylctpUmVS3HRTvAamzvmcA9SYM9onwUudmAk96qlM5zKJpTfOlR1nubIogWCpHltDqUc%2Fl%2FdubuHgC8GJ1VXaAevWKvk%2FruEKmzMfb1PcBCiUzTSxSu9bYyE6EA3L4Gxnr0K66Y4XfgtR4tr4Z22tR9npyuhumSitm9q76VLtnMW0ASJ2u2Q7favN5GRfKkPts3tSFl%2FMQBqLX0KyKrCtQYIhQWkYwo8RxCJPLyA1Ko2f2Qrsl9%2BbOlprppj6CuFixLftHHyxHVNRAH5o61peel8LBh%2BEaSUOwb2YtDgfDt8DSJ%2B%2BXdSKqszB0GS9Uw8Lgb2VIKThZcf3EE0ooJed31klfxNhtGi8tpp6lO9svV14bMaMWYqlEllyM8qD5x4ZZwQQd63qRzA2kdtRIvZwERuddPf42NmP%2F9qnkkpWHmvx9xZtl97YR5NHAvDnOGXHAwhMz%2FvgY6pgGGKkHo3%2BDpAj3YMIzHR0R3QYx6nJxu%2FAMuFwy%2BJIHT%2B%2BayGNjfYbmEyiAFQ6Zz5qVnzx9c4XBeIAMSRQm7ZUh7G%2F25gF%2Fr57CAmNI66IssYmFjfseqWLK%2B85tp3X9GT%2Bldps8Tw%2FVbfcH9aJuaVZF%2FPkMTp2SNvcGZj5kpcy1zY4O4S8Qh7nzE%2BZmgKgTucp1z6QXdkWVwsSl015mht%2BW%2F07zoLcVx&X-Amz-Signature=a10cce49e0ec79d3b31c689abcf6db6a01422555e1a616a6aff5320a36e37a4f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
