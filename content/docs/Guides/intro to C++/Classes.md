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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666362ODLC%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIBKON4HCoq99lFlVOFc2MLQdqOdPXfNi%2B6%2B%2Fb%2BVh7PwAAiEAhZU%2BUklAqZF%2BufdLDJ2NtXsG3WsPEGJrhfhpJTFxUV4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOlhJE5V0ZPM%2BJFkJSrcAyhT64egqrLkRlLbv9rbYcGVAlDv2z10UHauNQqqVjz9WZilbDe6Y0OwhKvNTsjVsoGWaawH09THxKkT4h8P19TFY3UN4EmUBxpzH7JnKMS4LUfBqfhCWRx24BUxZZFnYWF5kyoAQdUKpS9qBGjwPd5vlIUtufcQkSJINb9zIWuSp8WqOBKZ3PkdxGYPUpcI8tq9wHWojDfcCVoeuUz94xu4JxrI3TdH%2F5714wNKr1INWsfNWczE%2FZFysmle3j%2FuVHIu4Ic%2FraLFH99TxVQE%2BHkw5rHILbGTOtC8q4e6U4foHrexSrd5gk9xEml7sqinLyTx8coJnYvyHNU%2FMLzXz1Ua8gS%2FvxigCgpAYdWsJZMQInt9SZrIOZDiNEI47LjFYc4i56iIjV%2B0krUBCBC4axVFMjlNd2rQjMS3HgS574fuJozmnEE3tXOx6KhHZ5RvA48BMXak%2F8hbUQD7TvfMOCrVR%2FScjt%2BpMDfB1GYFJBysCQyywjUPpN4dBAT6qeT9MhoyO8ttzatdzzJRQT%2F5%2BIkib6U9nk565Irl1wHG4V%2F5QTrAsY5D33zXcTTUx%2BopL7bjSDtw2zZ%2BjwUMEz9wim%2BBx4DhnnJbeA3I3i2Xkte76FPzJl7p%2F1oM9zD3MJ7Yj74GOqUBNdr1vKcogBgPD7Z21lCYOrO%2BqVFZjEfSco3%2Fh5Ae9%2FCKmqgWmsU%2Fxh%2BMc4PCBHr%2BhII%2Bs8uFC6Sld%2B4nJAbptQvJGPM2a2kXdaC6TJkskkO3kwPzuXgLa0gfW2FccP0tUxbG7xKfwOMZR6qOArPF77KU%2FyqPS49zIn7mQpbshdzgkaLlDGLvfjNIshvdM85nwJDo%2FEdmdhH29188g%2F7ZBu1bZIi0&X-Amz-Signature=35b7f73aac1953687d6890eaca028c234e0f96c78ca9c07d6124672f52580e01&X-Amz-SignedHeaders=host&x-id=GetObject)

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
