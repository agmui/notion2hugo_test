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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGBZJK2H%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T181100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIFb1%2FheMDJuY62SdgfG%2BG6%2FUsPM%2FJ7cRpFj1x7gFtfNUAiBWVODLlGfknVWTflB7iYTEViO9SQQpymP321tQBeQY3yqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKMx2RE6%2FBbMirDhkKtwDIIhJXJTxU9bJohJZLI45uTYrchUR5J4onWjKPAqdzOiV0QhoaI9aicE%2Bww9nP61mFgNJ2LGQwIaWSLe3PtbBQ%2FbiNerKMkDZ7Nub9Rw1oa6Q5oV6%2Fx0Z04HpTYONSCszNsO6SJJ%2BuW7AvxLedLjd77i5wBaZqmxq2WXx67lHKOwtziZ6xa7OH0eG4nVNJRIiHqZnFHYIfQBjibXGFDF6OiJrb2pqLNatTzstSD8J8OxlkqhVzLZdR4UGpvXsEF4hZXlNjjmOLmchSrA%2B5kdsbD9iG1yLXgmvfs%2B9FsviGuuqSeDJ3rfBP3JRnnoT2f7gqggYF2exFKX%2F4P1uP5QE3%2BziKhtRk906F%2BEJedCcI97YEtMK51UbS9hP3cdLD%2FXGQm7WcJY%2BqpaaOTuDG64rXiA7CDAGxlYn8YuGGDzrmKcOv7bls6ypPjL9vYGxlqLmm91x1sDXo1EXVvcMdeQomqje0NR1IMHBQOIFO1%2FdB9YJJuivg758Dio%2BRqUyvCN1rlnrvIMRlqYewf1UOHqBlKMTSyGH8F1UxPA0x%2F1l%2BUHCBWnJ7MJKg%2FnVlzZr7GBjbvAtcrq1nS8f6Fp%2F7wLhbspRLT6wVl7UCqT89ngNQxWHC0hY7plD%2B6vnl5Mw%2FPLBvgY6pgE4zEh7cm6CCO2phDWLcZ1rLxRDezKfsh9M%2Bd7TXEiTLj%2FRLaIv5LqCOFOMQnA38UNExnG3bGDCa2aQRK5%2FJU2FBDtx%2FB3%2FqBs5aHrfjU08vBFjrVgkHViZMqacVSZRJ6oqW3GmsbZabvf2%2FFAEcuYyupKkXVbglUgX6sFkRd%2Flrp0N92ZcnpGevRTRU%2BE03uxJy90jRcEk8ssFxS2J1oynMp91SiX%2F&X-Amz-Signature=802053c29e0493fb6e8e6828706a83dc4baf05191c5625beff4a4d25c172fd35&X-Amz-SignedHeaders=host&x-id=GetObject)

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
