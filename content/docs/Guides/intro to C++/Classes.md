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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMPPVRL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIClWwgea8JK47Uq5lZN9nqyeFGryt5%2B1o976l%2FMEj8CGAiEAhQi0WZldZZt4InxQRLZERw331VufsPXb%2B5RtMBmO8aoqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISMhQnJJYgqUBizwSrcA4AAVj6oEXwrEKS9p2FOGhCK3AAeES9j2PbpbxlS2bOJmzm7%2B%2BHTvq6oseLcaA5C7gsL%2FGQcCi8CcQHcxTIgKNMqfqqoUCtmE9PEXGzlyznr7IIZydqUSeM5YahqqwUlO2dQvpTCxKo7ug0bfw28tUYAIj5xltcmapzVDXdEneAl8exyCtJInmwmMEYWsiM%2Fo7%2FfEqjchK04npl9Ise%2BLp3QG89PaI%2BtpaQhmd5B4QGW8zbsQg39XpBvdPNV5kcIgh1QVsr0hn8jcEHBTrsV6GhapXVnGpzxzZ0FLiW6ElX3rrb41LnanFzXWHFTRpe0UBltMAB%2BIEBumEEMS8bYMXfGzfHa%2F0NPMyWv33DEAHlaM9yhgwLzzDmzUck3QHKAWybkgFU27stdDBGFmbvgjq1k%2BqLcKyxYTErySxiZUihOV2yRroeGTpfz7fMv3R7WyhwFhthdiuiTGADthdSstIpeLi6URBF7Bc68GePL1sy3NeiO5spewve2DiGpbtN464zquDay4R1XNdWWRqETnZJVo%2BnVvEIgbADTj%2BSyIGJTdFJzKm83xt58NNiQzfEGdDkIgnM6DOyLH5CvbDLGu9d0JK1zshU0Wm%2FEzFCP9TFIvhxA8UVf24MYwyG5MMf3icEGOqUBH1RHZ01RZgBux7J6MxEpf%2FLZJ8JFIdBiw6VTFlzolUwRVOeOhMVK1wPoZ3UcsIR4AunZI8uAooUnWsqMDjiINpNTJHYPV4Nm4muNwiZriN19WavM1ZVDEdf7ePkoNjw4GJgLWrMX%2FKemeHP3VxTNAmRx5U52e%2Bu03G8Pet5eR0ctO2YpIzbZKEYp%2Fu9wTMKL79NlweGDsRptJlp2FQ9fCZE5Y%2FZ1&X-Amz-Signature=72ea770e02f08ec207825f92dff8ca5d03488778755769590ae513dcad396a77&X-Amz-SignedHeaders=host&x-id=GetObject)

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
