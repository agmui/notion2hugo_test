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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6YUNYMR%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDhHV947ujfha4gBtm6WOn8U19YEis%2FROGk45uMVRpGFQIgZz7r0sThV2a65S4ixWNMzr7TIF46i60avTrlGOLg0%2FsqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxlzDkftaCRa4kXJyrcAyCbE2voAiJe1qcDNVWNa9i5YVOJOAI4SkHEjLD75bvk1mooR11YPS7cyaDkJJ9ZF%2BeknTqnzpCcZlePg4RtMmLUMwqmczaBN7t167zaVKVtEiewczIN2bcxXFb%2FSZyBegnHV%2B8gr6IfIh67d3R329fwXMdLl9pWepDRACm6zvywMvqUkwNZ9nA91k%2Fz1DZ7uDe7B2kWwpLLENbZoi%2BwwauWBuPpQnSkITUxTh6CyiJgpaQyCUla7iYemCCNjRlmHFoay6shsMGElrX0qj1nnqqMrYZDzHq4I6Au0iSmOmIzMbQ8BXO0q1hNYzSh7wh9bLd%2BX9Ntetq%2BkDw1HnisMRf%2FGr6I6VzudvuV19b7Efr43tcKRyvUnY%2F81HfvSA1qBe9GZn3mlMUK9Bj2zJXAh2V%2Fp4ceNbfUDwPygs1h5rjayRrbNC2NyBYtFuyoaWn5deUFIWxx5kFapD1V1Te3zzAoGcdztEViivNMzAeMuqRDQLx4jS8jOqjnXqpaKX%2BYq%2BVk56m75hcGYqe0zxnDeMT8L3fn7g6bD%2Btmu4EfyacbiKBe2qF7a3RqLrbHw9qtqh4rccg9lyBd20JYsELnrVLA%2F1XwLMYB1hbOtzhX0fNvu5odlRDN4L1mgtZmMJC3%2FL4GOqUBNhRn7jKe1VhYP0pm%2F9I45Y%2F4M%2BqOhC0n1b1WcCZ5UezmcIYVeMXdEafPPcrIRm7dPJyPlvXC50WmF8WRzhrwdKUsoRoxn%2FGbO6yU6gzm9hEBZe9vLUi0L6ZfT2YJE3W1LsK1lM7AElZb6B87CorKxKDG4Z7i1giIxebDW0qTFWudoUV8GN%2BWrWk8y4J%2Big1q9tHGF%2Bi7JkB5Pf9VgfyLXmKqTM3u&X-Amz-Signature=6f574b861903b9931b4ced3962b7e5d742becb8e475c4152148bcbbd2b976c7f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
