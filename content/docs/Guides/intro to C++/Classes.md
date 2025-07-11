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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG57J4UV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDURB80sjG78%2BLmkrgsC3YQwyPhefW776KL0s2kn1JOnAiEApbGzyaDrYTaJhpRtFlO2VPPG8dHA5L6D1ozbL%2B5hO10qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDzQYWoutqVW9i7FircA%2FT9bKHUAyKHdM3fMw0Jgi%2BPlgDV6K%2Bn9Nq3V3CWu9f3OeXaeXuEp6Z4ueXBpuQORb8g4tWJc7fOxhsd4Q0dAh5lRJHQnEHbUgkbmYBp6d1fwb6QeDHkU6l4w%2B%2BExKeQHrAsVRrBokOaEHxnFbFhLlspimQTEqJNmoitkc%2BmhLdi3hpsak0fa0IlNIMe4yz53cH%2BaTdJz95fy18AJjin8QAK8fcpDO56FnTBuRbXLvPFKvE8lca26kTg4en0KRG2OCwdNqazsaVyGhWHVA81jNsjrsLKDelqZjNP7QfmNt6Lh01WvCE7BKLhYm%2FsSXcyjXw7lF%2Fs%2Bxt0%2BRf7sxqOFxtfk5tHox1bzTcoUev%2BehhcgpnwISwVyilJHt3gZloEnnGH4xEZVoA61kKC2FxF5PsQoHfPSmIP5wVR71Qx59ZufAzi0jFq%2Fe9ByTpTMfy2Y3cC5QqjHE0hkv4SEKh4CeWs1I%2FVS6qE1CFB43rom5lze9jNu05id6etNnHEUXrLZ7Un1nJ9DlNuABcUQrd9GLgFPdYephAcv2Gpc4l3MraHkUacn57QeShMrLw4LNA2Nsjpl9tj9gjAaE5P9Hw4zzMdy8EQLBKcQCVgaJ1TCtA27kwDWAqNoEachBcWMJ%2FTxMMGOqUBxyhBPOtW%2BaaDanOppVfm%2FtLiYEsV0J%2FQnL9xwRFceMotkFKB7HuNjE9iq%2BwDiJ26oXvUoMoRYFGNF5%2FmZIrCZCf%2FwWy2MvgJtKO46UdpAqDDrsyIl9ViuzcJTuGjrIabekcqvY5lHzAfepC7LpzfEBJhounu48meE%2BZhG9pFXVjsb3fJNeh4GqbL%2BouHoqwTyY7aw8Q%2BZ7Nk9LUM0hYKMEL6qsZ0&X-Amz-Signature=1d79c908e1cfc702129d94ca202759be12fad56d3f358cb4106114f42798aa1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
