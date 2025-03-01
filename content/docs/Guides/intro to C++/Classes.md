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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNOPRIEK%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDVgJ3QCRgQQCbEpFV2eEn%2B9MBmUJ%2BA%2BwqUWA8ausJETAIhAIZWe4X1GG72MjTpLFmYVDNTt%2BfISBV9yscc8eyC1S8mKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy782Dj1GrpRoxw1a8q3AOyVzU6O%2Bj1DruFRMNl7e37tCXKWJGKNhBC%2BPXbRx6ZCxibx%2BNFfzSaUhZcQofyLygIDO%2BS2hvrBIlue4e7wwpfYFWX37RsRJCIeidg%2FttOnTAM7OItCyGxB59BMG0EcA7d5dYcBVplyAtYjhFpaugyyZYguWi%2B4gEwk5QY9DSAsxXlFzLMgdmyqi3o8WDyWmg%2FHvX70VNdk0uSRWj5fZFr8Ysmgq%2F3aVET2qigYtwCg2v%2BEk8zJESbYtn75QJFb31%2Fk%2BGpb%2FwK%2B0S4hc0gV4qsCZvUtbiRzZ%2BP1%2BBWBGHbwhTMq6%2BHcIXRb8wp30GHU0AUsj1z%2BD49Dg6PCKEukktb2MDRKkFkCsr6gLe0tGHJRMkQCKSwfHdajQx4K%2BILhwXtV57kEDgoRHGyrMg1PhDsf4NvuHx5uMfa9%2B93myWRjDApHOBHKe7o9rtYsAUiRQjaHMNfKBRregRIgonNXLmjMorj%2F%2FSWPIkvhPPaZqUJmxnSp%2B3gI4rHsVL4BNj3XbT4f7oPJTB1DUbzTms36ES%2FjJnoPIo5pM3EeuyWrVh0rHXp%2FckVWy7%2FZta5R%2FJRg88YrARzt2a%2FN7VaYTTNJOupGRNVYQPhGacl54w0h1NkmzXC2s5wIEeZcZCCEzD1lIy%2BBjqkAUXNw5AuaeaXMFx1fhMcEZNPDTwkfveqb2e3Wa6X7TolUTwxrwW7uhpJgcuZBT5SLK3phx3Mq50EFSla%2F5qeTqScWiWBghmviXLGB5Hurjtgs7PyYPYIo8zGvtXZI4iX%2BC8HUXgjdKLMfq7ueNNFofcZbFOvUwowRsWT1FQfh47wQ0UFLHYx8P1JeE2roppOy7sWhqUrbXm%2B%2FymWF7NFTceIPlJA&X-Amz-Signature=0f378b353c6e3259cebefce6124ada6a8edfce58da1440284ed58692b4f0e5f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
