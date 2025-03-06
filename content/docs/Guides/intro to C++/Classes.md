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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVR5T356%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvjS4NIeCgfXgiKyUT7Ee6ekxBdITxgWWzQJvG67uO4gIhALJQvIF21SjLi7oEewEn5Ar7skApGGLQgsMwsbOGJ2%2BKKv8DCCUQABoMNjM3NDIzMTgzODA1IgyS6sXNVPFiwvgNLNoq3AMy%2BLtw2DRG4PYUfxgS88P9XCBGKflxHka%2FCD0%2F%2B%2BKXbtBYIjzwkt1M75Bf29HeImcyZqofwncsnkwiW5IuSyPKlFkSTbGuK1QQfZTGGV40BIqZWPa8%2Bm5XYv2XYijnR8zC8E85UwbDvijdFRPVxniQtwmeRoDTFFhR0QW8slauniwf6ztpnsRZBx3TEKC%2BzVjYf9dR28OMQFcpFIoFH%2FK950PplPJxgOlQqn5dq%2BeTDjkoDP66rrYBoiPJjfBdiFYqutsm4n%2FbiQJkb7GXSZFEXPkxtN9jQ%2F%2FdlA%2B6wkOrPWf5UOVHsXDArq3wZGxDVm6uz5LYzV0rQIjpFKXm0NPtWIioIE27gBBnMnAtk4FBhnNzPJw%2Fq2WKhlZW1%2FHU7eo5B%2BSlG%2BBZzSuTPLSll%2B5r3joBMxW2f3bVLB%2F%2F%2Bl7SMqHa2Uzspi9MJ%2BMD7f9F0J87ANh4fMLWnoT2Ca3pzoxmH5oYNcRzIOaimELiLKRrV5IqzOQEQBSdryLlDodmzoAdzJEqHaTeazBLe56qESAATHMij7Xagry4X7SzLjw9yRmDR5E0H9khbVlqQueibTrWdYiUa1bkUOMoRLyG2IaMDmDbRnTZpb4m89qe9riHZdCCJnquaUqtp7T7XjDCuaS%2BBjqkAXrSxfefoI3UDVn%2B8gJGgbr%2B%2B%2Fb2g9R7PyVUuDIKEhI6RZRsddpK4NcZcl7l%2B4Nm9xrJHdGzAJuMYteRJrYnfXpuDj%2FN%2BjMcLmRE87HzQnEIu3WKDSyOh7ia5%2Br4FGUHgewCIic74I2DFVd58d91%2Bld5PITy8Ef0fOMN49eg6mZr%2FKX94BOAIvLhn2gaguOarbsH1%2FyYRcZUNxI6Ry%2FTueT%2F8EHJ&X-Amz-Signature=b9bbbc00c14b0c604b353df59c947c603c21b7280ea44e5eeac51c27aebd351b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
