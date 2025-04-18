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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MRVEE62%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOsbeunOhazXE866T9bDFWEoIRKrcJVo9xCJTYQxBDqQIhAIKyXb%2FqyuQitldgKoVwyPSnPq8lE9H5JbafO%2F1aTOjRKv8DCG8QABoMNjM3NDIzMTgzODA1Igze5csLSe4lqSnbVygq3AMM9iaC7RV1AQI%2FZd6cu8DG3m6fTZlV7gPu8SIq9zYmXuOC9ti6RE4ZqA8%2B4FHD9P14%2FbVn5W90PvCY62twUxbsijPdOH9ENehH3gfSPxcehaAoEVWRYl0BZjxUvxnSBIJL8RXEN3cIHavFeq6DAFE2O7V4%2BFXZkmxFomgL1cwwZJ76GUpA4n87Ef0UKRbqz1XJPaghcs2Uzn4xMjeDKlk2P9nlV4Ce56z8tSFutDktyE5cOKv0mYAaBzpHyB9S3IGcMleMYPIBZI%2FcV9%2FxV%2BejAOpQbUb38PBIIU75hMJGB4I%2Bu31%2FI6WwADSb31sbtID2LHQrL5C26IcGKc0bqQ%2BJ3WmRRTGt7QoEuTMOXw9WZupF1OT%2FXt5WhCBm1MrOjRkzQHmIptnXjugACcYA%2FyJQ7%2FdkklJJiHI0AEsAWtuqZFYwAdlEvIWiGlhniCkX7YsKfk61prBdhj2KDTQnistzAO6sKXLf6q5KdEDFdPyRIAHhRjCNKLHAutNq2jLGwijyKmqspBWpiEkpwQdGttazAM59SUHYlZ3n9sMihVm3Nrx5K%2Bjw9uXE%2F%2FAJYDc7LLWCn8gr2D5czlsY%2BmAfATrmNSWpa0w2llHsFUAJ9X0Z3dBCpeXvW8v%2BAOrR0jDf3YfABjqkAayuvT3E2zhj8qbPKDW9%2B%2BTkUYNKEpCx32RH9Nz5ELVypuvf%2BD4whN5%2BQH7q4724%2Ft16udWly2etx%2FYHUkqTWLtQoiWqSUZLDlU75yaT3SVR9%2BP6WE6mT4IhdkL8LgopNEQ0z3KWsO9n5UjX9EJ3zhOgQM3bcW3sjQQXXGc9GL68aefUwfYllWbuVjFBlNN%2FOqvPyMLfawH9%2FNYKTYjpKRASJxO3&X-Amz-Signature=671abf02e274d6f8b8187a3997110de7b7f5bcfea0f0bbe7f4576ffcf78e33bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
