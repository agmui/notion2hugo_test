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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZ3AD4Y%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDs1iGW0Z3MmTTWH1oidsumUqE%2Fp73IywQeOch7qzrBmAiEA2EohNF5GydxGSKOSKRui9hjfdipZvBQpe7nHw178kFUqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjCJD%2FCO%2BR9C3QAiSrcA3%2FGS36pHsmAsKqxIxysQ2E6W3WUN5UoF8OBgMqQPT4%2BMBskIP6yaLIWpaRA35UtmpUrzRv1X%2B1IEzGjAF7QpfgMc%2BzSMu6%2FfnVwb7ONBhi0rFZJineNSAlFDkRr6TzSjjl6tR4WC%2BecbIEM4ZiuAT1Bs%2B%2B01DVEG4BigNgG57I%2F6I0BUhgRhZAQ4UgYhrgL1woZyvI6ze%2F2sqokD0p7mSPUoR1SpMXGQprArfUOg6F5adTvVegM%2FY4lp95cxZfEZJAaOrfEUxaqArXs0KxSnNoR2d31G%2Bk4ret%2FFmjzMul%2Bc159LP6UX7lIFH9lVwgLWbqsdDGYovUg3T62zlrbJh%2F6xcIYkjoQL44YaGWCVcjEg3tMisZPPYkWWZjerNkZMSK1WaFKgXXEp%2BktMmjMNf6CENQeKusm8GvmbyOT24KbsN6MxjsihAhi63dPHmjKpfmnwoFyyBBcMDLBjhZ%2B3XnZdy2p1Kl6Al%2FWFZEW1HpPALE0I%2FL5sUZ9Ict%2FDLFL%2B44pHmdaOdK4nkXUUTapxfm6IhrjCdx9yMXbDhgdaCFTJuPSnYBu%2F0xSe4bm3XX%2FcmOie01GwbTQLJcTYbg%2BJMYtYBifkR0sK%2FVaXTFBbVS7BHBcua1ORnnNgXQ6MMOLucMGOqUBy0sbvW24YBtW0uRX2G7ziyOAlSaeJIgFYJrdz4%2BwtUrHJ9crfxfWYKne1%2Ft6wb6pQyaBIG%2FHZJzg0Zexsz7Jx5OiZe83xJfv8l7tHHZ5q9WzOxTyQ3VLCF2IanuC1cDoxFbpIEzVqXI5qdwaRi8SUJELuPnSFdUDHo%2FyMM24qg630BpqCWvaX74FurYH6BSsrwguQv8E%2BMGGYbXLDhULorpnYUzN&X-Amz-Signature=6ea84f4c5e16143512fd2fb57ccee5ed95dda103f00cbbced9d1d22c739a6279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
