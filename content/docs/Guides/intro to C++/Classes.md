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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUC63Y6R%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDHckKno6%2BLuqPiKHgufUevImo2Cb3Lm6caVLrLr7dvpQIgXNsUva7%2BYVASzu00cz4Z20NyajzRDRex%2B4InXfq5Yrwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDOM8LuLQfqIYgR7neSrcA6TAQfBKTxTpVXMYLw56wR%2Fo3rr6n4E0%2Bmdnvy43crnVGzDa42QksjfB%2F2veC25rBquN9IBZyRtP3KP6p5gCOT4OPWSvPb81xcaywM8RxwHhR7UgqAG3sK%2BE5b%2F0LvTzIyOBRuNEgOBEKe8vgCYh9GKbw6J01ibM3jTicj6GmcOFQ6DqRTwyn0q6tsUPLrEp3KPdUyUyl%2BpMri0qDTum5iEkJRJs0Q7ZjJCVzzmsadzZXQN4kW6R%2FcH1yfdLTgvEJRD3w7VGbADwYCxrV6%2BfExvuUbgliaZTRKhzPahLhN1FE78%2FI6BGTLXtxO3NdyuOljp2x0GyhHpc5eSfIZkpQF6kriEYR%2BpfMd9P9reG9iqzLtvrjI47yuC69gBaLJjHq%2B5%2Fnm%2BMh%2B1gYs29YuUUoQDhZQCiL7PhmPfx5gCCdqrLF4Bk%2FT4ZbM4lS45ZS%2BUkN1Eh9MsFY4TYf3Sf3ohUqeFNxa3Fq9edgZEEK2KtNR3oMFbkdwHL3ksKqITKn%2Fm1SiTaFZhRaJhvlEvnn%2BqP83gdSqCeXGL%2B0DJbF55dHlH5VY3qUfFU842K8kKvlAxUd6z9%2BJ2lHICsdQM1a2W6pUPb3GdqyV9NSvITHPl2C%2FnKEosxTBWb4O8R5gf7MNPV18MGOqUBWPzMWRs%2BfOJjZY5enaT3ZqCDCnXuaPpnsw1PjBuj%2FDGmMuptxyKNSMxtfdzu6cy3t49zUb9R5mm2njtDKaMqv%2FotzwPyQnaM4vZ9f34%2Bq%2BSWNFOu2mtt9%2BntHCQmj%2BlyZktHc9kA1kbbsFOD1ZDfqMXs6ZCrvLiOB0J2p3PPA%2FY%2Fi6DXpaZ7Qc3VxlZX6Gw9MFiMobAPnqTcpBXJPtdltwnwIcob&X-Amz-Signature=709bd623b18c842435845bffed267ea91789fda442450e3b5df0c1f099c6c1b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
