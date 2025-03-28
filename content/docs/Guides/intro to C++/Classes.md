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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5EQVMI5%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3YKCRb51fMb58XCr9UAS4plcDiQkDp6x%2Fd7BRuNp0fAiEA8SoKUG2iF%2BZgKgnz%2BsX28ITtnimYUhdMxGIg1%2FRJE6Eq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGcJCIJF6QUuT6o3YircAxIhnWrnHuucxmrcgkGIjwqE3ttHpCdY4s5ZQk95c2EQPGHjMTkFdOPVs02bLmBKLeBWA2slBH%2BpEELCF8%2FrSbJT6zGE4waKmiQ9hXodIXoKLib4jqaxDZZvzfbzY5GLOViVvuQlODmNqLuXLeaZtcNaZ5SsLf1H1KNFk6HvIK0leEtycxApewUPCibbNUY4oDDSsC06owTIkU2UnXb%2BnbnnZ4hB%2B0iTTbNwqnKfsY3ZV9VHZsAX5S1LSCoXLPwZLcZuFXYloPGUTCi%2FFNO3U7GKzMXINrsdRI0st2eKQcGxuNEf6SZOROQovFbDqPmoXfde63AAvAhMziAUdb2%2FyH2oATp5JNA03QrhNID69p0JunMquPw19Vy%2FfmOWtJgYRkZc0oQRbRvsb9eZ8mrTccSor4OL8p5Wnjk972unB%2FlDL4QpnaGUNRxWRZMzzUY8eiQ4pbBiFcBBE1wahidaPylB%2Bt%2FLhxoDiKVTdUTnNUm6z66ujQFzK5iRQkgOlreJtIv417ar7QiHaTamqEY6lTunhtpnh0Md4GDb%2B%2BVJxmP2m%2BvTazo1rK01rkme2qF2qHF1ExMeUWjpoVDEppmeV0bP9E7B0ZtoSR8A8NkbFPB1gvSNx0MS40Kka8mCMLixmr8GOqUBK8zEUmMjASc9MsBavVlobnukagwiRzqJBMbpkB%2Bpjl%2FKH4TD4DZg5W9GBhvji0%2FYk3wk0HuzKMheHIV1tXsuIImNKf3dduamzo5j7M6vvb5h4rhWAAjrBxAOEuEciiG7QQ9g%2FezJH%2F1toqGiy1BbIyOzbl7DHchpXY%2FTsuUDCagkXVITQBduS2H2fVPJ3DchpdU61TVkUxHu7BK1ku0O41zUolpi&X-Amz-Signature=b8bcf3c4c0ba37f7a9ce4d849acb8cbd929a3eda905b7bdc692635b094293c00&X-Amz-SignedHeaders=host&x-id=GetObject)

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
