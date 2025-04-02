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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HPDNQFR%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIHVG8PAAeWtCjrcLvId%2BtUtp%2B9aKNRqEVe5sqp2Oxe4DAiEA%2Bd58PFXWzPptO24pVIP124I4CgGA4QqEfRoNDzTzjAgqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9MjKc9ZBW26spQISrcAwM4hjHfbuPaeuvZKkTKwdNzhfICXnw7VvDVi6Si0tigmgkHmeVCtUC3ZSfAw0YTSHFIcQlp23VRE%2Bq4c6%2B6fk3OoI%2BvIqcJQHG2PABvrF1jQTwhWu5zLj8G04oIosvM9XmwNJ2glOnuhIHGloR2k6zl0GHcwMrd0YZWE6EIKxQmpUHtNHjgsDfg%2FqY3yQSTxs6bqFIsNP3E0Ejfm3zPP3Z6sH7jozljhwr9WUjD8mOg9g83piLqIFxG8sSEGAfpLImXXKE3vizArHvPxWSZgFOGvjjc5HanuY7Dn2BFCAX0nMKlGaazkaS4MdmqYh1jRZdCBzCsyNa2rPWVZ9rBGODrzzGlp%2Bj0erG1Tm2Bod%2BaKXOWQJVs7aJcIcoieAQdM2TcTgfIyoSvZbwUvw77MOU%2B%2FczmiYEVIRhh0Ka3OxNpgJrmT8zNYbGatvqyKJTL7j9o3vMCr0%2FqrJGSaHPA%2FPEMo2Wo3sPLTEHPf4oBfAgHpVidryWCQM%2FQaonYZ6h9S1LvVk3hrdPhif8AbQOthDI9QpdcF1tJtfT1h%2BO%2F8NxzbIHdpNfQC6nxgmycTLRC01YNc7SAUNddOrThweW5fr5%2FAfK5cfrc6fxV25mibYBxGsef1NT%2Buo3FMTenMP%2FDtL8GOqUBMb9%2FvZ7b2WyIIUQyBwHcwlusEb83TRSJ9cWCguZivDNYsYJj7Nw9d6okebSTHTXJaGvAGYMb0SnCbLj6%2FcKF%2BlgGBOajkQgEJNfjxZ5bnruaadTs0H72vZ7TdZs8j7clEYlI2DMteSHm7HWOMKviQAnESCf63IIEnUzyu9J4WP3YawRN0vXytddO%2F%2BvxTLjW8MJXiv1mb82HXu27K5WnVpdhW4Tt&X-Amz-Signature=d97c2211deefdd6b655cf6db80d065ee627f7ac708b4b4bd88789d6873a43874&X-Amz-SignedHeaders=host&x-id=GetObject)

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
