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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636PTJ3R4%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIG4INUNd53Hpt9dUXlHDrQdO0iIcZMHOiTX5SDxd7i9JAiEAnmTR1T6oYU%2BJH%2FOxfvmGPTwDDfvYVSDuYmeEUvkSnc8qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKsWEuHiqmKWorRnCrcA12KjZOGfb5EUc8WsInfbPxvvGH7wRN6IHled6K9U%2BLsfLHzfgtRCiIgtpQhtRdkH1VXGiW%2FQCKbZrB3B44bfBGlmGsxyPOuDMbv%2BC2igPmgY6DcOqT%2F3SuiUw9%2FxtEyOQlkGjREOYD9mCQQzSOjJ8UWlc%2FRGGSWnEGyUcFibMRSGEoDhTFjvkTmtcEdGHl2EYLESrcnzYp8KBW5mZm4ht%2B8hTkVxguuPjrMQAdNUfPkG663alF21p5N3tSYbQXdSppEID4ORbts6IFUAs94B6KL6qnEwjM2yi0r1mD4yGaoDPxzDFUPdmaYcrzBrngdSxWwCCNxZh8m0W2pv4QZtk1xo%2BZkd0ZRpBuYTAM2in2SJioxqXcgH%2BICu5FqYeWAM0xBZInPGKWj5%2F9tZZFtVhwlCZ76sh1CpHGDJ03laQQk3%2FH1qQOTqc9HUuP%2BgucVsKjTDwQuv14lMKtMNgJcyUk5nD%2BeotwHEG5rPREaONIjjUwdEOn97Oba4w6rXacmlf3FqReZODfWlQ%2By64Z41NGJZBPf17hmU81NM4Hc5dBTZvXNCEWbLMoek3nb1QoxccgZ6KsQggQX6toMRl9HiqazKitTOCRQHnjjdUWNxjDEE6J1786HaK06daYtMI3vls4GOqUBRPjmbIqHRN2Z%2FBd6Zm6%2BTMsC4FhL39zsfR9wSATLWEBGZZOEEjs3UJsRAftu25X3cL9OU%2Fa4TFfZSw8CTPalCVzSl0WFmco7fxHAIAXwUs%2FX4%2BG3378m5oSLhAqDn6JWEMXAKEIjhP9%2BJt4POUw7F5mkTFJ0RfB7ITKep%2FjuW57hqX9rutRww3KzjnDrp%2Bl3l1uinaBD4gsBeMFq14FeDHL%2B4qC%2B&X-Amz-Signature=a19220cfe10cce9cb6b3830f53db1eb9f234d21278a95bde9093c92ca013971b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
