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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UMASLVJ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCj9jDbLCKxVlS0U4JqmvtnQmKiFniPCi64sLqiIdgB2AIgC5Ouz%2B9LcZIit6rI%2FPlEi6S958H8FivZ7YX%2Faj4TEgIqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNy9zMBQO9niWjpfqSrcAz%2F5Bavi4W5VeNf6enaM8yCm41GY6ROFrbYfykKjQgFEwC%2Biqqus2wp2r1bt%2BBorDZYoXApbgg9YClsmdcTVc88kyRpy%2FVO362XybUT%2FKT%2Bg3gw59WA%2Fyv1rIWeDOz8GDUN5AP8P%2Fc0c1feFgdN9sLD13xyQ13QGg%2FYgDcTU3jknaSMvw00lb4Kau3%2BsaoregK2hnKfUO5oeRnJSNrBmnPafNCs9jn2JSiC5xAN582e0MWIasHXDZf0vSNjfmsbZghxfV1z3bFvU8%2Fbf05dME94J5h8hCc7tNCiomtJZN6afLSGGgAzBm52tqqtbz%2FHshgweqxdR5OCKTzo7bs3fUGzJmiCRS3K7b0tSTXlKr61335lIa8qKjtWKYe0HhZSLhkizu4VfnKoVaNnv3c0kbh3F8YEn4E9xp9OpBaMG%2BQXk8eDqn%2F%2FnUwQ9mNamfFNLfm0WLz00GxKLV1FDNi0CFPdOQ0HVF4Tcd4ghOpBVwloTXEg4g3AlngTpfbSWjEB8OMuYWUuvdzmSNRvGRAxR9y8cIGK%2B5f%2FEVmbg5V8flHA1pLmo8x%2FBpC%2BvSK%2F9kO7JzleXLVNXljLW5dL8YfCxOlEDKpsLKG66qLwKmcGv8ap7Sd07nW6bXCVSQZiTMJ2kksAGOqUBFVFc0kIutd1FUWV0TncRmsP%2Bb6xwxWMIaPkL9bBXCl3%2FKA2S%2F%2Bi9ZdaEEP%2BDRHFzPKImQ%2FfzMKGHTlwF6Z%2BSN7Zx25%2FKiEXJnprHT5ZVE2ki1JAkHlUX4EIAQwQWN0Xz1JtT03bMAAvhSmeJAWpyf7HnwbQQpI53DibuybLG9UeJO5birHqjN%2F4RMZepu9P93c60KE6B%2F3reX2h1vEpxdL0%2Bew3p&X-Amz-Signature=6884370c7af978ef0694de6b7dd3980d4914d62447b582641aeb53bce062fc46&X-Amz-SignedHeaders=host&x-id=GetObject)

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
