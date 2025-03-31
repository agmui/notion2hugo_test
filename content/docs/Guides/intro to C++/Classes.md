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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH4FNOVX%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDbumL1pNJRim3yIluDMR7%2B9m0%2Bmbw1%2Fg89N995TLqcqgIhANWlov%2BK8yDJ7M3zhkQTJT4SLNC5Yx%2BFbp%2BvLLwdoF0EKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoWTtoASDqG2mtktIq3ANX6VfZKBdFWdi6vpnAJkMGuCwRFsav0Fevpr0CkxarnrZ%2FRyKNLjBjdeqVSJ5IXAPPASLlifim2JhTRSQWW%2FujbSedS7ZacXEyLAwnuagzn%2FS1bLiMthpsUB6LD1OXhj%2BNI25LpQZeyaaZ1rsJ699yTixXiceRYZ5Znn5WbO8xl8LAxZPrEZa7%2BBGu4b77Rxl9GewHnkkfyZiIuZh5tDdi4Nnux5iEWQjkUNpyFEGmBLYzPsK1h3fJTiLQkRBwdYcxPW5eTt2WckHBU%2F5kCgjVxTB4d78htpcSkzvm9RZIlRCUi%2BrmhLoEnId5UI14NKbsJScc0jqI8L18L8%2BWGPSS1OIt0kmVMEbmZjHk47f%2FiNg4DwIgQ7D%2BAHpkkZmszOMpQYPt0QRmFaaYYXGCDoKbQDc%2B%2F4EOdnOBFhu0WNuXT1f6uxqdjbjKilV%2FXEz44odCJP12H4N5Xh%2FL20DlduBVq0u%2Foc6nCZGuuhRg4GloSD9VTMlvjzs3r4siwcYDZNowj3WJCeYfaRY%2BKwry7p%2BGx73zlni2I0%2FSz%2BGRdLhhzYTEaIRmzYwl%2F5R4ml8NxRvMaDyKedIvlhBkH76JAJiBjtbMD6hqqjg9JHaW6Rer57A1ue%2B0XB9edM8ilTCOzaq%2FBjqkAZkg1TKVZEgcqHka2rDxtvlMjvDkF2nbC7NHIkqfwFj5NeR01iWaI2NRdXhaVpunP7ZY6A9W8Flq8%2BdYfM8lzteN2QjqeXkRLwylGYeRHSDOnX%2F51xKKnkM3ioz9R7nBI71n8%2BmBwKMgC%2Fx3tgwyf9usC17fzkz%2F4Pay9qTjrTgugXGB1ooAAdqyVEbifazQcZgnMlg%2F%2FT29P7RF1ihglB79Ouxb&X-Amz-Signature=ef4a23cf791afe019a80b969c9e88a1108a5838d233e926f1586f6d81766ecaf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
