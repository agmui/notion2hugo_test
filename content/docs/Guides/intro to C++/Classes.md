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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSH36XHB%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T090856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXB0VboiX%2BcViyxcmyOBiqqydqkzTBHY8%2BPdR5PoiyGAiB7S6BMZfwnYFshXJkmztBqRAoGy%2BwscNh94R8C43%2FkhyqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU1r7lhV%2F0IOOuDHQKtwDKvFKgFM%2FAql0TBr4F2weMyg8hQf7m6S2zK13gO7VxJQK%2BFpUrFjuDGFJDH35Rd9SVAQY2vLK7yinelX6oInpBEj28xfNTDgg%2BpB1QH3VFtcI7nsPdhnv9svTpmakted%2F8L3VuZmgurRO61NYO2xyWYSuGWd%2FI5xHyJoQhNNQZYVL89Gx25AheGSM3QTindJKoJ%2B2JZJs8ipAgRabfq81RUQLYHN2c0EUV4U4v8sdIOQQgTyNVZvCNbOsE78WlF4MwYMTZpJeOXhAQk1pr%2Fkeuj7UBbQ%2FdexO8Bxvxk1ykO5Q76mxacKMrL9jCMnwRzGOTPmSHkIVGKUKilBAY%2Bw06OAA3zGHG90v6qttQOA2s4OopCmikGrtt7OFvmM%2BxvFgtC8YJNZOyuiOk2pJoRkdZsFGqkj75aXg1K5rEtEevq3rBJU5xwohdACfABUHhvDkrmGJx2kZAG%2B%2BD3KIgAI2MR35rNjdZ5OTsrF95a9JOI8ILerSdEF8GXgGbB9KVqUviFjzaCSBaMzupX4xlw1bk9nxFi0bW5Te%2By3iQLaYcJM12Djcuwqf9rw3iJuY9zfSR%2BdcsaHWNuNqNkoqwlIv%2FKLkO%2BJ8cB4G03XIW0hy7CXO%2Fqi1NCXiQPM3Osgw5dmmvQY6pgHJ%2BexrzV1mbxwfze%2B%2BvifYmDBzpmrMZaGPRGrehK83B4NpcaAVMWANhvphTus6H688N5Kvvz3EMgqOT8XAiBIezfsslP5NgrIEBPXiZhCCAeYs8QGJD8BxQmq8KG2y0zIQgXTiXXO71nwSX1YsRwbpM8h1V9qkEZayRTJcV8HKAaLqiXt1dyRCIgbcidAegKv78rUEr4h3o7tBPqHMUT4VeRImkxdC&X-Amz-Signature=d233f9cbb799cdabc5e3f50e8854a0d987c28c30d723bd6539dc9efd690ebd5a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
