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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OTOSRHZ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0Ylvqq0oL8gqJWYZfM9d2O2LNRKvzcW5xTNEwlRJ%2FXAiBiWj3ea2dhMyAnF34WvUGzuBfhcn8mTzMovyfT9MRScir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMOl%2FvToTzSz7EmnadKtwDSDtA%2BQTnmPOzH1bbX%2FtOoLM721nug1uaj75uWU4IhEwu%2BacdA6x7Q4Nj5W8%2BkULdpj2W%2F%2BYy%2Bnqb0OoJIXnb2KGzMrAf%2F0F3mPjtar28%2F7O8ByxSllVETcW9pPGWgSGuTZppN%2Bg5cz2uZVeUkBljS6JsDYdSUimO5DboiFL27XS7iFjFp%2B2m4WPmCeIQFeHwiCAag9e2BkNjmOEtYCBJQJhb5CYl76%2BPQd%2BmelBxpaBH6vObPXeV76QvmfYT0OUNayR4Q2YU5cqun4E4KY64Py0w4rbhWXrPoLdVPyeS%2Br4JXEsjyHFxJhM%2FeL%2FrbCpj1I7c8wwIMyJQhovBUsDYpkwEOWPRlVw%2BYF608pLlSZJeXCIDpXgQOuUOToo2ha%2F7136utwuBqninoSfalvy3VERirwZhgjFe6zyFlbpz6P4uP8ywB13l2RvaCF0y9xxgDhuOR7FP0iWwfFnpwim%2FjqfCt%2Ba4nnskDa9VX4poi1kF2U52UEFljPBdQYLQsTWhU%2BcmIcwVxL5WVvyK1sZgDEtChYFYKFYRgHkeWwxarkEM1vcM8qq%2BtfItqYY9YEdFXqRf88uGTFPCIALvhqEsUTQcTkVOAGYioRdR%2FTOzDfiBp3qLH%2BoHTuKoE3sw1deMwgY6pgGK2AL6h7G9twCW3yZxNdpJ8EcJhG3CfDmsV0fmTas7%2FkfitXeJvGKpHgTbd%2Bug6ACOrdIvv1CN1SwfZheirJTx8HRnsSvnbaYqOruYa4Pn05Z%2FTn%2BtsQpuveArAWi3f3Mz%2FN%2FBj8tS45zLGgm7sg58tyjmP9il6siyaTLV3t%2BXcVqEU%2BRhFgzEpYBrjm6ZHzRFttchZKj6PpsXxYlydGPURnwSd0%2FJ&X-Amz-Signature=2bd458428f46ef73906b831ac7ccfa22245a4a3f060602ef2750245c9e42cbae&X-Amz-SignedHeaders=host&x-id=GetObject)

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
