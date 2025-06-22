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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ4TIT4G%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T050949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJ2Pctn%2ByxWIy8P%2FpEd9tBcw%2BrxhIkkWTwTMhEYgmVmAiEAowNrmjevXZupRUEJJHqYJDXjoE5EBPKBBaboLLWJ1cAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHBHVknrnn1tHJOzyrcA3Gxhtw3eqyApmxzmvJWlGUHffnwmwXCqKgzEq0sd6COjjrz8QcLRmfaTKcnu8XmWtFFfllfGrjnB%2BaBzWCiB5u14Y8Bvt2VgjCkUSrNXXqrFmx1pyEY8PojHo%2F2zEg3%2BY9ACypNY0vMD%2Brp183uEo7GVnpZi%2BKYBkORoOb2fCnSt4xwzC5x8dxDK0OI6pFBiJ0uJsV5FdzOMB2sYw1JvKXOSm0kgjBcLJCqgo60rtOSScy%2BApnq%2F3slfhYNwkGb2Er81d5LDUW4mprvQrYh4jfirNhhICwiU4e9yL%2B8VkZLApxo0v48xENDqPBDsBFVJZ3IY4uSejXmNM8E3YFuG%2BSwb%2BrWB7HKlreceSi1GC3C8XN9hoChQxABLQpp4AG5NBKPxReiw4rqX%2BVuG%2FxyOnQBEAgjQKk5gaaMSHRU6rmLpWTi1Z9I5GTpP9T2g8yLf322tt5Hly29a9L3yRuPrvzMrLa3YB67uBfQ0Jlz5rLcFO%2FAGRwuMBE%2B9m8T5Fcu8Aj1dlSpoHxV5Hj7gEYCmn7y3lKfLgkdRtCOJfqAEVIyPu7wYc6DuPqraqJKtyogkF1rgDsPc2T9zUFUgtAUk7ctjRDtOqXqxc3e3D8IAafvI5fy4S7pqOnDPThXMOqH3cIGOqUBxiXb46NwI5OwzMh5mirt0R0d5bIviqJeI6B1wFMqHOFDjWgkbGGk%2Bp5Mio9syZygyRvrnDLF2K2MrVKS1WomF0lyv2GRn8Qdm7viVvF9vDXp0%2Flt7OmpmDg5L17bPOeNtQQJ7Lv4MZhFwNyQsQrQ1npjfhkGcvmIHZccSaur0W31%2FSUH%2BftVrFmeD%2BBDnPl4L7QB2B6hlMbcWo3U9FyO6u%2BUVi09&X-Amz-Signature=79e4a20065edde705824f1cd305b8009254b0f640fa90356b5fa80125dc444f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
