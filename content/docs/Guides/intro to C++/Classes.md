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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XITDVVWN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGbgjYPBpn7600%2FmMSP3XjUMM6JJQMirIRIeF3gSE4CvAiEA1WBXYBWK5iXO6LybhQpf%2B3ikPwqwkqXcdyI7vl%2F2sF8qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHt2QwMSv4%2Ff6FH8TyrcA%2B5f2U0Nz8t1mMj33REF3uugeaP3Wtf1JIfUVdgrcjQUGrmc0urNRfVQgzPSY39102W%2FELgF06YNDdtSAKj0bustJdyohPqEAN%2BdXy9FO2oUySixP3QCz1LJz5AS5Yf9u3HOnt0e0j%2FXYlogTAxlGa9fOglVABORNxeNFSQRFNR0v9%2Fel%2BD40Z%2BmgJjgL1YEouZ95kI0tnpOSxNchWb%2FZKtlWUiHv0sYO2Wi82tkc1P1TIGWRwChENFbp%2BvRjXIhIwMw%2FWt19tr%2BG0WTEJLSIJ2GW8DKWcZ0SDQMhPfv%2BP9dqNGNrSgdH4VmSNxnQA2lDQ%2F5YM68mGll0A5yWrw6k5enABBg0CuYJibTe2zbyE4ZEIa%2BRxfysA%2B%2FukTcDPw8XVNvnmPcQ9l6WiW%2B6LzqdhufWJheuPGBIB4ZCZulRt49vNaiQ6gGbj%2FO9li5%2FLDBIWmNrbGaH8wCUS4CcrtDKiGXB9XIp3U6qa5KljfIM3qMZVBzU9Mn9EPm%2FSTIlmdAUKdYJLeh6gbmeIYD95s7%2FCv20VQHIYUmw2pNydP9LoPSMSbhuLOC9n7eyPFcCTOTh76Sl04Z57SBp8gek1lvZ74IdL1sOkrAKPuDMD%2FI88uvloyXmptRr499uXR0MNb9ssEGOqUBd1wiotzQ%2FBguMa%2FT%2FbRpRIKA3eoPCOxUnWF5wz9m2njGxjone86VskrAqGqDS5NIQktkfBStP8JQQdq1hvWHrh5mG2Os%2BARhlobcJM356ssO7cPvg3HEhbJuRryC7OQ4qA8Lb2zKASyDAFupYN37cjz0ijgkbrXnhF9uTpWQBwpf%2BAzumNZNJ2oa8Qq6SBuI9XjVd%2BEHTuo%2BorKODjABO11t68Bl&X-Amz-Signature=d0f1e4becfd60e07873e606ad9a5a2fb77134948918de6f1bcbfc4f59463b01c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
