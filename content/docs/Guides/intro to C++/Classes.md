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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLMADQCX%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCXTh4ACZnPyNpBVia02Br%2FAruDIbmrm5j5q%2By0rET2zQIhAK0qf%2BjOOOYaHZsgRLR06LbErMciMyhrZ9NMB97EMOZtKv8DCBIQABoMNjM3NDIzMTgzODA1Igxz8jWCPKBPpUVF0asq3AP9OhFxnx0h8OVDpLzPOZYptFrJZRjz88GoOynUHmIW5TwiQq6FR8MIS8qPkXDpgCMrwlD%2FHyp6gSGO4TOFI7CXgsmOySrt6IdLm3cdmQR%2Fo7H09WN4bibKYHBdNXyhVgnwr3FabF3hmbhXtUOev5C1tyATxjbsXQN4b4J%2Bb4BtsBmOJYz63OqLuLVP3%2BtNyNAfHJ5fnaaC98X1P9RYKDoIwwAjE6ytVAsVCOEzCIHfXKFbP1Ran1d2k8i5StJ5oCHCyKJ%2FZ%2BR41CSxPOo0DijEZwusSLm6ng7baQ5Gf7rdz00zfv344L3meK6MQ9olqjHdRch145E9hzZKiVJv%2F2w33Oxdm2si6DmBBQ88xWCagIUj1LILUJow0hwnKf2FILdrFLjOFSn3fSpTmQvUviNlU33vRRMbSSyVUL9bluzJvkMjhBEIGznwWOrjnXv7c3%2F3GcCNceTE5XFhql%2BscYhBHXT89ytDZyhS0MKLWOuwJZy6JNQbZsvwfyVOkMO6rEozBKpuisaQLeuAjNPM8HPC75NdVYD%2FBjGYyUUbjnVL1Jh5npGFbB%2FQjBfyq0kGmYgvEPcx5bSk0tMAfwJWZ1%2Fli2eRXXIA%2B%2Ff1pyq%2FZWPjWm6zD5l57iJ4mIrQCDDuuJHBBjqkAb%2BHG2TIvQTed6qS9m%2FO%2BbBJoPd0OX0DC%2B3ZfbJLh6cRbMmtXdxZAyPIEnhBXu%2FzH4UmTV1pB93yAt6Rpe6m92I1zWCupju0z04vALQItEy64mZFbRlztkAmpQoayfV70Ab%2BTtnArps5xcNR0cNKAcBu9jsm%2FePC7%2BYBfyJltUfsGyUJ6KOygZ2MaR0kqsikYh3cpZAMZGzrQiYsi6SBCOsoiKro&X-Amz-Signature=9a24acc9c518a22c78763beebeacc80c7b104fe9f5d7b5e4feaac5c68177a5b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
