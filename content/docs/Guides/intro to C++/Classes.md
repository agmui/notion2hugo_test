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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KYQ3IXC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQClYOK6N9a0nX9u5miyXWAVsqBtPys5nBbzRDIYyv%2BY8wIgKZTGawj%2BWT7UfnIWH%2BGd8kHRZrR4CMMmgvVSBVeP7DEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOoNRnBJiopFmq6LpSrcA8o%2B30fHtTEp%2BCC76PheTJ2v9gLTxMqpRsflbN4tAOoYsnMP%2Bfyb8mba%2FB81PGDObjfGMmV6Tc4elql%2BYNPeUBSrb%2BsbMlZg8uDdi71ajCStbJHIqVPvwaEyXhsrqRfz6Y3DXDIRGrpEgd%2FOkv6drIuzSPirpDKzhuLE4ta5W1H7XbL%2Bg3ujSLZgTBHLTrXPVK9mtP63QN%2FRGqsd7%2FcI2udAy%2FJc7fVjCywr0nJD6v9u4caeJ60wyQ5ctd0etc4lR3i3tR2yq3NtpsWILH%2BNDu3bM5hrTT4CWvhTfzqqKuJ8hWSym7Z2pKM6di2Olga0hWgYX41e31p1wNRU%2BHJwa0nNhuchNZWjip1U9g%2Bo5CJ89dsjke0%2BRVvl%2BU5ZKdSjdUCCTCSrxpe6I7npXOYvXNDwjnaS%2FpPlse0oEcyFcAuTGqoNg1yHzb07o8fi01vliZXFVfbdkT%2F0WiY%2F9AEOUcdrrtoS0GdbIc3bLz2zBIBbvEILpDKYPRjgC6iMRQn40v12IPmEN2CFe1C9S799OfNxvv1xR3QY7gU8Ii8D3yWpkVuayqXqe2is4eCNAQ7nUIA6MYDcC3SfQZ%2FZK7gGDgNmdLzbH9akMTOb1UWh%2BUMf6z9pfb0F2EmArE4yMPGf28QGOqUBiiItkLsDfFI1f2ute%2FoQTZV06uJXfd9awMmKB4FcNj2JlEfCFhISRmGFU7bx8XzXChGac4duCn35xb1rZ%2B%2FI%2BuGS2CqZxM5OSZGgQhGLjR2dHWbuTdODS%2Bt3uPaTcmHDDof7agrfa7jypF843Rc%2FF%2FJgUU4UXUB68H3SPoCmC6lhjYgI%2BKfePayybfp03hsrLwHVpV%2BRvlw7sDWsB2z3AlyMT6pb&X-Amz-Signature=114eb0526b42091f9541c71feebf56accce606e18ec409c7001a03ee89bfb24e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
