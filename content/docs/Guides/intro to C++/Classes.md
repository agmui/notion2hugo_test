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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HE4RH4U%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDprk2cmH7c4eWlCiQqK3HlgFFnA9eYKQejNE0BskZmpAiEAup7Ns%2BQ0OYnEtX3xucAcTL1M0WI7YO8MZW%2BbLzjdgOIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAP9zEwrMjFUgi3oyrcA8Yfuw5LntvhM8VB65GcFLRbyZ0QxadvW5ZrB0zZw2JiqDtabGHD7Aot%2BH%2BEfZIjsid9REUEQ2p3IpOzsHum4ZIGr7XbNQTn1Ck3kbWEY3qubK9P8L3BWeDGqm3DSJL5iQsaU6P%2FRVXH6F1UKFOGhBCcDrblDW8J50aND4cg%2BDvLLgeO%2BQyQ3kwNlc9WSnQ4rIZ54OxWHh7h7bvsKLNWaJxMbwX1gvXVsahnAeVYtjbQ3oKiWqzZ4lZAlNfi0779O9T82CPyyF%2FaZ6oNl7UDjJFQ6Nr0%2Bz0twm%2BKwB7D%2By8oqAf77czgpTh5nU1qh7pJXsF%2Fymp6I9SLPy%2Fdlbb%2BFWAPm6IN47ZhW7hamc%2FXqecLz2Z1AboHXCw%2BiwQ6nd3t%2Bw1qypdlDVfurhNqvaOHnXmEl%2Fa4Apg1IbeSYafG7%2FDotBghBzHIG88gM6C0Q%2BzbUQ8b45X5ofzzaZnv7QISWjZnNmWzBrhmfSd6PmUgUGHj77YSpG94MJtcv7ze3bEFqHyElanzu9w59VnscuCYehCZN8wtoGFK%2B4S%2B56FXlaopLzqVTwAfgpUSZkLgTOxq6jFt9cFXXTzLG73mpO1ug6VZP9FUCKyHgjUeY0aobMRdwCt7V1zcv%2FW52FapMNralr4GOqUBpH8jIMS4sR4fYEKP7INb89fJwfHMsCO0KX0cjeVZPHZSxJUhwhg7vvjCKUoLZy75rxSTYvAWbS%2Fvi%2BcsNAZ8vTpibdnYCRHkhMavFLCU0BfvvmZHKLgjb1qxd0%2B8%2FHOTeLADIKV2gb4R1Oz5WurE2ByDinmPXhDM2rcacbBsrBlcH2%2BA8c%2F4EhN1DacMYfcxqD3iffEVXnlDY5gxJdUrLojHh%2B%2F3&X-Amz-Signature=79b6d242775486037644d36891960a444150ff3abb326c34dd3e449756502a7c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
