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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLPJLKLL%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T140940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQfoLYxkpBnulcGo9r62IkfqDGhKumRT69BsL1SXt87gIhAMFZHSiQHnNmbBjGP5da6Wsz7TlcTmP%2FnxfPjTzxKR7qKv8DCHYQABoMNjM3NDIzMTgzODA1IgyOFDkRpv6vfWSnxJMq3AOD53sAK3%2FRaS4qZ7TR6pcY6PbyvbKorx8AdQo6XSz0nmkElm4DXRfKkp61U81irO6CZC%2Ffc5BoHKuIK%2FabYLDuoCYe0H0Q0u5ebtjMi8zCkSdlRaPCvVgXKd1IlhGZjauOV9mHEu1n7G1CVQrfnNjIW%2BDH1MjlSM3Dow9D2TjsmExwSmdopf2GJ%2FVEpgd0C8E1pcLQl2qgvMvnUBQv27uJcciePsq4ujv2NlWgfibtRtWYZOQ59rGBQrq3CwOPeKqw9MEX9adpIXqy0DkNX7YgTJVi%2FazrQtLK2OPm16hcWxutQ4shhWlpj5236gIqnR1lbOIZfHOj2n3axGL%2BH4CAzRt5Yw0OZau2VZAPq9%2BJmCa8angGIW7%2BRsaSLNJrVnV7VPprbq1i1AyXjEmvPSX%2BPAn7GIgdn9w0aT%2BfQkrWq6JYlrfOAK2L16yWJuQLrdAMFffnynzykh9L70ECmvK%2Frfg0ZdWKQBY997c8ihsAe1wfX0vYlrsm3oLFDy%2FwIgYQ81VIlAjeUcF%2BIHtPN0e9nouPi85Qa0utXo9nJn1ygDnDxoc3XZ9%2FHlg%2BJtMKstM3NxGUSD3C%2B%2BgzC6X0V8r638o%2FbqcRe1a53W8t2S1Js3OSUoa%2F7%2BZg9hO5ZzCPg77ABjqkAX8ITjmK1VhxoVSALvLklUd9FMOa5fmWvqs9ZyKDsufD5GP88Nion%2FwgEHTB34d1RBuuAdi4%2FO%2Bl%2BJd7dZeMG67pnP7THN60s2%2BIuoN9cEMBo97X2GgFVsFBVgff4fB%2Fwz8Mj5SI3dLj99dlneank3cHcvWF0XWwhyxDFUHCgudGoSxKbjCKwk1QxhIJZvHWyJ1vykZBRBGwF6emnye%2FgK265FNk&X-Amz-Signature=58dfaa5da15059c8a73bb6391fe2e55ae4dbd51b82755f0abffa06eed747ce3e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
