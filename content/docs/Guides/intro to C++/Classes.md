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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RFTQBNK%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCq%2FE2RzJUpISKYSsu1UOTceHJDBqNyYuAa%2FFmRyQFHAiAeXmu6Y6Gia32G%2BrJx9Z8m%2FnWvGryi6cr2sQBbp4sIVCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMBXaOoLCqaMMkOolpKtwD4X9tDx%2F0OTiFWUfne60puxWV854fuZAbuDhyO2Z7UNpzGpM%2B4%2BOsh2UKKVCTqzKFv9SEd5%2FeKNlmbBuSFB70%2FX1D3fruE5sHXFcifqDTpyCNTGtE2w440Jz17Mmx9uFmFK%2FJ7aA4hmlHSBdyTm5CHf8C7NHs671BbB6X6Tkpouy%2BQapEOfwtvvixt%2BoOMUKJn%2Bp6iZT70GHfOYklh6nwgTDusC%2Bmn9ENKVR8wlbEuCZcZDcMwJoTepqTQcUeP4nZzqX1VVt4py%2Bf2MgY6Dr8s2GtOqi8cQdzXjpMcvPS%2BaLOdxtVuDhyIfcFRn9uM0KoFDT1viN9MRpSb3atpb9CGRNbvy%2FYCeN%2BpS7xshMW8iDxRCT%2FwCaGjPX018%2F3GEjOMOMIusYWhK68gBteRwqdJT%2FcFryulsbjxDuaZkKNwEK3XfXG10rHGXzL9jNur%2FEqgYUBb09LyxHXL9iwn%2BHtHEtPsZlcRtbgi01NEwVFsVpefXp5KTEcsvzz1Kg3DBw1HVe%2FAyAydM27hvAmh52MFkTONV1qqsQBMPM8N7Q9HIbbA7aN6yOAn1caAmobSIA5wOJsfbR%2BfA2pY6rC1Z5XfopuG%2FvHOqIrvZWs5dlmvGfRGlKIgq0CuwHUNvkwgPD7vwY6pgG24jHSKnV601dDsdCMzZPUcHAB1GKTlo7eoUR78rCAsZ%2F1jTO8R23JMKaWBcWj%2FareBGkQvxiY%2FtM9n7Z4bWcM08WYVJ%2BadjYTvdmODS8ttD4EhtiEOiVO0LuGC%2F8bDy1pOkcRnsp7SqeSYTAn7sVcEEr7a%2BJ9C6qzlUmkqzejiYDLWa5AvB26NuKXkzm6ykBWYpB7M5iwyeOhp%2Fl7xOnDXnlDltvA&X-Amz-Signature=2f6849fae3cf8a83bcd726439fbd17813f746e6dbc10d637d18bd923aaa253e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
