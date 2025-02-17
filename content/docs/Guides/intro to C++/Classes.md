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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3WTMAYP%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIBTLL42PO05OqoZYBIFokAruM%2BmUi44DSr%2B%2Fcy3tQxH8AiEAyoqld%2FU2mnI14jqYBQnJtkxLoHd3aJOXXFkeWEmzz10q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDL1P%2FWcGQlPTWS%2BHLyrcAy2bdRHN%2F9siu%2Bf5BGMRwm6rUdcXyJcOJwbgvtmEEr4vvVuVv6Oc0MPjm2wZ7Fs%2BHetV6FhDXHKJPD1Ov3oDZqkUeNR658jZXhKVIHpKNfj%2FO6VdXnDW51x7XlmNHinGDsBjWTCoygNz%2FZasLZC1EFk562kkl6IQ7KxrH894npREF4OOGx%2BQVEQrLw4qeSaNdmHZMz9Ph5amCnkOIxPrXBt2fK5EgPV5LknSlUbWfmV2K22UnHbNA8YC%2FYWAseM17C2qx318rU%2FivjdZc19WnY%2BqXcp5rjVi7WEMF3WF85tXDQxt0HUiWFJ9UHi2xq4WR5qdzXHup27QwzGgUdakskJNWTiK%2F2fr98wiaVn5%2Fv6fzMeTHsqxAc%2FvxFGlODTSaDPKzAkDHaMOLlmnmCq8HpeScocqvqH%2FBX56QviYIikIU%2BViLh4T1R9YLj1JYslGmVtHvOTBLcZshDPK5sTEKVAPcqu2yBPWrpDJZ0F%2FvrnPmX6YdX3jpnXY%2Fh3%2FuIzsl4JsK3RBYQ7OhcGrgUuXrTTMhn1oxBjHToE9Q8ZhOhaKeGiutGiXlFPXkcvxdFgyJJ4K0jS9CjdTo%2BHai%2FlDeGEDPUFLwxFF0vQSi6ZiSPOyjWHIF1%2FxmRDXEMnDMLKmzr0GOqUBU%2FtGxfXaXhQLvq8q27OtDU4Expi%2FRgZoHPF3HVPFMAE8xgxMu5%2B4uqvrjL9bd2oFiT%2BHlvYm7OOJBUXxJVAzQkq6bKMH0uRcD17rMMIVbuuiHeTNZUdgKUL5OegWLeR%2FRMPIkYYlBlZiRWLJgf0Jcjow9nD6QT2SdNFnNZINxOykWmZrH2uiQZZQ8c3zkRF1KxQfHKjiE4TsIyrSHCJ0FGBpoSa6&X-Amz-Signature=37cd49e2c5b72b787bcbe4f696bf17343a73376c293144ca8c6ce3305ba541ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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
