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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STAA4WZJ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzp9gT9vQl0G6KQQM3B329Z9ihIspxvnyWiiNRZUKO%2BAiEAn2WV6zjMt2BTuM3f6luAwhZsEYfuOGW%2F06iM0fOzZDUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMovVpNuVlj3Jb0YYCrcA4UWL%2BZDwlXVR77z%2FqKZx2rgg8Zd66U%2B3Lehl4KHbC4ub2owoN4itNXUl7s8B5AGagHmrUXFPb73Lo%2Be8ZH%2BiHUk0H3YlVeijZaSPc%2FeV1l%2BZGi0dnCpSL%2Bz69PfF9O4I3%2FBYKWbYqVUNVUyjStbop%2FnwpRebVkpKRAX4LMHWXrMMAE3c%2F%2F%2FtzRKnjvXvLbnzyou8lnMT4xb3kmyl5Vt6CKawwLB4VEnmsOwaTaHn3E4Nxm%2BpbYKtx5Lnsi7HApObFaA6tJrTrtY7eVDtI%2Fl79vAfBRpVN8CtjRfkChVpQBkeKegr%2BYBLQaczq5YoAul8SsHMK5C59V7UcnlXHFCaSzNahnlJ%2Fq%2BmDB8VAeA4wmU%2Fe5BCKZg7Ql%2F0%2BwkcyQ64dPvA8%2BFcMqAhgQrtr50v%2BJ7Ee7SbSEEM7%2B%2BCqjTK32iE0M%2BGPmi2j45b2IA6K6Q0%2BMIbwNK0tlASOZb8taSzpJ7b5WqR6LEWo3PmzSA7h6Ot0FNQ3mLy192zE%2FDjnGi58zezwf%2Fvh%2FEXsXdokLSWXxmry0X1deUQLIa6iCagVN8645MX07iYyY9D8b14HtC4euaepoWm6BtLIWoKHHwpC%2Bh2yGl4IHTIg8rM6ijQscBtDgDYJSDduhKhAXFMK6arMQGOqUBl6KkMoZ3hLZOTRvgwWh2%2FOWhG6wd9LWVn12tC36Er6A4IRcbkG9DyJOBlPnxvORa2VA8W6PCj0ByBhKvn3iQ2zZNZfrA8uXi%2FSFf%2BPxawKB6ayJzMIIlVgcpvdR239hUKEVDE5wKiPg0hHx58FldSkP5wrYVMtXpdzeKL4bpAcY4k4WdzQWg0PTRO0UfX0qCrHmNcrJ6I%2Bmq4zrV1qSxLPlnT%2BHH&X-Amz-Signature=d1e5cbff2cd816605bd2c93ee45a904345e8a265b7b2603ed558b4ea1e60fc80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
