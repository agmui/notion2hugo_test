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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L7FDQ2U%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBw0BsygEoLWeIviwH6xR5rp4mSiHBUj1GYRmtXnVnEgIgIMq5hJEaeUY%2BzvusnpuPYRfQFSTQ6rNyhcmpOGq08r0qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEndGTjgRLQW3ttkSrcA9JPgwVZelui%2BXkxbyUfp1LPLs8dbnMmZZgt7p09YfB0A3CFwvAdcRij3oY4Wym%2BJefDGisy0R4umE9pf5FtdlCJSijD6kQkUhnbqLqpN7WGyLw5btvld3EsR%2FyrQeRPiM7HQsJH3rRFR8wj6T58OppAQCsqsWydncQHNY4m1TsBVq87DLGDiv3gL06czz8J80kBi6TFYq4yTjjIm%2FGpp57oym2mO6N3zeG50MWkfqGE4%2F4EmFq2bHh14ejZLKPCUTje4Xd3FG%2B8NtcfXQ7gIGK%2FHovol%2BOhBgoua40%2BqMGqCMEncyqm7uHaWUlv5XxVuUZHWDasde%2FZX7nOxbeq5tngLKMoTmFKj2nOyN04sVNRqAL4rJV8iB850nOTrhfAaPwNDIotFJH%2F3OFKFo2IIRNFZ2IT0%2BlY9U68lVEVJ10MJMbfOASfmHbMhxw03KYs%2Fm9utDDAnmKFxn%2FRxPdF%2Fyv9nI441TgH0CjHUVSBElNpMfDwN9xQnfj94IxSufhWGG17lRaR6AptqtNSWKwgia2jg2pWQQxNOwPxYAF49SfZK3LGt%2B9Ckk7ijn9BpZjYLWJIPLljh%2Buqv2DrJ2h724Us7kigsykmYfjtph1cNF3KneLfU%2BPNUyNWCTJYMPKtpMQGOqUBSCkeL%2Fpvb%2F1kBTxHSrVtOXw6C7Jp9R6N5RmtCFSpTMWt%2Fnt5opcIX7rYJkr8Bu9MMWgZXBwZCX6VrLVuaFzI%2FheBENe1fByOzUo8M8wiTD3APz4dtc1dA7Bgbhjdqp36MluhB%2BERGbUpx8m39%2BkevOo6c0mhzL5Y%2FrRw%2Brz%2FbqdMC16C1OeKrHTWLKp%2B3v8n7svypRbo0Ki6R6BQVq6QPKSJY%2Fvf&X-Amz-Signature=5e32291971c95dd03f5601ba9eeb38de28c08b73ccad121a7d082cff381fd11d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
