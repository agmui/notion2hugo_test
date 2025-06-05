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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL6PTY25%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCvSkh0TKT4LAsUcAUELoBNPo1dbSUiJGMzOvXnHBTFSQIhAMHViqL7uzWSvVmafClQP2FYLUt05YMxfZy%2FyDdZUH0IKv8DCEIQABoMNjM3NDIzMTgzODA1Igw8b9BP2wrV1WxDibYq3APpcKjEg%2FpF0wuYtVse6OBahr0Icud46Cw6IuhAcnZhZVHpSlZJWxO5m%2BEIJK4Yz%2FILFb9P%2BaOtgOYagQwTGOUUCDyly%2BJF1vpxpjG9Iau1DUSL1%2FdLsQXV6KoOCdr%2FzUqT9qzWLW3ViLk%2FcN8NL8l9h%2FvXX6wy8o%2F3IY9pYuSnm1BfApFfDwBYBEI6YsfVK%2B%2FIyVYN1LCvOWvWydYnW4g14p1UaVVRQnAJ%2BqLBp8y5tnD5PVheHmQkH5Ksk46KQKTLZlHsGn6hvhS6FmE%2FGvpZRsVFyZWWfsJ%2BxZUDiIpHTpXp7dkMit%2B7X2h2PTu2U2eVS8b24OewmRjpWZ%2Bh7CCCyxlXWGvmr6D5Qy1MCRkn7%2Buq1gkInY6UOId5AntAocTf7gapWMOde3dGXN%2B07EXT1TPdK6yZUA2MHIYiPwPc95qM78l3SSEfE2Df0rtxJm3KUvDviECDs6gR%2FtrxQpo%2Btq73%2BM9v2MkmYag09M8B1nkFoGLXX%2B13ZF2fdqWI3LI3gWUDJBu2tXcoLehfmSdlurbdpBuXzpjwZIBiNR7FgRUN0gcB72rsa0ZP89gX3r%2Fms0cOKRl3uP9114AZ%2Fanm9uEVUnaC1w%2BoH3nOTDyZmmXa6VpNAU35oj%2FwvDC0roXCBjqkAbnuO0ICTpQL%2FQHMN2ugg9MKpJfEUFdw%2F70rqEM9KPbuRyg2htj30MXYG8n9YzEdeAVmMNyTqvDztNK40fpT3Er1YcAH6VgaDEO%2Bem%2BkRq9cGoV3K%2Fq5FsfMVMs4%2FjSM7ZtWipLpGCCkL7LDbpNH7eHlw8Wc3uXNLAvgmsG%2FIbLq1pg%2BewcYJhQ%2BbPZ7ODL5Oz0EW3dDx6Y8Svl9SbGIQmmWhrmi&X-Amz-Signature=01959f67766cfd93d7cbfb5ff4b9c7467d8a8d7c25b5dac7a438aad8e48fe2c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
