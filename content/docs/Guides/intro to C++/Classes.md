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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FWTBABN%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk0x5Snv6PfUBoyxBC7ZA6iwiSzjFbqFBZhlTa%2B%2B1RXwIhAMmaN8%2BY%2BagwrayTtc82ir6DegyAcpde7K9Bt2acwRJ8Kv8DCBgQABoMNjM3NDIzMTgzODA1Igzxqz%2B9LQuNUcbWJUUq3AN6NRuvDu43G1GzzV3b0ij1hJ9a1zoTDfqCJmGiQRb%2BMJ44YiRGG9H13iUG9iDTrudCsD4CAO6VRhtuaOFW5LKwuRV0SojT28twLVScl7uXhNvZUX1tv%2BhQtWurtlrRPnfIWSAUj8he%2BrOwr0BHkiJSw650wcop%2BCOobxNYGdXaXGK4tad89dliqqD7RfAA4ymlFZCab7iwhBnFRdF9G9VoR9Zq5d3kwe9yADiFlOZgb%2FHnSYCPRvBIzN5GazfSvTc6IaYNy8ScZ7ObgwsWOAhLMEiHZ5o546Naf5VfWEnGSNPTuLeLIlp7sO98cQpWGsjIG7Lrw8fcz8lNuZIk3u11AmjpBMxQGt7nSQ%2FgCXcp6Q8ziXMPD9HjuqBSWyDcL93N56ZEiXa8LCq231IKeyhs%2B3dI5rNGl4mqDgM8028AykcT33%2BOW8EU7fCdW2FHHO7pEa8u9nh5MI8YhLnrdUs2%2FG6vVyaYeeCLNtQ99kOTOzKtyeKKndPXYw8Ph5Jhf18fNsA0JsZ3A6YUXwre0ritkQYs8qc0TXnyCbF1xJ6yAF20ImCf26rwJnhTDf9ZmQUB%2FX52jN%2BoKYFbD6z6uu4rnUrzSUNY%2FhkFoCNQN8QQB0x6xb0QYLCCoWiAnjCd57%2B%2FBjqkAb5papLwpWj8DW7Pq1brvw5EO27Vjq1KnSOYnd67B4FQOv07LhrZLqGHFtVVXr6fD4JLWJl%2BgnNYZaNje9492gXTsxP3rLfGIOHH0Tsowg3efiaVQyZLGlfS3kl%2FV0XicxFBB0PLBS84J2Y%2BGHfsxkYbdrFc2SexlcL7NNwnifKGWz5mPfzMm%2Fxdiux%2FFNfYsO2vCBHfZnsNYOZt6mkTNlgJse2e&X-Amz-Signature=04ad2f55cf46b3059df6d3dcbc26c699ecaf474e95b645742a0be99fcc0df8b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
