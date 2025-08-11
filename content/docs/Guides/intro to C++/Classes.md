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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6SDHNAZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8YPlqw6FXXjQdmcfs%2F0YT9T1d6tLO8qwoawUAOpQUNAiBB6bNLrejujM66KO0QngTliUrCCOREPNYEjgfn4VqCmSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6aCdYJtRvv9O9DR8KtwD63K9OuF7l20x3sFkdhR6WOYJtq5W14MOoFMbiRwZBMTVJl1Fn2zSSw7vNi6myIocbQSzlGXcSYCY7VI3%2FngLG34YdRysO5GBlGyH7guoVMYb%2FyrrOETEAGXmYXfjSkz7hYLOKD8h4sexQdC2mcpiiAG7yerl5iRpZh4nG18%2FuPDQThTVrAVLSn%2Bnh67JCLQrYvUvRm2%2BSMGandfpVhn6REg5KOJVSDLWtx05oXju7wC0aFnkErGrlIIEeUcXdlCcbzvLNmyUcsIkub76GWRU5FjZrZ1PKaGR%2FO%2BMiWVyhCNqDlZAV7cvLiR07eyzrYjoBWCHaNqk1hk7IbDx2Pf4cGdSu9f1LkQ05qPZB52knI5tdKWbVrAYNtoa%2BZBsaQ7G0fcN6gXHqpVaOp89CMifoX6kHTqFA0h3fo2am1sGecQOHMVhu9L4FiRBOjOqoHh27mbvPqQ87Taq0736AJpdMxp3XmJhjv3DJwBvVQ36AOzq9KKrg4SN5jeCCwz3JNzTvT12uKpwgDfIzXEe7dIlqCXb0Ug%2Bd3Q%2F%2BpjnH8qA2SUjZuoyBLqm%2BVxKWRYPWmnZpyCFvSqQmSDG71znsBWA0sYG5t7yKAK9pO3KFTtYLvn1uQitaAr21aNdLYYw9%2FfmxAY6pgGvNW%2FmvSn5VgkTpOVzVkjMb%2BJej7BM7%2BMY2%2BImKmaRsbiFmv%2FouyLjlkaMnbzKXMt3ja8NIJKbQqofPeLmc%2Fl1UqVtoUftJHwzxeIjth9JWzMUBBWtFpYP8LKYjr42iO4IckcrZ1OZMzC7YCJjeTmuft%2F6arkjsiAxwXbsablk%2FKbzt90AiYgI7sfH1zNR1HpnsK13dv%2Bq4fgY2EoznIX4qT8SQY2I&X-Amz-Signature=beca0f95cd849a9c6027b9f49b26745df532288cb1d4f5b889c52d136bd25b65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
