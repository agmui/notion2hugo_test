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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G5WLNGH%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T230720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC83IAUHEZsGEmVHxIIaCAonhBkX0Hg%2FRM65c4OjmIY4wIgTU7%2B4GWQnZulimZNpoTjxaLsBxTwSJpq8FgcPCxO0joqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEedojQcGyF9ti2KqircA%2FfzUQqAScCLQviqj3SSQFDz3Dwpm4QYFUWCLdgCa3fHbVYUQEwaaDrzALensolU%2BV1FrLbYx8jB%2Fph39%2FXqrlZEeev9fhQRVRsjfafHBaq%2F%2BoxrhyrPk0VxvSv%2B%2BfB6x49LSNT5MlUrKyfxPn71xi5umwOgMj3tCjL1zQXgIOkGCg2j21nC4BWLQ50C1NiX%2BwoygCAuTeVRwfzFyliF8DU18ZoW6QCwUZ%2BeTs%2FDeH1TD1XO65VOHDyfAV3M4Vja24dvnkjELx542YQiCgDliVkIMw6PnkSUpY4V92%2Fmb3aYJYPPj3Mo9ybz2mbxKV0NescMbgAug4NgErb%2BCwae4u8oF7RjN3iz82Y9o6luHfvqz9GXsqWM7rperE7mUjGmSePWURHBbuCW7Kx5RSayk0CrCUmJQOPWKTPqTIRtAMAvkoUkxvR5ZRMQiKxOA3Hl%2BOZkv7bjCj1hmrL9qqKv1d5OQLkU4dKmYIEpklqxM1camQSmZAcQ39Gk1WzMv2L3nUtBgL9C%2FwYGepvqFuUqN%2Bb4lAk4B2gzZkKlrlkeXTN7VVyJyo4TLKUfR%2FIiHw2GLv%2F9ff9iowq8goAJCryoX%2FQCH6gw7sboWz7%2FX8bTdr5fbvhDKU7u%2BM4sPj3aMKGu2b0GOqUBh2EsW96ytflQ3dd4auBCJrSHep%2Fy2oldMuVLq5scEZrqOvulsuRwD1nArL4ddSumlPIns5EcxHKvh8k0y2NB87LwMi5OJFVx4FrjINi2%2Bq8Rrw5d6892yEqBNMABmh1JKCpB%2FEO3ZwsHiex4mzN1HhxY3E1G%2F%2BBIQ4Hsn6343OpZi%2F4nSMV5W%2BD0HfnIRRos7K9ORc60UQWImG1uSwQxmEz9c2xc&X-Amz-Signature=dcabc396ca848a5b0a544da5d8487e81859e35700e21d744aa35f025534093bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
