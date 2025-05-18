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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TMWZLC7%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpTNEfNVwdVIzE%2B7b78xMyTAvTBAu6fn92WhYQw%2B1WJAIgbav%2BxuR9Yv1atZ8HzbVECsNxze33EI%2BV%2Bk0WDwZ6Xicq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDHjmjFZ3dDWUOZEnqSrcA7t6whI7CT4kDgJdW6RTBME4cINdyKsk%2Bqakua0bvvQ1h%2F6ytR38c9l9P7vmrmNeTkxdNXKz%2Ff6Kv5nc5DKEv5zszKoe8YsGOhKlxbfxgtU6aQ%2FJLNzeTNLKru7nnoOHHv8TWWp03UkTh19pTj3kMgNnOvJtWwm4zjYmIzCQRyAJQVhHVcLADhdmPGDmdvYxS%2F%2BXOTD6wylWU7%2B1cLoTgoWdrLgzFMadJUnPZWKuCftK4Ihbq6AEpwTomMpjKn1ne7G7pgLx9RndPHE9xFY3j3MXPVK2ECCpE7t6MeubySHezw102WXXuHXf3TDb8%2BmpABZDwONCQBVRe1EJJ6SJ4CcslSvIM5PAdqfQaEn%2FQxF7n%2FkD0A1HmAVBLChLBg9Bhb3Rz69nea2rNJg1G4sd56rNtSL3%2FyXVTV9XzXp1dnTg2Xp4g5ywAIsA7aWkIj0SnWt%2FX3f%2BkK2Zh4zt%2F4nXettxTJQ1DlyeTI0%2Fd2mUhoWGPr7j3yis10wlcHm2UyRbqBkHkfmF7vlH%2BXzj19G8akQo7DOqcu9F4Fx30IzpqBXw0kHHgo47gpkPGRdW14R0nwglLisnqOk%2FUpo3n3aiMrwl9ZE8fw%2Bjd895vRfu9Vp3Lwb5FKdMvPLLFjrQMJ%2FzpMEGOqUB2nav8Q26S0A1TDaeFYa3Y%2F4yUydmFxKfmVNv%2F7ojM0SBc4Q3sID0ISaFl2XO4n12DWkfkvjqLTyIs8mwfCocKmFxQ%2BaYyNERR6zpGu%2BAN%2B6u9MXKePoVa6MgN3HMNkhhfvBtKktLe2xLDfnfqCtnb2oFXt%2FlzbVY%2FhDtff74keU0FQMYJy%2F5MgmA%2BY6X43dRANcKGgCbUQXkzmHrSOnhFLeKrXSm&X-Amz-Signature=7362ec6616ad00a4643f88f507be39f31d61d4d3bafa181cd3da3a666f0b8058&X-Amz-SignedHeaders=host&x-id=GetObject)

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
