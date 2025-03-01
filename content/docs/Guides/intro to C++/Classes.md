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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R626EJV%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCSMdl%2BwtbzEaEqb2N30hsX6sVT3n%2F8hRDelvF7PGjrkQIhAMduvxHO0o00vq0Uqi4NNyNhzLpDF4kWS4CkLuhvDFBtKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FhhcGsiRjf4hcx0oq3AOs6tOAI2h6vS5mKjG4Quup%2BWgQHF14RUtKisRmg2l6epQ%2ByosiRUwDRhGU2M75UH5ubvFqYgfJJxShpYp5LTbh7dzNXjcOzy4BhtgVIKLqGey%2FycUmxaqOoZy9mzptTOUv9l%2BC2dYIoOfse20V%2F%2ByQElE%2B8DmLctBYvUCZICCXTkHe18KSFkCfig9Jd9QnsaXv4bl46uoHFawpHzG7zuDsL%2FSvxfLr6Wt7Mhyr2IA3%2BwYdmf1fvixXkuoc1u5O1kMy6Ynf6K99ZmlY8oJKPpAtUVFQ7VDYQ1kS7cHreIiKNjTKqrJivturGcc7%2Fes1WndX82ItD5gBHVkfWbNq30mYdBXXqAeQUyavKyhR2QUa8B7Hw%2BKxELGajRbzFi026RBDnR7hJNkIdYon5mbOpLxNquhIj69QzZymjxy3pOB%2BdlYZ74Qofk93umUYyYgxpNl8UlGZpWpkCA%2BAvt7mFdFQ0GX0IWyRd6s7ZlN6rTcrANKTuyy3Xqq7kNEE0QlpK%2FbDn0URPS4QrKLKIliVlVbA4RkSrx6U44PL7jzshjC0rocsw%2FnDcalJaIYsvvn6Vo3z0TmxHeVnB28g4krIkLdWFE2fzMGifWZfOeFbInRkwXiuZ8lx1Au%2FiDttIjCgkIq%2BBjqkAbgPtsfWVAFQ4p9xs8n1rhtaBG8bYsF18z4bj20vSqVU1V%2Bxs%2BkPRUmHpABene1uM802jUfBHpWjZoYrf4RBIGmnmlXaIVfZerhtN%2FGOkanZSVmKDFmw7S1y6R5DgB8a79sOYpYFz7TJMn9gosFxzz83L5piQ8RaPboYHXF9Qc%2B6m%2FDH2iylIdj3uQWqawhOhpfXOJZZTnl%2FtuImq%2FO5GMe1g4vA&X-Amz-Signature=184161500ea1aeaadd51bba6d8e37a1e69993da11f822c017bf67638eeef5401&X-Amz-SignedHeaders=host&x-id=GetObject)

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
