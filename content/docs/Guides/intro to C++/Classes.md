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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA7GKYVR%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIHfvFqyqSPtCLLcpDOfJ6AqRUsNNDN1Vnp30GH4XpFaXAiAdz8tVVav4eRyyr0rwa1GZnn1b6yGTsUb3%2FMd6LdsAzyr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMcAyCCUle%2B3fpVCVdKtwD2sgdcgigmC9QwiiaxmW3y5fYofbi7CeDqL6ysNUpaKXY6ycAxvl%2BnZT7RLnvq2W2lVmBbGAtWjsLg8lASZx14WxVtxUQJKRU%2FtT43r8YY9BcRArnTPQMTwzCyyMO988rruD1eQIk2Zl0hGweILk%2FaJhWgRYg7LcztnvpPZqaTPKDmTRUnNxPZiIY2a7E8Iyr3xM9hne0A8KFuP4vkH4hy9W3ajbwD%2BUJ8Twsw7VGdioBBuqa%2Fpd9hR1eXeWoCNa88VQ8G%2B%2B%2B9J6s5JnCRLdWrYoULS1s%2BKNwVctKnaBqlWbGKb%2Ft64BUnrN7x3riHCS9Ylcpz5xCA5ReiJnQqGW%2Bon1GAusnwT3OEk1r%2BJK06RpqTRa7WX5WSbKrX2Xk6QNHv%2BgLThn4EKlilGaPCvsGkCCW%2FxPBTDTzRFWWm0xn%2FKQCSkA%2BTG4WJswe9k8j6x7d6OzU91fqV6jJZ7Die4dCOjECdvNMgnDpz4gdb37LUCHZllEkS%2FXsMX696hfeYoqKbjLAEepE1NlR0U6hQITf1l1ylSweH3CO4H8%2Fv5RoTzjWATytv2dayvgRsT1J0H0z1PybrozzkkmcxxuCvCn1nZxHiD1mvk1PON8VUNE9A4asEuVo%2BWPfy1JjODEwkbmc0gY6pgGuifyeV9qHKyuL2u92kqVapr9cX2LXsrMPwLskGAvDT%2F%2FKylFgVQgBh9QGnmlfW9mwzDwAsXLFozzrLknHjRzVRtfBTLfNUmb9PlasEqKxRThG5l5TAkYLX4Z2oWIkezCgbUnreuaWYr6dDmx%2Brw%2B0x8G91voDtGonFATHCl%2BqJWi9tMT9heepao8r0O0iub89l7J3Mlaxc6iqTkEfFkKWBxEJGGnO&X-Amz-Signature=c7afd6de0353d25eb8bccb35769dae5ce7a52af44b03739310fb317d8324bdc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
