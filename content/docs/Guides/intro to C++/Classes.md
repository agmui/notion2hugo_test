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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ5NEOGS%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIFnO73S1CfKVX%2BnzrscQ8Mv%2Blg%2BqVhpn%2FZlPn1y%2FK%2B7%2BAiEAjYvq%2BLS3dVIYZH0Zm0keIAQsGMRfUuSWgRrDaaAfQX8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDN1bWAITjKXp298IMSrcAzgttwmabQNl2XXU82o4arcMGYW7VJ%2FP%2B0WRa9YuDWASb9RmhyIJLcZzOgGDNOwKzcywhC3XvhRl3IqygYqgVtKl%2Bs16UGM1nWIUfJnLNS2HcFUXAKH25wiqs%2Fc%2BU0HcQcXpNhm8KVvg4dMUy9B4E3cFpNRk54KUW8dVmJeOllWrl6Ym7FdyyRyHIS2srYjdOyLxlgwl0HGgMuDL1HL4mRcgRKbycGnZJbSzJ83fYeQgCA3aXn%2BalpoeYzs2KzyVM9JtTTl%2Bflig1TvckXgDwFoFkg%2FYmw3ZDn4Zclw9V4BEwQNC6%2Ft%2FFZ26m30QdSMw1hbxma7bdvMMsm9vdgEi5d8qf7Ax%2FO1oS%2FSCfzD5G3zqy7wocSfUPwVYawvNNCus1%2BZdV0WpCyB6IpGLeve1isE%2FhyQN26Q8Z%2FhoQdg4lcALkLoOKr%2FEhSrydeWE7cG9lLuuDhT9%2FctlWphB5QajQwifRu2r6qkwx1AqJuT3CH36nnR%2FtMlI7Gm2IViiYaZShuuclw9U%2BKtXl41FNnJKxRASON%2BsPSbTNJvhzIyJXSDsmnh%2FcMIf4IaZ4kXF0Qq5d3SKbzG%2F9g6VQAVzPajyAG3LGaMb9iknDbMgAX0lmD1wdsW4fRSp8JRGvxueMN2x574GOqUBT4dRZsl%2BLK9GPVoxXGWYWKCHfHwTELiacnSBK59RH%2FtJ3aksIESrRYLoBMAyMDH2GeqBYtfqXS2SerPR16iAqf8jDrEO0X5g7n9ILTUPFspwETHSHVrxTPtF5%2BAjazR%2B6ItmcmHiS0kOn9zmrlepYJ3V762RDWtdaPeZXUTpni76ZZRmY5ZvDVBcTnd188vH5BXt3gJLhhQY1ZK1hdhh1hQdnU%2Fu&X-Amz-Signature=89e6c4a37514b2d413e3f67c7a4dab7661a1cdfeb52a154898d6ebadac06e583&X-Amz-SignedHeaders=host&x-id=GetObject)

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
