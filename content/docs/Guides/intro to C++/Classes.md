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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUFBXYDH%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T121629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJpHG3NL0%2F%2Fsvmj2gGmezHHEaphsWvMxwDesscBqQzlwIhAMUYR3lNbUUJ3uzLYp%2Bk%2FSjLq7rq9VVN6db07cRsvt6lKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAFs7m2Yd6Sc6tO%2Bsq3ANeGBs%2BPC%2ByyfSPtg09YXs1kfyIjtZE8GTPYH8TjVr5K7ydXAwtRCxUiHUVf8VkMJ1T547Dts9EDIPG87cl72FsZwJ9B4iskZ8TgFWyEYAAvAtaZwHFzxEB%2FqfDhyAeG363L4ms5ZDgo1JuwL7lCHZgWlzaEK14v6VuzATlWySQGLQkRTB2StUyK5MDFSb2%2BAta6Xv4Ipt6WwgoxnDRP7H%2BzZ2uzka45%2BSWz%2F4u27%2FOnMmiqNAxZcAV594aiEMK%2B2NccqR7TNysNPEemGM2%2Fks5Qm%2FKPRNFqSIfl%2BV4HoRV0gybGpalwiwTKv5JQUFc7nf1AOg6myesgS7W3ZwmPwhu6m6%2FPX8PAhitdOZz0dLMal6OdGz2QqvG%2BGkq9FJNEiGrhgJVo6a6vamLuCvf2dsAWb7%2B8k8YTzm8cNuOqqo5uVw%2BJibzKdRX5QjtbCv5jan7xlqL56Eke3WKUErWtJDFasnOqkw88fqWX9tqf7SVUIuAWXGTyl6i1iArqnESD%2FuA2yDKE2iNcBpPedOgp2BxXP2NYhH4En5g5g3b2TkCwRLLbh8OPaX6g4pgkhIB32%2FdZAh2RfcyQHP7P%2FUvAOvFTOMAeHmYypqL%2FZoQjLmGQrglYXbr9Db6%2B1EqzjCSzYnDBjqkAdCMj%2BPzOhNs583kg9tHvmV46NqitpwZZwHIdOmDzhf5ucjfru18MNa%2Frwg2SgaCKAuit7nFd3%2FEcuj7QH2o4cGwyQzhGBwt3yhW1hYG1exH6%2F3f54jYLZDxz7fnJhNJmuMqpEWB4Zkyg1KJ1ivErVR%2BIpw1oTF186igUKJfUOIr18bdwyOHhGcSqu1m279ItO%2BkYEvSxNEz%2FV8XdXqyXeAX8kYH&X-Amz-Signature=644a2d7470375a70a433509254b4873010c48cb3c9aae3c90cfc10f32db809e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
