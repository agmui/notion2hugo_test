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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAVJ3C6Y%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClCAdm9EnoWkz33e9ByaGGCd1FQfKoGdaepUHfAkbJVQIgecy%2BpP%2BbJbuqx4aKabtVhZ%2BDnQ%2BBtd4U5fN5%2F5Uv9CYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIYSQpEnLGC1gBZazSrcA7XiU40Xb%2FejlkqREdjpjScpPyK2HZAD272YXZKb%2BIRHtQoS0OEvB917%2Bo5jawTmblghgZyqBzyQI7HCfAYhUTdFg1RrrVLe5cL9bWOV5bMCKN%2F0ur%2BvrZ2BGVme0OfS5FI8LRJ7D4mukDXB60w4vygP8EGjXkPN67%2BnsyrfErzFY9%2FNt9vaQAMgEBkmhVvsnI4L%2B3%2FwqBMER77ZT3acVlH%2FeZpBvk9w9UViCoriw9HKESJmPYFN%2BNpj66WtUpYuVR36md22g0TwpeZnuEnW0qcQ%2Bb34ZTAaMC8jvrSKwiDNZcKn%2BJ1963eRS%2FxWeWDjHVwxuYQVjcTYS5xlE%2Fc7NqJ4aOY0oNqWuI63%2BRxK5n%2BF7EaBDotgWkwdTmSADhbV1ki04iChHAd8jfqxiOW76BhW2qmRknMDW4smmSo9zu8w869e1dlp6vKrROjv9P3qQZ0zXFxvJETkTczhtj5Gii1fxsOKE97gZjNrnGHqN4uZQvee8IYGC60zHXXe1wb9WeLTEiPpaW2svxy7tiPRyqw0RaUzrvMXC4%2FvfxVmJssZpjTx59V4Y9IpUm0aTx4FoHVw2a7PjuQ5xTjCp5XXmj6tlhcdMhDpA%2BMR9BH%2BGD5YSLgOyxEc6v8Fqw9oMLjuxMIGOqUBpVbS6ACJUOeDA8YU%2B6Fs9mFH4iH1EswP39V6rNE9liH1QFOS3v%2BwvA9gAlqh9U5ODzMDKbqZft4cwgYhwJ8iRQCaDWFrp%2FR4nxfTYklogtKBbRYQcXxwe6DgtbdHoVCXmiIntfosTnXxOlXlFcqzmHYbqBeLAYvnmTUEuI9YfmY8q6%2B%2FIklAm7y7%2FT9LW0vztth11UMTNmZGJYWyY12RoeIa8dE1&X-Amz-Signature=8d7d9d8730223931bf3f4fff9905298bbd109f251fa4fcd464c8bed7c796d4dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
