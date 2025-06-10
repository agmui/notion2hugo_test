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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGPOHHH2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T051002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFpx2uGxoZ4dQtaRodvflbxnvyvWr9i%2BHqOSL2LxazViAiEAnnmYCKTjlfFr9pvsEQ%2FQ2J0Pj3NSmJZQmq6PV4U5vE0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmZOunR%2FuypaFxa0yrcA%2Fq0dxrVIvpGfP64AuePpiaDqYDCykyOpdJGkUotQ1cjUDNjUiFNp3NPHxeIMd%2Bg5XRDJeAjdsIPUgtdsqgx2WpnqlQXIxH7s6HPpdsZJmzXo5nQIpf2APzde4YSHbDnyXgSDT0uiXa5c0ujQN2BXy5lszX0Gc1posQyYNmZ7iKAEX5nKy70fkXSlHKbBOZqyrTOiF2Q4ebVZg9QDW2A58AhJvZOCK9iVTDzOf4yX9XqecIRWTyBlnebEB5lkGwldvPzVAbtLp%2FlWNU5rG0JS7Gy%2F8E8WdkRe9K4nGqwEfcqDbKvzR4KKWtQi3hGsHslyJtS6tX9XXlWeJaa6J3M1Xsjix4dlWd2FzoP%2BTGDJw14VAetaYfxuKn2AP3Q3K5Jadp1604lwhSyPdFMGItDa0aWUpEBHMjJETYBFzSeAAnV%2FI09XVFW0vfUrXlMvDjmLPHDB2w%2Fp6XfQGr%2BT92uMM9PR1WOJvnpBLP9bs6CXVKcimvU4J9rj%2BMq4VzclTyjnp1xZcK1YGDquejQRZTKhIFTTH2rflGwFzeAkc7FAzMeS3ekqHt6O3OWpgZjkKApalSma%2F1vRc5zaSsZHR5yc3WPbQwuVJRUXagScyry0RVRaPDOATM8NXDYAdLPMI3WnsIGOqUBsBsUhGijJ22ClxV1f%2BJcVPAoV04uLLEgqFgytfpvJNSzyGKKQ3gLAxrD0839pY86GCm4xVG%2BbcYKTVQz%2FD%2BcXtPC1Qe%2BHTmyRAxDgOVAbIwQa%2BazDNQNZnyOwDQUeOkhsYc7ZJpsyL20S%2F6Vb1e2%2BrpPSMeI16ohMAV18QTkiJ79H%2Bo0L0AdRAm%2FS%2BU1LWeN1YfTYPPEfRa4bb2bOJYZuS4qOLDQ&X-Amz-Signature=382538be98031c34e9b2b8e2ba945bc85be00e2f71460feae8dc773ee918314d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
