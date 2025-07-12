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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO253G5O%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3IxQeLOn6x0Fmbkpc0ggUSM5L4DYb6voZPDbVGrNnQAiEA0VmpCGZyZrwXuNNNThO41FZqHsKTehRarjvKZEZZwisqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeSE4jzxD%2B1Vr4NTyrcA%2FrtWDHKj%2BOh5NFZRYHpi%2BHn%2B6A5aysfQQUDjrC0s4ew8vRpAbo8rUdhxGHK7L3c8rQhcsxe6vZ%2Bx5QgJtxZOiMPdgcaq3I%2FhpfIxr7Yph4yHdGAQk7hAvqw83%2BT9DkzfIw2LiXHZaBSK75pMLO4i2YIYgKxOZHDmXHWDnFWFBUZIgzRBtLcwZf96YzZY01gn7ew3aOrX4z6iJW%2F6W3DqiOCsRQratFs%2Bi06zceX%2B4QzoAa67T5Bw3Z%2FCBJbxwHwHYBUJ%2BRJ3sjxH5%2F8oUM7OjZIyYWSJOrNp34f5CqlM%2BnxzlTtdHfCAjTUPa2%2B%2FVl9gJcRXOSWGIsifje424rUzH6%2BN1%2F4a8PRwHrJiR89oZhsCsGyJILhmz2bRsYx4fq301LBB%2B0YarvpJxow4RJ4dWUesaQQYnNXoNGkLk%2BNwfuujVAdDujabrERYK%2B6selqnJkYMPxoXHdahHdZN8dC56q9pAlZRMRXnZN%2FR72H8MBY9FY%2BK0veoh4aLwvda2wHoZ9R9YYtTvf5Q4azUoqSY3QNRSbTSz2%2FyFoPEOtQ6RLF1TsYCdXeV3wfjVZv7QCryxyHD8uSUXnVR0u%2BtwYZgYFk%2Fz0a4gaP0BJqe4VGKGrXyxEbqcPVAsyBvc64MIWuy8MGOqUBTmg0YiAqgbwh8CJlEwFZ8NJ85Jw1lHHWB3v9DjkPk7hMOI7wGrGjIkb%2BTjGsT6SMHufy6Fuk2ww3xPjErV3d0OoL3gVLa9nEhhvMr%2BqzCSzkds%2BHCC%2FPlRxtvFoKpSFA%2FYx7jmKs6b0hkkUmGgN5%2BKIRWaAWF%2Br7811QbHVFSk4VXslcepNpp7ydP1jJh7H8tPulwVN%2F%2FPIPfJCE10odjv9BXQQy&X-Amz-Signature=abffc68be5803eeee926fdf00407d98c1ae8963f3a190595c3a0f4583e2400e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
