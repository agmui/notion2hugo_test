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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMI4MSPJ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T081028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIl0saLYufmT5uipDOoD5d03cQSaKP13hYnj98Zw8usAIgIDSQp9VJlh4eupG84%2FxBw4hI%2FzBfYIr413Zw%2BVupHywqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2%2BiHoIRd6unQww6SrcA%2FydMxmeaJTQOQSNVRnyTQiOWO3XeoviwI%2BvljqYDIjlcndl8o0pt%2F6t39CmK0ghl1E%2BUgGxElWNc8LNLzeTC2Wfg1Zt0NYF%2By9gO1CUeSJspQ%2BaBk7JGRxRbbrhDjdzmM0dKoU3Ft%2FnzoQpxkwsv32DynW4EBK1dlXr5Yb107vzz0rPMUgPs23dTo8LZi4kpgC8G6dpD6UsE2MuXyXlVYTwDXPN8vOK7lKvsLCTHd8tbHhWM8ObZn53dUsMx22M828sKr%2FymMTFwwdQ9RiGjDiu3eO7e%2FIPogZYkgbyVYX%2Bpcw9Q1007v4Vgf6i9if8lGewWxIJZWKElhE2FtqzlG4UJxgz1xFyzeYtxofX3udzqJFFU79ddvB0JR9ZmLt0Z%2Biq%2B9Re2FsaySxaH%2Ff5d2qTWJchkzXH0xu5A3hhQfi9EtOZ66ZKoRiL2zkNxfaD4%2BJ2ET4Tc6dpZNQNflM8WNkyB2I91O51wGOB%2FsxAcuEmtTOkHH2ffh09dJjvup69RNtwDfEuXuArj1U270FGg5UkbC0KZZ3clUozDd1ums%2B50pC2yZfEukZBEitP8XPfJ5OUMnXex2o9DUWKix1tgqZW%2F0XBGmLcST9AGSQ4HTsZHq2mM%2F7Z8piqJBOeMNm3g8MGOqUBDv5KY9WIHczrEF0WG%2Fhfq%2Brr0P9oaHofK0frcCzr9ACHxv%2FQpXORGLSsgqZDbM8xt5gINjpia2YRH%2FHvdB1%2BStjDC7%2FEc6RBpbSUuFN2tYZsJY0jnKQwSDmJRC0eETRSFGFwP6GS7PEw0WE%2BrRvm0IlhV8kPOt57tu3TjBcrxBXI9ocJN5xjqRkbJV%2BIRatoUGWOnpFS7J91057jfVZuJu0QUStq&X-Amz-Signature=036cd3ab8cb1a585497cf7913674165289d2fb344d097317083c9460a3e2d853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
