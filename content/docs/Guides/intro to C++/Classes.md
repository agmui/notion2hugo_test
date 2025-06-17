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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4D4MGBH%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtOlr4MeoqVNaVDvIJ7%2FrWwgPpx6%2Bumxuq9xE3O0NTJAiBw%2B0awYRHGD%2BqGR26ThF4D0BoYWVat%2FdV6QZd5cOvKLir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMfTsyJNhdWUrPCpIpKtwD4QemnREev%2BBj4WtVuejF9s6hCUMlM6jXf4ziqRu1oi%2Fn3%2Ft17ObIO04meAIWPB6Gh6pPQJGpdjAa9lTAz7NsDtakBziAy48RNV3ijpPVnAe5vt5h8mykESSXeqbxB%2Fd2%2BAhRjcs60Bi6YH73MPNtiH7ZtINzmoM6UrALVh8yhMz%2B3dyH5NquDpLoZLspF8ZrxzvC73htGJOUUPh9Mv1FVuYjxGwRj%2FiT4GQ%2BriPa2Th6YpKn7RDXDg2PvoND0K1YI7XH5eAKKnQy%2B%2BinixXZdvXM40lcKQaEi3qcciTvf4re009CLf19p7D0JRFfIoAUqPqaGEuSYBiaBwU4YCpeT6R%2Bnfs8AyDxWvcdFWNgKHzvDjQMyE7h5H2QAIPGS1vnR5Zo3o4ByLTM4P1US1jMgvUUrqIQp%2F8g65nGvfVNhtdZswmdmEGwUO8f8vj%2BXRo0lyRRtd5GH%2FTnK1tvgtR3KlX2a2yvcWeKfpni3why3GlzRR%2FeRRRDUDl7TqRiZ7SYTOCw48nz%2BJ1gJa%2B3PaOtMiLQ4%2BMtlSruQNzvRqC%2BJA0kpBYZJho5UKFR48gzr4WOETIpHIo0m3JCgKsLyZJlXG%2FF4CrfJBoMTtWdnHA6J1Z79K568xz59GaXO8owxqbFwgY6pgH1b31sTlWUoUTqUGXsThkcnud0DOwKssODufsQdKotgK%2FxgzJqEnr4t%2ByXGZmaucBf8iDS%2BILnYqWYt58SNv1o1e2LRu6NFSw0i%2Bcfo%2FtC90fEYMpvlU2qoc60Cmkyt225zzKLUUPBk4qFZ54BQvSiUcmogmIxsnWIv%2FCl2UWSjlohlYqpd9pFEA56B%2B6BrbDviC6PTA1gTyJuAoWQcTXYf4NDkn2Y&X-Amz-Signature=c84e28fe446dd95b9acc005fde8b8bd9e188e17965376c255976516f49e9f0a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
