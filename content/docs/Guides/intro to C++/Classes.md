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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDQWY5WQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyHMaj9az5sx9rfRvfQsR43QG1bPHfb3SiiM%2Blja6PYAiA7oScac2pZzYzuMCxC1XVFurfRm0FsaVqTzcPkNLLWfiqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxvfuSSWiYAxYK2m4KtwDcRf8fBj6phW0ctuAyHIuaskYf7FsWVxAaUSRsqq9mZmWx4Smfb4JMBXE6Es2kAgT4AehB6NEJ7j2VZMKrN%2BhxE%2FyJ9X281aYa5TrzaJbbaI1QLxupbavcp%2BlGxzPGv3gf7gjmUOAK%2F15MlEEROgZn62J7eq5zTS33sZ8tqF0VWTGHbTbIoz82qAX82ZTlmpV4YT3W2t2w9hX%2FxOpA0Y1YXZ4hK%2Blxlp9YRHhychk3lWbNM1V9atQ%2FqFnCGkeu7%2BB1VC00p5gIUs%2BiEdjCdBoi7Um4wl3u%2BTF%2F4yAhU2l%2FFfOugvHjV64%2Bqy1Gj2CD0T5QK1CM9pvfzEkVEv03lcrIsJYq7xSG6KMNS0gN0feoJzILiPJ5i3JXNn8PtwlmprsWQv1agpoI94gs5CData1Gd5F2fMCBhDFjYwGth4QWYBTQoQOpzNHdmt0%2BOC%2FgA90030CXrqZzntWRQ5UxsrEUuHz36XLnANzpHm%2BdaEqG33DshFjLeRism9ui3g3WjC29IWcuFG23easAUe7ZNj5XlyOyQzuLeRAo%2FbMP2YpLRrlMt7g3w56%2BWHbWStSnafc%2F9qs3a3mbTCYDc7BkT2lqH%2B5AWA0bR9PTBFsf7%2FGHO9MpL26s8Bl1o1BVHsw1IffwQY6pgHEnM9wiArFSdTi0XH69d4%2F8rgOkzzTWMrYU1%2Bjpu06CscBfSH8ZoIO0pqIfogff6dT6khaLdzCnhLSO5UTqDMmJTB9WVaqhuxaHtnqzarMXMuZBtVS1ZdXt8XNUhCA1Ip%2BmXF6XYbqOYee2he3vT2qDer19I%2BSVl0ETa3L9EfkU1H7iejLpG2tbrzZ0fsGhOzdNojL%2BZEqoJZMLpAhBCzykHWnU5au&X-Amz-Signature=7eaf7fe7303f0b413309c3a8d3e7e65a7ad29df97402c24515795dbc1cda61dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
