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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVJWVGRS%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T041454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELo0DXXeH8UVL5UvdNBmvnr6Hu2benPKu7lb8wKm6F2AiAGOoqGVbEkE8sYwo2Gy%2FPDZAk%2FAiUKwtfMkVwR%2FE6MZSr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMOatlFJ2EMAjxYMcTKtwDEAXth%2BmqIs00V%2FOILRO4Qgrs8gnPef5UPmlnpsK%2Bt3qXbTv2qUAzDNLU6r5XWU%2BzSXZUh1u1YgHOeMGImlkJvakDgGfiRZlZxm7PKxeCw4bLCGxr9ZMS0Q7xsPvKvMDMsBe4TpiSxkCx6WG7yYj8NgIVv%2FAVdrtG%2FybS10nP5HdoyErbxnw9JIxFUT9ojViAE19pHmOP5Vcv8MNfk8vkJ8LzG4%2Fx0p3%2FPzoLCL0hNCZM683eI5OqH9C5noUzAfXql8hsiCciobnQ4LJT1ahM%2B8O88%2BWhy04ZUfCMuCF4nE%2F2856NSc%2BqVnNR2AimmuHLByGZQe3HCTjJgONs1C%2BqFkQiLS2%2FDYfVgJ67xtWJ1WtjwNp696sRpu7gmGlzRyl%2BL8%2BR4zkLL%2Fgpm2fSS5y%2FAUUCWHMfAJbE%2FSb1BUfO0usjma3h1hPg5r7Y8rWxU8WJ5%2FttXBaUMPTXJ3OEF57KwrQDylRhCb%2FbU3iyZYIRSAhTZRaQWLXX5B3IFCWOHw21adW02dZBwbxPm%2Fj86vKiPjdjuuyDiLVvPlmyJIjLlp7fLVbrQ%2F6jfyG%2BJ3pJxchHX%2BMviWuxQYx%2FQrg5uasu%2BtozTrryYhL%2FHfZ2lYlwuOF8WGyjOCa4v9TsnbAw7%2FWkwQY6pgHBGAkSdwdTyG%2Fy7U7P3JltFHvdbSpl7rWdNpcoW4Hh7teXwBjjW3i8UqcQ5CBpMmst2ID%2BUK86dl6X0uAvOdhqfJWHm3Q%2BwCh1bEBIA2fynryscQPLpA46GqwxXq%2FS4cDElqT3XrmzssjHFN4%2BRSIv%2FpqhMNqQ2W4LG%2FjgXMui81OtgmKGrZC6nYhV4VCyR0e1N%2FjrwMf7tika05EvHs9JRi1p9ihE&X-Amz-Signature=eae952f45b17d12c74d4ff13544019535b181ad628586eab49b99e7882934c8e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
