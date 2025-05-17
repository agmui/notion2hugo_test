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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCY3FZ2E%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQ%2FTg65bZKYYfSPKdCmHwABdIdi%2FdY%2BFXL6IWaS1iLaAiBWJCTRw9PZFVd3p4LV5ZIDiabrpSvozSQkxl397WCg%2Fyr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMmg%2FrnZWLZJ%2BFmOl4KtwDE28%2BPNJ91l38eiF0FZGVNL2DLf9YYdtujnp9A7BCvDXox31qj%2B%2FXh14SvCf63fq%2FX%2FommVTETUMNsDuK%2BS2TcA7HkN7ymcjADLBAMA1sKqFkb7911OLw20zEZWn8iCm%2BWZQrMh6iU7f%2FGidD%2Be%2FR%2BhE2bHPgXHIt%2BszMB5cYz%2BusMac9ePKsXtjWw4G%2FZq2um6ny9V5Ma0EPgrfvqrio0eRxECGi7lmmxdNc9arxn4Fi9WPZT%2F7mmvYk%2Fh9FELVNK2N1m4oUPeI30hPUP%2BnT2EFRbg9vb94qsq0Obno9FXXDI4cwbCbD2KBp1S6ER24%2FE8YMqxeDSiTHIX6kWGqwd4Mtx1aNVtHxZF%2FI68uKrl16scHIYrJZj4wvG%2BPYGkPeVcPpaM%2B5KDCEtu7AvtXmnEjTnX0DoyI19l67FcNfHrRFQyBjPfGgBYcshW0KtIxW1wNgiDYN0AvVtCx1VYmNLWf4XWLafYzxZRf85fsqaJyhi6bn%2Fi%2FkahC46YxMMPGBCWqt8XeSnWbxm4Sf0ynlP6%2FPHr9aKDvsOVOxZJR6SdvPz5fLCnf7PRqiFjgzHftJcD79NlbIFbUzXJQXqUKMpnoM98E4v6Qx6PbZZ%2BIo0FHuzIwZo26wsew4Fo8wgsujwQY6pgGALJyK2b2qzb1aSXV0ouRRNCyt5tA5XQam0E2Ue35rFQJFlMhZ1hlmDHQ9jR4DxuJcp9WblD7BzHJIv%2BFZjpB4EqbNii3o%2FHMNW92iXi2vLzH7jiY8xf1cMPd05zdvdHh%2BFpyJ2p2nfV27ElZOsmBCOliDhufwTe1RYOhtrpBggjA8Y4i0846jMlsbLuwWQvix8Myv9Rw%2BthAEXepNsGp2S8%2BqEJ9c&X-Amz-Signature=5d2e1226ea9d7cbbe5bd5f9868124e04869ab4600a3e5298714cd6ac419558d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
