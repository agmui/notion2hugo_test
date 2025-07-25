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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZM2WLD6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCiWIxcAvofEjSSr%2BtaBfGv4yuwHjpFPdSN1yJfAq%2FKXAIhAPvtZJy6UOOyiOxzEgNx18fWGYMDFctHo0OXYB7MOogAKv8DCD8QABoMNjM3NDIzMTgzODA1IgzaIF3tk%2BCnWHFsYdcq3AOntWqBXp35jRY58G70XPaXJlnSneUpyZZgVcdaFhzI8VsJOhvFvuORJj5yQWdCGeZ9lOqUMjgqCKQRSi5pWDRMilFyIhbUBB4pDI0Tld9CeRIRvLafQATyLiREC4WCgEqhwg6CY%2BzEM7MeS2Ncw0NXxNhTWt6tEhuNrZ1yN0jKO%2Bb528ZcU3X7UKltU4zaXALGXS7K3Sb3TeEGpgh1xqi8yL5w5cX9ru8IpUXFweyFx4TUf7iLg4cUzaTPh3nfCaWzZIT4QI3OrrBLIGw051vIccox8EtYQeZqTy%2BlmsnxqqJVkHlZ6EdxWrbDvAZXnttzUJbyPkvKPx%2BnrNQ28f%2FIzMIp85D%2BzcxHAIJ8mYvc2SaqqO7ckUZ6uy8RPPgRgcmi%2FoXxIwsavH3MP5mYalqlPivfMi1bEkHnGfmSsInMqm%2BD3ZGblNmpC9xyWIRr0pTybS2ywwy7gW8I5pIBQKXsWjOMxyP3qrcCGAlzsaWUYJ%2BSeHR1jPL26XfmIzDLfeTquLoq8fUC982MnKTKCOvHS%2B%2B3ymdRCyoAamqXif9JQ%2BoiU1FyPQI0WiEbilerf3xQ39th0NVkwM7eaVWHoF9Dq4SH%2FJiUWeCXjiWfb08cv4kaQvrYOD2PhIDZkDDZwIzEBjqkAclTga667W%2BsRenrOdTGxUOVlMZ3bTZ%2BKgSsq9RcxPFxT0XgydgAYO%2B0FZ9LzTsbgUh9FWX40eGlttBvFLgIcEL6uUKSUtPGKvSMX4dOIjJhd7lL0vEHKXVylMhGmloE0gvT8GwirGpuhHt3LCXzvv%2B8BhdrgiocAs6CqXJPkSEh7apqfrvUkRnn9ibRfRD90IsJYK35WOn1oSNyIxf%2FLRDEvMVD&X-Amz-Signature=64d09d93b9315a5d297eff8b6f714b2effb6208692bf0ba64595b65944990b42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
