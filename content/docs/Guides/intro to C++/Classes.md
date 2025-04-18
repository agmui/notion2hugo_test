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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6WO7Z5L%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBn5C8qnLVl7PFm7J9WEziPUOhywyr0pwLXvtg9IkfEOAiEAq%2FxLl4cWMJ6NWgS1lDERTh9ScIVcwMY%2FDqhdtJzjv8gq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDG7tj79iTeYSYhgJySrcA7IDx6L805zLZJojZCvs1V5AQk2p2s3R8w0xAIsx1VY%2FbCtzAG%2BGOFpyoFF80Z3w7cfIaEvm8oGDiepOcPdz2a7Bk1f%2BBt7AnPibnMHv9Z68oYHC469Epj3CKueYL3E%2BJK89RZHQ8vsZ3DTcWgYTmCqgdniew7jqfZ1BuSaWBKMPoOLUFpLcA69kqFOmUh4HtCFo21bGQSltNauc2CDVuUCXzzFf%2B91YOFmHQRX4pacos4K3ODTpLkGpdynPGeF0cs6O%2BJRHnL9mBwWdDb%2FHq38A%2Fp1%2F9WRNlexnUJthfqlDaqWD3A5swTzVaM3CJd%2FirQejeBYjt2Kbg0ScbD4las4X74N3WtXouOoDxWOGwhJsJv6tGn%2F6txSU6vxxWaIxd7Mtkk%2B%2FrFMFw%2FBwJd1YFl7t85ArkIWQywhODOap20ybWzRFlVj%2BaXwlgz7D%2BrUOt5li9PJBZv%2Bmiix%2BTOhzbLIVHsb%2BUfgGsmLaS5WaZ3G31WC6QfE%2BneJARGKzWzhS%2B%2Ft5ZyOwGdc6chxem0FLJnDSYjFykcIxYwZmYlqcpAMOoFSvMVcRdpi03cyL00LK6TzhFYdF6D8syfNYkVq30Ji4QDjf2cLLcZ8YpYsn1uuww9aFPuy9yvqqmTKDMJi9hsAGOqUBswDPa5ixLuT79fAeVx%2FjDSUbdG5%2Bh3QFNFfro5l7S1mVv057F8AwTIJ54wiNLOoeR05RfAWI9luVOe1SRB42GO8Z0kWNBj3jYA4bggr5f%2Fn%2FDh03FPo2IHqutJYzs593xOtyTz5C92FGMsOKOWFt%2FgGt0gxXGhCiUSatW%2B1uPjQfqv6MUwNh9XPecJtfATwQF2vRdDG7M6NXhvbxK2gjgcs7K4qX&X-Amz-Signature=25b4468ba2559c84c03c239eabffd55f0352e362923340b0acd55a5860e05198&X-Amz-SignedHeaders=host&x-id=GetObject)

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
