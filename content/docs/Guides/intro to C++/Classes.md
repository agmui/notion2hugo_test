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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLK7WA5Q%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmw7tdSFb4tyfitzAeK%2Fk3Q1Zc1LaPjgX7fr72LEl5SAiEAxnG0%2FufMuoaaEoaV4XCwZGyZQu1Y3g6buJkVrqK0LKQqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlantag4yts%2BNEP1ircA7Lw5ZCzfpoUbEx0a25JAF%2BrQWnGcQk5mBQXqLrf91bV36JiCNV11THyb%2FpVlmD%2FSLuoGlNeTn9Uc3ePemh9RUjuQA9KgycnaqhZxSz%2F8PweeqO2mVfTKJaqku2J0%2FwBpED7uYc3MCXxoVJx6n%2BErkfx8Q9fdHrqCtTUzZEOjcp4cNuLjHcP44VPv1oJEVq1xf4e6ax5gfP9dlOBie9Kt%2BCdn2riXZyoWoFUICYxSq8BCr85%2Fvi8E0S2G%2BE5HCeekf6JyjGaeI%2FI8pbZAFclsZ%2FtTTi89FPe2XFfxgqNHG0%2FJrcAPE%2BAspIznhmkEq2iuZE6JLU2QNQW4ahIgu3LYiTYm0UR6d4vwKCQ%2Fxet0eMJu8k%2BlPP7S2KUTx%2BUua4ZqNrfSU%2BxhSIPayzeVOLVpYsSO7eaoS%2FWYAsG31xuZl2B6kl23QlzH3WfMnWubE%2FH9oNSSbM9XSUpTqZvehwvH%2BRbMJfSdf207J%2BjyLhZiXsf5ko%2Bw4XJXEqNGzB%2Fjoy4VMgySUmGC7ofZBKEXo0SuqzooVSwd8h9UQiLse8%2Bwt3R1m00PYHGZOcRY1NZZ9g5cpU62czp9Ef8TtFLAKF0PJoG8%2FBn9%2Fp64tiV%2F6Kwub7S00HsvaldUPEnAn6PMKql1L4GOqUBjrEy3pZ9a5VJ32KtyneDiQH8ZvwOcceyXA8puCQMdfufsY7RrMZit3D5rk6VwScJr4K0cvmb8JngH9bKCn6heQ8XNyIjKxDABhq%2FVvSlwgQ%2BzYGMZ3SkGkopi6cSGvW6fUplj6UAZjh8Di55iAL5uRvO5BRRcU9fRLAoW%2BavurirMVQGuNqnzcylWch%2Fd%2BzIR1WACPQIHdjs2BixioURDiy%2B2p%2BL&X-Amz-Signature=dec84d655417635742af2be7a54daa31c5f43f194233fd81e5726c6e08db0142&X-Amz-SignedHeaders=host&x-id=GetObject)

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
