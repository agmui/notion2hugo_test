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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXIOTBWI%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDaaGyvAETQ0nnLTuhPVpxj9o0RKMnYYVKmEAUSjrg2OwIhALO5lqTBkWsZTPzxxt3tFSeVl0%2FnKgZzBAx2P%2Fmnk7CoKv8DCEYQABoMNjM3NDIzMTgzODA1IgwP5gix3EuDAxcW4Kkq3AOvdptpSAhuOxL6j%2F%2BqyRymNf6k1bElV7W%2BBPgS7VYzs5WbZrH9PZ9oTM57uomG556fQRUPEjcY64gGyERXa5OI2ao19hCtFf2YdRTG0pJPHemCWPCcYBETANJAE6sBQCV4cbFZDXbGiucMfCfIsXWucCgZy%2FgmuhfgTTxKhttO0cMOxss2fkVNEAYMTPGOyfEmqFABDadwGurII7E0qCEQCe0RyfuJZApcc09oSOdaxLfcEB6aT2aa4zsn7kmmjTOSvMVvVG0KmcHyx6o9j%2FpKb2UYB7jRfJhV7XVCRLmRlF4R1iQ41JS1rhGifGywJurOw7FVeAxhWGvcOhJuD%2FTdXRW7AZ%2Fmoqmf0nGdtS0oGQaafIk3OzNt0pnyWNXhzQRpeRIp8lA135yhIzaSo4Qv5rEh09dz%2FYCXvpmBOVAulMnDY9z%2FqVde%2FWsTY%2BCkbS9XpcD5k92zLjw%2Fxb0OBTXj4XR5DJRb3zG8633aLOuAw84ShDW31n3QKJFrVyAaR1B5d2G%2B7BB1lLUaLlgNG4qijhb3mrGhsKORHhBQG0CsGrwglw9h3Mu4yY8SNJDK6rqdjVI7Pkkc5HhNVn376TZN7pGEuJNX64pvU5P%2B4fg4qpNtVZsK3qiOnnJRZTDd%2Bfa9BjqkAaGhbdEE8kLVOgkkIZ4M5IJHNJxoTgiWnCqptFrOcRu49t9rb5K07NX2mJY5cReMxsT8oyM3xLHHk4rOmQVkYu8SlLvxtA1wBD4NuQlvSyMIWKSvC5%2B6fy1nwWFVEVUckkwZAy%2BUX%2FzMrcWuRkI74FQPBfZeEvXgm6UOhOUOJ76tmkmkc40IlFnfeu0G8lFOHyEaXAUURzbq20Pe3IHunfWvn2zY&X-Amz-Signature=7ab49147c4fa02ea89c6b056ecd881c5746a6ee9b16f9349a2537d50cf19d4d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
