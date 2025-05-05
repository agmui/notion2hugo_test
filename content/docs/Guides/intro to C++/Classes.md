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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624TAJ5QK%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDjNiexFuatx0WPkrHJR0kd5t9kXxeecDhFistvGYtpBQIhAP3TlkIng235QanXo6AhpisJssYrtftYg3WrsiOsQiNhKv8DCB4QABoMNjM3NDIzMTgzODA1IgzXtEuPQVlN%2BLlw4Jwq3AOF5J0FIUQDDYzVtFZ8tmtqO5bcFodL3Enpe7XxMcxO0qyafD9d87dYPeZVo75ZCwy%2FcbfLdWC3a0Q7LG142TzkvDZWzsDtHEJLPSV9gElZpxm586XLloRRHoBXDot6ngAgcrdA0Ny3JrgNNlp%2Bi93U7%2BK6DEPktsAwPFhDmAvGdG3cCJNhgd71vD55VlCELbXOe1bpd%2BklKGj6%2FSy1MYNeocJMcEP9fjko3L801AEqzBQMzJ4w%2FN3RcHgxnBcvpJw94e0cDtPYU2c7qH8oseGJy%2Fuq5kG90k5PzgwycfxuoQipKsh3YMpPAklvVEg7gBPAr86sYJ2B611YzqfUKxAwPaWoakk5x95DdbGGSyZS4JFqIbBUlz0zsBpr7D%2BFyMO8KJ0x%2Bc51QIIQtq23jYwFoAHEgVmlxcZz0lwqlKFAqcGHYlxQUqAQr%2FQHN3FKoDpFJyNkoNKsBtUA9svVePVGiLFhjpZVFeucU%2Bco3FJ2J2F5gDPboZh3q15xUiK4BHkR78DGMRc2DmNyRUELcClTLyGsenek1eYJuDu%2FcMnUmIcC2EbKrvrfLQ63W29Znazbm1ab576YlhJ%2B5BqIBeuR0fbha%2BcTYCVYuU6VvReg8hB6IFd890JFn6jv4jCHrd%2FABjqkAee25kh%2BEhtddKr5uLDUASkgudpg5mHzpYvGOO9mB%2BPvAULHfUmSWa2K%2BtPbK0vTuVqN2xe3O6YpbNfwN72cNlY4X9DNtKhTztL338zYWuNO71THp47rfQxLuJu%2BHMadNpA8xO5GbKSnJkdLaKuzse1qGDZYw8Awm3DtQmoQ7KVyDWnW5izWAfMxFeJLRhmj3n6Mu%2BXsMzbL8hsUwgCdMhl0e0Vy&X-Amz-Signature=af3f9ec8e8863d02b446ed3e7efeb49c0774a6de05fe91c8e552b8ccce73de96&X-Amz-SignedHeaders=host&x-id=GetObject)

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
