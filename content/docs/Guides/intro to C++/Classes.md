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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEBI3UOL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDdyWZBLGJD4lGQecWxZqDfR3e%2B%2B0FC6bRnlwD8OJ7KvwIhAM%2BMy2ANsJ5tkQ89KOwdKLqsCW1BpCDiPJpjyrWJycsUKv8DCEsQABoMNjM3NDIzMTgzODA1IgzqnyI6FzqRFaLigs0q3AOcnyPJwBrhlqMyX7POcGSHBE9Y1xdwjA43AMnv3TLiBm8Q%2FpCxDV%2BfmRFi%2BBMZq%2FszvfRtXNNNReA%2BXZ0bmQvsRrgNPx%2Fc2usOyfw2XWno1f7xYV%2FCnpaW3FRftyrrGeoltWKvWP3eUPdTN%2Bfag3unE5PV5sLTeZ%2BeGJPVQMQS8GRzsaY1aumt1GyItnA7i%2FIooEqgiE%2BkMaJxt5JJY9hSa8vj%2Bj0v9jscaZwRQ2goJEACWkzYuYE55Ws3QxVkO0p5k31Agn83nJ96bDe9PhPtey2IsO%2BN5SYVwyQYJZ8GZgBm4PB2aBeZFCoJlSfg1rQwsAAC4GCLDr4iOOr9964Zoone%2B0UxOeBI7yFIHOoqODBZ4rDjVIPZqVS2h4YkInM8cDZr8yIfAUm%2BnxOmiuRJb2aprJSixbcRltD6qAfQbY0trPl%2BRN%2BTeAvbnPhWc93UOoSnpwq2CcCTg2Cqa5Y8EWKt8LNBHxkrh9Jw5w%2B8QHk%2BtKPYckSXG8l%2BYCaX%2FmNdbqKR7eG%2B55WAZC1InyNoi7mwsaxCGtvplxUANlVFlq88MGwMUAAT1ZfKCE8xAzKV22QIUi4btgrPw0iAvPpOLAd6il2udH6CKaQ08YVfNc7uyMGvVezRkLNmTDDJwvjEBjqkARUB5Keu5jB1DUIvxE8KFDdVwq3o3NWyvVzoA4KDc370TpYershjMpr%2FdyGysjzaDszK4UShn4OSBmNLJIgMiQuFhsC7qgxq%2B8cyx%2BeunhS1g0cuFwLQsUH0Qy%2F5hPtZzAUkJQXWT55R8fXAat%2FAANCDyuKh8cbjAu17AfP875tIUOdgFHMda%2FOrwkT6Z6gZfEIZ0S4GlYhdAfxkHLMnaPZNmYSx&X-Amz-Signature=de5440ead2c8cf209c81efd36be1d7415b5b2d10cba1f0e2004233d6984d154a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
