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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYNKGFQ4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T121542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUFQAPBrx1R%2B33eUNUYS2JDbAD8rd71qywe72XFIRXtAiAqZ1KNLU9AZoV49wSwofrh98IUdtC0%2Fibb0K2HgIE1mir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMKudKy6hqdcKCnrWnKtwD6wkYekATH5mgqC%2BrrvWhohPRqky3s%2FRHFP6ZcVyLrKm4x5dekwGiOLcJO99aagtYO9kd%2BjD8XVpTypugzcPwm%2Fa7ZYJoXYtl6q33zrnOlQSoD56%2B%2B6KKK%2BSooMHTt%2BYyePb%2FMUoHUc2K6YeBNSpfZyOeY%2BJF%2BhJlw%2B3qv8rgH691ziIiYompGGlfpdvYnkjYYJBB1yZBbVHq6tnrhCUpg5taCPR8WHPIZdW5dhDKfLbQj%2BK99hsOmYOQ6uBviIS9s7FhDTZsIkMyzzgZe6wvrqwvi2BdnEjgFLvYdOWWGZO8VC6aPyWWoVAoBsFKoZl16cmjO8v5OADSfJqTZDO0xoh6DO2wTdxGzwSLnCh63qHcXrBKl9xwgLrXOjYJKSqsEk5sRqF6K9KfWV4t%2BDpBn0rsJJhduHlAb0ipqIoMFvlHZWgdd5GQvIVuMjhWyX3SkxHf16DyDhgFzxtAnZSePQ2X2u5XHfMMdxOm0aJWvDC7sTo%2B6I5O1C9mqPvxsSVgnxGtVrZd8ull7QyBTOFQR7uwbvMSjf9YBRXQSbNlSqFmb9JfEMDPMBpG%2BA%2F5ZAks6LiVEMzapB2kT7UL5CaalnCWh9HcsFx7mbwzgWAzfaOknQrIrtiLn%2BuAoTcwr5rtwAY6pgGUTpOELjoyd8KC36yLn11B4FBQ3dg%2FYrp%2BpsOA1ioxj%2BEnIehW94zQF6Q9qGLcWNbv9uw%2Fv92M%2BfQWAhMqsOoQzTidgTcjNj0QnWxBVZU7Lh1DQgbyOg86M2DfPMeeh7DtHsxmkNXBxzeNQXYJR0voQhNUCc25dALkeoKmd6Qj79gwfFEE%2BffVJhEijoKNlSYBaXqfRfqgt0s2ORAspMq0rF3MNwb8&X-Amz-Signature=a6aeedc2e09db3905f00fd5c9d7a4abea3d0f0f39b84e20753400565f582ae9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
