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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTQ5WRHP%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDABoOdXRpyZjFuoPO%2FhXb4Sf4Vihn5MzJK2l4uiYnxkAIgGEFuW09GJ5hhw3AEkEHoM8TOz1PRltwZs4GzLuaxhxwq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDK9hIUmjI6bE4pNWoircA%2Bd9LpKYwuI1HPDK6oqeRjgZI%2BGGWElIbFIw0DOqHmJQe1iegM0zA0HI%2BUv2KrZvPwvemoeAk1mmamonVH45WmJYksnjglZaGhAFIwsyQxw7HbVBn8OVu%2BQjM0LQZMpszIJ2yHurU92gKjBfsE4uWFpeIQsCyAcrEw%2BjMu9fbVvTyeGIstxE2pDN1pUsNdhtks8wAy5NLonA8BjXTfI8FRtPlEciwv0YPcV0G20fw1SMmLm%2BxQS%2Fh2o5j9Dr54PmuJ2u%2ByqQz8%2FDaOaDd8OHYJt2kNIxwN3L4ecuFkX18USdARaL%2B7k0JcQ%2Bxm7LlJ5Eq80Ewmg39k%2BB8apHvIZRoTDGv6DliGWJHF1ylXfASlWTT7x59ZybfBz%2Ba96l30SAkIX5pDGOkc1VBJLIZwZ6wF06sdzAMy%2FTx40MQi%2BHvPLdkveIeg5jkXqOAgsWlvQe70AknCpl%2F1FIPoCF7KipUundha63u1fwlH%2BiedliPmRLnP7TArZhCNsx1jEaXIUDmD4K160c3Oc7M3cEchP2AZMaNIt5gS6JwgZXmkrqSZXggIMuEr2TadD1ym%2BBVg0edymPhaXKy3M%2FPZWcMIZRF2WQAvuWf1ko%2FtUlpLf%2BP4geFFlsoLtQ0pzWknhPMJe7tsIGOqUBYm0W5ph937NErilU2SjdRqPSNe9pQm5h%2FPNHlc8R6nhiVH45%2BgFwvB0GQrBf%2F6HsIg%2Fr8mR4SWgNBBPZCpI1xGZ3mGue%2FOuPoXqkzXQBT9kgf0GVE7eRXj8vRPlm2K%2BoEsAA2jBYYFX7l1rbfLwtCoHWfVaBJXcTf8U9P4T2glhE85RighSiZDcQZyR7vmabrfTuF%2FasSVM5l5aG9PYBhWaYojHp&X-Amz-Signature=f7c00129d0a0e90f69c8e587686096513a5ff02efb75d648dee32bbdfef8b331&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
