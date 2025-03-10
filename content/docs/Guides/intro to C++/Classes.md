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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q4TTBPT%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T160821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIGBa8%2B5t3sprrGRfYNok9weq23ImHqYpqtVjpIMG%2FKhfAiB5TN5GjV2bMiADfDeD7yW9ITPfIoXn7D%2FUf9lrU1Y0GCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMhWzdQWSgSMFJg1PKtwDa6AWvb6lOC3sgAkBvkyGRYDpj4qmzhxFsC4O45Op2tTm4g%2Bw9VF2lBv2h43u5WZ4XIMFTJW%2FGbJaTRFFLQlLEyqPkguxu9dGrGtA10fv3AB0M68A475%2B4a7DL0VfgS7gFO%2BZftanjMEChgrwpRCmYEWVzSLoZYrW34o9QWAi4RoJqX2cafOBv7aIZdkAppDU5NbEQw6MDtVfzNwp6PTAIhT93AaCq2adMqM5E2a8FkNvP5TUvCY0jvpV7e%2B9Xdte6Hwjvmld7uOZiti9qSiJIx65LiOMxt%2FkICTvAReTBdqxaA0WT%2Fztk4PY4W7RGeImfyFiuSSQsXPWF%2F6g1mNF9BmzorLVS5iZWoS9Fj7q%2BAvdLBSFz9%2B7E36VHcsRIxl8krsRgDCnExnMVBlWY9vls0Oa8hzqP0eoivAdZgDyYZDO2DVN7JmBEOnmAFyITPgbKkh%2BgdjLLSk99Ies4UmSAtG4GrNMvj14AlRfhre34l8dkv5z7x%2BW3fvz9gyT46Qc6nHpnikI%2FSZfsAu8pw6lpUlXG%2B8rnfloWJeYM4%2BJI3j1ThYlbjFCeA6%2FT3l9Nrmt71I2aJVHGEj59lnFFbDkLaXl08rRv8ng%2BHUqEOsuk9QP%2Btu8cs12q5wXd60w5Yu8vgY6pgFKRvXtHHNhJuDaAz%2BRiKKMecgVsj6%2FyRd5%2BL%2FWtX4m420KD7uA2eF%2BdfhTmmsp%2BkwrMn4SC9%2FzkDU9JuL4bxn2s5rDqU%2B55PSeg1DlF2%2BE9O863kLjr44Rd9PgVslv0WmL8qyIg%2FSOFR5pOWszW2FEfZQSL9Zu60jQExhIEut1bFgOok%2BK1QQqBtVEWG7e2yU8Buew7Lw%2Bs3AWP4N6nAvO%2Fz6Jhhk3&X-Amz-Signature=3e785c06a654defda96d10359de8493a5d31962aa1f2f930194e75355fdf1515&X-Amz-SignedHeaders=host&x-id=GetObject)

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
