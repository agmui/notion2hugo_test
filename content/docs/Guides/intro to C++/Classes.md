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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMV74WYL%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDC7nuK%2FRZfWEdsBlwe9kyjYDqny46Zchxp9rDu4vbaRAiEAwc5HCvkXHTNFb0jCQSX%2Fw0xkIj3d3%2Ba7fcwBQFmd85AqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2B5C968dGzfQ%2FO04yrcAzadF7gx6Sc%2FkXbb7wJxxVdBeoxv4wmcTmQq28ujwdkl3%2BoLE8gsAknhIUwu2D2mSJ7mPYW71yPCMboRV7IQSFrBupYltW7HlQBk2l6XqShZVI0Fd%2F05w22bwCLVjJ6Ljytpzd0QoE6%2BPW%2FyOaR%2BycIkRqfVaHSh1Gx3SMnMAGVUQ58siGbbo8JulQlZ2EpXkeraJ9zp57ahOxB%2FHT6X9058jvLqsy1su58x53INfIv%2FBgUWershwBpfOYJBDdHuDb4ax7mZsEL65fNh4WI1vsPuyv9OhSeFwPtgFkpr1yMJ1%2FXXjsMOSl%2F%2FrCIRaMdGtxTU6%2FK5GNs37v3jQToMHF1jQQ1s9zkCm6p4pkrHCFOS7DRNQMCVB1iRFbAyhowXaZeeM8GTcYKr7E19YMrpeaVXNEr6EamF5O33ARVx6Smm%2FoRZQ09sBMFHBXOq%2FffylzP%2BNS%2FeOKJIFTCpp8cWENwvcBw2NXddvFs81r1YfdqlYi3heH2NTSsrw36H%2F3WmSXNfw%2F6PA5vwqq6Y6TmjTXZoMivfO4LY66hDJ%2BVqTRaCUK%2B4x1E7tiXODNX%2BLLXJbnlaMo5aA5yPdk8CWkjHTP76YOgBz1XGG8fcLhZ%2Fe76M5wxGuZAtKO3GK%2FliMMLNgMMGOqUBWh3Y%2BAl31MYHDFtD4S8eXzEhLiUA7iRx36RFRoc%2FZzcTDIP8E3rFlsxnd1jLi6WuNl4EfeEQaU37zHtnWbQTUQ%2BurOWEZ0VHKD54KReBWM70X89u6FJgl0raWdElapmOcE%2FzCo8N7A85BEJm3b3lzf%2BVA0bbYeXZu7o4P22QZ39lLX9iPW6WONK8RqRxIK22Pny%2FJvOwxxyiNuhITisQtW6m%2BHkU&X-Amz-Signature=987e0d76db7738f72c45584dacf340b13be9f0d16f680ed17d37afbb35111c3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
