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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMLOKIYE%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZtozQ%2B39ACihWuAxllBrLGq9cN8EIj%2FBHvHidlpqMzAiA7WxfbnSwLN8DOjAfzz%2FmxmowWMrPTBNcLzQ0Fv13bsyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMkkt5M4yfcayB9vwXKtwDJxH%2BAMCyZmsLUc030mHJ8rek%2FljqpdVV24sujTp0ed74AjPLS3Y%2BMFNDEVexRHGutse84yxnx8I%2BnOZlS9y8eibEOXnxmM9B3bsieXXcvzsL4vT0zUABBoOjE03x8VCfo%2FBiNIvR64scoKKXcHOrPyLK%2BWuJF3ftBaQtE8UfS%2BHfeeA%2FBrdv3biInBlqVvcqbwD8gPo1%2BPgGbSfFfypv0ty%2F59%2BYT8eYNCjGIrYqaK07ovdEfZkwFrqJyaw9DUZWzzJNy3y86%2BW5Uum0kpN0yy%2FSzbRVYzNro2c9UUS0XmRXlh%2BM9eQdTmY3T7%2BNRv1M%2BFs2Vy476G%2FoSEyB1JnieepjMcymmdkegQtjp1nXhngA5nKejClOqpHeDM8QQiLTWV0Zqn1fJ5VR0Elx3fa8YX%2FBYCUxJYsN%2FgEQLXacXg7Frw5ZZ1UuPzGAT5rbjUseqjzkGw9C27UciKiCz87gs5g8e%2BvNDVwjxMwQC4%2BsNAH6X2blN8MzVwc1DsfcjCsCwjhYaUvfwXsg3cdT4Z4PxcQFXcmU%2FzOMDF6NspqlCh9FGxdqq7m82VGdo6GSeNI8j3iG1ZrdtZ6QnkYGPRgNcOHPYpKzXRG2gFh2ZI1UPABGg8j0CKna2%2FkmYe8wgNvevgY6pgGDR%2FUvsWdCovhasOx2Un5iavoUlbv9zBN3LwOueFUCq4suJ%2BoQ8znM21%2Fv1nvHmwOsOaYCf3xKwM0f%2FKbl3p19lBo1s0JKGJVi6cGZEKXdlZShDEjcIigRFRp6Ed7oAp1lOEsYQQVHKBRk2lT6QIWtSCb0tlzrOEbwajzBNGJNHcSvJCmxxBHfrK5VCZSN8eZHt%2BTquyozZXL7XOwzIc2wqKox%2FpI4&X-Amz-Signature=b05aea460f2e4033aebb1599670a2fb26136f34f3800cdb88351724e602a24f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
