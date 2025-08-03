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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDTQPVMW%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC41dpUKB9hMYPtRpTDmSxwl1ES%2BfP5DrFTUrTlSy%2FqagIhAKGtm0bTgYe6Aq4AMyIH0%2FBMBFZ%2Fm%2BW6RERbkgLJp2riKv8DCDIQABoMNjM3NDIzMTgzODA1Igzi76ICmEZ%2By0rARVkq3APSgJ9sxmTTWCx0nRYd5LYKGBjdY7vJKwPrRq6e%2FTrnmFKbWM0xf%2FeupAHly52vE8zRv0ftUytVE1XaPNml8fCHqrYNyou5KqkldaUpWTbbMtizL8%2ByR6uZw3DytpnjYk%2BLzM%2FtkgvKjaoRR1QSs7V6p%2FNSXP4dcyWrR%2BuMo6F0EJLd3UBq9sN0YBlIpVBLxQ7MIVcxqVL%2B7iui7TfxvSEC4qfxMwBsZtRrYHUFDAziVZFhqJO9oU8GFx8RFnMN9xDwT45%2F861kgF4t3FlyyN0snPwLFuKKrgaVUGXJbfT8Cy0su31l0s%2BbIXRvk3lOX%2F7wifRx2uMOY1oCJ7siN%2FqA11CJ06d9gN2FGToBgZwCZSaB9xDjUSWgywft%2BO39NhD%2FBVqWGPhE69%2Bx8JulIGbQkdQTLcaAsogLCZdsgcFKu3W2bE9t9kluiLC1SJ6yOgV5achtI2lvpPvP6ZDxJjxNiN8jJwIxaKyHBWAErpxRnYxrnGBJHFXe28vbOhQ%2BYe61x781yeKdkyc3r3q6Q2jBVrMm4XM6JVZCKSma5XGiGp9%2FeBuO5Oq%2FLi3tLalAOKJJsytztvReqkqVJFscD1Ir5cAO5QK3L%2BBBUUCmbd1IDpVSls473Jsxjq9JvzDwqr7EBjqkASc%2Boa%2FfD%2B9FJAmsJMp%2BPituIF86%2B9YZPmA24cc4u%2FUOUv5TqXoF21kOsiuzUa9wxaxl%2BcUcfusqPcdbtm%2BCG3E7dL43JV9TKVV1lD%2FINVJM4Ter7AVrL%2F9H5I%2FbV46fiLkiAiPorWFTqFuQ4iYSLrslqg6uBRPoCa1N2ZXbRqwPeyAy4zOx2EMJxfrjeIZWbaDLPNhsApWNvBFpWKEQ5L3Sj%2FMi&X-Amz-Signature=9c603d114ecde4caa409c4096cffb73f54ba1d03d6a4f496a8d9eadadd841f2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
