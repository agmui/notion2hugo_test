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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U562XU47%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5WwOL5E2ku5%2Bm%2BRu6kbeZKfCbQil%2FbhoMuw2xsAkRyAiAWmQBxZ43N21DhvvfDMGTNc144huKQZazwQAqcUx5McCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMUoFLcbFYDr%2BrAFjJKtwDsMGzm6t39PNM9Lc3o5lbuMAEWMlHtv7M%2BYj7zhZPs7r4%2FNGwOIXxpDDQNWRdYVS5dSAO%2B3eggF7tnxQ4EuqEiOMRQYP3g47vVAt%2FzBECRIX38hjCQ9bqcsOgiA19hsdafaCgE0cMNLiMYfxsU0SeZvu9%2BqeRAi0vjHYQRufk7xv71Y0TTynm5Q30RySIOcppogSq7CYwPx9ESvHjvzJ57l5j8aCx2BbcwTgwVJOLWdp7d1OPAJE7hWwOenpnF%2BL1zR0IYvZOTOvC0bqZ%2FXvZo90%2BWpKHBwUDjVNUr7X4k2A8YklJanNChsarOFz9wqxSiy6makxb13DuBGW2F%2BEYdnKA%2F5I5xkoJpgO0cxO3DQ0jQRKlibmHJunGA7emIIEM3fQlmgn20aFTjX4fwoxG7TAQ2B%2B8yq1fG7o9CmuoLASyNVHtcYCUlI18%2FlO%2B%2F1H8LHpJssnj8ifEVMlMuwmTBi0P1g7Sq17bCRqmoPCnL9rOgXThodON4Cw4tgQXsYp1uNw8E1S%2B0CgtuGP2n%2F3enFmczC9s1A1rtIbgATcbvTpgtR5Dsb477nVBAH6jg7xl76yeKjr5qviFqdu0fS%2FSVg59mJ42zxgYsZHskY7n5vZv59mtGKljv6xxrOAwj8v7wgY6pgFQK12VaMbnQ3fX%2FMqV%2BWe6YwlE1x9Kiyg4aqBsPoRb6BpeWerAZNQ%2B9ZCacafcHZrVZlIF02Nnh%2FxYuocA2LKUVYXiLj%2B3TjSKgTsdyViF5asSEQ1l28h9fIzjM7dFc2oTxU66aI3RL3Z4YnS6jHpKzhZwNNkCdrvz8mhKxejomEHrCwjTRMsuVavrAxDXReC6eIMc1aXeQvht%2Fp8demyUIkGK6t4M&X-Amz-Signature=f27d0e97b05535da37348eb9fa459e272c384b57f877fe4f7f2ddb4c82dcca7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
