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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645CFEUNL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCL1iEkNubjvJzMLhKy%2FjzD%2FrX84VmklOeQZ1QwbQo8tgIgW3mRXdU%2FLLHA4scMiNaDM%2BQ%2BQmz3tc2esTUDs4un8%2F0qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAzUwCewO6SA6GkcyrcA27Otp1GHtad6%2BvOHFzBR%2B8b57nV59gG2LshJwsPvqxu1rQQ9leeu3KtzbL7oCMytGWfM51S0%2F2QY5l0A1NUSx3i9D%2FB%2B1RR0z0ZQf%2F3sXXNl4l6F7FSo%2BHRwj%2Bae%2Bz6OW4FaJ5r3busLLq1Di7x2G%2FzAjojvatqfS0OPVzDy4YE3t4HK5NzXdAz%2BKnC9nODbhYbdVV9oeRUXrk7HtM1%2FkN3dpvUZW19JRmU21Xvow8tSggnJDbVhJT%2BYbabFaz54IYjClAvN0cQWZwYK5VYcLB1Ytk67vcq6yAhvZNQKcLIOdmNJYWA3i3KntiTw7Th5g1hHu05QM%2F4nIS62kbjScYm%2Beush8OGmVJNz%2B%2F6byV%2FoFF7Gw3Rc45f2BUySkLUTPHopMS1eV46KCqRNtmwMM87bg0H34BC40BOSCSrywa9%2Fy7Z6HsXQOCo5oQJZ15Z2Nnxw0IVffp4Db7k2Z0%2Bpp5kC2xwFH%2BcQjkXl9BSsDytSsRIbyYGr6tvOSBibnLF8ycUCgN2fPHQc7u6xHMKBkEF4pi9guS6ZqPY5Y1RV64LOHMbBGWie2OW0ue8wwxAYCf%2FqEq6V1prSaotjviHrRXLiyWrqL%2FD8650017%2BwpPNVbF2ntw5Leyr38C9MI722sQGOqUB7M5sN9yN6mCa9Fxvx8hSD5BGcDqwLBcedtEhOIEyj5%2FdVJiu3Gqwc9XFtAWLL5mlSwizo7LqgVmrnp%2BFgb52Z09gdSKpx2lYXRaPIu%2BVIKPm41rd5982BT8XpgXekGff1DN%2FkMsDbXXGW8YaaPXrIa%2BjQ50pZCoQVENBRxhRc5%2BCqc%2Bz8XkGgKXcln6VwpraiQr2Ss9FbDNv%2BQilAcA3hYr4Id5E&X-Amz-Signature=229cf5a4eab51c5273f785781e9b470ccb84023524a98963a1041f3937f457dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
