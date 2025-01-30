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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F5CX57E%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T180956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBj9dkLNWLhb8BeNIqqvxqsjlPn%2BDnzogFH25OHeEp6xAiEAr1j9sJNr9rvKY1e1g5rv5MCozeJD%2Fc2Hw8FVyoNR%2F1AqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDpENZgSZssP5hA7CrcAytfhFRd1YXAAZax0w1ktmA%2Bs3My%2FLk%2FCDLMI9r%2BCJcgBkSHxSG0xTrOqLEJiCfYd9vsJww%2Bwt4GEhHLDGwOhsUFYgCF6xLnk8WYcvjUmuvBmuCeDHJoL%2BSp2l%2BASHfoMHPgFehfn8aJvJoQSEnhKmorhmEHfM368ioz71Rn%2FfgKp66dTVgp0%2BrdMii87DyUAq5yJxLjBQEW%2BJlrY4cYXOwrhHGZaD11%2F9ySPVlQsSkpceCYPRL6sgFb8ifuiP5UElTJD%2BXsv1lawNxiP5oiZuxmpZBqeBtQsQrzwKtRD%2BPv442E27FBtvQElURn2xdlOABnaa7fRbDChVnDZddT3kVqR208vMkjV3rXgH937FYQl8Hw6LXxyy%2Bvbt%2FF%2BhGySGfhQtQQPktCz%2FsIyrt%2BVGrJQf7MGQncU7SBoISEDa02mIJef5wcg6IbvBPYcEce233n%2F5A7QwOY9tXiv8GaEv9dbJSsTbE25POHIVrmAL5xNjlaJCvgAhVVIQEOFuSBeoRWzf8uZgbhF9hjoRR09%2BVJKWfgzNNQRaz%2FxHmrQ%2FXNCSDzb3MBGS%2FRKDlMtX1lknJbKcuawplYP%2F44XO9jAxt0f7pkk8HPFqoAbWBN8b%2Fy%2FNQC0kKLb5djC3AoMOfz7rwGOqUBJRTJE66BAKqIRsuCXxsxwSagXb%2FB2Y6kFAeM%2FGsfgtpVlSU9EsKRwKSJPxB9k2258XSbafbini6CS96ie7oq%2BtMpLDO13X9XY9ppMJ%2FKsdJmVp3PggiXYPX%2BMEk%2FxiYb2%2BNcWge9LbYdhnd57mXVMWZKmqZLAvma06YaYprJk2vGiBCH89IZ%2FppWcIa2KdMAzcfJ3hkzlTkXPGfcapY%2FcFMehROl&X-Amz-Signature=59d69da0229c6d6fe17113e190a5ea5fb895a8aaaaf7c1e9f2a659d47d1f4d19&X-Amz-SignedHeaders=host&x-id=GetObject)

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
