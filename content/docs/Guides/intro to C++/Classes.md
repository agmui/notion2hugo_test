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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXTEKAFV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD01UptSqT4Jkm0BslX4gF6FRGk8N1BrIUDq6%2BAj3Mr3AIhAKrsz0CtvHY0VALqCmHnoMnflJuR7AFhqUHB5PxmJw6lKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypKJp7hWgyyXuGPy8q3AOmmnLeDcSWstILi1p85ecd0oqTGPprZX1M9ci7apBI6KXt1cUiPHdwgmQi2XLuLRCosN3VaTGAjt0s%2F46OVS0hS23hYcOOnfZ3P9HJDX6AqPqzEQ4Oikh0KNBxBHrQ9nKdOzG1jT6Yt5TAvwQjYS4MQkBHSQGZjX9FudYfonuLUcRbk4jl4zxJ3%2F5e3bZy9PuNJixQNbP8BLjOW8FXBwytHjYoMvOi8JZh3x3C6kwHj1brbHKUdpHDZ0BLOU6TU7dmZDnDr0O0dPtB143s4JChrNgrkMA32pN%2FuthT23LJJDuATEuHaYQK29fpiZOE3adNE%2Bqyb5uwf1kNsB5axSHELWV5TgfAnfF9Yb3gboG0EUMmUkd0RAFIvSb48WVoSw0422j9m0EpItJ1dPDih4r%2FjFT0qhCiQqV1rXfWWEK5EgjLlcb3i4J%2B0HJdMa%2FzSphkX6VP%2BTOf2iiCbXnr6D9ps%2FG%2FeLX8Ttm0UT3bjdISZlub%2BDQ4x%2Fx%2BAUgxJpLR8cqzKsuw4jnA3V0z0As8jOQtLK6lru2x51cZYi0i1vb7IetibxHQkhHwsaEA2MTL%2FMENVKQupQsapMTfyfIh%2FXDvks332B0mzrRgVWoelPjxIHqUNkcJErZhyTOiQTCi4bzBBjqkAVkvTis62XjoxGFJ%2BZYZM56QkK4ME4s1NGF0chCESxMtPT1nMScVt7h7fSkFwy6kN0a6X8B6e4RJv6kczdYIJdjKROLw9OyvwgPt8jPONgvAbU5eaWWuZM2A4ywjyXj4A%2FO1G5Px2Tchd6OkEL%2FiyjcjfT8TmUuBxpdPx8LvDj%2BikOKWCTRS29RKAnWq6WvilMr9n1eEub64sOReCxA%2FbyVtRUNI&X-Amz-Signature=3b58d4163432ec6fa0a996c6becd8f4e96033a8676e11f03eb8f8176a1cabd21&X-Amz-SignedHeaders=host&x-id=GetObject)

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
