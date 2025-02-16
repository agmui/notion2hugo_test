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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCOPUHD2%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAM1y2yWninH7DZK1y5H6Bu90kFJf8E3w%2BQZZHa0eT0DAiEAzPfnWlohXDICjP2BMXKRAHzEVo6RC4JieM9hPIrCDKUq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDKIOoK08jKkNylb9wircA4TebRWRgytWN%2FpUJOnsye%2BZvoue4%2F%2Bv0CI5l3FnfC4IL4niha3V7FM8x%2Fknlpxfvmovy3Enhjl3D9RpCOl7sDmQWtCpWwqO3pDcdL0Hj04lBDe0F2YAAJP5TX1HDG5sif4JMDgPp3GcyuGeqp3ONtPbF46Q0pM81fIvNtGVYuqnIg3FOU%2Fre7Q5UynZVA2hga5rKu2DvS%2F2AFAL7CJTcyGxbKgBJpkwuwP0HZL%2BaPMUmmwQ9GX983m3BBwCOFRuhYaKZ4%2BHxMuITL3junyhtgZladDrLu9ae0q9deP8aM14AIG%2FlRIY5O2KcUV3xhPU54J%2FSowXQjg%2BVu6rb7heipA2mMBOVNpR1E40wtL74nOJ6G2lMSRp%2FmhTJMvetzSukNEt6W8lufqhI5B9geQk2zryJDbRhKdqVB3Y4HqLNoGPgl5EQAD%2BjTx4hPer4d8puCYmVVaEgV%2FGYnFnizol3CmEzGprn0b8X4bLKxUUNvJO%2FNefDnQWMfdf7ELzB0q54qbagNGK7RYWS9MVuxD%2For5%2Bm8%2Bt6EF0GhLD3u0b%2BS9ocymg5GdlibKyadvNdbS7%2BAaWgbLTggqz3MP8UKMWIkOBvvvPxicpiZebw%2FWl%2F%2FvYIRj1AAJT%2BX3syHjcMM3fxb0GOqUBIE5wh1dd%2B4w3%2Bv83qWid6ecP2hiHlxGaqCRbDUQT8yPgqlfYU5YMQc8F50SwXHFuOP6fuY3KLLLa5MZKphMjlw0WxoqoTdNyN9JZEcj52JhMztYE%2Ba0OfdrYwghrjLU2WMUJb0E7FVNeyHh0frerhBrM7ZWxeyMAXZHmWPYQEVnD7%2FCi2VZDYmn%2BOO%2BAaDNaRpLiFy6vtrBaLp9BvhdvRMgYUGfz&X-Amz-Signature=511809d8adfd7b280c8695a311c6944f7cadc4d69df351150df2c9a98fac1e34&X-Amz-SignedHeaders=host&x-id=GetObject)

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
