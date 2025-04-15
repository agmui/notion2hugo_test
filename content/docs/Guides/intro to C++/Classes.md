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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF746R3L%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHNex7KZhu7rrYDJzbj%2BUPV0rjUXz12T6t%2FEiGJ%2FhT6gIgdq5COIu50PS3jw9Kv%2B54W%2BPAUqWUtNT09bDVR96vAHAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNUVObCjKxsJnvwCGSrcA6BqQF5J5NH3q6InqvHMUeiDB0WXhKT2qeCnzXHj98gO38c58Bcwglp0J5hxOoIQdxvrBAuoS2Z5ED4r433u0D1ENL4u0SJZ2FP8VDd%2B9XgUYfOwqev8op1aKGBgGUn9ZeqFzo8xa1xR0K1Q%2BYF4M3WDg7Y9gzdAcJUrMdrQr1k3%2FIwHN6l%2FEZ%2FO3%2FPh7FpWcf6GS79G5TaSGYRF9APieMTQIGY3lefsg%2F4BcQJGNoShNUMrJ7C0%2BTwGQbklvdPB6b2AWP1tPWNCCjUvoczawIRz4tLjlI6nQ9A2xdYIXo7V2ZHq2mGgsEdC%2BW9s73ROqoVdmRUUgElnt3ql8TLRbuFpxhy9iI4Cl1f1dK4PLjHDBScYK3XJOzJkJ4tSzMYx9eC5tr72ZmKqykiScvRm6%2FXZdhXYDRlLOJQqNM9Y29%2FZ2%2BvUzS2ktjU%2BokR90BgCW5rhkA3gecjU%2FGRFSxh7UjAodbr7snOLnNrVkMc9I8OqW92YbS%2B%2BfT9iiM5ysw3eBJ%2Fe7qQ0kZWidjXjZC1WEGvaNq6iLVmDWpfvDrFOjXT5EE2Jw8hrPK0rXtBQxz%2FXybsKgpHOVONRBvHbGhrl7YRvYGhVfoQKC6dafzq2P0YljE%2FXYILKys7RcMuOMN%2FW%2Br8GOqUB%2BZ1zvNNYo9G6av9dRFjzRi5J22Z8LOz7XcyjbiBxOmUVTj%2B5ppnl%2FBSdPT9TqD42o0%2BWXmNEClSnZlPt6dv5xwVON0mxkHlZBc0OyYxA9xY25kSsAW%2FUzxdc6XCjqcjXG6cVEQqER%2BF6ifOsqVS1WXYy99B8PI1gOLVvHt7Rq48RbdNTAj0RwSfZKYTBfTRKBzGWi0W0awpHYTQgrOnMumrBcR7u&X-Amz-Signature=c0b465142f7c578e708f381129c81e6dcd151c444a93a59f31563a7f948c3875&X-Amz-SignedHeaders=host&x-id=GetObject)

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
