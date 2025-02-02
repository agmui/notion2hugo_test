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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z3JGIAD%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID06XEaNO3SCFggQGfOgxqsfd02EM6EJgcELKBxL10SGAiBcSc%2FjX5jESUR%2FZXRyRM1LDsoXETedKEe0HtnXVj3lCCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjNBw3NBnBFoZUCAEKtwD6xMbUKR67lKcn5J5QJrfYBvSk1aqgvOz0HJ0wu2slZLrOD00QG6RGmy1%2BCN%2FYIDciTUiLl7VjyxgQrkgD5Fwf5wjlixhTHmEuGoUC5uo1IPXSzArSWZr956ivcuwP%2FC4umOr5Q2IGN5W%2F2PAteSYqg96CD97erEdXNP%2B2RP2IAc2jo8ezkZMNt27YZlj2ePwvo%2F%2F7rb8nwS6Wk%2FLBoc3vMmFcYcKqxmV0YkxyL1Ul%2Bxdsr7yMgL8upcn8t8RNPv1gZvPsM%2B2ev%2FETachbP6gR2PWw6oQso0VXDE0ce7Xuu4r2MKAIjsTOFMnruk9W2DPS59YXiXk923MgSy9XbeiZPWbDMbGd%2FqsniGOnUNZwXToGgmqVS3vPc3cl0Y7C3EyFK8TIfRqHtNBj%2FESNIMwrt7psttD13F2BvIWBsBluYtHFEkJ1YQSWxZR9okl5GN7ZJvXSYgave2VsCplQ2%2BKDso7LFoUV1iu4g8is%2FlXIACUQdN3%2B%2FvaFpx%2Ftxsj7tJv63ovq7MS0Hzo394cftkkBZddE%2FwM6W3WPGa1eOEKwD73jNNqZMSoizj%2BgqAgL25I%2BB1FGIhzNT6fs32vcudECjWLHbK4C%2FiiwHKqF34esgMPWn41EuX%2BqC38K9owpPP6vAY6pgF02D3kMmGN4POszAps7IQKR6qYU35YGFlsi7RWnMq7vymghRBpCx4TXmexYFz6NeYVbknUkmCGvm0BoBGU%2B%2FkiuSaMXNOv5GCjzu5QoPP307u92v3MFru7pytu28MdgFhKx2aDipioLDCTnNhBYCwPIjLZjp6J9lP73MIXVf8zECviYo4lemWyI2Vhd%2B%2Bs6aS11AzxpfZAeJl43Wf6k%2FFB6Z5zCleg&X-Amz-Signature=fc234b7e25498e63414de3eed2e75b08546b7fd840cbf8e9eae315f5e53351de&X-Amz-SignedHeaders=host&x-id=GetObject)

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
