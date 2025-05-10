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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI2BMZE5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T032926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDx3GnYRul3SuXodMGRWOzm8mnaQAgs9y%2FivfM2qlytOwIhAOkti8giVcU4CqEI9NKYSqPO77Jgq39e3wEDZy%2F1Ht6pKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzjlYBUP1unYYEZpwq3ANlB99qGQVnaB6tWrxX1gKKzou69bi1a6iEx6zpWzWx1YxAbyjCmEkXgK%2F5Ha1MkUJd%2FmxT3Uyh%2BGeYx%2BceLRzK6N0ZNcfSI03nOB5k8RjV%2Ffj4Enh3U%2FNg1q2wfoY0XzJoCcEY1gz53ZtXouP8cmAX9Fbg0IFWoJsbqta7u%2F%2F1zA1kOahzasUkyrLrS61xQ8M5Gaedd2oByAxyNxeS2WM2Bix2Q93K88n3azZO7j00mf2NP27daxS93qw4NiBpBd9cEWzWNDMKaUNNccCGw1R48Zmhn25arF%2BdVZUYgV6vnuTO78OTbzrzWoWZl5Qbzz7NhuolwW%2F0RjMK2Bsf%2FCslln0A%2BOqhLo1EBCjPG8UmOEdBXfk36UmDq5CbGOB9ZMKGoatV%2FDla9%2FysH1Jepk%2FAN2gCkl7a0hL3C3SeC2qwRXfOVYkPPKLbvqMtvCc3fqPd5mG0zMYPWOpCH7k9gLfB5SUAhy1ndOnf9l0sfVQCcYUlcL7cm1leIKQbHJwzVnABW1BvBfvlf3cUpCAfpCFSYL64ujHJisOhLShPw%2B%2BZO6GWcV5EcQ2yXU5k6seTBE3OwuAX1dhtj8t1m%2Bij2Rj7g042Iqij6UN9AlIAhdHgYiZ5ztDytI2jabnSUDDZhvvABjqkAbeFqpJZly5mcJXtpV3evsIf1Y3G5BPxsksA53fFQG%2F8ILA%2FA7eCS5J5EoJff6%2BiS64xJFLIJqC7d2u5wz6KBj9MWWUTqiICe6p5Hukof%2BdWrw76z4i203GYq1QBB1wdhnzxsjBOgTHH%2Fzzm8tVYza7OJ4x%2BhTf05NWQ8AnFp36BwUouy5P1ohceT3yGdnYV1JJmrmdqbHEv2KJMGhMvxG%2BRPJ05&X-Amz-Signature=022b10d82afb954c87aefc7735a4a4855863177c318d8774da86da361590d236&X-Amz-SignedHeaders=host&x-id=GetObject)

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
