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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7M3GXFP%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQC5qMscGMNeJpPzDBKwGULmPp0TjRlo%2B6q17ZoMFfIEkQIgPzG15XqQHBMiBKaUQvSjHMdWh9m0UX332jgoKvw58m0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLQKeImZVz5pHb5ZyrcA35UFq9iKR%2FmUWVFPSD8qPeEddeBgFfzHiMaG03npvptxUcj2ckx%2FHrKXkaL6P1sXJQuFKPwsW81lzZQlpymeIRk8SV5DK1kQnGNhNYaTz1T717FlssBoN3Wr1qCxBn%2BRk3QtYZyfMEoEqPN3CcBOUDmu98Ws4TbvY%2FjZ2kz2G7KE0DKAOmn8xdWP4S80TAldAQAjHddvDM9SURJ0BBQHXOiWyhb3hxQIYoB2B1YzaqUEmXECXGS%2FHMVwS6tteB6lZCCzhz%2BfZKNKMsgkhnvxuvFKu48EzE3y4CvtXnNG9WbWN%2FKRpu8St1E5KYWoG5KzOfDiighYmkHBaD8Ch6zRPldNlQslhZoAo4YLb3yj4BAVdx4%2BDp%2BctB2ksTXdzjqXGD2ecLiGlD4S2PbfM4eQJhOaVwmzVH1HoHWsqtM1zx%2BWfZyt85mN8ZI2HPhLbw3y6ujrP3iABBCbcJogEsbBkmovfdDutZYVsLYm3BPIcrA0vilIq3glwsMCwKSKbLyerYRgxWLRUrs6vWUbITX%2FruPGXMa4CF%2BCpeNqBROUwBSIxGqXT%2BBCsg3VLE6smH%2BcYp9NQLodzrzZlAOZGbDGkFxiRDmiNtDlAcv92zBVy9i86sKIYeYbQnjZWUPML%2B97r8GOqUBFgMTSj23oH5bhjWWoXuIZzCqnnzwyxgXDLiYIQrwmWGGlRISoTN0%2F8p6XGMJCXJmNvFdWjvoZtblWNTku3ED1ZKOXWiazO%2FTwQkMxVpWFT5x0GyraRZ%2BG3XcxT7JLJunfXg6HTJPtRBruwo98vHD1SZcXPaHQSUlKQ9xbP3Wc7CKxYFrn3OBrAfg1AGRzPWtgsHlU0iDlvZGHeCUZyGPLLMeUa4x&X-Amz-Signature=a3fdcda14e47adda3c86bcf88e44db4989e04cd9eeaab166ccf9d704b7087780&X-Amz-SignedHeaders=host&x-id=GetObject)

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
