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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL22IIXZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzpD%2FPxju1bLUVjrcpN9sO20zzyB0I0nlG2JPv6APVlAiEAo9pbH%2BvOz3J5tRKX%2FXUU%2FVavP70Ryu6Y6kXv6bc0vPsqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLI824y%2F4NFMR2HXwircAyYnZaUsQE8Dm%2FG8TAWY8ky%2BsWFudmPrpIeRXpdnF32vRoItohxIaAy5qRLdBkbcTJf8lcd7AmckGvV2qyMOTRHRUVVKz6peveLv0Lhx8t7T6ZDQXFJaKWosy7snoCruLsum8%2BIpXN1jUpalvPnROW0caXcHe2BBVCKUJGh%2BBZBwLn8i0jTDXyx2yrFHe8Mjic65ncvFElRKDX24nniDcMpgOCe1m4dswYCBIf2NhZT7hHsCy%2BxkasToCiBYmGRLcbq7vyxjK2YoY%2BLG%2FzfdBz7VGoCfownUxD6JPFLHp1hjTTobwjKGXCgPSrtJS1LEw6flPDSCqn9AxRWD%2FazrRT%2FI%2FK%2BSjrK98bKm38L8dCWVwH%2FpVRPtoeWZY7hD3XhFPRUD%2FhiobPARNTUC50aMl9lDG2ONmP%2FsaLK%2BJsnZxm50F9FBjJMezEnjLkKbzc5GV68LZq3qStC5WnjWRu448qrfgBQjo4LttBQzR54N1601ixA1eVSkW1wFTVkN38W3lhaeU354p%2BXUZ%2B%2BoO1rTDGx3MNq8EubTAv0t927rbrdVywgzWdP3bnOXYo3Cz07g5yu%2BVakmO%2FXDLGDPdxWuM%2BT7dGRbYf55%2FkA2PLae%2FLyFMTw6HjbTnbaoJZxhMJylqsQGOqUBCkDJlSRnaJUGPDsuzO8OVJIchMIPvhY5oM9XhtnkEf4UY2kyhnd3BZI9uAGF4oYkCOsyxUOEXKwimwZmH%2BKKlUP66Jnja%2B88ODb1aGOYlXbFiTu0QHbxElosdiigusMLYQodnpeDKhWEYYe3sMRP%2FefIcbMG%2FG9Vf%2F6IWh33TRHluy1hjxYeMJpyFkUT6dujwbW6XEsvsCmxziWjM2Dhbil9cdIK&X-Amz-Signature=08bd6050c7866312bac35a3f433335d9aeb6b11668301438d1db78b3fac005b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
