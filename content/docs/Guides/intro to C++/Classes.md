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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A3RNVZ2%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDnoN6wCW6nH9L%2FpMBmiUy8eLAIw%2BD3iXKUEYS%2BJ0V21QIgec1QYj3sJz5xttPEVR4dagQ2zswhgpM%2F4TH0AV%2B7uAEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE4W4JjXvoYIwkBwICrcA0Os4Mi3C4TFj4RgrNEl%2BXc8XyJlepuQ6csdsRb%2BXkjMWFtOH%2BMgvLMG0Kct4uouH0XBpdKA8gxi%2BS20%2FN6W%2BgYnYbZM9zz0GgyAegzzxg0dISMvobxZ7ZmpiwfHeltCd5cG1ROHlcz2oLYQz5L4lLp6c6zfQzm2OXDI1kaaUvgToJC3zHSScmcCsVl4X0%2FE%2FVLoiv7vPOywfh607yd7jDY05ECfxQVkcaiWkuxeaaFwyFIWOX%2FBTplVFUrA7tENkU%2FjMKJobtw04xeJiu1EUlqUVHjY3gj0V%2FBoQ0XE8jsZzgtgvsgSAGQ3eJkoieDQwZ5u29%2BFxFIuDk1PXtpYi8TNoXwCj0neSU0a34h6DmjfaoqYToCZDQaG7VZ0WM%2Bofx9mKrjefiCbJO3r2nR7CpObDyTMCDMQUYzObErTd%2F6Z%2BNmi950feyJComLzLkQHNxMr68p9WK%2BQ3KqARohrdTC41S01X6DzEue3hFioZCBTAmPIQngI7U3795kzpRDU0oaVp%2FCWvJEqLL0nO%2BpHEYqEigLUccIE%2Fusu1Sx5%2BRdArwnQFb6fyU7M%2FNXq7PVEhzJnH5M2YXtg0iC3wao2nQns72UO8B2x9IgvbFgjxMbeTAQ%2FBIXwh0BjSWO0MP%2FXj74GOqUBFWMsBIhnArQFJCbL5fCaZ4%2FwxVex01nvHk7dIqBoUmfOZKwK95Rrfqh8y6iUxrWcTAd43CJF04LKGJ9qhIHO%2Bd%2FaJYzENvX190JLgXi%2FaT0SlKOLc3BXEic%2FORZudXDhGkZWC822%2FJg6jl0LLnB%2F276rjtma5IPJD4uxBA2%2BEy7ncjFOGkqoREb20gJUSCvp3JiOPbVeQMr%2FTbUeRxWUccH%2BG3E1&X-Amz-Signature=5f921ec7b5610c823d7fc8978ee4c2ab5d2c83ddca065a554f56108f1dbfb5fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
