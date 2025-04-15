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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFQYPN5B%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyyFMOavgL9pof9tOwQd5%2FbdaWYeos7zxJi1fUapX42wIhANS3do4SvlvJJUkOyKkOF99JwulDunoalPSPXCrd5QUcKv8DCCoQABoMNjM3NDIzMTgzODA1Igwm7MYJTRc9CJet4scq3AOEUQxtl83HK7MAFPHB5g2a%2FkqamoJWpWS4gPmW8a2GUhGvJHxkWs4yC2%2FQyFfkAnBMrbjC1TGl1sNv36FWKtzIxQo3SAxdtqQEX%2Bdb%2FVoLa2ywtB5Y5AFjb3auLJsZNMxKapM04RBgd%2Fzfdp%2BznnIHzSHoa80dXkLIJp1IL18NwECMyh6szOVCd%2BmKR6X8ONGa5Tj3prJVpaEDYNt3t8ZDtjBsVrD01VH46dx8ECcG6xpSKaic55K6dqylTYLNy%2BfrPzcTEti9KKpEfkoy2tz9BaX6zZrJSlihJ6iMb0jJcXoMBG%2ByWJdd7bCElMPbBd1sukWBMnf1sAuz2dBbLC5GBs2mUXgKz2%2BZKUELsdo%2BOTbWqveaIYm3PZvoCNOUlRPLHccFyPvf0YVEVvMfnzYyiConSAHIVy09dML0krTtPlShebixv9CwdW1wqV5g8yB%2FJ%2BO6hD%2FcXD3SwXCptF%2FeqrWnsD1Ym1J7Twf308NC7odakWDKfHBd%2B0Xcq4dHt4NwK0jQ5GUwKRQPP3yPO7EgcIt%2Bb5sJa%2BxIMySsG0pvQG3wsGWvN1lnBzXhFi4A5GBO0XsXD3H9HWKIUKbu%2BtJdhxVmikj3I%2BHuJ1PAcggeIn%2BIEiWT8a5XfxHCkjDNtvi%2FBjqkARcDpqBsPHa4JXdXffYLK9GdMOEe973VNZQcmXd7WKV0avRQLBK4wFRH%2B0FWzIdCFLq0tFUvQqrvGsv8suLmZoJrxLcMzjwBmPmpEhLMnVCdRoU8eJ1dkDyzMS4q3N7Lx7N%2BcGa4kAzU3HkYzMrWbRI3RqB%2FoDsAAzoNpCiqCqGnytHp2%2BV7LViqq3JADURJ8RsTGi77c%2BccDbseUHfzVX%2FTF5uz&X-Amz-Signature=9cafca96870bc08c273a4842e98e1061945e508575345c07860111784c2b8f98&X-Amz-SignedHeaders=host&x-id=GetObject)

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
