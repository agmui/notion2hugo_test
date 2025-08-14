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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZAUCLO2%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAgs1MuCQ7qkq4%2Fe1OEEg9HJwfczKHp909HxF6DTioSAiBfbiH%2Fu39suBrajXrhZou7h5vDo%2BcWojNNk0jm8LHBzir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMqM3eApqeXC3iC6whKtwDUhZJRVy%2BbNooKUFLsNfkQlThm7P09TJVBYi1xjCELVhHCPF28yClBa21KCz76ZNFgSFQ4opqvqYXbZFnyRMrKZlbwjxEkDIC73EYn4WHY90uSJbhf35HZ4Mdgz6PRw%2BCD8tI6WuMz2nW1H7Pas9KqQCCkRsN5O1TIdhYuTcsXs8QZAUbZUws4%2Fo1jjEEFc0tffeZk4clWRiyFaKbEgJAnHBzs7PTKG8x%2Fhum8Ifau2lsggeHjYa11CJb0DDe0RLe52qy0jjNcozCUDHI6gPSMfi9ieBUayOHnhIVK2snriKOX1PPaeAD%2FQ7D8P4sE1ODBmomnsz87%2BEISUPlRskipWsrXYWGpqbXzk2YJtcoPJhB31rFk6v%2FtZQsx1ldHg6OkY2Y3T5wlCtiX4lGa%2BDeB5kqASCOXwdHHJmxyawnsyCIeiHIfGhiV63Df6KMPukHzf87TisYFPXQUDjlleoBEpIjVfPiLNSdqGvv%2B96qTSEt1YMqHPunKc8aHObmsFdzNjZHmQETP3C71kMacIH976OPkZ%2B7bvr02k8rkdsECIsOaSL6zDV66D8sJPVHFdV1B30jTJJ0PlQMYT%2BovPkznRnZ9SezF%2F6ID0Fn4nniqFAlG9E8n6a3%2FerD8E0wzrr1xAY6pgEiGbL3slXImsXK69LO6BtfA%2FSkwHppBxOXgakSe0iF%2BUzb0YrD8MliXW2yPWYZLTIrDvdDglPsYU6D5NraKzDQydMv4u3%2B2K8M2imtUxUqE4AXNMUx4oQUtUL9JquHI05yquWf9eL%2F1hf756BkSsvuZSQ2EdIPmQAdoN5Ebg8oJRVvmKed%2BU5Zq6r0oL2Mn4oxcu%2Fh0frz4vMIDOljaHjiMN4o9Nnm&X-Amz-Signature=8c4f7fe5c7253d67b5f7e7cc2dbd65a53e56b66c1e4255427037cf2e195a50ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
