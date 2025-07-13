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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3QNI5TM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDx6rQ%2F3pqLue%2FBFlMlak5Exgv%2BsmAmemWqxB9vfxxsawIgbDiX5Bi%2FPbYcvBPD91TRKoPwn5438oDzJcUBqnFwfWAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDNaljeT8%2B2xDuB9MrCrcA3InSiq0QNd9MiDnCjvZT%2FKulixh1WiJslteIcgywHyuyxw%2BcPk5ZwyfZrT0JMEE8S2xONKjWZ2xVq698geMgmyrimSt%2FRmTBdK6Wizr1NbnlMjwxxnBrfNrfqQJN8w0Rd1Rzkz1tZp63XZ15a43CHLu4%2F%2F2diXH0parHh3Hhca4qAdlZDEihvXK8A0yUG%2F3pFbjSNoy5PiOWvMhbhGW1KBXWhgnxLYO3VWs1%2B6b%2FrHofAmMapWJ1I9ONLYIm1iHAXv6Vut7reyXfh2TM7V7GycnqFUGhDw6X4cFVKvzhXxGRLO3QZivIzkc%2FX5CDKDtI9KDcRmOgZGytX%2FLu%2B1pAGEu9sfalRh4MjVtrgo4G3hq5wAX5ksrx%2FHbSPhp2dkali5jUIKOtnHJ%2BBPqs9zdgI5woffyndYf6TOT2KLKQ87H5ilIQnRCAOzDRzigUMxdEKvMSd4Ty9SE0X12o08%2FG1uUQlUflzU04TdYYAgLavgmzaa4Mz%2FBBCOt1pQ25n%2BP%2FNIJhB1j3elGCvGdWw3pv0IAm%2FPZtbWuX5LtI8W7m8lzpeuqOcNk1NH8ZCWSWUD9hj3HuAKWc%2FJtsDnzviTbeK%2Bgja9K8zT6ZHjcvP3FhQ8wLuIwh7aaWsLbIjiBMIPnz8MGOqUBe33XfKyujp2QbCAgAitgNIPDwGtYSibHnWhD3Zmw5A8NELe%2FLliSsEVWGyL1QilieOzidau1nacceT8VVDo74cn3Dr9ppqCF7hQPNZshbwYCOv%2BKnvNCyfHoJ3o6ZqGwHGtc7yH7yzWrMPn8GppVlw9OKePVE%2BOsaPE34pYm4QAvXlceh8fOlSrACiR61Qu3VgyU8TZknbfhrADbY1150dFo1s%2Bw&X-Amz-Signature=f40fd7b3cb234fb969dc19b34582d4fa4d7d5668b7950ddb9c0c86d99235687f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
