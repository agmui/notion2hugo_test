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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKABVLGL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEY%2BlUqWXXl0MN0AFo8jLqMWsqP7mj8XEY%2Fw1KGBr27wIgZ%2BxbftaglKDuVwqWWUHpPPFLlFwMm6tNWcTtjjyLKNEqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwxzWF56oMToV1%2BrSrcAykBY6VuAc1aTFa1eksenKCeBwsGMINJkgGWi4Unvrotb%2FO%2FBKj0RVBY7CKtPXh7dFgAZqqOzAHXMLs38KSPwGaqrLC8DAsC0LNAqGKJ4XCfasQRG90U0vfLLLfodiIykZh%2FQuTtadETMNc%2BtYXXGm%2BD3j%2F8F6l1xd9Ye7qgVajorMs23uyTZlMdqPjdRBcJqB9KPFG1l5BDdRfDjphRUAjOSSxPOKfWm2AT6lI09fSF67RDJ6iq9iSyQQ3qUzSXj2CcC8EAJDtOVBbMUy1TGtDug4L0YFsUOcWSJeT2eB59qdM1dtBmQPqlL3ux3ySqs3iwOOqXY0qsXS%2BR%2Fw%2BT51HeFTe8z4TWOLjo0%2FX3cBdZDJB9wXsG8eMn40lP6xMLbL42YAtVFMIDeh73YTTaC%2FWLpDYnkJ4zGAY8awePL6C%2BHETywQRHhtbkR8RyxZzRbd3vqEVA79Bix4VBBmHC%2BEG7zNn7rrlra2tSRTFPsjx43IsuEqtEt7qoO69ImPAVzhZSkHIDeopltpuSvFH7VmlLMs4WM%2FkRWGvz5fKqOTHgj7W63uPqAUOXrm5QDZEkYV1IImzi5pVUW9pr2enmQfE5TFMp49kVQ89QvSWR8J2heZ%2BO8e%2BBQF6O5AqTMKCT0r4GOqUBn8umoLYzRkY3FKhEHgei%2BSr%2BYIH6NGyoScXKfAVVJN98vgR5LFn7MGDFSPG98uDKntCY7ZixCQXMDvf1BnwoFhm0NHbJO8qD35v1TYQFJi5%2FeHk4P6RGdaPjGLsxykzSnb1YmPEdx6pCxaIscdh0gWdc8KQAKxN5Pnez20PeMiT3nCW1jGT9EO7E7SqtUtKqVCt1xvYJM2shxP6XuChsTjZXPmR%2F&X-Amz-Signature=cf083e99c35fe1f4146d3cdda607d3eafaab31f8003e2fed45077a4caa21069d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
