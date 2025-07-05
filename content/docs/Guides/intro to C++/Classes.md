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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6KO3MO3%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFZw6eYBF8NLJxGwHYwiXldLcjjuDO5P3x%2F35PwIrP0EAiBSkbOFQiAsRv6GFd4d1D5uFfnXMVV9pdZAc3eHAeH3sSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMF%2BQRpzOBMVN%2FDR4aKtwDrn6nrKGES2ef4YQcvA8gZUehHmYcKm%2BoMwAoB%2FFhgGXf9Bib5H360YCIz7MWF%2BAKF%2FdCvWMnDpgR5hbcIZgCiHEeem7JGSZmR0AiNTyPXA8vIq9BpKOoqzo0whn%2Fps3elQ31l5QS%2FGXXdY6szuXO%2BVsaBrvDz7BcpTldFvCwmt4zl8NK8C4tBE6dxGC%2BDmixTdKfmlxAfBHxGdQdp1PxNqikFUiHWyLy0exfaoFE2d3vAncd5%2BSgXJOgzMiU6w%2BUICvOAkYa%2BCSUOS5nUpq3ah6tQKhCnkjRhhfgXdx7tdblv8Acr%2ByHFNcmG5CFlsADqGVXfgiFngaX0A8v5OWU8bCfXLQ5Ckl2t9nbK%2BFkRkQTOh3rvNgTbhYKA%2BOescOUZPpJXUxiVxgpVLlROWf0cLEh1j0Z8%2FJ%2FNN4KLKa6DPkbmeyecLtvQ61%2FHczvPIuuEXpEn8Xb5wvB6ZMjw1kG4jmOHVrnfX1JQC6hJi9JHsf9Z7QP8vl8qaaps80nfAa43fzGpJmmPDCYUjcJtq5bFUekf4%2BNseGVJHQqJS0m%2FTORbnFRyLkZJhqUxS%2BvX%2B3NYQAsvH2YYyCdZnLQzoP4HuUqLQelX1POdsTeQxwrS9Xy4az2DtUdAMCbFMIw6qujwwY6pgGj3%2F27qByqTi%2BCHWw39BcUAoGV9lEZJ7DwjG7CyPE5jH2Aybnoljd3iT0V9qfjb3wDoeWYLBmesDjVvrmcXn2nbc5bDXC8A%2B%2FvAVIlO%2BlW%2FtXaKZEttzM1iHtWwd4UJdVUxnor5qfEt21msQKNS%2BpASrBltLWOZS71QCrrQsSTdrqnHcXIMmWHGwhduQRDXcBGERXPg5OPg98H43SAMM5Oq3m7AXwX&X-Amz-Signature=906afa62214b4f6beb5a36e2c69ab782ff8fe1e9edeab4df41b6df744edb4179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
