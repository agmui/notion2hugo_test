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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OGEOEBL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDiGuKl9jTcZGPA8gjpuWpFUrjgOby5LDKv%2BdXkV%2FxZowIhAJkL7LIXuRjlQ2EQhPE8vGhN4N%2B4Y2qnS4t8BevppvVcKv8DCGMQABoMNjM3NDIzMTgzODA1Igy%2BK4wH1gw1tyTG7gUq3AODY4vSx55OLaxr6qbEj%2FHjqeSaQxLcbvRoAA9B2%2FI4L4fgtD6oE%2BMTuwfet4PHKriiRSlHeK22gQYPocLD2%2Bzx2udY9hC%2FV9NpC2M3Q%2BIjmfi9GcFYFHr69O9X6pg8hs9rNVZW1iAnB5ArHlf5K3D8tBHrR3S5xYwofSMuO0c4Qt89aIT5ItwnnS2aH6E9LRLc3rhQlGKZJt2ZWtRvJvPIwIJJy76EQKr%2FVvWjprVmtdoWEODQMdm3UI4KieAcEGBDEOHbvTNqBx4K3wIFvAUXP%2FcVkRGwIZT5oSqpF2GgW50q%2FncT6R4BMHElTlnOtLZA7TkJkL1D1qn9pFS5gf1%2B9%2BOEgQoNmNaGBNCYIQxzrFrXyUFtRMJ2CN0vIZUcQzmqn1dlxOXWTeSc9TPNYcDoWjExIPizu42eSkojVPaZgn3cOTX5zsQ2r48JYCf24FKw4UwnIC9Ek10VfcV%2FPfkdISW59pbMqJQpBJBYqugrACTVAHcnYP33uclLkd9VUzY69x5If7Zkb1nly6Sg8NFjzLHOhF9c7WqwKTxV22%2FlTY7tJDhOJGS1tC6hUfEqK18f2qJKk0AqPbGIOjYAArvTOPpY4pGykNUslfb%2Bwtm80EV8RrusICihAoWWPTD12v3EBjqkATGvUnfwGJ6HHP1zZSTPZwNLjA%2FW%2BKPYnjVNRGM0HXltFxvwVlArn47tuCpkJtyHv9vIF4MWgx%2BC%2BKqajJqhXUPeAHVC56RUmbNJlce2dSJ9TzJWHfzXSKjayi6hb2SswyE2EEBHzsFTDA7thP3U%2F0hxi9w7vtsdcpICGwFDKbutDgWli3sF59ON%2BlxAQr2ZbTSS3Wz9aCJyq5ICX7ECfMS8oNND&X-Amz-Signature=29ce51b657fa65626ca5eb8bfc77c371794afc46823826e7f624296233dac2a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
