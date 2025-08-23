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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT6MIH2N%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSGm5CU3Vucb3lQvarWGU2Zf5t44BqSsQH56PI%2B4t6CgIgUMDKRyX2z%2B%2FmWObVYrYKtQ5ooblna4zTn%2F8ZUyX8cigq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDLS30Zb2Fqt7PWBAIircA1fhQkQdsspg1XkNqfldJqClrdETb%2FPjCkz%2Ffrw1DEMw4jQPAnV%2FH9ygUVsazlLnkP97Jc61PvDZU6sDVmyl0S76l3nZCBEK2bRaLc4z%2BuBp4CXJ9mdV6retlbqiBcozMNoRHWHDEEo7MD%2BQb5o7xnC2cet9NOgFNEKGsyPMY5%2BuZHID94p%2FoBPUO%2FGJEFWdHXfbMf2MlZa1acv%2BM962fMI8MrzJh%2BVahSfmNbgenm2GvFwtV%2F%2FVJMVcy2VNZWCPfWohtiW2c6FuzNrud2fF%2F0OzHIBXfhgkFsKYhMH2dAA%2F6TfuYhnHjFUTpNg8B9nxL3OtGDNKIVAMpsssLhHuYb%2F%2FZVojeDtmM6sZDeOogd%2Fw8Ai2hA8Ai5aEmdxpHYPtXt2HXe9vHrl9eeHbDuPEmLzKwty8JMqyq8uJmfcnBM8vhkG%2BB5hFEMXEBOww53cKNd9OZRD1KNzacHRN5CeXmG%2F1oo7A8f2x26D8ZQ%2BY%2FLQsHozrjNyQ%2Bg5fRXt8S6mlHZAIZ%2BHh2q%2FdRa16%2F9KL3E%2BqtE%2BaMbCw8fBdNEu6bynyugufJKlPrLgZLTkgVL78PrT4TnlNMUyqmyfIpXo%2BJEnlgi7PEf9uJWDjrUTH%2B3u4k5Rl48KRkZHxyJuJMP6NpMUGOqUBZClVbieQr68PAZp7B43lymNY4W7vF60yGGDuxcTIqfD%2BFjHfFg5Vnl3eOvT38vMLcu5L4ATo3CSvvK6nkktlFd0%2FGt%2B0RfX%2BgP7nzN%2BFap9elGaIo5%2BLyBIB3W%2BTNf%2Fq3zR%2BJvEcCXLswwX%2F%2BRtP6WdktngzZCdcYnbznWbWx1FGvcbhxO%2FdwtK8RYQchY6qoKh3dvwZJKp6xDhWIxKQcfP1%2B3uE&X-Amz-Signature=46f0fc3a7188580c7ba6a1c310aa547a3ab7bcb4e7f52cde3348be4a63126686&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
