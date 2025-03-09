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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C23Q6NC%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIBYQiYRJQm21HjYap34zdKhx25VrH8epaSk8cQ9PrcEEAiEAncX%2FNXhgf6KVRin9pFj6vz6AIwyagOPB3gmdo0pN7jMq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDCERYIq75pmx68Z7xyrcA19NaOj0NRabo3p8FxGBAQehO6cxdyNmqEoOaqD1NHS%2BxtF9NI0kEvTsAwj5TMXQ3CNEICiQwm2DzwsQIhNEQKaEpQfOfaELWSAR9aGdcgqrlnhJlmR%2B9bcvKqTEiNyt8OS5WO4UmL6UWrDGjk2XpodIEtCOwPK7l5cOTSWu%2BL5dKFcaf6sf%2BkAUbRMD8pxA5gYlIdHIJKPCMjx3vw24%2FZhmncY5FUmAWUAICi27G0%2FmW2kz1AxbyYkriyl4%2FZtuyxEc98Es7Yis9byY8Yz%2Bu0Fw3sZVG7nWGlz7rTZrUGXj9mAmSMqxFGmLrjZdO%2FuYj1PjBzfPoUSVPW9hGWjkxuGCuThQzZ2C4BxctRcE2rZXmT03Ipfj%2BQg2JQ%2BiRwUKvM70xZhLeLWwB%2BC8bMMRm%2FNFC6N%2B8CxWJJlRRN%2B%2BvLdI1mBovDtrwi8gqvdqQW%2BRGmpZRrum6Tpb9fqm1PAD%2BFPl0q%2BKTzpuSek2c%2BfUqbT0yprZ3sQ4DsP1ASTHpv3y16Ir3UJPXcQVdNbRIf8NMdDiELVflm7Lc1RmTzIJ1SAU%2BgOjD7yO3Albd8zRyBiAuWjxr9vYPR79VhVi503ImbY%2BXrJ22%2F6nBlkXJNDSXAmAaNT%2Fnb0cVjFhdzdlMNPps74GOqUBek%2B1K8ThsnCCzS3Pt%2Bx6Y4LnEEzrv1REnOzCEAQd74py3oxGME6MZsxWfs77WHrUA9R8YXb67hcQHputQKWnRxhIsLlN0M20%2BSTn0x6hsiM%2FEQaV4vr0p7nJ2wixq1nhzi%2ByxXf6VEH0raCYNXwSvOdQU074ERMwo1t37FWTj%2Bwf4zkT5rbyWUVVt7tG5BjbEWhcKKd6jCRr9U3B%2FyEua1IbEcx7&X-Amz-Signature=a4c0c59c82d4e40f49325f7c47bcd50fc3c525168335092df06eed39042caf82&X-Amz-SignedHeaders=host&x-id=GetObject)

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
