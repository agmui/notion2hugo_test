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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632GNNAWW%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4DlNbkDb1lGyCEdqxXhbcpeSvXdvCaP9LAp59Y7NHIwIgCBsOpra74kF6aAb0R%2F2UQ1vjPW2erDUWStAUeoPgsOoq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDMdVd6f%2Bw3l%2FSJo2XSrcA5GCuZXrLXDzVTGJcXPNdIeAwM3H6A3bwvHUkhjMLf1bKFfj9SbHy8D8gClfR%2FfslWsE143NxJlrkwxoWUpaTwgv58wMRLBYbXW0UQoCIlKW6x%2BGCj7BUfDlgnv4uqpR40z%2FDnPZWo14FYF%2B4Pmit4C7ZoQkQZ4hDJ8b9eTKDQtNYC8d5FBFBjbD4L4vCoA1%2BGVV9kxt%2BUifaKpucZ%2FONQIwri%2FwTbAyWVzMimw4TwfLr0rk5BmFBAQxlRarD%2B0jPS6I%2BuG%2Fx3izVK6bbxl8vmUwRaNFFUI2ZXFW1rRjXWc%2BoHl6C63g%2FE%2Fg3gQbuwEoLAnWjtVtfnZvVYKHoABPxIMmfDHx7p%2BxPR4aeL5xWrS9Zcv%2FYIRIkxYzdsDzqCCwQ%2B9LLXshk3SOZ127Cbl2xlTv73SVKugIqus6F3dvpuq0KcFgS6fkZHh24HEmCspy9TBrRqLSPp0bf92%2BmbrMcWnvY4J3iFhQ258GeeVpZTZac9aO%2BVOuU%2FNOYE%2BRij1X2oVDl1yiKhar9BmhM0PpwR8MUTmzvTMzIe4RdjPxjBhk4N82Kkzz%2FRgJISwPJ9apoo8OVABGQBhyW2bAuad%2FRbUufCjVWpOEImp6YTiqbFn1A6obiBG8QlMu2oC8MMjZm78GOqUBcelm7I5MrDNpSotGjjxTtzejKnD3aJu%2F93kBovD2AWV4QhKlOSrMRWgm07pVTg4QRVGmL8TN94RreqRPxBERbFjaJYX8S3PpKfipo5%2FEmUHJoIyV8VAnO5a373zUDASn7UM%2B6%2Bz078ZklkgsnmYHh37iq7fBX5TB1hRYEE5eyuao2VGlPVrT9Y0lCOUzs1HxdoLmVt8HAobdlJ9gUxu%2BT0yKkltI&X-Amz-Signature=f9802c2fb969d9a4da83965169242c3697ef9d13f293053dd5576876274e78e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
