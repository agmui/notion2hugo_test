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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654ZKBJZM%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T021759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCls82To6Fg5qjApog2Zc0zqn4vsAiJlxfFhMgMCjYjywIgBIyh9MmLT%2Fo5SGM07aODls4V9tglLqYnFjh09eQ4ZfAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIep%2FI5oyrrFtrOPJSrcA9ZKQIL3pUZI8zWUIMB7n%2FfkH%2BZRIU4rdX2W%2FP2oJGdaa5DdAwR%2F7aNYzuj2T6%2B4bChhTLtnRwhwGKGhfP8efc7GeSmQx3Dx3jFJgyymg%2F5Ah5Ti8KmO5ktnXf0%2F4fxu0LBEWqASKXtPFIj5hE9qyPymmKHrextLUJbTm%2BlXqR89vpd%2BNMPChxXbazbaqPspNAs9oazaFNIZrmgipfUc1jrZxK80uTk2euCamjjc1LGQtb%2Fw7iEKK2QmY1x8SmklHZ%2Fj73hDtssvuG72PdBgGO1RsahOIl1x9gZLC2HqzEg%2BzTsp%2BMGAg7hQmuFOnrU6g65CxBx%2FYmNIqpnz7m1aal%2FzYoW66Zb5xgGcBHMzlQ%2FfLgmyG2nDCv3yfqtRJAhXxoKzsuNCXQvluNqSpf%2B6sSqUp%2B4Bjy5Db6w6yhAniM0V0XCAS1SqBH1EbxmEUoG6urkqa9CgEc%2Fn8SKbowdbz00Dkuxbo1VJ%2FZp7oUiKm50CCaK3NGnXA4YBAC8VTQYhEezjpPh6iFI4P6Red3kYKXuFwzB%2BMSnKhSeWsxdU0LklLXz8SIJ0ux6dxnIGRAMoaM7EKjzXINo1QGmytBYvFv71B9Jkh8ofNqQZ5LaAPhdp4G0Qhi2sJ9tychZBMPXUib4GOqUBgoe11kE7NnFJhm8Zs6T8SMEq%2BBN76K2RkhWHkdrO6geVgmAPFneTSlWp43ISCwQcDLPElxHHqKtGmYALvFdwHDqIVZf9tCYrwtViJd4y5cnVACBj7SEyOh4XJJudN%2BAE7eLRrx5DuGEsBk5%2FA3Wdk6acWSMi3Ld7TtN7dYJQqtXGXcBSnDAY98WhGHKF4Y6xWTkx5msrSGBiTMfiyv%2B7Yn0vqQ0h&X-Amz-Signature=9a00dc8328a3f2b337860179f0b361bbc8f87924b94fafcb4598519d1090bfee&X-Amz-SignedHeaders=host&x-id=GetObject)

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
