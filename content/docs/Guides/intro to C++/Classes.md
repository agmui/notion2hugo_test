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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXLNRRKU%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIG78favwiEbEx8cJCx4IlQRexCFBYUwnEBziiQQiVdVLAiALKVLx5s%2BWin%2F5RcRR1B4pL6fvxy81%2BZiW57LzVA4rsiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9%2F%2BdUaLKHZkm%2Fc4FKtwDLHWBxm6YLHiNlpDJ63caAKnxxL2xvlNr1PpvvunsXlNAY%2BzI%2FuclK%2FcoOduWtTmNja32ausfA56aKF8e9pIULRaYxFPSQuWMMiMCpthPT9ZXE3GpMAeb474x%2BAsc%2FscR7PHaY45zzge7Ghin2g2k06DjgPMU0op4VeW%2FA2KbTc3r2mevBJ%2FyUaOq%2Fv0rQqMSvq8nIqGpxGkzaggjl3JVj6TrYUpdaBUaSiCIaRjcww7BZ8f4TcHAWhF2UZ10GsF0x1kFDgmXFHeb0xmu8CDr1ApIhgyzYP0nDCQlrFBDIhCvO432zc8l%2B%2Ba0QGwOX7LSyGidYEuCMGrslIDaKyDpob0d%2Flr%2B4pSwgrbO3lCsmeEHvWQGVhQcJg1zgYF9GCYsXMv45cV0uSZnhAKyv16moZoX%2BX98ElgDn1AFgx1UINm1VLoGtuPEIcdd05pd3GC2Emyl4SGt1E1yfV10eAuP8HtF9eCE8eA9J0ITR%2BIUpyGC%2BNj%2BFBxmerOG4OBPSVyugONvhfbFw%2FlvPPedzMuUCJrvLmfAbNdNSVYuL7EG12QWgXY5oTEdMyCWZ%2FFeCMXdytxqrDdjffbs56%2BLD3IDfF3k1b3W1QGLyHzAriaKC0GUx%2BenHRHQbiQvwZIws%2FvpvwY6pgHgRjVPAP89mdX%2FcLsLiHJIWaHcpvCbHI0HAtvDqVLfG8Qo5h9pNFhg74ik7HQEszSos%2FGw6gdNJGL%2B5DhWoE7VbLscNGzyAl1LGHt%2FoxjxbmqU0xm6DwZDkXzd8AF6uE54cViJNQ79a9DnMikkgKpYwrsuWAEpXp%2BLINVkOhC6yBU1SZT2GA8aDrDEDGlSAnbx9wEYpT2gYv6Ky99aBXgJnTUqG54W&X-Amz-Signature=5fc1bb24ab3bccaaa0a13a672aa10dd8cc7a896373d6e246d24990d1312a6ea8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
