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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJDGAVNL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIbgvzq18giOF0tZYl72eQCCLwg6yaOnaGzWmvoJlZDQIhAObkDwzSByExLFV48JWZOENo1eTfyDMl3tHgj2CrAT4KKv8DCE0QABoMNjM3NDIzMTgzODA1IgxKKg%2Ftsi4RuC5kxW8q3AOS3XBg3R94mor%2B5uU1ROlvPm9NumQUEEnpW453iYcuCsU%2F5UwYp48MxVx%2FfspFHaZxFgjOKSX2ZMurs9KSVR52MPZlpz4KleE7J2vkctOG7BzfB%2FNUYZTHBmxK6CccmenN2ah1t%2BOLIRe2vif9uZcAHiuXTP59xvqXjmcRAz7kk%2FZVR0WRs7kg0ni2ke0qARJBwjsxZbv5MeqDD6B0CAw12mqWY7QU1YsPsbtnW1Mlc5W%2Byj9xoorchEYOWfjGDLENntvGBgKsfYm7e0docbvOpAZjcd%2BqSnls7zcfLSFJ%2F2rICZzyw20gyHCY3Sqnd8cCbKiRX3TohDI4wLkRE8GMxVY4dv3KQMhgslX9i%2FYKA%2FPQWCRpo4i0j8hR6fz0PNsBFyMmJSQkAaQy6xQ3cir3myAA4NQ%2FTCFfquYAwees65aqQqaK3%2BqXE42C2j1F00ravYl2050zeSkKiA7TIuA%2BqK6WD%2FGDU7yJQCK%2Fu7B8KHUrvL1B%2BBB1sP1DQV4iCmCtTxzb8zf%2BqHL38DTYICLC7LJg%2BrgrvqSGTgiHS%2BS5bm56iM%2BTVToW7Z4coLor9TbOErD1TOR0342cO6E2qcWcgMEMS%2BHfcuGxXablCQJ7zji8rYeC0rqwaylJXzDX3Za%2FBjqkAWmG0y11SY1j6%2FwDHm8oJhqfXzSlK0u9dbYMSplTGjcpAH23AzxB2Rro1NF6c7oojD56XbA39Tg%2Bgry6aJFzjnUa73DtdsLobhP5MXPBWK5hJqTyabPuWUzNgFyUGIHBa7PmG0KOOmtjTuemlUmUkTlUVyYHWFqy8cW%2Fen9MV10iG541XeAlkC14%2FdtUA6Btejy9bkRB3ekJHlC%2BTPM11JAdfCE9&X-Amz-Signature=e478c8265dac8c74e10b9969fb9bd80b03d7daa3a210c8252894e6c0d7ab23e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
