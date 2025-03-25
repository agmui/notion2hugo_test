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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA3VCGN6%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIER9T4469gYcP5Ri%2BIeAjb9Rku%2BCKfOiGymxxS0jbceZAiEAgllITbmXxI8TnHHg8JTY5EyxSogQUzfcG78yrKrVO%2FAq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDH7vbayTTPpSfX5pZyrcAzSw4i7Ye056bsD8iWBq8BOb%2B6zX%2BVL1TBMmqQ7HGrP1BuTHEjl7kYSfoDUHTj%2FuRbn5S1foqGU91oDOxjY%2F2DUjeco6v5ifTcA%2B834ljIq%2BdTbveaRIscv%2BJMaKTJLn%2FuFgTmDVMHIdZLTj7iLSX44NToV5vkxEIJpXCGRV1ZHmRIV3r1w1QDflhJx%2BkocG3Aj0p4w1lkmJmlga%2Fu98Z1y1HeOM71Obt%2B%2BhVlUvP1BqTsZsHmv%2F6oYim6zrBi9hV6cDAiO2Oc8EpMOcOJEiSOKvl6wjrrbKuYt3WGvgmvnOsTjwUkNb%2F1BS%2FlYF6pTux06miXRGa8FXCwOeginkFrf3JhyQgWo8akBtPCPS05OSPRHvNo7TFYuO5ORU%2F25BF8RHbqcnyS4sdv64wHccSwn0CAHFlVcqpq6668dUXsSbkteszVIvnBXzJFKUgSN1aK2w%2FfNkv8FfMPGs3MPqubfMK%2F1ljWTKHF%2Bh8XzHjnduTD3PPfcNYB6Pi4V607OChidsgJOJwFMSfsaPEr2DoLDdGiMo79POTsS0nsva2lCNe9mK7v6N4FTuSZ0l2i%2FWZFZlSnykwJe%2FKH7qsEiNT0D0h0atkOKun9A2Tr3ttWvsvvN3XoLBude1kLe5MMaji78GOqUBvYpe8uv3DuZLOq0suBAgvGm1WP3f8yplyynDM5f5jxf0jh1ltijghW%2B0NiqNd%2FB6wTWrMbkr%2FBdsJLMKTDq25MH7PMovryeT1Xp7pAqNuePQ6ABzKcqts0pAyv7EeuXxPgadj2b7%2Bv46bm%2BwiW5NqdIag7SZZ00I1H%2B1zoCNfJQiViG1%2BUmMGvqrPUy7GgaQ%2B4uegSlYH85ifnPHQx3h%2BgvNL%2BjF&X-Amz-Signature=d14fa5c18536ae7c7d10fe5ead22d9447fe92fea89051a16bef3d58e4eaa0afb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
