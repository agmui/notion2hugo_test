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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S7XLEVT%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCwPsgLEvUeUxQ87GhHF%2FWsEBwBy5MiOrPL5HsT0ekguAIhAMAdJjpmg4h3ITzKhFy3tXmLAAlHtPQtf7e%2F7rIJnYWIKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxW9qbc4%2FwCec5WkIwq3AMrAfoyXlz5Ut7hoTI4gf%2B1qzLzeQq3kTEjjGV4NNi5CHeQXzjXtk45cyJ6eSljuGL5Ersej1lHzOY8Pa%2BXcPKQDtAAqGLw7XBVcmetUlNCK9G2dsTVM%2BcJJ8mRb0ClhPOkvYh6fkyaSmFqhk8gD%2FWel2QLUeiWMcDWIV71O8C5hlSiDz1eVG23%2F4X5QKLdHfJweJN7IvWACKmJgDXxdLrlvj3Wwd0F8g0WzaDtSvAfbFa8G2mOLiq0CGHvls0FPxz5bdWnNBLcKJDGxf4B%2FcOG8dK24n%2BmL%2BjAaze%2BSLH2y17he%2FeIGawngbB1pziIq9N91OErzZgvzeUz%2FQSUkD66qL3KUcNTPHoMnNlgdxPO6MyhaEbT0nkciAc%2BtOD92QXOF1XxvMS8OrMDrcNoV0ETYEgq9FoPBb7JxxtrTK4FKxb0PccAtxRIEf8aaAVTQKBRKvfTD8WR9WNNztFo5DIZh%2BhQ0vhZEEJpPZ%2Biw7GxOLpLHyEkAqvCWgBDQHXO06wI%2F3eOCw%2FtcLo5uxvENS06Igodh3rlpMMll9ahBjJHXtsCQaipI6pU728L3zKuFBCYyWuD4lXXHyvFGucdglgPMrK3T9%2FPfi26C%2BAa1NnGUVuncLi7cF789qJV2jC97ZrABjqkAWqnY8JAlTqeHbRA74D9Cndf9zWwU4aetekijImnJiijVsQrbbFcBbOVctJdxs5YN2rybUXrp0AvKS2C0HZOohDI4Rv2epcYDEDHd6O5nKK4Qa%2Fkwlh6AWD3VP2i%2F6G7jor1UABmw3Stgijr3KEFAfw4yIlHSp8rtmrW8GP3vWsD8SMkjBOVavbBGYyjxZS9JOfcnJgbxqQ%2FTMTm0FFVv0Za1d6J&X-Amz-Signature=e7a04ecc33bbbbf31a8d52539e1e4ed3dc2a2da4816add4eb4d37a3d169597f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
