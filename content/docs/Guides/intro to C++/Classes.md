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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UUDPWSK%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjClN9kyvQjgbY16f4SiywWzWC5GH62cJdR8Q%2Fw92lyAiAWi3sFmt40Ow2w35jv2gzqJVjuCXJThfQax9u9YCUqrSqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOuc4t3GXH2RbzM89KtwDiJojqspvtsVW5o22eYB43iIy6B2Zku4zthtfu%2Fe1UCNUAe7nlT%2FFwrla7kmMjbFVKsgUc922Sd0c68zRWZO2Rr4H0EIK7%2Bwy1WrQRViP8erWOhGV%2FKTaymhMGq7g8d3paRP78bPujDUyZr4p%2BMs%2FrJ0twRhC0HkkplT7piSFg8yPQJNR%2FWA2LPFucq2j5BY5Vej%2BxFIfjEP0E24SBbDyDSbHuCUwaXthqS8BqF4K0i7VWPwcSjMqqBSA9IQbV7W2cXicI5BN7%2Fw7SDVG2Jdaoa2%2BjUkgY9qk2twoueuiffyI2f%2Fy%2FsPyiUb9zvyMyQE4TX7p8O2Bqc%2BndishemnXxJEiyYuqc7Ir4T22GqbA0qBybUDBxd4ouS%2FZm%2BZPQtkvkyqzH0YoOKwydLXonHltm%2FDCJRyQV395SD2hPdohdWZH0BJrfOt2HrftB6oEPV3QlN3bXJQktVEnEEkygemszgThv81tmxLnxnQC4tRbO4UUD7lB2zoAZZ13c3EahiXaagH7OAS0bGMa3f6yFTgiCCegM4TMADJOjLoOt0iKpoXdV8kPUpJT6%2F5AG2YM6%2BnWVDDdaJSCs9v10azS%2FmTwq0p2mm5X3%2Bl5Pa0wU9cNmqhS8dXNDwySW4%2F2YKcw1M%2B6vwY6pgH%2BP1Opr4RrfGSYDMFDeDw%2FvOqWBX%2BJ%2BWi2CPACFzEJO7EJnEq7o95pUpQ8n5MCl1hv8iQt0NVIDcj86PUvEk8ZQlmDjoOAK0r6DfK9G5oFejpr%2Bz1usJ0W4zWn7%2FxYm%2BGZ%2BAu%2Ff6XHNkwhi916TP7icnGFAJjKjzZkr6lSPpyPIfg6%2Fh6%2BY0Z5Cgm%2FbJP8RkVroLJs79K3gySwPdxuTq9FINpsDU%2FT&X-Amz-Signature=dce70f29a7a1751c6d1547650095efa24c4f0194e7ad9c706cbaf362aad5b3cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
