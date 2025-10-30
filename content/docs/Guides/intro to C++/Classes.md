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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUATN4ES%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T013953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIDGdsXpUbjCYkOPvJI367E9U2k8iD%2FBzfHG3sl3ODFgsAiAEzQbUoCS24UZLm73XJE%2FaMF4ghpd1n%2FEHb%2BOibYnsfiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCc7gJqWGFGeKbRuOKtwDrOtvtJSDL2XQ1F2ZwSQn8%2B76q16taZFuM9yi40JCRbnghpxYvUZNYuxyLHZD%2BZxamIv8S6gUCoNbACdC2pWNJdkUZCiJ2rjOYR2vmsratQ2NjiDUrh5MLrbbhE57H%2F7Wuvx9RIIGtTSonppGmCKu4aj7VgHpFoBKxRDSFdBu4veQBG3%2BKR4WkyW5%2BMWGrx8DUw5Jq1cXl0ednutWyg2JPN7kRBbskyNhEsmvfuG8j%2Bs833h%2BVKR6R2Hcn3oE6jRqpyidFG2PE0gFIuODobd%2Fk6eMK%2BjTpriCGH36thWzUZFSOMDOroET1IkGCWzz2fnyQ%2FSLhOq428aNd2Nfbau92FG9ZmBOoRbZB5WzIjzKEZMee5NlT5ovvPyc6nKuA%2FUxKRPaVUP3zL32aBL%2FASi03tmp8mmFYuiUt4igtj3asUoQPI97I6WSWHqKYVUaU6zOZ8Z6EV2cgzKL7clRzwtNzuGzYDvDScctbRGMM4Py8hd4EXsvRyhvNZJOBr5BGf696GJ%2F2ebaqL%2BexSj9YqIusEN8zQSbGNEGMG8A%2BdzNJ1zK2TIWb25o3yKFiQXGfsBjiGCVxtcmHGiTxHdqt2CrHhwqokkSBq8c71jUNEEGmD88XZam32sSMetyss4wnvWKyAY6pgHOBth1nJkKljLk9ASaoVYpt5DdyGffowsHDermeviqiFCA%2Fm%2B2Yu7jfzsL0iHKbNDOrgMqpap6IokUGgwyG2XSE%2FVs1EnZ3CCddXbgbLLjWvtGVMVXqFyfOLYZLp5arI591753dybpAN5zb3A%2FWO19vA2bUpe18vuOXS%2BbvdrfbvuYemRn8zwXisP06oOaVLtxlNId6cSkoWr7ayXHP0FjiWS8homa&X-Amz-Signature=40bee4e207ee112318ce4c06abc3baf968f6a415c059f158a4967ed97bded7ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
