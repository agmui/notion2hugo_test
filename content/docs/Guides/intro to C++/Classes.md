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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6PDTP2I%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQClf%2B8v2o2rlsjIgnNHywVJqNds061W7wRUn21X3hACGwIgR0Y%2B0vKbhRnAR%2FVxLfZ6RXbLkjv72LGdRJDzUcnMb5YqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAd%2F0Xv6hUNwUE5fLCrcA4cwabr5MEaCpxG%2BeMIv2plmye4qGHn6TiTn%2BSr8U6p%2Bdl4aqPDhfJC6GpB9QbfXIS1yVpycxLrmHUQXuKNbipec8n5oNHHBCXTYVCs8jPAn9nN21dWQhxGpN%2BS0M0%2B3Ryl5EiS6Rz640obkLCGtXlVxHb%2Fhzb%2Bl2IEK%2BJC0MhFmv%2BgbkiLz%2BbC1GTih0BQpZ%2B%2BCKAChKKy9caDAGWY%2B5HA16R0mkNutX5e0pjyO1k9pMmOFa3vkJfhIS%2Fn%2F1uLH5kc007VB10mvt2ypEQCG3M9gjxptgPtvglob6M2ps4L%2BYmJVVRbSdMjg%2BPI30OegJRSAqcDBO65%2BEBEzCj298eoM6cWDj12%2BEjEZp9xIEQ7YPAahn5RQmOSaTnOHHgpYiM8oJ2RZsEJYAWfeBKQ5m7hk2Y3uSCfrLPreo0Ih3st6bAl9qkstlj%2BAGvlF0wEZfXFw6hxcTruFEXOJPEVrs%2BW9KkjGcayQ4vScB00RNFFrEgAI3eMcI7zac9gt11lEK4KW6E9f4o8NMq5SvV65N6gawNKQR5%2FmaY6g%2B%2FmZFr4%2FfjbmwDV1wYJ6TSDhWGlMULsjieJ8jqNVfGLi4wOWml2vabNfY1g3iMTYSWtP4Shl%2Bw1MGs%2FBjD6Bwt%2BcMIiBycAGOqUBmed9aoWeoRwXNXRZmz4ps2s8hJKPfPJLYcyCL0sb3edLqyuycZgiF4BjuBPgEx6UuMFDPQdC%2BJT6XRYdnuM4Grta5BjcFudRRLZ5BL%2Fxo%2Fo%2FgEHf69mS2sIHq8Qb%2FWuuyGanX6CeJ%2BOMhOYWy88aRFAlBPiMkdaQZhK5CE2jELu1TZVEo5Ui9%2BrzKEcY4qyjz9zH2e7YE4%2FEOgSUxmhB6WjF4AjN&X-Amz-Signature=bd5f983364f3ff910936f272f2f7afbed6788fa3e6f59688cc9468f953a07309&X-Amz-SignedHeaders=host&x-id=GetObject)

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
