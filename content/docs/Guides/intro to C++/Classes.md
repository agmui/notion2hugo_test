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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLHWDFZ5%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T031253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh0HimiB2j97AjQ0LNeLNsASnzlaxLklMO%2FsBi0XTsWAIgOalDxbzxoDjjCARqLE8shW9AHxtyivBgwST1l01EEOoqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2mtkFJHl9KO4gqfCrcA8PVM2QB%2FdUfFdDqWpHw5dsRQlSIyMGMuqMvhaaWB2WbhfaxJpBS9I5eEg%2FIy20SDRom1tdgcYgi6WKEZp2a6IFJ1Df9t1x%2B7fAVOZUg4IfFrDE72gyLzjqfDR2tLxfrSZ2m97Ap7%2FR4Zd5hkhwhj%2FOzWWQZL4O0lXO2jAjIRjL%2Bw%2FOSmgHHemqdM8MiwfHppyU0L8KSM1FDhfNhDzjwX2Zs9szYMaKL8ImB9knkLf81F4HZbo94CVYTgIJUb%2B6xs%2BQY23tSEdecDgO5nM7Ay3rwCFCGIbQJQ4xZGj4ImIylnBnVdnCJm7I8WigTyg3gaT%2FyLif9rSDIGXCdBaS%2BEHG34XHbGZ5JIaooY9VhpadHSU4yjqJoFYQ0A8%2BUBCYnYkFA0BUV5GPd53VgyulWMIlWuBcdXgVNPUfUgs06ojLrq0P0hx0rr0iLrVK887zS6GUpeKSTRj5fBkdkDFioCmMwJu5ZtAPyBGFff5C27ViJbidxDPjXu5sgXQxDlvWRXtqdsT%2BCtG6UGWGuIzsnlI8H0ikJhrjHPYpsG4hNiMNjzuTSuzQESLRuOf5Z6iqZtOgF6QJ9RaIEIu%2Fcrob45ptJvglnYYYgqzGtRNG6HtOuHxvtCeipMtsIEIY6MPChoL0GOqUB%2Fxdz00a5%2ByMFVsWjFdraxNn7jPFeqlfDg6udgIb4aws05Jgy%2F73RKQ8x34vUsT5BHr5yRdI2blJyn0tvQ24uVTNS%2B9HkJGbuojJsDs3wKGj1asRQvO3ZyYmYGqnjPtr2kXHnnVczS5x0rBgsZ6QDlD%2Fu%2BpbH%2Bz8kpaeLqkTib3tyvkukzK%2FfhCuV7WJ77enr%2BNJROlVc3NackJU7tokmxRlIwC9h&X-Amz-Signature=ebee11838bac92cf676e23b53e9acd7f3555e3851177d51e4cd15c3eb859294a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
