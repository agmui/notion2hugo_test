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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCYMC4N2%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIHviHcdLFYsxQDvhezPmeBv8mYUA1Be1TMyvYDth4wZPAiBjLYGr4qGUOQkL8D%2FVs59FGjZPVADsYCyFAtoJdNc3eir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM9zv6lTfp3Zzx2JwtKtwDi5bui359sKdvymNaSblcjZy5JqZMFafdEHNd7cdLK68wEPu3f7gkmeCD1Hs3oe3CFFeIaCAY894s%2BWkWJd2cmNS%2F9lIjCY6SWb0uDNOEFh3FrJ1Q%2FJ1IAmCmS8xQAxsGj9xIkardr47OvmfZEGiHLsJ6oG5u%2BqllIzM3yY70VK3RJ1ac9QTRe54rG16NSyxeLCuKmkNepq6pdQBWMFxcNYywJDncTjrxPFxYwKv5a4ijaZqIuELmY16t%2FA5nbFRmw%2B%2BsA0lhF1uotYfINtqt4D7ud2ggwyXd%2BLaUR9Yk2fhSu5oRfnhoa7Vev%2FBwI8EqpXJDfB89dX9insXvC9a0SZa2cuAv0Rc9NLEWtLvsVAlhhBmlF7dhcxTl9at0qIXgrijrynHdEIsMi95ZELoWOujYWaT05G%2Bh9hZppf0UxvmcAninMYLtAFkScDmZ15yDgALWjSE5Jn77ZqqRNkCnQ6rN5v9NX8rTvVL3M94VvQNoej1p5ovSLMxyzGL2%2Fa17M%2BlmVgcknBPa%2FrDaByuK8glQUvsJFi8KjzBY6WO10DR94YzP1V1BwXrbCM3vpSyGikVqBEX%2FQRR%2F01hrvCR0HtOrPiV%2F8d7M4r9OZA5qvhu%2B6dw3cRJC%2BLBOPI8wqYvWvwY6pgHDpC8hgz6nknb3kZuzzkVGEkHq%2FdxqBViYVENX4KTG%2BHNUKcKtzFWjUz%2Fy9tfkA0AUUX3nDnV0oBGcyU38MjGMXg%2FfhDXONYNPfSI7lQDbEi%2B7OVy3T7JV6qcJYPTQh93ZC5oxwsqHJvQOXK7QGxB6E1gwiv9fYQs0Ot9%2BrBy2ICL1K5LUzR7yKVcSy%2FU%2FlZU1A%2Baguk0HyN08OlaeVDl8ixnP0AUm&X-Amz-Signature=2d0ff45afd5d212e1bb5af7f53f7c7346652443aea2c7fdb639b8ba664ea94b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
