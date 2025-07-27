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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4WYJDPY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCICFm4veFsDQTQQ3j33%2BkDXDEsaNWaubsv2yvLLYC3r5uAiBhPwX8O6Co91MjUN1m7%2FZmABed1McmpRoaUZVXwZCnuyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMvW2NX33cJRG47j2GKtwDJK5dY1PFONXcD9j2Uf7a6hnbs7HJ2z2B3mljdrJ2X4Je7i8XbsFIdCse%2FKjJsrM774XPooZOlh3vxOEBW7jnlj4rxT7IJpw4KhPB4qDCNcpv2usB0trsqPxx3zFIFSXrbBnRUchyRnIruxULa1oHxR%2BzQglEZD%2FEWP8AuchdAa1HlZUDvj4HJL9nMECsOoZFSvqrWzsx8bU53q7LXrVSnbDHxYLIJmGxBJW5KYSlSdM5LO1DwKbvcmRoT1wbYNWKbtmg4bC7KTn8KU59IOAK6NwhtyKI03L2TAzc2n2u%2BGMu%2FbD%2BjuhckvIWMtSG9jUeiUKSaeiFVp68%2FfxOsKWYJQmR%2FLNEUOGBDW9S6ogLHMDAq%2FPtU0Vuul3ZcsBW0aE9odTHtBV9EWhzud6xoW%2F8OxCnLJJ2xQm5dOTsQK5w3HCgOQdqQ6nddudQVAV5nj41rEIiL5BJkYmlX6jNz6JzYMoakwszWXqmeghS5HPiSJxGk1zO%2BaL9u7TZW3Dm5rqm8I%2BROxe841a5rCb0o9P1byNKZEfssZcLUmPQlgaMNGQov%2BzYM29Nh3e3UiVq1XMtoCaqlOYnOxjqhp3qPG0kiZz9o1pgDisHg9sTG%2FJ6JauPP%2FkL%2FZ9MFNkAf4Iw8d%2BXxAY6pgF0VaQz3B2gxaEPYUC6BgGZ2ITY0OHYeGxP4qaOHsngQSRCVZMzqa5qPOH448RWpOCYvIJr%2F4G6Kc0Bl8XHwUOQwavzCgasJqfXpaVGQCewtaULhq%2BFYB0hPw2bTMOnHAkAobS8N2ZTeIhkgfz0b8Q8oGn4WzZjMfeVk%2BPNlVpdQjjXqSYDhsForBYV3K7QSTuiE1dHxiof8u1R%2BlqfF2HNfpKEkuiN&X-Amz-Signature=0cd8b2021792cb4c1c67576b78fc26f2fb2baf7bfce14dc11f0f22b2e0bd8c60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
