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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LBERT2T%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA48nMzbzRWjRdH29nEn8fU5%2BbUu6q0hWcUm3hx1zmRMAiEA93vIA9E3JDN0jKfiKdNusztIqtAs2bFwgrEmcpIZPwUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInlZvHRAPa0Tv9oNSrcAzya8mqLOcR8q63E%2FGjn8VP6CD8pkfCfxSWacZkOfDQZhic6X9hd%2BlCbAkidIKF2bSaQdgjrSUbUTMDSlkJekyg0zhf5L9lV19hCJl3wFq%2F%2FryAiV1uCLXl0eKVqAUKB0v4CkRSu8gOczUWUlk9raEs7DMzX%2BGEVFFBp0E1%2FZ5L8LIg2dVwPmpAjYN0UyXFjbIydx%2FKUKQYebbuw6cyoiuYlPp1MEj8NX3TPN%2F%2F3B2w25lKW6unnn8UbUQ2UJ87AcRx8iZJBlddfn5fx9Kcbtrp0vn%2BmXFJXpOLvxaoB%2FA897ct88ky5Me8neHWlRCHVxEsYVfz%2F8J1DE2TgZlYsa1qN3dyMgdaSxrgadFmR12MWRQsTfVyf5w8PMA1TFkfZjF7w4%2FxQbMWQhag2JW8eOin21yF872pL7abtG18kteURZQTqo3MVVB%2F5jfUUVid6mth6huPcJnDZDR%2Fk0nfmboDb8tmZsme8GkwYPSZJ1Siu%2BIjkYGIpPXK%2Fc%2BK%2FlYdYqQjNNcXzsDRM%2B6YmewAqg8HjwAuAiEtazgYmj%2FtwmNwnHByfKSqwTwUavcn9JnabDH%2F%2FygFLfx3a3SosG%2BR880HUnwD2q95sDG44uR0X7w29IUBAIRQiBWKCkDi4MKr0gMMGOqUBFIQrICOOX7hb0PswHyYwSsBQBbOSoDyqFe4r26kigVL8Z3hRi%2BNafbyYcYPazPoehCht%2Fi8%2BrUlhpuACLGMmQ1XRossHdV5vsycoz%2FUi7S4DRzRNv%2BmMgl3f26K9QMdnIdpLqDia2bIlPrRmrz9qQLMXj1fHEdyAkHM1SkCpws6fmZixkbvT3lPRKv9DzrrF%2Fwp38K%2BOwtpsmPLc8qzVjTlk3aVc&X-Amz-Signature=2195919f3532891af9fea564ebcde067e1d6d0e666d7de7da3493e12e06a72a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
