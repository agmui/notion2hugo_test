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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AN2BTEZ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHcRuPeLAoXRLuqBWi29kPQyvZzbp72z9FOoQPBJeoucAiBIIY35tp0%2FTh62c9%2BNJHkcae8siRkyxjbZSl21k0V73yr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMLfLlbpr1k%2Bmb0JGiKtwDdK5iKy%2BH9d2BXs9XmJQD0CMul6T2SglmELDiPeMjFsrsDDhTP%2BIrKv%2FwkV8SJELabaDbFTN3Mq2S38I7i9jknPGX%2FqRRanWTBGn1nIciQb0lVLnsNn5jwobDVYHzvm9Y6t1FgnAWPHimDJPi88pl%2F13OeurhNemAw5%2BT007kX5Ry%2BYMfghoWaW40Ws9OXM7RmhY2JNVQeKtW37AsRQ7jxsUOTLcM6qCJUModm%2BBHJLgr0B4TMQ9GGEY3zDAsZ7CUX%2BcYiBZ6Nav7xbbaVmHBMcGEkI3SvFQr6tYasaM3Ap9mgAAES2QX9aGN7pA%2FED1l%2BzFcKQXkxf9TaSq80vGm0hOtz2jaE58Xo4m8tpEHLsyDVWF98u3%2BaUu9Al44CNV4G1EZKeku9UEW5gGP20De0AY3q1ICMKBP77y%2BC7AVz3nPGBZg47BhxpGJWsDJ1HILaCWr0za0Z9g5CQqvkIw90U%2FgToa8zanpbfhifLEjZh9nlG%2Bl0F39O6bJ19W9wG3ZDEAQxhvYOycs%2B7ARmy89zKJzxurjs6NzrrdlH5NVLAVKlSSk9NAxFE2TVHO49xZ%2BB2fij5cz4ZWJK8MCG4ZJ5f1uo0KpYxaN1lAmq6SiVUj4Mcs3%2B4HdbJw%2FDnEw7Z7PwQY6pgH53iOGHQA5CkhjYf8xmVGohKTNUf7uBIpIbpeOTQOKSRws9OMt0t%2Bd2JTdmkWCIPggSavpJ2HRdnodmIm77QhoyjNjJaLtJIWPJ7tjs9QZ8BxXWx2ZHyrt2T24HKWaC1bQva7kdlsnmyeAO0M7H1SptVjJigh6oIbJPmbWT%2B6ifD%2FxD3Y7z9mo3Aumd3OKNnast%2FB4z6odfaVv93DwdusnAHACcBui&X-Amz-Signature=af813f0afd74fea3ebe8f80c6f233e38306e1111dc410811958899ae7f059826&X-Amz-SignedHeaders=host&x-id=GetObject)

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
