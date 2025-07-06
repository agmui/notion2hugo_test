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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLE57GCB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIAMVQKPInTfLR1AzZ8ePxyCHAcYD8Xi1JjrcMxsixQZXAiEA2ZjeXSRe3gnC3o3B0%2B%2FKZk9wuS0tMyz%2FG%2B%2FyMLuEpHUq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDDzaiA%2Bpuc%2FChhHGcSrcA%2BvxaufqsPp81mQkkaO4rs829%2FOJHR1p3VMpAAzhnSDRQudDOxeA%2FyXP5ofKYd%2BcaH1E9vWjkX9y6v36HNkAa32846fwfWjmmKKCzJo1HCEt5Ju5uojkOzWktY6tvH1EqTcnsjy7%2FLVatvLvEjfbLaasKwtDoAG%2BHi81cW%2FaC4YLLUz8CdFzYJReY4WtVnVjAFyda7pWT1LcLvgk1dm402%2Be6v49EtgFDmd3yR6vMAz%2FMdWxeAUWatbIFbOObG9LbhbmsrxYMhjbH%2BsvdiHRRfbfg%2FYfQ8rC4jMFiJUuAZnAK3wkNDyAc1FCo4zgWiOmyyVi%2FILzPlXqCA%2B%2FuMZgeyzEgp9dxesctzcGRt1SS9GWqOq7BajTLb2EmFFIYQHuMZs3yRqSv7v5PwLCeRDYUH8peEAdzCU8%2B3JJvEs%2FH7LZcpedG7nG8WW8dJL%2BP3FnjmBxJhPsXHxLGlVnVg7VwHnFAP8SvmL7lKVcFVWJawtXA%2B%2BYLmN4L1DkL6JCuoO%2BQXiPGsmF0g1Fc56BbugCwzxtYxqcITu5rktkEeKJtndoKaEXvmi9rWgBRC8edIVgkMTghd2u%2BbDRvoITyqviLjKgTPau5TnbXaJNO4HevqJfrSuYal64%2F61xkVc6MN%2B0qMMGOqUBdzQKH6yCslRTuTzWFGYYdnDEO%2ByYzNnE2k1Nl7MzMxF5rfFxvB9EAv301QOyI0pFW%2BvkKOwjDsvQhKQYSKopb0ekMbOkpmqnQn8Q3XXct5IqdBNLzNPClqNiUpUpzlCSSejIuaIFxabKmWMrojDLGbbtevPqRSn6u62nEB41rZyFJIbakYWf%2BXcoHQIkqgaq6A8s6uU9qZqWQrePNBTIoiyuTeqq&X-Amz-Signature=15ea32a812928a2b686813528246ff42b259e2417b45c512f40332a5d6ba7b02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
