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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNH32WD5%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7mRqEHm9LBanOiYCEFdkurz63QcgXjJ4TB8uNB8pfYwIhAKJVi3V3Uy7YLWJo60R9T6MOWlrI9Ebq3abNp8aSvDveKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJ5SVi%2FYbVMA78ohIq3APTDDBk4hLQGDu8NVmwMd4TvaHSCEcID52rmYX6ugngtMKZ4ziZdfUe4ZdLTvxOpDIbmJxV%2B3pIYsD2%2FAuGg8mnvemmoYvYGVvdvAAQrLRb580755UoWYHA3CVId7NC6vpVAHdEd3E002s1QJWSJmaReD0QJAH1o0xkF%2FYWIHeXx7ABmOM8XP5bPsRNrRjA8WbYSeLjBv96An4b4udyV6K8ytJwws24k7AYmvx3lhUAK%2BJ8lqeGgT%2B7t9AJRaUNs4XkbiopvOKBrn1mvOm6LI2YpPr40MCJ%2F7rHiJmDDf5UzYGqR6TOXmXV03q0xkAp1FFzxx1ZLouzv1UAr8ZuAG8bkmWQSfkxiRCVW1ugkaDVGpq2YvzCSYtw%2FaEWuHnZ5zYuxibzIMxX1INx05K%2BntcJ7VZZbN3dij0%2FhJq5MAjwBBvFCT6krNFRefcDzoe314jopvX12JOCPbzX4xib8y%2Fy6kXcYBwGaZnEE6AJmvZAqfJ2hsdiFMfAaN9crQNXO8onY8LY9RWoFzhKKwY8SmBSo8Us0CJAi8opCm%2F%2FtmjkveharkOxmyz6%2FU5EYYW10MF6LesH55ouiAuy7mA3NJOcaEf4qhd8w4WPHrzK5alSzeq%2FeYeMk%2FtgTjBvRDDFsvq8BjqkAdY5f8on4s%2B85uGkvuupT%2BduAV6HiLW0jnuomLaiz3JlA7BN%2FBtly11Z7RqFAlbEFiHa9dXoPzk9eoWeZwstCMyU54sFXvyR6AmSeQ9VMULOfSCjxzP4NP0Om8YTCPTto%2FjLcvKgLGw9cFkfsONZKGBxBd%2BLk0UdUXjMl56Gx7kD%2BK9bcPhdOQRDP6Fa8USdybnENEoLIrtoNeHiyt7vacM%2Bt6UK&X-Amz-Signature=3c42805bf96f0da9b8c5b45c07587561f220ab1f75bbd7d8f664628b38afc971&X-Amz-SignedHeaders=host&x-id=GetObject)

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
