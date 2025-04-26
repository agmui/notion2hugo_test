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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCDKUUTJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T021804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVPcNz6QyV9Ob1xOs%2F4H1J%2B%2FAR%2Fw%2FTUhzlOSHG%2FQrQ2AIhAJD5%2B3TeW6uplpfRTxZM0EDSGiqTBonMdgE%2BhfgSnMwIKv8DCDsQABoMNjM3NDIzMTgzODA1IgzwPyILg4JXnCzuf%2F4q3APvAWAC1twLExUUiOoJgRcybsnKluMUIfeDWexLc%2FsfeBUtWXpvy76DN%2Fv82znR0K1wtF4THthiRXXPmo6VpVoZN%2F1R%2BiXh87gdubSRDeyWtvfnR9AwEXqiXq4TIxhwn%2BUjxYG8HBUTgSFA%2FBjuSRAugY4KmqF%2B242p0ba2TiZJ7wpH%2BPE%2BOJBcyV5adyekCMzAJ52xbpH%2FrtEz%2B%2FSfknutiAH5DJw0jJOdlfDQjJRDKRKiri%2BqzSLbOt5pvnatImdwDzb%2BKreKjPZLdMwFyUpWFH9a%2BshLY5TGzMPgk5F%2BUCoJpj095TCHxC7%2BVZv7Wdlebpng0EH96b0%2BsJCKhjvZiYQXxb4nI5jqTE6TN%2BQrKRYfe4az5DO5ICXsv141ikaDE0svba5S5gXm%2F%2FyvyOJWJwZSfYK9SLhWlSSH9XcSRBSlRLaj5XBHIsLISN45%2BjuiuodGc6h%2FHq8zTjHm9Ax55bcWzU4OmxDw0do2%2FDgxM2wHXuTUWWgG3cPI3nUM6uO%2Bx2RTj%2FBTUVwmVpNu%2F5DFtpUf1wgouvCMmzoEXFS9dHOK52TTxwrg%2BObTT0NUiyWXzKRHlcvU%2FJTZWtoGiYAF3KPtTHU289uP8cnovtBQ%2FD2C0u%2FlxOBMzvNOJDCP9LDABjqkAR7F8RpvroEIOz3d5Mkm75pFVYlROJraIwaYht5rbtf7t7%2BdBsJ6zP%2F4a%2F3cF7AET%2BgCjQ1xxKXU6mVat5HHWI1HxB28wZ9abRKRgPlkAdhDkjAfp7bD9jHHS4wcucSDPpd%2FymSpTa%2BsZzEsUZsq9P4ZpNE700vBj0C17v4cwgdLsqbjKElD6UIhGShmZDk8Pvc3%2FktaAHDAbrqOOGIhsOWOyqfQ&X-Amz-Signature=273a6ee864deb30f3f58268485bb0e90418ee2579802c5c9a0d4a2a7e84fc048&X-Amz-SignedHeaders=host&x-id=GetObject)

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
