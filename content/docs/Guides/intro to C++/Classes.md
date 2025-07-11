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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NCG6WSX%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuqSFsCma06%2BRpRqMyNakWh2MfNY4uHgHeA%2BslcJln5wIhAIwwArmBCZGyfQIHj%2F6LcBSE1709OCR7bGOxm5lfsXLzKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKOYBkNrTW7YbEkqgq3AMP%2Fg3ZXBbZ22Qzlq7o6%2BBNjWZzDBrmZ57SCJhqwYmm8whKIgJkJvWy6yX5AquaEIu%2BJUQ5UhiwwEoB5KpzjcsxEZ6RMbtryt7Ah4pyS%2BVoHcXjiQ44NM0CHo7DeQLlhejBaMPnxQmCwyY48TitFM62xZ13Ed%2F6Dbuw4I15A8%2Fh1ZsUbJdJYA9EeTj20CI1GONiJmcyoS9rUch1OMWV%2FJJOYeBn1wE5l0jqk1%2BvzWQQkOjMx%2FLt5mP%2FuQUWpmJB6stGNEwX8DeXtkdjrpuRyIAddg3jChGjIf0z9Fnt6ZLfJb6P9ArBwUPUcE19qNye9R4HJotqlWS%2FuWW6vM%2FV0fIRSPviDTD5zEofklJAF3YSchpzFN4pdH99iPX4qALGAgxo9iwd%2Fb6dU9pwuyq8mnqIzrjO04XSE5GrxWlNAZHBrskcUwZ2yn5YHbxXGlH1qLd6Sy6OnZ9O4Y8lZnQdMTltd6MJIpCl1oLWi4o93FF8mVKMhJNv3CoiEoc%2FL4vm%2FokaGLZuF090odqYXAZv6WnixtqO9XJlns9M0lNS1OiB%2BIXMp3rshMJ1kJmI0BhJQiroXLECJQbLOux1ASkYd1qiJLpBrrZlK4b8FNhSAgAuhaaKDaeKd4n2oGRPMzC1qMPDBjqkARo5P6vl%2F8jbVgVSd4kJtZ1TykhZu1AQtK7Q5Q1gJ60wA6Y7efS6xl0JLuOjWFFa3tMCnTgc6Vxz3GcNIiL3k1BB0viomttFBBkEA5aws%2BpekFWXjZS7cl1aEBXEEAaHNNu3vJUrrTclMOD7N5gcM%2FoGpk27WgpxIEqWMhkr%2BOIMyxVTab%2FfASgFHd76qBeEyjZQAqf1bPdyUBpaAwahvfABla4I&X-Amz-Signature=5251451c3056eff7b5e8353864b9833d4d17b73e31e51264d8892367301b551a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
