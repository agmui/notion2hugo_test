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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REGQTUTC%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJNDRngAwo%2FLyrVQDa3hPOARqVnBP%2Bs0Uo9PJ0wPJYnwIgHaJVX0PcNV3HNKPveeropR3r29qCA5nDAT7S0kkUtt4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKioncWIBL2A8rMfUyrcA3dLGuR%2Bx%2F0vcdzqWGdrzP%2F%2BXAdoVb4Kc%2BBnxydCwkNVbxeofVSAHYdH5hv1s2wMCheQexlxGFZL99OG0Pa8PtpLR8%2B3g%2BpaFc0P5XNVxzYHXxR9QFzd5Yd%2Bh3temFN6l%2BsjjH7cmCQyRngsZ2yn33bI%2BtC3GhUJtQauAeMM%2FdILHz%2B0XIBK4BgP%2B3ULp2%2BOXPoy1oVce2JiMjPz9jOxbJIxrxwAjI6wB7KjzWWC9c1%2B7gkj79VfpkIh5sj0zi%2BYcJP3Mhfu1Lq91rgasFBcJVOXzg%2BCWP1%2FsEphgN6lp%2BGWpv%2Fng7hwRwZrk946djsM62khXKGkDlw8PjvRTmJAHCIU94roUxC29Y05B8E0PP0zq8Om9yCMz7qJWyUba3FJ%2Fpr6xCdnfV5X74n8R5mG%2B%2BEbzPBc2NGQo9cdFXwBx%2BcwnqDacPbcX5MW10VP%2FetObP8beG4XQLRQx3rKkB4ZbuKeq1H2F%2F4fp4fi3ZZr8twqWttt%2F5XybaRPqd2Dq6RTSAK8SepUIpyECWyX9xMoblUMZ%2Bx4jmyJBqaM3f4bre123ezK%2FbFoSozE38LkWoU3sq687qh96zDfPBIf%2BJb4vhIvAFf%2Bc%2FJ1X9ATjSCtweScgBZ%2F8aAucIv4w8HzMNHkw78GOqUB%2FXu%2F8LwztZ8FtCiEui6t2BwZsMPF2XxtFgAkJywbUv9GWqqgK0iJiRSv9EmqFCXCeLkKXFB7mdizoJ9DN%2F0Hn3hQrBqFZo7%2BjlOnVjCF9GEuDE7gymHeCEd50Lky3iubpf%2BR5U%2BZ2WABiyrmN%2Fxv1aXNzluGQlZWM8lA57le%2FV%2ByRgNVHdXocDrs0429tbt6%2FpoeZkGqlZfXN6iqioGdPjpEB%2FzK&X-Amz-Signature=d0f76244e157662539f22ce72e2a9321c1c844517e248451d69147f90044799f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
