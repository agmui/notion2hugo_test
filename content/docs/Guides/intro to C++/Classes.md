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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJHBSFJ7%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIKEUMkL6u7r53XN10dfz%2FHbPu8miyZU1iBZUc9OG2nAiBdNePTivlt52iD%2BQEm%2B83UYi540heYOcvAoQ1xG7tGuSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Fb%2Fqdd50SCRF989tKtwDIyuNk0ya6%2BTU6az2RR4N7m9Bdlqh5ivqXIFPR6scxDk7RdcKBlVRRK%2F4nZ0F%2F39pNybhl6CJW49pMnYdPtHcTFBhnsLwhxFymuvwmjNt6srQdbmSlIHXOGPuFsX3L%2BHt%2FQpwipnu%2FgpaDzJxI%2FLXa%2Fk58QMBA7T2U0Din792MPnCl9kTLnHCWUwh26e409vGMC%2B73%2BKdQu%2BsAMQKI0u6J3lKYjBCWY%2FalM1zO8hagt20myQC73sz1Y1pN5RcBz7CyWw3iCOYahBQIoP8%2BBwStB4cNGV0akn0hXdGLpwC7oj3lNotyOOXTpXpwSQQV2BVAllA8DZwxv1VHC3Pk8Omh8ZE%2FUEhEQds6NdFA6QvwIt%2FVfoK5zDAo7m3NoUQ34dmtseZ5Hiorh6iOHM%2FM7cFZissVr2LRGfw69nyFC%2BJXaH4BKgAUYsOqXodIX8x%2BabelbkvZ1FGzAzVSAoETGrLNTsiWqkMcoP2F504HVpbR8AI6mFLjfdRMxn84YEF3eNLsVR55inm%2FL%2BLb7TF31y37qbbdfiwbVJb8h%2F8LPLuM4pxhAItEEbgyalKuXGXHcJxIUobaohlt2SfyQpDS2Om8Y7tC%2BuqnW26NIsVe4JCKuzJdp%2FWdC7NhTx9Dwow7ZyTwgY6pgHr1HhHywwqXOMAjMZQTQy78U4MAN2WD5Dn2CFRdqcer6yRl5z%2FC%2Bw3r3CD6myemgVaG5dwQNB9R%2Fpz%2Bpq73EdyHrzRZsddKtsV6s%2Bak7A8pXYWEBg007zbw0uuHZgWaUneGsRGtwd2zYL%2BLBT%2B%2FXkwl3t1zX1lM4MXRkAkvzX%2B4yPTb6OiYMAU9spnu9eltSkeqv4OPm4QF9BArcYRX1uhnl%2BcWg1Y&X-Amz-Signature=04b9fa7adc552716460442a0db4aee0310911c18572dfd272cd459039c3bfadf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
