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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4NZ753X%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyI1oDxL97y%2FyDEs7j8C9BrMrXcaAhxPBEiZnDvELF3AiAsSaWKr6ZSD2MKn1MCsomeyffiWgI4DwsMj1T1Efc94Sr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMKGb%2FpNucXG2Xid9QKtwDItZKBxzxTUDAIC6JZJtiB5BkwVxh6TeCklB4SKBdSXnFK%2FrT59aVOTz%2BHUEnLKfNhPW73NPer3Glb7JJzs1liCgSmv4k%2BV6Ysq%2B6ozP6eoPht%2Bbj2HZCBSykvk2PiS2gjBD2SdOEcGxH3bZg5axl8AYV%2FNJHjr5g%2FSKT%2BXMOMPyD48Fx5Ku3pXG2%2Bvu7C72xH3rfJkf8PmOd%2BzVSs2KE81Dhff1qYn5Dtdp10POuIOL2rjKgW9K74clGaiGHwj8lnmNK6ml67OiU86pMbr954mNAoaAxM4XT1HxZDflNKSHT%2BKlfTy3%2B4s%2FrQC1DfVNk%2Bj%2BNdT6xFh%2F%2FdekUupklTC8ncZDyFeip3JrWQhElGNOOlpLf%2BUIBPH75u97peLQ7%2Bg2%2BAZoZlxAFfnQoqlGCxXl05hMySGkjH3HrTQFzAEqysnizObROhn7EVzpZFy2gX32pnpTYqK%2FWDOKMn0OfAZjaVyLdg400bMeXhu15Fh4gKN9BZ6Pqa5XMVAg2%2BjZcJ1jZgM6GWjuolvyiAWwCumOuoUizwlNMmTOZDDxm0CU%2BxVupwid8zxll4rGVBQ%2FYeRlSPKolkYhg2Ow8%2Bxi0nyLjavf40Q9NJE%2FF0ghV5CgBJJjjqAiNMbX%2Bid0w%2BtqPvwY6pgF6m%2BLr0nDg88dPsgTKLbL55oUFTaq5p2GpTjW4Qk5hGgkZIJ0Auf5WDtbEAXAIPKBONX8CTO3Oeu0VOF0s4QqlKJKPkmJYvuos2MvM0NXi4GBw8%2FfwU2e5x%2BsrDJS6Dw5icdIJCurcXDeUNDllvTV8sZqYKiHZbil%2Bce7aXm%2BOvfWBQ3GGvpwWmsXFKdNfHJR20NVCsSkF0zuyAO%2BmgdvH7JYtI4Qv&X-Amz-Signature=0202d03786f75c820f7d8404f7e893c7300f5da60f8dc9dcd845b690dcc1109c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
