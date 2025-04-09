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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNRJJZJ6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T032549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIDu7mr9ppTru7snaJIlDGxHSx9gFLZpbMaGJwA84ziLnAiEAi6b2qyE9QMpHN64OWUgyrIIxftsdxTxnA0gArZQXl8MqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGp8X2dvEM8Obwv58CrcA3x0tiz%2FTaGV5L8xTKLp%2FhLbacCdSFdepydBKciuRmvZEr1evtSxifLEZ2v7TDVejyodRuAGsaxcIw2LlJboHWTs4LW6OYFaL9cEp5oa%2B7bPyHjyyMcBtfV9QfdpxCiw2o3E5kykAraECPuxPT4oTCq8pGsiu03FgRUm2w7Y0xw4yJjgHIgmGgE15PrahkSipHfW3LOXef2cGa8TW9fEej6VOiuAFyn5RvvjTHOK1ZTq6cVqb3tyvNsI7aNNYqPRwDxhYGcEkHzVaWHhBwQIafEFtYU8Z%2BPla8%2B5AQw4EWuWB5KX%2B075drPp7veT6UmQmSIm3z1YpVbxRYUKjYZnwzW0dD6uU%2FNQj0Y9HHYHFURusiuUhUD10EIZe6XfTarfk4%2BCC75sneTaR6olVVKs8Zk7Y22ERbN1vK44bd9upW7LRnXJ6hIN1MaUR%2ByqWDULh0Xxrk2C0ewVwEgXJQeKC%2B1QnOckVdM0ZcamMWB0l4wojdeKjL%2BR3KfH7em%2FcyB%2FIrrwQtKpo8WhPUEC%2B5ix3ilD%2FDwIIhN98jwu0qoivjjCXvE%2Bc5GhsnRpyR792JnaG6ShT9Aikypxy6v8%2BVjECZ53L%2Ba7Ic3Hc7sR48Jz0qEd%2BBQLq%2BBVTXkmJXhWMOa%2F178GOqUBDz7V1bAaXOG1jmfZ543rMSKFKnZCoSW2wh2Il6LD3j9VJ4piycdOf2tRU%2BHUNDlZn3YpRx0ii8%2F2LiEmL5gy5sjm836qIhjt1GNY%2BZPVMdd3NdHSuZMu7I16MzdlStpWWd%2Fwj57V2ctdNtr4hyDXN%2FzWf64tVA8VNJaSN9MadwaJnTcjk12JAsg2R7X%2FNLtQAW1pz4ZRPwBSRspj7sm57%2BoMYY78&X-Amz-Signature=901227e03b62004d0d136c253511c8ffb328d775e220ab0ae8dcfa2cb683887e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
