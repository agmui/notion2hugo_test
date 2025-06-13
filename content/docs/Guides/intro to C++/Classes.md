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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DTKA4VQ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T070931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIGp7s%2BpErRrn4KaMDTLBR9j%2BbRQTaVAdHctO1fR2RMUkAiEAh90cBQ51lD3iCaO7ab7SPRTjCe7i1oA77BKH6kB4kw0qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BH1BbmCgtHv1Wr2CrcA%2FmsjQ5jc4CgWQxNqcKCZEGE9LAJyoMycjJLsQtwL19vn%2FOxtCQdo5tFQ9TV5Xs9EU4vQkm8wjmEvoypwKq4vidLIfoeZLaMxdNoKVXHjKJcHDcRkqos3HE%2B5QDHHm5I4jvrq%2F0IwVQ6%2BmvwxwOyv%2FZaVhL6s84YBol8VNc%2FzTL2AK1llXTWOA%2B5hKV3Ku9KVhQhY7j32z3bIplxTCa2j63v92fd5C3evKn9ng1EipIF6Pa4BdVZMw5nn%2BKhR8t5ceC51Xnr7w8a1zovJlnJD6xvQ%2Bs1VxIkT11hsz5miRbgaydlhSXT29WdXWADXG5IXhrSVwgSXynd69Ne1%2FIhZsqxHGRp95WENo4QFhubBepxst4SoSqqLLXngUY3P9QCoPzEoJCm%2BklLYQJbP0ZIeJmVFOS6H2imcV58jwPt%2FWmEZlaGcOBRHXF5pcEiIcR9JgWM1nbmSogbQ5aneIXDuvWZ4RU89pBZEcWsw1ckqYG06qscI12%2BKU1sRoyzOQmrhK8qBd%2BHXGGQTJyPht0PowEK%2BYA%2BGYKlRxvqKxErhAjBY1FYBPVTQp1LxgHchZkQ7VnLqCFJaKRhfXRvuj7eYTscq70BGpqPRxfMs9Ef66IOUguD6m6fe707iRraMOKkrsIGOqUBaGoMkwfGniUZRCGALa%2BUFk314uHkuf8MhRaZ4Jk5YDKxfiWGyg8%2BFHv7MeDeV6rX0osbhXk9z%2Bxv9x6mHOvwO4evmGPuro440fR0aJeEhkKu0IKXepKFoakVd678ycPjZnXkyJCOOyXtWwD9kevFyEbDki4T3bwCXk%2FASeQi%2FdUdQubLL6mf9ep9nW969K7zgZcwPYLwXXk%2FyXjG3ukZxvHGNkdc&X-Amz-Signature=0805fd7be85075e016cdff74edb0d3c0597751f12e1a46cfde2faeea9dc1e11e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
