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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QK5KLRL%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuayPWZRYjJOtSQGokJxFu0mS3X4%2FRVrFqW4ls1oVatAiEAq%2BWGoF7GWoMu1iBsKmoT4Pg%2By%2BED8rw4WH4ORnS5uUgqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDp3oNDe79QaYgRzvyrcAxAnxeUZPhs1GzfolNg1BYAh8Y4KE%2B03WkV34GAub%2BBnKouza%2BiAnUUPfePdIVtHG2wrDdPGpIzf%2Bos3IwL3v4SnO2te75AvS%2BoLTiZYdG1CSlUklLxLNqY64mkz1iYEJAV%2BqE84vbfeMlzmsCuah2QCT%2FswRk6yiMFKRyCO0xyJe2K0MLiiBnxSRCM9kRlAS98IlVMdushjVW6APG1T7zhJtvQzl5qbchjtLlZ%2Fc3jy2%2BkUCNTotGuzghJuo6j9SR5wR7UuS0rhzYKUG2WbLsx11tsa05VQ23QHxUe19WAWxps6VCpvbUA1oWYMtE00ZLebB00XlXX2macJeYywH33yVLNVdNaU%2B6WvdqFcNDL8xJ4eV2z4hGZRvwLdXym8MgVum0LAsOIxwN0KSOdDsdd%2F1UOdqDl01WJas9G5M6nvLuxdsJEegwWSbuR3g%2Fkr233QYpxNrGi1UeSjL8KHjPuiUDnbQeFEsEVL3a6nitMaPffmhF0HuTof%2FHtES8asLaXS0gFRbPbNs%2F2lT8ose%2F0k%2BX0M1R1Ha07X5XxtwTW%2Fr8Ta5nUAYVImU%2BUznPVj0bc7P3JgXDtxAutTbaTpu3hX03KME6g4G%2FYdlzW58NOQvxKzh%2FBZtIJuxX2xMLav38EGOqUBKCRnlJh7pGYizUKdw29qjXHtkI7QYhGF68dAbFmysAyubZWTehBYRtJrYaJZWcECBvqiYv4VGrb6GCHTi3lxMpukCWiE4Zlwif6vEEYNgYimGOL39MrTxaKaDnyLGO28iNauMKx7g%2BLkAq92%2FRwdw5Ky6FVb54cjWJkdEsNtz2x4d9MhlF34hCpJOWmN1HzQ2zrgjB5aS5KPh%2F0fV%2FGLCqbqGMPN&X-Amz-Signature=bbcc19a9a5c957e0bee7a7372f486dc2612e0031de54b905dcc4994b300c7ac2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
