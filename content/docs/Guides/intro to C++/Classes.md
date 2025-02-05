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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVES653X%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T170413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCICW8tHF29VTdt%2Bxl%2BhvrvRUbo44ehX34ZUsXZAUkhYXsAiAK%2B2IZyE5dZDBYZ%2BXLNqXBvudorKbddSmByptxpG0g7Sr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIM240WsHsqsIr0pbmuKtwDSZQuQIpS6v2OY8IWY2kOdjgB%2B8BQeMvZcE6h0dmnAKaYRCNCUeb70v81YbFO3BLqI3SpcLHyP4j5oCYGg5pIaHasX7%2BWfCHr8R8SViTk00R8w4V5sjIqGlyf8e8mLvgaM3khrQMH9GSf718yWT%2BHTLy15Che4sS15K6ZrY9ulu0sjGEbN0ffvoc%2FH6PPljp8lFphrMFPU6l1wopEvwkcQUB%2FnBD%2Fudxx69OPlqrwnT5CbC%2Ffzsl%2BaPK0tJ7qiz0cEZyMKsIsk5tv0I41CDcWGa8rj%2Bh57ym9hpOEFthL14p61va9U%2Bdcxj0hLb%2BnayTDAbu65sjELeV%2FKS8ufHvZtELOg3XjISwoo5377NES81rmvW6aYfKtRRa76AifMTLpa53sQQupwsvjRaE8t8HpkFRWHijfyLDFqWo58rQySiNulBX1xNQ5lwKGiwC6xl%2FzDzzlEpj5s4RBRsOJOwPBIIMltcwdzoqYd4liGHzjhKTl3sIhzWHMZQwLlaQcMp3fQFuIA14Pe6H8X7tsHcm5Y%2FrvUEnyCRbqi7Wc0vL0vCCBI4a8U%2FcooARu74E1I9NWRbfQJjB6pp8xiCe92u0jHHUb1hpx33fZE3IOUA%2Fh5gN5d37iGBgthHUnboow2J6OvQY6pgGx7mwj6tSHek8tu5f6DkPQzxys8W8PbGXVRkox0ErfswbHUZRkuyXKNpxLPrdvkcjnezumg%2FcDwOiu54wgXAw0ZWJbOipz5P0oJvY2HRsSlQX1nezEfmbW%2BNXlVLVck%2F1YC12P%2FwolPM7SbNsX%2BoyZw7dPbregfU7jlrIX5MIEtN%2BEIv0Xve3Vrz9Wf4MJZ7jALatI59hEGE5Y2HGRUN%2FFsHGpeoVL&X-Amz-Signature=7c46178eeb0620a51ed1b23b7aa4993c10461ef17431f62e8d3ffba3293b2bef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
