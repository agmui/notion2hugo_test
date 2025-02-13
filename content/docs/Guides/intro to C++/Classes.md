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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUORPX5H%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T140109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDV2TJyX8I4odGe4wlNIwRHLjSlk4fue7bdIrcnN5BwqAiEA3JPLh15GfNYc7u%2F3bhABRQvaXmUMpBYqOIrY1hQYclAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAcGamb7T6BrNVbcmircA4NlNMgT5TXDsyRPGZWj%2FxNgai7Wl8sCBkhA8VWQutJ8oZxmvpMmzXANOIma0wfdPBQagVlwQdmDrqvQm20oxmmpMfnUb5bLbjj2QSmUBONbzbxznMMQ630hJuE9TTaalW7HT5qrN%2B5%2B7cmvX2ziWm4W1ICazLZ7blFRAoL0j08uN1j%2BiDg79Omx%2BFI3%2Bl06Per8eQQnPP0SZi95ZGAUfk9yoOWUW4gxEVpr6SGDrw9Rjp04BNLpNsyy%2Fxdyoyqb7V79roz4NZDRrM9%2FLb1CMYLMuUldLIMhBejFyW0BLehtNg7%2BtlYRw2iaaZ%2BjMLDL95rX%2BV3NNNXCHyo4oIrurUz4xxZZCxPqXpJO0E2Cw44LJHEqIVTAg51emIa1cNzHoEGHSNWB%2F83smcLa2Imjma%2Bene1gNStO3iyukDdXbFIMpcZAsxDe7e12gfD8nlbO%2BpU9%2FfhH%2Fle3OHfNngtYMpG8abSgrEg08VuUIuMFIrLBpDZHfGN6ceaB4GxUbGd6UdIU2woeHG2tqxNYGthlWcpEZGn8%2BDznxVBAPJwqBAz5QayjRr7MsjDqwEle3TkEHVzgtxeQjDYEh5oa%2FHzP7VrKEh986mUfmTBIFu1JISs5QGf8wRgU6fD3NuBnMKjet70GOqUBj2bLrkuNpFc8aaGHdYAbY2il7gnjNJDW0RZPsJcXt53bc3u7cQzWM%2FsbHb%2BjQs3Yfyr1iFHKUCV1duayxQ2%2FOYy%2FgNlk5G4eFGXCwSrUwml%2BdQX4O1T6aomRRnog0LDQoqOdPa2BkzU2KJT%2FHZQ0wVp8%2Ff91opigjKoPyCEHmqcG0qIlEgB%2FAMx%2FTNP%2Bu2uC8vwh5UE0snkEDUQvSjhi%2BJ8vtuci&X-Amz-Signature=a38eab3ccb58b523665c32ad56d1af67010441dc9cb98f31ba404e3b684ade0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
