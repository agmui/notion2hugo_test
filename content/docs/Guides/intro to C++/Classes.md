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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J4P72FV%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiQxqOZiOzne9k35Evid9oNHLmdNGVdiHI31A2eTSmPAiAl%2FXUya9S6zQ2dBo8Ol57e%2FutMLsDLtzczfh4IbeMpDCr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIM1RVj8TROchvYToO2KtwD1hieX5oNmda073uXYWA%2BzXN2Rj%2B7kq161zOwU%2FBCKTWg6AQkmH3EHrxvJ8TJZNYy5VCuH%2FxKcdrtb2oQ0VKQE1ozMfMDQNLrMAFNXsp3hDVjpYhfcyjS0%2FrDstMPXhhbCZ9QV7K86LwgWUjlti1zCksuzkdZdBnloMRGoJ8Louqw3BBIItfhs5kSRjzxVa5fD8OhXX%2BStRF%2BCDVfZa%2Fl%2BYC1DmPZch%2FyMJZSml9JNPJjesFVZo1LIrswnC2h1Rr1VhenCYHEeJ00RgeE5KoNP%2BwrD1KxNzmVuI%2FII48oPhAdMYN5ayQVZB4TmPEGGhua3ZUSHK67tCUVdOEH1AfvoBGeYAlnEs5pEtv3nDOPa5sLKXWaEdH1VA%2FG4vYpCT379yDg5CaqGH6HrCxwJeJgyUpGGlUkDrTqFtmfSGLw%2FFvU8qqyuRP%2B7HZac2tNzIOCAHUY4r9oEnu8toGSjoRr%2F5UKFeMKbrJAghy9gg3t4jKF5z6yGz0tUQqzjqHIdCEb1bc%2FeqK6gKKEZYnKp6%2BLJIaAGobH2G1PREh1YRaTdRg96ipoeySTvgQo%2Fzy5YYlwm4d7zGmigZZzU%2BB161q33IlfrwJkkrbXtOuhDiJEfiVyT4sLSkrvtqsXyyUwloe3vQY6pgF4RoZPrfjdXgwTqjruTTyCj53tMw2B4j2Zeobm1NNXPbRuQPV%2F3mG40RNrhwPZ6ic0IH2HBeEiH%2FI4BZZqySAZFOIY8o1PDulJqWq0S8nIrsODZUGezXpnA%2B6wWhmU2OvVup1xc42mx3AYr%2FnfRiRBM8DOxa6HSaON58KHNMH0WIuKNl1PB4OSlMBiVykvSSJl4hxlVxXDQjzTixt4XLWeFI9TIEjh&X-Amz-Signature=60fd91456ef6e6132bccc29cbd222df864c811eae1cba646516bcde2c4702d17&X-Amz-SignedHeaders=host&x-id=GetObject)

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
