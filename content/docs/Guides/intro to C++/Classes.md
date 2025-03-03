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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V4FFMCJ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFS1iLRWh3i0mD1rkH15j0DgakaV82SoKa313pnk7qBFAiEAtGXDoSc3M43hn8bPIjP8hN3n9apbx29JpaLDRyVqhPIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHefkJd4o0sVw6R8qSrcA6TUIWZsYz6wEVOKZxCJHK74COYj6Gue8h8e9Zluf0MtkdjMOnhCp3qUyHIv%2BoDOqNfDTwUBcAirksWnWYrcsmplba9n1xrOrsIM%2BKj%2Fb%2Fmd3rA5ChXX9hnfQ14K2orXAHw0LabV0QyKb4kD%2BIJLH1H6BUl6BScuOq8YXwhmiZMjTnhckoD3baWjEeDg%2Fyna%2FloK5Mz4Y0KqG9x57EqCnx9zDRdG82wmyRMrukOQG9YtjsAY6oi8YVsDRjIwG17c3k%2F96YzGljfG41qjX2OOeZbziNqjDX6jl4wCHsGY8%2B%2BwaiVAaY4mu%2B0KzzevkIvFz3Ddao9qQSBprFRtSFzIQkTt57yUtV4QhExJEcACNacQdxUZLwoIFyCDoZ%2BMHMYf7bbMsRG3VPxMZcORDiEptM44KbwkyBiyIX0lL2gzlVoYQm%2B4J9p0QktTCK26CQA5KJCzD6V1xQwogSqzBb5459RF3yWxtSeokA55yZ5uGaepx7r6JC3167RCWoMGdrLGHYw9CSoVmeyNUzrH%2Fw8wReX%2BTNGrtasJAwe8HuYFnNVjl3ATS7qgaBNvNrZQ2skr7BzlG5qhRmiJu4rrLKRaE0yACItslgeL7wkeKdSFdJff8tTRCffMTu%2BZoTupMMfJk74GOqUB0osyOZHYkcalsuyZts9bCrHcQM7AOcY%2FNGX8yP9B1LxBOERETNqZONhLI9e6vF108tvCFDi7I%2FTWVbo4LaDJNakFTVRXZx2HvKmeUzWxCoDt27EvvDeclPk4asWrsbwE15hOZOTHZ%2FlBn6KCsETwl5AsXqfEae10vmJI5ZMudLC8XsHT7ai6Bctog2Esulgi0yPt2Vh%2BXk3qUnNA94VSTU3DI2Fv&X-Amz-Signature=890fb03ebd8372087fd2f1cd2ffb2635ebc21b401a942dfb07651cd1034388b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
