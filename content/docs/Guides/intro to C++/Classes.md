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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3PDHBLO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVnbwER3pa%2Fcm0Fl6QaFtVEAOxhu1dL2vqrjeIqIWYOgIgE%2F4BZoUZq7ixxB93OOiqigwpYsCo5sR%2FkQi2Rqwd0sYq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDIzmWPs8SfCFhJnqDCrcA%2F5E81QYCwUWop%2BW5WudYtqhHAEqBy4io5kjMLlm3GwV%2FAfgu%2BUCcIoMetqy%2FqHek7kyOLOgYIxCdtT10SooURE5iVShQW6oMmF0lDYWZROZv1u0bjwTOJUvVuChs9%2Fp5PCwNc00aKufK6W%2BVLWB1aW6ww2aWPTiajbBhVF3QgzGbw3TCkNVk9IANmBz%2BeXr3X0c55QW45moRsD5G7x%2FTGZxWv7000BDigUQ%2B%2B462NhCW%2FOtgtcSnVYqHUObouMl2Z%2Bc0VlJ1Ula4mxfnOWi3S1Zg0kr7EUf1Zsb%2FmbYZHV%2FtqVFBZlLiGblqzE%2FHoTwxaVetNYKkJryHceOrHA9pVJo8merahoP4AT6k0%2Fwzdg3Z5V9PXE%2FRre57vqWutTlsV9c62Ir9N4qLViKtJMoe2wYyzL8XsORabkC2MseLgsp6o%2BdafFQHXnOqGKNf5mQZ2RZTXUe0h6sM%2FmesNXqjVPhs6%2BBmD0p3eQVqD513CMwq2wZNciIRQFb%2Bz%2BUNT4xM9b%2Bl9sFEU6twRYVj7w8TY8vBm7AHawcq2eLBDaIUBUT1uBA8aS1i1a9Jrs1yxor1lURBbk%2BWeSRPYdngtE1CEAEN42eJF4QtcPGh5Gfa62b4DKzFJmJtEobcXLnMKTkvr8GOqUBloSo4uXtG%2Fo8EXtiDN%2FGQuv8SsQG%2FWMbCIswaEUO%2FVSiH7RQNeuVBgWYv9ij8%2BXL%2FrIVm9RNdvCr7OaQJPnV4e4DW7NvrSASEipYQYiiZm199IICpHtjt6Uyjw%2F342UHqgwSAjqNIkFxPwnkLcPF%2F%2Flr7WtqQaW1jcO3TLHObFalEnwQOk3TF7m0JPNIXM2Lg2wK121rp0TEulsHSyEn15E0wbl3&X-Amz-Signature=e625fa7d7859c01061f4735314d37ddae1608348b7bd965ffc1c9bfb7a9fef06&X-Amz-SignedHeaders=host&x-id=GetObject)

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
