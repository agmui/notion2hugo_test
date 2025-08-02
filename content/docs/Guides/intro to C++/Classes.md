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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UXZNRZ2%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtTR7gCIVRXFVS3Igk%2FBJs76p1v%2FeGrJeE0sa0h3xn%2FAIgXzZwG4SwBijUXQCMG01RNNSEk9qGeepIXQ3A6fEBIZQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHuBPU7mUrpQtOvZLSrcAx8rO84vp61kXI6GMDwlz1UC%2FpkE26x%2BCQKcPaER9edp44PKikUUgMa150qizVjDwhgz5EYu7JqlFlZE9NzDeYDj1eayy3YUxzROVDmgQLZVeXH0uYKefvH2K5MQVjLOV8sGG7LuEu5Puz2BJKitRWPYGifaDHPAXlEivv5knKVY51cCPA2G5BysdsmxiIPwQxduDnnTxAwE2uADAEJFAxZqy9V3js%2FFI7%2FpXrN92WX8m1r%2F3IqL09h%2FClW0tobLToQWw4%2FD0L3aKNgoueZ1341bWSU8mHj0IVyrJaFQ%2BrGTZV7jAj05%2BZC3LrzWpALdz8izHjalH3DmhgeZkt5%2BZkNNMNmpSnHc%2F%2BEeLYTc2vkVsPDiSPBQ78mRzr3ATu%2FIlTkdEsWGgolFy6akTb1n%2Fb6kPNWP%2BPltWUklNfETs3DWJ1aQt7iYR%2Bt4EIjr4Oc6lNOlzGExzBBh4kmwx3G5b7mty9qATBDGqMxspIgB7wKESRAY%2F5XjjSKlLvwoFZzmisE%2FUf6FS5q6WZpd1C9gNwKrqIabgOZ6TJTHOBR4mXe1S1tgTkngDBQpxBp%2BZImpRQonbVpYcHkA%2BnARedbKCTvgodkwE86Hnt4xIuPCKaWnxFfEJZT1vkM%2BmvbSMP3vtsQGOqUB3adtCsU8LGDbAIjvus40N6dp0s1uLcbtLbpNu8YmzbRi4JQvtjOlYkL6WX2875cacEIVxJCEDJ0tdaH4fuiA9kZlkFoEH86OWSdmPApG%2FvCqU4VaLTZYsqcKMhS4L%2FuEyn1mwWO8t86YO2vfRYMbzVgQzZ29hAE6o9if5YPDuzFx%2BI1%2BuNiw%2BjqXL0Jhc73fgNppRvqk%2BT%2BDlcG7d1WXaQmT4NLp&X-Amz-Signature=8719d45d8a6e51d81525be9dc3db7ceee5655f32517aae665e0cc8ddd14adfe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
