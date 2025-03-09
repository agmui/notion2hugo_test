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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HWS3ZWE%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCICbkd05A%2FuhXdDGwiDUXIuRwb7ZgO1HqGojSb3X4CSykAiEAoX0ujTJcWgv%2Bl5Ig%2F79LIA4O1DKouHWN2eKgMhX4IZYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDhFYIOi9gpY0DCkeSrcAzzXIBIGX5x2%2FeBiQbom3c2bQEFkbIsKcyQVvlxTiI5pP3bh3pfi%2FjtgL44Hg1Hxqhmsdw9oD43M70BqN2u4Kk5CFFmTAZRVamMkbnloKKj6Shirp4IX69GjChykvJHMSkB9DbdLU1AbLGZJelGIaKAtJvgtm%2BBy7H5ocqnNouL9htT1lHMFp%2F9lVqaUP5%2FVpRYk57ieq0KV7AWFkjhBYFoI7Qn8XWH9Jym%2BDE0HgsxDcROfU50dAQfTYnPCE%2BCKJo0829thQ%2B%2FpBH%2FtnITeWC8EMIQFuSWYeOlNYg4bcP%2FOvWvjv1e8l%2BZCMRoNP1c%2BskfI9sFX9VE1zKcU0BoRiSMAyEIE1exi7pGCYp25JgGCaRzbQp2eYK6Qp2jeVrxGEJtX7O9hddJbWmRqEKyFaACO6ODYKle5BaYafobIIrXybL4AMBo53kVakaseVSFU1FO8j1okPxv6BCbdNRib6oWylA3bAMRWd4ZAF7b724s%2FMqnV5KuqakEnK8F5QlrXGpBooul2%2FJlRTiY05H8RiBWmC0FQngKwi%2BhHffGLovPte%2FfYq5utUDZlELqFkDrVN1qTylMmS%2B794jNY88HDZHLzZxMFfNOkcku1kFUjSVAQtyCCHqaoCKGnzv7gMOKOtr4GOqUBdhrABkrB4zFu8DThwCBN3J%2Buz7jB6zobsTQOPrpUeU%2B7nkxl8gdnOogHB0%2BM4Rco0dRzl54PZ3sNSz29XJCgslwT%2BT3%2F68ZwTAGFhumhuVGzunPYF9gIVrHjZ%2B9ZVsDlKcqWCaEOiCWs0vgQiug80cZdUhV%2F7bmnqV1QlMUQjFrg6ax5zGf50vRiJsYQb6w8mIUOOvquXvGfdZpyjAh46SqPIhlw&X-Amz-Signature=45a9ca53be4c2999f1c5670a0c1bcea8e43c77f238124b0e9ece38ccfe22273d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
