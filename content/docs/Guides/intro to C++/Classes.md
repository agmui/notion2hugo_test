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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN42OQHV%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCUuvuxUYHk3BBih%2BqqowAQRc512WH8k%2FDWZBfSgO1fHAIgN3Y%2BP1HjzA%2BYKsi9002oZdjJqc9doUot7Hyxz3kfNWQq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMN5LPPX7tua%2BbF3VCrcAweQRRhCeLt93XHzGYCyx%2B6AMmF4yBdMqao%2BAe8h954YnjR1ASU4tnmwYVxBOPCPSQCngleVq6ov3wDHGBLKE%2BKhFyPTBamJLIV4OkOSLZpr%2FyWemeymD2JfKwGJ3ZWeEzvaq9VwOcVsffdS6xaq8%2FuUashWKWLlNkGGlahWea1Yy8Yp0vLNxxwnSUrRAVWM6P0ih%2B4JzhB%2Bg%2FwCiGp6eV8zGYz7AeFWj72MGzGP%2F%2BrSxrHf0m0FDJ0juOR32H5%2FwrAuqrt2GewIxJdbTP4NVgIP6jVmIzQETPVTN0eB%2B37%2BVxdsF9RjFcB%2FpXzpVm1oICGlrW04S2wxV4LmY9Qs2c2t3vpoLzrsLHK2G8M%2FTjwy%2BP%2BgytQ5Chi4WhPsqP2UquAG%2BwihoVdDb3g2FuqDzMgKznrjBqJXukS4wpZfOO6qFnvCWY9SP%2FKQ4vjZkQzAiR6ZKQnGBIY%2FZWkNSWtzrPrNloO1ZtQxG76DHQ3ucbBtrrFyTiOhKXvWyiQiK8rlIhddutnHXclA%2Fis7IbvE0WQRF07ALRFB9ahVfA%2F2rx9Y8TL6S0T%2FRBbPnmhVF98Fm5%2FnGWQE3uxIYv9t7FnhRs0rVq%2F79b%2BG12RXi04riHCkPXp%2BTkGDA8LVpQPSMM%2B8%2Bb0GOqUBuIMsjJLXoTZiJh8KU2AqAVo91VdfUgmo%2F82Uvz2Trm8CeLP3byd6DYzZ9uyFUtsQLVEi5e6FIZPVLMr0g96pOxnEqrtX2GwyR44QSvKlSV8RjMxjKlJDKnrneYtOF9kZnco35KFx%2BpIe%2FewCZhTwVzS2i0eE45iK4HcRCw7sWkz6dMOHwd2jEtsgsggSO97ypnlcVvRa33ZJ%2BgcFVyuQX6aj1Iwz&X-Amz-Signature=2fde8f3a505c06fee99a89615a9c494810ca9c81836c9a5a1c93a1f21979f50b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
