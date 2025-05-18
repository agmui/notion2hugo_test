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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NXCLE5W%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgLmhMpUiHGKzUQjqhyggf20tpsKzQ3MoUwkEUP5qNKwIgFnfoEN8OhhfJ2feAx%2Ff1m5ubN2FPJXHn6JoyIxJZPfwq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDGC%2FwPIbDL26TH4iUCrcAwUx6afboHhW81payHXQposWJU0Ou%2B2R7AgZx7kQcSkMOyencxb6vf1H3bjnLgAFYFRpYbSnUf52SoD7tFsfpUZfdhu5i00R5ov%2BhHRDv4kCOkbIrTDU1CcxIsqXkQ0WSot3%2F8u2TpiSrmVbOJ2SVwe%2Fjf12IVkuHxKpLBjNNdPm2PAF3AUFrAECc6ohJDNC%2BMfWaaiF5ICApUHw6Zg6tCeQOUqzs2br1DQpBw%2F91JcsL1%2FYBfG97kDe6BlBbeAgeAoHSK6go1DOCV9%2BpQxYta7ndgaaIE0%2B51dSHAhF99zCspQ1MMzNJN6bZYU0NvGdindZX7UjdOR%2FJEs6fsttrvmygrouYQOH3qkwSLwXeomB7Bf30AvUvty3x2MLtUJT8hVHaivj3nlQM%2FKI0mIR6zSfgeoU9ys1Hu%2FygMZ2ppgww8wS58Kg2vuJacDEu11JyMoc3sgk0K6j25vD98VJT6baXNdL7Qz8t8M1pVjoD067uOCjTbJnYHZ6vvzbutJcCbc5Mlwh4FqLYsfuGUWNhFuZ4RZBhfNgoCezqH%2FSZRYtnk2nsk1RBBMLPJr1DSWxNj7UP20Q3JGWPMSa0umc57foAouZ1OlHG9YzV74cfGPKaR5jrgc6RxxIu7D6MPyCpcEGOqUBAQ%2FgoTd9c5iEQBIuNmohNnLMEyjdbDxAPL6%2FhGuDy5v6FCI%2FO21yYIFi%2F5wUhoLjU2tPLQCwd%2BgopluOjpLOeRybvjRNUQcZZx8Xc5eGhexeQlvFPauv5Aqh99c%2F3N63P%2FHO2PkAbXwPqvpiUP6ZAw0J58iGLqzTzSUf39PK5%2FQC722KtaRA2kIoDoaTSwLCvjee4WS5kh4Kdx0fgvfKF57qQHMV&X-Amz-Signature=16fba01db2c62afe82472a470938697cacc8deb3628ff1988bd11bce8e1e4100&X-Amz-SignedHeaders=host&x-id=GetObject)

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
