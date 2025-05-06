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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I3274R2%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbjj6BEbBtRKZQSjtdz7geXvHayz%2FO1dJRZNHvk4VZNwIgUo9fXY4k%2FtqPzqZ05Ne1vMp6M1%2BUQ5dpME5Le5R8GeIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDO8tP%2B2MKI%2FMKE%2FwryrcA%2Fe0686hXKOy46Xhijt5cyAu6LCfmdbyR0kKU8Zx3DDBAYFL%2FEbjx24TJfi%2FlTcE81pNVBY2PdXmGSg2Qsg4zMhCPoAlMe4NMlhqJbx7TYrX5B3N9qRHBGfffZkyv4PTXJ7vAe3k6fiM3JuPHHBQZVi3xmSD1sTg5%2Bf8I%2FbQRZIHhNFGRXnHnMdNgTrYm7RG4NMsvTPaPkfFucUrnYEs%2BWNV1mCtle5Go5TpnK6aNcWqHU6ncOdapU20AFillYfk150uorXydEa7W%2BRtu3uMaMnFRzgZMjj5SYMLgjKpmBXwpa%2FlZ48Hdj3PJaJj0i7Woez%2Bfd1m3B7tsaqGN3c%2B4uCH9uoVFl2%2BWWw2FDXE5C9Z6ofwFG0Fz%2F9B3m19j7qnNm86uTG0FlfYYNs7Ozs5QbPBrmN86ijrCsOym32sp41Fi%2BYGxvqnoqyfY3HiFrEnsf%2B%2BONkkonVWCnompgNw3L5JAHFF2S2hSdPzTpVnHyvkLL9VBdAx6NTWg%2BZH7wtIIBzyuZqK36pNK%2FZoW3zRd5p2SysL2O2whReBcO4rzHdccKPPKLrhsAGL1V1ZXk8kFRS%2FRAZ%2Bg5eLgpnzUcUgcx%2BVnV6%2F%2FFFF5YFoKwRL1eCfLNFHlGABJI5aroO4MJjV5sAGOqUBOqUYYE6hEdPqVh2umsFtvYBUKJX2peDzMg0VpsfiqjHqPoBx0kwjyzg0eijTVqu7b4KKzs7sVx%2FMlNb%2BwJnVs4XJS3j%2FT8IcpeTYmzmeV9pR1IVoN1OaPvBTyHXlVB5e3NNVuGkNUD3JVHADE30dzyOY7wVHlOrJoyDKdI7zHprceuAE975J5KRK7W9oVh4ENDUMHX1fUFPwPLDLKyYoe9XnJCjq&X-Amz-Signature=d10e188d6320cdc03543f908625e6a55c9fcbf270dd7d789f3ffc5219018900a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
