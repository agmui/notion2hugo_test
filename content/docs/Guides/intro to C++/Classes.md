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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IGBZJAN%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtp7kEk5zMimKQEzNsVo6hDsAn6Y6%2BPuhkqUq4gS2lKwIhAMJopPtGVE1FBvhzi40lXhwohuhyjrOAgViIs%2FPaaFICKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMWVgPZSWQhV25P18q3APjC%2BCHX9aMMNe8n5wVS9fVEeZaynobAIKg8xOvmzMR2jbxCwzTY9clrH9ZP91KFkdf7tJb0sVz%2BNR0HVZ19HHfjpsKZULsPdb%2F5ZJMUDVE%2FkEnFhci%2F4%2Fw2q4%2F%2BuPE20oSSWA8B2HImwx6DrxcyriH1Ti0wiLVYQFJuD38C3z5U157S1WktltMFfxvrAA0o%2BgsWpy%2F%2BwvECvcNGWssbbyFNE02zFkBe%2BnD%2BY5ZElB3NU4ccXEF1kx5E0VGhdNSAkUZlD4ohaW4MiPDaTQQKqJTeQyocOYjAleLIQmPwwkUY%2Fsqe%2FIh6axvvC5IL6e6SN7zI35X182TKHIFQ8s6SIkFxSlwCajikj74FjdWeajYetR1FmK1nL0suMEVXQ%2F6%2FgZRus08mJH5rRWJ5uK9%2BaWDe4jupQ%2FiFNN%2BkQulSt5Z0zoXEu%2BnZ6b0wjOtKDd0I08YSrdigJrFf4s1Q4g7izW7%2BYJQGClN8K3cCRIyQSiK7jDoJ9%2F9iivAVZHCMn57yrUa9u2EYZ9JfuItCUgzqb69cMtoduObolZRbm6XCAVtAdkRoq3anoPI0ds3KSFzmETApzG%2FMng6IKenXR2T9j9nCIeLmGKVfkzGk4JGWq%2B2g5VdJrBYrQC6H8vl9zDEst7BBjqkAd7RMVz2I1yR8nX1A%2FWubCgMaclL8IuiGEibn%2FNKkOiAsvxt61qjpGRVdOt27rWRgNe6BxEQ0%2F2MycUucZ17ZVNqX1dmmnf1av4uZw2AL%2FkZoU3gDjpnhCljrKuGbzfZAgdctryZ1IUHmDPeLgiTEF3WVOBKgIcInXD9e1IWD9kXcB9nlqOCX%2BtJEibc5lYsvyUM7IrdPW4Q0LySlq51PdsFV29M&X-Amz-Signature=ba3c8a162eb6d0a44852a4c860c8dc51ca2ea1ea923626fdbc5dc3c98be6b6e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
