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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LG3BXCH%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpEj%2FiHYlnNXKI6IRvX5QC9YSSzIxhB4sGyYIUPh0JhAiAqXa%2BLZM%2FzuuDSt8rB2AnUFHkBR6j0W5Q7Ab%2FebWVUMyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSAkTkUnf%2FOSb%2FH7xKtwDR459qhEm83RwtpY4O2vFeDozBGW02RE%2Fhvwrdw%2BYjvmymDEsZ%2BVdeclBc4VgOxp3VOq3WQVBXnxnO5GPVUjNG%2FHUfOZ5bieUzu%2F%2FFrFWVGEOZCQ7GqgYrisSxHhUmnFzDgpq6yntohcoapjeVnwfr73z%2Bj0XMF3Huo3Vo3rzcFGOqlAaGEYkpnBDWXu7Xwnsrq4Y8a1dP2pDoSUvXt92V%2B5pyjyZD9A0lVVMOfcOk95yiyZrM3uGXECMyL2b1dY%2Bidpjns90GszCLqwhBX92bFkq4JkYsHJujommwi6m7Crk7HBYtqIj8iuKBQptE3KdO8f41L3RhuIW4XOqPj7w7egI4Kbep3qdue6ivsLpWd%2BodKaqq7e%2F8nSiceuKA7ch4A1OIMT0GJ2f2PBaQIxNSZ0Hdulmu0W92kjHn8lQwllyxrGw2R6UC9BDy9nxKojZSdP4PjBVDUuevL2GsW2c6XnWF1%2FYZw0UU246GXKIMkk%2FpVYdMwP8x3htMTZDA902OlZepE9NJKUrrszaRnsmj3uO2SNelM33znBYu1Ny5h1JGK6YFmiMYOjM0WeIilyinPI7UsbQo1iMqB8zbbazd8y2n8u%2BMT4NI5U69P2G5G2nVRZgq70UuxgiYG8wm5i1vQY6pgF8PX43%2BMXed4imWpJmgUqqtzxOx8OfbPhaq1U5CV%2BOUcWXU1VunJkWS3f7YVu8oHqWZP5N%2BKuFDky61dFoBAqaD9fGs1LFySEn9zJAgFwPTajgdg1pOaWmnrtPWZRqXkI6zx%2F2r4o%2FHNNNFPqU34d5tYY5%2B2y1JVAGXrXo9V8F5QrD%2FGzw6HCbFqpMsBwB%2BdYQ%2Bvkmrg4bcZdG5UkO43ruvhD3oe%2BN&X-Amz-Signature=b53f1a774fb603f4dfd2bd885b70e77ec4b6ddbc99f908f42c1f5e7575e24fdc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
