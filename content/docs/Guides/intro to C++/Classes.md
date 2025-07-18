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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC4OOYHH%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T110821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCp1edzr8BO0oJB6xocXLiN8ULWidB%2F2hJq23ThHvMvjAIgYyF7LfN83TIpVuN42DAzDtpUOw9up5QDc9kG0wqlRFcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwLisa60q7Rr2fYPSrcA8o2zmUjO%2BOeARWPflN0iBwRdotNdDGzZX6ZF9ccPlxykt0ketzx9PKvnJO8kYi33Qfa8%2FAq2jTCOAwLw7eknQ6U8fzfP6JKMk2gjEj%2FxgsDHkHVBFItLq4Mf2xFxtWRrptFbRG%2BaH0i%2B2fEoruFZxttLneZ1Ub2qAAiXpHuPdDoTLJri%2BBtta%2F7pgx%2FdNMhFXR6oPVjbBI%2FYYpvUI7%2FLk%2BdQKKhK1RuGY8vsb%2BA2TFpmt3b6rKNbhiLPbCtHqCHXTiToBaAarvEmf9c47NPEQIlt1ByWGZ2DW2tW0Q88GeuHZBjrp6dbFZ%2BH11SHxwn3aYmMWm1UdrFQlVPuBatyynjzbPOqF%2BMcsoWNqQgCqheNML4FAgmM6g%2FX39ai3oap1%2Bv0d7YNxmF5YKWzUMPY3gYs3efXwSVIbZqQZcpg9Fl38afFgJyTYsF7K0k7seg22LlMe208f7NXSjYZPy7Mou9J0H6OF7mVXIKz26%2FCeofDKRA%2B6tl2XNDTli%2Bz23pw0UhGX2wJiaxSFt71je0xqRwCPq82kBjZTegfCWLKq42acjrKFD1287U6tx%2BlmevJr9EQiqOBnfsFupANS3KoqYLl7fMkngN6TBHCEH0%2F8YOqOisxuiVLZbJlnHrMI7Q6MMGOqUBUFF3st99YRtRlyPIkj3alhHOgwVSFz7kNOpqarV0RWZwGWZpin7gaAVHn3%2FhhHb8pgWZITMo198AFdtzf3JJvCib%2B%2B2WbtCT6Tlo9ZyfFjVl%2BERCk3ybyJryrAAQaDRYvETIrVfDszBMBPgUb6skyDfLN2jJTi95ChoADBxzvsthxwhaalOsoTWIXmsdtpPWylX%2BuCTddxY%2BVn4WUJHHX2rltZ12&X-Amz-Signature=a1ae641fdac16e93408c97bab402215c2199526dc4671df1d226820682d4e067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
