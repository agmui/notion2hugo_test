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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3NMPSA3%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIAMaEtqgfWuEnHNSWf9x02s1pRQpqrvJE1Srxg2qBmhJAiBuzxHoGJesTsHuTG4iCoCOvf8OKUutGB1cXtlyc7z1%2Fir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM9MMqeEcHP0agc4HxKtwDaZ9%2BKbfx4mGIRj3eSxYPSARS6N7PYAze7E81%2FAW3%2FVW8yqHYKdLAJggF242oVhPf5cA3%2BvrIc08H508k%2Bia6xicf2veyIBqtyyTNML4tlj6xCK8Qd8PYVmbq8l9MwYeLbGQzVMFHZV2oXDZfJhZ9XIElDg25psNMDFSnMbiXsbI78tK3n%2Bz2nr5c54bg3HnB5VLDWLE0rIcO9YVZ2QE%2Fx3uuVhb4WnUfnIra1N8hMG0DJAD%2FDpO95FbNQEjJvfoAh3aQnaDDodR%2F6e5x1k71UJOM8H3Pf109Ex7OTCN2z1ox7RJWRVwl7WKTAo1AoK1HAEDBh5F4TWZWCbncw1FkgEodYJERbxnd%2F5OBpFY5K0L%2BK5hD0y%2FSFM39D5t24%2F8zQ5ghi8g5HYM572ueQT%2Bs0rQbmk%2F9RTV9IlZUJJpkB7BL0I4pF40yNQk31nsqzrKYW8LV57QZq8h1KYBsZdxxw0%2FuRUdSyC42VxjRHq9pooiyoYG%2BF3N7aiEnUThNboIZgG%2FoDVm7e5b7eDZS2HeL2i5E2uGb6KL5flbdPj1fNu4oIcQYIoFe5sYS2ZzdrevQ1xgHZhEglKu07fyI7yxgX8S27jUyxEBg87Zi3KGNDFYiejpXtSCL4v9yN08wseWEwgY6pgGuDV255Tw%2BS3PxPPoAaYDd56PYVGYlAB4t5gw2wNALxRsvM3uAfQkU7QvvH1HyFTVK7oSJGU47Rw%2FK2b1zrqAabYTYy%2Fv73%2BmMdtcx1wiMvJtCEu2FyaybqqkqJ%2BzUjXIqxhBM44o1HeJ2uRSmZVoZ%2FH2JMLr0AtthexpJYbYV4jYDWMyWNWI1YzAibDzviJZbrTdegEkrWIQgy7PLDqBcmdrWij9d&X-Amz-Signature=9e817f5d85ad0d76503c70f100259148870811751bb1daac3fcc1d6306df1b01&X-Amz-SignedHeaders=host&x-id=GetObject)

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
