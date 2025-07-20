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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646LEHPF2%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzvLnATIm204C9E1j4wCfl9E4NMfsRV6PK37vjs3j85AiEA8qxoCqifxotPoLu4%2FvhsUKUtRSKxhx%2By0irPg%2FeWbusqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDGlwNB%2FshcESDTIiircA84x86UIIpNoh%2Bf1TIezIGqbr7tDAhx8%2Bw2y2l0lejIXpmKnR2uPqvxEHsJR666wJhKIRfErPJjiX7wat%2Fvv2t6bQl31DgMSJnGBkVsTQvTdq7UujwY3yF3OE2zy%2B%2F7PZRXSGvL0DHNIMJGAa68frk8FInhIOZGS7az37Mp6NO7QOeP3ZgYutEVOENk2%2B9x1uvOaDrsZGx0fu%2FT%2B3Ufzhr1bh25wLwYTCNW30%2BmsGWpIfgYiPjkwd%2Bt4hK9mbVzXI%2FzzUKmEYFzLqtx0uxJMyFiRQUud2DGc%2F%2BUPrzcTK29OlqicuJMw1%2FQwgeeSNVBHnipBHIc7QC3hnEYgx96eXXiGkcQ76vrY7t5gVr3UcsG046OqC1NEEL4dVNhtuubIRCajz8%2BsqX6vtpwQu9w9IhqpALUw2aXo%2Fc4oP%2FsEAuGXUhLx%2Frn%2FegLh%2Bosu3iWwz0AAwE2J0f79ZpdBq17gihu1xjEUA861gpjaEiYyUH11I%2F8G96%2BXfX%2F3Ar5VEZzV0oQl6%2B5okWxxCRBBbOyQ2ezM9lrlOr8N8l4Bi3IOkfT%2BNCiSHUMmIAk%2B%2F4x2MWQa3lc1gMzmtcw8m6mpxTOgFZoLRozIUAW3FnFsGghNOS8x5AfSbn8giqKmKAFlMJvV88MGOqUBsq%2BIL7h1ie8KbcxHFIQKbR4H4dN0rQNciambHIU0digglV42dH8jJCYR2LKleOQ6EABgwVJTDTGe%2BOtjULJnsowRACBNDQrzjBRSLZQMxYt3TwX1ISpz9fEzmTv6C04f2yLQI1oDeO9czJyxMljsGNNyG31BR6dhxuMpZi1EUJroQwJ448uS0sdEoxie4UUhH6trZNIv3JQaFT2gmWk86SmfVp7q&X-Amz-Signature=a01a5749ae9f04c7d3e9516fd457fa095f369a0763fae2260ad69ed0f1424456&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
