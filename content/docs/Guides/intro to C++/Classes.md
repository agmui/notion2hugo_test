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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676KGTVZI%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU62vL%2FrF33tAck%2FdeVs7S0HPM3ihq74YE9L%2FatpDi%2BQIhAJFOcNISvKgK1HzeKYjFAHJ4hdT4u1DB%2FKptWI7FsUWNKv8DCCIQABoMNjM3NDIzMTgzODA1Igwm%2B%2B%2FJY5Iaq%2Fxwwxkq3AOrefspAcSm%2B4OJ%2B5SX5Bh8brt7UjPlkXrNFD3T%2F9GNQeBP1ZFMhjtO3tjYQj6QHdakRH6IBXblyQozWsYaVHeOUM4Hjz45RbiPQuLCQzSTV%2FRRXP7gHjxOOe7XRuTbl7MVf8ct0ZVxor0pvXkdns8G58jKOF3rEf7c409ysTyY%2FBVmgCzORA7p6yfsLZJ2mKn4TNk6KvxpbcOfPIOhcqzsylUrU5c68pCiuq5vOVKmXkuOsYFHfYPJZX4oG4RbnWwPLoI%2FsMOy22904f2g0x8A7Xy%2FJ7bElKVkSutu3aXYnZDfeP1g6dps1MvE0ZxnQ%2FqIb5bXDP5werEkZXiSM5lNxRZwbb25oKakf9fWIgunNECO7BASNhBarshVSz9cojlx%2FO04%2FjgsexhDKYHQLrv4V5Tw4ciPrsd24rVG6%2BmsWrcehcY%2FROLssGr9eTmVu%2BuxVv%2B1z5wBY%2Bs9GwpkE12KOVVhLxxwjqzG6NQ2dy%2FjikJxLjBTZGYseySVtBVRxUrE3DQZ%2Fo17FBSHmtpI8EXQzdl%2B42LA7RYU%2FKNf%2B1joY4uEzJxqYgrugwvlWaO6PmmIoROyKTUp3wZ25Hu6QhH35bu721dWSCHkOsAHxjvplWaQqFPj9p5qUxxniTDvi9nFBjqkAVgjf5jMa48giHH4%2FFH1o7mr3NW21MerRNzv3NdHL0%2BS%2FkryFcLvKnaM8GA7aqmUNhr41Pvex5XQeDMdNwWYND61JR1QNTpPqLmuEY7OKwnkv1Uk3GUUXRLZQCbTVXuMf5CKNWfCRKUpSd8winmAhup%2BxyXYg9FO8LJCAz8eflcBopQZTHz3CVNsblb1FVmPwi3%2Bu%2Fb1pHB4AO%2Fsi03gDi8idgVS&X-Amz-Signature=b1cecc49ad197acfd034ddb5d5c8e01c462721f6a3fbb893ce1a439bafd1ccf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
