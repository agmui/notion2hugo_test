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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S5HPYW5%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T081022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXY3DAJVmbRHUZR8WV9pWrdPwYbLfC6aAtTMp9TbMZnwIhANIp4RWURVKnQFDiPYPQGtrksQt4eUDfpW%2F0OyvD6e13Kv8DCG8QABoMNjM3NDIzMTgzODA1IgwuWuS%2FjnvxViyxQNAq3APAiJ1WXeydoZGDQ9XffV447d10zktZj05AR1o1tJQAjYrZfXNec%2FYcBb7D41TA0Z5m8dRhT2Xp8yeHNqstiauWo4lriOkSOv5CkaQGImyKoRFHp3%2FrapbUUDsWX6Z6Pe5UghYJl5vy6cApZAUzCkC7sjfJuCkQFTNYIbLveDlSXs2KgKu7aVljXKgqCpxK0oT07yy%2BvBAe3WyKyGgQ533RM1uv%2FJfdAJJqlNfPq7g9rRFKDiVJN%2BiKlM2XxVUTTtNu%2FnOKdKt2H4cCo39IcDIdQq9GX0yhy9bTO44p8x%2F8rnxaMyGbokdz1De3QerFZqYzob94go52V13nrV90LBCfTJN2KUqJtjX3T9qC2XJRtYpNLw6Rsqlv3pwILnJRr3NCBHq%2Bv%2B5wI9aJ9Rjm0AFGvun%2FKoB4p8Q0ODyXzq0Omps2ee2xYIwEP3gGLn0qhI0owhuIdAQCWRRpeHMOefjVZh5LtltlGkA22bDpTZBMC4QrPwXdgxSht0tPCyf64VaZbn6v830dGDW4dj7YhzB0Qyu443tZ7ZxSU2tjpo7VLbbyunIFesqrHERGZtfDaGao7K6CAQGlntyioTeb%2FEFIlAbNX3hjb%2F66ViVQo7IotNO0IuefRjqJUcOatjDIt4%2FCBjqkAXy%2FJ6vS8CAbE%2BjvugowrTQxl5hip6P04J8Rwm1Kzc92qIXHQuYLeqreIblxnUThH21nP4dqbOZVSLn%2BrQEgCiZWgGX2QScvmHsZC3RCoIic8sWlBl%2FWdaF%2FncBTR9Fo%2Bw41IjhOXpqscGl6FYAXJCWx6jfyuf9P5tBzMBoh80hBdtoo%2FyplnxsEk2WsQuZysIe8PJPawmwZVTRBYvsAQkvfGDHn&X-Amz-Signature=31e4c17cc64ea8d229faea75fd3e6681824e5f45e0fa7ccb508dad161d8b0593&X-Amz-SignedHeaders=host&x-id=GetObject)

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
