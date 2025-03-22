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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGFB5IZZ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIHffLhKuKPS0BonM1FwMFaMDtnI2hhMEqPyVI9bJ%2BObqAiEAoHVusY0km0BMBetoOc7irsdhgJecD2%2BsLcJUL26g8X0qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuP2VKNRZYUQE%2BmwCrcA5jOe7fKpBGN3NwOlcb%2FwQb%2F6IVBfOopUIoXnyKSJYMnmkCxqxsHBUhxsr6tkO7IfMo8CmGM9Dx%2Fc5V0QeYR9vMkBYfZAH4HsuQ%2BsKrDBm00zyTHCdzI68xJRj89JpqfK8IGQ9VAtSdFP2NWdiNgtM89mB1DlRbwFcM5Hx78CjSKKEUZDMB8PxwJxFTiLf0ELEvzRSWbYoycUymvc83%2F5QPx5VjdRqrJCMHak8OkLAneWN0NIPwr%2B8UOKC4QHFbc2wDlUif96Rpt4SIQse%2Fng%2FJHDC%2FlldFLmYCgdVGZs2D3%2Fs%2BWAwdRaFvpdV%2BBfEkCZRRiFUkIZtRLRdxRfFnYgxbocGpDeQZw%2BG3xkNbCHBw6DKOqaZaGtqlqL3htW2MwmA3XMhH%2FaTL1DKijBeO7uUM8UWSD3bkuQSEneiOHIYwBPfO4aT6eitJmF1dNWSpdMwTupPxoOOCjuGLfcSB%2BADiKbd7ZLU4PAQPniYRojKWzZepia3Sdef6oecODXm6dFeH6WSCOvJ7IAJ5u6dgZKaFK5FNtcDoBxx7BRbrnQ7b2DFELJYOdr6LiVgcN0cAfm82mAOxsD1P4gown%2FmlJ67zrHdR6459lmJi1Dv5N9rh1wZEL48onYwB3BY7WMIX3%2Br4GOqUBs2nNhYPti0KVUI7tLIRwII1EG4%2FcfeI7xFWlcYi38AoXiZjVfwvffbWQ%2BWYWrK1Gu6E%2FB2d5GmF%2B65WrHfZ8wxsOwNC%2FGos%2FHK8WtTBVgaewtJRhQAvYbutCw8Mw24SSBItgu0d92dpxDZod1qL3X5UcdLhkQMwb1INR1UvU9stHSxf0q38yvXB83ZCQsWUrJ8E5yK00p1mGwkjlkpQkOcfYjyOl&X-Amz-Signature=dd16c082eee9cc74d0809ad168f736e8833fad9f7d51ac701f66928b88f3cf4e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
