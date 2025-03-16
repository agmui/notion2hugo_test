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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSKJX4DV%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCnXDCgehspC9oL5iVjpB63qUYe1wg63u1SRdM9RZ87AiBJf3YogEGiNd8TQepjmFxvQGQikQZjruvy6JOEKZ5nXSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMKn5v1qKkzd9n5bzmKtwDYnEFqReAJoW44sxwtBAxJBIWuUSeJ6Jd5CQFmqmjG0w1Vgx1uGLk2fN4Efbi4ced3%2BOh2Atqu8G%2BRW7QiqwlujGPXA6hYFufMov2KCUTwYcbi5ud0MRzjHHhwskRS4YFE0j51f7mv8Y50RA43HB8oE7ifyMpiHVKlhWN0lcbi1%2Bj05xN18cKrwDjOLrZzcNGX%2BgLXyyOSoJeOE9%2FSoqn4sgMRYZHWVNhU0S1qmVg2giIb%2FbLnscAGd2R6nVhgnVZgsCqcBgYEvc7mHtYsjuRsSZveKenGRDImCgV7HRpNp%2BfjbK%2FbETagYc4DQD1q4OQ1f3%2B5Ju3crmEhbglsdP8BTrUkkSQIYVcbzqGG1U8AxiufvOsJVYWoeW6fLInCqdbrWy%2Fc2TgO4do%2B7%2F34elL7yICl7kveNmtrZia%2BZO2HKqawKvTS4pUMss6BhRjoJswKDA55ab44y%2BUpt5vlvINqyEGEFPbcLITFJ0iDQO7f6PWYP4QS6eBVSiR2bYMCfPwTAWKWcNN%2Bw9%2FVAdnCwNCjkfINTdXi4%2FWIr3p%2FirROBn9xqqb%2BXxmorh6%2B8TnRGRWPjqhO%2B3sdxKuTyYAq%2BUaQo84FfYmLpwb0OfLQQhQ8nm%2B97U%2Bf1aJ8G83gIMwj9zcvgY6pgF%2BrVoBnjt6Yj3PSzuU1qsYsqtKXUgG9LH3pmKJgHHQXN3ugLagRX3MIVg29phfZQFQctt2wTSH5bgBI0RVyu40jsjaaeAI%2BXRrTvDKmY1uvHjDYMDM5i4cl9mK5WSDXvIO35jqDsxFe1zZoXzSBYNLR6HJk4CPKT9qa99%2FUs7N4%2Bd5he%2FLFqvzDwYDGPBOd1%2F5%2B5uqaX9kU7wZXi6VJePKfqxG5vdW&X-Amz-Signature=48b4b4ac37201b15f930e1e5a1d48159e361e07598f666ff75ffcd9951bf4c19&X-Amz-SignedHeaders=host&x-id=GetObject)

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
