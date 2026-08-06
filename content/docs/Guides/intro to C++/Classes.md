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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654OPM4W3%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIEdCKMKbSZ5HmhjldZ4ofLxb1i%2B1V%2FQNXCpDKsNUgTq%2FAiBgiW4u3HorSFQJy3IUk2ox06cCoqKTV6wAnhaT6NbxRCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMEEzYc7kcVMosqdRKKtwDZq6n3dY6Di%2BfkjZug7h1RtD3kj8XuakgZAmT1TtiHtGE5OGRnp5Zws38aTUSgTxkVKFDCrJO7ZRm0XTNM40%2FblPS19H%2Fdu0PxuT%2FFsN8CoDnwFafRhwNBzQudUV%2FjybdPszqWM%2F2tgfXVTRCkeBIp6k8X8S2JdOpBo8%2BTpwcF2binlTXO%2FcOrsSHVl8Bbhkaf%2FNtZ485hXoGmX4x4QgDPIP8KvwbO2SDNx%2BgBROPFaRBLnmPdPMAkRcuScOtc3etCONo8PHQHxcWsviyWRdQrVdTaqzbIVYQGk1ZHS3aXyAjhoTBfZrLooWKUUNo52xLqMVOLJ4pv0Jy5xv%2FTGFhngZjf5%2BgFlQ6qRKjj%2FwWLtPptWDSKldWbPw8xr3Ka2HSY97skDMKgJ%2FJiUQd%2B%2FTIfUo8pMZfe0Xnd%2Bt%2FVr%2F8%2F0LEKBW7IZEzeKhNXUXl%2B7ePHiH%2B1Amyt9WJ%2BRsjh3y%2FjQqbCGd84JebHXgCa4W4dHxAgA%2Frj5ZR6RzNc1EaRLfmRrgUN1%2BKsFn3TwAkACNI2Pdhg0yLDUO1OmT6X%2Bd%2BI82yFyPWH8YHRcYC5eGBt76bm6m0kinw3X6CpBwwzlvLMEc%2BV9WwmgFVrTZ%2F6%2FAdubVp0EVfMllooPKcj8swwtTP0wY6pgFPb8KIYaL4Qdw%2BdnT5eOGEKkkW%2BtrSEBZZ7ilz1jl%2FtX43vBrMO%2BRIjTBYZIXHQmc8dEmYemGW%2BwY%2FA6jyQV3V9DM4oAmdvM9qjTAkSmyAfN885AZz7H%2BzfzcanlnvHjRqXfJQkKf0SYmD3V6WMLDhTJWXfL1sQZYFqtMqN5879Xz5YvK4AsO6HUER6KmaM9RhJpna5jlEUZApXajpiapljPCTTVmA&X-Amz-Signature=2fc1a6ba005021f5a0d041a482e15e2e965b9d0c08a0704562bbc5cbb1959cfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
