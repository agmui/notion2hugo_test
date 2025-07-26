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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJMWTALY%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIDgyWKFd8KDqA%2B%2FZaAeTg%2BzaqhKUZxvG7VrV6IgE5fZgAiEAkyMoDku5%2Fn2%2B8kEjb36F8MPW%2FKM462AfCd8YHaYEDj0q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDMqb0hQkuH%2BE%2BlvdMyrcA%2BWOP44lkd2OsWOHvLfcm%2F6ruj4SPbGN2tn4hcJEVxK0loVLBGG2wegXrHTrw7Ty0NdpRJdi%2BayVPZbmdgsavYWqEWFfsBpOMWdze1xQyfWRj7UHLdlfFgwKzCgB0XK%2FEe9fgzlQlqcAx2ZHUFhNJB8NgI2jJ8IVPqNQ34cTZo24%2BLaQiH8Ot4ZBukPQNsLLXSC87V8CH8P8Lq4%2BDRidRFmOfqdewlmOv7Vf%2FrG7324%2BbuHd%2Bcq9ypkgoA0LP%2FRRxbfRoTo%2F1A1xkuB0e5k7xiwbH9nVXCFx1MFcT5b3xUioVet%2BoYU2LFbKEbXFaba05sI1fZAx6ryFFB3Grux4oJw23%2FsDkQpxyjj9Q8Uwogfxm053tH1P89UIXlBgSm4voUrlnYwMroInknko%2FIHOt7lrjQx4CK%2FDSHl5s0NE%2Bq1WjN3EHtQib%2Bw32dJ9OrxeEgNlFVlPf0B7X90yMycHsERZdaCqJqMfel3rkPyijMS1nxcKRHk3%2BwK3QueCSrpb%2B%2BsRbJZKuPsdSag5HgJtyrNYn2P0rjHZMp2QVPLH%2FGrpEg8fhwkT07LSKKLmXSb8LGftB%2F4cuFmC5aZsbN4Vg7J8hymJ10PtzEsVECRG1qKtuNo0vHdjWTot5gEWMLWGksQGOqUBDbY%2BHcXQzX2PxU0YWuLx2zgfsxeF18pqxPxJWqLjWs5WEBhYK6s3jD%2FI3p47GDtGoaDvwHmvh%2F0fG0Efw5bw1Rg93hi4%2BlSj76MgAOFvnoK9nfdP2UxljeAgdIpBDb2ZsT%2FIlDEa54ctXCjzbDo%2F9Nd%2FTLM24jutldENOo9ag1Jw38QZu7ple8lC8MeMpNDRCw5NNlbxy1ezH29Xg1w6CNVkSPRj&X-Amz-Signature=81931a4ecdf645c6f12a8687f1fbdf1d77fe1febb3c1a6717deb9c5ffdc43077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
