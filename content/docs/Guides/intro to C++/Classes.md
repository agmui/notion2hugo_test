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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QZLQGCJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIARjtmPHTtSxzTNZPnUKpvEKFOA5yv%2B5hyOEymrxS6VZAiEA8RNoDri%2BLu%2BjEtkbtuZDGDhO9OV%2BD2BDHN9o8FiYWN0qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3rAzOGeVp2MDaexCrcA442VZa%2BBdFZIGl8D6pFA%2FSFVTbk1rvz5yuu%2Fi99gCSufabXamw73voFMgslBGOOFEFQwH4isxg2Ur8EqmBPRK8DqBofPyGZpOzwCXMt8FLsiOztO2YmTRz%2BtzAoScrCOBpdlIMvGLnApFeujVgq4J7PCVjpHHWZy6%2BgMSQayc2dT%2BAFzlk91fi8A4QIpJYtOvvrxDwVdGkjiu%2BImbfnMBoHcOZ6lsps8aVG6Re3Yh2PZo8DwoV6MGEPL7rSjDc867uerOpamETvJGjXEs1EhQSUYcAuEmkQfnUO%2FwaX0ZZRtXmhLosgAGKZ2wSmhH8tyM%2BXuNqdVSQ8LGEgt7wmN0Wqe%2BVbZW0b6%2BRRuAhJnEN5M6B%2B60VKKW2yeKhvxPOHkjK1f6Q7Cc3ZwdYH0yZVtRJ4JJa8vAqzBz%2FYuu0F9YDgxn1LQSU3iIAd91OBK0sCyyKawP74bmD2TCZP0Pq281hqUpF07Mjc%2B%2B8%2F19p%2FnffvgZk4jvJaGg22hpb6hME437k3s%2FCLK4gytfTquD9WCxZJQof%2BPm6bEVHVbcBO0WQ7L8I0BgvQyuRCAYq%2BknqwjL70LpDHqigmF8DafaJS1pPSPy5ljP%2FBK4XPWaSqzQ3svec4PLkrSTyXey4YMJmEssMGOqUBt9FRCvQzp4dc8U8ECysX4ZreJDm8HYuzq0QaZrltC0Y2ravUd%2BLVXR4SHExRVTXlAgDFiopkahWTM0vKrfUUvg5VQeii%2FpciUuCJ7V7KK%2FBs0vv5bllf5GUuv0Js%2B5b8Wi%2FQupVJepSIY2gx9VryWYo1mZWR0DAD96YeOIE%2FcYM4ldgANnQyBAN%2BwcmCQUFLzYvHDo34yNschSBAmLt2hSpxROab&X-Amz-Signature=b3474e341546a99a3e1bba6c75187c614f5e719d8e7af0d29f1bedd1d7277f57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
