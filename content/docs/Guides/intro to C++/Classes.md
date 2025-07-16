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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X372MJR%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T024837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIGf6HOy6AYPtooud5Y126J9Ff1mDGneEIHKoeew16gwDAiArg2FxkrZw6Fbw1VKUeSC%2F1kkW9JVqTzKj2OqfBpdfbyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMAgN%2FyVlNh1%2BrabBAKtwDxFed83dLFY7mGEiXqYYUJ5mKv3PGx%2FTfWz%2BcZDA%2B0DIZ0aTgIE5DapEgWl%2BT6sSHzEJIVd0rqZbJcJpK9ntERKMpS%2FJa5AJ6LvJaiFnWGNSK9rwWeMQb6%2BF%2Bb9zbpvYx77%2FJ0aUmpmNTA9lyGv4CFFE39Vg6%2FPF9sT3HO547ts62yqrffQaX3U%2BZo8rz7zHxE8ZtvLh1XqNCE66tYKQixHkfd061BU%2FwwED%2FfE7NE8hJrBe1Q66cbcAiWDwDf37CX%2FNC3MBtnpMVutJRxnALxJ9E9M7JdNjrW9NzeezXTHg35QWvV1BHMWT18jUvTwK0716xaJungPUDhvHsQReQ5pfnbi2mCWArJpIywjcVh6eQk87pQ8Shk5EPY%2Bt7Ke%2BwSj5%2FNAOXguATrDwdDOOcwSEERUOGuJNF4B05nBg7qAS1Dq8mEDxTQaLW50VSJO%2BvgHzt53lkoU6DQigT6%2BlkjM1F0o0N7HiEo0egpCkXB9sX9sg4ZnaX9OO0y3c0rmBhkFB3pDZLsLINqpBqm1kBZOTxW6WvuxTX3O6dIH9wu80Sc35fAEdSooc9H6FaGT49Xyl6On05CfH4Da3FSHPIhLR6Kuu1b5BdwJdTXebX4mOloQN4xpDvXIg1AbAwtf3bwwY6pgF5eiS8e%2F0q8bIj8i4qo1XhFB%2F0fhWhOLY%2Bn7ItQlibcSe0J02DdqCNbBmAQfhf%2BRcwIgLqcQHgUbA7lzzU6rwmu4bNvBcHmVq2prgsNxWKoUfuvbvzUQgLqNC%2BDeuOeVxvFzzI4Nn7CrExILpwRfQDljb2Rik89J17Kf3IpOk4RZZtSK6eGVZxdE42lZl%2FiCe6PYVgGyP9uWm506innGGxW5UIZbo8&X-Amz-Signature=8e8c03d70677e23ac255c275b6d1f529c3bb47d45b7db55e71e0efda17b14813&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
