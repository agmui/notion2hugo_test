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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBJF54BO%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDcFf6RPmKzDBvvnnHvxTOlaIq0otYmNOqq9KcA3m13%2FAIhAM%2BE451jtxedUp%2Ffr92sdr6XaiRBut7ISSck6F0lLqVfKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLA7OdoHZUTbvYvWIq3ANeu7LbKXYP4k%2BqD1dE0fDsEFZz0BGbLeOYi6ZId7oYM2CX2pxvGqPttjWdmVpPkBTO2KdbJN%2Fc4D7dpgzHdKGBpwjmON9zAookf%2B%2Fc4BtKcyGZZmO5nqsKryasGTPQoKdx2%2FLrkDdsBpwd2BcQ7vbzh1hYcjl1%2FsaszGLz9d95HpwovaYiahgj8%2B4HDLXjvsJ6iTlzoVnTGRZdjgxSpdrGT14CqPtRF3zOOMfCs2M8SlR0a8XSi3x49R09O9B7%2BOgb84vhT6nZpUIKrO3FR2xBHj7%2FlRxEblcKQBewrv5%2Bp7YauGSWIAmmnXx0Q5Z1aVFRJFpIrVJDRdGX0qjbcV%2Fa3yy8qbUGaSwAICkppFmzCNVgudaPuVDmxFbsNxkkVhvrQoOURgPJXjry8Jva5P7u8pUJ45UWKsnUblW%2BCQxRer%2FxFQpAhpTZnpxhaLw2HED6qBv4iSlHiOjnbg0GtjaESJimASaFwKizYQmsRBt3kSMEtvfnJyxA6CMxUzlK5Kf1l7V0mh0fa2r%2FUJiyGym1RgMEWGNWU%2F0gov6ecwhJdnxEMR43RSLjsLu2qUcOVcdjzHXCGcfopzPWTKAbwF4%2B7Sc5WmFDG3mOfomclfcXfjXz1CuyN0ooNznGxTDWqtnABjqkASVPlbO%2BPfwu%2Bf9Sqk5f%2FYq77iiAsGKzEy0GIGIWidFCWmbXiMQcWKI%2B3mp8TmRW%2FJHk9S%2BJAfMfNC7cWD%2BnD%2BZwS%2BCLJ%2B%2FOQyfJl2mM%2BVZ1r5LMtyg9W%2BFzpDE30yrXvNVDU%2FBb4UE2NZLfwdZyzMDAH5Wn1oHNMEfrZk5wVEzzE4fX6eGyC7i3fpGZ8NBzxuamZ6ZT51I%2F%2BtcXKw5YBZQTtFmc&X-Amz-Signature=dbeaae983a9b2f5a35de78fe0defdb047984d28aa1975d5c7496a5e7279f43a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
