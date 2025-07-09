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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJWD5O7W%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T051450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqroqCcXPCTZ9grQ222%2FYze7ZwvaLFyWzUeTMRcKZwWgIhAKvKmE3z4cHGF3plxiFUxoHwLZmk1lfcxHSnYN%2FBV0kkKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQxkBdQjAM0leBnooq3APbzGl%2FJgYynVGR4uO7jJdaP4%2FPFEYu%2BV0vvm3bok018xc9IoCyiPLUfcp%2F0oZCz%2BbP7kJ7U9%2BmQxzLhDsNTynwZ6muugT1Sam2AzJ2NbBywEHtFXrxxztPeiYxApm1ND541jZJIobnDt7p1tCJtzgUHVI%2BnQvzkQOTN%2BE505HVNB4xykWy%2Bijky1XJtT1rHjMzBdspug4CVTki6fLXcQCshubygkHEl6vSeqHUbnVRMIQZsT%2BumBmxYyEAfrHB3EWwHhvEADtb3ZR%2B7DEfFb%2BQAGiBnwzzUzERy1bJny8LZiudB5g0dx2e%2BrZZV%2BRmSAny9j4JkNfTqxTb6MRDEJM%2FrONVa2ktFGyD%2BITt4zkh9lSfkSKpYqBMWCf7LEQTgBcJzF%2FAHKL%2FISurO0wELLAk9I%2BwD4LJB854Ivzbao6htNFcw6h%2Bp7D%2BTDRz%2Fgn3F%2FyqRiONB27rTRN%2F4QFoCTCjQ5DxCa0XVh%2B83jOFHujJEFWUAfTRFHHxPUkVvqrlGuZet%2FR%2F7cqErQXmi4esQwv2bxneCkF%2BiHMk3kYGhPCrwUv86voxu9d2La1m6X8%2FAa90%2B7mICFrxRjhLyh0dIxYCALJpoTm%2FYv7AyhlbUE%2Fyp0TuEg0zabljnaHBVjCPy7fDBjqkAeSPYqWIIyr6iuggMM1TjvYm3%2BF2tLy9112FJkFoFCmvILq8EyvJXDQtdb0r6%2BnmDaZZxHmNtrHvp7XiquS8O7gq7sL12%2Bz6Dun%2B%2BcvVR6unKEWfCHwP2kYeS3MLD9v9yfudQebKvqH2kVWWQXjKi5OpCD%2FfJk5NxzEGkK5TvwUjI3pr59lhDvA%2BVwLDNoYf%2FqKT5a2MXHOYCtls8UmzaIzulYOP&X-Amz-Signature=075dc076a9c01e75e3b18d502a76d1ed6f8d6af43d96cf3a9cdc4d7eb286b60a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
