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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK7IAYC4%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTnIGX8%2FuecAXPv38ojvXBQZd3iGufMvMHMqUSIfi%2BgwIhAK9o%2Fj466T%2F2ak6xMh9VqjGozMQyjXG95l0HLlic%2FaVAKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcW5eJrVc8Tt1uXawq3APXFQ0YaHb5a7IjPSRMVKc7%2FTkaLw7bQjhjgYlfjcNun%2Bx6qCc7dlX7VypUaqYiYSOW%2F%2FSQKrnWrw0E22Mx61pHzD4VMdJYwxW%2Fd2PzUkUSjY0%2B88DTmYKavpqzto9NGZSwHVJSR%2FfeHIgESZH1CdmxMyi4Q%2BfBxLeohA5P1sHjCbGEx82%2BebuT8aXLroytrAjKJppe2iVfDh8BscD629i6mTUZBadSdaVwlBYYPl%2FNiqhC5pAnIQxoCqsDIhK%2FxZoqMSWiekqsQlJsmGK%2BQ8Hr4jqdQsZP23Luygf3yCfaWX9jgZkC274elb5ittjjVQR9Ss9bbBl33chYHuHpoXK6U0jcyzmzK1l6MnpU8hmoWHnKl3sjQNHWOph7%2FYE7k5WtQYPRkn74SBSEEGcu1ZqosjcudmWDQz7wfDrzLZWbbtmiY2ibxTt50xULLT5AqlReqikGZJLVQE%2FfoQqHT6M%2FiCz9EtMUi5lZOOlzmi3rKZpqYnM8M3nOSK%2BQE3m6meTFwWBE5XplN%2FcD0fRytPruFPHb66DXoahYo0ZREut0d7lo0p%2F7%2FbpHgre%2Fb00EpPlo8mQtYUyfK0voSnDRHgVNIoCUGZcKGo5p%2F2JWv1LfIQ6hpc338%2FVX0wnexDCDs6LCBjqkAYrjMDcv700iemD88geT45RVGqM9Ikq4IdJNcQpBf12U1QKxM2xOYrsCVk4xXsASdxd%2FeZ%2BufgKdU%2Bevwo2NI0%2FzTITnLsTsEjTqkmMZBw4J1AKRXjP%2FA3VM0u%2FV%2BbpweNA4%2BPBvhPGc%2FbAeeereVHeS4KScx0NeChb1FLRf%2F1SzxaYeExUcJHxZkp5Zfl0B1l3wXiEDicEa6mygBXQ2Qib6Rg3f&X-Amz-Signature=fafbef3b77958ff79b0e9a1b06a73aeacaa7bdc6d7f7b869875b8181343e7b47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
