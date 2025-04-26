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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS7GWQGP%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3ek1Z0R6zpDrv55IDklFuHff9rCQyzODL1OVm8gx%2FfAiEAr2b5lci8AnrTqwR5ALBi9pfBEO%2FhisXMW0J08PA1iU4q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMn9ayUWex1NAKk1lyrcAySb005LuuT6y4RPKe46VXB8ENAZyOjh6tu%2Bu3v0X25X5NOOBrx%2FOjJiv3EeNKaRCIaR8xSlA3YboFhEZlt9YFsh1RNurClewvhOqnG5%2F%2BgDggBYVvHV2907GBBAzGyBrVL35omDp3Z%2B6SfZhT8tNBXRkWrOXjJpBy8kbmfQj97CF2e0jeDsD%2FU4jeYTGQliGtFXWzOmxt6zs2tMRWJr3zywboAyOCy62IZzRqy5Im%2BKFWvPrb1mcYvo%2Fl765VjUdPjUc472eq1yRK4obHf0whwjvzbt0ZhVfpJqoVXHMy0FHWhYyViSpFakDcoEHj8XkurHjNAlM1HEU6vt%2F9HQy%2BCGHfofGopACOmhdEh0Nl%2B%2FeObN%2F%2Fv34yd7A4lZbWRp37DB1jQeaM%2BDMLoX%2Bp6nFbYDN8scnYh9fes99rTpbzerAP%2Bsp8zB6FAXKW4sIzeH15uu%2By1YxBD1yyeOWEXiREJtXnuAaE3R13Dz7T1KrfmvLi%2BbCM%2FiaR0xUldi6dtPB3Oe4CPE%2FVN84S7cmhgxkWUuYJz6OWBSjVpmM8TnkPNwnwcKvYzUJe4w%2FJhisTpNRTX7H6TjCLMZY%2F3fPPU5s%2Bkt2mHWMh6Ew1O7JSq1Sd%2FubcGae0sDn%2FmnEmtWML7ms8AGOqUBLHPpzsgno7PT1duuAI1mfrXLO0EKhkqRo8mwIu2tFPT2sDIEMFPwK5%2Fm6ADf5Q9nUGP%2BVOMMDowOwFJSuZbRnKpCn2zQm5qwRg0IKlj4IkGsF27FPc%2B7NyYarC7N3nYCyZrZqASKgqABp1kCGoo69h6FHok%2FU8N3sF3JYPEEKJYw%2FG9v6yQeoO1BhCRtUV1SMopBCrWuFbrsNbmW2OsIX5PxrG7g&X-Amz-Signature=1f2868f98ff714a409dd73404ad46bd1f7831317820884391eb3c41a47c77531&X-Amz-SignedHeaders=host&x-id=GetObject)

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
