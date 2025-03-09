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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZDL5UWJ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T030807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDkmUVP1fEyM3MHLj385Bqd5Hmo6%2BdkbB9CpOqI7LG1fAIgXQpvbtyRN%2FB%2FeDrwGgF3adSWjKnwwwkiIlcsfOKFRkUq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDF1hkuZEU63xHC%2FH4yrcA%2BVp5AzltHObwkL8A9M5exJbUux3ghrVf%2F5YO%2BTlqRMqZario7WaKhqgh0BSkUvdH2ZyV2CrbBDeUQ0CefzMGVRd%2Fyd6KtqClwEisfVcdj1BQxsiK3DyamrUibSai%2BqmlXvpPSfqEuziKb%2FqdfQM%2BSDoAa7cX4s7sSRg93VRx5Ii2urDH5ufHqyIWB7eSEDWnv8%2BmP4P2Ft9mUe%2FeovPeiddwA8Zj0uYq9sXunPHTbdQ06v3jEAiIREA1pxSG4R6%2FhprCoC95QXskBmbFce9QcR6tE7BgCC9MZmRwiJdxpKM0TCVpnYqq7pibxBH26f4OYB%2B1y2WVlY5wjPMdOTSrHG2iWacGQAMvyi5FxK8MXhFsk2B3ZQvk0p89wU4d06ChlKLHpzWivMQErWbUchl%2Fqp%2FtXsEjbAu7Awwfc8thgs0jwUGnKLqLxnKXGnrhuEu13zKONNelF2BVai3dIrxNJe9L4RbOvrWtxjc%2BFc3AuJwWk2fI%2Fe3wnaLDfSEmikNZxZAN3SXrn2lG5gbB%2BVlAgepU20tYkxLdZkP5bRDqJ3NU%2FW%2FWSAwQxt%2FTaiEPb2MHZzR43z5kU6Y0nl6IHUcpmAfDLU3TvTrnF4Y6hjd722hm4cvINSA44EW%2BUarMPqKtL4GOqUB%2B7rneNg%2BG%2Ff3AplDlXmwPsdtzZzTUfeTDQtXVTC458xZnsXa%2BiUMF%2FjgcMnSlWEWVvqMISOavPd5pThm0QZM3JN8BlSAMDzickJvnBTHxr%2FYGnAOtj5TuxgWtz9VPiiW9kR9gvfbfRG15sS%2B2pSnBHtLzZuYkF2VMD%2B1vUMFIgaP3PAayUjDgTdYT1tT2fWdqoTixIWMQkuqbshxuZeZlrdnLYkO&X-Amz-Signature=17c3d83a9b1f80262425936ae090812f91640308c72f9b5aea8a4ebe65a2ec9d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
