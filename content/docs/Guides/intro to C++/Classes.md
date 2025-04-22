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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWYJ4KVW%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQC0sUTTqZ8KnJTa6YU0yRvPRRyAmjjBHsdk7n6OIgQPfgIhAIaN6JozYUr36wOSw5Ei0Mll8hyhUojtuPUcsQqjT20VKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxL0COPzkeESbaBaYQq3AMoY9vfLR2BXTK0zACITu8EDWwZcNwZhJdmeTRfW5BViZiAXP8YxjxHu2RnvOQBZsfLC9vMVKb8VJ9WRLN2iZhDbrZPukkynRw87xgS9kg318i1uJ0ZEdv1vbfaO08rH1tRdLV5hXJyXxerqmLMHJgAR4EwM%2BDcMG49FhaH8L1Pc8udz%2Bntkwms%2B6owQVDF0EFiCimF%2FUUFTuanhdOFRt30IWebqgdYp0Plfmj5%2FeNjrlvFl6cqJSs1f8mmO89o6eBfW5JWUi9tWkCmqOgkdN0UWhjDdLD7f3jaypMGiHi6uuP46FwWi2loQuLrVsTsd5sfYMGk%2BIjEsTkDF%2BbKjgdeBUDxzREh3UZEvluhXfuPbB774e9ql8WGzlVeh1CdbnsdvIY2B4T49varWPgXuWVz585x7JWoLUyvRu1iyYXcnyp7UePy%2FMrBfHj%2BGyclUCB%2BFtQ95mxF8239%2F81IHm84kVVMHNxBw2WkaWfH0oSYuZxogzSa3rGaXZLHcyjKRWxxnDpKp6lkLeg991pLLB%2Baruh6Q6bCNpIIJUWrVqX2K52hmjVZNBpaDvfzr5dcH2F9TsYAzQlDcXMvCO4ZwSMxHIIOx3tgsUuaWretUAtCF7Dc9n%2F4ydBk2rcXljCW1Z%2FABjqkAYa8xpk9Nl5a1LYZymCBnYJ1vQPwSd1Ul8UAi1HmpcjKX2PTGyJEuz10fXdR9mDAaIAOsdUfRLk5%2FSvQFQO2%2FhXWN2mB3s34w8Z9FyBB22X6ZN796XKuURfbeOc0XxC2LoTCFELFBKtb3VKW3bLjDtzjQ1Ia%2FfSxiwQ%2BGo04Giw6Y9ompW2QjrSQzc4%2F2Y6Vzg8qkJfskEseYrCbsGN0hBVgw5sx&X-Amz-Signature=5daeaaf86aae632b5ac8d98d3057c51a4dce1f61fb8c351a4fa9c38335fe953e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
