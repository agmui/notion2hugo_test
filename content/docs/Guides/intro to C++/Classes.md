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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W74IRJ3S%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCID63%2FgKGNcdrGcl0XCmmYklrKQMmbz2sQNduYFUVYwDnAiEA82E%2Frl8vA95aGcX1MCYrjRKJPUXt%2FdWkOddZB6nwfQkq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCqY964Ju3fkPNWiqyrcA9XEFeGdWDnDi1vWBLqvLhe3s5nzlOeUUftgT14SRUH5WKkMuR%2Fu27XsnI0JXoPjjXj41JoJcc9s58tXN95Rb2xMUONhmYzqsuxHTV0VabecU%2BM8yLXkGBQPaLC0CKfQLxwdCWbzQZTlDIwLxPqQ7UlcEt0A7KY9Z4sJdl5z1rLxUAX9aqVJIQ93bCGDhbKUU14XXRCKfpJ4AKdf3EQM0oVBdArhQW%2BHdgXXFHFFPfGvRUzAbz2zfzZQ0tJbBbsdZ771LOz7gGaYpB4HT8MdFgtcS5gZBvnVqoUOmchFkp1q%2B4sBgPr70ZcHnHS%2BaX6%2BN4W2iobvqFherIzbuGe6MDt1b5yyTxna1e6Jxu8J47cKWYMYENxWWhPC1GKrZPUqDsVoY8HsdUr4sUNgx9dUJ1FxU3PmCWIoAAiq9%2BJgaVpGBzVdLvtCsjFvuCU2Y9Ctu%2FX3K%2F3F%2BEHi4i3q3PFCGtsDdlzEAxbhfIDhxmF7N1okdGAOIesSCE1HZBVt7YlEOl3ni0777nWPP%2FT4HF1ynqLATomzaaL2k1GrcG8cyWtVBEXGucU8lVt1eJKhUeV0KmoxMhIhqtKIo3MFbsjkcYU7XAHYXtqejQSm2s11K171kt%2FGI1y68gnZ3JB1MO%2FKy8QGOqUBV6U%2FHNfeLokIlBlo%2FUFbotItenxwkJ1oN2MasF7qUQmX%2F0ED2O5gQwwaDrWX216wud%2FMjnpeOgR1LQj8OoHxXRguFQvhjmT5%2BaQ%2BylF5JaQRp4cLiFneExzkusV3KuIykHTg6gq5iVtq43pX%2F8OBxvfiKR050XcySNxgp851%2BCykIEIde3uUk%2BQH0ZhziFmYXHv4sz24i9oQwx6mQ4P1IsccwzHi&X-Amz-Signature=27e40e15f88e8fe2acc6e801a555a27979df037bd0436546629b264a2b353c6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
