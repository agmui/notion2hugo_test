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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKYCA5JR%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIB%2ByPpR7dvThNz9TY6tbdmd51Ci8oNf44Vjx31zV7L9ZAiB9Kaa4lyiI7a1F0Qwisi3bRtIo8%2FP9UB6uimzkax%2B9biqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzQSKjMtPMQkfqjpzKtwDRf0aFd6c5xRt8o%2BR16HRqYzjjW5MVArQ%2BPF%2B926nP9jRJtZ0x95Q4MYYwMJk0ngGNMHhHBhRjQCZHtTn8dlUV4wI9R%2BQ9Z6h5ehbmssBm7%2FJR29xvi28TRIyN0XmKSSJEVSjAPwtkMBjLCBUilc%2B23Dp5O84911Sn1Gz6rqM5999n0K6k7F63%2FrXb%2FtewALoCABsHRsAbymT7UqEAVAOEQ7z0%2B3VRWPRvVzSBQnr2JDljC0dWfjXaTfKGMtn9WQYrnthaZWOVo2z%2BEA9rV9A825CW8nmbtawNF1RpvjEP53JBpD6yZ3FIOtX0qhXe65RbtYnGcCZ2yY4AKkU7tnPS49Dq3LbWLjOf3D5EOoIwcMj5bIluRurgACoetNg4LzgvQQcMwYy3rkuNbdggcGNzHGgH%2BvFmTu8ykjyjmsJZyXjp6AVJ%2B4fmTY2dK4jcovUF6wNpp2bMrdpEuYZILmIQLZYUa7zP9%2BK7B7oYL56%2F9WKE9hreMIdmALdt5RXW5UpDSL1VOFzWMC44X5Dpdl%2BjfhCMfkL%2BLCKwItZF0FnfcMTcDfI3Q6F32OwoEuTXLtx8Mhi%2Byudp0pjQBt29J1lwghTXNm6%2Ba7131jldUvMcQnYa%2FRaxtqT6n%2BE5Lcwkqfp0AY6pgFiaoWukJz%2FL25izMJHOz8k2rM3f1LbB6hL%2FmvmxyknnhI0srC2x1oqMVVaMMVCKeUrZrDgqFeXOpiFJseoGt9Wr%2BCM4%2BbOZ39CDBJdTTLv3WBhc2IDau3W1%2FXQDyGZW%2B2yNTnjVQyFKDbYAwXM%2BNV6B54krBKqVj6vKuMSskYNwFuOR%2B9FwnP3MawLFqlmdGCMMxLFALg6RAVVrwFvdpl2cOOuef9%2F&X-Amz-Signature=7e71124e75b4917df21c935ed96870c0785b5b6b7b2c94e8a00e4cd4eb34e9bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
