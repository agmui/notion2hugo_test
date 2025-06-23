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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4K54KA2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIGxeskBmuJGEltgQ5vqDOI9NChsr8L1KlN7DEZvWslmjAiEApnQ2Dm5MEBgo0lBCjwelXr1jzXVNsdrzQQ6KynnaUIIq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDPrgsu322RtIaFmZxCrcAzeyAFUpvfGbnVMGFJ9N9%2FhcXFIlYCAFCixNYd3QtW%2BI4Kn8%2FZqmF7u81kTlsnizY%2F%2BpY6HXXMRXaOf8rvNhEZn1PcoAZmQzEpNx5p81UOtAoqM1yF1hd8N6JOSmzIay9%2Fz0ztZoMhdd4pUL%2BBVOdzK1aU4PDP18HiL5dfISgGASXD6FM7i7TcNBYXuPeA2S8zeKR5VQ231jpKwgBlp9LKW6fAVDJso6vZPUQ9pQtw2E6eKSJwbeOPDaBJfDFZjieWK59HQS6yIpd6B09ne0hI0Pdc0m0NG18DGg7%2FvToe%2FCcyrhCQNzjL8SUF49t9v%2FIkDFdtlsxq%2FJW4cwiKMCXfpYe6tnSYh9ZnM1ftxJe9v0nfDy%2FA%2Fj%2BKsFLiuKC76BtBi6%2BICquJf0iiGxpOaG7L%2BAnThVrHqTnJsJ%2B2Kny2ola0xkbC6xCC8BJdc3yeN1hmxtYMbMpbKkOAKEGLPmzr8e2Pmds%2BV%2B4g1eiJGEsiywk2B5ixvwgNk4B36rQsV2ajK3DDAutBubv3BzT5JHA1yBe12LlLnYt%2Bvr8eneYgt5kKg0t%2Bez%2Foj0TP21xX95qqOC2pn7vLyh%2FKRmC3DOGtHYWxU9oPEOn4IIC%2BkrwzmACIES0Zckeit0Ot%2FsMIea58IGOqUB3MZW%2B1aH9EKYMMqHbftLXTxvEnu3%2FFv%2BnJEND3luew9jX%2F%2FLcbPHiD7%2Bh57q%2F4kZPp2j16p1j0wK4LK6%2B2ZSmL6u%2F7B8nyK5%2B7af8h%2BZpLHB2WlSeRJ9VRI4pMq2HPb8b%2BnT3tCl0X4OaJMs4C1Y0tssykptmGiUkSCy7xCCLQ2ZeExbMAQDSLsSmqreKfdYzoY3B9qs72uvdVxXR0uRQjfk%2FZ2v&X-Amz-Signature=38b6d4fe4caea47fcc4e649f8b0760a103dd8b00ac1afccdab01870b4d402791&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
