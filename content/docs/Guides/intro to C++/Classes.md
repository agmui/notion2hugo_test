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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXA3QEFP%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T170946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6jXmrHLQn24hsk9QTclncjRnimxUZZX1zwZV0fvYlcQIgX%2F7dURbqKGjPHvMPGegSpDJa6oSjuA0sbSVDiHzakrYq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDA645ADvfWQKUr6cDSrcA%2FeE7%2FoHU%2BvR16Itnhx50sO217hNXrHQ96UudTH%2F03g5PHvS13JovYQjt2gy%2BZU9irnqzMJIo3fX383lt8Mwu%2BHqn1EIm4dGqX%2BrDN5Mb0oOb5LMyrJGhZJ6NJMc42gPgtO8ExGUVbPeuLFaBE1y5uWqK76vlcV8n%2FTkHJLcUxaZMPVRCjIv9oSDL5bUtf4pSwBhP7k363eJ0K5rPndzQfcTWwoJfCW3Vojf%2BaobEm3bE%2Fb0vkQY3FUaSTSNEH9XT83qTPq3MEmhKI7HqVOppFiXZF31zegk5N7vb3t1VLs88udGb3RMZASZjjr97zPryjoSvuWR2gjhJhG%2BejFSvipUWPHXfgpmf02t1lrP5qcunJPLuXvkAjMQIIl6XJckaY8xzYKdBTynC2PLzYn0Iurtadkbj3L%2BiL5c1uOkP%2Bo521Ufkb%2BUZZu003tUQS3X%2BKHoZLBFRezPll0FMTjAplHf1QxxDJhIeIrB%2Bt9nzljlLuutyONxM15wVe3GmOtUIjPv4emeGnonRQJ7W%2BfyZRhbAMuvcS4jOS9nYBRLg%2FTVvIvq8jmG3PNdNV2%2BVFWVh1uBUEJF5A%2BylLiPhQs2g2fjKYfTdK%2FLfOy20Bkr%2F4Pdd%2F8QvJvk1OCVrzeEMM60xsIGOqUBg332ja3HhMdfcfbrvO%2BQuQTox3k7MxodPMR5qSjWOJvcKgRNqYaxPmfDTQgolzYlWBSL7prKAnkUkunjSDjLQrMK%2BtHXwVeNioObtrODAjR15CD%2FPsnMXkYtzqOIpIB9n9w955n9exkx4NVPTyT%2FHaqV2k%2BH4FvxOVOto9fkDm1s9jYduFzw3ZfHmrTlYi42WMEns95S9UMipWVQzNHnuotpEzgi&X-Amz-Signature=29f62348523c4051c1218fe228d403383027561e31178e09d8cd4781294f0c1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
