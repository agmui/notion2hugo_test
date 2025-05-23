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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJAJ4TIL%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQC5QaLknSqm7SmceaTk6q0uI1OW0ofN7n%2Bj4MZCofBRLAIgXLCsHhalWDTeK8KjcyZE09XGBEBlX4bUrW379HydO2gqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJE7DPS18%2BfYdsw0ESrcAzV7gX2SxXsJ8kATC8577kkuQ5wNb4cnMeepWSG%2Fk6uTjwMzb9blN%2BhBP4c2Xd6KI3Jajei%2F30tnkB2IIUVzr5IZyI2yKUypgpP9UgWe6b%2FgCPSSYmrirhpFltnOsLV98vLqBXfdnw5S6Cwwbp%2FIeDGudWL6jHnur%2F%2Fjaw9n8XL7%2F40HtE1KimmHVZuke3CM7lJsxpg%2BObJa2jYikd9m%2B7kxiGEtni92iMK7n5ei61zVqpxagGU5Tg4Lp%2BG9gzcwxfZ192ociE%2F8OOzeXuO%2FKmfa1eNCaFBxoPJ%2Fqij%2BsVhfNwAvMZEGSEURT2olfgQhnJWO9%2Bg%2BxQV9FrBcKrxso089gFEMeJANcS5ZuaejFKXVyV6SVUJNJr3ywOBolHKeyQuprVEZ4ZpisnWDF2QkZha782FlZAvdiLSMIY4SZ7tWMdDbqQF7%2B%2F47DXPZHDpSToOB9xFrTqYYfPkOZpKLttzfpqptElK6jCM9I0ZLBURD4lB3kVuibChb4Y%2B7iiwkM4iLlclx8hZMf5MFO%2BQXhcXoLGX3oMVG%2Fhg2xXwTXc6Cq9Z%2Fx34GstECMxHFX%2B9Mem5OR8xZoumJ70e7tW5flDmnd7AgyTcgMmMsoZjx%2Bn25EWMYW9dDQUdQxfq6MNjCv8EGOqUBy0omDIgu5MZLF1u3ZNPqMiRllidz9JiPbpebg6tzjKuFn4fJUW4UKVxLQSiVrDmkw2irKarWnSs9AUEJ6HRBegHbPC%2FSZeK7OVIjiNM%2F5y962PnLo%2FAUOGgDe%2FRpCIn%2FGQ7Gbc0BdKc7Oo4qsNlDlRh0AVGrDe2Kelrl%2FgaBFl%2B5vlDgK96tFl9c0dbE7mQIyHmcBiGrmLAspFX8%2BCr39I4w5GXP&X-Amz-Signature=b3107eecf32791878c65fe04abeee37a73b7ec059e4531cabfc033b0bfec5805&X-Amz-SignedHeaders=host&x-id=GetObject)

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
