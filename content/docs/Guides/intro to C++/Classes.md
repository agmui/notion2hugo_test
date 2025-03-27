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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C2ICZGE%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T021754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOjSmAfRSbEZMvwBNiKAAkJOJETzDq%2F6QZkcMjoJOnnAIgQwtzAMynKHavAlZ16yPtapZIChBONjdvpfyQpR7W%2Bq8q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDPw3QkCYk%2FmOhpj3TircA9hLed6s5dtwFYWV0XdZGKarNn2aMAdZOw5MTdQMsO%2FyLFZX7ksOmuPPTPriyitOGFZWuFZDI2zCrV%2BJiNJPyg2uq9Hz%2Bd4Xd4yscibY5F%2BDHDr8KiNQ%2BuwqMTGxUAEFxZIjCkhJawfYFkQLzl%2FyGNzCKrKwUkRX7LcJrA9jnbria%2F8CxAJ3QquVdGvzYweMxveEoKSexmvXc1WQ4hUhtnY3AhyHmmyCi%2FT2bIGG2FrhX8fp8xQ6oX4odti3P%2FAkdMmJM7qrv5C6xstLbpUnPEhWDVhVciiWJURRqFCLnmjPQkZEeZwQe579wAzBvYhG%2BLhtt2sNzpGdItoBL3agpBL3OuOLumS848%2BMUAN0SywI6qmgbF9eWNZemTm2Gh%2BonNx%2BLj2h%2BjQcs5puHIYJ4AE5OPdVBHIpCsd%2BsAqwPv44bVgAozoGtBJ1EfkqGJFT%2BVrxu6EY6IaiJ95bqaZONb%2BSn9j%2BhZr3Ohx355g%2Bw7nnc6AUTWRXY8PBJDedBOTylQ59ftppDwqK0aoLdEHusTSsbBIthn%2BEZ0KSOUGrG22c4YLq%2BSvPrDorbMdI8auFr4nJ6mcHEbhCOiGsVjOi6EK6qTw5XacxV7DsLfLibWbFJk3K0WTTRQeKrQ6DMP%2BNkr8GOqUB%2FYbiFZGXSusVMLce20KkzjQHguaKBU1%2BizWooqCjEgBNX0qKfzdmajmcUntzvqHqvxzlQNkg7ERA7Jhj1CdtX4aK%2FZMqWY7I00207vuwD9v8jT9KtGjvLEMa0%2FLB6gGdWfqL4H0SFMN5l92eaIK3ecrIq%2BFITOzyUPOiiFn82AdBkb7FO8Z9e1qpx%2F2Db2nJgXx6i%2BNVaM%2F22wAWrUKAqa%2FBPJ%2Bb&X-Amz-Signature=5027e2cb93932c18a07e57042dac8bef74a929e4f8523a3f540be34096683107&X-Amz-SignedHeaders=host&x-id=GetObject)

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
