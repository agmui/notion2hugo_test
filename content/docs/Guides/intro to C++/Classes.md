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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MJWZ7AP%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCurdRRVRw%2BdXhT2vfxJ7Wg6tL4tr4ciKpCuxMhAsIwwwIgIb1da3CfVcEkWuoUUZLHhr75Oi695rCKSLFdkca7GkgqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKrGm5WamVNUCr3%2BoCrcA2kr9VO%2FGIbD3DgHKT9%2BJbVNlaLoolkEeY6%2FaCUK6UPNayOoZL0t5%2FYHG9FxcI%2FMakVZ5OgRmBMhsYn4TuT8TRgGwr5uEM6V8c%2BOhOuGR9Yu0tiCv6TYTQV8qG1awNiFeoDKeIPltywlhaow8c1aDkhUCERRubcSkpOewCO7FyFNMuPbKVYV4Dus0MgH7z2INZ9WY%2BGImW3Dh4kWDlnZHP6Cz8qStHpVC8PVAu25lcBqB70tGfeCR6h%2F%2BdTlQkdoXPiJG7CE2IUaKAqVFUQTTTdxBzWIA8ddd1C1qnz4TO3%2B0LHaB740YRNgZX7Zuwep%2FHJEwwXOnrEjnNZIUVZLC1Al1hTkBw2AGlz%2FzwVwtDz2fZTlynW7VxJdpFh9ozAohkZ%2FgqGFOqKyn9%2FotVnBIkddD3QwZ2GhQOJJDB5rwLsTWAkcVeXIQWUPvkqjyNIogUMpGoOFEnyRSrXuQetjAodjPdSWxWvEJ10Zjw6q6pNBTillW4yQGXShnUWhWYf2EmhMT9je1ZsF02arzQ5G1c%2BxV9KhnBMHCSWMrRsRoGo1qlhCkIOForab9pkkS1FI3MEFkOx4ACB8FFDqVEjCR7dcWNL98BlqfEf4g%2FCK2129N1NaDt627pYb9G9rMNSO%2B8cGOqUB2Yj4vvDxVbeuDW%2BcNPUOZzE3ZS2ygV3B0eiSA7J01ZS86689VhvLSawanpRhtFwbskzuo%2FaYt5lXe9BN2mPexLr9JUNvloRRpyne1gVGnerb0lL1rBK0By2NtHECYwerie9D92YkFG8m6fetGqO9fSNTRKTdmWkUMzqs5BJrUyhDF0mOcaXh194exqDLjzYzgcxo15mGeNBka5TeIDUWBlMR4LfP&X-Amz-Signature=339510826ad50af8209c6471fd53a699558d134d02b957970e9e1a5a7d75f6e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
