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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZOQXW4O%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCID4A6YcLmPLlXb50Xpqf6LIrvx2wgatw%2B6ukD80RrPE9AiBF5QdRIoc9OcShMlI7wyfBPl%2BiXH8eC%2B8lesbsd3nmnyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMR7jyZ02o7oPA1IkMKtwD7UKBjt8uzSly7lPMPnfxj2cBBx8K4K4MJRjfW%2BUooZzSQ0a0qfGH5RpSTK2tYsqceJKNN5AJO9a%2FVIpTmb3FYp47sxGMrOeT0YH12nL7Fj9KEPSZOQEGNXH7Sbs7dA0nxGrPt0ielF4eDcHAljQsu9b3EtxWAFRPqXkgc6p1vODVq19nWoxBtl%2FXpaxN5fsBzozUyomz73enS56PT%2FBmI8ZmbZpp0W96qD3WleC%2Bu0CwcVt%2F6bLHJCJr9L%2F%2BpvrePZ5HbnJPHJB6OS%2Fo8izChGol8GvLcjOw4fyEIFffvtKl3N8%2BJoWXALrkInBnYPURzfpmPpFKmOuL1dw66%2F4h17CiDCpUJeWMK%2FXjM4HXS5hiB52eEmqeldOTjrt2DHFPURYFWz4lOJ9mSTmgKYPydfUmy4fibFhBIRll%2FZUIHD5pJc0IphLjI6SghAByewiNEPBxV%2BDj1d%2BHX76iCYJ%2B%2FYjpzYAnWOYsJk4k6JlVKHeFDvipkGR2iHf10kcXvYJMnlcbaRnQ%2BpmbOQ%2Fqr83zhhg6Bc7F9rRjQunhqM3jED7iH5FDim0MlGW9B%2BG3HLdf%2FEHcpCmVsBBCZLr%2BPu9kS67LBvk1uqbsnoMngpqgAWjMbGqlGLiC6%2FsjjLowqM%2BTwQY6pgElorDxd7T2SW9oTEUoh0hrZaVUnt4hw04m%2B3KbARQz6Hoqya%2B74Mnjv6y0FViGD3h65SWntwEwWHtKg8qnxZcgfHDpdWBSz57dKUmRpVs%2BOnQ1Irt20viFb4fr9%2FLzgClKP8zD5Awj3m0hVB2g5rDHW84%2FJkDsq%2Bw90xbxkrSQ6nJDTcPw5ENWIOnjMUZP9a4cch4lpQ%2Fkuc%2FoWDGFBkD%2BA5Q9JknO&X-Amz-Signature=902d658c854256f14b2cafcc0ace9db32e5cfa0d203a890fc61bd1be2a3de758&X-Amz-SignedHeaders=host&x-id=GetObject)

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
