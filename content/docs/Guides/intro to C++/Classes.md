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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYQOIR5Z%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTxmAuk%2FrHizzp%2BKqZPCwTx1M9apRqtcUqTRRXFODKVwIhALBfBsvZ2da9i3WqOWx2VJZ53tjkzgV%2F1EhbNh3l9gp%2BKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz97oIq92gKbpW1S8Aq3AM8WUu59IW37Z1ZVJ%2BGZY3KCn%2F%2B%2FbQU4MiKwPc5DBmbcmA6SYz2%2BJx%2Bt2yZWgU%2BJxp61d%2FLFMV63KpOIuirVo8nSZqv92sJ7gEZRCvBxojaeBxWbGBVf62kbo9mx6QJNKhSVA0r7Ov1Eb%2BU8EcG6C0eoxgE11dc7p5TkL%2FlzYSAq7UZYzmBW%2B12h%2BhyMVmYsSZUDrkhvG5%2FU3y4Xp3GvnmEUoN%2FDAcfb6Nj8kPXZUxlUfaPQaplb1DSMuBlOuQjLjuE4o%2F%2Fdbvj0eWUkGWrrF%2Fh27uM715Ef8WrLFX1tZMoX2%2FYh83gTtFrG5LdVzYHbFc1TwqewTb%2BCdT1xFuUdyNV9dKExqWp1Ue9kDYTCApZYRhOzAVv4Fa9L1Ien2k8pjksI0hup2LGkaF7yZ00yxtvqSUzzXGttNzSXjxXpOOJuRMX2MmDcV0r41MCq0xSZ0jvt7cdhKe2yOJdbHYV06wiw6TgLrvBXzscWN8HV3Ua%2B1U%2FJ6LmqHz%2FtC%2BACPtptDeKyqX6nnoOrMKPc5RpwQybfNqsTk3lvPPBMeyss7n%2F2%2B%2FutBf9xEoQIWgSaKmiA8Tv%2FPlFvGmvAdsPXy56Mk8MbKUDtOgnIt3uc%2FZTsgrGaW9hT4ul2utrbXmFizC9%2FMjDBjqkAZ0BerVh8BgzO%2FDCdQZ6jhAwyno01jmhF7PB2STpOknEsoRBZ%2FE7pVZxrexL8%2BvFzqo43KDPkO5C5nS41JcOK9ODEuXnggflpyBxvYWz%2FtHIrFNi7Qkm2iXgMxoUXATm%2FSSSTiWZS1avswS3iHsBBsBrj3sC4iI79wA6BedH8rVQKidj3%2BnBFtKMvYMBYvtrzGBdQ1scT1csLUOcc7Xs7OL5ut18&X-Amz-Signature=92d09e8cab10823891304164d4c8be146cf2757aec453525a5182a35d2acf4af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
