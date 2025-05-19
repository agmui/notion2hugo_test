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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652OJUJLV%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNo4eTHOOUK7mGTrT6tdPbuJf2TRVGLHjldCEv8vkCzgIhAI9y97cDbeywyS9JlYcA%2BDwarAE4mtyUPKWa8DtUMBHOKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwN0D9FXNLUDtUsueAq3AMqijucghlDlEY8w%2B4jZq4AUJDSTROQdT27RZ2GS%2BGGcGcGSPAiQ3nfnLzT4ygIftkX2ftzMTuO9Aqqz0dCgcBIFoxtEI3cthMyexv6Y8HwKveQMdZ480QgbX8roKkLTIcCpABzRegRlTKBdEL5CT7BxUI2kGD4NmcbrcvL3DzAON0CxGsfQznoccd1yXosT1FWPIfj1KhQEm1JHBkjK%2FYpcmQds5Snpu7Y%2Fb%2B9OnHIr5O8JW5UvV%2FD%2BA7mU0Cikump0vIjNMUXrRbVt8nFSWx6G3l9Aag08FtdC2K6UXequ7pNSmxdnYBy7RFfLZwnJbIPYPTvSOc0bHYmYRsJuwfPTXhmF8Yw4MrFuhlT20Yv19rzF1gI4CgiACZ2ZOiMUA2raF42Dm%2BaGHpgLtS7kDg8B8JNg93Pzr97gx%2FfGYfWMimGQ44rE%2B%2FG4ZeZTUU6mJNTBF7vy2dNnQNFxfwY%2FPy09LVa8w%2BY%2Bk48Zymt7PccT489izMiE3w5SQrPhI22153zByaY2KqHUJJPzGgCl3dDPSehKSZKdWY9lJWV5FDhMZD%2BOKSgt4oIOw3W1a4UCOdidGFiHhNpecnXcCcxG%2Fcf8iSj2r6dUPl6DjfBSaSE0Vkez1Hw3DuEcEvgMTCxsazBBjqkASYLZDN2m0uacfooZA%2Fqu36YPPlRFofEpnMM3ZBrCevLfwZabXLX%2FKrtnvguNhjARmAhDFEXQWt%2BPta8x71fLsHM2Th3QhhcHVJMd4qokf2IT3vO769UgMCkO%2BNrHYx5Y8aDT8VPNh4b9Glz8BfAcfJzSyJ9lEib5tvTxZvuVZ1PAGdgr3qkbPGo21ZkKhFbSq2mspOEmcUnJBF3U%2BUeSkTkqClf&X-Amz-Signature=d252706132a8c5a23dce93c1a277de21027df681504bbedde83047bd90bed0f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
