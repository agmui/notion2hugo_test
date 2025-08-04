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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSR4UEPR%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQD6VVzfd8a5nsrsRq8ttKQKBqhgC%2B7xS%2B%2BUixJYL7SkdQIgHEuwAO%2BsdxP1Bh5TrALjJaHcHbI3oARgRGgxQ%2Bi1Whsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDjkX0yLpCwRdygLWircA681HEilxKgFiAtkdgJPjFH6aslcUgGl3xPnQEkn15sJ7BdRIaVwdDG8gq2JsElwYvSV%2BnVvMaLLusPgsoU2BMYBUH1bHHwQQ1tjDRybsGVoYtI80kxXn560kDD3cyuvuegrwzhCaA%2BneFFclPubYiijarMXY6yWMGVctdGeFMV0MhuOLagB9Uawuf2NEahpYGa4vpmqzNGfAuOUktDnML3Dh7ikTrRTptx9ESn8aRYWQZYM4vjjmJy0jlNNRpWqtez5xoXYlp8fkLWKrgRCz8aDm8ev%2BS8EiJLdQMv2qNfYa5Z9hNbLr8CkggfDPQudfMvFS6AWXVpAKSzn4FYTiFpBHGnvzZp8guHjDwfWGVh6eVgc1ndhnRrVgdcgtd2rsWNsGh2JyK8fLLUQb9CxcBrH7uzhSAmgdMtIsmaepEHRDhiB2v9Fgd8pS6j8o22iaSarf8vGD3BCQnUOdAzFtYpX280GFkq7BbbVzbCkJQJTMw2YkMAGJsAMogfVNnwruluEYptc2QKV9e7lEpy2t7%2B9JVmx5VRd8sz4wiwZ9Wk3hXyi%2Fe3%2BK6ZeZ%2F8nRyJD9%2FM5idbQIk4dgUopXxpp%2FArD5GP9ScRutXY4psdoA%2BnBzZTQ8eHBdNBsZa7uMKXOw8QGOqUB6zq%2FDKw%2BgXJqA2Q%2F9ThCFWWC%2B%2FKochK%2FcOdMifbCrrXMW8xZXy73lC%2FQ2JaOrE2FheKlOQ2eSBYU0Cj%2BK6YD6QaLs3rOn7z04DObotG4f8WEwWv42H6J6BWebaskGvHHdKDz2EuARcOD9CSYEmJFVpGPuYcrQ0CWfVhRQOKZC4qIqtxK9DkclTQZvgx7SQZpw8ntzGi6mlnFxk1ywLv%2BiQcCeAic&X-Amz-Signature=6ff984ff36ed234092994d296cf7404f0db10687f21d95ab6f011d822276bd6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
