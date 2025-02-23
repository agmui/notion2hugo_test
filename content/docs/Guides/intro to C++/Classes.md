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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MKUS32D%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUhGssgRjrEYmdgj%2BgFWiA%2FLLYh4adwERKkHmZlF3EdQIhALFMljwAWjfaYXFOirCJsYbrBGr3DqlgrXLE0Mj6KLMzKv8DCBQQABoMNjM3NDIzMTgzODA1IgwfhWTZY23iCw9OqJkq3APoVuRafFKFWRJ7hOKYSWDnLGA36FoRd9t7fQdlWQNSeTMOftMRdbzfF%2FS%2B6Z6%2BPuLwLkQjjtuQCUXRwgawU6X8okEHdlJq8PwbQYcQPpHDPczLnu1yF9DHIF7bkY0JvmArsfqkFQ6B8hHlxI%2FZxaXQZ4ns%2BDwmg1K0TWS8ZBQuQvYfIYWAxQiv465F8Dp4uzEwUn5a76P4oQ%2BbjHP0LLus2AymSfB5RsUPp3zAV2vOpduKyi%2F6YubtK3mjTkhceICsTj5QLPoJIAiV8NhFmZOsO9vWcLjf66%2Br0TBNlgeK6IC%2FL0ILnjHFb6AMqBUCKNwIF0k1t5%2F1pqALUo8duwf%2FcIr4yvKPM1OT9baHRaA%2BWH%2FVltklK4sqZ%2BLjn5RLRvLonSkh4nH5mlMceA1g6unp%2F27a2YeGD3%2B%2BOCq15%2Bkj7Ct9HeBWeu0f4FUrt9R0nG91cRY5Yq9B2QTONU6%2F5JnGKcXk7pE6oqgmoWBlxSOROC35FevPAPEuYEGcC5qD1m6YlHpSJDq2FCHJdFPTfsFOvYco%2ByqutBuKM3Bmhg%2FX99Pd7hmco9h1WnowNOfUv8PsPoZJMnxo7o579uJfE3lwr2WY%2FvujDt5WIY5v6oxkK96IknP4csuRC45nQjDg9%2Bu9BjqkARbwwA8tpZBhfi0y8ycGsVW8GBrdE5TJNKql8e9iSyQEsHwNJ0B%2BcPGMAtBJS23Y3n4Y57ZfR7Vdw6LkAP4T%2F%2FjjyOlHfYhbaA8qGcHDyTTKTvOhvGB6y4aUeE3gCVkPvvzenjwmY%2F6BMnT5EUKkZNmCq3wDB1fqBQU58Ss3PyaU6j8X3e2mhL6TSYHmXXTpn0ScUKiltCmcg8u6a686e%2BobD%2BUC&X-Amz-Signature=ef99e74ce47908e7e92d5870019519186c5fb66667c457e2d7105627843a01f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
