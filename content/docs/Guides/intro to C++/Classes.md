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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MVRSNPK%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWxxMs4XmxtiYubV366Xr1DpF5jYHgmxNQnkFPGJ1fzQIhALjF7v9mHE1yVKWqqdekDxqZyfO4WNrx8v9j%2FGjO7l%2BXKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZOfi4oDvq2ygY15Aq3AP9jwskLemvH8aRGT3%2Fgdoy2JrsMwgGoqDCQ1N22JxnRNl0tA7qmnT506Q9IO%2FBUn1IYhf5f0coI%2Bt0ihuuhEPvKI82u7QTT4v59Vv4T%2FuJbBtTtKY4Beb4BGF3gId25oSDqEUKArI4d5Ms6ThYiHQM4cZU5mANqIp%2Bzmzz1c6V2eXgoLm2nKbCftr9rS6QX2xQEPMGKCJvJCL2G4WJiGf%2BKYVDkzB4jo8hOYns6cNslwpBwe9yz%2FhH7ocs9ZUyoKvH1cJ1ojuYbv%2BNsrk5McqIP3Az8BqIgK6jK9sNWaheOgXPlJrGugr0pp%2BdeBrJxMQJQzC3RYF%2BuHiECt%2BGU9gw9hzdsPM5oCV4gm5n5AiUtgBsM5ZE8ck2Lb8vSIwkjRkyH6DqDqfnWsiZmZvrHwAt325z5cZb4Ts3b2dA5oEwMigSn9sK4Tf3nCr2zIYZgCze5sJHsq%2FJe6XP6bfwZvMCn876JwtS3p3629bCt%2BZJRXccvobcLfyCgGNYm3EQMH3GsR5n1DJS3klsGQ%2B7rOafA4k1aLrAgsUEo39e68QgfF5DfH8NpSE6hFSUEakI80KtTuSjqO4ufmx%2FH%2FaWcevEdSXx9%2F1O41MPQaVMo%2BBPZ4PFAYMeZkCcDlo%2FFDDxk82%2BBjqkAReywsU88MFWrp73KgOOH3HsXkcx21revif809VCidk5T94cLiE5zP2OS0eGxYKXXPfMAX0lsc6MSkK703XiojuNbGDbHOf2gaXXE6gfpnIbG%2BfGHLgrW9hmfxBPIKizVvX9OM1d9nEI1XDhGny01GYI1g2VxTCKgIH9JlRmbh21V8F9YaEhnOJXXwMz9GnRu8peLr2hH%2BphhY1ZG7%2FzSxIgMz%2Be&X-Amz-Signature=1ab24735d920b022739a36c5f42d5f92c4da39d0a831385a0098c76e3d33fe13&X-Amz-SignedHeaders=host&x-id=GetObject)

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
