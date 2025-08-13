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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SNTERW7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7NG8rI6gexfAyDi7HTKDYotDM7kqI17k4zy1FLxyzrAiEAlr1bsgwAO2aPZgbLB94ogz7LXS2rr9VAxrcH6Uazex8q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJcXQjve9lkLqwR4%2BircA5g7sX16bX0KGw%2FW6bOtoEU%2Bfxp5Qlh4cj9sAN2lEkJOhgkTyEKrYSr7DYFtkqGqpQDpWh7l0%2BOBJkPdQPp5aZ83%2BXN1uJF7tdGpZ24Cq3qbBpznOqzqmFBBsKkfAmswxQOVT6znPPbzPlZiVvFcWF%2F2qQ7ol6ndl1%2FJL%2Br%2F4cAV5wreAlvJE14k3CW1WUT%2FN5%2FBbLf8TIUihY7NWUfxTQggECD01WrKul2UzGjc%2FuBdrEtfPfgoeYPcA89SV2uvBK7sBdfl%2Bt940X0nswVPVPD8jSmLGg5AveiB5pzEzGGJOLEmssmHodzFoiPQrB3vaPDHnOyiPFxsW0k7XNrBCWNL%2BEmbVMqTUfG4kcrh1AnpCB0t6S9WOuFFPHgaWdQiTbjC1IyA4PNqdx8IKNtLXiLcdsjvinHKuTnGvXvR%2FZWmWy6PNBclMjjCNR%2F6KG3tVAU0Q9cPmjkPJnL%2BlUn2u5h1OHbZPhihoxLHIYPKqXAETc%2BHu01tCv3kYxvDaFgmOBrf52Vpo7CxBmzsqj8Lp0BJo4YfczQPtotTaU0uv1wJRkUGiBAE1s4o7RxC0IVUwNSZfr%2FSz6x7h%2BxaOc0bOKjx68hEVUvK8q7xne34duE5RypXzaHYRxi8Ha6fMKWy8sQGOqUBc6ZthNbUHoI6Ro%2FLxRGN0IsXGSVGBWBA53EXxlbW3FlhZj1kmFdrkjwhHgjnJlhuKQRc8cy%2FcWVDnUXlM6BT%2FtC1TjFC5gmNfej8TuXQXhF4LvPY4%2Fsk3vF8dwS02dxAG%2Fr51Jk0A8IE8tDYci72phih0e596jjSdfRUQsNDnuMtcyDxFFzT5R9y9m9mUg%2BThDDM2wgKL3lasRc%2Bt%2F%2BMT4Ky653H&X-Amz-Signature=93df726f144a243b90dd0a93cd290d0a9cd015794bcc0e647b877df5451a254c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
