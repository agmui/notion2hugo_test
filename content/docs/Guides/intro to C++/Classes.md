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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N5R3WHK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T070959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHyWHzTCdxVXqFxETFc%2ByY%2Bw1eCqyQMTh8tEw08YythgIgA8Eb25lDLWqDI7MXxjqkCBD%2FJBCb81mLEddM0y2oE6Qq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHkqqY0%2BK2ni1vOFBSrcAyf50FrKyLAMJWctp4JmKzV3kGqnrpPWnYOGYoZbeXp%2FpGSYpHaXkNyFkFqdv0L3c5azasIjVAmhciabsRoaZkXVSk7wCfJBygXHNMxo4HKJhLqQVLXUfvqmUPfpuLWtUmksl0cnUfcQHpVpvU8yg32ulWt6c5Ag1Ay9TtTlVNzRO7ZGbyml%2FRtN0ob%2B1U5m66EYJDVtwnNX3ujS0WS53U1bnNs6WG4%2FNSRZ%2FowFGUZfP96hTBYUuOeTrt6nLnmckN%2FH8%2FHs9oe%2FAn72ZUs3C9mW%2Bkmazl48YaIiHvDopqn1%2FZ5a4PNpGrmnvR8xnz9mjnpcmqHeJXHh3ODAUSZAoWo9Vpdp0dApRxzXGC8mcR6RzfypsBViliEqg5r7WwwaLPpeyXCvwQ3hdKCIKwDtx84MhLFhX019KErxSlWxBkbp0nXtwsYcbRgBU%2FbNUaAvmcabHKnVlUnVNtHjeYGsN5PKXdCuM0q4DvfPitJi6KismZAzMFuxHz%2FqTFNmK6qj7HXtfQV4SxZL1093DVTn8CXXizWym2IVV8mt5Z4piuBw%2BNj69%2F9h%2BnDQs8qnuqYHfHKaoORZJeReMBwH6oIFfuo7PboNYgdLJJFCijw%2B2iwaL%2Bq9gUI0Tl8OawMnMI6iu8QGOqUBQ5zDCE8I6Dz5MHvbRcpdhmqRM%2BwRnKBDANq0TqRt%2FTIuh9CvwRl8H7ye8p5E%2Fe2LkvAlFCTXSv6Nf0UccQqKhqMT5HXUh5kO4IiJGPiWuFKVc2pQZ8kSZVH2oCoTKMFtqJBsl73as6cyEZFr%2Bm1WxTCp3l5tYS%2F3SGW1DYgFEch%2F1FnGjAV11hSxShQjC4EB7W%2BeiY3xoVhTN94N2Y9UZgE1bYTz&X-Amz-Signature=fd21a74a0766231ca7add21ce649344a81f1e25a55909e1d0756e0ff21ad3a69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
