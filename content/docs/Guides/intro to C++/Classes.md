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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIRHMEZL%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtgoWyBJ89HeM8t4CAQsyeBasLd9UgnPzA7aeSga%2BNgAiBUcxRzJAKg1wr%2FBh1xVFpn6vUsWMF7sssAeStiOiJoeir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMGzTaJRZRSpcE82GUKtwD64l1xs9nywVroqzxgAENMx5e2DslUalvUk32AFMwJ8iwRKnhk7Ch35tqav9pRjyBsSg2VsM4lfeL43W%2Bi66s908vAvWiHrZY8G%2B1pO%2FCeWYkwPPiTdmVR6hAUXOTdTtuUv1WhNmQb3j62FkiQKCLZM4m%2B78xjzlHO9OoOZeg2EYYCpqb2D8sf0729J9KjP%2FvDBg3%2BUOp6N7JodOK1zZTO90PFBRvJmLTDRfZmzkaLNyylMC0we2XMFXdG9EcqLb3NMW5Ukn6SxQNd%2BxbmpHX1LP1DmTAaI4H4WQdTuSLSk2P7iXWvGBhDdRQLPnxdkATzk8Lg3tFJwngB6dthEIIDe3kgko1nYk8K6yU%2BSmv2qLNqI7AtbuPAe%2BcVcxsY7THfM89YmuxKZLzMFVFvt4F%2Fk6EB0ZGKlLhq6JEnccPgvx%2BHco75y2NORYDDZ%2FH5jtej021ZeuO4%2F2XYvzz8leV8K2K5N7gEnYoBkSeMFqtMqbpQj0fWfgKMBlWJRDi5OxKtXZiiAGOrJ56DcololXkYB%2Bs2Q650M8ak51JZ9gw%2F4dOzmG4JV88B1Mc05vv2Fedg%2BXSJ88VNNE8Khz3gEXaCsYof1fAfA3IBncKLuZVfuqtmRkY%2FK3IqWpe4zEw5u7VvgY6pgFYho0Ip8I7BZwL12QRaaWJUBkESTJscoZNJYBRMzo7KMV5G%2F9Pc1OYN%2BoydrDYu40Y%2Fwhi0JsA0OOd3FwqGcol8lp7rTy7vA9Dd7QtsIV%2Br5Z7VQSMT9UM0Frc1e0tpLjzVYuSMbix%2FhuYCn%2BC9Ev1BeY4G3b2ve2tG5YsyXkvOdGF35%2Ff%2FdK46%2BTeze%2BS%2FUbsZ9cmUONMO2nrbuZg91d74GsJVmx5&X-Amz-Signature=5bc6913ec84ed43e072476be4d809930965816f1954d121a3e0c6ab1a231be4f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
