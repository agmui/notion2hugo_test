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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7BMYYED%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIDIARChXn8lvQNUJwOvuxeFI7jYWABBvklo0AqKN05WEAiBKtK0aUFG6aOzwV9yYF5awO1YMZ1of3Fwz%2FR5BGuRVySqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJBRqJ2wsb4yN%2BRTQKtwDzXFg3DaG4aQU0o2Nq3DLn6edvWq5xXe1RnVNceljhow8OGkRb7FfUTYyUQtemOVNWRL4wjUPbgyqToabwHSs2LkeWP85bNjKYGYKpyfnrEr7xtH%2FF5dX1BjGT9D1uuTBW0%2Ft7UUNR980EDk8ftEFZTXTo%2Fkao8Ocfxc6HlxZz1vaW4Ffz00jgErY3V0QJuxLT1EQSN2oHr9QdJWSlY7%2B%2BmyXZHTU0ZyiufHbeNtqT1Yr%2Bl4nFo6dE6DWuGxdsNZUgRqzqt8dBM6U%2BcdPbMm5OVkRgG%2FjwEKY59%2FwAjHjyaQJn%2BRfj3QmTvLv%2FuWsDz9OULYGuhoajb5O3T1KBI%2BdWKxp7ZDmfWaLJ%2FNvkv9B8wk%2BH7Oq9MppLjidgLDY96KfuaPkvNRXEV9zcbZCoHkjJ6OAJRH2ml1J3B%2FNMVukmjY92C0pSWCqjCV7zyAcEZcyCQGIO2fUTc%2B14fLL5KRa989Rg4tPHXLJ5MUC1LVJJ562NKNBAFqpi%2BOtjjUTIdbjhazlFEZe3XiuPAnYRxP%2BOoc89rm4IB0O4zmk51k9uQA8VMAY9rJZlGUqSG%2BgI7fGkiRTGDgF3r%2F3DQLkUBNx0t0Fcmea4xBTfFx%2FHW0haqGCkFoQQ6cX2ETZ8nAw2PaFvgY6pgF7WIU7uFA%2F%2Bg554g3qrxtWkCVopY64pVW2R5mTz2MimsZSLBa94lOSh6KYvQl4aCpgmN1VQfW%2BVv8sYGkayVzJLz%2BsEtN7Gu6EeZr0fiU6UXk9lPRKDqHd5STA4CC%2FQP6o89oz%2F8AoojckTRdaKmcdHxyom5eUqHat%2FxOg9BWvSF0sbHTZkaTlT1O%2FOINhlzw66vpvdrOOjp7MqeLXJb%2FdKOv2xpnN&X-Amz-Signature=d12bdb3e14bf5addc65cf365b447c30c3f77d48b83f50c50b4186489a9401b0a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
