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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JE6SNJG%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkRqZgUMzolLGjVHDUFUn5vVE0VryK%2Bj8rrDRppJFjHAIhAL1nczhuv97lLoG%2F8Xs48FJmDxJOF%2B2WzBnhbabVsdYqKv8DCFgQABoMNjM3NDIzMTgzODA1IgyoMOs2ozhtAXAu6Ocq3AOgq8NzThOgPHzLLBoTv83U7fBtwokzO8ilZMQhVHBu2tqrrEXTMGNKaPufMs5W7pG7qvNmQWQ76vDCcNkAIFeIrBG4BGTOHktn%2BKE%2FDta8suzT%2BVabLBaLGunfWkPZbSeSB18U9t5cjAhjbS6klS9JPeS7SghWLTM8PdmtIM5ph53TADWFQO24%2F3pvfOzWKQiG09SaGR15M8t07yfp4pSgp%2BZq7yBNkzXKtQxd7zwY0M6aaC9eFgHj1kEB9Nyvx8I5OSYxeS0URi2ovvYhWNWjjaWSLIUmQ%2BxC29G1fufTpxp4AhWe%2BZTF%2FFOID1dx6Keiy8PuiyLKfqwuWeLsfmRZx1LrFJCRJRrZzFAY4%2BuiZSvSRLphx7jekfzxK3jhtebTxLp%2Fo%2BxDY4ZP1aPk3kLwEOF9kdOduADlV3pRzOu%2BOoXH833cHCdeCIeAAqMjWnwEUE%2B29GVXV3HRVbIHuJAJY%2FrCrdzYOiYM1oSWoh5ovriGItP7N%2Fykl6Ugzzmud5pJYk9fHiMybzkiVqMKt1X35oWqH%2BFm1YQ0v6D3NVQQ4wD9qkFe5zUrO9EON5NhpRkwqj%2BFFrfCBB9f09L3ilCH1VxTDJw3IcGjtooVbX9X%2BppGfBMmfYk%2FnYQBwDCp7M2%2FBjqkAVN8sDkE%2BLz%2FKx9YpwuF0pn02ClK2meJ4b0BMJSwlODi1aXCH3G1lDElX%2FyknSie9pzJ7SHH7oelHXqmmg9NC9P4vq5EwXxOo2%2Fi7SOUWvlBFjLpOTWkV1eLUv%2Fjx9qZ6H%2B4%2BZuY9X2stByWdjrXgJLbrXL1VtHqzPdDZDcA8o00SefEbqZM9iRYVcHuxmaikx8GpPodlpGGlYW2GpJvhdpx30BB&X-Amz-Signature=1b9473926b875d117ecd20e9bd1f8aa4a43ef1855b577fd612de6668c6fb0ab0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
