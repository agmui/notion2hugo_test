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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTAOYTG7%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC70H0uQaey1bSrIW039lYkhohVW09EIGPwHieY4TilwgIgNuUNFMmSW4k6KwkjC8S7FoO5tsXUyOorKC9RyMF7c%2FIq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBLEQjBH%2B1Zu30C8GyrcA3%2Byf4HPT%2F7biucIt6J1m%2Bn0rz0BM4SDlM8cM7WzCPeoPBb33tt%2FR%2BcvtZ93T%2F9DPZu9TIgX5ghtal%2F0K36QKp%2BwhRdd1pZdFhjyYL%2BuH89UAs5lBKie0HYwiia5mKuvudu%2BJ7mbDT2VPImkg7PcwbfUop%2BU7jtM8F06yEdcL%2F36py%2Bo%2Bn%2ByLQ%2BhdpxR%2BUh1%2BgvAtQX3O6njTl1r3YJh14iRherT7Bob2T48HNm3hZw2jv3MWNd6TODmsJdJ%2Bm9LZC6C%2BZ6PH6W2EjM2haVVZbR8cwD8GB%2BtMsVphJptQyyJ4T5bh5s84wtQKWRaY39sNP63S6DbNFKKpb6DRIkosXrOM4g3sJfyPuB4%2FbJPey9AiluvrsbnwoorZZ8Qxd3njAbQzXZd1%2BK4%2F9vmGUzvVq2Vu4NGKmbXAEVZbi3u7UWXyKrzb1caPa94FBBOu7wCoAnegleZ4rANKYblLycjpHcUel8CScND725j2n8LE%2Bd8ipoDm%2FmUoKVoA12F1lFBFaVAo1thEcqLGX15fq6m4ejZbqMTJmw%2BrbTQVLqW8YZnBPUst5ss6Nr1hGJmvZv6Y1RlRPTc9rYm1jMEtwGwpgJwYIYHY1mij%2Fn0HA6MiY07j912uTaAyfxAyxYRMLT91sEGOqUBGo1BbLuVKvzIIecDMTAYoQI3gGRVXussOeSYe8cOePQ081Wjq2%2Bf4TNVQVVbnhqTwdrWKG8EUGNL0pjEvr%2BPj9MormKA77ScGX4SxQTeVuV%2BhmR28Hk%2BMma74EY8isqdu5huyLRfYO44Z43ds04Td54gbaefTsHJmvARtMjM%2Bn0uDWO%2FFGYvXZNjr6ZxXnrfKS3AhiaxkOhZCgHIGJHqy%2FrIrKV5&X-Amz-Signature=9c6ea47558da5c0542e881959407c94d75def666ab87d65bd90ded2c709fa4c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
