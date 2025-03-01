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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBPZYSGE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIDMd7UDsXW%2B%2Fw8Kv6KYtk2XMtOCidm75M2leNbPb2gCaAiEA5mfKV7aj4tZkBv7FifBgTBgldEjQkwA5zuwIbbJ%2BM1wqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAM3PoTKwYdhQQjrlyrcAxjSGLPa74ksGy4Ce1FW%2FmqPk1MS1obIBjM2koAXOR9ZeqP0zQ2y%2BLUNLaMbUkOIFbkb%2FGKqKjUd5P6NiaSvY3szXpdglaIGZfM8py8KX1U5Ro%2FLcv7Fa8xSLk4o1p2vGbzIBiOC6ZWxRGPhHahisFoCDsBRp4tjO4O3QrFSI1X3Z5yFT1zMsdzsPHOUd1wOsAPB9SvXQuCTjskd6L3ladvoj7M7PBtCP0%2BACwr9zEoFIMGuS2PzZJBHl1qfzbs2XSQ%2F22Hf6bj6PpP70iI9GXUmpXIrUIStsCLVTfNgItzuiDjj%2Ff8Y4MBc14UXQfCMr3ExkD%2FjFdZDnQD8aYawzR1cLH0ZAUukVOx0WT2uCwGHV5hJ4I3XJrBskRfMdvm%2FkdWpNjMsAGgRDpjBQsqG0U3LZscJptYAZT7AA0wfyj5g%2F%2B9ds7VmDbgkDDqL4hV9Aj1VLlQ8aQh6bI2zE0fhvlYgFLLk56qucN7e63cAujkaakrWlrTZlxC%2BJ7QeW8OVCFhUeVdM4M4l5xAi8NFOt1l0QNQh36b6T7OCDSaVX7SozKdx8SCBukfpTC4ktfKipzIoToIzP8VuqiMVIVlYoTz0R%2BUfbxKw9cAIveoihWbFsW6bPw3d%2Fw44CZspMNGQir4GOqUB99Yh5dOC91YffBo2s0Xq4s1cm8FzS5V7eeoSNhIy2e18ArC8FD%2FBP%2BaVi2xV5hYoshSfMFzwPR18uX7%2FeMzyx4R%2FsUXrFAfaMN%2FF5oKqWhgebvOpmwJRTiEcH5vivu2AOtax%2FLWWOhnSHteWyo5ZCwYuXGn7mMSWFPv35dX%2BTNX4MpeznT6bPOaTzl1ey38K2dvUR2YYX2guQR90%2BaMHnpHZJU2t&X-Amz-Signature=7fe80b8c91d494c1cfb5d16b8b714d967efec611fa733456acc0f684367b7a40&X-Amz-SignedHeaders=host&x-id=GetObject)

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
