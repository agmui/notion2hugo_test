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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E3W3TD4%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPn%2BT6hCoVNS8GYUBLnojkxj%2BZ9zxfNEnrpCYp8F9knAiEA22ultUaedGS4SgxfPABD3fVcS5psOEoorLmp4zwvX%2FUqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAL5wwz0%2BpIWXB24VircA7EmgsCYe2Jt6AlKf%2FNx6GBX3fNNY7X7%2B4VUooEDTlxnR7hLKuR6QTNk4PCObgpeQ3wfS48W%2FtDvOvkx2tAgTunVdcJVZfU524OQna4Jg0UJ3uh%2FnVc3xg90Y6moRGiR2fPS0Kxxx%2FwxdQG7BflpdmzcWtXzLxMehLxAd%2FWip4R7xMlftteyxZQBLFJDLB1831uHecF0h7MNiK5QpSq5bxmKT4wmu8KksNORwdVsAhlXW4kW5EVhUz%2FPP6pulUdqbLo91NeXZx8swV%2B30m4dBTPnHqSYNwwdPri3JNxIRZbB2W7I7rgqIOZbc3%2F4KgqNrqhL58BDCy5%2FiPHN2gZGd8gX5GsteUpSEVqzTyC4IOocFGNHH9AO195jmHx7kPHQ7s2icbJaCBfIhg1mgzyHa%2FaKhkwG%2BwMQYXFf7dYBmKo9Dz0qM8o4N2p2CJ2GPYhSLQVAXSXxGXZPoWOm6cKzD%2FC3mGTj5Nyznhh%2B7JWSP%2Bz5drRMb9uGoyyJ0ywV7afZ2cSUwAlPsG66Qa9STn%2FT%2B1k%2F%2FVXh3vW%2FLK%2Fy%2BIPNy1cIcy%2F77pm%2BoFHL9jFF52CC0XMIUsuulgKBkBhLcRt%2B%2BpKM8jDswxRJMSi9vFIYYRtPhi7mmhBEV2fxRapsMKf4lcUGOqUBU1nWDXGbZXpb7SwMRNT1flLxRoHt%2F1do6XoATsAKzd42UHJAh5jDE28i4AuX5MkzlfdYEVu5IcsMBlK5UOhuDZXqjdnKi1igDKK5ytnmffeuo9OA7r8ZldHqCWT8gISlVziV9d6384F%2FmHrfwGkafyD8pcgDdHAbZaJ1r5DX%2BiBlidRPUNmNvLoZVYCVgOnIsTLgCMHaddrwSC3JvlcB9BWzl2hS&X-Amz-Signature=a05983e04d43b4b765e14266f47c93f9e6da6c392e5b6e67de87d252393030f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
