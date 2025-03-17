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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q74KGCM7%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhEYDR6sZR4uFBBCMAvVKuLwh7XLGG4M15leEH3wbyGAIhANWwxNBJovaRjstfM3MnmVJFhxOb%2Fv%2FasOyZPWRSKpwiKv8DCD0QABoMNjM3NDIzMTgzODA1IgxiHJws1%2BseopXn1oAq3ANeszH7yNn45FphiJaYzZiFbP10Mu1Tnrs6hzTHQB%2F2I6XXbqp%2B77X5ct4XoWyzkhtPSH42mmpeeUd0BhMfch75oUPRBIHx%2BUREN0vG7RRPKY3x%2F7NZB%2BG0a7AnQsgFezorKevu%2BMj64tvc8eNjYZ1R0MWCSYNXEn%2BcWEO56jjWCtOKuwSYvCchSEFOBDmV5KCD9KhTIL1cDpK1EPAsrk7kav%2BeG9ozDnUdaWR%2Ba7r4flkfvnf8JVb1S%2Bot869jd3bbZJ3qi2S0Towpc3noN%2BXJ9H08KTdEV%2FqQIpTW1VjNYZe6Nafrz%2BoaU%2FM6iEbgpEJa%2FqW3duH93JKxUK85CoeX28pODRdYX%2FjplCoPZQa2dChdZ5dh1HWnPSSQZoR%2FyxdOH6yqKuYfnVeUX5YODwBU0S%2BLXb%2F5D1MDXFROB8%2FCjBz7HvGB9uTrriXCLv%2Fg9ZY0%2B6DUwiOx2geRCPkSIlUdkRnIdTEe5KikbNFTI5z59JW4lLan6Ej6WVY%2FudeYOqYKsy%2BoTzYux949J2plPYapefHgAkzdE%2FUQbs7eON5UL0aupumUyPrUsHlL%2FV6GSiHY%2BpQ%2Fk3gsLyK9ea3NZrTd4CiSrKrlC0rTpqEl2a%2BgLOkI%2FH%2F0e9nZt7WhJDDxvN6%2BBjqkAQ9I20pJeP2PUGXjLZ36fZlzD0kzIUm83aFTKZ9Z0OV8VlanSFUlF2aOi6aldxuVlcIfDr7vqk22G0oFE3kDiBhtirRGWQ3hA7P%2FKQDTqfteivrlwKIygCh%2Fw7N7iPI0BUBMMo1rcPrnHOJIj0u%2BJ6b1Ay02cHyNGp6M4jbvIHpB3Ph4Jb0R4nHkuUDmPzc9Zp76M2zua3vqaRv2FELcfAAab8nJ&X-Amz-Signature=80598d347c5bed909ae31165033c40023115cd0815e12d21dc26e867b4fe7849&X-Amz-SignedHeaders=host&x-id=GetObject)

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
