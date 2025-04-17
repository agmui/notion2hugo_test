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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE46AIOV%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHQVGwiravxibkZ%2FU%2B5%2FgSHKGJZaVIUNGB4DlEKBEFMsAiB9SPI8If4%2Fc%2BTxxPUzgE%2BQGgQOWYhdULXe1TGC%2F7WnVCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMcQDkBFSj%2FtW5SIUXKtwD9DX23oxO7zAV5vAmCXD%2BA8TE3AZojMjqR%2FMjAmEGEesEPOI0eU6KgG8dHLRybNEJjf6T2yUeLcku%2BYaKfiA5wY9b00CDid661LYNG6sDU3kiWnvm5eGc60ujOxH31oq8HchZCs8myqjDWf4rJWVhWXaVL%2BXbxTQk3tv4Wgp3kJ4KegsVJG6JukqVy85IAmxc1HtIbzCzAGl0VLZ5OmCMZubyzxX2GyUCSLqwB8e0fyzGDB83HJeaX27Po7INKQCtCyOgjNwNjr%2BP7XNF4j1R9UniAdSKXliWfpqDgsrvgcsfy4x%2Fzb8yHC9sVjS6ps2T1QB47um1Xv9xbBwtHr2TZ7UiWHxsa3fghZ3iREwt4Z%2FnPWAIrPBk1WvF%2FcE0z1iumFfuSqvnr4kwtcy3lG8nXkFwS3Q116v%2F%2F%2Fr6eko3Npoom3OZYq27pHb5V9K%2BPGUwY5d2w8qNP96QnbhTYvKezlIJakKIdQYn0S8ooW79kOxSqQDbEYzaFlJxpdUUSskGX7r%2F7PQdloAbqcNVW3C5QL5Ue8X%2BduUw7iakGOd5NGj8%2FVoB4%2FsUlpfqd79Bm9IpQcs%2FQypm9%2F7cuQd8mug2EBREoJtRgxKHO7J6iz9EB5l6vKRGPP0MCvMsNvEw14KFwAY6pgGWQTBjLJNTBdprktJJs2kwwU33E%2F1UFZ3Fsswwo5oXjtpIQeNMqG9oblBjQrzx8ApVO7UICdGilzoxY5r4Bz0U%2FX2yFpnd0FtxdMvVaPcTMHR2xe03b5xQOHPr5711ylRjuZ0lQhCojDp%2FnKAIhojwVr3uJ1smQZ8mRISVl4iHWaLhO181UjbQXR26lmfCHaiARlpBZWbpl%2Bu3hq5YU74VtHfmbIYo&X-Amz-Signature=3019e5d57e7c416e2e2d92b4f2abe57407f5b062ed94df79e9379977a96632d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
