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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RG4PLJL%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCO4M%2Bg68LXIAF3CVzee6vKstl54PSzfyDtzuV9w%2B%2FoEwIhAPsKYT6e41xDRj4E%2FtMiLVoHIKRis0ZLp0%2FcdAK7K4%2FKKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzybDqCb%2FuEEv9g3rwq3APLGWXvIg0icZdQHVEq5apemR54jvf4EcLgghF%2BYperaQhCzZ0lzPyzuygQT8es4a0Wbp009GHH2goKtldSR9N1u3R8WS%2BJgD%2FZ4%2B7xrdEeClF7rhQSziDgBMWfpoxmvEqOkcpz%2FvddzihBk2XI3nTxzE5nVemEB0PGeshsn1yRYc2i0nPWGuwQFk%2F3iMb6OZ9omq0My7%2B%2B4fu3%2FQf0Av41gcrNqUqoEsQV9lGCUQbT8OP9Jn8ZVh1RsGI7nWxb1jLau8W%2FNWtlKus3G7VGRfBoSi0gQRdDZ1lGR0Kdstd42wQuHt6pSCViZqe0Y%2FIPq8To8GP9ZLT%2FtfjxNOpbLpWFpMtJeV0ynS1FVbHGJ0QGyMYWe4JvE%2FL9usLQAApks1N%2Bl7BcR%2F%2FEfwhLzGSJUrez33LboZ9Cvzbg2WzxUY7Em5nWwudO9lztglTvZBEpINNqiAOAPDQoBCVhHeD06On27ZhQplkj469VET37TuPnpPfb9X4kW8fHCR2IML7AR5k3ye9Q%2BCG9pPa50s1UAqwiHUfAyLjvb0YNPQUcCyVBUE5NBJlQ35CFzjilOdM0HPPWwi6qCodmieO5dCkgK8HetNoAXiEBJCWF8VMNoXpMaY4cm4JTowYeQM2sNTDnquK%2FBjqkAZYppNqda34xmJEKTjwz%2FhdtuMcKpq1WxEKBLBHeO1AvMTcV7cYdJwhBi9i0okShDZkLvk%2FCe%2BkGNcvwEtbZ%2Blf5sXI84XMx8SWsC1CJy1R6cSjJn2htO%2BUoTUXekW5N3mE9l4u0Wy7bzjY6%2ByY1%2BtKCpTQjV%2B9coo4iTW1V77bau8%2FdfAepEAvyJOC%2Fy%2F%2BlWkbMXJGesML4B6vIEXe8Q%2F4Nl3DG&X-Amz-Signature=f1a714034d2cda15a7a186eb1fa95b0f9cd92176ca45afc972ede44465d590ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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
