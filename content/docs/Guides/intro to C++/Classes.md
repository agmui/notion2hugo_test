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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AZCDVHO%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeddZvHkFpdt8hXLbj6MWmWcwoFh1SaWcgOgkKF62FIgIhAIul%2B2%2BWf%2B8IYXotgYsb%2FDULaorD1euNuTkcYrQRmDwiKv8DCEoQABoMNjM3NDIzMTgzODA1IgymtaqhwBkPjwjUzJMq3AOA5807iNQzCR1cNAH5WB8BYZplH%2FNv1geu5OKK9CpnHmpqfKLNpEZG%2FWVLq37lCE3JoX7qxALj4OZ8zxHMH9vMpBQvlo5BcXC5GQpRwrECb2hh6wqF6mPvHgzsbFuCmIKI6aTm%2FASi9b6vfvvzwGyruLiNE1zdKNodY4rIAhEKOU3EXNZOhhq6bysTef3hQWZ256qAHC2pfOKIa4If7w2gWB8bTy8EuTRV4EDCD52BYUopY9pievx40Oc2A0MkNMcQ1D2VvHqwKiQgqL%2BJS8qQOvz4nblRzzmy8KtLLC2zqfGW3IAQPENxzfLZJyatBJDvG2cEV9SM8tbo0rH2PRLPdV2UMexBY5SwA2452Pbtlfm7ZppZyvGSoeNkRvid8gPbh9yZ4to71f4WtIHSMrTx2VcmP066tSlmEm8yh2LWYKYobEb0B8x7IkTYsN1nvBtddLieC0KFmo%2BOyQiI5yhI4vGoVPa17c29IfvZ%2FIYoPSzlCFM25KFyCoHu5bCNKdd8SLL2wFEMYZh79QmsBcZCJ5gIqpwKV5hIc9auZN1JMsmC14o52mBKydt9pSi%2Bw4XL1R6EUqcPLqDS58g8hIG75etz3Rc8lBF9QFqIJ17%2FCxq7QpiolTs2qaVNjjD%2B3I7JBjqkAcqMpZrJe3HWQffdTgPdsadjJ08A6NMw%2F8T5dlflk5oz1u3oLruyXjl%2BjQvRzYgsIFu3SbVzjMXX7%2BaT9WV7d7zjdi9RiSrVtOkOMSFG9JhWpZN3FSjekmtezEjID9KzM%2FrUBF37noU1kaRUGGmuLyd89%2FKO6inuoj04BRgB3D9gpxMKNuFL65MECuSzYwySk9iHGhUuLFlXFbJQRbJbm5UmF8GX&X-Amz-Signature=3ff511b8be9d04173272d7ab414b9c4c1bc03de8b601efb73f0c256a36999ee5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
