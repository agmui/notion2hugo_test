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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMWXC4C3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEry%2BSF6c4NGHtmF7Qi%2FCvEDQFjYoxq2sIKHqX2T2QwaAiAuBYq8vmWhs%2BBL8t%2FBRGznX%2BmvyPb5xzYX7RZF57xPHSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMJskSqcmJoxwFwc69KtwDzbsWstUX%2BkebcfosehHzFQ8jQj1R6j5Zw9lfjkawrOE07zqAlJ2sNwDubRxOE7hNSmqatkOkuP3Vv1G1vXKoSYSpU%2Fzmr1Dx3t1wgfBDicEd%2BOw7QdqBwSPvG9wFGEy%2FXvrV8Pkd8rcRrBtSNrUFllp6Qa%2BE3j9NsCUFF2qEWQ5S7hMxzKTZgh1EzBL4fP9ovnwTVMa5jU1xXK9TG0My2yn0OGZ%2BWeR7QgB5jVzUk%2BX1fzd13xDD3c9Usnr3nkIEdkzChOBVEu9ZgrpQl7fUGZjd9AW8Csu18AeEJ%2F6eL%2FNwdaT%2BiZMBg6mrGVZfVsebbOdeFbM7a8qsc9ijXhnqSdk8og2NrNDh1jBuCccy1%2FwPekomzRSQ7mCTd7zfgajZoFFfVIUVEN36zDGlJSRMexUHjNj4ZPSYBpaJsAM%2Bni%2F3hqeQIAYHC2EI%2FKTbd4W9r6Yn1pbWu5ml6C7Oa3Xhgx3QrXylhM21zDYFGL3z%2FOe%2BilRW4LIVsmRD5t4eqwOj8NeOHjP71TjzvownM0Q5m1QcxqeDZWjSawK8zgy1RvnW11D9Ol5YlglF%2BfqQyzxiW4q2Vm4bagzbDnLvMxDayFoDF4%2FCi1kSPb6dEBIieT%2BnUm6%2BxWtKFoaG5TEw84jHwgY6pgHlAzRn6NrEqNrUvgzS8F%2Fv4t91gk7OVWAL555nxRmXUlWTuCVs9AxnmFvxFEdpGMuZ7KR1KdjBVfLrcQaGLEHVtH%2BjnmZoN%2FOlJpBwwSLTsmbTbZBeUkrcWEBjnl%2F311cmZzKR1zK2E3Zl87e1MVTsesoJ3Ub2J3mJAlJe0lc3LHLQGIL1%2FSjG%2B6HJgVc1CYGfmEA6t5eFIAmbelkM7C3THiIA7jID&X-Amz-Signature=90b855e3e98abe0f4e7c3f10431a66ffd865e2f5ab769a7284b7a5fee2a389f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
