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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXJVD2RA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCtFyvmVmyTU0cpwlmtvuazn9BFGykmr0Icd7pn1%2BXOVgIgGPqVmEjLphSH%2FXDNVGeba8ULnUdp6p8QCspAOz5uIckq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDNdLMXtVDKMCeruVwSrcA4Q%2B92aXP2BZbPeLe9gtyWh%2FC6RvqiziM%2FBQ4vkDfimDvw6mOCutH2JhCSIDSIclQmUNVQlKJxl35tRSRr7trlMukl47%2BglqYjVKW6wXdsg1sS6kqPQYBWx9QepaP6n2q3NlIuf1lVhsYyltXVCeX5OwOJU2DstxWsQorSCSMLX4iabOiOfhTpQ2n7jKpeujZ2vqMHRDCUogL3GQ2fcclQOI6InvHAl%2BbnkaE0O%2Bswwoeu5hAWlDym%2Fv1xjwLzFBlXAvDOvqf2L3BoxMTllwi5SrxpOAXjWMKvbnXUH8W3zLY473mG4ppLHI8Hh8IqY390ck%2BbMO3EeC7%2FNOgcJYoTgwJh31bt5Ve3HGkuXW7yL0DP6w7p%2Foy0flJ%2BBbvQMhig8YsD%2BAhhneDiwwLJL9uNKX0Zf0lJFn3TOGhhSOqGsJlAjl3lDULWi28szrfHHPRIAL2m0PSKbo%2FraHjfJuu7i7XxAFTITac7TnPS2ZIJTn7LPMYW9kmRBRG%2FSQAlMBUxM8SCAILS3nmrVhMzT4IEjZOCnEc9iPpI5KlcFqe6Izx%2FCShKtY9kYs9vEdPZz88sWmq5lKFlridCZhnkP8hn7vXM%2F7lx7AMMzD7Y0CVrUPv4Xw479ln0dqr8R1MPylo8MGOqUBnlHJL%2FgJ%2BlMWCHla4SfYSnNNk0EfSHsd4SXC8TMfazED1qsn1bW9v7QGtRohm3VMto7FegfcziDkV7lLxIhR%2Bqcvz09f59%2FtmWU5q%2BEIKdqRu2lVs%2BSDcOv1AtGDC3Cs1lCpXRKmPRnzxqdoqadTJu99tZhLa%2B2rjnX9P5u4FJcMXu1BAW6xiN3KxSNSKp%2Br%2B%2FdSGGYw2FnYtdEbyxcBfZatvrzc&X-Amz-Signature=16d9e6b7d57b8c425fe0d205d0be593e6fbfd663b87cf5a0976c1798f4f2940b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
