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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXRCGWP3%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T201002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3u5c8UKmGLvCAh8plP8K7k5bHVq6qnnqdwp7JZ1QrTAiEA5FUdpQmnoEykgYyx%2FilXzuqEqVFUaoHpvLDe8H3D0TAqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ26QXPcuNRX6tFnwyrcA8TT%2FC2N7ua7gvuPNDu%2FkzhlVuFdjiYu3ErXsPGKdUKHZwY5uVrngZsJ05PO%2B3B2wEnhDl26X1CWDQKpnQLJpMnvg7oBaOQEYY5lMC40qE6ZpsKFpB5p%2BF8Oy46idFKHZGRzPikpbhP%2Fsc33%2FaOHmpC1XGz%2BlOborzQiuK5KXysESBd1ZLiXUMc%2BqojOavcQvxaMm9GtJUVLmMiR0OG3cXyl3oVFv1q1IuFQbV%2FzlnUDi9sSi3JlbJWTqKvXnPS9n1J8hiQxo4CvDwuUmfewcNKIsMD%2Fgy8%2FSt1ddW1vG4ijSrtXuN2CQT5OdL7wrfcPk0vYNLKn0rdQxq2uBATrxlbDG7M%2F6%2BQV83iQuPxGs1poZve494wMZO4GZ4iTDz%2B1T0womWjZUlO5updOdWb2WhvGJoX5d9D2hXKbUu%2FFDU5wx7DJgNeEg90U884zuKxygnZly%2FuXolzpCchxXqCdjgUfusRCbm4%2BD7EOGsMODL69Hi%2BYneuSemujJ7n3d8sWDWwjG3GDGKDGbngVOi7Dlqju9%2BaUzcYJSe%2BZ5FCLifT8ZSyVTMKRqlA16ONn99unGJV098wJ7PS7BOojmjy8HflB5PvUkzovR0oBQSBfljAfNWcS8HRHplvISh5zMOeiwMMGOqUBqP1htvqwjONCMezxlGg0I2Q%2BVaKLvnXiTySq3%2FBbe4ugmGVxYtjLDnfSH1BdQFSXFlRWE6IkjPeQk4mCBxkkes1QyVe68ON4%2FSqOdpLnO7BljpXs5lwqxjQOs0n4NQLKf%2FBboB0AwuwcMs4LQKddhwGIVL%2FKhsuzF59nSqHzLvtEc3YNZJfsq6FyjfTtBUjE1%2FmntCHFc%2F2ESMuTGnQrMn7sevVF&X-Amz-Signature=29979f35244d37a9d69c7d0f3a2e1b51661550c47da982619f4ff840962df8ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
