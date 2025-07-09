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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FNLTBX%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T024415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHM42nf8TcGIBkDdaLwJOeUDPM3T2BeCd3G0OWfcvJhAIhAKm9kk1RJRDT8UflkEhkr29JsgwszVeRDXlyMs3b3zrgKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6nBswFhh1n5Ev0GMq3ANzhBB%2BEmExnuukHUGhqd9PsN%2B8PUQbUIcIoAvoVRUHYdyVj%2BZNR0mi4ZDPS1en%2F93cPrSoAhXd76cuI75uzYxojrLdUilCNv%2FIF6TqSMsl7TY66dfzaj1wEprh73fhp9ojYSix5hqACXKya8Nyq5S%2BBwAhdp1ySzqxqKnewPiw0fanybceiKOQ4aiHGCfksUPIX4A8GTw%2FadWdqBEAKHyJ1ywvTp5UgZamhxhmu4LYqS9AMH36h2D0eqWRZs7LUFcWjiipoZWgWGQb7i7lfRWP8gvxgwnl%2F2CnBKRnn9gFvEEDFSREWsGh0iThwAax5OEh0mRjhKSWIzXJuTRUbExU9D8Ye62xfjQD9dl8lwI8u7D3qOg3jg%2BXFAskS2TJWV2GtGhUwdzZKi2ZDUCN1HaLuRw5znwe8VQMnGnocHbAhbCdbLK2MBRTRV1Wk9qkp38koQe6jUFtgMoLRTM7MdCV39zVr%2FpwLc24LCfIE52K8Y%2B0suEZv1M2BmzTjYrpsNyLnIaUMDgrgt7CkUBnmbvNNblHHtjclUX0rArA%2Fr%2FKO1Ow6l%2B6ycOad%2BUpFApQ3YI4VcUpjdzDE%2FCYrqBbYJdD8X0Qvu8Xn8ydMWYetLTNw5rbMfDzLuKP1Zo4ODDos7bDBjqkAZWrtohdCoyqYwA0O0%2Fc0sQ7d6UyN3IpeCx7mYiYH3SjNU6N37IYumhJDaCUBPA3%2Fw3jY6zqniCTu4U5wPhZ%2F4K8SKwL1oqD9FRgtdrmCWBxHhOVWEBda9%2Ffo461%2B3VCWuAo84g6050nKoIbXdVunUmnQmNMws3J2pccE2DVp60dGUfs3KvF73RhkxqEpNp0gC2LvOly1AMsXdqCNXGi7C4P8TEg&X-Amz-Signature=03d9e6dc8863b357b43e553101d68ed1e2eff41ed8c436199c6f89414a869649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
