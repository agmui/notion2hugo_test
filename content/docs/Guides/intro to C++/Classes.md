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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AB47SND%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCzV76%2Fn1pg7k%2F4yHsP9ce%2BL7hDHzGZkGyI0IlpWpRR0gIhAI7fpHRe05yyTa6l1ASFCVb3zvxWwGnCyxfSIc9Mr9SoKv8DCEgQABoMNjM3NDIzMTgzODA1IgzQpQg9jS9MRNQ%2B55kq3AMsaT2DhGd7tvFtiHnQiTBFBC51WuSasI0yIOIet6BIQTCrExXgvumHrsLrO5YkwTlNQhgq6tqu1iWnKNOD%2F%2BIcS6dNozn3r7CYQVKD1%2BApwBe0D9h2Zaa9RByUxOhytzX%2BU90hO9HLU%2BD3FccWO9JYvwgXdhBT4naN%2ByY9sC3w7g62Jsa2wqPPAG%2FoTxi4J7EPzn7DkzuR9Ug1k0Ky6zpKm5%2BPPaNBZ4aDUkwZUzS3RsNqKEAXWsu9DoiwisFGrIjT7EysUVqyskeQovm9BArJydr6Kdq0pGGfDZNR0eMH84x4%2BSE%2FLN3jXF%2F5NIGPzSi54Ndo5Bmu9%2FoC7cnXMpOHUMCfvdM7afxdpRYfL44x%2BMTJej%2Bw6N5KzroRniF0IpJOmO9p73cCA70n%2BcZTLDGmMVUwO5TUM%2F1DaOIR0bd2bxM0sJzHABd87GqbJ0nknmRcLjXGy92ejez64w377zxcq8ewb6guzOnCftva9ChyoQrb5rWtf0iOe78JP6Bgnna1m2I3tRzb0ZbSqhWDYAb47%2B477HRbBKDTdA1G9EnTl%2FhTBEuV24LQobaZWp8YfnxuL57zRkor7fnn9hc%2FDdD1x3kcA9miUVK9RVpWkLCtZR2%2BLOCDkFtfzWVD3jCJvI7EBjqkAf3ftMdoSg%2FZRjIsudFVYtRu1wWNqTVVA7V6fhWx6ahLN56VIoGXUKaYgTc%2FYJAJQShoZs1A0L05CyviwYYU%2Fx5%2Fwl2ZAqd5adL3QAYfjyLQqbKqayTXBf7%2B8kfKxdKAX7TDt3Ok%2FXPMfptN%2FQNg7EprlW7qzpEz6aY6SpdjFuOyfAm3%2B6DQcmqkHysxK8BJODTAiEtHazaBvlid3zN9YiGT8DkF&X-Amz-Signature=cd4f9ec766bb96d24f43b1e1c1a5699a2cb8114180eba3177de22c48cda9058b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
