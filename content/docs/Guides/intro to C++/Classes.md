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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZGGJW6R%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC99Jvv0eT1qK11OgSGnr9ZGEw5Flugqu7x6eMczPxwEAiEA8r98xd9nDwzai7WVSByKbSW2I1rTW6tg7YQVrHMueHwqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwA6j5VjBeLDU7otyrcAzoYzXerDrt5TLqUHNDdg5H8ajxYYN3tlaDuR8whAOzDBwYGeKFopnsXFvCGhP%2BjHW8D5e5QbFzNJBVepNQOqJmzjGb4oKSAMKV5jx9BvByx8fJx5GQL2s3UHYu3YATLj%2Fb9nYbKuCdBzQVElFhrfxbmLZYvnPxeuY06vAIHxEiqCxCD25EgOtqSgzI54AL5OnMHexp7iaTT9ECyUYhCjqAXVVVN%2BOwr0NpqfcQ9EqnxVakj%2FlTN%2FjqHjhZHnrmYIgy847WBKWEyDRDlK51YMyd3MzC4QrkUQXCjx3ZaxQ9rbv%2FliusMqQHe66%2FTaTBhDJfqYoF3qrRuZG6f8WRiX%2Ba0NyJDd6BqnwulNQaryQ7f1EWAeMbGpMOGDICcXM92Y6REe55oapOzULZMxLUvRVVg78jph%2Bi7RlnzSZy9%2FLB9N1UseAtzIa5x2jDv2S55B%2FOvBtNT6fxnML8gGXE9SYxmTS1%2FdpfndLLKW3OERf7JApmXwxawgFrBKvoE4G92vZvsHKyflxaJBfd4HgxHW5oA4VwNqKMyGvWxCuZnmaac4dM6Y%2Bcvv9f1MjRiHASMiPxPA6fXXk3s2j0S0embEsyYq%2BZ14q3XwY0988%2F5piwg0fpvX8MiwrbpKbPKMO3n6LwGOqUBgQbsF8x0u5b5LXfs%2BcKwldmzVX4NX5WEaUQ1TsI24PQRYH%2F%2FVBswUt9iOBaTDokp37jk1nfft%2BF%2Bnw86ozAb9lGN5iJhXgo5L29wo2BeneroAK84akW78grMeAmPxIG8iT8ellF5p59drk%2Fq1P%2B8SwG1MxFlZ61%2FO2hfBd%2B5hs3UaVVsXu%2F4ldBDEHIfy7ELk21ebAaf%2Fxo45YUGZCfElSkFwQfs&X-Amz-Signature=9db7ae6ab6ffe1dff8b827886bbc5689581ca7c520985b6724742fff890ed43d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
