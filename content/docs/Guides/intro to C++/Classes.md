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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XFNV3YU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWNYA5r8vCrf%2FDQrLERJrtcL2q%2FfyYG2EYCYGQFfkOrQIgOB4K9l%2F2Xd1%2F86NNAhwQLU5DbcjGsoPxj3P8BWV5YiUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJtkgjhndxv%2F6nkalCrcA16z2Fpj8SUjWoypZcdWNcFyz2pn9dzIVgpNWCPd5PMIh61y%2BkFFATgaIEEWFUqJCnttgRNUthcJdifs40VFSDiUnPNTQ9w7mL10RP8v6tvU9p1WWiQUVluG7rIZYZL99Re1uVjJG5qjRj9uWK3lBUn%2BYJOVsCxF%2FpPwVkTLLFoB6uqQkatnCa6x6MRAwdJB4z2OZoowRrlwofcu%2BuTn3XRdXmhMwfpra5ex%2F%2BrHB0VoLu%2BRvyi2HDe5hf9bpi7aOk08Evp04Bdpv4jNIpirvz6C2vzNquxG98Xqo7%2B2%2BXRLinpyHw9sw9oEU6hrahMcrVKFFZu5ohhxKByY2wlJar%2FyDUG05OyAu7lFjrGa%2FCsPzo4NKRd3C8v2DKgJknEtOJDkEYeuKey%2BzhMfqR39FB1Wnc5y%2F85axTpsVxY3%2FAdK1TlRmmgDVWdTJXsZeN9ctyxgfpsBZv2h7AraNFMVNdOR9q2P9KSvvSJlsFT7yMKf2c9c8AP0U7XtyPSBPQ9zuvB6E93rC0xH4%2FQ%2B5mP3t6aNG058mF7edlZqSE3vcgM7TjIn4VROf3RIFmzDlXGVslwUR6AHPbL5j4dKif7NedonvcIoB%2BVSO3fyryihYk5Gk3JU0%2B3sWAzDO9DHMMu2ssQGOqUBC%2BRELl5W5ZT2E%2BtOzzc1dMxj%2B74rYZLPsVN5s5jZGqoSrnuBTIbDrLOVAPLUsDz8mAuCLPktg8sZqnxuVr3jnwHxWDlMj1TRJ8i%2BEMUyXzgi3sq3BdAS0NHC2SPCEEU5R0NFCO4y%2FYGMNKAgYNc%2B4HQkN9Z7Lwa40ekcNvySLxinOrCpUhiuXv49I6bXk1iOkdasalinZqtJ%2Bxjx%2BRwOkmYYxQ6k&X-Amz-Signature=789603a8ff2ca4957e5fe713adf059c21d76167a417f8ee4cfb008271c2a6e9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
