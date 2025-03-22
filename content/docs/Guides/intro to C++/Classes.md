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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EWW72R4%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCkkLs2Ixax%2FTY0cJGoPWruxwaziMVt5dfmOmR9KLs%2BVgIhALB%2FUS1AsEOBpP6pWkYXp1BgZxQQHhtEBHENfYlOttveKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRmO5Z1%2BNf%2FTfqrTsq3AM0aDr7rPvkbqtLqLRlBqsZX%2BGSX6dWV2kZt9YKuMAFqhEvO9%2FtcDlOc4bz1OjLWtgPWxBcAjZJGxv40N30aTb6DzRtixuzfFxIb5BVXqt01JAVbJIx1qjiy137jWf%2FgBRNoj33V66MRCXUUsC35EXpP%2FaFNMbkehO1uy2b2ykcT9t1kXm4UPFa0C%2BmkB%2Fb%2F48chWUvatVMzFFzdZ5qbk%2FYl2DAljvQheC8GdCsQz17HisRSjOvtxWdzKOUcEJYVYCtA2RZ9pMZ3DpnxRpMqtsSfdKKvunD2%2B%2FIFG7FsgWwrZVTPy7clJoO9B2EoLnOt5GVdaFYVajd6Lu0iyuRYX03N39YATHkFnDnOjXu5xPSS1J%2Fzw4OaWrXLJf%2B92qfB8j84gAE2kH%2BlcTzi%2BujpC6LOp63oBSe3pkndhqzUM2RpWOrwq9h4n5EgeTS%2BLyvKYb8wUxYO7Kwtryw60fE6zZ8YomBDGoby1%2B5Uryup%2FwX%2BSQ6EqoADLTAoI%2FaevZNJ%2FsWjsZaNBuglNhRCiCAzey6CwiKUdOBU6UlsZ%2BbFZX8NagjjH6Ww%2F1yzUaR%2BVlImzNQDPfYWSetHIwOvFhV998IiIFcq58oTgfDDEL4oR7wzLE3lh6R%2FNfj3bbmDTD%2Brfq%2BBjqkAZDAn7WGmoIpOe%2Bc%2BhE24wcz9DsAk5%2F2PZ%2FUcJEVAtCKuB0jFUu8E%2FQu%2FpmQ6a0jABn5VKsP1I50NbjLCdFANMwqiafglS53VkjvIpaJ%2FjgHbjNjHaO1HXSM6RLzeN2JNawogBq7tLQWG88XTRtcHBw%2F7nSaK9CEpilelVPnu5oiyKpAfi%2BX4wqxDwWmtHxXfL%2FG7Nx9ko6JkOZV6ll4x0B3CgN2&X-Amz-Signature=108fd7ea3bdb36a585916b39f3fb31bda0834b22240634eba8b16d3abdf171ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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
