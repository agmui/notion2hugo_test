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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JIBNC6A%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPpGITpuamp3bYOttCI2lYzkQ57QZPIUuj%2Fn8LNvtd4wIgJRzOcgE89K4%2B49qWQ9Zln9cABqlPEOnLSZhTn4wAWnMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbTMUD0XIulmuSLgyrcA5qbQK7GbLT7IuE0LDUXyN5MTO6A6FkS1jI8nLUyvIqloYE2euC1pG%2BcrTdZGeFZCQyVxSxwueI7JcxQBmuWBlCCbAjtGiI5CFm7fBJdtsz5xNTviQbdQyhh2lwyPvqWIH9CKdoQZR5R8mQZGDxZegGTAOd6oSz4SudnsLzhKTSEedbrOk8qeKtmxRkr0x75MLULrIBzfSHAoynctRTQ%2BwwsforSIK7YDqA42bR%2F6d6xSxQYfCcnoj5%2BGIzpcAgIPpkvn7A4waduN0msJgCLdQLnGWb%2FKP6MdmyX33kB2l8A6K5IQ%2BA3jF2BQ2yxrY0B1PcQv%2B557b4mZhn9nprfw3VKrLoYnGeRdFQqJamSx9%2FKD9yNQ68tyrvvj8sTsgpzsalAId4VuMdgyOFDYG6pdnXYBZwCGVh6HrDWPTjMtBckyujaklyt1E9s9UcL%2FiUr4xYD380znLJUBV6wgv8iiSS70bK0mYDbnlue8Mb9wVU%2FOUF6r8fddMxsWof%2FCJKP5iUDmIZIwScMdPJqGZaTURJfsFcchVtItHNPsZzVQh80tApSrK3Q%2FPgVB7Z0HH8Ex1zjcAcRX%2FrvC8%2B4FiNo%2Fr5KaTIuaLB%2FTeRFAqNwy1mY6xj0TGERdnijuuUXMNe2tdMGOqUBCq9EQ1Vp9oxxWsc5xPgp69e5%2F3Dcuwhc2Y5yVhVf4nNxVvuS1v1ZvFxmSAReBZots6nxTf0hdm7BhjyZkRdNZ7OZ2v%2F5cDS7iU0AbIXxLKw9h4rPFDMiGoiozjaAKcFJqxY%2Bau2H3TU9gCbTtFqgjRqD2h608ew9kZFPuIiU2hgqCvnWPwd59yJgRHxZn7OM0ue8m7HgxdcFDg37%2Fkm%2Bgx5mcwQg&X-Amz-Signature=f26d1033a3faf95e249206b62508466eeb4f124239d7ba1247f089e4ef3bb4e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
