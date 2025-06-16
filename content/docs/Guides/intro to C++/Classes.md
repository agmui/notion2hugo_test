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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2JF5PSV%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIGQ4Ceb5eFs5KZYFh%2BwD0CrpRa4UGSu3FvW6HyeRW9fsAiEAgNFy%2BSLoZWS3JYaGJDzcyRdgyGcSkucuo%2FB5xTPtYegq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOXFGcWlNLmmAKPzLSrcAymwu%2FkaS9tGGJ2ZdXo%2B3i2XIc4lA%2B7zbQxWqZkfwUxSqMkvNbOLaS3Fap4wqsh8o54sBI20x4qOfhCsaqE2lMzyoYvzXUtGPTHS%2BOwLhhdIl3VgFjSjWnVufcPUfWu9h47tU8VEzgvoaVbUxhoGbFe5i8Y%2FOxDgAXRweMmp2hLJIyFUCZUZqzY2aaEM3uP%2FaH2UhTZs4j%2B1kOfGRylaY7jAwzC7hLdOBrv6Pb9XA3dLXACZrNJE%2BPV2G9dKWoW%2FkvZxEANwo0OcZVqpwkajtYIQsYf%2Bixl6pMhu5I2wwzBbyW4pOw1SiB88DKu2lkbCrnPvfRCaWZOOUoQwpsWMjaaSF0Us8j0w8mHE8NSUkEactHeRVFHlfXGfcO20UQzqs%2Fq0NDG1rgrMEq88y2IlrogRDqzsQsLz%2BjBO63D3hp7%2BuBrgRcGIuhdCDGG0C65jK1Lrlkzj3tVW8C8XhMHAmX9C%2FGC%2Baxg690bu2TMskAMN6Ld%2B7FasdWVoG2%2FA5HvLS%2BWsZljXcO9VYRVY9LCmSQJjhX8nxURRcdb2HG%2FypHecIEh8%2F4HnqKp6wQfjvSGeZ1EJQHl0gSm58N%2BG22rsAJa7hB%2FnHIfVOU40CTj0LOhKIFgyoZxNqPWINtamMNCvwcIGOqUBuilLiLnl2QAsHRg3sVvCq7E67Dl3G1QIfwb3HHqZlbMo4XyJ6uRkgbphhP%2FbVGIEvnPb9u1qXy5MgGal%2FUP74brDgoJu4Pj3opki09AbuW4E52TG6dGDFm8tYtqPcLYUJ70AykW%2BHo%2BmEBDL8Nys%2BnQruCSHi3SKAef1ZpVtArgVk4raegB0WosiuhobkmKB%2FJA1ClzEsrdTzkGBr5yPTyr5Yi66&X-Amz-Signature=ce60fc544a201140de5303e9f121be04f0d7f87a4e8b178e9915a3cae9d56a3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
