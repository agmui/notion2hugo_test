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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEM2O4OL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B298CvQTjzW1lnB0TCneX0jF7cT11SZ345l7Ad9E%2FcgIgAy%2Fc9hw2qossyFzvDVrfdrf5A%2BMDNbpNuEq496J3QTsqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAY7FT76u8fsHTKIWCrcAzrzIOrOcj1SgAjWSARE30DjHhmKsXivqoQOC2iWBlRVrEIJT3pBqsiQ0KpjCOUNjBECKztV%2FrHKeNJ%2BW1LE86%2B8H58oM%2FyFD2S%2FvToZ4%2FOIoHGsUHfHurVPSaA1VZac9ZKjzHIqhAWdmguoIRc%2FnG9me8hl8iQk%2BOFU9xEK6VRtJylY15uSb1rICIQtPlYyEcy8QorxRsZ15OVtjXjQizNvTamtpIKKAzPsTo0Rr5Oqq8sYXYCEAgpPTopcTwmnNp7JwU9oyu2q0hFHQ9ecUvWfGXv006fU1OZumHw3RM1D2PPYty%2BVugIxxN4Dhm3YA58RXovZT%2FPK2W%2BPG4A2IXMjRQvls%2FIhTaykNdtOeaCzgbkrq%2Fywc1QgK1Qg%2FpRUk4kB64%2FZ6xROUA3i4mICAAXzMPR7bVrDWi82OrUtkaqqdXRRYAsrnwOdzQXtzb7p%2BUixrjxD4sKfltNHOLfKLJFr9BH%2BPJauEXNBMTMtlovZa%2BOx9BX5E6nFYmpmmQNo9zsRVeLOKr1rfJqxnW7SqPi8tSJagLjashVgRc7gikq5B1yWCkHtgZsJZxQA2xOAN27PgFTdMM35oKxaEHwDfByImL%2FBxptUCFFTVmzledvVFupd%2Bkxi8ZgsfjQCMLLdpMQGOqUBwDiCYmU8WR4Y%2Fz0dTw%2FdwNvnmQpOToAsZABpxY93epQJDENp3FHb1K3fjkUw5gyoIb2bv5IfTXYVzQwH8tB3XAxqipCPxU7dGK5EH%2FANt5ryW3a6%2BfC9OwgW4ESjzJGhqwbn76ivbZ4vfaL4566cVLqy%2BImePOFVVqwaCOngxZEN17EasbPO7DGaZ4z%2Bn9RiJMipF32XrWhsh%2BAjiBdzZPH9ngAW&X-Amz-Signature=bd1debc9a74c4421cec6d2c63c74b6313164d60eee7b47157224edb13a46d930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
