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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SZSYECU%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIA3HlFBmutoZjhBlpq9FKknQ28rf7TgQX%2Fm3%2FByT8lE0AiAbK7LbFErPfPLh8%2BrfMJXJeqerbh%2FebPuk5u91L8GvZSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpHNqyhc9QDcsAZiLKtwDK4c190nzzlXzzCn2DOwHdm3Fm61ARaB2JcPIx%2BXQIY4WKCX%2FKFM88apoPLGGlD1iiFbCnnqAmk6e943Yr8z5U9JTPvRKjUecutfQsABI8FtVwdjhFRPUA2jcJNM9Y6R1mmM4p39WT%2F8wwMhWiQPO5rOC3Ix1dzI%2FSKU4fWartwjqE0NaQcuVUgvOhYtwAf3FcGKu4yHUa4q7%2BlqyqEvHcpSOuz745QUuEKtWu1UwsytGXbfDE%2FP1NVicq8BQs7%2BoNUO%2BFuhJJlCL4MlPekiLLztr4cvv%2BeH8fe9qt7mNx8naOP4GVD3EUG2JvYaYMQzcS17FqSpSqGv9W1TrxnPOcAaUiwd3L0i3WE1QPx%2B1zDprpipcISvWU1v%2FMnAnDGY%2B1C92aEdYEOdrXtkXlaYTnGDedCG3IGkgrh3bcWbqoRVIjVyJAKJ5RhqKwqDYv4CI2DvQeSIWNsAgzBfh1rkQv%2FDtWZgCA8HVYQPu%2BGsS%2FSL02YT5P%2FrBATvUVDN8Sp7Qc%2FJs4EmKY%2BDMq3iFklZMkG2Plpbnb7r9IPFYv3x5hzTmAdVkq8qKJ0GP7nt0D7UTk4NOiyuddNIQ8EIyihJAUZMkTybdApzJ5jSQLL5Q1CMkHKdA%2BpIUZvjdI2Ew0MWA0wY6pgG%2B98f3pBMuB9xn8O%2Bj57Kj26rsY1686lnHJ0Od42KE2NUlIU8N4k59XGxgoWumsatbKUl2Cn%2BXWWfKuaThnL0%2BDaR66qcQZvlMu7Ju0kSUdWLue7A7CLJ%2B3xwjA84FOpJQ4InnbG0541Cra46Ahv6Di4MiKKpg4XsMlswD0YKeSLQLZ%2BF5kjb4ebMfoyMukmz%2Fxj3I6yfMbVxw1UVQgWtRAdKrIKSk&X-Amz-Signature=1cbf912116ea045f42f538aa28bb8abc6dd20c55fdaef52812f04a6354e5ff5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
