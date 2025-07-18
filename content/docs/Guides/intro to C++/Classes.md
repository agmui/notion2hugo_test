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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDTPA772%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T042909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDET5VIvhNl3ZLFuFDNG6kINf4CUxF1pZsT%2BgpbU9EqFwIgVAyZgiEgeFvLv17HeNms4rONzkbPLQF5UEiaIpcTfiIqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQGrQ0liD1RlmNLmCrcA2q60rIq0BCfs%2Bvxt%2FB5n5vP3DQAj0OXAcjU7YVEmgb5ZwyBI5roZfrPc0HS3O0H2rZdaXkyMRLfpPej%2BuJNrSaWPdwykUVPLdOH0hFSAg7nPSxIQ7jJgFn7dKulNntzevM4%2BBxa4xTpuAL4guq8XMXQqb1E%2FuJISmUNF2w0uLmruuaRlsdq%2BO%2BZFNuKZl%2F%2Bi%2By18yCry9ZzUHU3AqtfCRVblyKGdJMiBKooEVpFJQRFGZDmUGQMYeevLc7AkpkdUXaobH3jkf3YDQUPU6HLgQgCV8R5LNPWSVLik8F399rPnhUtszMD0ooomPKzAOPCIPcI%2FhcpMS5dpIDOj%2Bp1MZs5qIDIuyMtHagm1GzBhhvRd%2F4EHqEs0RJHYvJRh3FLAd2vEAXZV8Cf6u7aV2lHphlu7XHcZZLcsEV%2BW20gFKU3XloJctvLBLBnaeQv3ktrFqV3U8Biu3Y4c9b8o5uETFge040hs3zEevPFK33UFvFU1x7%2Be%2FF8siXeuJLeGgc%2BE9uSUHHcWNOCALOcNljWEBxxxzV3jheZQ%2BryaeoeqxGestmCbpWy1%2FIcnT3yAtgswl29lFTwcxiwI02becI8smA%2FPEQm6pNJNHMf0VghqArNo%2Bi6%2FI9MU8Lrs%2FITMKqI58MGOqUB0Np8ZhXZB1dYZGIOVVNFJnYzhZCosNN8Lc3%2FYS%2Fn0nZImyWfysseZu93dIodK%2BOlba9IxQfhQQ6T%2Bm%2FKLNBDwCeuSecWs1SiFvLV73SDtScKnRxzskyHE07myS3zLv1%2BHf0K7cArad3U3wG5E5wm1tdASfII7qI096AaWhZaWJmbBVIKtnKzVG2nmgmqdelJfopaFBkiZcuudckpMMthPe42OKlx&X-Amz-Signature=689084751adeb548ba6129ac1ccf5344d611082a8bea15d81e2a382236ab371b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
