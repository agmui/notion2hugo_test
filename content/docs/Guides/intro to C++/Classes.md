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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LSG56MA%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLItKoZPTEjdg7z745OeAtcHS6AIgHr8G3ekK0KZkTqAiBOL4TqMzCI6nYwbKe6FZbWYMLdVgUY4BTrbHFBAtcBJiqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8r9u%2FrH%2BS7jwRCaJKtwDxajJt8GcvNtFLi7bt2SlhyLK9BiLkxWZT%2B9v7Zvxm09hhT09SWf8rGcjlXjUB6n5gXwCvoAeX2gw3%2FdfJr9LBITK%2Fi%2FzyMhGMiEejrRlVXLAZx4RA0sab5lbATrpYie4U%2FgJZI969h0d9wPLIJcGjkiGmJIXJQ%2BPe1z5gq8Gc4iGePU9coNZyx5WWPMPej0S6woSQIiPAO%2BsyJqycTtPPBT33xuZ7dhpB59%2Flek56tM4Uc0s%2F6OVh7CCtVGjHvPhhQ1ofpHmDr5Q8Uj7Z26uMzo0PGysrIsK2eUTBzLdRZzXcqY2Vl8TDQJAzlTxtwmWiRo%2Fz5mLeZj7xCtLIREJWdUa9y99wwi8Vpj01%2BgcktA3v1g%2B6IAzWzLJ9wE6y0rbHx1wRFRZQOzXiWffhUGRD8MhuCjfF61Bv0iE6zPtQfoI2CQdiZ2RTmRRhVafSp448GZU6HN38RUs8EE2zddobDzYnns3Y%2B3tXBzIZVUQ9464V7%2BT065%2B3wf1xgHwAnvFDEmTMPu3ssoqrg1zZcWA%2FlaHfij%2BFwj1AcmDcZNL7CNyMAFgpjfFj5qCfp01FxIILNqilgcob9ZFgBCU0d9lqAqWfjUzwM1bntuesnE08YqXYsiysnMKvsr3gXgwoIW8vwY6pgFcLWttpmZJg8khhuJqxIZQhPdkTY2GhAlXOZqp4%2Fayxc%2BcpYgX5BpAYDHpwQV0wx%2BSjgf0%2BYGeU1%2B8JXMiVsDUp5uGBSqr0VxyHZih%2FtgbIWZjSSGPx%2BlpkQ%2FtS%2FcpKV9LkwlatbvG6zw4TqSXF4PdtiFGdk2WlAVt%2FbMmuQCepaN63de3ksYcC6f5Amm9ncnCmT76A9oL%2B2JhHziBJEeUdnf8tIoK&X-Amz-Signature=1f86861aa57d50f00110bf7ecde933639a7a4040801bac6ba181a30132b70385&X-Amz-SignedHeaders=host&x-id=GetObject)

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
