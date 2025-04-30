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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHDBUHLQ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCZ4zXAoNl3ieva39draSpZvX1cExg6nnsrJ6oUKyoOPAIgX9J2Q6FBTiMvgoddEzFjuC3%2Fiezp4y3LAZlYmkFJ8tQqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIKcUKwNuUv1E3glYCrcAxu33FKmE8vMJulEmU35AvpW0tXDV%2FY9wFCOJmwHDAjjkZ7nTw1rHEz4NzLaLFCVijaApp2%2Bmc%2BbIWR1NqmdsE4aJTel%2B3sFth6B9mkKecT5nYUxJ8TaKIxqA%2F9LWaOs%2Fxv4dh9G280X0cI2%2F2iFlVRMcZbxOA4zT%2FkXtgOvExstzX3gHEx7WvUtbQDpyWd0%2FLvZmASTLxb36JLl8GU1MOIGyvMnNQI%2Fev2lZhEsrA8oc1AMas6nR3XTAp7RTCk%2FAjn6FDsQVpDiBockDV7rv6ieAKsSQP5x78LdXNwKVGkzVdGmFt8%2BUInRfsvzu%2BldTPrDDRPhDrS27FInvBZ3frrqMIIGmYrUkd9vjFKeRTPG8a7L8d30n%2F0qFtfeCuAjDr%2FzPNoiB2EXuNYvn97KZhZCNj0Bo%2FxSRXfsZ62TQWBnTpj72CK4GHRfp%2BR3Z1S4gqBMpEH2tgxRntSZbPoaw%2BYFXGZ23MjnTN9muXEBY2DXCzEJ5HPEVK5vIF3NAakCTNV0NOg2bzSwMboLl0lk6r7CmjOmIiFz6ogjOYs2oKcWSAabH57Jvs5rgzkBLvVg2oRxUifXw5fQVeZ4%2B4e53p6i7WPgnojVW8i7sSWMZTaATzY%2BtGERjKZHV8PiMNXTycAGOqUBO3YVAvg67vo2Fl%2BY8vkGBqNU0AAj68kE0frSPnXTiBvRB%2B6AxLPzCY2Jua8QqMUWs31rsmAJwHBF5%2Fcw%2BPzqw2pYT7Ee3fYHpr03219TxZXKy55l6lmwc%2F9oZXGUcc7Mv1av%2Bduo32%2FGZWYoiSY2RM7PSM1d0HfZvhakQoAEzCTc1qy7vIIwlSYqy%2BjCahgwGih8OVlTvpsWcwMecLiVJMzy2PVv&X-Amz-Signature=24d1739aabddf7295a75e68fa6701742bd1c9c1ad2eb8a7ee3bc8386a16740cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
