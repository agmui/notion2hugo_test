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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XENZNRYH%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7hDmVKk5v5Yk15%2B%2FDA32ORoddAiM34e7BVwV9vzOh%2BgIhAL8Ltvv5ZSAwqOe2t1qtHVP80oGWIv%2F7LdOZJGX0PV45Kv8DCDYQABoMNjM3NDIzMTgzODA1IgziRdOBTz50ObEAZDkq3APXxwXmAbVlu3wwYjv6cmU55sPQoFyI289O6DZvGTnux0VhhM%2BXrg5qRSwZV5%2FpfQvhWWBplPZmRIMq3Gh4SgtJLvEe%2Bb71TlCsm83eW4xVkHNrwysvMs8Abzl1FJfPHg63L4NXEFy%2BVHYtl1ORJvScD5%2Bk%2BGi1FZ9UVKT3f%2FcqwRASn3Oz3lM1tZs0dN4UySdUSevyngKIAvN7xWAoz2PRaAmV4WrL%2FAhpYSYiZwI3UPi5z6UsSJURgYmKTxX6jLnEs0R6JW%2BXlAvChcXjTrSOdiRMrPdTKR0JKfhW3lBZqeQJtNNCFZ9OjDh2gZcfePCJD3vaXLCS9uS%2F0rbz5u%2FDlvwSgzwxMBL0oNuZH2Z6E89ceBHf7UPtgxE5fxjUbaaS0onwthVUWSlZUh5%2FJgL4h6MlbyHaXH9pPTfsf9SqFUYmVU%2BYf4dckp%2F6zIJFHhZMy15BPy2K4t0b4Jbn%2BkGZhrbZZ%2FGHib7ZpySXH2lx9UoOdThRKFtSmnBH%2BGCNZvshdAG%2FHpi0XkxA0cV0XDDhCcURNJ%2BKudpl4GGT6YMs1HI%2FrICxbYvYS5VQu%2FQdM0%2FbCABkxvacdKGfyyXpKo5EiMvmINP%2BJ2pYFXlQi4vD9KWokqqjjEJyqTH%2BEzCw0pG%2FBjqkAQVvbrXx9LcjEuFGUkRuf1Tfq65r3d9I9xto7WAZYE97FX9p33glqA2ZzZzXrFexyZX0Ftc1tGnJ79kwyQk3g4Q8Cxn69ROTbbZc52f2xdKj0lRn6gQXvAC%2B64hzNBCeHxFKrZs4ZihP7ukAH43uIZH6NamcayqR%2F%2FyjKKw%2FTrePp2h2drL3LfGp36%2Bu9Kl%2FyG6etrbmH2kkp%2FC03VP3ggYBMirA&X-Amz-Signature=6037f14d40f76b5ddcea7024951151f7945e5c004288cc5abee7ce99718d2d31&X-Amz-SignedHeaders=host&x-id=GetObject)

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
