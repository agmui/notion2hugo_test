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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXGRRR7D%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJ3L0gh8g5hzCMUkRZbfVUdO5hhHX70sowlv%2FVVoaa0AiB%2FIcWy%2F9W9EC3%2Bg5kFc6YwKorOZuLLjw2sSUDvrPcdiCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAv81He5PAh1S4z03KtwDAkm6hlj3xQQ8HNV04rnVlkVvesXWWp6TT0uq7TsbZ8%2FiQW9CDrdiC5bC5Flz4X3rLlxWTYf2G9gt15zVqqFFGwts9R0x1Apaq6s0L2jqrV3KdlVclv5Vws4Ffz0fs8Qdc1GgIkJXV6E%2F3jDtpSxdRg0dpx1T54Z6MFM88WUdLZ2f1GVZNkHUwhM5%2FOIXQoayAi58RsR40%2BuE24bhG9Fk9gT%2BPF6tG3f66OlkpWEXqBzgctoVwZ%2BHHHOwJjs3gwxWj3KpgkI0Y4EPv31O3%2Bt9XYsbaIu5%2B%2FXxuH5To%2BZiPuFP88%2BmbFBRgihESFyrYxmAEj%2FNYXT9qOSNl%2B3q5ejK0BAKAh%2BvVrmrXz6wXinfw9B5iHt7YYCoalB%2F02RcUoRvqCG8AGRvI7LN%2B9DFbCJWl%2BVcbjPHSzhQ4YAhL8kEx5kePHEEQ0MybmqW5F%2B9N%2Bj8i%2Be6fCqVc5vw82%2FvlijHQbkQQmrITIFpZVkwVWEmHztR0QVHj08oC4%2BnUj70jiWEM5PDuRFk8yKgNFWYNX767Mv7YxSwMaEKiHT6eZUWOBLdYxQG%2BlWtXDWyb7ssm3opRmkZ18AkI%2FxhjJTLxEShitQyqRlSTsZkaJ798AVbpl3wWYImBh4jTss%2FazEwqOT1wAY6pgHU6q7KurEhonGvpKeMDu9WpL%2B9jCM11RN%2BWs4xqK4HP0jBtoBPTIqSvoTzg%2FtiDvYwqQa4H3xkSxuuFGcxBq1K195myRUn5v6lJ95bNeTqsFMJGwi9YtCcrHad7rJGVN6am7CJO37j%2BqfyNzb1q3TumzoCFT5JDJrgxuDnJpR0zZ%2B212gGA%2FCGY9WVRCf6Qp0GqCPR4TlSao5FFjO1aHdWrdYe4rdw&X-Amz-Signature=a11ce93f5659f0a0152007c558e7a8851ba93ed662abf4e7fb516ab9d8e8f1d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
