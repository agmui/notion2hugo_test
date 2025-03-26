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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCJPKEBI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnBFkOy6YSBpj4riV3JGiOuWTNDyv%2Bux6mAD39IrS5NwIhAJLxEKyXjuy4xhMmScRHmri7d%2FDPRWQ8lkJCr%2Bd4%2BkELKv8DCCoQABoMNjM3NDIzMTgzODA1IgymEDrJnFBsEUz6tR4q3AO%2BR%2BBGABOg7AIy%2FnzaVumpidG5UFaAHo%2BaMcDT99h9PVwz6kQgJFlA15wedVIEhR6uDfbN%2FBR6VSKAx27g2Hsu95KjseWRV71I8icP4lnweDWY4vsHvQyI8WkYygNHu5tkElRU1dW7R0u9vOdMkgooMfGkc%2FERQJHYp4CEiHNfwduFdG5wsmCppK73wiDCihpUEQ74bGYE%2BNHVSi3CDH2zlqy9ARG6IvkMEpV8dTzMJ0EBBZJ6Tz4yHhXXDbMVeVq3%2BrnW7pYAF9EqznGFPsYYrWRSpWRUIw4M4%2BxSJ%2BT7N1YY6bxJZYw03rzj2uxF1uCVl3rhrrMLY1qVnUktDenAnLikZb5krvbMv%2FGKlsCiCAPf%2FSzw35s7cEatzjyPFfk7ZuggWQZ8kJGuOhtHjVgYpoFbk7pVKyYrses5cLcx%2F9duQMtI6zWHx9YpbxrTFumAwW0ZHIblcPfESnZqvGNoJHklaUuCf6CRATecXNqJgGgGW53d0Dsgyyi6k%2BOddyhRSHOtYPtEz%2FzQLRHmpB41nzNwemp3U78gKAwagJYgnqDKxRji%2BUYNZoY1tNLHXVozrtqDvVwXqWJn9NW3wQBTjPNjKLiykMRTQRPfvgfN5kZnBKhbywuUQ%2BDxbDC5io%2B%2FBjqkAR3g%2BoWSQCaaLcHN9TCb9k2QKoaUaWxqiuSm6cTP0Mp%2F6%2B36r68iTn8AzPbC%2FzM%2BVJuj3SUgSuZp4xuJ0hdoRlC9GSQMVGoOzEVMJeAqegSWsLk7NDvlEDJWFZYjm%2B7XmnbfzWgY%2BQFZU4DuOmLKanJpg9vsAVk2yRp9vvPJpzKFXmOujWpTz87%2FHiokKDj2SX9E8EQmNP38qCOQij025bBNScAM&X-Amz-Signature=853ce16a729c72faba04625cf38fefaaa3ed109d2ad5e77168b1908c51bb1eef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
