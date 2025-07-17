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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEJQ7ECG%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T150946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIH%2BAsdy9S%2F8Exq0TK3zqCYvgxhqB6HD1z8jXmB9mMOQnAiEAqJbYlR5%2Fp8BBFSynDfikK4%2FZq%2FIbwTAp8q5oEkCXPWYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDABp0pgYiNo8Xts20ircA1x4PRcATDeHj6BS1YWBfY7hhHXimAU3HdEaD1x5WiUjGhwKr7uoK3PMwwrXk6I53%2FKftXwMsspOMnDOhqhL7hD53H4766ToTbG1asshoZwgOIPgXLYYuugFzBJbuyx1V%2Fa2UkFyMdrVd7jmvtw6tNsINGlQcd7M%2FfyiM4qpb3fiQXjvD%2BLRx84tL%2FrCz4wHH2ZxEBE4Le4%2F9i5ULCrvk3tKI6zykwE7ix8KFOF%2Bv6iCoGZSAEPB9g%2FbMiI6vAJZBMu55zja%2BlW5paeDXTS%2BXcCGZLMQ6q18tSuygxasOQQRXqGzAChLazkJwmZgNT28lCSmNFAY13ItaekezgBfVWKoEEf9qTLqXsoIGpCYTS3EMxy7HOiHjCAP6MPpZup40YDsPBrYg1nB0j1mRK5hd4GLWIikU6fYAdlxxPrOCU1y7PpwT0IQS4EqacNhM6R2VCGcxIHUvCkWqR4NvuDlqLabRMP0%2BESSlE9T93aO33Jn%2BWQUyIum2TZK49vsLx5jxwtnTG2%2Fusmil0UNZq7E0ZL3mnGGdKaJaGwyCx3yfRF%2B7gXHCQ2rNs5xaWm0FIPBveG%2FXm3yB0lL4omsGy5ACum51kH7M6lnoXfgInk%2BqIdNlbOX5IXnoTqNVjkzMNWK5MMGOqUBBeOWwepFuWkkHKayeiUmyJzfAcXkD4VcefBpUYxklBlJ4rJ4VPPMRoUulae3FujpDNltypiF5oi34zu6H%2BhjFms9SdIgNmQgecdFMtdZpIC45l76UIHD8Vpz4yM8RplLF0PxHE63oaUIpkaFQkXeau1CwQe%2B9L%2FL%2FTgCmdkYJ1L77YRvEG89AlcZfdGjrxKovpTzN9DRScFrXAzZT9ZIWAOnTVxr&X-Amz-Signature=0e34338349c5c9dd349ed2eddea838ec37b70615060020d90d4092e02f117d69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
