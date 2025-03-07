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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NTIQ7NY%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIDMIR94Db0YgkylR6eYeMmokZIP9EHZxFa2we%2Bnz4X9dAiEAq%2FgrEsPvLoJzIrOrathl64NgvtEKhc4KopPVdoxn%2FFYq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAgmp1PrstwbEtDVnSrcAzBw%2FqTeoBjquM8CdP4iAvt5ZAZV4%2BNw5viXZ7KHRh68gsWwjf07XoZKJUXuLD41QXhBF5QVGtQHuEyvdMjaDgdE5r9uiNzYZcojOiDv34l9amP%2BW8e4Ff76hnL6AF7S1KEhNhKixdw66NSM01wubPuo2I%2B%2BQpD%2Bk5U5oZxvVfqt1nqWjK6bjX5CjR3fjHXKC%2FEYaewOVmAMO4j4oFcvw2awBdUcaotnzhSHnyhBTJcSmmiDGMHpxzI%2F4hFMMb1y5izqjPiZ9ihsgY3JMSs67wVJx4gtTV10PmUmqwIziwiVWRyX9vR0%2FFuFVcbvlk8WjF7uQHB09c7G45ZTaD3yHVqGCq6iwg1iLwdoDcJJDprbnZ%2FVMgS3pdNEuyKkyGHgz808zTIszhvHOFyKhJNNhvXQLIB7X8IuGuChGafwU6QN2eXHE1ZNI%2Bw%2BHQqB12pZgKOrSWbzsIX5RN3%2BC8oOoVvm7TxefVqFmEPvWKUNDh%2F1uxWoxT2yTGoqaHXunS5bU7rgr1fZbtdPdGqJNv7U2yr4xTyOfWMS2QlF5agfQBVD2%2BUevmO72xh4aJU3KJ%2FqMxOjPcDKkeSPeB9haEKOdt2NpTo30VxZQVqi7NTICl%2BLafsQ45PCC%2Fp981q7MIDVsr4GOqUBlltSc3IJWdHZRoEMClYqKXgccuLBf%2FUzXi7r%2F5thL7hY7wj819tYF9Tr2yn3yT6AJV8GZjx5a%2BukDvA8UAXFuJJuSeF5u%2BQbn0q41sV4WnYhczsII3JLICDr5G3uN1A5PswdjHC%2FmK2tHqNfrEHT5jlSW5eOQExIxzr9taQuuUovFYAVR%2F03GNQj8gis6DuekzqL9UcD4j5XodE4qB34Fl%2BMZJhJ&X-Amz-Signature=d8666584ae062b674699e5b8117414081adcd6a63464573e0efb1bfaab71a519&X-Amz-SignedHeaders=host&x-id=GetObject)

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
