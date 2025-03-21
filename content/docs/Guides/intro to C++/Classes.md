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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DS5CQLI%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIAeYGo9CUuC0ipB6GpRclt8BJNBuahfkwiUXMD%2B4EhxuAiALZed6YyylvdanhxhA4kc%2Fx%2B0JEC3D7fxHKTzXPxlw5SqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGL9IXAUx%2BgH1hNOmKtwD%2FTSYHJN863VtqULVNLrrWWKj%2BBz%2FP4gz5JcBEPss5WbU7Y2XlButgrlBECIMsy4K9gw0av0PDYRSkl9QQn%2F%2FiPg0XxIX%2FOzW75s9nGk8UQ7MSpAxzqAXaG2dXDGEdEfM%2FQWvO9bcKjGBD7jjyafRoTp6aHdXZWEzPBYdR%2F%2F0FzBqgMGivir9NTmnHUwp3r26Oh%2BPo3nLCkDP3Spgbqx6s8C54raS6TUZshTGLGZFN9ehxUg4DkYuJrb5kciSG%2FN%2Bt7bQhKVSGDDhe1zCuEaJycjIOu%2FeJKuyCXzPc0bHxMBCoFDI0526TkKmfbyx6ELTNS1W4jJD3UGrwv92W6Z1elNWvGKK24A93F152UlYYcxFlZ3e6YhyM%2FJgpxOUjSALaf%2FRaDYyhnfozVRcQLXu5ozEBbytQAiVMoGgydK74gH40YFmTcfv0T9d2BsPCLt94Hbzkg%2F06GpNA9Wkuek%2FhHFQP963wxtrtCCD0hFgZ8ZTCoed6DJw6cyh9R9KsEHFHKOVq7lE2Xq9HtVWhWGA%2BJeqjUMdI3RHWfBIdJkfqojMeRpzYPrSYUWUK7rapJ%2BoR9QEKn9jNllejfw5grNk0tDmz5YdoqOFBdxpTaN%2Bf9pGD97iqpyVTJGffdQwidv2vgY6pgEswzL0gyw6ZV4962ngivZqXt4SkG5ocydJjYLxhiyefJ9FPhRnssYsyVTkzaiMr5lGbrztLorINkTyF1DYWdaMb0VuHpjWWgfJ1qtRUVGRSGhd543LRx1%2BYpV4G4%2B6blI%2FwmBroPUPmtbG57gkIDcOjJJxAI4VxuaRz%2B79fll7wmQEDkdt%2Fnm9ybEKN8fYeRb0BqCP5E6s6Eu7bn1kGQfsE%2Fgzm7JD&X-Amz-Signature=f1a6e322a9b5be59aaa339554649b8955fea05ea331f9e6807b3afe1517dec29&X-Amz-SignedHeaders=host&x-id=GetObject)

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
