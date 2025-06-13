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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ337V6M%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T190704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCzbTyyf8jARUwidgDr9UzbDjFBpM3tNSQkDB6N%2FBSY%2BwIgHPYuyjJOuxQQFxpMkeNPvu9odFQixkyLhJuoPGhmLJEq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDPUljPFyc3qw8L3E%2FCrcAyjo1VjIKrr3jh%2BJDR9UsfK%2FZFZTw9xMgqwxJQ9aktaNdHFVHiq4PrM540jvSbiUA1dVxGqwCb3oimc%2FwwG64bW9KhVEvFgfGTaX00RNyHYZeUr7x%2Bw2IixIxzrlCZe4YSkFVzPFOG5bONByBFGk7lwmR8xYmZaZTdVC%2Bol5dx5ZqyteMHenkB4KLHDtzHLKLIBOUZZhZUJuZi1xfjCHt%2F8NoUwBUjMt0O7Z12UFToaCt7cPjxTXjBxCS%2FSSRmXFSOfv%2F1TwAXEJT5kBaF9rTe%2F2sZl99hPlubDn3qN4F7e6emb38CW1VxtyuvKKFVYUzY6eP5ilhFTUiPB6mua8djv0exwouL3xGuM%2F5yAg1ro3lZ6dYt4u%2Be%2FjHt4pd3DsV58i6Bf351biuKeb6mSmyIJv4W3uuyVoFvP9r6SLVcrE1YCaGw9aKbxM%2F%2FxR4DIG2o5dQfDzy8f14izJZBcXSyTXuSujZvCM6NqRlcoJ%2BBJAbLctLWG8xr5V9e1giOHAse66iokOXF7rTaqtqPyD7h8Y9dCUJVF4WKaSBxXVbO9uOjrmvmoi4WyK0zQnNgjJEGUmzOs07QrM348ipXnXXQ71R2edTGviv7S9d9edM9eirlIox0jl%2F62H5gRpMPPSscIGOqUBWSw71PVfT%2FpFeB6HqA5Y4pF88qvO2yP7cUs3zO9G8dfyKv2d3ftfACyi5RYc6IRfTD3F18arfU14qs6eyfKhaKKbwN4aPXFEMDs6bdb0QrDZ%2BPE06nkazLEyjfJgRMsRrdhGRZ%2BG1o2Vk42IJgUCJ7GqCHsxs6X9wHRrCU0SzM2gLMKAdWeRQm7mkorvZ1e%2BZpMUD9g2FzqqI6dwUpcWt%2BVf%2FfYO&X-Amz-Signature=67e135a85747cd9b045a816bc3d51bffcdd2ed007fabc5e4800c963ff572aea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
