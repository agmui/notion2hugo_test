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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE7ZEOI3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIB9ksApocJPUVbRoosA%2FoiavFisJhW0BUs2lKNkxaxILAiEA2U74twKGVLIi3KhKVxMxgcUF0IACpvJZdMSu6XjRje8q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCyu0XEHoS1%2BhiWDVCrcAxRdKvlNBXNyqCTlvR6Y5D9QUOtShkNK890%2BC8C4pZH2KQQy28Xs3fh9l5ddsMY4RZKB4dt9MJvgq%2B78SZ%2BOryAfblY615Irj%2F%2BlWgQLe5z054%2BAJs%2Bj4QIGVLNxJmZnAOmOwGgkO1WB4Z07QT3VzK2wMgUARYeNfFL2gqG5rVgoD5%2FEBh9qHNEPJNoqYnJyw5RISY9lXLQu90QaEzuHf90FOvVvm%2Fydmn0mioj5RfdZApgoGAwGoe%2BjJeEv16MAD04fD5EvQahM%2BYQgCQOClgslA4MADcGOXM7e3l6tqQKdNQ8E0OtGupINnidxGtkJESmqntTP7tn9nmPtFeCd9SfxsrAPzWWOmjT7JXX5Ic82UcQVt0%2FGNXoEjYlhxWdFRZG7xWpu35Ltrf3eicjo7saZLRTQjv79xZdpdBcd1eW2Bzhzb7%2BI51EOF6LD6ebvZ8ocNZfYlQBGtaeYEFUEUP2%2FQYiaXVW42kebtQMBMSf2RCrAt42C0lA1aj%2FNJVvd68UKVAYPo%2BIZ5aFUHNjwc8jCjCBcgd2YmXxsjosIzEdhZCAVZM1r1vJRc%2FxO4uaXhToO2GZ0NbnuRrIiNqe9XtXwEnul44tYFXY5df7l4Fs%2FFpce5z8I1Qyo2qmpMMq7lsQGOqUBAZSGpBwLIykaCRyqCmQ9o66AtUxdVjS6qtKU83K5viluEavIN16xBX7MPtROwbzI9zEhNB8Rti57jbPstQH0ouVCHqIIVPiVAzUUPVxiDFTchDG2iRrZzMwavWfu3y3NK%2F0lh%2BEiO3UBcjZ3XwtP2tOb3CR8sCUVsCROyStuQ3EvVkbo2FzOsubBfEKQIp5gngmFqJXhhI%2BN3rJCaLa060wGbcb%2F&X-Amz-Signature=8062c7d15106885e85601b29a92868f17f4621063df09055296f39f6592cd663&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
