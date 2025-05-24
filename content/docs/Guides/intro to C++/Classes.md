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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KMZ6UQU%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIGfG0QlfdtYGU%2Bu5uJI6rWIiqbKvLFfcpwupmfTiBXtJAiEAzPPrjJIbV6hpHn%2FrnLH%2F%2FaJ1ov3s7HNCPhmexhW6SCkq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJ%2Bp7W3HdQje7K0aHCrcA9LjsmA2D3QKjhoNU9%2BrMz5oWxukvVfzFUmpOGsUt7H4jtR%2Bg1RBTu43Gk9OPMn1aNalw1pBfG%2FEtdNr%2Bth62SZwBB1L4V%2BYj1NmR0AaEjvvGCxSymVyiNUUlU5zcXI693uoIAYL%2Ba4iljM1u36f%2FXiquQeHHEuJ%2BfYNcKjkrtxZ%2FoKWcBe7%2F0xes3TSbKILip2Hb2%2BIitew4aekHqibPrdsY2kOvpPTPJv94eE14SbK5jPVTK6djTdZAGgZaJyPldMr6WFrsdMAP1eIbMJguGfW6U87gGQ%2FgEYDHBmOA9%2FbgNp5dj4YthGsHWUOrrkv3GNDMmeJP%2Bo1SiMZloM3TR1AX0N3412nu0myYY8CarmaOtlnVONjix38m%2FGa5R5enjfZG4TtjVHMVqC4%2BLw9XXr5j1QsWnYKecwkaL64FXYpImpWpG%2B3c%2F4fXGJokyPBqpXuchOVUVWB2WmAl4cEPhH%2BHL4R2Rw1lp%2FVPUjDo98WjlmtsODOls%2F7dbbpw%2Fd2Er%2BB3EZ3dG6PoE%2FZMNWl4Ri26%2Frk8vSeh0Y13AKasybGqulGVFNdcFRsWHjSk4KNiULHEn8CnabTybvBMOBajEFUSZbqjUIqEuEGujDGK1wHdX59glBBSdobMUJNMKGWyMEGOqUBqOXBHuiy1YckSwQ0b7sR2%2Fg37%2BHFCfIcH9FgLQ%2Fue67x0%2Fe1ZBjOj6%2BFZqaXchHsmiXqdX7C3QDJ9cl4WTYZILXegbH8rW15GQMOR337roiKBq5IB4HT5BqeEyVGnIRkiBu7ifpLrAxLK0XDOwo5wrCMVFBBqxu6pcZTmu8IssyVBFbWrgpc%2BMZpDYknk9DCkre38l%2FVrSVGclFuB%2BZoOFd1cdbv&X-Amz-Signature=e0106ff0b5a7a5cce8ee448b40ccbc6ef8f2ac16144cf89332e31b1d78c750e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
