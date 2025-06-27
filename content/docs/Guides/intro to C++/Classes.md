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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSXYL4GN%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQD1pPrTKkYBn72UpChiyIpMFVHdLJlHoUVvmcwepOPSZgIgM3xa63aaxk3BI5HWFrj%2Bfh4AR8HAOMCuAHCbKUnQ%2BkYq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDH%2BOnlPAPZ4sRoEVOCrcA4%2FxOa0VrJz%2B3WFwOK86efCnwyaBWknifJDrFquvJz1Tv4szKfFoLnLQJU5JvUQVqAVC2HqSbbMaQJgEUuAa4JZjLwsi8aSrQ%2BZLZ%2Bi3hR7xvAwQsGSN4c7zRs5PIO%2BHcFPpXLa0tlOgpu84scHF7yHdv6Anx7via6VKFPelRubUfxAoM1t904pVHIlLb5gx8Url6N8Xek8t0XC%2BbV%2FB76qADB%2BNxET7zV3LbUKHUu65J14KtxpYoOfukffKh2nmFe55gbUjSiwYNc8nri4k4fMLK4VCvEUXttqRSI7qJneqNbY3NM25bCH9RiER1YbYQeSOboqohDciTT9E%2FhrxMCGhUygQ2MlFZkkxHHMed4oIxAbXVsa1wn6slJQOwNgm4FdvFUOAjYCHVzp79UYgmVaUCTuNOXXz6EKThL4Fus6%2FH8XSa2tio4OpZMYTbZjYrwBsfHA%2Fd1I0TgUplWk8QjsbKmGP60QWVQUr1pvBeXinFi0hx2owAjeBhYkCX%2Bq%2BA%2F3mSWKFksmKrDLno6V2Zt9Gf1SaSjOjv2L9Wu63wx5tGrfIIEFlsnRbrvfP27K0GNPPo7bVCo25BMKho2V4Xrhy9XIGteV9uQVa%2Bzw7LTEMGcGMi7z2jHIJ1SJTMOH%2B%2BcIGOqUBudWNqHVoy20GYPldU7J0bSAgtjW1H8aieCbkMAR6J%2BoDxIjyWQWPX2Xl6uvLNfbFJusNv%2Bm%2FFZID8zVlgsW31oodou1gFkhoWQn1%2F2i1vtIuuNFnuYTA7SAZPpih2R6YB4IIVWa8Evfe2GbYcvsARPeNKlCjMRhREj%2BEWwNjjoB4yhASu5ccpxH%2BJvGz9N3Hs8GBr1ZItJh6X%2F78DrD%2FogzfLq0x&X-Amz-Signature=64eea385cfd8bef715fac638bc864e8fb767ef9d22fcb0bb441e3b51b185907e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
