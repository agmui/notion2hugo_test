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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVNNJOCS%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCID6zp1nMjMb0ZK9LAR1AMf4RHFgfynJ5mXh7Y1w9SuReAiEAvm4GTzF6A734xbzXjQsfe6TaBtt0G%2FtiYjWooVW0B3oqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2F6U8GFeDNdahEzjSrcAzn%2BzVk0SjbT1xUVLXnv9KL2nlkb%2FADo8filsDcClczHDgmcX6aDM1oBQr%2BZwscj4bca8kKz1uRxltKIEoqbTL538WD4LYgwMuEGK29cMVb6yt1nbTn9vp2QmXXtBppAKg4YX713yhGCEFYItd0tnH4cm8g%2FyReGCPs0Nlv8wxYFQW%2FzfndNf7btUf4rEyMMqg%2FQ5Zv1xhgsG0RNEGHqpnqF53EO%2Fj0vjJKBY0edUtrI68iYGWyors8kiLMKNZ7EEc4VRLxPSBz%2BVBy9WCIkBcerwZHIZJJuw45DsOTH7mZhDx4U4hKCJXmMBXKyF%2F4Oa%2Be9wV6VvXGl3RbtUGgQmWu%2BB3lNiFpkHhH1fx1J5O21txcR%2BXGlRt%2BvYu4Yhcah%2B%2FrxxtLYaF2NKTcWe%2BUMF2z4ZXO6U%2Bu94ETZmpAkckpAjkptyzl32qX1%2BMOrAsYqAPOr9f28yHrhcNMdcpdLcTiUr3ORT87HpdoFzZFUjAq8544jMwUEsCEzm63DlyrLtHHjCzdwLm%2FP1X327jN7Tw%2B0QEn1Z9ElHKjTac%2F1NEWYdGsGj8UMOlSTVynKqfIyCHK%2FPe9BuQ6OeTMB7yk%2BqNWy4CBjB%2B7TBpQCv4t0237fFbJ1QBnEgp4Qk9KVMNjXpscGOqUBNKK4kG4%2FQHL6R6yhQb6KE8mXXc%2Btt0ms98Akml5f7M51r8PQzN7VwQIHiqOceM0cR9mR597dOnhY33FzSYI6rUVeFg%2Fku%2BLaniT0enzcMMPqJKJVvVeRY%2BqBCc2K%2Bpt%2Fb7tMKI7v9kbptdoxv8DSA%2BObESthR2Y1PEnJV1cMGCtv3DZ%2FdKJKqfL3WfjFInnUfgpisBt9VkpYvq6G%2F7W4TNmyWM0t&X-Amz-Signature=347dc2b768892642bd1d723f2d818a3b1c54d1e5ee6159a217cc69dcc86f684a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
