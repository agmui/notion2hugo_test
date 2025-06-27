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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JEPY5TQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIFlveS0Kmsxlw0PUeEF5U6cKfrwKySVwE6PFX80enQjyAiAH54P0Xz0dZkVtTsgZz1VCCv1pgfKWGoohRe44HnyWfyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMvzMvMZsVX4O8hHnFKtwDoL1sfML2OqVHoveYtRFz5Z6UJjwhNB%2B2jGsAAy8oI1S2ZTzUl%2BG%2BdIwmL56HQCrSbmNdV3AdyycQMfYsVH0VyCsUNtkyp%2F7gRwPvK6zooEKgQ2zkImVp%2FkK%2Bzb0GbK6KUzJ5368zG79P%2FFB%2B1EO13hQG9w8QNRvLqXSckIHYVzDYONJAMqCp5vtvz5UR%2BFs6Mup4Ut4oN2M%2Fek7%2Fwo0ZSj6TG5vAHaXWsbwAIKptGe6dSgwKOHcB1B4kzEjj2ec1ccmxJJqT3wIvitAxH2w8e4VtGlc7S77iGi5rbilXFW8KnLVNoX%2BhZQ2IF0ZGUWxrd0GU%2BocEzOijMTMESBHnYboNmTY5ko4xDE9osPM4u2iEekx7U1idSNth3ddzDNKCUDuDRK0bRHkUdRiaKcVd8lyoWH90JRB9ZIuJ0RrqxJnf%2F03%2FAB6V4ybAAbjqhRtUb58k%2FBPPpkVHLY8Dm%2FmAjNW%2FAFnOGefRA1YiB8%2FyZlGQGDSPqwWXfKUv3k5BKl0ipfQezj42LoLgnY7TrNn9WAAmcITQlwLPFtC89JSIpqzY9Fjn6jU5Df0MEwiq1Y0xgr%2B8MCgt8HVV5Q2AcBK5GShzgE9R6%2BapAKNjvvnOc%2B9CrDOouYWO8iJRcNww5KX6wgY6pgEFC8DDzzWALs3LDtNUJIitsv%2FpLncbGWKYSS0VMBpLw1a2cd8U1tXJasv3Lbp0uot%2FIxOII%2FfAknC2nB6drs1h1Zr8gfFTsCy8Kb9Px4LmKPhwFo0HBi9KEf98Ynk0Sg5npiZvqbTKiTDp0lxICiIKnIdP72oFEfF41ASVKTqdqlTZdMXoEos8OxrWS%2BtOKjQDL%2FvDzA1zJh1Ni5VuJtrDwdpQTU5Y&X-Amz-Signature=073947e6833cc87642f45250063584da03d0252e72447eb31bb1108241fa8a65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
