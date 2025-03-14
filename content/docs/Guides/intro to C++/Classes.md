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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4MSRIYH%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZE0v2bVX2TCwNIofuCqsFaq%2FEHAOYr%2F3Tbs9oWdMU5AiEAxOdCa5co1pRZ2osiQAmgxIyBDWjfZ2g%2FU7P7AeZPmgQqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyULiwjD4mzRCXy2ircAwJUuJrFZYyvmil1%2BT9isA86woeAuKojeB1pNHaFaK3Gi6CJu82hUGCkhEK2DgA8V%2F%2FHiRbX5qaJqMOd1nWwci7R7wopARnUFFm%2BkfiaZqb0iwGbjm1KaC95oSU%2BtCjwcPwb%2FgJfsHi6YDq5JmtcjCQ28vJfVbTc%2B6jEaOPCJ%2Fo5YJtfFUVkSG%2F0dv5dx5mUoRB6TC3LvylMwPFqNtgcfrPggYa3kcOCrhonc748m05WS1LyzU8WhHeq6Uk3tRZ9Q6iA%2FFaEnKBHD1BNxhbcenPhHOUYfVcDHM5Ed4ioV0b1rtICj%2FQKJsdyMdPhSoK0a47MbFfjn6qVxLXo%2BCZNaIGflQ%2B%2B%2B9G3zpIXkf6NBPJQBGYD8xJeJYBS0aj2reE%2F1w0L0xUH9aYfa7%2Bfphih7vecSYRuqjRkh7xrpeEwMjJAFzD5rKF1qJ%2FfsQlPZ54kNZ5DnhgjhEWcBf3o68BepGseaDFjfeIDzS0%2BaGC083I2hhX%2Begoy6Scn65sTEo%2BKBh8UDH%2B9kIsWH%2BH9TMA5U4lOJorYk7a4pfOxuyj4TBjSWvOOiZSWTTBOpN3MaMGjTK3AK9WGzikWTtMCQcZtmdBAbKoYcaJeCsjxpC6GAU1J8wu697bwvXwz7S7GMNW%2F0b4GOqUBXefOiU7wKBMlrORiWO8bqzi6dQDblnAFhv5LP3b6r4k83TNHpr0Gxj3dgNeKnPLEctMImFEJRLjXjlK%2ByhKfurXNfjY%2FV9w6n%2FkG6I3QMUVgkEwORWxWPz2xtK01YJozQsPUtjhE6DTdVbPy86574z0L2L98kPLH6Xf9LORQxYFXQrnZD9cypOQ0iRMx0Ze2gFNqJ4WwZAHIfATzVT8bwpWBHtm2&X-Amz-Signature=dc49c353a99d1ac8b0cdc6873b67e7d414e3bb48dc8ec7200ade86f7a6ca26d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
