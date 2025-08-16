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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFXBPFEG%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCICLrYA4%2FfQ82r5VlnAAIXj8ICgK5R2vouDIuOjM3fmzPAiEA1uymsxfVAkUEcoQu1GIPY3gOdimUL9kjQuAwSf6dIusq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDKkJPIrQaHBuzlBH3CrcA3568yWghc2Bj8kl4DXLPqMGOskg%2BytBefkDF0%2Bg4oqAloUki2wdg8JIS2VGB7hpVrXX%2Fyf%2F9kEUDycsqdyntGn5iFq9sWPIs0DqybgCLVEcs2L62jp%2BCwKn%2FjTYIKs4yqKMwHOVQy6A0F0aIkYxGIq2BcNXM1Fa9PWbTtVK0FEpobEu7kgwaUptyhdlykCeKpYXUyeu5Lm4Q7DIPg602c1fVvganc6%2FJiPzwaTalFPODQJkwevwICVEnxesHcuoVqp473Yz1fwClsYoukxZdoEFF7P54tnUpQ7XYbhSY5n7Jr%2FPygZgOSCEiQG9yNEOaVB8041MOZkcVcz5hGYj5YR%2BS0koGR9cN09FJ00c3qj8h6Gl2%2BNGn12CrtOro2H8WopDsk9sCTwQ2slbSwtC3qXFsDiik9QzEbc7vp6pFqZZBnyrj2GvwVRJMuvTQcsYTIxuf6AxZRshDO7Kj2kexzRTJtjYiMza3gA%2FlQCoR9mLiFAu82lvnWdlzA%2FHHHOZLE2CJqGwTf8n%2BUrl7l2jTxeD5zk1p8ura2imVoh%2FuU3nS49onSFCnaxbvoSR5mHGNbrrM5XFYkanogwRMwdbjoRVR5VQ17NxbxWjqrLPrGEpMasdQPV7zmXqrECGMKjY%2FsQGOqUBnhf1a9tgdHUg%2FNyHT1pgtc3fx6yo5qwP3WHTS0gH9569Y%2B3mbOQ9P6BGYEy0mqU%2BBRCCSYnzKQjHMf2IyApc%2FD2vuZjL26X4g34FYmKxE941uMxrfOFvu3zRTHD97qhFJa%2FABj9uHYRDDvpcfUe5l3Vb33TFTkKC5K9jHcXqJ3XcePc%2FVUQqZ1U5Ugq31frGm2Fr41WRIHw62BlMuJ96GR9987YH&X-Amz-Signature=a18747c93d00252442ca1c50dbe0fdba3172f75be601b0d7fc398ccd2c13178f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
