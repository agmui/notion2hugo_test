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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOKFO2VS%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFVIBLJhPC4reA20WGppg1rRd%2BRw6MiZUb1skkJ%2FAsMAiEA1UCHK%2FxVzQXQ0RL4jIwwWSeIm38N8CdmN8NW8joYatwq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDPGo6fkgJeDpLHnjeyrcAzF22C%2BNJjhYVZslNLv1NCLyazPzCVy20aqggSUvj7UuYntgqnLH1v2BEBDZcr8Se%2B3pkGTW7KcUAaCwrx9wYoR%2BFP%2Ft5FTuUPAjqBt1iWt5gLWSwLpdkJKH9oWUubh0sc65hQ8zvS7PfxBP5PaTbiE77fNZhtdzmrchm5s7SIYUc9JPRA6QzxYmNegEMeXpY4LQnU8WMM1PP85Ah1SIcOJuVbRJHSws3ERD8rExsSnCvlJ8ytK3e4XqbF6HFi%2FOnvSys%2F5biVBikQ10%2Bqos6E5L%2F7VeyRyMKUEFwO1A9zL98rT%2Bma8NuCtTz9yIRGW2sNyvx8kScUWeZwNR4OF63YKu0CPKZkZO3Ua4ueddKJgB%2B9oc1YY6PkNsJTdNBkYiC%2FXY0cD69MmF3KSBgTjzUwD4Q6WplVERU4z1APMBmc9FN5MB5hHk%2FxDhdW0%2BRgo7npM%2FgaS7YWPZ%2FLKwVjsxvdlGVeT9wnaozdlM9oufgIJQrY5zc8wgzf%2BBYoek31fVzzVB79uuPjhANLWRAM%2FzVu8DPgcHpOySxsAPz8DvHCzVvpfupd7VvsEU07vTzYd79lWzXyGgC9Cq9aR6FY87DOm5PIQQ5%2BfOklSLSO%2BepvRYkEd50UrQ5OmCdqpTMLzFwsYGOqUBhJM%2BGw74tcajxzMxu2eewXZbjXrp9Jss654CVe%2FejUj978x16gdscD2dCXPu3lLGjB0OOW4s6kxkZZc8l2geTMIMznRjrfBDkee5s7p9yl7nRxIfNlCOZcrqC%2FMlIG2ZEWP2ATYt%2FXlSPblqiqFbHk2xPjYNW5x3nmzQf0pQmB9nC9fuuRLU5%2Bt5sXmLLWVb%2FXDEuCLwohUgEFoWnUVeQC1iK4ny&X-Amz-Signature=80c10ada1d2366e8a7f431b9fddc3c2fa7fb27af317deb3691f95b2d01355423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
