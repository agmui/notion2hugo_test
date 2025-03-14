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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7M75RKA%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy%2BXJok8TflIy3Nmm0OoprVFfMDr%2FaiY4BtkIC86s3zAIhAKzdOxvtl671GVN9LHyLrU5EIiSGVf5wsgi8cH2kBzohKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw410o82kCfeRaflscq3APP07SWYpRHe%2Ftv818b%2By5a5yZLE80RiO1NlsvqoCe8nimGFI%2FDaeLHo%2F98%2ByEqR31P0j5nFWt%2BxH%2BW9K51QJc6a5Ar0WgdSG4tkeE6MPfvLfLb4tTC4Zt%2FUubcgq5qK8ZPota2LxO6dW%2FEjPc1F%2BeWKmsu9DKrVq3GX1YOfWlDvW4DHO1WRW9EH5U4z5MFOYHf349jkwg9G8CG0w8Qo5C%2BroTskPPX9de%2FujgEFYRqdc6fnfZZRHc6H8Q4rvfMLGE6c7RYT%2BSRJQ8prfCkLWdNPtH4xbbH8N1HjJsA2UsQrUy9ONCsMt4WUxIkQiniTLqn%2BFx%2FBX4USDwQug0PzT1L3fyig9C26eHWeV8ZQ%2FxI1LZkDO%2FC834%2BDmEyBQO7NwGE2pMLM%2F9T65Go4x4fG7c8ahdWrMcidzl8PPxP1z6PqB4ilTDF7MrzvqKhR2DaQoNMy09FkWSvw4q9WMrG2dPic3CipUDqBD0QtNYsz6rCoP3qnx3adK9j%2BdBzsHurBGZ49AIUA97QAe4y5S36pqWvv7pH2bUT1DwyhlRAnYaOKiKy0kWaqegLJV5Ve1RiyWwNxVVej%2Fw5D81H3dTGrTk%2BS2b%2BQutx3FbAiFR2bYBbzh3lO4R58iRtxu9JmjDU0NK%2BBjqkAW4AJhvzVUNBPvMj8qOomn2p6x5xQHSxuC%2Bh8J2vUUdIJgs3aHxmk2udvBxNunepeDyGqziNRG0DeGrAt%2FHL%2F5Q1K6urxDpeXeYAiDJNU7Qi5R18uRVKhFc8JXiRwl60uk4m4lEXg8S8pF6u6GKcBagsvVCs6mPbOZzTo9w5dEz9HI8GjmuF2UVuRkdoEJCbQh4AbEy9WnwEilU%2Fu1ksiYYMi2zc&X-Amz-Signature=6bf40f182ecf9e68f8aba17e4938c1aa387e8aff42b8e2e64fd0920d171e7894&X-Amz-SignedHeaders=host&x-id=GetObject)

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
