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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE65CYZL%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDZz6QpGvyPiHzIG5AhyUg03I4hw9D0NBZWIrPk%2FjZypAIhAMdZdPUKuLnFofb%2FHC4qPjA8Qznmnwe6cyR%2FgQ4NtE5HKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRHeujJO13wTsrcUYq3AN2nLQyZwHPGYjS2lnShGqqVWgdNYGDMT3JpNx47MDXIF1LYvPYctljiaPgjm8vqPHpz64BZC4x16rvsm5noHcbo5CMX0pLVpcqRBJCYS4DaI4U6mfjhuZ%2BHEjkOgqCVvWI1z8LPnkvvkvo9pBjDfoaTAo1uRM0v6cruwIcFRvLytuzeEYoiER0hxzP6iE1Y8UW9m2Y9%2FWVlt0a5Q6X9zDeGWuyMkjkUmYcM4fZfCOrrfKJrzDNaxgTSFHqK3AeHlzYXFdYda090n2okSBKlrFnpjxEDNlIl434nwE%2Bbd1ve8k5rcwGfVUXceg7%2BNdEXo5O9fpFt7CPkrtQxyb2KGWlcyx2fxx1CUGrbJT%2BkEQIVkmFrWS2500%2BbPe217ZbtxZXvr6lJKi0Wr3N69bJ7CaeHQ4%2FDXMdehJ1m5sebGf%2BooLCnincsRxXGMEn486G13ZiIHEN%2FLzjBKp0UeUciCiDAaFxtHmy2UgVDBj6Sfv9AjS6mewt51IOdJ%2B3OAeqYQpt2OphPEkrjk1OtRHGk1k%2BWQnYAjVil2ggbt3muscQ13iBCakRQl9eEJ7D8x9%2BNTm6uLZykaT5nEYCJJnwPbQNUoaqGL354YAI5uPUOLMmkC7iG6St0NjRuPZouDCctJu9BjqkAVc67TEBv2FXIG%2BHowtsEfeprzfZErLDKAls%2FwVkeROhEiVx7dPTnTjb%2FOQQKfZy3ZAUSzWfyo0ApeK1a1LV6futFBZgeGQHnE9962kOtzEEJkHUPKmsF1h6peEMA3qbwzJ8hQ7e7A%2BlfYT7DQc%2F7ny1bmXRR6BuX9ZgwTq91CGAXxrUM2ELDWn%2BV5f4rD%2BTjIXmOw0gPTeg%2F9qmLG5Oz%2B98NIjQ&X-Amz-Signature=1824bda7b608b8669e2b63ab82a65b1f7a7594d99a1b7fc374bf22d63663a27c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
