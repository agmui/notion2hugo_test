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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6GWQTUN%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDqTSIFbxrzOkvbGXI8TTGVLV1IDfah0JGAyzY%2B8u1W4gIgCaW%2BrNYNl07%2B0B7XpOM5Ihq46dXRX2eMqS1UFUeWR0wqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBq9C27SD%2Ba8GFnxCrcA5Yi0fATPGQigaoLjkOI6JP3%2Fni8JAm4LcX8rX7Q%2F%2FXmhpUusV14qBrMIqanbz%2BM2QV3CUGL6pVfrhb4kM39NHqqSckzvOgMF9jpjBrzoSjeoXxkIbpsKm5DRwMg%2F9Ey8JoKpDRE6NWMyu0sAbm8sYBuWKuLkPta2RB3JuX2K46NimvzKzHk9obnC94bBpwWe8XR8NGfNIWfYeE3D6PNcegOAveic0tpnHS%2FFyQ%2BkaE1D8M97xZLD6xr5M%2FI3I7v45tRArSIV7%2BcmNud71HyLvd8Gjx%2BXYDd4p5uC%2BgNDqGCPTFXonhhvde0XZiAzcLAL56v15PiLpO6mh7O%2FL%2BxV876jDIhXzYaoHdJt2wgLgdtdYOX4hRc2VpPGwGa7hpUZUGDi7AU7AuygRykO6qawNnx6mgZRw5DtobUKvQEG3fF3OsHJX%2Boh5xHtMngHAogW7bH7pHV77eST3CJjEUEABSvH9%2Bf%2B6hHTXcwglWFaijJWII%2B6f0i2%2B0XFOmeJKaSErurMUbshzYfzQODgWUZnGYwzNiY0AaFQo0nEwqWpWglKY7xgCEmEFPsKluwVc2E3Rg9bxBavDiOj7yLAypfCQkk0%2B8ikggaJkN0dEAw2rA0dTPSR3OflPZKkmrzMPn1y8AGOqUBYmOZvN%2FkYdHAdzXHkvsDz9NF2BCglJJQpE6JUqkMWQwrBqJsxXVYb%2Fl9V68YlPt1ub02YKGm49iPC6dhaaLmxJCVtRjLH52lXxtuCm%2BX%2B8P2nTOz50xKhmnBAra%2FR9KQWStgwqr%2BurdlSa1CK7ZIhvOEbtP4Js9ReYaBj7lYcRHxRRmGTbJHUu8OJzXEjaRrvOEh%2BcaWrZU0q%2FYFSIEf5A2E6PXA&X-Amz-Signature=6ab5fc3292e7afa16fadc8bddeed83722ebba2fd9302c1eb31b82125007d2320&X-Amz-SignedHeaders=host&x-id=GetObject)

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
