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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662ES2DLC%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIAFjT%2FaFkNeG%2FXN%2B9npk919TUe4%2Fq%2BtSvhS%2FJiz4ZCC1AiBbeHftyHO0c1X9wowJaZVTgJBl5WAEtBSTVi%2F8zGo0jSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyzSkyI0dqDGbmdRlKtwDDe%2FhD%2BeEZRYRSL4EVz0HB52li3zv7p1Hd5f9e%2FO1rCHRXGkFopVTt1q350paPtMhH1jt85znAbpYhAgBEFeOc1de9RyK5r%2FDC8DBqtjO9lf%2BaJcpkopvFH0j3wmmXV%2FM2x2w%2B%2BNt1kRtCz59DbzbLXJEVgFET6%2FJBCIjRvl%2FEqQ0GW7oabGtOs7fopOcTkyE0Gmrih9fp2Z5KjUDsVb26ZSv6u6QlXzj2BvB0csyjXHkb2FriS%2BeWYS3Bok1bhnj4%2FEiQQQ0qFM%2BLdz5wFeyLB117ik317Ux1j1TQWOaOElRtlyUOIPU9CD5DJBlpi6saN0IC5F36sDQzEfXuwgBqtd7uPUwVwMi1AwNmeNFNe97OhXifU2dBKjIH1vQPVERz6RZUJ3et74uk%2FYGHEX4ezEbWfzAk2WntQWvwG%2FlWrsz02vMKkyzfLVnesvQgaOHPWpEDzeNTYPuVCJ5DBLWaFx05%2BBMWpU2o7c9mm%2FnG6ocjfyyxUkAdyk7aOde%2FXMErGyjGi5i0YnWEuhoPTFBQRhaTblvy7gwx%2F%2Bvs%2Frmxg69WIX%2BBPnBBtym34aJcRuPtKq8mPuZCPH4AWxWk8yyQuBKmt1Dp88E6hed%2BmnfSCpaOZtwiAirKibZwQgw58W7wQY6pgHlGlXTpv2iDxf3xqy2zb9TQ6YKpKYhvcbDc4CJY8NWtwjKAw32DtQAzTzLKwVeC7O0SLFCW1gAz%2F6jTNDTKsNEJFdcZ6XSOVNK85xkkyh3rX4FyeryQBtrMGlOxg18oFsasImIGQ2%2FA7aNy2HJjRA%2FeidJGNuFWsn6L7S%2BHwauRDKjDDwj%2BPS1LeoITlmWbd8vIRkgayyXgMHLMzx7iHkNAGWqpANj&X-Amz-Signature=1a956f6c3c1d27868a67c256f81e5cd7fc89c3f7b10fe546bded6f87490a3578&X-Amz-SignedHeaders=host&x-id=GetObject)

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
