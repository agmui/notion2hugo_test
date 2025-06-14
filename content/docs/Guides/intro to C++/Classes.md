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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624LJIYK5%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDluUsqFzR%2B6z4FKVCcExmvwNJSDSo3pwRCazQKrcecZwIgCwH13riCA3P2yfHFhZSEXyMF7fSUJnjFk6tw%2Bu56AzMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDBfnR4HHwsvAvimY9SrcAxzlClP9eqcmQdsB8R%2Bj80HBpK7IaQ9J19T7NjSF2lE7t%2FgTDOQuFD5NKAcwEw9NNSYXXORt%2BcPuz%2F4doke1Feb1JM3nRNMWsLRf3ijnNfK8maRVh0Y0OACgGqzq4vqnaHw%2FINItpYEUBPLCQPVNO%2F9aAAvFvezGz4PkwdRVtVE7Z4ROn5ojOfZ6carmgWD2hIipi%2BBv0FCNQsfYnY4e4Ag%2B%2FTpE8kHHgq3LMi3VWiAopj5P%2F%2B6omBhPZ0OxwTYz0kQYh4TavgW7Px5QgD99vC6ZfjjiUXGgMJ3F%2FoWU0G6cQgSzQavlPGbTpl4s8pAX5%2BaVhK988j%2BgzjzMRQU7EwXNSX0WhSJRhxTCVtbgSjfwfjIA%2FN2%2BXFJN%2Bd70E4o3YBiFrirTvzpAT%2FyuW3hmumqmD9FmN9iS81DV6GU2DaKn2YQDPKNjmbE%2FHrVNy54aOvKNToJrsIXWE3Wj5cVTnFMkkvxaK9ev%2FHL7oqlWgIqaKZREPJfoIIQEJcIVYZwHdrZcgS0%2B%2F4X8FVs7UWbRYKxAF5f3NpAiv4oMXsdzT%2Bu7omUtZmzmCCBdEqAZuL8QKtWPQWgVEzEkUaDOLfRbnmvm4%2BbIdIZRG50NNisW75qCKatyEaoODEcndZitMJSTtcIGOqUBAc8uKnGQu64YxCs2tbP6xNgX2JWwkfhy5POtq6AYBUmtwAVp2Gdd29zXfvNfNUblzhZi20kazdtZHCns8vZUeqIFvrb%2FnFIVNZV08sx1sz%2B%2FdBONUx%2ByiKoRuoCLa1R9IjwEny6MaUAKRenP5%2BOHpiBlbY%2BtVYT0DFn%2FRixV15Hslz5z%2FYQOFjhQCaZBkUV%2Fi4vJky2DcFOirOC%2Fu4x%2FYvCitALN&X-Amz-Signature=7613fd822f9f81d718e63d8edfb7b33755aff75a5942b3999cddbe6502d91364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
