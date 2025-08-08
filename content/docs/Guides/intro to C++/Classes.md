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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657FCXPWB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCQlUA%2FH6W%2FrqJz5RKs8M04Ydz17Z4nl06jYpYpHBsLlwIhAPjY43kqeL3fveqwjCEeopuPGya6wjybhk1ILZAapH7rKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzdv8Fkk7VAExZwW2Mq3AMD0xbrIdWuLK5XbkVzeWrsMr0mL9MIGJ8II9oeHNuBere3f7LHF80GjioEqg1n5D0Mohxw9M1MosxXsrlGJdUlUqFbgVvNhkukgx4JVrLZ850E%2BRJ1dKFpl%2B3u28BvvvzNPBsJ7Y%2FBA7t5gg2k1N0%2FPgBgyBICUUpodURMUQRTI1QJ4jzdhc0UBA%2BYFEbv2fww4sMPntq357SHV98AVW1dnViJFUNWYMg7hcxs8SY8L2O3rmpUVnMRv%2B9zXPK1OfTepoNfCMntROQNP9CD4NS6eua9YYkWp0L116t0Zux%2FYkNNOtdpH9yT8DqeAINvwLv8WoYMP0SrXTD7Rc46HqyV1801fmuB%2Bex4JncVk%2B7j5Mj486Z57kvYPgyfOz2f6EDurzlgduxePcrHRc8iRYfwOB9r2NGb9Sgk5hf0gK7qG%2F8Wkft8DhbjhVbfcJMrNkN%2Br%2Bx77XyS8w5wsWGuHVUr36jk1tQ2JAy3JXXZAoVkfbBAujyRuuhAVLIJ4GYHWRRGXabOnk8S4SGLISORXr9tWZzEohn0h7znhe525Hv5MHQmSwCBjpjX7%2FcEsLfzEJuCL4%2Be1r4Cob%2BmnTJZ49YGAV7w5vciina8hJIANH6FiyzmfkULXvVnj2vaXDDY4NnEBjqkAdvqu1IEuTc6Cuuy9U21fUAlBCZuvQvSVjiAAi5EH9CXURH19WIEWIKwlD2WR%2F7dm2zzTI7CdADYbXsZNNy7OKefgk38gBPdQ%2Fa%2Bpg37A7Sergs9%2B6Ph%2F%2FCYFnlIn8pXkPgHCB5oB6C2uXXBWBNetDR%2BsrV%2Fd3F51LOtxkNkXpYSWby63lwZeshZGrvroMx7MKIGDkAxCupFk8z5T1JtsSoy3hoF&X-Amz-Signature=fccb7f4fca8965396bc9a91efc42488290677a81394f19b7e0b0c220f6a759f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
