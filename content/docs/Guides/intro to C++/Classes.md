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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RHOXAM4%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzTqOz9XLPkvdvinOpFDwOIvBGuvLs95Pu4NBk8m6UKAIhAOSs0qn7FyD3ZTuQNB4HaBrT4wnISiJm8l%2B3ipfczQiWKv8DCG0QABoMNjM3NDIzMTgzODA1Igydp%2BaJi%2B8UmH0Ds7sq3AMRp4z%2BZ0KvzVy7qejesZyT6BX4LFyCmuA2uO1LRVBq1FVHS5Z1jPg%2Fu6XOQK8mdYE8c5kX7PZMFVruqVI%2FoaR%2FBCZmlHiMHM6LzDHos6rKW6ChuU9X%2FQRzNBQX4rghqEacoqRpWgsgAPxRlkZIGHz7%2BAWbsZISw5dQQA6byV18U%2FZPiWSAcTLutJwIfkCvllBJpI%2F%2Fdm%2BA5BaRTDEKubwRS7Ct2nOqfkVRPWIW7Q3w2V1puaz6Cac2YwXXUPdzk4KMLMPN6DL%2BimdDerXEH5nY8W04Pav1PjXUXRcc4vex9xkAOWdkHmc2yHJn9VbCtDa6xaBqRRXx%2Fcmj2aJVNZHbDjPA0kAXYqvg%2BWgQHqI7K9F3O4rG%2Fmb894lC3LOilKOAmNwWMZ7x%2Ba2Nnzd%2F3F1VQ7t0V2qEhl980t671I%2ByVg79geyw0RPL6v%2BjYLD5Q%2FU93hG%2BlcCBWqjDhsqgesP%2FcBzqN%2FLtr4RkSGywpkiHKxslgBJx0yUZSAWPBw%2F2FvMH1R79PoNF6%2Fl5uYCzAOHxqp7cN4OYld%2FFJZWhiIYMlxbikq8%2Bhfjyr4krt%2BK9mKRhkmtoylnIVdxPWc5rR8KB8%2Fk2ikM0eMwsnfbgJdDrLHT8pfNoRjNR27bsNzCe%2Bo7CBjqkAVkgwyJwrkRjpJ96YjZhYjaxJyWlsqJrMF0qjsSdpf0pf%2FHWEfnpm47o%2FXkWBH2FtfvxzJknK2DYzgWW0T62EiUuRYj0%2FQwxNQHF8Ge7OiNYNRqaMx7TnUmCrY1TRQq3zUPIv%2FsKnGciqTMppmglGaEQzZJ4ARqscxwDbjhnMj5vlF6CJl1v1LuQnkFpFl1jLiBHJQW5bZU41WUjapEye%2FNdk5AW&X-Amz-Signature=e0bad0298ce9ada6b56402da22e84a6276fa2f289a04b5653525033ba2dba061&X-Amz-SignedHeaders=host&x-id=GetObject)

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
