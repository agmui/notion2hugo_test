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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWFU42EI%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyu0k%2FVcsrhjPpFtYPvzMScLC2bKKk0GetaGajfXqrBQIgCD%2Bp5hTOVfx7aEnkjcg2Gc1CDCILy2kwgtuOcHtXhTYqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWCi3pJYTIcns8DIircA85uNH2lKTi8%2FBWLJ1TQzhpoLWWGl8h%2FkM7U64HHCkNGQvDlsAnqN4oFyVGtqtH39zT8KrA4MJ0iC8kyJueWWFXImTrMjo0KeWvT24f4cgsZMiZ%2BX9H2k6lrEiBfrOoXNlyby3vCp7Uy1qlgCj3pBOPJxYhKTwWplYMbMRwikLWVqSA4zcmoMbdipIv1EfKUDJN9nK%2FS0xexb%2F5DTta7eHComK0kXNZ6KdA3XNvnRZ72r8du0h91eZHUyNXgTeN8vxw3GS3nEkgjs4UG4yTHxP9D9d0zY8iOZqhRK0ugwZcZ%2FujQgb8hYhSX4%2Brnsa6lLSxVmCcq246sU%2FCv1LsL93kcrJIAItdsj%2FouULunKLkvWRrw5fKpRA78B1LF7de0fZENRrOzfB5dR63ClhC3ivLDJ0LmJUz4N7c6nf3QAcAzwJN7G3t1eI0BKAF3pWESAmFI2KDYjn0bu2BfbjRjxZmBB2HD1yvlb6KUTNRxpJSnptVRxby7%2BvuqJYGmSvhKL96h%2FNExh8Y%2FEh9p8mFH8xnw8xg4jGtBvU%2Bh59oSPD6DksX85684fPlaGbv4QUJYTZz9j9byVeHxmtBlEEkJR5yVIRtqb8GMXypee%2FKgMIXT3jTDXuIXPnubWjARMM3Kgb8GOqUBsqP%2FUF8eyLgi38L3%2FgWsH8IIOdXZWqAoQT9layBTNg8R%2B3%2FuQ%2FYCXhA4DEUuAxs5B3JyT8FinEwwRX%2B1M60KblZqD5C9Ymc4efZKWPUIn2vuR3hWGVGVDZKT%2BMtkZYJi5mUVgyp5gLrETVKcW42I80UqE2eFVlictN9uQi7i6jiIyoEBXItbuSFlk0j6kJDkfKewhmJaE3LOV%2B9V4RUjnXoSepJF&X-Amz-Signature=532d0246d9aced29fd6d1f3eafaf6da4d6a01fe88b04b41248732ac83c52af38&X-Amz-SignedHeaders=host&x-id=GetObject)

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
