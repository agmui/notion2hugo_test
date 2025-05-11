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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYCILYNB%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDfSDB2suztdHvI1JfbgAI4bEgaoCrUS36IrYwxy2%2FU7AiEAoXyroWS9Q69s4ceH1zHzLed5uMHUEpCtGiTLJPqkBXkqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNb94yR0p3WdnGNOMCrcA%2B7XJ8j6rh44bdnDL8rSMW7TzhTC7aXGmg2zR0K2NIPdbbZSF683o3%2FKrLFYRnOoKVNFE0NdlT7U8AZTMMpLjlRCvBjNxLtoAN90fnbLe%2BNCGe6miFyMMlUAi0V13FbOdekPjboBZ%2FB8sAi2GK6yj72AO0ghl6pPg9MD94hcx5c3XsUKRNbjIHDXKDlSL7DWgn4ZpM8V34rFUFrSvnzpJ2Gqot7ucU4cipAHHYVHRmMKp2uusDG3DzYsmH2aVRR3jt5Gimc3pTCghmOtzZdm8lGNc6xKN9s0veekD%2F6CXcd714zHOzijkXX6Y56a0Zlv%2BBJqoXA3iSFvcgS7%2B0EXM9eQqqkUq6URwb1Vx%2BvucFgcr5hU1heEFgeVNusFwUHO7NXeqp4X9FlSALp%2B%2FMl78tlbLg6%2B21vmg4U%2Fvo6DVVm7YHWrm8RXdq80ikGG00%2F%2BpqsD3ugGTB8uxKHmM9f0%2FkMxMG%2FJKLpMb0hoBjLTYQXAqIoewuckNpY5r%2Bjfzdbmw9AppPTjoEPA80QZaqUhO0qW5R9lWZeaSSsEjpzZbWYCAd37eZO6NGICVrPeHRHYpX0dLHxIZiH%2FjEVSHD%2FtgpcnP6faeBusHC9q%2BVYLtHLuLI0RkIvOIX76YRi3MIHEgMEGOqUB2JkFdbFgUkHyiSXzSrwohjCEkPNmfh0l6ota%2BLThkoflayFj3jwyMiVvG3rVBSeGQTF2xOAE9j6TL9K2s613pgr2abURVh5zHqiJWYwtAx57reOePsT%2FiMJctQTz%2BxGz2JCXOTJAVOxe27wYpsUkkeyaXaLojHn1R8BZfOcJnGJZHafvJc0rC%2FzlW58qzt21Q%2BzNsqstddR1a6DPQrGytER0H1k0&X-Amz-Signature=6f47cb84a330614a4346e0028217cd33e3046d2a2b9960e43f4ea69ddea0830f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
