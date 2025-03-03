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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6EC27EN%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVRk95o9iLapG7DDNtoXMYQkEvWtgUuAaDCIUbS7RC3QIgElqlaCQb4oas87x%2BRy5OeBHBUNpWK%2BbZhUIJqqv05I4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOFSlPE1bzhUyjN9ircAwjoNxerjJQ3%2BU4TqF%2B6dZ6iZ4cBg78mD7Esun7LJ9SZ%2FkF8fCNmYTW3QvlNZxiZXJS%2B7foDRatZgCh6iLB3a2NWQSWVS%2FHpDm0cJUu49SA8LZ6fHNxwp1V65zRafRC%2BDqsaNE1sVSik8ZAKZLFzGASN%2FQm7RIV2LLM4%2FtDYqsGS%2F15YWYmi%2BN7DiJ1XiZMX645YA%2Ffkno4acwCc0ZCI54pAxmWMiDNzmUhrrYtbuqY%2B0HIAWR%2F6OErld9xgTeKhMCq%2FJR%2Fxr5dUXkq%2BFptgocL%2B5tKS2wE6K6LRFzk3bnA2gxiNdy3elwDqy1cVJvzxSFWUYsObI0YtEyhP%2F3ox2lQbZMf6Xehph4mieXNR%2BjV7YuFmudCS5aZtgzg1%2FzFGTBbP%2BeQrmkRa%2BjYROvBqCgOvxOWGm6YG3Vp4nxBv9sR5M1%2Bl%2FgyhtENx9lxZicQ3%2F%2FWehEhRnurC%2FQQoeY%2BwLy932lqyJyADWM%2F9%2FBsim%2F6Y7rgq6MGKpWrGFH4QISy%2FP3NgPg1wiMsvr6bEbBXB%2BGKCbYhYYraGW4YjPZGyRqZZsDqJCv4u4ovj9ngu%2BahSFdbcRMQW9aDHGhCPly0MGNzygM7qrUXvNkzOWDovbR8kn4%2Bt7aKUFeAtxXFiMKPbl74GOqUBcpKZHIcbSBoDLCpi2FYCWvRYIxaQsmsKFjJ27SMKzYljJ9yEzWZE34QnKZohUiNoCzlaJoRw7VhWBQDcmijxxjJaBQ85O2fWaevrHSYBY66meWdJ4K%2FDcdqRNB%2FA2aihQ6DdMx1ltCtpo0UOn2GpJ6JV8rCdqyv%2BVr98XwlhNORES1EIhfclcYEwytgpXYbdkdxfTwxX77Gj3NKmSKMIcEJEUMix&X-Amz-Signature=6fe59d293e3c556a120883d20ad4089759182ca3c2086fd3a6bc05f0155b2ab2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
