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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2GOMV5R%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCefzsSzM4JMQ%2BmHArZJHAzMqf%2FS3IxEcRfE9m6UmLPQwIhALQkIzIx7L7wrmr%2Fg7ktRhawR0hXb6sv0UHhXTXqfgWrKv8DCHsQABoMNjM3NDIzMTgzODA1IgwnUvUCMojLXNtCJrsq3AN46brVTKs5Qtxl7CGXb98Fl1qbQYXfcPvSgqkTEB0shdY%2BejJMij0HLqnfv%2FEGHlvHGc75lPZSReWIuBmzhykUzHmfyrKCWsbhCEdQD58tuSUZlS%2BdmZyB83zgCjt1sFLxFrPzIJ198voyzy4FAaS5R3DQOsqvGKzJkmRU4WRJitnm2o41H40DmThdgWM6tsMS9NskMn7IL6kP4olH82nga7arjCB6DyaLivo8BYUrJbd49EgKHeVG%2FryrB4wC%2BZWyH7ZRA0IqKl%2FMB%2BBDxEZlITjon%2BtHAOfwLWkPjW8%2FenAdPOYaDbhlRK9sH%2BAmSRqaoa%2BUJwawN27IaAA2X3eyGD9yj5ZED92iFhXwuwA5mn2VqiSDoK0k0q2QUtyTgO1g684ypmwhIkhp4UDoGphqSKrYbBF%2F2nfeLCDEHJPe4Z4dKrdTGAX0U5f32Jq3Xsc2ZhPKcD9lTBrTCpbzMF%2BKQA0HSX8LFnALAij67fzCWH5a6fFL%2FK9WsAJTgBs3g8%2BUip18vrlCU1G8SflJE6trw%2FCXk%2FXtlt6GL4%2FFju4JeCsmzG72XTwe3JCeHEZr2DJMlg8OEMdzTYUCXA0t0vizDvkWBmowyrXPnN9WOx%2BofhpqvmpnmfLkLlXyAzD%2F38bCBjqkAQqnQqvryqYJt7vbSUXt9SQ6yl3PML3aRRqqLKGn4KlDv586kmTAoeRyNnyfq2Jm9lzxSpWjXBjSCt8tzd3nYXB4Ntnhg1zLVLrqpf14W2Cn2YwGP0j0YMq30LXCmPgLH7w1rLNDpBuIiD6hBwXM6YHL2sFffhwrf0OYdjXF2e1kyKm3nPcYSLQpyAjhZfvkmHOhxrVegg5jCZNRMvlFzUVFDda9&X-Amz-Signature=c0b94ece242fcbf063cfb12f84f6e8132fefb7239d4e559cd35f95424f99da07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
