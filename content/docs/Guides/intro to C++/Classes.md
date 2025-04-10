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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KR7CDBR%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIFFv3y9%2BvRwNAIuXJatJT4yLyQ7rVVLxyXRCDYukwfPqAiEAoV0EXF36xb81xr21zhwc1w9eKAsFkAmEUbFL7R1Up1sqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHQh905hWifIoi8kSrcA863Pu43dL3yJxROBGMIUZH7l68lgUr7g1PSgoKHDpIZ28%2FlkclJFirFFVXEaUtRxzIttb6Ym540ON%2BD0l7UqgcPn4cGl4%2BJB4l%2BfXCIHy6NA7z4119%2Fr7S4lgSFXFF%2BLB1yHwHiyY2ucTMzwW36UGVdRCVotKscWH7b7sv9PnCmO2fvhrMJJwlQv1OW7Bx10OVV%2FBuSstWGzQzdG8KI8bRqoMAt7hVdM3MsnNRkay8cHUzFAHh4ZoSNQxT33lNMfdyWq64RWamYP7Ei4maHA7Z1RpXaqvG0S5GBmTgriCUcB5UWnp8VHmIzpt9NnVwezXz%2F%2B5Hq5w0WQ4lsoklPlA%2BgLyK6P911ehi0abUPfX9J%2BN%2FFZ%2BjZ7q0DUmEKpZLEW1zRkZpxXcd5SILonwjDikGoqLBhIbqyT2YBybRHEzd1%2FHK%2FQkgy4JeXv06yq%2BXsjf5dGFNbVZlsoIUNzBvW73Dik0o19s0prvp57VnHEbGrw0TBDL5xV%2FHJZ2cw4a0K15AFd5nudytU73p3FrPXgKMEdG%2FhQkMaDSv%2FV18GhtG4t7J5%2BkxAiMCxrfVMGbJI5PqBUnq5lNq8HWXEid%2Basn%2BSWe8m3ath5A8gX7v0yrpyQOjpvWX6hBY%2BQZAwMLu93r8GOqUBd4SLiLy63PvGDh3ZJ6JhWX5T%2FpLokLaGBuoXEUkuJucDEvVWlQdP8O2CcPsLCc0UtPskYj7J3dE9aAYKhGNAy%2BfLY1iAi1IWE%2B3qgBCN0G5%2BhkH0WKvnkB%2FhZjeiN7I7sb6ffauOQaAFapFe6BmdyVe16XPDk4AVofrBL9zZ3IIBDAkJMQpQmAGO0QIQQxLj%2BeYPFhAXIk1ZPCNQePrtGf4pUNnO&X-Amz-Signature=e58d4c548bfb3d7df6002e25eee87a6cc564db253ed191849239662a88d29f13&X-Amz-SignedHeaders=host&x-id=GetObject)

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
