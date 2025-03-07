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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NRSN6JR%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA4X7Mysz6k8TPMZJQM6KSnq5%2BuDzqweIoXW5DMoc5CAIhANVGb2BqsXeUbMwn78Sx0kAr3AsU6Qyb9%2FsOaOkrcWHAKv8DCEMQABoMNjM3NDIzMTgzODA1IgyBgLNGlZv0n29J3DYq3APWH3nh8n2EC0t7OcFITa4FdMgRRPzYdGOGxOzlKRIqlSoSv2dA7aVl1pDDRQOZCMnsTdQQXhR%2FgMRKU8NDoA52VUbIcoQbgYSFLEqDARQh4Z5PvSwtRjX8Ox7fdNqvWlU4tvCFzTCFfcOLUimFmJ9kV%2FL5fjLx7EKN%2Fx3rC6myJXC6v%2BYdcLU%2BkUlsELZ83BdFiYtCt98xVJpKRq6Ywnku3LV6dRvIiMdsPHe15v%2BmpGyxPKHLPsrb5xSFyfdNltH%2FehPwg9CS6tJ96jdJ8lpAWYDPGVWRqYnLFny5J%2BidlTgRMSL5YV3xNta%2BN7QQysXHGp%2FESsb3XqqU%2Fg1ztcNzZbl3oRm%2Ftzf3BdyLJxxIIXlndZA%2FsZYFGzpZgmMs6hI%2FaK%2FMFoiJdYxHkH6u%2F13wFFm538xnMO%2BqoaIfUf%2BgdRQ%2FqI%2BOUnkCoTmeFCWFUyHBbiKMQ2L57UHMTL7l9HTno0b2pzGMxVwFW5CPMWjG87%2Fsz4FiqLDcDldeGCqOJmuQEgSK6P%2FB7YV4%2FY9mjwLhqfPGee4tnQi5T2piCq5Mle%2FOTAWNSY0joINIvkKsCpACFlbhw5tPWyi9v8PCN3m9l8Tb%2FldEspLNo1aMVz2JGQq3%2BgvCBeUCWkB3FzDEh6u%2BBjqkAdUr1KJyNgGzfLkJmV%2BbrJ3peFLQhjhduP%2BvSoeMgai71ChVwM%2FbgsGegoxtGlGNVtHccvOcxXd53KA8WRql%2BoyhhYnN%2FbTbz5KJgFFQkrz6c7Y9IATA2%2BNWDVRtg0wef1OyIUYZB6A4SWZGxyiAIghYIwQqEkngneLn%2BdWIWB8MrYKrMCtRWMOvbuWAYCWB9cmjSuKzZK1QC1%2B7IJGZ4WqQ7E69&X-Amz-Signature=5c07bbd7da29c6b8e9c83bf9fce4fcee3ab5ef8b7167681c03ebb3669b71e637&X-Amz-SignedHeaders=host&x-id=GetObject)

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
