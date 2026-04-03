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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY4F3JYJ%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSxIYtSVUCuqJ%2BWsU2an%2FJ1T%2BHnh2BmDoE1t%2F%2FDd8oZAiBckFrxPvVVDwqkuDH%2FeYoorXJFQfn%2BqdBK15BHPZbv5yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM8RBx%2BpcwmqTOxvpGKtwDdzpwz1a3f8BhGH%2BQJJGf8EIfDfdZZIF3oxE%2BIOiqfMo16ybdXlFGoMr27FG9iTZS9AzkvWZZsZGS7OXdauJ6nYDL5YYZky8x%2BUNQeovuhQovFHdsxHDLT4TpGXqtP9NFwcUPkxQuDdGh%2FRdR3je7v1Zhqvb%2ByRwHSM6qNP9w0uYsN9qnRsoNVmFut%2FtLsPoVVyw75oM8aoFkXWVqnj%2B8lQi4K56tpMcPKWCKQ71%2FKYuYHKnk%2B%2Br5bcQue%2Bjod48eif1HWz58Ol2%2B5QuzOW7UFuGMRAngP2YfcefqgDdDdnxR4zw%2BvbLzy2mqe9BI6mRozX1yy2nHowurRXzco1aZWo6xq1dHWsRLWg5Qq%2BYyBZ0CbLtqECUUOfwqRMamv3eF32biM2v2KQbSzhylPGTkMHXNoDkW58pPjWgQVMrnaDQQZRbVBb%2BoC7%2BdHaVtJkNqd508zFi708Strvo1yxQjmE1OzpkL7Fzq0h%2Bw5KCxmlzxK4%2FX957iFRGnjU49owfukSJmy4vUB5pvtu%2FPam5Ym6Mvy6I0cLu46c8GwPgEkMyVvjh4qDfncDlsE%2Fdw5DrshEc8pvjUhWIFAvhSn1FznVrfsRapEXGCsBbNJc3eL0zkMdER2f5OEZwBGWQwzci7zgY6pgGzygHyeklNh%2BMal3GGzdtJDoAiTTpNJj%2FdeAG0qozOnes%2FSvc4ChWJYFGodxGURshJvmz67RHfm8XoSLH9kPQEnCK6%2B2hsfr06znJhH6hyFZby0CEzO7fQtGZtUsDAVK3bVypsj3jezQUNBC9mXUs1tvnHkwUwg4L8AKZPeeC9rOUQLUg8IDIKyzz38pjnnpfelAo1A2rMVlieROQmFl%2F9LkvruzNg&X-Amz-Signature=a56b543dba7bb7eaf0f5557a646ad52201d8a260de21e9f42f1dbd7ee4a866c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
