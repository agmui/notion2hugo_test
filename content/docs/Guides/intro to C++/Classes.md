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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVDGMQ5M%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAwC2Z7mTmlm4%2BtYw1SlcCJ5D2FRun5r59YoC2MMUsSAiEA0CdShDd8dY%2BZJPzXmEH8Xov7K0KCJ6NpRS%2FEJltxcg4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDDZRCX1Vai%2BMTzoLvircA6I1dxLZkahvw2A%2F%2Fn0ZSPKNKVUOm%2BHd0s8LGlTxH9pHhoWtnsDutD%2B2kFYNVBth5SO%2BMFxUslLiEqyrTFVGACDumH%2FzaEm%2FI%2FBDwWQ6GEW2dsZazIhlTLLJsHgohYo%2F2RiVjsloR8SpYXmSnc8dBcrpws%2FunwnnEVLGRJktXF%2FdQhO3W1zPb3xf9mQpszAx6%2FvMGV35ge2QTUn8L3hgcNjZIQ8bnsCOWOUrJXuszlQ%2F7lmsvV0JKQv0AE1IxEiS3V8Dk1E1%2FCpcoV3%2BPeBzMWjAwf3aLROjnrHoi%2BdpLff8UtSGCCasIHox8KOxoqrh05%2F8qM0VURovfgUxYhj0XMtMWtQ4ou03r0dBhF0QuXFzhURki7SU0M9EfOlZtpDSPr9hEtPbrmeZdujR%2Ba0ltMe1j8r8I66NKlyg4pQcCGMPaNBWz5AZW%2F2mCdru0ywsBJZd%2FuuRxW5GBUASHbZ9Z43CaiC1eXBV4C9DNJkWAZUinqVZYlwi%2FY17OkYdc3U6nySQJV6rtgJEdJ0tdm%2FmlWpH%2B8YUERcH2MtSOKIyNdT9LmBpjvkkXroanw5D9F8CHUWI%2FC2PUku%2F7BiziPBSbkvH4ilA8P%2Fn%2BnTQAknKeVEHquGf117RAwQMDW1aMNrSvcQGOqUB4nLMUr6Yf8d2A6To7AhxFrSGNpDPC3eqjrgYyh2DjFFnANyUV%2BlAX2sNSoDSf8j4FjeDNrid6tMkmvL%2FQ02MMXJ43X%2BOmHWUm%2FtjkmF426QbgI6ms7%2B7R7udsLb%2FAp79g%2FwX4EHEaYGGk%2BmCrWHtdBAVk9%2Fb49e5Vgn%2F1Y%2B0B9KHXCFilqWBORl6PBC1Hz8pl4o7L26dk%2Bi9spMmP9RHnJiTF3vf&X-Amz-Signature=295a5feeef4a6aa22d894c9283acc6530fe8d70c3ab79cbddc3b6bb4e151724f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
