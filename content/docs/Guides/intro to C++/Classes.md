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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFDX6XC%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T132436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIDftksBiHw7gC6aw%2Bj0GFrtMNIxEmAJ369KMG51t7GJQAiEAjtSFwVnphLs1KGY2h3ys9o1SD%2FZrD%2BB4RsSjc2PyVl8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDPiZjTrDyIhTANk4iyrcA2j%2FREcu%2FpLcEYKSoTDvoSqEN3z1cMiwRnSB%2B3gppe9vnLt2A0lX94CA9vU6aO4SxxiAos03tsTKlsSCXwjQlmbf6zrTNr5J1YmJtEJPZbOwpDHD7BcSnxfoJafH5LqFnpPeOrpnLxCAWp7kYN89AIuo4oNWKjCooLlphkbaoQbh2ZifSmfuyV5RUA8q%2BBJr89PEdPOcWr0GifWp%2FK9wVOKB%2FyGjVYxrduPKGknr%2Btqfk8INZFiSjsPft36E2Art26WtX1aufaUB2myVKmHrI1DygthuTmxqLdhnzWl1AF6ayQqaVMw7f23mxHYGKWLmmkf8iPuHzWh2BhKn%2FPJVPyOwvCriWgiMiN4%2F6sMqDO8RfMNJIEQ2WkgWYwutOpCN2%2FaqO%2F1JKhO6uUt2%2Bc7E4VChRvUX%2BqNftriVwk131BtbyNswKNCGOIBR%2FyXZs%2BNZ3HlqYssTmIjafl6VbfzW%2Bw1Zp2Kp1%2FZprfB0AaL2L3osGx51H95od8nj%2Fb3KDz8vY2nZtR9%2FmpwCvjzt4dcrc3mYO82j3Pbep8Tbu5mDryMLEaqNRrtpilF4tk7JDjNkPNzgXmnk73FcpC2QDJybhhFbkUO9jxzKFLGUerPCSTJp56S%2FunOfVoc6fVMbMMyMhsIGOqUBV1HvyuX5cHeGlkzUEMcjEia7DwZU6Xfm2Mh1JW3ool6xi2nIfPXpHu8I8NZ0eW%2F9L7u9jdDXLRmQyWXDlkQDS7nyNuH03274qjEyXOga0249tCCghFza2jW9aICWzXpuxapoJQqnTWZ3yjN0lLO6qwBdfoEboUvweK6S1dr4F2BNhu1Ev1LidLpyihrxvWLEKI1hLGyGVswa8KaCO4vHmGN2H5dH&X-Amz-Signature=048016c17f6d20d2bf1d23ba6ee65651657ab98c50cc3acf9abc85b37d4cab66&X-Amz-SignedHeaders=host&x-id=GetObject)

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
