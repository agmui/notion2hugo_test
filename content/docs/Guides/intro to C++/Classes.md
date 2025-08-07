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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634HODDAW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQD1gSpzY8bkusgXx3R2scSVLF9IFPwp0J8CFkTydfwvywIgBux4FZDut3%2B%2FsNN81imdO9qx%2FH6rAPvogum8OOM8f9kqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJAPJwU6ROeA8teS5yrcA3R4jb4bs5m4cQETJWBR2BPRr1GHO2vfpuU5dpIbl0D0osIrzTWfXKgWcpkxs2bH7n%2FhWEieG79QCOs3Yc40Y6MwBBMWxhaQyRCNAmR65bKbT3SJEH7TJhe5Q4LXwSXg5l9Nmmf0C3FMcctVHL9fzSW5%2B97KpCzjf2uJbnKlmei1eQLt9Srr1quNOLCeys4PJmUjwe7aciysADdOwVUVWzn%2FFpp%2Fh1W3HlQtpCmM%2BlKfVq76vdZJQlGcpQFi%2BrK5JD%2F1dSd69jm7WIQVKSfDxU0uhUWcU%2F9Pxt7HUpt%2F4uPitcuc9FENONUf4AWABLFQKynsY7btakqwDeKc%2Fba1cktl9t%2FpanByWy3NU5DXrDtrXRIl%2BKTTmcBUBRix%2Bfo%2BcwECkOzHGpcfaELyWBfgFL7atb5Wt%2FMlog%2FQ7HXOQskWjWh2Mw%2BeUd9s6uVtCUsOwlB9uVjsH5sEj6%2BXxZABdGNX0mboWuBb85KkXPSQw%2BQO%2B%2Bc0EyMxAO9NTIXMUli%2BEfy0rsq%2FUWYsJITqkWH3AP7TInDgZwD80koELNbhXWq4Jc4X869c%2F%2BuswkR2pWe3z2GSj%2FjMVLCqMFkLeB1jjrb2bzBHI1eTIzuLz9JiXQ7VzJsMIaHdQaCiF%2BK5MI%2FI0MQGOqUBToEZ1ajaoMg2M2qmEzsdhA6VrFSYNGjfalnYAzeIEFjWYn0ax04%2FOVpBNHAmeriPLC9Wggjbz4r6T2qLETcJobGsd3lh4jU%2BtXtaRkvSRetQLEZId%2FipGRD4IxAG7qd0Hnelj3bxo0AHWOGDKW4Wc76mJwgC9z1tjSR669BNQOsL7mC1acTKXJekFSjH%2BqG3sfh9kt%2FdkMOQNAyaL6pUbwjdFUdH&X-Amz-Signature=fcd7302dd07cde80267457abf885926a0a77ec0f93dbd5ac96ad6b61046f69e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
