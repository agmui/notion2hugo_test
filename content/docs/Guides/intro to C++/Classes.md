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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R67K6VVH%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T070713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEkcYhJwLaVVXNpObmuT65S0V2yKsvgjBPmkGdZGPYCvAiBJwgra7wJGYITUC0zfoFLN%2BQEdIBcXYbetfGQNikg1ZSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8EuXKPrsAz0wUmabKtwDYVWh0lc9l08TTNaQwvQJVxGEjp%2F6x87jOeASz6Ak1HKGv%2BgwZ93d2x9fQb57Y0%2FPs8GPjlJsChFjlnDgEF%2BG3lmt%2BS46EkTmAT8Ce0K8FWs5HPjO%2BRThwfHIjAF47DtLcS65w9TpoRgpCWy0mYEw7FOYtZCbf53z6Qph3Q0FhGUuF%2BoRNVKV9loIg6D%2FQJDpKmx3uCIawqnOBUmabnakbVymT6u2dO%2FT3PVAfAE5tuMnOsgEijrsEanoXauijishWTa7IdiOnD7Mb4pqyzpiy0dsnCzhBLZ2o0et%2BWr2ifBRTUf3Z%2F0DYtpYcdPZq5kgg%2F6qq9sjqG1KJKTVg66JZDysfnyjsH6LvLj7kkbLT6kVsUVJY79AaVJpfWbC%2Bp%2BF9%2FW9YWDU4lAogTbM4i0r5KVcwFhO%2FOx9K4gPSOIF7PNJIOvJHl0IZfw0H%2FJ5PAe5R1tinPLtzt9gT2ntf5Qq22OxgA0klLIm%2BW9hPdtajjorZl44yIZuEDicwpARL8CD%2FaxAhiEwhizZ2%2B1ixDx3dbe2%2BUEI39XibqW2yHsc4n1uXiXRFiV2r1CZCVE3ItErgnYvuOGiKp16SPnTUz79y0JLYfcgrdjiXqDnHzk67BlAoDocBiiKO1gPHwMwp6r5vgY6pgEv%2BcttZTb9juFY5X8%2BUXFx5ODWsmKgNAFgOg41KgSTQXrZHlTs%2FD7hRE7NSE57XM6EpQcineWtxWeOuPNiyNNW0yIwbDCi5OJooIv1X%2B%2BYJbyGIhrkIWXS6niqm4PDiKDE4sLEFhHiKyPSYgKjT%2Bd2yNKajar0JjxFs9zrz%2FVl11eAowrVodcBEHpxaCsu2O1CFHxfha4t%2Blexd3RVV0W4egXwB8WP&X-Amz-Signature=c1f263e4514f73e07c2a9df31d4c2f3925b52b2ea6f3db08f77dfb621fb9c5e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
