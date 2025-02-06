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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622TPO7MF%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIDPLma1J73VdH%2BnVvwRlPeUpOn2H1uXlPGmggIPet0C3AiAA8BRyyxS%2Bd8odkyU03j3frK1N4bi61kOeKgj%2F%2BOU2OSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMDnavlCnWpgc15zPMKtwDzh%2FWvURj2ZhX54aTKufE4SpwZb3voP1zUr7alSTq3amLu21LptH4k03mctshA5c9lv9El%2BzXLMoLZ2aFV3KYBr1Uf64%2B0ZJBqjclq1O1ZXhttaBpF8TNSPVullRnqW3H%2BclnarMrtTOHDLWdVDf6BIw%2FQoDYUHmtDC9Y8u1LrAcY%2BApt3QHvbvCZP%2FncybVeFwTPz3%2F%2BPLXGVDrKel3o0xtGazqtK5zmiie%2BuFQqgLW2wXd40dEeJtmARUz68yF4hvkYrD%2FJQLpLbMoqghK%2BVipbLOLbxVQXARyJLOkXTxbNFS0a5AAaYsVjY34TCEkGl1XHaFaNK47pLez4cHgW1bM74KILP%2FFNX2Sy82nNbO%2BmCt1uAHfqstqdN2Stkt6CfrqhzlaeG9sErFZOZQil5maDzqan146bGAQKLMs2xmWlSt0K96b8FC%2F6bSAfXeqVKHWOhN%2BKHdP8ldI9XbXHVuqNUMR4IZIyoZrIz7MJ8ZH9v%2F5BfOOEScyhHiaHnUPX0TbiWS1m826yr60svA9bSUUKu7R%2BnGGKpRIZ1uO1kS%2BImq3ultvXqsOatezgdg9qlDwhfUlgT4FyBakVHLEFmOc9N21bD0q%2FjaVx9XlZ8qKkMJMHeWRYFYZ7Lx0w552TvQY6pgFRqVYGrVx9OPTrV3I6lFoDcc%2BUK%2BaRp3V%2BSRfryTbAHVkUFm9uqmg1gJWB2zmf5rEQVww28k4Pc3v6DgnrSCvn%2BsgE8fhwZFI371qxh6gPhYWenRTRtxSAlLO3CdxlLMqlvM%2BsTIgraFOQwliuKNQ%2BjgFGGWWHVPhPUXnnrMhPOCk3qw3VkDwiMDQmuNyeBee3OkxyyXK4wVeO5JeJJVRlK0LKbZxx&X-Amz-Signature=1c01ffee6a647b42739664496a0671fd407140e1c3abcc337626d9528107705f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
