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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHCX76IH%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTBmAai2gEU%2F0VO33YbtWOjlsSDRMQ8vT7wOOCFyyN7AIhAMERqhPW%2FAAkOyPHEocmhnONru4KFwV4pHFzfZD2dHSoKv8DCHsQABoMNjM3NDIzMTgzODA1IgwFBJSJ1sNlcu%2FkpZQq3AMgajE1y3l12mr%2FqexiQmly4FpPyARhlQnQrehBGoq0m8W%2FKTgZvwenR1%2Fj8L7vx3q3jijGO39EnxEVwNGT0UfrqpKX9oi0Rx9jqAFHWWuasPao8F5IDP7YTKmq5hoZui7C1Iiw7x2Fb4A0QtlxFnNJ8QBSmGijeMC27VxKJMXsraEJ4gts54mX6e7v1ovqfePUe5PzAfFD8s0vrqtJWPHcsAz7%2Badm9hSa%2F%2FO2RYAg4iMLj3Y7dneT3Qh6xpyU4tf1yYuEriOyEsLORq8umKb43vT8vZhTrNIRFk0gafMOkjQb7ufb5Xyw0M2b%2FR0VCp8yrswm%2B8y4XnWhdziB%2Fcwdeu6nkr%2FJ0tlL1nEKo05qM0vq1eWObkReKYTGYXxjYNxgMw6Nyrtj5RtQNcn2BKDew3bhy%2FBa9MtUwLheK1PLrU3IsqmZNvCNXGc%2BU5NSdsNiDTU3EjKBTaEl3Yx%2FTxSt47FhenzK67wcRq9M1sraHL%2BtYfxtjSY6ge0kis0YM6pmiYJDVz%2BRl9oks%2BGukxciWIc5g7rjiYeUIBHjQBiDJpaVvPB4M6OWtbbSIrLFlHSn3XxOPIdRFE4iEqitG%2BcWeaoXJMJVVKHSDjRWffKeyhA44mTctjPp%2B%2FwzOjCvsIrABjqkAdWt5Gp9FSZSd9TrbytlSYjxYJKbp7AlpRa3oGR3%2BDxhqPQCWEZjRJ%2BIEv%2FZ829YFWMdmmCL9FakhZAH9z3hX0vHH7nehEYJsTwFIEec7Wk0XxwU4KsRzG9eJ8efsEk8vNUJJ42UUJ%2FQuNEhEf4NNh9yocoPfh9EvfAyJy1MrCaZZ%2BOAORduQkglnbtWbqqErm5QqXQfi%2FZMr4nPYPWW7rgYMt14&X-Amz-Signature=18a2a9a686ded5d9087173b3a2fa0dd575fea44806b3eb07500cfe534329ede6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
