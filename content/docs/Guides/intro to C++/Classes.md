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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVS7K73H%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzC3Rn1niUQgtTB835nxiJV4iO%2BdaPCImq47unZ897HAiBvNHPgpo0SI5Wbv6lVYgQykh%2F%2BEPsC8kwgmDwvXUf5Sir%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMjCQ7%2B%2BXD9mCb4E2RKtwDkFIVNRCDMJkNv%2FZ%2FDFmCCOJzDzd4nvd8BTFtDX5Ga4k1hjOMnMcKeIS8u30GDoYuYZR%2Bj2jVye8oKFolzq3bI4iQM8h%2F21Vl%2BAXjI2WcKzxw3Mokvi6yPRmiuiAoPMuOzzkDI99JneYgEJv1B8QTGAeYg42dR%2FA8GxjICHq%2F8Jkjr%2FJ1Dh5eqwyWBA%2Bax2H8A97prpqPwWlgYqbYbM9ib%2F4o2EyUhpTCrWNPVFA5Wod3gtmXA5YJhHjvhGOby7yDKnPhnVuGZXm%2FTLs2x2AFx9ID7A665n4eCVBZSiOc9Hy1O4VZ5H8uqW1%2BuKnJGoA90kYGLls9F7xPAiMpiH3sVeS38wvSKGpF2O7LJgEPYnxYicxz%2B9w837iJ1BhwnGro5M1jBJUzBKFdcLQcpT3QUofoDcr5Px1u%2F0Ma45yG6GytI0mBInMoKst9MqCNWNv4bub3lXmxX8zcMRAL5pbUYLWrmTXg%2Bhc%2BweurOVFozohcLevtGgjZUtxh27%2BAUDruxFbR%2B8%2FZjSosC2MTMx0vq7O%2FdcI0ZCpB9VqCyFZexmZ7kj%2FTlZHtAiv2vPCSQZ65DDZBXVoo05TqXSYt4MH%2FR1eo1mB%2BwHKrcjL89%2FJIGZufsoWnTbZuv9dFVzcwyKK7wAY6pgHwIFTCfrkmNQUNps6LPxCrcUurka0kj7Xhwr2KqGm4ynbvPyoK9j3jIz06fLTrBgdkAGuXPYeSD4YiJZtjXueW5%2BwOPisAvqQJZ3OWKU0Dtvo%2BTd6%2FhvNtfbSRpej4dfH7%2FkJy9JSoG9qCV8YqYHMu6fT29ngMWu4MXNgYgl9UvFFzFf7qGQal7IisYgmF7EBI7iERhLheemNpEbvUDlw5x5pyTpiE&X-Amz-Signature=f309c32f90de83c23c4d1289237c9dcec1cba6e7df9697cbd88d31bc4f54433c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
