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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623VTPUGV%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGClaVfId%2Bcl3x6uI3K8EyZyNDMMb0B7CFLgVmWQx1YAiEAr4J3RZ2iOkRP1niXqvJe49eAd9Ffu9V1ivDcNquab4IqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmFevPAWUH3AkQJdCrcA58qiREowaSq6727bPFnceGGe4Fv8pLxdc5YO14yPnNeQ0d64jkM%2FruJ6GNcByn6uv3SMtrn9ARvlKuQVkb71EJqEQjQ4uzbujzlLjh7N4fCh07JHpD1hrpW%2BQLftCcahVygCgIir%2F44uHVam%2FzG40LQ4Xsbte9LC5uPj1QGkfTYdt4JHHhNHuAKhh6nndwflRBeeWTndlJ0mealTd5VYmwK9HdQ4kSg5t3zEKT%2FO%2FKf1oQpDIzsA7IlGPTRyAzCLfTcLOAF8ZlBeu0zHxGpoE%2BuYn5XqpCMneeo5BhVLy2vPXfQQwYnw9EaJ345vIX4%2BXjXoaHoUaeUvuOE4VyMWXEp56B7FnEbZvuJPn7mWEv7pnyj4qb6nt7gO%2BYtI7h3tl2OMNonzCm8JkToFOLWhA63W5IN5RAKvoH5059Wm1DAFft0DhiUxHOh%2FUF7kxLhAmW2DE%2BFv8BrILIiNQ02X4ZlNtzkjCnOsz8jZoCXGmKj%2BM7gnTN%2FT1vS5B6Voi5kE9LfrRm3kUBbavMxlnMo9PISUgINt%2FEx7PHMlf%2BCyA9eQnC%2BfnW%2FZFYDOSD7pHub1gMODS%2FV9fxiX21rdUuQ3HjFh5ltnLNI0CD%2FPMshPG2IVE0JnD0E9wLt7QzzMKf5i8MGOqUBHLnhdaJQmXXYW1%2B7kGpaiobIAmLwaSbjktRb17PMyzJ2f3kVxaiYHZsp9VbJKfzZlsxKEhKRls%2Fioy1xrxCFZh%2B6W7zUjnM9U8mHgbcNtXnsZNuebNE8XyDsdJWlv%2FIh7p4TceeMlroj75jLAuhuVYLm9IbU9G11RT5dPohJsqj7H9fTRvBr3M6kmKAwZgY6mSnWEibPjK8CQKhzbWkFy3RJUDdH&X-Amz-Signature=1efd5b82defe9cdb3eb8fa19aa434cc27fe8d1d9726332b46216cb7495626c3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
