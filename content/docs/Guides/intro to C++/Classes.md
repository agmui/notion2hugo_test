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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUBDENBD%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQC8ioV5foSUWWJwmTXQlOIEDfyyAgHvUHkTfwERR%2B%2FRMQIgLI2m3F35%2FAHvD%2FYBQ1jWd%2BfXtTMQlG1zHaDG00MnUcwqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEP8nmUPTfOo02Mx4SrcAwsHnW%2BUuH3894v2PuEDVtTsEBRtSTGUOu2WEO3CrHWmbbBjxTY8wXBCAPqCecC92ODFUlOx%2F5OabjYNIzIFezHergI0bOCqFLnzdZgVZjDdiMKj4vLS5Mfdvjhi4Glfdk8txpuKtfgHuTPHE2LY7%2B7yaEIxkPMuz%2BND2if%2F5cP7hywhHimlv8UDBv%2FUTPAXJ6GxW%2BruCIqJXktD6eWrE%2BciGwmrlR%2FDFyYSYBqNlHNDEEJzdoneu8u0FjSonE8wfb29NDjmUDmDJ8bk5x65tBN8iY4hIWz8nNaH%2BHvSVimXYDmM0JAJt5Av2WB17mHwNu3B22fNuK4TKaiD7IuxYzFIjZ7JiwOixDAI4yab65WFwVIxQucihZRh79BNLSh7z7fTWUcZbS%2FqZUEIK9RrZf%2FOIhQgmj%2Fra%2FezeGtRsBG8CIP%2FV%2FmfzS9HrNQW%2BLdbfJAP84YAR160O3fcCjJKLOe1KSEOYlSfac4l%2FXJ4JBlE8e%2FgKNuwQkPCWTeGGlW1XOVQuXmOT4VDqOkY72b%2FlAZxcbR5tHF1ZZaZN5wx0RkS7phOm6C76GdqFA6JLot%2BkmE3TUjjQG06v9wVV9Mf7bbUKVFia1%2Bl%2Fvi70tIFaJNKzahcMh2SDyA6sJGEMOzUtMwGOqUBYh6CGUBRpDTi5AUN2GngHQ2HmIJC9lgxt4jTcldzRYgCADH06iTbWZ9h0mZKPPU4h%2BcJfmBsWFNQnxcGBFw%2B9PZQAMEITpRuijmx6ExP%2FBsCp%2BjxfDsKbtxE%2B1qhyu357qRCoEKxUbcMrmXOYjEEZvvv0yXv6bTOS2YSWou2ZG%2B0WA5oXTn3O6JDmk0pzkG0RNJ7PbXK3MYNxmxsldtXOBOurfXx&X-Amz-Signature=fb9348a133e48b5ea55e23b44b8981c1b555f5df93b46ccdfe050ab5fe044cdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
