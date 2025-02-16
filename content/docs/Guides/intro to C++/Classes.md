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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAV3KWSC%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDoVafdY9amU5HPN%2FoPf920YTj6IzGqG8Or7PBSOp2kgQIhALcV0kHrRbqFnliugAjGCY7DpfaKucV7ZFdLYMPwGU%2BgKv8DCFEQABoMNjM3NDIzMTgzODA1Igx3dZf9Vc91Ja4V04Mq3AOpYAvmPVqi9gfF0%2FhmsbZUKPGCs3JBzCYqJ%2BaThH%2BUQjBXKWJIbxKuSPCbvh3B5DcgjeOQD%2BgceIFR4W51OlbA8UZv2%2F0YHR8VK5IMqxweLmzzhuHoD1G4BJftDyzc9sS81zj%2F5C4GCi1dDcC56KGAtzxLv%2F0QrFLJwDSn3RbA2QPWNX6nnDUnOqrko5zgWu20J9hapQ%2BRcg23veg%2Fk23HIYsoj8Zt9wC0a6aropBN5AYspY7PdCYDJKGoDg7XsNZIz4X%2F7Gj1g%2FkwsaSM6BEnm2A5DBu%2FUmB034%2FmHdyrn1RnmCvV3ROtRYLFAoyf3oveLrIMm9M7Uv8pgRoukbN1GzNLZwVdc4uEPML6N5Znoq7R5JWMCLDe7vgeNm5I9Zj0FU8k9By0EHy9oucw8VaRM2SYDSbnTm1PbFLQoRkVhiggMgtnpo0qvQkf83YIfNBBUur7LIwqru9y5as3%2BRDVKr7w%2F%2BILwnW4N6Ng7qsF1FcAUhY2U3EZjX2YoyZumYBYCOYlddq1m9gQ7I%2Bk1a6%2B7jYx8YbmPNfpuzIWq4OYFZynBv0tfKRFyBfugeLPwLjlpZWoJB2c6B3NX8iM6GHihkXMiSgU5EggwSyQxSZsBnhiWoUmU6%2FuMsd0FjCCysS9BjqkAbf3CWbEqcQkuwB4bBsxCfIuhWntxCBhABw8ysiZjr%2BtSKUVlnrLvVpfE9AXLyOKv7P9LicPVIvkdg%2B6ioGn%2BUuFpkQ0FYVFoSAjMK7L8SLHYs65kBBUsB%2FxxoGanglfjWzIO9IhVn7OohlxwGLIf2kwtZ%2FTKbkfYQlUBQG64etEH9BfBt7r024EE1wpV9rG8%2BhLpmtHOJXoHqTs8fJfLj%2FOynUy&X-Amz-Signature=1b5603bb9b8f66c59476d88e65f3e1acd1295fbf17c7d09e14133239dbbdfd60&X-Amz-SignedHeaders=host&x-id=GetObject)

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
