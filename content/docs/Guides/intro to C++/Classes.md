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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIEBBFMU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T061422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCqJxRfEvh%2FYMdeO3DLktn05tlDr6rZmX1aRNPFt7%2FMPQIgITB5VochGf5ZFQbNZ5S7Ibz1tbtlVG1rOjm1xBRt8dgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLzGpvXyAmNz4%2FdfMyrcA44DMtrrGwMQYKSY2jiSHJmDT3X8LOchLDcGP186iaDzfFtMK8G9aZUGBjixUQN5ueNkEZB8NwSSyDNQYAFhLmISpjyQAPNDk57TpL1%2BgKz9xNi2vqWMpJrepeHyZF8%2Bm9qxhGIhuNWklr5tImgemBuZhSppkb6NKRT7fZTMF7JPBQkNgbaTr3gGgbXrNYmXux9DVwQf3Oq8lXKYrIr6oASPu8BvIAypW6JW1UEQ8I%2B%2BSVBvE9M2kU9zSB5Ds9LAHUMnJ2X1qtUl5CgntC3%2BKGfxKN4SDCrdxOWT1iuaEI9yNvLOgwZqrv6atOE1ufkqHwPXGufb3rpq345X68a0HjdOVPmuazxA1aU8lHaXWOzdmjv0y0hQ4nqZabpfRkzME1mr%2BUJ1M6Eh87qRzn6xLHuWtTln7Yw9hiHNfJFxQe78qDndZCRL%2FZ11aq8msdKtjfm%2By6f2V3mTcu5jfuX5m6siXE9LzCXoTSvCtVEqWvLx2nsNw8PcvRkTkuW41XwqidEh4eb9S6TC67lQVPgyIKSMpjU0hpmVw2zgZJp4aheSDTFLNs9mEBXY37rAViuVZjIrEp72djC8777iXpt2q6lBqfS3WovKqNCjcI9ATVkzByvATY9xNocfR28aMKH%2BvcIGOqUBmz2xKFyMU8Pd4aRbchIH3W8KxRsfp%2Bg6K1HKvz74TTnNpLPeFlKVdzAjJfGiKTNR2rQBXqz7mjYNJxyodCoCF2%2FCyiKN4dUVOz3IK4W9mRx%2BIDypTRKbjPM5WMLPgq1yPFwmNxhJLGmCbWrvzc4L3EP8yndl862Hr%2BdJ%2BUJH08DeTpAL2Q136n3Vl148BQ9ld%2BPjKWz6jd67axFM5kWgUFm5IiNt&X-Amz-Signature=3c421aac67b51a2bb94c98fa6bc59212f1b2f7165e42f88b487bfee131b39007&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
