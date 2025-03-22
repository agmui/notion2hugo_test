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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA354LBL%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDyl9wuGGA%2BqdwUZ827IKw7ynXILB2TIPFGyPTVGj0%2BdgIhAMrYbEpyNWtxBNGjEP5t8QRZzYIfLEp33tp9XzbqNi%2BLKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5P5yZmfMVOwXEFEwq3AP72D6DEWGn7SFF9A6QgRxYvbvrIO9hz6BocClY%2BiMJh1QIuYQwUCT6nVDzIPRFXpc3M6TjpGirp8LmXfmqCwU%2FR%2FY9REEUPFtw%2FHd44XSRPiTBHQyJBBTVOk2Dtq5%2F%2B%2BXrhgyWlA424FL6Q80BqVmAWe8UW8iF1YaGO2rHxiuNu2GwLVTuUvd5cZ9Gfhky%2F82ispq3ZKJ2JZf6WaZBJU0xJ7nGYBnRMclLT2W4h0Wm5i%2B41ShT30Zmr%2BnmtdAQfgO3fIgGdFjPIuZYv0q6xlClzZnIO%2FkCxwVE6y2mWa56LdfS2w9VQyYIbT%2FE381%2Fnzzkp5bVu0bVNFJEW9nnMSNuSVzEpN8UvohHYezj9hHmWptsyaKuH%2F1Nil4KDyN49ecoqmSYnYXYlxS%2BcqibX%2FhE03d66geKc1l3Ezl9%2Bn3aTmc79xE1AnYRiE%2BJRxmUO%2ByeejIMVYSnJ27jBKNKzCT2lWsfhWPZ7Ed%2BFebT1Vb7Akja6dilsI2v2qhQ4yRAO3ae3UMwzXCU8%2FQ2XMThO%2FNn50cS7EAISsQHSKr2miHPUNISEKzj3ydMkmCYHrEzWn3J5FY0VjUWu9OAXJhcXrbXm%2B53TzTfZhy69hONq7ZzZThOOBRXasngAO1rVzDLu%2Fi%2BBjqkAaMCNevFVshN4i5h0mreA4ZUmR3bI9KqUkLun3l2Sw%2FB2j5ow32jDG%2BLYCvBcHEI3mToIf3EdOBT%2FBpCQL8c0TmlPoV2DXdVkMGchuWY4qp%2F45PmHU5bEjIa2hJ7plN3QQ86YH9mTjS3osLyXyMEhwGs%2FONpvaLYf16TAMUvFPkGm9AqAMFfwWOC3XM5DhSglDijFjt5RB8AUgvTULKTTuJ%2BsWa9&X-Amz-Signature=0bf458953e8a66bc1f99852a0889a58b87b31bc7bd9a093d7d6b1375ca6d1c34&X-Amz-SignedHeaders=host&x-id=GetObject)

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
