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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY62SEFA%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIHZ9sb2gqIuubuoSeidMfsCpXSbJaAqOThxdck1DdvMjAiEA5zLtbycC%2B%2BVUiA5cOCH8YmxoqXWiuAcsJYeFdIukeEwq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDDFjaS8WG8fO9l8yDyrcAx8gpegHmo6%2FpmjbEajxLR78PD81mN9UK6LKCR4TRDL77pbp6R5RHBJD2b3lmmYfXk1ULxE2awX0hQ9EL0MRxEk45h9f4%2FmluilNdDx8CzHwcWCAL40wiIvdvlsh8zUnm0yvE5c2UqOqBQPgyF2kF1CPo%2FuphZbU4jDeZYyDey9%2BJ8qng2Uga5sN030ma0t519dqpSbsxChntU%2BvXA22Y3NaZFSa98JTdvvjnl%2FTYyzCkLI0kv0ng7ptd%2BV0g5e2WBP%2FpUX1ksJvUFqKBL1LvTBmJzwENxi63FZ3C%2FQhn9IxllhhqckBiBeZa%2BwourQBAEcgwcuroAvnUyuimgyTUEU7fnz9c92spsRBP%2FMGpPc0aGtq7vjOGotUp1ipnwmV%2BtgV5Hgqg2xM1%2F3%2Bkog%2FhPfYFKS4VMptFBIhPJHIam1fawzqPC1lizSlYSyBMkiTbgpFwbZNF2M8%2FUheuTf41HaUXONFfh7d3gpmQfHjZJ5hRHxfvDQRbzIHxZ7WJfILcj95gP%2BfKNTCu2taMeVQ3vCkgctD5tjzJQj0kJMGWcfe2AoXZzF7N1DuIXugKRbuZ89GrllDfOr12BfKoTIuFaJWQe1YXwGqmuOE2%2BchnXrH3ax0%2F1hJgwOyk%2FRhMJKwvcIGOqUBZGwDfhV3GwazbCFhcXquernWsRlnUzLQu4Kx65aam%2BC3ddaRfSUYgZrjqsC0lPvg3LjOobaLvZt6GVfsGKma%2Bf59IDvhvOEi8UY5zSPesCYh2Q3dZWpORgnlTH2OCVMKfe%2Fhf0k99J9tttZD3WrLtLAqJPoLJ%2BD4PoznSTSEIbkx5x4kaevHqshD0cLIf3Fnh2n5L972uB5mNjsOsPUF4Ssfeu4o&X-Amz-Signature=1efcac968253c05967659563fccdf7816bcad46e98baa828e74303b13dccd423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
