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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB6YVSJ4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIBuM9JhjwY1BdJklSIj2KhtM1qT7qS5pt1kGWQZtrP2HAiAGk6Mcj7WvqcWPQApjpRZAMHvAo0udYRvgpn0XEqkokCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjsQdoIrDjInkrrJXKtwDpGM3cg0K6oF06G6TM477e5%2FPkDWXMU0DvOQFQTsnrfXHFehINoZaGQ800xVRdgMVmXbSUy%2BIAe2fKQfHJjLNBHbCD3ACLn31KRSm%2BK7k2Syur4Ink03kkB2iDBdg5OoMIoWt7db9ZPlZe2fmuy1WtxCN94zqGHhR7VW%2FMzU9%2F4h%2BTL7alwo%2BHeyDQUpuFp8DIUp%2B%2BFAsJ%2B8HiC%2FUqU9waYOkURuTNgRqO7DOT%2F7CL3N5vYmyoRwpBiVGJDFjQtFMgi6KjHM0r%2FLA82FR3xUG3DWP%2BUJrH%2FvPsPgua5ZDbmJCPA7Z3bXEVA2HpgmBRclBysGIKU3YheF5ULtYj2yfoup4bI47Q%2F1Z9CB%2FjztpwZ2C%2F%2BVzzhYRgY%2FVDdIilYRh1pCkDZ5M7tF4mJqmqnmrkuV9xwqJLa22RjrlM7SxgjRqDPIaT5GY1SWhZwBpTiYIQlerczTSR8XnV5uyaXVU3V2RXPWKzTg6HTtSZ7b%2Fx%2Bt48tyJ%2FG3YFJI5wBtQyJJ%2FWjiYcyu6Fswzp3sSZGE20e%2BEv5fOR%2F0JM9TPSMz1vTSiRQkPn5COwd4ZasTfNBINBObgSlA9Te2xhV0VXNT7tvQ14%2F5Lu%2FJCqef13rOnSn%2FT%2BXg7RV0XZ6BxZUAww%2BvbwAY6pgH%2F%2Bh5hYCs4mTS2cVpE3pwfbLXgxSSojnQEvZ8a2UcaSgX0iJbvZyXsi9iUPLDgi7oORg3rV%2BSbugwDRHQtczj1sPJbR6IzkD9G5hvus7aXfOUApjquaZ4kyIwO7J3cLs2QohALTE2zNOJXcQVp%2FSGAl%2FBGA4ynoxy%2FcdM90kyIsd4Q71bu0ga0LGrHvIaMBsWievjyMOysUEXl5S07JCqEl9kfHPfQ&X-Amz-Signature=9d7d854616f526515121f1c0a99440e28d8a73cffe93e06faa7d55ca50e0a7a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
