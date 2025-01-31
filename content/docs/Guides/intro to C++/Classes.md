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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C4RSIB5%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T210201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJGB8lV7r7MH44V27vtKLRUwBboezvVqKYlm844RGQYAiAMXRBoo%2BVDJEQN3jdbkKjFHefuBmwVh5d6MiMASwCmayqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrL8F%2BJ%2F78zlIkU3hKtwDtM0o3wPMa5YhemjdIr2UvaAiNmwnSNT1S3%2FFnFd4s4zNlDaieWnm4TIj3k00FZLwZnm2cLaqkX%2F3xLJ25tVWqZWk3T%2BxZUnUsd0yQ%2FVFZdvsr5yE8%2F45fBVw1bq9YxVzJ4idOBsilVeqj2Rt1%2Btz%2B77FLcSlrBQEewHcjqr0yrWV7b7G%2FPT22UKfqlDhkkI5sOYq6xkEGZnLQEap%2Bo5cDJLG6sDmoDcJTl3KgYbKQpKixX3N23wIOCzJUFQZhkucvDa3u0ybQeIAUYbHmy7suDAGPXARU13jnieZVtSrR3sMHpcRLMUMaYvMXusTx4A35JaK%2BO7oJgnn22%2FFawZCpZeDWPRNy2GVD%2BGt89BSnENvEBhWL%2B5tIz2c8gOf2H98rU3jGYR9uEzSDVmwazbDV6C0yNS7X77JQA0PNlwixilmNt4AyAvtyaKGhaBFk25BZZe4AAs9Ni0oSRiIEV4DUUiQqMZTyN1OOHDSGfvCPiThjZgPP%2BsFirLMa8b%2BqolsrVv9vIPPvP%2BEWGMjt1FwpmEyaKsZ5%2FVcyJZQW%2BOt7CqO91q7qA27v2jrv6JX6c6SL8I9X429%2FW6rsZ%2BDHqvF9P9nbIThf59TOZhtclJuZSJsXQJJzR0Q2CUqen0w%2B9z0vAY6pgFom3Ga0f3Gc57k4hxnBWYsxxR3MeS%2BJu1YxVKKOyweHatw1g1FjwXglsXiHj2DSAGw2wSBW2BLtw9Cuvo8m6yAcQ8KqADeiRPFYn0PGzWeAdBn8xdB3gWACPhArpFhBTI1W88kwC8F5V%2B3yzRkR7KohF1kpH14dnhZB0YiEgqF19rYckhAIJWyJLP0jcof69LwHe6DJuwH9u2E%2B0mEnpEeocjo3Q4c&X-Amz-Signature=18353f66f0a5ea80d3921f37196a234200014e57a56bf43c0c0e448813bb65bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
