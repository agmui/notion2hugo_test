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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZK3UWBY%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQDX43G9xfpCVNGoeO4ezrgH29I%2F4iZEy1IoQ5AZk9FvyQIgSPJtCxk6Ol32KIUMbMs2fhByEfaEN08K%2BflP9oM4RV0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGj4xStRFd%2FPDJgn1ircAzBdlC%2BhNVbox3j4R4WMOaDAWofmv6%2BZs3PyIo6OCiJHEJH38YgfP8pVloXCmvh5JulqgVSQ%2BERZtdUC%2FQ279DoYZHmnZ1LcRVyzmqTM7V0XpBVgjQPnE4o4%2FR7JZ2agyPhNASfhgeYxFT8RQvZgFyFd6S%2F0IFHqzf52a2A7634uvoYh8XzWGxanO9YUzv%2BrrWX9l%2BjDg%2F%2FnDuO%2BRHp1w6Cb5ofIYv7JJjv34dBMNvOrnDoLk%2Fu89IrjQMuIDSXvVGwlMBgBr38VrJ4EpWycKOgm%2BnIoyh1djyP1AbTbZnt%2FDeODb%2FDRYefJNxgGu%2BfdW8QcDLzhxnQH%2BBhB6mkJ0pj8Mu8bxK3MteFqxEVIxFENut145NmZ68PCrognOSuK4rvZwyA3BTOEIXjYJ8xvzrdAgUc2esrN50p4X8D%2BJ4pW8M%2BdMH2LiA9xElRCgMOdFmW8WJoaXpYRJNqLgGiVvuJkA%2FCXDjNcA1AkT5h6%2BcFraMmbyAbNyvc0ZpEX%2BtV4v36sE2dYCwvsS8n7XlEYbicVd4naqUSQ%2F%2FX7MPhhN6SPW0STv3bma2qh3O4%2Fyi6tBVvlt6jJ8aQ1o75AMJmYXLfM3oXITZ2TDnkje%2FevqUlaHeed6ey5WA28CQ12MJH56cIGOqUB%2F3xUbdQSXtHF5gC9YCLQit436h0uM%2FB%2BthvjetSagYjP86j69%2Fd%2F2PsMoyeA43UdOiKfw02MvUvq6pOac7gh78EEKP4H9UK1rBBdT22Ptak644WspxO7I880Pecb8Dse7whSWSPj5KE%2FBKtXUrf8pav%2BUvWuVuslhrScn9kaaoP31o%2FBFPskYWh%2Fmy%2FhloF3f62EkqI%2Bosn16aXJ2wvQoEdZly0n&X-Amz-Signature=26e6169b5468e858a1664622010736775e61a3e086a98368fbeb6c244ce49b09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
