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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDCM6GBJ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCICYhS8ylOvVpg5XYvDKaN9Hw0pGk%2FCoHMoj6SR1vsOCMAiEAyeOvhafHXQz9BniCKfgxeIhGRC6zB%2Fs7ct6Usgba%2Fx4q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDE%2BKs2MNTBG1A5W8rircA5QeH14NCzDDQm4z1swHU%2FVZYYShVjeS1BIiysMmh%2FDxvKcPmzeSDEZ5m3cPwx%2BUOgU4929ge18NLrfQX44BxoZSeWlQCZh6FyHr929rUy2hPMqkz12ESxDln6yrbA9dDzFgKxwBsfZ7la6yhmceHz2BpTxfe%2FVrABTRlWyq3foV8ndyna7C%2BCRa74yrSB61HcNZ9kIOc2YggMHSsq29JAvcvwDgeNCR4jtF2cjqHT93w%2FEq9T4t06PQgjDdQpNzGGgwxnKk1bOd0FuexjuDGJuL3%2F2kmsGqs4yFXLH4TJNY3kyRKYg3jZv3%2BWAiR8eEkB%2BXGGH2TJQnoe8nZ03U3jSnOpKqn3E7EiSf1%2FvV2kLOnWwSdY42gk4wkgc%2FiiXU5Z7vgsTyrgXBKqnfftQaggt8ZYKZxMqniazDS%2B%2FoU9E5Q1qME1XP88HkGAL8rrkdXMNXZQcSay5MYA1f4s5%2F2vsTiiGnsQszal1PI8JyM0I5enl%2B58jh5YvQUDF2zaX1b1TQHDpkPFX4MIPsA4JmSDQGB7FCp4t4KSy4nUyFmOrxN4%2BCwcFI0O2smj8Ekjzx78V6qm%2BvV7TvER4gZAUXMWqN%2Bqg0aoiIM%2FRZR5c4srHi2BbC97zyk34XG7bJMMHB1r8GOqUBx58ekmB4BHlPRAjKJUt3fdnSVD9hQaXxEngyUbr%2FjVFJMEuYEcP9%2FMLwsAV0oiI9cFo8hOjZl1aiXYbPL9mf0hpqm%2BEvJDW%2BJbVw9znU2WzPXIGB1je8ISVfT2RJ9tCXNQ8uveq87EmoVoWj2Q5vCTW2KxnHQSbG849gpnB7xnGDvgQU%2BEeJfdFu7yznnMFsIbBWTSnX2ndXQCpUll8AnEOpDee4&X-Amz-Signature=3259624d952e5b1d46420f70f1c994b77e627d9c85a98cc0001cdc653fdcb7c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
