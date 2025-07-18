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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAAOFTYO%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDzWI%2FRoWLuF7pQI2jGdgWOoe5rFUyzbSq5JJ5M6c5woQIhAOdyRtKfbnHwFtCp%2F6kYhIvPSXdBOmsvMuCF%2BUa%2Fu6OIKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaLfK9997QfUXCHQwq3AMGs58hlVEiiorMQcPHOK7yqoS%2BgeZbZP%2BFQLoXoKzE2poRhg0J9ZGCNJhBTD%2FNAdw9wfQScD840xwuqaBhmngprbnMbIwHm2IOHxIYhXo7ahst1otTfPX0LJ58MAkSSNbSZrIvEZvTgtNhUay61ZZKosR2HtVfSW1yhiI7V8l41iJ%2Frt4rHEKidi6YgH1UZuItfi2alqYEodkFEYHZ1rIc22AhIT9STxe%2BJmKZ5m8U8ilPKaQvYsatsBPmk5K6etRfLOMaEd%2B0n4%2FkYvx2vmAAoZM8IBHlrWRlo8ehLqUwIY1WwrNGaRS%2BKyzMEwpd4pk%2F6cC01ESX2mo9YPCI08jQq1iDybWHviokPOh9R%2BimMr2wX3%2BS%2BHoEHIBxTkZ7s%2BdzYdpw0%2BAmuPlwacUfVgp5KFiIUHNF2OVaN827V68hqx1qoEq9j2q%2FLEQdd%2B0kFaXsoY%2B%2BYrYcrWQJYb9FfnG4Ag9HYdBnSw4EsxnIwmA7vihvFc%2B7SZTty0zPzHPO6dgJZuVDJAV0fHPER2lLqg9vBsDNzAMVNLs8bS0V4EPH7gGk8fw7n%2BGnjYAeMfoCP8aYxFynleeEh4OabOY4UcwJYWu2pLzHl6gLSN9wwu4G2YJjECIZYhYacHeBejDE0OjDBjqkAbEvKRHYRA691424j4jMd%2Bn7ur5Ef0NI6bpFDNppvlJJsYa8KmKro70rZOUM2twEceJwAuJLJtK3rpQsPWmswnMdf%2BeA%2FQUlCrPGZK9oBZbD1qaWUO%2Be7kocVR6owfIac3%2BrdIhARJRGghQWfTq%2F1MLnuTfDue5EZg3n290fk0WUPXkpw5jDgqsWqwuiXt0SHuBdC9npMNL0O1POYAJNxF6iLW11&X-Amz-Signature=e1f2220c7bd3d518e726c72cd53728b6c27f26ebb171abe853286114266d59c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
