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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTFJPFWQ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2uaRZxZvt9dd8ap2SDb0Nl%2BE%2Bts3CNqi4BcqBQ%2B0PCAiEAz30PjL0Wdelk4Y9iDBVIxTLlIfsHRu5%2FoklC8mZ3BS8qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmuOjNm8mSHywkBhyrcA7TIF7t%2BCLyB%2Bik9cv7az%2BlL2hzgJ8utSsiqPVrH2J4igRFwg5l%2BUQAYxBMXNQtuXQhNqvnXDBIegHuue1e53rZKytHJ37QH953t3ikeioMnL%2BE9g82jO%2BBM4ifVkM%2FGrKGY2CJPclAJg0coXP3tU6kaN0fm9v9r3tFx3GjIykHkr1DkUZT2yKiqeauYwWzTXpANw8N5boURnHOryXKVSf22kFWOo10496IOQqEuG6KONjRYgjqvYeBsnMA9F5HhK13ZqgM3g2QgZjaiGNFh1ojKIHeFnzHeT4jXSsG29a%2BjXb2YLYnmFz0m7S5Dd%2F7Uc89LdB2XgYXHuuxSnYQtkR%2Bmwo2aCxyq1k3E1lb7O5N6tTi6rcdumip%2BW4rc3gXypoKpnTG%2FrmuHPhV5%2F2jVbKC6%2B5lMVDipZ0W8v8H%2FBNUad%2FH18jBiRlhFso5Xtp6LahOOHKxbyAQ%2FOOdU72oDnbz2Fz%2Bez81eOzuvakFJciigAQFQNOAoxI6Ck2E2S3lptIW7RVY1EskL1Sw8fCmviwvdm791%2BlD6YDdnHn6myPhox2I%2FbnNBqP3IPlQd7gchk9CM%2Btrpo%2F1N413PWWN3BRwXNO4MfXtpLmpAcrZ8%2Bdgfmg6L8QmAswqNlrVvMOGcl74GOqUB5vVtz0M7NxBKdXzgkTI%2Ff8Mitda0kyOe%2BZgJDrnoDfxBK2jrbuwzoybxkscTgi5VlVVYeq9D0Br9QymR98PMYq3djv5CAbSOKSdk5okO21XoK4M3%2BF00U9ICii5nSZHunHd5DILrBWA%2FDX0Q4PurL7AlReoij7%2BzF2VYQCRSp3h9ByKV%2B%2BChLcHryrdq8M8XMMdg42l6l621ejKAqxZl%2F9%2B%2FbpVD&X-Amz-Signature=cba43fa92be72838b5094f221c03ec99a107354bafc926e7e0b4664db5c0f856&X-Amz-SignedHeaders=host&x-id=GetObject)

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
