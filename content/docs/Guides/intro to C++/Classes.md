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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7IP5K2X%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbEHM6GG%2BkfJ%2B4SahDf0p%2FA3RKjCGWjG1Mj9mjOnIImgIgQE6z5dbNODvOdDmqaaSliLiFXsWh75NkamDkeMtSeAMq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPdi5LJHY8jrYaJO0ircA1ImonRxZezHbNv2QsUbPSQreKRou9vCh1rSxAEujOuLNIEFU6msv260s43DirSG79bJHNEb%2FWxtzEmk3kd183BAKoAEu5Ts8GIbqlp8Da8%2F6%2BBETrdLX%2BS6A5NO9d2FfaPsDy4sHKmf%2F5jbNYfgut7gkWeieCYnMZjF90eIJqDa6AG9gCfCbGkwwa6mKd4UkraCix9%2B2288hGoEtE5vVbADpK89EsWDLl7z1xH179q5dDf7tu3ASXVXLBxuMTTEv7hFEO4fsfY6IuehxlLAR%2BHxQgq0XCp%2BTrYRz%2F8bOikRKA2wDioD2%2FYKJifeuUivcF3y6QDIgiYokSGGu6CL0%2Fx%2B7C4Ov18gspfbsH6pb5ToOgxdYF%2FjwRxLlRWymfvAVQX4jbnPznCYW%2FGycuYIt9mF1EvXTbpxoQt92YeR6gNGcB1lOA6Om6W1cemKgulSWEt0sxqfIjdoVp3gl82WgCJSPJgDJT9JbQmLeylcIqLLy9fRiT8XvkOxYj7wYENQX6kMXGhZnaw2%2F2BGcQV0%2Fh5YUrMEIdo4vPNzFrwaqxyWK%2FR9Vh528zlIYDA3Ry8%2Fp3FIzm5f0z85xT5ig0poV1gggW7OizWbnA%2BXR5x0kmQRwOITYO9s2eto6lruMKuy4MsGOqUBuEoVTbmhbDXzm0NiS%2FbVXPMP8QNzIVycotYMuWjeIPbbbH2ROYwi1tUDOXWS6lgujpbu30Q40NXbFNpXuP8o7Y9GPs%2Flqm37aHZrNEfA2g2mFrnxquDBOp2L8oV7KLyEr%2FTqrepp%2BIehPx%2BlIRDx%2FGVAEkD8keU%2BixxBdYW7DSzPx9SyD%2FABzeZA%2FCGzFX8IAMocKtEBF7CvjrVrdfIOz5kNxjtn&X-Amz-Signature=c744de7043d9bb55f7e83bcdb8abe807c3ce0d1894ee1be84a0c7b6b5692bc9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
