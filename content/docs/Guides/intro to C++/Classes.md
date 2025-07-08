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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HVFQZWN%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClWL2VPk0G457%2FJqAAPZ8q1j2Un4nE1UVObBoGF6juNAiEAneqiIjhBO1PNZ6Oba7CO%2FU%2FWcGAgR3zbk2wPjognZ84qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLVUXh3q5eV3qTR3yrcA3NkaYLHuvS2qhUCEgwzx1wzoDAYMBDjrh8sBTY%2BncmbblZSrQ3KduoECFnXykS31rdiMkGNHi%2FZuJCO392XeMRVknVGG0m%2Bne5QFqD0nF5xrVujFvW7QCYruNXoG%2BYY2CB8dE2WZ6%2B1HrqDGbhFVBjwUYBGJ2WUPHt3bmoIK97p3bBotyoKzGRFNaq2YGZiz8iO6wAJfFpZCYj7bldVB15q7IW0rox9YFkrK0ap84b6b9Rdk10jA7NUQINeyxrZzOKXeuwM4NWnWP9PKYpovmug9RCZAfj3y9PkdR2xqfxMo%2FVTLZLYdH5megrp%2FyGaBKJIkPH5ye1iAQUjzkPnRGwb7nI24NrZlDf4XWKbHxBypX5TfdOVGP84ipsmwSYnkTZSmMqsLIxLRBT%2B%2Bu%2FatAZMxSI6Zw6xtDuxtSMUxwF3MmiNzeEv%2FsZyWWJwTv8n9w70ZRr6%2F6kry3xHmkLJf1nj1ccKUhwyKGnF2cX5pXLdr6GiLTYe2qA8ZfONpBGvkXQNRA32FgjMWtKGcquuabocxiWnpL13wlso33XZ6wlHXmwycnvkSr7afRA0V24tn0wUISjfCSFjicNuedwKeDEerxaWxowfYqXa4%2FXjkC6ZY7rik0N3X35m4jNfMK2ttcMGOqUBnU0GsvykXkblaQrhD%2FCvGhPGl%2BnBflZ2mvrNSuVCOapy8g8HYWpQ7e8Zn2%2FS7aJj9n8vf4N0gmex6%2FXclfP7y3razFj%2FyH73yHF%2BuNAtvppdO32%2FqTFDHgo9sRrpaZ0lVcwZdZtWo%2FU6dbnCqvD0E2r5nQ1ElV4seRwBwhawZpLYn3ojEl7w4cHu1BaTdxjtCU1lP15Oifk5X9KQDVgRseJ5bGoC&X-Amz-Signature=57886f918fd7aadd6be372906543b1916b40a936c2d13fd51a9789379b00778f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
