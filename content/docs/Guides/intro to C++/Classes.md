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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHZ2INIX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD4%2B7hG%2Bfs1n0%2FslK%2FtWu3HxPDXl6aW%2FwD2WwsaBQL0sgIgGBZsGi6mndUZdWpg6JBIEA9qsCKP5uSmSvSGxN1VDTEqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHd5o0WpdlFkb%2FGdnircA9hngGKsFBpcECXyAN%2B%2FgLR3pkQi5R25Y6jjJuBDfn%2Bf5Qkauad1AN7wTb6Vw5rbfFfvXJBZd2l%2FY65SJM7fIyuQHjtb7nuWXBJVnjsRTt6MGuorEWN0ERksxBr7dh5BABzktpp0UfuJOdAHCWeljc4clcVdUHa8PequTBBkuLsExcv3DS%2F35IWhYnH7pOJ9xCxjcBL%2F%2FVh7b5klZsENLKgzuQRyGM6BMCwNdPnu9yjZongtz1SG2hEdGHTxJax%2BvIqMlW%2FAMsNouZXJaNrxLpnOSG5jcSv%2Fgqv9y0K5b%2Bt5KHSbt024LewgVMBqUpHnTa2N%2FsuTj%2FHygkvaetLXQwk%2FJCTSUzd%2BYZ4dROfil70X5TY02pwHQ%2BAXG%2F%2FULlwRgGHN8uE%2FJju74939p0H2%2F1hBZ0h1PXlsZfi4GRN2SYmxToytmtl0Y%2FFnpo3OjRQHRnrOfjlEPE7uJ833VyqoUlJ72qRtDer9NeXEuq1DXJQ1lAAm6%2B9G5USuIty8jhJr%2Bq1ThBhg5WHhT6%2Fdzw1zKqoOudmcxcWholUQxBculHM4cKNbZ%2BlnYkLlPIznSEzRcj%2FHvQr0P3xpYJtEhXakxeXIqSuhM537xaI5QmBEdTnyjiMb2vvSsv8ezZrWMM2Yo8QGOqUBFzpOggpYQDwTI5gNw3JEPguL4A8UEdH%2FZ9Xsnmjob2d%2FBv5kJzVZCtEk0BPOt%2Bw9Fso%2Bq8k6%2FSWoWkl3hq97meWrT%2FFVUIMs2fW6dFmQoBhJxDbRlOhQBfJIYx9CC7vj1%2B7UNbU9u3jhQg3%2BlBa%2BZQq66thZ3MaB9RTJVabtHgO1ScOibg%2BQ8nAJvQIGwhPU7hnF0mF6ptF5y4oH1%2Bi7JKUt7%2B0f&X-Amz-Signature=c73a2ad30fd39f9f65d4390c31e38e9016e370a172e835600bcb9686bb52cd4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
