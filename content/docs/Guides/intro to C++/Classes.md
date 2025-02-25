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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGMTNTJE%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCh3%2FUuTbM3Lgiiz3dFocEzhP0SQmBzGJkXGpf2MzykVQIgMpj83F2yoYiJkZWY9udQqTTIRhDefZ6fS2Oz%2Bq3Eklkq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDFyQWJJX82gys7QvvCrcA8SsBUPH6pnZgRWMrvnqRL%2BaMzJCgMMXMNR0cq7m%2FwMfnE2xKzzY9cxecKjdGZesWxhW1N9Q71RDmfmc%2Fd1GgszevKzs12rcUWppRdd5mY70P4%2Bac%2FT5EYco3xxHg9AxG3LYkTACyV6iIze6G3O8%2BpWv94CaPbagbBNfpEPfKx72MLL8Z0mTmTy1Ae2oAhmKzWkXbD%2BYg%2FbK6RrTFLecWUs3mjgq50pdEH4HkLE3L6KVjM3A20rNUWrW5FBGtInCfq0eSvWSoKMtVF0J4tp64KCPpl9A10soxBcq0XzHBtRzDQZ2ztGf9EcqI4wKtq%2FagZOpXV%2FiSf6bAmPjhHWQ8uRl5vZbMElmjWXTNnxxXpYsZWsToidhkynOfp%2FFvr%2FOy%2FsJwRAnesqXBqEk0eT%2BM0hkmD9hDX65OsL7yZEv6hJ4hLWlMLNf6OOWXnZjWr6CxKv0o6hGNlMvpa9AArX3UhwoYlSqM5LFEqsLfnr01w%2BFSLSs7Czz23yfIo6BntaV%2FB%2FO6Kk8DtznzqDh50x2auAnuMx3LJ8ctuWb%2Fur4yjC3Y6FYmIvAHCGwQ70K0e1B6GqAeW5wggrev6kz%2Fa1YyWmMxO098EsBDIC3jLl4DXnKZPI5o9Kri25aGXZSMKnH%2BL0GOqUBUkRrRQOc80CCnzmoU%2BDG6hRL8SVIAvjURQ%2FlM6vtx%2FLxT56GYtTEyWWYhRRzu%2FoNkGtkxybCASJBq1zxZ5%2BcU39UTEOre9ifyuTt5FP3Xx6zAurygJxU3u0Us81lhhEyZ72dQWODzje0R%2B9D1hTQzb02tJg0pnKRDUbAeUcud6qGvdroRGkb8ui3O8%2FSfBK8rE67%2B%2BQxPBCxo2vG9OL%2FHqmLPWGD&X-Amz-Signature=7c0156d9e06de66b905ee75bf17d1f0b6a0a203b83aa4cdb8ba0dd1eb6ffbf5c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
