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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW4PTVNI%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCfwnAK0gzXWFlGYK4MUFFj8QPpTQEnlrKcqrZsaO7zOAIgEEM%2B2PYFUTv%2BTZnT0vNl2nffRyqG1yTHnGMX%2BTVbT%2FUqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFi505bSCs0nMMdtyrcA0iBHeQEj1%2FzQAuzz5sdXG01wchFyyobXCfXcVgoumYIoWEJbbdYzDSe%2FfdDHfNOThfQNyRVq9OB4GUCacrdiDDFOpQMfk845M0sHFeYstFxd%2BSpI5O9ofwiX4n46VYm3AGdbAIe9gLsWdJu0eEtOZM9qqQ2hIfUWp%2FLhuwXIiiCsndB9dkRWJ8DxUQXohwnNyp0rVsvhIzdKfCb5cpdjNW7OS5oAHgrw4c6UfOjYh8myKMV1kyoNLtxKK16sR4zKGF8a8rEcg0WEYDSlWjzyiy9F2TTYVM63Wl4smo%2BwsUyELVUVEn2qxlYmWot3Agig%2Bw0XNNTsce51wPspBdiAN0tSn8Q%2FSztJit2ve5KPxIeJt%2BfKC9U3ElSsFHf5XIXbIub25m2r49VCRDt2KvLqEcdci8vKJgobl7b6oyRX77jRPdS6EaWAX1wlVE6jljJxCyunjNTxZMSeQfhnrcoM317IRbVP47oz3Auadp%2BhQHAA5EuqEMZw7rd5z2UyBI%2Fd4Z6DQYBxSffDScDcu3qeLxSuTXRIcRZL3GlIaQjXWCTq40HJWmuuh54e2iN3ZOKIN1DCSKmRi7TwGndR4Q59%2B3WqoovKYWNfst8Oz25ZPG1%2FPfAE722e4ji8%2B9CMIii1r0GOqUBkkPf0hKZh448dOMFHi0EbbY3fF8k8c7XtRl6zieLjRzvHNmDoK3B3jr2QNFlIwp%2B3zTb2KhZK8KZ%2FbyCUaibkScwZqmDxjP6O9EqY%2FKzt1tOOlnRHIWRg6TcP3OoLamcaqsRmmxr4ebBBTO69DFjX7CnIkjOR65t055B10R3%2FZK5h%2BXPLNUfidnyPb%2BO3b4Nrad83PqQmalDDZuyYReEYnBap6zf&X-Amz-Signature=b34dfb5761745671d06fc871839ff80259c6324f83c65502f62f86371dc636f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
