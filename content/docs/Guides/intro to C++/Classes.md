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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXEXPT5N%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5JI%2Ff6ryiJMoqTWnEoQZmkmumWvLLtesF%2BpqkQkE6WwIhAKy7ZhcxD6exr7wS%2FobFwAmOdsb5amomu4PnU9LMznmUKv8DCGoQABoMNjM3NDIzMTgzODA1IgwtTh16D0wg%2BInGO3sq3AOgp3w%2F6jKJGJOdaYE8Td9IB2EtrE8%2BaczTYx5Qw745ascfBgMPEPvnC%2F7Rbhb2HfYYyL422TDYy0BVc8jlL1RSIq6PQLY91StptziWiUPTI356wzFp3toGiaybZ2TpSqOPjStc6cvJawbVxHzA0%2BtkyyUPv3B51Qg1F7D1iNKqEuOoW%2FkUmt7uve08rwPzRgrXBJicFn7PEQSR4FrJNGFwrd2CGohtR8Hi%2BhB6JEv%2Bz1I%2BM82OZ09RWf4DgY6Q7BqD8r9DNB5iCWBrDb1MNE6E%2Bpak3wFBGdDhde8O8TE4Cl0PFGQz4aQU7V24%2BOYjyyTRkWp%2BZhF3ed68ZXpJ0fkLqBxvvCf7gBEZUe1liGVGLHaTI%2F6U8xGzyfF3ZmjBA46LnUwEnE217FrwLyu8zM6fT%2BJUvNEJxdMCWMCgXL5W%2FUf6utKEuZZjya3B3pBI3oQqnxtqHo1%2FRLL1Hd8FWbznj7To9hH3vGcCujVrUoUY53NS4L5N%2FvxCWK4460e3zD3GJusQhnZOEuHoFdPtwg7PGwobKCDwo%2B4GSMq5%2FqwByHAGGmspL8FKMlBV6pZvuh%2B5Lbvpmr6l7Vjr2bOPucM8PmywoBLPsH%2F6n1%2BzBcK5vHMzwqzXteOTVanomTCx16TBBjqkAf6YKI%2BsvLfkw9q0a99yc3vlOhBSm9rSCxJZ79bhc0k1y7YbR%2Fc%2Fq1386TBsrQNbn6rtEMD2ctzkB%2Bv%2FMw0df%2FzkGVS1%2Fyd%2F%2BQ%2BEUJ2eGeBbOg9lvnLKJu2rr%2BZNV1UNaVbMJkqV%2Bmb28xYHPbH4Q76vF2qZK2oQTHg6ZhwJpep3ri40XVNRsKDN2T0lIA5Uoi%2BjZL5%2FZlO1pSkgmUwos5%2BvRsYl&X-Amz-Signature=f8d3ca2fee1e8fcb60bd6f967b53fafd3e121da10d24e35b3aea6829fdecdc54&X-Amz-SignedHeaders=host&x-id=GetObject)

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
