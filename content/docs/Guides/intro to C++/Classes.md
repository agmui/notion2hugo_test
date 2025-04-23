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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBO5TPLH%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T003954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIARp8jJ1tfw1fvvUs88VuTOBOnQz%2BZaxvMdEClJHmBkmAiEAm7WZI6Muzjutbyv9Hf9Gj2pzWZ5JRH5um%2FQb0%2Ftl70YqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQBmLHFJ90Fuaz65CrcA41CO6i4NJ71WY0WeBR%2FQdyxipWDu1bsVG%2FBqohRtsD4DbNAAA471H4cqQkTHMtbqVNzazO8YqgI1Kshw0YKMDH%2BSXhLt8EVbA1uXAJyVnCUnSeoAi3o5f%2FAtb9tkgFvn%2BD2bt5A7Y80YXGz7FZsASSMLXwQDY4Ft7ZeC7dof4wrA6RQQ58z%2B9b0VmJjrYDV4Jzcby98BY9TvTWdNbjv9fD4xhzHJXpZpD4mM00P4bC%2B8tndZ%2F0o3%2F%2Fr9WZ2URcBf6VBbxJFYlOI2tswGkQ1W2Fawyg6YxbN137TkXA0jI0M3CTXFCSpDOV16%2BVkA4AGJ9c%2BeTgTDx%2FXemlZ3PPFLzF5lJ54mVQwkAIDqghvxR7y0NPHICzpY8vG7AHVpEBsPevHKiZk53COWl9d5LPWaynBnFsbmcfNaxB9t1Ervqbl1cXhx3QtBTNGgk1RyV0%2Bp54GuNgTgxYf7fPf3gX7NtFqEdRqxSJTQlrpwapI0RC4sc8gwZnwV2zXYBaVb4D2l4xtVXYHqJJvmushpRmLtA1NrZjNy14brif%2BoumEUKsodHrI2IF1ctaqYMNglwVZRhBXplIRH%2Fpe28ATCiiyihk1uhuzY5mxOcpMB9VFFL3IlQY96tTQE5PLfuDLMPPXoMAGOqUBiVTxnEkpvn8mw3c9mt3z5BzZTtg8rinekJbP3cLi1FTOEBp%2B8Z6sTRGYxrQHiyZI6dAO5Sj%2BaWUm5hJrV%2BT823y6sM5dKpkqXkacRmxclKOYNhzPDQ8p7lcx3jM%2Bx%2F2i4VSH%2BkU2ZXb%2BicsB%2FMMqEW6QSl1KGEOI58jlMdddmIfG%2BjUVCe6nB7F5wm137KhSOEcGHdX15nx8u9fin2YxVTx9S9M5&X-Amz-Signature=4f6ff72b9c6ae498e80b4ce80ab4c389c723e8e8a09a7265c818e7a4a70d05d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
