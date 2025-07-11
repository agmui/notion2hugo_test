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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MKT2MHQ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T042650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnol6M0V4UAd3D3%2BSmCckB0hfDDvDpYdU0Z9JMOQUxEQIgSDJjiP8iOPhXzfv1aNJM93zcJyNV2cuRARBWxwrlsnEqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6ZzZcjt5vrDKYZYSrcA22bgIZM6O9imX1VUqRJplyGcn4T50U6tn3ekWBGIvsbaEpwF5NF6b8xI3hYKVyF6XEOzUB6ntFbqDJW3N%2FtaDcMRH139w3V%2BT%2B7pW7hPwYf5jaNxDXFsBZX2tH7oRk%2FUlrCfzjumPu1uBaAa9sKlKjVDQwyLojCcqsIRuYnJQvYw7BgqMbwMu%2BZ7Z13yjLfox1YfD4YCfJbihmL9JGs5222E8tW2C2wlVk%2Bg8wqJfLnxdzcxocdffq0BMYhA9EqTwajmOvpUuWIOLbsvmO%2F%2BFlCLJg6fiW39xzGgG8fch1jb8w8HIDorIcLKALyVCScaQIp0IiPYJ2k6h0nHTmL3iFPUU6GrUHdWnbl%2B21Drx6hC2HbVQ%2BY4Kg%2FwLnzigmyyzPfjRqDKjQyNr3CJ43F7ulfGbBxDuk1oz59000q8HxI%2BehQPL%2BhcVHYKxxMyOmzelDyH5Kc2WQwRnO94Mpx2TUW2kT0g9%2FQRziYaZ%2FsPQuc%2FRKrxX5zqm5uCCpBs0eqs4fh%2Fale46lxA9tvNcDl%2FfZqePkLvWCZPD2ZJ1k3E5jtoiI5tFrqil3tA4Ifrs6%2B%2B7B6n8h2SotjWSM5LkmCJWDvzqP4WOVKr8N5%2BDWJNq79ENhHCjLWSUrZ%2F%2F9ZML38wcMGOqUBYEZ%2F96ODM5iDAuK9U9ITRjlbjpdixP1z4NxP16hs8KfEl1wq4WS0m%2FtXBhZ2wMbGxgNYpWN4vmiMFjb5LWKsVeEPtQVc209dvCd6KvQIoqlWCjUNTNKiLprDja7amU3NnIfRjkz1CL6xFxiJ3NFu%2FJlkdo3jMXuqTSTl23Ye8cOmHAkfF1e4bd1euDc0EPhvE0og527MLy2TG03HIDgWBHr4Yfg0&X-Amz-Signature=82beb2fbe88a5f71f7314ab359855e9e96d229b73d72c8c743119955c8bb9985&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
