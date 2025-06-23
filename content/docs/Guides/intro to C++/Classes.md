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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSYQ2PXN%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCtjNImILSmMc3OY69ByQMuKrvHONeuamm%2BSC0IwfPyzQIgJLuUGgXlTQcwN5AYV%2FcxoISYay6%2BJgj82sWMvQjXcqsqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnnAKSFdxM8ButQXyrcAydbubXdDl9rcCB3p7FzZXj4Gd5lxUX4G7fm2tgjgi1M0j3%2BgFZuIcQYPTZ4G4%2Bnytq7%2FV3lghsUORA%2F9cZrH2%2BnQIGTZD7HwgZilvfyLQTX%2Bm%2BT4Y7MNZaNbzbwsdqlYAR7ulvtUVyFWNiGgmNa8WvUYKFQKf8S1qcAhL%2FNsQMR571Y4NfQ8UMDTYu%2Baa2CM2gDqTeT4qZz6PgpH7q%2B7E%2BNMtD4%2FhvRffeWj3%2BCYJrgh9ag1eB%2B9wtdMLIxKFCl1%2B37%2FA7x7OM3vl2WQAa%2BLyUdMnZkc%2BmevJ9uqIv1vdUymDHLb5ftk4utTOWB%2FLac4k5sXgU28ZdfKGXt%2BIruMw6qPY1XAITNafYNSXTFMzK9ypGpKOXwIalF308v662a2JsIWyHzUBLOAOYnrFysl4cRuE05tleRQ6fc6jutzBbSM32xeyHIiKG7bWSEwREF2ZUAHTUMNAb%2FcfdNBRPTgOEZDUF5M5r89FBAsVIWI3VJf10YsU6dYT%2BNbopu3OPXgd7PeS5gKx0s2q8HjPgAJzCwH3vNh827fHDQkYXkE8Mi6DdJbGdEoVVg5bmCtocqR%2BVT5wt2fz0dXLtx3aDNp8k7x3SFQwQvxiYl8dpomdm3ty80xz9pFDfkTJFFMLTT48IGOqUBelY81NINiFXnzajdMQj7A20DZEK%2BYIQrVaGwv8kSpwIK2QFvYI1B3FteGWBdqyKOk433hg6NMAV3%2FMKsgvf4BwJT2QaFywOm0A%2B%2Fl3PCKBfOo9BVlOSColtU5unpq4sL7e4KmUwAC%2B8aNIe4TKZvA6uKj1VVofKzrB7m9mXa67iARjsChEy7REkSKQU4%2F0I1DzMIQpAckge3VOKSDL7Pj3bBsY1N&X-Amz-Signature=dfdbf371359854f3dc2579b823e74a79a178f206c1b80026fde5de6dcb4d002a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
