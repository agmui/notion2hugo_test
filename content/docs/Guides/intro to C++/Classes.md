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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQGF7R24%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICiOu4C6XxN6Y0NLAX%2F%2FJ0MVr7kWTYofhnoSJ9hReKojAiEAiU2c5ILwuQl8neS0EXM4yxwyXyleDuF2H0IHyx%2FzDj0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNlD%2Bh%2FLUBg2Dn%2BtyCrcAxFxb4MRMUgR52L7OHo8bDwLyJO%2BpnzLGQQUgWFEdUNoEIoVeSC5n3Uz2DhsbVsnBVK0oNMYxQeVwq%2BeET3Kp6JNBrbqVU5ma0vxddrnz1Fya5nwurXaLPBxia4WxeiOfacQ2bsDjSQufuuxRZXtP9uauzP8%2FEy7Cyf2M0Ii1euOB5xBbS%2BmPfm0k7XPs7yOjUPJlls0GvjFQdoXr%2FvrrNsaj96Y6DMbsncqWL42cyiLYV30Lwtn49BlOTpVKk1863UgYqqLsOZbTRYoPYAQPquzHjLLrbZkxj%2BBTbpRn2%2BKqd%2Fta80elgBiR%2F2L4SPk6z3jcoDOZgSMTWda8oWpTF8WYywGe%2B23XZvwOI0Om9872WqkJgVxxru5wOKOa9Bo5WYcMjhS2Isa9qsx1ZX4yuL%2Fw51R8WghAAETX9%2FB2DjBqUraX5ClKJSaUE1qfGV6g0QpB1zQYH%2FBBMd%2Be%2FApWnYheZmkM5GGrvcD4Xp9LLBZ1qJBflOksm%2Bmxz9gWul65P9I6bPNIzYaa8wjG7hoCX77mlOLDM5Dcqefpw5RS1UFFzM038gYQOdtVgmkDrKcHwwWInn1PMlwKRKUQIy%2FjR5hNQew2S3tJojTSfBJKS%2FgJW1RAFehOc1lgxs2MOPByL0GOqUBHic8ZYEgedgKtSzkitnRGqG%2BRjeePCkmgZxI%2FiOPDd1WgU7W4NoQ9GInljrIlogHIdHoBTqPa3ZmAN9noz5aKs9N0sgcLRcUVvZfYgP8tliC8Q%2Bp8rwbh4lu4pvIg6wx5hXy1TH0K%2FlXyz67pgpMYz5WdPA6lU7AWCpuMfZcp5H9eMxw%2B%2Fzg6vu%2FMCpK7mZu6AsmBrhgm64Kvp8gmt%2F1TwopYzpq&X-Amz-Signature=96e066cd77488058736041b4719a66d36a0048a96f43ba4e0aebd58d80e6e902&X-Amz-SignedHeaders=host&x-id=GetObject)

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
