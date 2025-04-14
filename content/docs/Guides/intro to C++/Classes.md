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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVDTAYEF%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSsjVi3NPKeRJIomTXfR7yp6eh%2BVcekFOwMufmCMeiyQIgOkZZN%2BP6voypPG7k8Y0YXPT2MyO6iLp8jsWi05Y8wlsq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDN3exZAkVxfWilPlcyrcA6VEJbTv9ieuR2YhSyevIJLL9pVn%2FDgMhVC9f9UXmDZy50c2KTJHIqIviaLy7VSzLwmm5r0MgkEvKvu0PP%2B2k%2FpqvcaqAvMLtLau09q01I46pQyOYR%2BDGqcz4OWGcCh%2B7k%2Fv0%2FDPaLxRNvVqKVSmUa3lcsrkDUWtmAaArg7SUJbcC4yk2Uw3KKobzCUrd1tkMNCftcWUo0dXOq7NU56WIEuAIbIttlzsM5aj14TS%2FbaIcoLVruhZnD0ByUdBAa5Qz54CtRxChvQdlScyYEqf7umb5he%2BxC7oYbDAUq3bNSU7FuETYgvWBaSmtA4tLfmyiM87PONQCjSgVI9GIRaQjDr7CURPn9KHzQbBUuI%2FpVtg4ex3D17Zy5H7voAq7EpAEd69o22ckcOfXCNG72VRoQw0%2FRXRLCDOkSDiNrz5y8I0JGZCQbAYMLEVVFwf4SzamNoh0y66C%2Fe5f2fTQg7J%2Fp0q2%2BFIFqbqeKzyjMeEj7FMnhJzVLCSNmIZ5oUYML%2FNK%2F6g6Qjy0guE3HhSVtA1m28qkd6KqDCBDG5O%2FFw7aTAed35KxVgh%2FdcxjH918Bon%2Famj%2BcckHWDX%2FwGjO4Z%2FwtjUeQRYUKe%2B7qDbbXl%2BMQREAwdCm%2FmnBGwKyBy%2BMJCV9b8GOqUBI1SePyTTreRw3am5%2BTG7klxZOu7w3z5%2FfHs0fq8U0lgCvTsK5XYRmW96HfruYhVCezsbUExFBpQ6ykQxGjmp6Pk%2BS3FQrheO3k8Tvw9Cme3iBUbjWb39440bjgQ6jkzmh9ZnEuzYhz1sKY4P8eihj6n%2FO9XkhQpxTNTZpgctw9U79Rg4%2F0GK1vMdgsQORNxRvezbVjHu3qOfh57EyMBMW2dOM1tJ&X-Amz-Signature=88bab2ff1d420539f2766942e3cb2caf09d33f6b161a02e718a200097f13dd9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
