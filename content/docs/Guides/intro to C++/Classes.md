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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDX6KDPZ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUImUCV%2FjLZdxIBvJFJkXnNaE%2BAoeenrxa%2FIIuH87RkAIgJjtgk4uwbCD4OZbFO0IrhOZh4qf6imlGhmTyEcaHtIoq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIK%2Bje2n%2BZifkDgU9yrcAwdxz%2FFu%2FgaiFmPjTi7M8XrzQpgsuNtPdfNgbuptT7sURUZBxr3Xy94fwT74qj3C3HU5vdEV29dF4MuYnH0l4KM6h2EiNOJBAPyZMItyRem4JjUUzbVF8uRpcrs%2Brd%2BI%2FshHTMtQ3Gj4tBSzeIybEsYsL6pHcte3EWK%2BpepLoVEJff5%2BVDTEjIQw2%2BHaZm8WSRVnnUYns1uq15eWQGpSriKPALIDv3lXkKlSsFC6ebXCSV%2FJq8tOdeHXAoaTE73gjFJDRzQBJooXhYdSYYgEGK1Saq45GKCnsJz4miekqWdddPP8bRpH%2FCPkgo1Wnv%2FwZw9I%2B%2F%2BfvHoPU8Q82D8XEEHPtOPr6VVd6eLdx%2Fv5R7UOekUfttFBfAWbGK2jHeHlwj5EfBq08%2F62ZhWdfIIzfRIMBIBnbCy0uv8ZhwA9E6pSB2G6Gl2Djski0XArmPnT6VG6ZBtUOlm6LGeChK3YT1OBHryaGErgkQtN3Rmsw64o%2FZcLLKJTpz%2FDptKqVzFxgmVlF8P%2Fh%2B%2FV3zTzDsy6ahRsEtD3sjjrkZw7I%2FY8LN9U2XDsXrBwS%2FGHHQ0buYQORvFL%2Bo9JZt3jLXZ7zsvZgSAR4RsJZs%2FVNMBftLTXCUBJDNoldMZ%2BE2UYdYzAMLD81sEGOqUB5bRFJpyBZa5PrHVMEpreRokOrmkB8d5FyZ%2B4X4Ir5r6LEO%2FfFLC%2B0r039d6d8MoRB0%2BXpkGDkEp5SuWzyNBn2%2F%2BP42hedy7l3HUuFhdmkySU5pZj1M%2BfxBxVqB%2BrOS2vi6B4rpPu12Pt15%2FGSN4Ul7S7v2PZf1%2F%2BJ3Vrf%2B7BU6BgPqYYAL6XjePnsg5JWTX7WYUeQguKaBmluEKNxuuOlX3EgQlC&X-Amz-Signature=e344ea0375b7023de5f77583ea3ea37ac4f3bbb53d84134aad3fe57e417fe790&X-Amz-SignedHeaders=host&x-id=GetObject)

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
