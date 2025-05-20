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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLSWCZ23%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T041225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEr5uao4MOUue0n%2F6Qzzfsq987r9vo9fcwU4r%2FDomhS2AiEA65QCp6hnMhQSH6EyeCHuj%2B9i5%2FBzQRTyPwVGEfwqLCoqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJv9Gd6RFXKtJl06YSrcA4BFFr8e0I2Xbw7OL%2FEr9HohubO55pIZzP9nMTxRZYbkl2YGZXadBpmE5%2BDnN7XPSGoQjRXqj2cMBzD9Y%2F%2Fs8s62uu79XsSQNWa0R1s6SlH0%2Fo4%2BXLEBG48TBZcY74cCz0HNsR2rH6s3VUTqIxeK3%2BRZcf9SZF6RCAsgKCemAmaDFTFfy8eLjoYrhZwb%2FPdyFsN1IhMGyJopYMhiW2%2FJqqySeituJGSASSWk5SiZ4AjAmXn3ivGx2ruik51jdWWCQYX9CyIxTTNosmFlcFVE8PI72Fdl%2Bq7nkOgtSmsX5CY5Y4BctiXMCf4n2koguDF5Ksu462WUSc1tCYjcDyLcUSsmcXs7VuAv9tYzIaaO%2B7GL4gx1BNl1OFOrC1cqpNTb8xQK7yPcPCvn404b%2B19S8imHFvfIMxsoE0Q0hUiSsbLf%2BnHXusLU4qjdNnzU50Uk4aJxIvWL%2F4kFpvKs1SvEjj6shuNQCwlKLWvNjirmbfS8ngaM%2BNhT0s4n5ZIkcQ2nmH8AuJWOEQOFkV%2Bg1Apt66CRirFWhOZFRbdeLswaC8JmmN8mbX1fmOMr3%2BRiwXxecP089Uz9j3NbQVov7oB47o1mf5nHiO8gvxfpCpNRN64v2p9diQJDE02v7C34MKT6r8EGOqUBxmKe%2BfyraqqVHCp9QbDX31yo9nX4E5qwhIVg7TQ868KMi8YJQLu%2FREa8Y21x5%2FHtRtc5pLHGNoWlH6B1qM9cFYBn8ov4QGWl8eb9uOoiIyojvC1wG1tio0jU7pfMsdVxQPcIwVf0gJ9F3yBzT0aCvrf5odDqmdsx7kfJCTM2TRyY%2BbtEnnfG37ST3POHjAVxbH0f8S2MvJ3%2Bghu5m8bqGyTlgc1x&X-Amz-Signature=d89286304ae9efb7d2659b2c324c8a47b0440475228d17bdaab621620a277f4f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
