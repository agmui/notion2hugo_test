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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T63F32YW%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCyIVQ5mkaHxl%2BAJ7pEaXX2ds4LuQSJI2mhIXrbFojisAIhAMbbzwF5rmTp0hstRTEWU4nAnK40spN%2B2vFeOq8f7mU7KogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9L%2B44IkzIW5zqYDsq3AN0izE7Tmoocb0XeO0mFPD6laAg%2Fpz9gruDtoktxopG6HWQCz%2F2x4A4MjXr%2BF9fBLNyjJ88uGf114eaqr1n0iTF2gglcyUxWT%2Fe6lTE8SWgg7qTn3qGdXpmI%2BJWn8mowzMO0a3THXmq1ZkaF2h3RFubyjZ5vvWYaWhYn6Rnf85SUSkA2BMPui7rO3q5BHP%2BqMKyuYHdpgMUAEIHmO5zDJUvZz3OxB0ccIHpnlLKld0mo5delZavcMwTNwdR7g4O%2FkBYz67LVpDhAB93KrqcC9S62ZrWoqjDAsbex%2F0e8Sau62nTkIbVzUENQD68Ik84hp4CL45c3ddKQd834aVMnjMYiw55OOLm5p2ilmOHedKA0qOm0WDcudPuSZUUP7R%2FObtSbHQtbW0EWtgp96yCQsZbiWfaBOI%2FmGviMsyqcCxgS%2B38Oe%2Bv6ac7jzdj6kRu%2BNpDQN%2B1KXcfqRpWTM1JhtsbGmMovIA8bdKRD4vkiBEDlzuGckehHVp39GTaUc79SGSFo2t3X%2B2hN6NBGct%2Fse9qc9gxZNpqSjPUe6hpBK%2FPNSf7qBXNxdNXeOrSmNHn3ThwLOYmsUqFswpfewSKMRcXJ7lerqauLLgD21Lvi2ZNji7mxcPbWzGT9RF%2B1DDwhIXBBjqkAZyEwHcx3G%2Fk%2Fbpb93ueeVyFSjsZTEe%2BB4jTbNzl73mQ%2BAsep8gn%2BPENPGctxfi1gz%2BkOFHtG%2Bz5jnavW%2BYuNiekIWsaGozhRk2TikpPkMriiErZBi2zaeneDvrsGq3Ga3lqnSA1LYronNbhcsf%2FNcYaqzYPjM%2FJUcv1vk6SKaqV7obnTSqJhYyK%2BNWeRnNGE9jLBioy%2BiLFwAgZhja3SZQDzzDq&X-Amz-Signature=4003fb657a94a6e914baf2f0acbc96c5a5b927096c8c45a7175b37fbbef1778a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
