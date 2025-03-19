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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF4RAE4E%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCpiK5SsuqR1eU63MhxUVb2yKrhDqfOXMOrB2ZebxkM4wIhAI2YrEx2fQxg7zDlVnpx2DcZzKvVQYUc2sCUcct9oSvxKv8DCHIQABoMNjM3NDIzMTgzODA1IgyhmyEUPA76RiTkboIq3AMmbFificjSak8BG7vicajEK4cL3rJz%2BOK4qmBjNC%2BNySzz24i4vLnwLKu%2FPhJw1dfaiWmYRVHuOfT2IzRdgZ302Uw3rDgt%2BE7fdsSwjlugbeiJTkROayIYv1i7UEVXAI8COB1dfOOBbC68LCa6KIA686SWTe7%2FedvL95MAjjQ8POojTu2kLn3w4BzlIhXN0SaWbQ%2BHoON4TfPdXi99rfsGfaMcQiyCx6ahZhallEDx5l38LVc1V9Qh28vPBWLdWq0azXRmdkOhSnhpoxIRHhA393rJaXiv4BbWX%2BoGRaO8SKPAiVHLrLinDHJfiNUvxNBZJbtG8qfOhjfMvAUNYmQ0ekF6UWt0vOhScGJBBL5vrrcIlMG%2FPnQvm0%2BEuR7sBnyn%2FWAR5bxbnp7hdS2qlCxnMcnoYJlfa1ssTXRbeEewDOUuUwjg8ok%2BEBeMSTJcsO30tw8LuPHpGTVd%2FtGwChHC0%2FQI%2FpYwryUe%2BetXZh6M01SbAaEptvU%2F0lYxf%2FgVOlogclZS5M6H1lbUTlmdvbooDhpKgkRw2tLJQhI%2BodIGKBEEFFbUxq1Zqqqxsk5LT55yPwXDHzzt9a9oFB2%2FpsDy73USaeIF7%2BLoUQ2PJErjKdvvqZFc6ozBJmDtbDC7g%2Bq%2BBjqkAVkMl4uwwvgUMSnkl4Bf%2F4bT%2FISo6jpJjqct6tixXJ0VcI4Q8nIbRyBx%2BvX44Wm0AbNjcbA9GoSR87%2Byps2VrK%2F6HLlIvy7Fj%2FR6jrdXKCotosWR5sWv2LwKQTpSLzJpg0RCv%2FFecg16VnavswAtESRYYNI62VtJQxZ8XWrxZqVU3ZmiZHpHaBFsyh0U%2BuV8GtawpyOfmRfjj42iUwolCtC%2B0N11&X-Amz-Signature=d4c27e5b3f3a0d34c1baf8a343ca5648198f039a6d0b67991fbc1b255614664d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
