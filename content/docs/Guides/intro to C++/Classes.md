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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ4WQE5B%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCAM404z92lZ6IMMU7T5I7SAgE5cbO1nH5oRQzL9SIwQIhANjVtkykkUPF17S9LoUP6ZO%2BQqk9kGEA61BZ0T4U0QoiKv8DCDoQABoMNjM3NDIzMTgzODA1IgxvOJW3C%2FlK23abKTUq3APLJNlZmwnLRPMxzsFyVPXX2MFdgjMs5Swvp7BpNcR8ZwfFkig%2BFsJS%2FFzgMYPKv305Igexb0izFn11%2FXZ%2BA1dYO1jupdV7svpDxDsgW9Rdyis1GUm1vksnOqOal9cwi%2Fi9NffMg9RLgduOgLVpsIeY4M7zdMdGBZsPOxLFOzxieg%2BB0v9bMQhTzVjHuFXoBZ6gMDoHBG1tTE9j%2Bt7wr29J5TL3kBGV%2BMMpol8XYtpDjrOEBAwh0Ix4KilWz%2B5Vm2kf3UTNV1yJsiO9E8OgNenumRPjz42bJwYQQzuCBuKEQqghZ5oD0VsC%2BUMIFmdDaWkTPPPXjzlo7bjLeJWqeWAfz4RVR5HvAA%2B0Dl%2B6e%2Bi%2FzHan2vVbVUGPAJMfuFptoFNhJnkq25B3KMhswSH053NTloqH8dX56E%2FeQ4%2BL%2BlSDRlOIxXQkou2R90QrgpYOWnt84%2FoAHm7RXpjg4KvSOS%2BIYc44MDP%2F8Nr2YXG4uDdyCjdqWamm4wCmarJWncjEijFT6EGgrOYAV2lEcfynmGMQ4%2BgfF7EyX4uLRkg88vF3Z%2F5lLR4na8Drk%2FlEBx0u3rL2k5B6XhI4ET0Y8nhbWChAQ%2BxnxYHpfDmR63FTfD5arSeH8xF34LgPT4gcWTDtsOXABjqkAWR5Vl3502RHF07AvbqfseqmlVqIWd8dBRTqlYQtzAV67hjpMZ5R%2FDv%2Fm2XzupkqFoi2dSsBdL1MsmWIPiAIBB%2Bv5mpguuNBTRH9gVpxHfElyftm4%2FL6nS6wTyjyFV%2F9VryrQjcGsM031hVXIkgAt5l3Mvd5%2FTMxAdcZkwr7Jxew5UvStPa9khEn5emah%2BXdaH4RQPp6fI4yaDh3oIb2hWt6%2Buvc&X-Amz-Signature=fe785df1310c0a10ed20497ceb746ef3418c727a1e02a87e5f751cb06f5df6e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
