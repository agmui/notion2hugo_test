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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4YU7YYL%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T131830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIEVl%2F4crAZOzOcsKHNxOEohUjTtbD%2BftQsZJf5TuaDziAiEAkFKXnd1aK7XoU6UVVpnqg0wWQEaikVbTg44bhjEbjDYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDDaImu4U0Sv01lwv3SrcA3V4Wofe6lPw2j%2FsRGLdNpSq4esDgo168KB50iyP6%2FV7aXhg8OvsEZtWytzQFP0qSgZAqyxITO5qbmVu96PwepAaWS4bKM9%2FMoixEkdxHmwLN17BpFVbiVGsTfZV7Lr47q2CGF4g69Y1IL4RSxehuZVvzm7kWUMvIKimNo9lRXriyfwDtQw4Vjg5DxxwtuTlnpT4LRNZ6UjlqL%2FPj6hRD4u3vgNL%2FwG9ETM0S%2FDhCm1KEMqqwZsFZ3R4n%2Ffp8hzImZpvfZ1nIvnyi3SLEgjJU2ogdnqtkWvOe2dR1m%2FppUcrd6mqXTLaPsWl5z8tYSJjo5st%2FCkM%2F6DQg%2FykTi3MR5bNI3B9%2BSfMn7UbCB4zX1iuM87TYxiZptm3WAROdTnKoB87pYpPPNGUjO1zwEdoib6ySfzAZlL0NDsRrLxJr%2F9OCPVv8XuSGpLNaBq4BQIpn2mH%2BFFT3aJVNQ7lpUljKA935KDYhdoFzZBtU9dny1vvu4BIB%2FxfNRTuRbza46ViJOT44ykhRP%2FR%2BorW6F6QMjflaPAnNktPUN8E0XdVLfi8Yt1EheSrN%2BbPXS%2FZ16Y9LD73raCfGksZz%2BGFQH%2FLPaHwnCZTpllezyaIIZfxLpOv2%2FFm8mU60xNN8uG9MOv%2B6r4GOqUBA%2F22nvQ6Sg%2FmXkfpl1NowdVFA0GnOL1wI5t0b93T%2Fyv8wO7MSURE0ctZ1VVTRv8KOwTxQCmRH%2F1b2W%2Fac6zd%2F5LgEg%2BbMI0opwiJypPyEhG4991gawQLi2Z%2FEEFbgKZi0npCQBEppx5EJH7GrKJlAclp2ZJN6okyeO2mjrvRI%2FuMstdIBqKfQku%2B1VVanVBeqkMC%2BvTbNQsVSpmmS9VOImfVGN%2Fn&X-Amz-Signature=31733619468a77733105eab5fddae0b03449fecaa3f206e648aaae3069051267&X-Amz-SignedHeaders=host&x-id=GetObject)

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
