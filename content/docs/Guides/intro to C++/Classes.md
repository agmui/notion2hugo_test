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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PVI3Q36%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T022727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIE%2FuqPW9slutY8I0waLnXFAAWXHTDoZKotewluggC6SbAiEA0FYaX9tR%2BI1qt5A%2FiGiyBQdyQGOk80oWj9piqIWAeDwqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJAABONc14p%2BVFDhircA%2BU4WjWyyociBaCjOwsRkfn38%2BqhnrNaO75S1ooM0lA278kvPzH5w49C13iSnknNmEpodkIsVpYk%2BhNEQciz1ZBy3uemxTIRMw1V2xiRvIMt5JPZMNHV4ps%2FUdwPo1PfJ9Phwwsu2NNeQqSu%2FjKDYujID5bNVwh0Zn9Bb%2FvaQZoTODlyuvvbMXpqDBbyUrvTwURkVY9fJNW6lFFvJTltFan31LOx1j5ryKg87NcKswJ8pszy5TyluiiZfogjq8NsEvJpRZPg5KEbBZebWHrJNK7ILtPnKh%2BfunusnA21d3KKVtFb0lcc%2FENoK5TQWU4gwcuprwpvJc6AngJ40y0i1PDNPLct36dt7xMZeCG3JyxmGVgnrbiuso4s0W7DBsgV1yOSatgWNcyzKY9%2Frqed7H9ypE5%2BLjEgBXKVsNu1DumGXw19thzeifGhV4NcOmtTnP%2FBkfX3YhFYeK%2FDcM9U6Bf77Or%2BBKmM4YjpP%2F38AiTt3W8wzT2Zsd2OkpDuqyX1IH2j4YKjCCvSvBuwebYOusLXriiNt7FhilGL8rvRM2VuOQIW4Vi0rJbhuYqBoJFhqxpCONazuovGKDnnzT8xaPoZKEAICPs80F9Ub%2F71HiNrsAORS30jXm8p8dQzMPSov8EGOqUB5dMajNEhEYX1l00DFvPhypKGolboS7Wu2loWNk3BSU6LMffO4xIPhi5bxd%2F%2FU84Ve3uU2jB1rLcOGjox4u9SC6LkrxHeiegB6%2F4ECVAklfe8MhyswJcu%2B%2FfM4rHrA1LZ2inJI7LAsGAq6OAOGrOSqZJwe5L0Gwg4HKaRHetHh%2BeD1T46UGnfjl245RaJaiw9nL1yowSyTOhpjEbj6o1ADtp0hNqQ&X-Amz-Signature=a01367fbc12ca749edd35896f5fb971cea85b1c5ebeafeadc666bc2e46c5659e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
