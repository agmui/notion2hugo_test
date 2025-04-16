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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4KONHOP%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPem3VUkmDsq7qah1hsocw9Q2RUTlkD%2BLdD3mCCRE02AiEAxEyTGWtsa0%2BbGFPVQ65GBAOS%2FW15f%2FdbHkK8mI%2BSpRIq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDHlmqKT%2FsuEseDNavSrcA8AcrF3j8oD8l%2BbjSGL6DrTuemadEe%2FGuVwhjighF4hBdrfzIf4PpYyDB6vcnSglvsbRnAPWDHZJWCrBaYI0hW7%2BA1a9AXzDX3konJXwa9cQT8sGzMEmJdgdV51mvV2x5w8C6QKPKAEo1ToT%2Byh7JgTqh6qoHeVT6ImUNF1vJWZbZ8KKI8L1IYMFlQ0H9jxsskmHHGt7e2amAx%2Fqp4Vyp26PaE7VcN9Xsu2IlY1j6sVqBt%2F6Y3Hh0MDoD2qzZ5%2F6%2Bg94eipeL0zO5R0J98XeaI1lLZDe8TaKXAj%2FWyGPwfut7psI3Tlgw1%2Bt%2FlMUcLZEp1VvW1ckk0JKsjIScahw3jasdXvfGvH55A7NfgbYGUpikdkBaZRfPwVy%2FroFHwa7%2FaWDprLmfiH7uZxm8TMjI%2FvQ0cimx3thBqfg8G655%2BI6fDgycZvPJAKLFCnhCL5CTOFpk4qWw6qr6P6bMuH%2BLVzYodY5WXWNzDfR3tVtG7A7B7cNXWjy18rbZ9WLoyEdSF3iKY%2FM01SUzQhK%2BCBZPi8%2FB5yrw6GBPP2cmFv9qcJFYkn7%2BpjVdv%2BOGIRahu%2FIponIEXb7Z6zYNZvoQoVYd3EoVrjJkB%2FoayW4ddurc4ySONgYT3SfYYwdAvctMPiq%2F78GOqUB7hbMcxFs7bSXibHbfkJI3sT%2FsskneLMKg%2BrU%2Fn7hCoULF2IzbrW9JWq9UKfUZ%2FED5xsshpHs0Qrh283LrHEQxZbDIKh2A6acx6oEtCtTGqGOfkJC8%2F7sdeRAlxuPiSpdhqBNkGPyGzvu6%2FtmtWN4hevpUosrmhuPHu8L1plIlxpfNxhXQhmrBaj1rZWN7fic8LNVAxxPrLhNkuz8zEN6KwROhYFP&X-Amz-Signature=d9f72e62cce24ebf21c0d091ddb4f4f761d291c3bd2d6dfa0f57e9302e145049&X-Amz-SignedHeaders=host&x-id=GetObject)

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
