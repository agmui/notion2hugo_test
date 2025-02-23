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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKOPKX33%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHb8ZDixI4RuTWTNnuRT26mXLutTbIaR7%2FgP2gsuep1MAiEA%2BmC3yypgQ4vhSHbyrCuLFsxZ02oUXp7904mTe2NmTFoq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDKq8sjuKv9m8Iw%2F8KircA0lxoVMz72GafxTHF0rmfM9iYBp0AeZT9Gp0ZlV41ecKnnq8jWkq3YykjzfF%2FaNaXhjYyM%2Bud4M0DZE3v0nxg6ZEqJQl8P7RdLh5Wj2wePa9HG6WEqTEaVeccuDizsZbPzToYkbazA%2FyZAXLKVpT2WQiZN4AZ8FNVRosIQBcu3AE5NuSAMv%2BuKUbb5U84tnKBHshvod4PqyQK3gDYWYmvJuuqUwjnh7X0psbMN2xnDJm3f1udzxRV9R%2FQQNJ1hL8UnSlD%2BUIuIffJZBi8YgiFjs%2BPYAQd4hT18eO0kcY%2FnbOT3KWulBtkSg%2B%2BkUeV48LYv3o4XqlWdbkVk4E08hOUNkQIZxsrIHXIrpxO%2Byyk%2FJHyIB3o9qqI%2BjRVe3tNo57BuWh7nGUaJa8MD608WK6gRKWfv71l7A37RlOcKrTjV1yIGmiAdIE5piUrE3xxeYPQcVxFrjeYWkJTokkh9Xf9xiIKXp%2Bq1X7AJaPLEdAPi3d%2FupzjTsAXz2cRdf5KGGCRJuEsh3pkSY2Ttc%2Fhn9uyvBv9fjJVuQj30b64mQpQ60qta2mWvHZTgn5o7gyV17%2BbTAYmt2a1MW5Btt0gBfsAhTVTXbKlwq5TA3rAalSWx0MoY0ogsGvS4U0q%2F%2BoMKaH7b0GOqUBOLYI3KQu5q75qoOo%2BTrxIAuPHGSv%2FMnvnCsygfJBonogCNSmC5tbtU792LRjWIrDylsiIRnZrPjFSOQ4Ri%2BhY6MBpfC8MHNw90plIBd3AGCAE6aUaxqn5iDlwieZMj2LsG1yJb8JWfdQSACpD8FRiG6c6Bju5UHG%2FYCDd5oo7Wg0VE1bzroAwJbEQZSSJQdTjDf0W4KSYVbxN8secubqB%2Bl8DGBC&X-Amz-Signature=0aaf82536cc5f6274636284e1fa2d9b624f8d61c6b71046519f2da2faca1e0f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
