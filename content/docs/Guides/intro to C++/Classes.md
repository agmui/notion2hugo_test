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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYCNBBON%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T033950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCujNBJ3XY63FcWO9bNtPtHJtRJ9YzC81Yh%2BjErNoX6%2BwIhAOG4zF7YUOm%2BtTryeMjAj7fB9gyKb0PeypEZXHgFgY0rKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTSYVI26W30lP9j6Uq3APou54IbyMOzb%2Foh8wW6hX8GcY52DsbxX9mt9B2fVT86519Wp7fShi3GMcOUb0XX5HddTsnil6QWYab0xQNVvz6nxE8Q4PY3RdeRHCq5yYfei1gSrZykZ56dCA9YTb%2BIcafcMpJcn9Ovt5ajO5WTS0VBAliu3dpFLnYweJudc2DhM5uTLOOiYqcbuLUUEqH7OQYfLTXzEUARItE38Rm0kxHnUJPam52QAv%2Bjud%2FgO6JS%2BzOfffaDP3kk9RI0INqkyhOUumw7YcakTQFYQOggNi6JC4xB93P74BETRqTZtB7lm685mji%2BuODvSUolJqegNQf6tQw4HdLz81WmvR6b59N%2FYNxd5jje6QhBt93e5fwBlyLtZC7hJn%2Bod10hYJ0cifS3tuogkJ72z4ajYTJBw6zUdnljhcm4T1dw7OGZ5IbPbRBOdUmlWwm9CaT9QphS52tVysEx8Kd8OSswMsaviKMy9YVQ%2BLFCK6dGXsBy1v4cNT%2BPnW6da%2BswJNVX2u51P6gytQd5YKEjOyTWfHlzjuxEsXdltkPP9qooSTSG%2FW%2FRYyJcKPGwOXjDjyHtNym%2FciJ5lwVscKRV4yfiwHNjoY19nLBkHiRRmL%2BaVlR2LQeNoJNYxzL7LsRlJISBjCllKnCBjqkAXf7sVJgr0uwQpYhOhTm3Cqr0U69OvHpGk%2Fv9gcc5HGeLaM9kQmeEvy1z%2F1G4wRpqjAmsuRNqlYTn%2Fn3m3Zizz7%2B%2BQq1llqoJfDBFoJm%2F57WO2qAOxES4lUpmd7tsJTp0RWmey7O0LqyJLRktVW0LPJavnkCDpTJ8Nytpyu2wN6rCZyxkEO9ocPmHwyxnCA3oZ%2FfY43VNeD%2Fe3IoHvdmt8CksZSY&X-Amz-Signature=634573edd144609f6ba16ded04c7031e163c01947868d3367fc1fd3fca00e5b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
