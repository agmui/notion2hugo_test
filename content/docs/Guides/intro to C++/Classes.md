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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656P6TNV2%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCICZNQb2mhsEdQDg5secf18rJgJu%2Fo39841tsC7HkrQuQAiEAlfZ5RLVFCvIz1M%2BV6i7tUIEzofuC1fGPgjzF7IOIfysq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDLKvxiv6MzpUiStU0ircA%2BjMzyRTQmxZlcB8s4iXvDUXVlepjhEK1a18E9K2tIZem%2BnNjIpcp25aQFXT2vO3bQusZUk74aokEbX58iQj%2BLHA3T%2Bn3sKYLPzA1IB%2BCo%2F0doOCGF4QyZ7l2EruDpTmJOPs80qxaaQbPqRZpAbMC2HCWHdDcFuukUEq%2BOtO002GuZzIleF8%2BLobLvy0l7JVUnUAVadV%2FON9ORtyklCRmbI1WqORnqoGFZ%2BFjrlzKCBeRs%2BbczE8JmLvoOkkGN4sqfpESSEzfVemDF%2B9NKxiLWzThfovbLNX%2BHuO9W6%2BOmbUCfvVpIDjKJeZyAPBR5qDc6V0l0YIwekoH8f36HhggF%2Bt9U7thBS9JXUqsvaKcMP8GGgpqJqQNBq9OSkDJGlvaZYcd3B%2FZizigc9K8KcswJlF0vogx9zLvbCCE%2Bqo%2F8CC1jhHizTogdPT8NOsS%2BbhVOTpkAR%2FKyRWD9tR1ovbIbLPl48gyirFw6pVFoQ80XdPOXkBm8nR4NjmhxNmKzmW%2BeppBAfkynSRa6zLRufTAQNPvb8Alw7uyZDBqvfeFWm76pZUJi8c%2FHFDLTZtnPz2TgMUT4EduRGPT8ThJem7b%2FuqpUW3i%2F7IZi00ISTgJzSHnug4jSlz6TDxr92fMNWM%2BcQGOqUB%2FHl%2BR0fFe51bv6of%2FRHf5Hs638Y2jawZdjzHPVa2sG59xJfqM7G2%2BUBnRMkRc8YIeqvlGs6rpirIJK3MD1k4xoGz3iP2xePpgdt86s3vWOg%2BEVyNkU7hm1LA8Dcm6SyckIFJMf4Nm514Rmjd1TAapLfrqZFhi6%2BNlJBct%2FYOTsGXXEAREW5M2LKdrT%2B%2Fwai6GtVwGWSYVCrOZt8EuuiIxUB6mOqn&X-Amz-Signature=127c97aad7c3c280f38fbcf2417c425513eedfccc350e293d5c50f3ab1a83aa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
