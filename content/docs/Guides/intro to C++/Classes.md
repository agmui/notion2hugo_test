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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSZ6HU6R%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPXja3GmdYaSod80Zn87Tde5QhtIzRJFYRbsxk73%2BghAiEAjogF7%2FJDiJ47eCvDp9kZt16kr0r5%2B2u8McssU9Gi5kIqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2BtLUvgvaQnbXnPrSrcA%2BfmR5wbPpbQwHedLEtwuMiSdKp%2FriI5W7ZuhuEdsF1d%2FQMvn5ma%2B8HnwL3%2Fq5YbYkmwNej5%2BNYqYOanKr5YR7z9bZqiDq2ufWw3loj586spJnDPxatLR6GGwvobwrfxJhfZt%2BZVrQxM5oO8iK6qaKgqJ9aAGpxiLfxAc2c%2BHSIJ7JsiD1yiK1CBRXWh2UpeacEupO8GQuPjVEi9rfOJRJWnQkuTlj%2FPsYkr4pH82WuTD3KeAt%2BZDaUY8cD%2BuP%2BPlL%2FlilUCXCoNldRTllErzrXtY5gkWZuWaOAGu2yFbEbIkU%2BZS5Z8apyAU4NdJsup6l%2BiDrAuMn7J7QUw4xBj05ufKJBW1TuzZ%2B3a7YTwvEwGti7z6X2hq4PFZIi0ujpVoMJeB6AkixLQ8xV7yOWjiWOxhvdA3Wx%2F5u%2BJ0G46sBJORs6Dty6hqv4AjxhiuboJGF5%2F3OTBZglulvGqTw8g%2ByxEXewTxwc8yXmCf1VuNgEtjW%2B4KoXmLcrhUX5mvMLwUCbznfSZ2CIsb88Gz5PHlqNQaM04hUK5%2Flq%2Bx91NWTI64eO2LibY%2BhtzTwHlgcrykXstyYYf%2FgYDec3Oy4Z6HYecLxCL%2BVzBKU%2FpyCLjOMioWoOu9aYYN0Xl9m7AMMy3pcIGOqUB7moWem4i4%2By9VCv81KNw8tl1zV92dTKdekc6qapS3EA30CONE7H%2BB7LJKY0FibWhPW6DwI0Xek5cvJIxMZ0ne9uNoHHi6j6DbqPrN8Q2LKVDq7ZCPgPGYhhO0LekvVRJHEBfAFoeldBC00UduonaqYQoGMXkpWubdNmQdOd%2FXnMCOyIZGQ7WTc5p8RkOXrUyWPihnRfZreKffGKMpRBe0xqK7eOC&X-Amz-Signature=5b2d70edca05b5003d072f12d49501562613ec56ef72d6462e466620f6cf8671&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
