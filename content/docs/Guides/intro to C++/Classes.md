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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7D4SQTJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T070957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDJ2pcDfmiq0l%2F%2FaqkFP01W%2F4NSGs1iLYoZK4MJOS0uZAIhAII%2BTXi2dta%2B%2F2KmiFTC%2FKvfd8XitKxok2gufOMhDps1Kv8DCG0QABoMNjM3NDIzMTgzODA1Igw%2BSoVB7oXm%2FDj%2FBMEq3APXDGPRMubLcRQWzXXfopw2TFWP5xVgbfCnL%2BcFfuA9DjcdRLSnAuWVCEH8mHNQnSxdg58Z0SYPWI8mVYd5g%2F4TK%2BEhjNUDAIt9V7nDILGAsSCErOBX3gi3tpXfGpuX%2Bq8khZqceDt63gpQ6lFDrchcKv0cRXlKV8Qre%2FQ7OQ6QKWQIjCg%2BZEPzOuU0JcOJy%2Fd9wxOfrvOIVxYqnH7InfoiVvGPND9%2F3%2F8ttTU0pl6F6IHjvJR1HWnSBassHo3UQnw8Wwtc%2BPn%2BV8QMetV5bK8mvtn6a1t%2FtXtZXLcY%2F7iOV84RYm1zLcO8u%2BRt47bMhLzCF6jEiVVwv5imidHo0d9Tg3k6etMyIo4jjMtpbxGPR0hRREtkcX6IV459U9vZ%2FPjsajYCQNbxBs4HZmcSRkqN57pKkIsCaDVOOTpUC8%2Bg2LlS8cnxSnDBqvFLyWtowTmpDIrJiGef1URSur%2FYDmkmyHNguvqTNjOD5fZPhRwMJK6F3iI9IjISaS3EDQ4tPz8Y3KXKYYPmvfe%2Bkp8coNRmzhE9jwevNOQCqaRW4eECYNuR7A4D1fMmlop7XToGqc4kMn2xyGlXZe6fhfJy7KxRXHU4rLGDO7d5Lyeyi%2B%2FQzrjT%2BPWWdg5YT1jJtzCvu5bEBjqkATqlKg%2Ff3CJcxMKU88zU8HD%2FK8zUP9%2B5%2FTCEyUV6djUwszxRtyqYHazD0TTIGFTyWMVuh389GgNYB2QxpLkmgLdKCnxAOqGi29GFdYk3%2BHD2oJcCdGXX3Ylk3jLmFyn9AReIWvu4LCJSw0EAz%2B4rVrGs9r4psL%2BjtAV5iQgSeGp6E6BtNwZSdC4%2F3eKfYgipOHvupJALz06wEhx7vHAs7U7uLElb&X-Amz-Signature=e80d9b1005c70065dcbf7a48fb25bca01434c17bf7c38a1c52f4da1ae61988fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
