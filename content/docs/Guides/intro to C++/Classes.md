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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PMXLYHZ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIGHD%2BEQV4CmKVpA%2FrX5ZQhjeejR01CO%2FWpP4kfCVjqsvAiBHaxvYaiIPKXYI53kLzB5vZZyGr%2Fl77pO%2Fwqt99akIdCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMyyi8TlE7B%2B0o0OdfKtwDqZyeaDJVns4z0NMXwgBj8yLw7poQdos%2F959J9CSZUBxMY%2FQ%2BRBGE5%2B1TxBA9VJTE8cjwsPqE1C%2FcDWlenrWXoofQziXvzm5wYr5ObeuG6bKITI7PmQwLpRzpKVMCVNtyOk2XxNAAuCJP9%2BpErEd8fByaotZw%2BOkmFSrULlG9H55o4dHdsqk11S4uyvPmzOFUn06AQNimj3tK9gGXis3hqAlTx56%2BRFF7PXx63BkP2HCCMaFH6jFeSxQjcT7olyy5SskeSec56BTTWIN5QshaO92HzpLzn5aDyLGru5rcz1MZvycrtl2qNQIoQeircYZaoUXmV%2F7axyuLoaspoZ%2F5pyE%2B8n3KzLKcy2RHTvIup1aOPtjoFdp1NaQcvI0E3mwyjYL7ZLQHuITteiticN9u%2Fsy1U78W%2FzWxl2uPJ81ddzqc%2BcnVRp72r2uC0vDrq3AR%2FUJj65XbLU7Qyj1abqwubWbYKBNvl%2B8gAMFn96h5P1oCjhzDX2JGPeJoRvZtTr29ve7N9Kov3RqHondvETLWmXt3HkbqznSPnKpMp2mN%2BaqOmcZlcL8WPcixJ2mCofeSLi8YVXesJMbcvw%2BYP3DWTdtZgdAtPy%2BN7anF%2Bf%2F5p4wdS8IFi3uVSDv4Q6Uw86rRwQY6pgEJTpiZQdgZJuwxXYiCxHfbriK989H6pONhERW3zYrxinnvg7dZ39K9Xu%2BiiechXE5MYDzuycYAUKMb1tji6WYbkhvanvgHinQdox04gbS6GtdqkrCuvkE62UIyDZYGcSba%2B%2FfGBE0xe8upnvO5uz%2BmFkE2k0xifR36za1LdevstdMOvBLbkjy1F%2F0DI6nnObqcJlSBjG2qJOORIcP2nOYc0H6wdj6Z&X-Amz-Signature=b43496351f504d8060a4964f1d4c1b5a0129a216e2ac80e0a254b92c1c17c259&X-Amz-SignedHeaders=host&x-id=GetObject)

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
