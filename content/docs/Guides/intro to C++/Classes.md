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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BDZRVLE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpH0sSK1mTUW8oNnLjoCzuGCoUPLGjusI2ZMmD5oohhAiEA%2FZTw%2FIQyPlscTvY2AAgGAjWLel3q%2F%2BAbAF8%2BY9nf6MsqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIJJwHWlSXpFI8%2BICrcA8lLtxfFTNIKZ3Gg%2BVym2qbWHgEWa%2FHlBJPnVJGlGVcRKgkyBgCdaxb%2BUT%2B1TT5XfHmiE7yldbslanvSm%2BWaLKmS%2FzUoxEon0wQFHP5rXcX2SJJIGhbzMjlC%2FVBY04oQpw9UMIl22of%2BSJJPBzlG9ws9H%2BF7jbGjuvAIALOlj6EddN%2FgbJbgqiqVfIi0a0ecrlFX%2B2WMsYy%2FNaNfq1auYAdbh%2BYTXgmYY4ds7v6UQHucFRhJ10iekR0R2SKW02E7SSnND3Gp43A4iGCcWZNAFIbUx8CG%2BFP3eiTUF1SrdeL1eU5Mv237CMGLzwq93CMtt1dxxhGrnF3Aybab51iHW7J63CH08wQR9nARcKmsveX6UdnhYGoyHpuXQ5G6w2IR1ZNAL%2BhSo%2BurefLrGzyngO03INXO5QPdz0sMYsziwQ0%2FyUAsQE4oOm5NtpRilLqZY3hu5TRpcu8551zM1uOm376kKPc6jgvHpbJP%2B4Zu%2B%2BJ3V60Ep9EeXmXNViuIbiNI8Q5Y5Dw7ot%2Fc3ZhboWCLE68a1LLRrizN%2FbmxXf67iWV5C6sO0le%2Bm8kw9mX2ZpxozgGlNR4Ni23KilCUCelooqgvcMnkKiFCB82EMfqWM2S2629BncO7oGlkbU%2FLMLT9hb8GOqUBKlm1zcGQvJjpV2FmlfCa5bSxsyTcJOB%2BtEB%2F41B073%2FoK3fnl8x6%2Fyz2ew20qEPJkG6B8yq9Ubqg3yzJm2q9aMKXyQMXr1P4LEYAExrUvkCVR93JwDf2HOUA%2FAkquLLEbSU1aF0GPNq6pYUGV5hm0HsUAZI74J1kucrYR32Ze3EnjHKXsMOLEcJqjc8PzNJFKOKkd0vYLe7dbZkwn%2BwC6RqTf9ZA&X-Amz-Signature=603788e0af2b06d3e1073a22408543d3f8bc9d3c7c6fb218974c463be329fc54&X-Amz-SignedHeaders=host&x-id=GetObject)

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
