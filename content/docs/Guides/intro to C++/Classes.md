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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXMXPPU%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDtZsdcqq6zLlRBUy2FJ%2FVY1%2B6nSCI4%2Faagv59PNxbJIAIhAI%2BlildJyy8GoCMCZVclGfEXHlQtmmECKFMV%2B%2Bp80ApOKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybRh0kQRG8jyIIG%2FYq3AOOFeaWOPYGB68dpcI95raQsDyXdhrlhiIKB7XWxZD8wU62370NnsQWlUJSbKXOWtb7uuUK1NYR%2BzEIL8IlHu9CH4wdY2%2FfnkvtAQ%2F976n0uM43fFA2I0xA00VNLi5eLhnT%2FwPNoZv1URdDjsyxl4Geu6SGaFn6tpRNnRtY8mqMosxlA7SmYYXiWxlkvTia%2Bm0uyiHnUyTDsimboo7ZgrgdgnUctno%2F9r3pwL3YNuR4TtP2xkhrgRphNyTabPy%2Ft%2FLc%2BXGoTB4sL2gHfH5TG5fsTmbHKcPUlyvaUrMx0RIeU44I0uJFZ96LuGmbt%2Bgfc2uZ8GMMxupW5Pg1q8uiCyH%2Bs9wsJiNpoWmuQugOEqzbnGYdsMN4Ibz4ifuUcY4gRJCJrYRl%2BRtmRHr1vCf%2FTVFYh9rHi%2BWSJS0xXuNuiol4256saocX7tY%2FFdlySjkPiM30y1iuy4VRkhnGtWwHjBcy8%2BalbGS3xzhwhBwB2zqRAc1XNm7YACI8ILrOZ1k6QuoQ47a3A1Y%2FB1e43tJWWOX05J%2Bac55oUHCOiGQ41buAKU8%2FlryGTW0n5tkKGxBepMUa3UlRRmG7Vq9NqmhnYWCKQrO%2BGuLIfERxbepjQs97eeFdeHl61%2BSNUSwPYzCS68fABjqkAU7wa6LKuqdc%2BUgmQACjQYTo1ENj5yb0NgkfQK%2FZV688YUYu4I45VL9aQU0tfsHVwPT1N8IP8xHaPdGCLt1ruaZgojv2KTaBwddj6eyfqWke314JMyImqEV4LLxBiTprRSgqTawYObI0Ic4o4LIOjenpGQjy0koBHGL4yYPkAwlCWsaSa1SY30tWrC1lE%2BlzCW2VbjDHK6lVKGgKKfxsYL7bBblP&X-Amz-Signature=3703d1dcea8be5b7a381a91bd82f02126f9379b927bb85b69ae40498c12fcb06&X-Amz-SignedHeaders=host&x-id=GetObject)

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
