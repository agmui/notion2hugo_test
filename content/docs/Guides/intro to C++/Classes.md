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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQENZZSC%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChlBfTRoZau4%2FCplcs29Q2TnTijvb7EtztPqhsigHEqQIgPNmtYotZkzkMHJbzgDy%2FDRFQAaEGLpvYQovEq%2FL%2F9mYq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDHmatTTl%2BmDQ%2Fs5WiSrcA0YaLG3no4J0ks5DJRYXbSpwoWhuBbKKU6Yohop8dhJvEbom1VX44rqaqaBDqPG5cNwTit6K8%2FS0egFSHIhciTjxNoSSCSo4ckdj9gJe0fdjcxdb3DzeWZpWU7DCqsKhgpt1JgAUo051FCEea7srtjMCnh9p4C2m8kwg0YVqtt7xvK32hx7y%2BvEFpKWh%2FTBemQ%2Br2pdEdKFBTO5YAcX6WPUFneSaXJYgXruM0Kzp9%2BeskDQEPkZUfUsoz%2BitRjr8SCPZfI7huo3cpIIt85pBZUQMrSthcpG5JHDm3JJpGaRpHgAQajdyl1ZpNgXt3Kl9KmmulfHu1tHXxFsUBE56KMbhdo9FDe%2B57%2F3kQYeACDKn%2BWLW9VraNN0WNHpoerXKbzd5Spgw%2Fp8geyIZtO2S4QZUIO3WeB5SOqIX2egVczezmRf5sFqa1LIGSbKauQM%2Boiua55eKyE6sJu%2B7tKTpZFym0bn3nQzxliU4%2BOQbFYelg7WEWtOKGkxieApfm6f8k%2B8JjhBhk5akDns8BXaUF3g1y5fEIA6jItFCKITTtzizIPIHGkrqQIYb40yo5Nhqbsl3yqdEfs3JG0VRbm7nTmK24WTOZnKWfENfBFVn%2BSlPEgEQdL1xT15xa%2BapMJfNv78GOqUBc7gY%2F8gqezYrjlnpRVsiblSl9xHy4c6v8%2F3VRy%2BiSVD6oARUINURmyZXUNis6L4jMxp1jKGYrENkxd99Mkanyv5xVSQIXa8qhhs3P%2BFQFpOrFzHe43FnzRtEyiO7kTV4MlMw55D5ST9VWBdAiSGETMtPfNriVNcix5vnboi%2F5berJjCv87D0Ez03bvQNshHLCgmu5H8%2BdeIrbku3kvVcPIHpsshe&X-Amz-Signature=929d416536645657d5018720f0ba397b8334bc07fa3c2b69d4a253691dbfb6f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
