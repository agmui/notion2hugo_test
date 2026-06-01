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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRQITTIW%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQC%2F%2F2F32xoe08%2Bnsl%2BtOVcSNLH1ZCsVh6pGfW5QbsJHQwIgeI9AYn3tB6f%2BSQNHKR44k1gt%2BH0p3ydjkAdU4vpC8KQq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDBAU6Cr7fL9NjJ4RXyrcA3KNG9FY8DeeD6ez6BiGYVnhAXdupGvVnf68SIQCd3eDMAf3SnhoXga1eqykoisR3bXySRjzDdvE55wED9gXVVZLuoR4vEOnmvVNI9Hg4dsnVI8PrIvN5zS390W7CSP8FQ8zxiYjizjtbw%2F5J0D5SzqYtbodlXhIKtfc0yIixPJoLOeCLwkMblFV2TVGn%2F02JymAELYybvws5azTW5UUj8ZlFqjIpO5K780Q5e8JpzEv8qmcdcqh0wV3HziT0jtFS7qzfg8ovEDijDfVCfcndcirHFJSiTpmYb%2BXnNcYJ7ZC3kkZjVSEn4vPNZUS7Y8tqInS6nb6ANfYFDyBrQU7i32I3%2BvUSkOHQtLAdGrrK7CrvHqM7CqVDY5h%2Ba1QxAcMtcpXrRSykLWszkGJBaZyj5AuSEyE33F7qL7Bl%2BjfiQ1qUT7FxRv2fN%2BXEq1iUBuJdj48QGSfA7A2xQ7qzJt%2FrQqJE%2FTBhKxFm%2FbDcoc9J%2FaPuXY2OSAVNlkCn%2BNc3TQjYiIarknWML%2F1c%2Bk1v433kGHFFl3YdxsfHsh8qHKfrFGfjVvPHUhZs7nuBAFRKJBLB67isluoUfPnikKxec8JHClAUn4CvTZ7gD3fqV%2BKsG5iW3xU7R29wwKtlf%2BoMPWl89AGOqUB5sE0DuTGrl5nx2LTqlKp1e%2BgxcivF3R6yK7ThjEU8wB0t9GqXMcoTpzIg1hUC0K70hhFZG6lPAzV6UUb2aHPbKaO9ek%2Ft8aQvyK7P2dnHfbk8DPnU4zzEPaU0cPtJNnlB5JPba9b598TMnnid6NaJQLJCwaHVpzXGv%2BNdPBEvIfjggzvwwlv6Ccm1gmmsDJy7kIe1kmt%2F6FUWtW%2FsvNamMGmXvsv&X-Amz-Signature=fe606ff78bc9e0f8716d86dff33d742e33800ae1e4a4b14118fc93392e25e1cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
