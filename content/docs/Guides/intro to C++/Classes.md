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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL5CJC3W%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T110708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJE4%2FQvjH3uNEtzaykmecnhZXeA3g9Gb6q9%2FWgo4USoAiAztwjRHiC8bi6fcP7XXRU7aIMlG9rm11SbMZ7EcvG%2BUyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMmapfA7QpOGJOOpJ9KtwDTAwrK22wy61okna8YDJL%2B3PcMaRMhLGTFygsJpjYbmbbiRkBxTrsZRCMJ%2FWGQkX%2F7dzmeY8I%2BPM%2B9%2Bn%2FDRwCbU8fnJDcKzvP6cATPcBKeXI6pAPKfO9OODfRo5o72PdmWIyrx6ioZi%2BWLA1rs%2Fcwigyr0I%2B4nAUc98iwMJpg9LiqeCr%2F0uDdm5Ae%2ByXpS2uIUWOAikN2nounqsSxT4y8iRe5x8vPLDI0d%2FVVfrgCZaL58Fg21PXy0TU3tv24plYJ1T8NQTz4DUXtz1JVJHEDB5KrCwGlKkgWXzemAyMO3oU6C8GfRmPsGp6mF66NRKp1%2FBFCqSfH3SiTqHXAmrGy7ojZ6DaQNvL%2FR6kMGcFHGC4RCMdwGTxke0pwLmmkulAYp0%2BWYxZWF4oMGlYqqx%2F3XcBfrW%2FniNxfn2RQ0601uqSRI8PF3MPz%2F6fj%2FT2PwyME15yMWVYgjADGB7N4%2FVrev%2Bb4MtBX03rWJdE3lApGwQF1Mx%2Fhvihw9bs%2B4avtGiy9xHUTjZoeUTNie51Fu4T186JIEmRtSagxm9%2BO8Jqb%2B5wqKpVZYDdOxjQkMdR%2BRaf%2FWcjtSuiBpRhvTDYeC8TmbE635LiH8UrQw2QSqcmSYJ8P%2FcbwC1XCCTdNPHswxIzxvQY6pgHUtYMy2iWrVv3sfmOjt0vGztr1k%2BJeU31OlmczjAMkXP%2BdCVl9iFPaHbCReuOEf%2FrpUPG29MawYzdTCHF98oJ6%2FddWNG4cedOyh2Nl8KUi0CWEY4jwR09pgsUkNBjZl9beAQiIBT0iajJeRuYso%2Fp8qxO%2FbaQf3cGivyeK%2B6FMS0aCOrU5UqK9TgI0pH0LfduuDrvMPnV6CjHQ7ixvE17hZpCEkVRX&X-Amz-Signature=d28eafb224e2b54809f41c031501425721fee22af040321fa197f3b7b1d904e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
