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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUC4USWD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCICE9TNCL8jnDqcHPBrDJIWbvMvDqnABk%2B5sjeQQlhIWsAiAhp45lkoyFoGG1ju%2FeJ0yl%2FiQKsEQp4WVkePwYbQbiwSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMZkHCHFoFaZfeWMgkKtwD5ZyBJkZj83uxYnTNn7CW9ZxOh1RMDt8nNVqABF%2B4wkIFo2qUU47xqLjMhHe0abyf%2FEsEaxMM%2FUvHzRRppJVeuVXmKa29zQV7MA5Ks1bMzhUmqocqGlbUrNXC4u4%2BxA8e8XZQu%2F06%2Ff7pDK%2B3ETOiQEZ8SG3Dk9MSXV9mAETbcqmQT7ogXAWh6tFp47jmRMAk2FIjS%2FsUEqbFnuZ2h6iSjPVCHPzOkOtG9OOeBNkIdOFECWI6gVt4IIZXYmY04G5B48QTtjgykmSH6R9CcYHLSMTc9Wj4TqhzuqNczI6l6sVbhUXw1S2z10pDdb%2FXyibuXkWDVhY%2F6VQy%2FoaSGaJ9j4bYACVSOQ8IgnwqRvKj61JBvbgYKXhJwz7sPC4R%2B2fb4xk03wm1dI3upztvrrRimb4uZGEGCx9EcazY%2BiU1V7MDPRRR%2BUz2ptXE2MJ1aDAF62jgvhuSdM%2FDoP4pd8b35ZzuQFMAth2EGwGe6q1db7QQgcEYOaWySGydojXHW6s4PqFqa3R%2FN%2Fu%2F0bTzKOZshoNp%2F7o%2BK5lXhV0h4BC1NWWiiNGln%2FVdaNhOH97mlnZfarYEmxlanrzi4qj7VKcS%2B3iFYIGVQOwn0IY2Tw703ojEOMWhY5XJL2bxeUkwj%2BnAxAY6pgF65TuyXiROeCLbNmlUxwgxDh02X1f7epHWiHLltafGuCZFDr3dTLtr%2Buw1FT7kFEhRJt4fvCa5jvkDb0Uzt92Si928%2BtczxrpCgwg3N7q%2FhZ87iXWBDqfCdBqieqO324mXs0eTjZjgP7XefSEJCB8eHwfwHDm8qe%2BvjiZkZDi%2BD4R5M%2BQ%2FsDoP36PGI%2FNS4gMpJIcsy6LbuC8UxLET7TUwQ9HtSVMm&X-Amz-Signature=21d616bc83835e28997a8c2b7d8c3c698ac125b7189999a41a63aece7883d814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
