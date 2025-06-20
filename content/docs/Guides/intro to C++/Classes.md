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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NADAXXX%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmK2Y66Sr3Vxp8oT5XukegBHW7UX8P2JzUx%2FkqFDthdQIgJjwgtpld1Z%2Bkqhdv4%2FCbSDtgy4%2BIhXHVjB9%2B3%2BNKptUqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDqhPFbFmHu0sebcESrcA5xEQxUjkGogoZZtRTzJyyZwAcBaJ1uWyO%2BvscvoKg0%2By1EXh3WLzVWRCSR7zQmBpNLHUaXZHsu%2BnanN1t1rEVRKFIImstSqhST35cTP3YtbuFzg0ZgQgtyi5LYRX9B3UVySdHp0zd0Jch5bgOIUKAlhgdwy73cGKiFA3JEFqG9UM9TTvR8kaV87jzLvS6uokzjzysVKxQfKThRfreQ8O7xZiNQkiXIUPcZiVaXuHtiO%2BY%2F5DQqdkJ4Cs7E8EU3ead0IpCN73WrIV8grkLSdC9Sai2H%2FnzF20RdDl%2FPMS3TSrejUWreCWqflrEgFMhx8QPA%2Fh%2F6TpVxSUrxXO9nAEQ8ooHu6T6N2%2FR7%2Bu6tNZ4HEttXz528c6Kt1K1Bwr5dQs6VXVhlQ%2Bb1OwUNHrlHJEqR7pbE23JBOcQj7zfKKuAOSdFhTvXHiJFSeSImO7eonbFHokIQsnr7TCNl6LIXBly6i7HqW%2BinWkiyPd7VOVSx%2FwQ6O9DpCzNqWzKOkCfQfhfAqpFHhc0PAsrwNHGl21WPNoLXN5rMCW3nHjqh1thWkIZ%2F3NeVzlF4ELXZPYi0jvYvxVsgu2J%2Fa9WfBzurBNxySTScEk4L%2F8z33PIywDYWCh1PktqkzNxV3vyY6MJrx1MIGOqUB5cxWlBtpfYlaRLyBR%2BRut6W%2BaTuH9pH%2F2tX7RuWz1OgIpXsWxO%2BvRL3X3a6BuX5RERcuSZvMLrpq5PhPC%2FtG5SmQc8AjFHKP5dn7Dr8Ydt6PFedin5eWGJfoJTr4INH0384HYvb1oE5ix7W%2Bg2YpZqSizy1jY8wONjAC0DYd1XCT83LKs6UsCbDJoYxA9i34GBT6d4tvoOtmgh%2Bi5Hjark1WfCtO&X-Amz-Signature=d418fb86bb7c21224c8cdd0d2330e4745fc24b754ea17058da5a311cae6d170c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
