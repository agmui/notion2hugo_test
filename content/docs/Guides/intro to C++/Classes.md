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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXUL2SKH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUrDDfmV5bU2hBaqxISikrcnyYpr8JEdSYh4%2BwWzZ2bAiA%2Fy5IxDsNM1rJS6rMliWnmDBmzGqvhoch0itHqfqNYeCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcnaHHFGVToZRtIOeKtwDNHZ0QPc0zH572v9cpa8340VbxuU2QcBfMspCBdIysMhxCotZ4InWeTY1WdIlm%2FoTx%2BCvCXVLC27ODR1YqdPwgDatyqFBL5VDx1mCuPz9%2Fmr9STvWbLK2f%2B64Xorc%2F75f8u6U4dkpPrQnlxr19KyTyQrW41MuYaMO7MRGkBAaRudtxcJ4cLAhLHLm27GjMHoWo59GhOGs1rc%2Bkn1DLZmfsYVmtG%2B3r8EkYcmdlHJ9xAwn%2BYp3FRHwNMA6RCjtXfvL6grWxrTnwxBIslbBWacJ5CmlZaAl%2BwBLEI30ksxpJRaVhAUNwxe2hT2MyojvbLa8tQOqEPWMTXfP9vH%2FwSVSQ1%2FeLy7Qi5txZiLSWzizSvomaCntpaIUVsZUP9QuugDFFtnRd%2B1rmLlMq%2Bg1Wp%2FqQ6p2%2B93bBlhYsMTXmjuMYKds5HPe%2FbUvpg8ktGS2yNEFYZ6PvfUL3J0BioObmhkfEi0pnB4BUwXhz16rjE2mmV7cr7WN3kCmPPyeIbmxGLJdhIbSElGV4CksjkCn0z9rR9pq%2BvxQTqa54murttrD0l6rcirUw3lcjsmbL%2F5DDrVSRGeo2MUzPRY0gRvWda8mq8Q8bYVXnyx5VmB534X%2B%2Fe9K8R0AE2jZxzdi6Hkw7r%2BxxAY6pgHE5aJ2uM1fTdzpn8RCj51TjEI8ef0Sriy7JrfEhW4pTf7f1C1LAUaisRgTKfpVPU4V5Er0Gz4n8zLiDmN9u%2BcdjaSvaB7ZMe1Qp88smD6YxvjlHAVhA5PcIlNZgNtPa5KczkUxwepyLXsE2ccTZwNtbQOlss62v8Uqy%2BTAn00%2F6A41%2BGUR%2F2fz0ymWf1pChWanp8LnpmxWoC1MatgOhDLhbDSUz4eI&X-Amz-Signature=2e233abb1fe8798e8ab417407ed28525e99b1230396052b8a8e6f598f76d600d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
