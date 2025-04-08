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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AZDAQA2%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAH78UWrRAPO9JvM4oUqxS82OqnIPfkJAU%2Fx%2FqU3BktiAiA1JrF3HTUPu5HBqi16uHWhGSUiuHy%2FeY0QQ1BmDMBM8Sr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMsWHUApT2shPzYmDjKtwDYhl6zPq8hW0R7l3dyuTElj1Zdnjb8MiB7eO%2BJyw2iCfD3ONT8ZmsckA8OIqNLaVxDkyPW2ThU4Kc6Zidmbj7jpNKRDkfxqz2bjf68UdbTUThT5AYUKxSjt3hVf%2FtUb89vWlj%2FLXr4DxxoYFoZFa64J4YYCK%2BbVs6irYv7%2B8aud2Tmknt73i%2BFfWN6wqFspIGggVrJNqAUYwc4m59stb9a%2Bh3eAanmHaXY8T5m9FPKGlu9R1kVHF76Z3lmbXIk5Z1vADpf4rKKSzGZ0cU8k3NcAdKNQV%2FBXFLnIUjEJvHAdJN8EmED4rgQ%2BPGQ1Ngp7rs%2FFKoY6ERTivSkOaB6f%2F4DpQmFuNOR8ZNvFNK9dC%2BMJhG7PNcg0DHqH%2FoOE7y9JHBNmwPu1qzTqxOHxDWrOkfuaUjot%2Bl%2B%2BGC9%2FuaB%2FePjmg5pgSroPZ26aSJaLV%2F18uU4c698OBZClxU309Oj8zPlSKLGtInKxmkurPBymRki%2BZHp855ebnv%2BdIGLGserl%2F23hztMihoH4j2RNqEisof9c9N5drPUFXmnXmiFrPHeY53ylK9wJ1ukW6NP8aCG0HX3VsxfdXNbfmJ1nP44XlGwGAQZfy6sR6DS0Jymy6G6mwnKghvrvgI%2FvCQwWUw7IXTvwY6pgFSsvtQ%2FjaRWpDDfZCwNga6W0lNsxcBHmCQrI45D3csna4mKwe3yX49e9h%2FGCH%2BHFscdu45ieSHiv8jy%2BXEA3W9TWICYQjmr8TVjFz4fk%2FvlmNzuqC4gpim0cmXVLIv0etVPZ10G151GaoqF7kMMH%2By7uSWwKSJtXGalEHm8jDHXUjiRffxJckVe2TKEYCfWpwyR%2FWHB7HB%2Fy0V6K6SsteHC821S1aL&X-Amz-Signature=320da6e614f77126e03d2d87927bb57d1c6e05eec45678cabab1e0f7914b23c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
