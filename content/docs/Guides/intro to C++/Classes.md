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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHMHYOB4%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCID23pcoBUYHERNkUCXZoFUbcGLUGhtWMALDdnZnRUDg9AiBTp67SVHGOCdVEWGEnrW6sKhbSRd4NEzFFJJ%2FKb3TyNSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM74aB7XtsOl8Ati6SKtwDj9lWDF3SebhSbQqymu2aElFw0Pmurgdtr4pjnXFpM4hNJwhV8NgZYq7D2%2F4%2FrZ8yAudsMaB5mFine%2FOzyad8iJFmnpgRpEehSWOsrDMo0Lf0%2FVcaaam%2FcGu7Outcx3CjCwyDTL6HNuZ92UQvdyTj4EdHhFNyrP9LCJ%2F1OQc0ZCKfQAJ1sMWQP7U7g3hmeXUZO393rpIB63hC9SBRP5ihcVmr8qNOs9UE8IzqEHyMfLpFFzRdCJ9lfKT8L7yQ3rlsp7Mi9vyeyxIxlStbgPgrhUWbL9pK48igbYwvxIO46U6btwrJk%2BDqCccQoS6sBPbIOymCIf%2FgDoYZRiCiCbEz0EmL2rG1yw2zwqtjxzwGCWOB%2BVRK6df1fHIjKTOqrgG3YjaWZk43OghcmWq7MPCTjj0mkY69Iw4EQUJ4VyWGQ%2BnDId8XMB367yH4FDHTKUGwxb7VG3obsMZBb%2BcNpvOGWbyy42bNhjHLx06QS2ynT2%2BgDg2oI2W1%2FOTsoMyb9UteDRSGX%2FRitxqHhXZDlfYBdSAIWLIV6Qe2lgMmv3ybo7RnRHgLy%2BktoC5TWRPbrqLVrhtN80ZMsymypNA%2Fh6uZlbmUhwarCkBxj2uG905UtFOqmPCYQFceszy8bMIw0pqZvQY6pgGvBIIYx7vlvqmT9YBdPN%2BTOIbSN5xYHps6bqiZlGKGaHCECaWdKcJp12BIwfd6spsxaOJURD9Ujhq8j56qvrhoO5YLD392at9e9dTpt3UDLUM4VKE%2FKZiVLnVPKyXsgi4TCVL3bC5fLGAq0oU3r6nPHoN2OR7DNKNc23RsccRiJ%2FmQ9Uu%2Fs0FAPCuNWbSPHW6V9Wo%2BykTriJ0F%2FuVKzBzQmBvW6x7g&X-Amz-Signature=580c2b11bcbe052f762dd6327b7dddd7e0427a8a1e589c58d6db7ec916d228a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
