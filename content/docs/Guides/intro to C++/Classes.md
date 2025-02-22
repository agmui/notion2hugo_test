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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAWHXB3G%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBtVCCBJTnfojsUm1r0IOggSeEmsm5BMZSNmGY%2BZR88PAiARUGWUTppigG%2FEWoxaBjFQx7xW%2BgOsEOV9oXm3xhqsfCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtP2RqokD6L2jTzBYKtwDeUSPn1kn8YBcfrJYWLBRJ9kVke2Fof0IXUnCxq3Zl4BH5ZSPb9KF1pJOJviqVEzHApQj7V4v5s9CnuZ8NGFgx1LwMxwWUa7IpRkXgsCgPAcOLuL5ck3cwcbL%2B%2B%2Bwm1BSNVz99PXfxykgmK%2BTC3SOV6kli0jLR7mbh6ug9alcsYOdCR9mTgojllcH3DkHOOl6uH1MV1bARIDiMvK3ClYLl9J1tOxiuWsa%2B5017rwTCtp6i4ujn0vKrhHjVDAnL%2FUd8SnmXZVLyQhVerxnTwIGQWL29YEKpSZPQVt%2B7jswk6jYGRbX1ZvJj6%2FZZ%2F2ma7PYoSjEtDqq%2B2njapDFYBohBhdc%2BpR58rgF3ih4TETSWI0jgaam%2FqEvJl1Z8v%2BZDZ%2Fmu6CUyWr5ydP3CigsXan2U1suuSVi2pxqVeT6Q2TLv%2F8R%2BKJhs8mRfEd6gWj39n5NrPcK5qZPqjaVLGrDKc5%2FVjAhJDBjc3omUMDLMDyCWT5cIqdfjgdy97emC2J6a%2FFZJ7Q1b%2FFZXuxbEWrTL%2BiPkQdmVoUDGvEp06Hi9MPrBqACsjwoeTOReZz1sw4ni0rEJv%2BAmbwyZxMZYaSPQlmWRPdbqgbSKsfGTzkhYFmzHalXvY%2BbJdIKMHATqSgwuMflvQY6pgEayzI13QqqixIrcVqFiaYsaul9KeGFSSidJ%2F2eAblAuL%2BsFHWp%2BJlHZui9LoDt6lpK%2FY2YOD2oqqrisKYNAo1OqnYFcXvS8XtqBxNuRfLKtXaGuUya%2FuLxWVyPKuvQTvt5Xv8dUCoVHhMGnbDFY4ZW7qylxzkpL5a4BmTsD7foXsgOIDA10ma6rZ%2FKfKvNnrWdNk3cCN70Y44PlouPan68wYlhTwbq&X-Amz-Signature=cc7d4b15d6f4803c9b574226087941bcc3c1a98d48a251304d91dafb206ceaf4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
