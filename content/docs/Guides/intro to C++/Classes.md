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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI73EZK6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEt2U4Qs89Z3SWKRJRrnD7Q%2BfPFkIuZ0RiamEH4k9q72AiEA5xFIEJffP8vslyCFHokP9ZQ6hKEvdgPOiYWd49b56agqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOais6LXPxCjZUmuOyrcA40BNAdqqL%2FItbdN913gNBbhXQqckyrg6BIwaH1H%2F4vmLa9I%2FiPlvkJa1YDMXyl8mIxmKcMp%2F4PgP1dpGjoXa%2BJgyB22suOLIjoeqEbYJ0kqlohia99fIh1I9S7K6mtkmy66GEB2HFAddDij1lJfiRZM2sVHaMfJ0ZdPXhnuRZzhde1LcKyzh9H7BkkQsvXCTOr%2F0WlCrlXcTLMvOpJ%2BZCeOHrhTBoEzW5CclizVaBA3Tc9AyQWQl%2B%2F85UrWooR21x%2B2Mu43WC9to2eNQ2WRowyL7m7E8UHBv%2FR5HXBUFGcYExiGYTCaGsRankuy8or2di8na7ir2A%2FbialdhlYIytvFoAdN8zCg%2FbvHSJk9S0VQLQLM2hDSReSEiB27CGU8%2BUvFU4Fw8bqaE1qaMvtFU1FynStUk8mrYlCwqGIfnfyFxrgKemo1JpPJijFkNF8XotJlpq9Zyxy86Cip3YOaeb3K8%2BHaDpqnpwQ16UELR%2F3%2FqSfKhvb0kZh%2FqYsQVRJku0%2FFZBUfxlkTk0me%2FBQ2WJxUE%2B3eLKXnbQRtIBX6az14XS7%2FXDUT7LZ8no6GprL6ZJnWFAYaZhwN80J5E%2B3GAaPHTIl3Id%2FYjkj9411%2F57C%2F1nsQ0KltzIyqkDw5MNW%2BoL0GOqUBasaif3az9maxAiGJg3dhiIOfdpUjZnTPUPAgFccpx6TWYt1E87RcGTP4LWNZHyyymBSEoeVhHAsD2mx2KwEcxy%2Bue%2FwCprVCy9ZlqcTXA1mHXTAhfOAThouhiEXWOG1TcsDBYo0RrsK9d76wxjxMkZzHXoAI9PzWrPyrabtOKDOIi4EKAXrepXonqEk%2BF5ahjhF6CapfKrfDqFJPUx35qZBd1Rxx&X-Amz-Signature=ee02659eb35eed4f38b92dbf09588d1df221e01a1a5b3ab2ebc93d6fd6826fe0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
