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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAMFRDPR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBGl026Kuwc1jTPeHVWmy1enZAPtWRbs9FND7H71jqhJAiBDQtBwEztLBZuTYdmN3e46I5VGmoYQrthEZZzghd0wByr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMnUPym0G0pTnrH%2B93KtwDgeopSa0wqyMAXO7bq2n4tx%2FwEJLSaAz1EXeHABpad8%2BycAJfvd1q7%2F9ueerNxkc8eQJqngv2gKir73bAvzWrg51GZ9Xv2B1ubATqo9FWPzVbS6WGrE7dnFxoRAW436pc1HIzwQfiukEC96ezwaRG7jNchJwEvU3Uecul0TvKdJujcokL2jZyC1hhpcrTaCHFT0IVGlF%2B%2FkrAoty24u7RYQVqVC%2Bbqcjlpoh0CSE4Hq63wWFInvoW%2Blva%2FGNxm%2BZ4BR3HxnHh0bGIJEvkjzi0SvQ6w%2BWBiP3Y1jU3E2fuYXw08oHps7uN1oa9%2FBgYdXIDCrbSNGL8z7eqHeRqaKN4cy7A9YYssBDvD592GCTFJvK4yTZqhy%2F1bcvHusYzBYkEl4U4YV1doWk%2BukONQXCMtAq%2B1kWqPkyL4LvGp1oPPd77urySs1ojz1XctQQNXQVKQb%2FDjfnvJNeWsoW%2B8UtBTbHE77LYKRH2urxZbwjVB%2B5m8qDcIGBQ343Jjf2nB08Apa3qwYU9ZP3vf%2FeJaZ9S0028Yvb7JtYLfRCkUCjf3HaGNfiWBIghKEfxL5bHRLWMNHIa9UMC3c61%2B3p6WoigCRaPczlWpiuimcrrihFKcA36hn1OSiUvnKW4%2F3Ywo4aPxAY6pgE9se%2B5XzM61q43gd5dwnSrfdOxCEJOXsgZsheVyw9Sa3hjV%2FJFWnTF09EDwnD0quTpssl0dJV%2FNyVb6Os2ySZGX2Ta%2Flz%2Fghsoba4eP0eEKKndJXVfTkmJKFkJPj5TxCwficH7ay2LqBaHzxHPdyWeajgWPn%2B6pjToI9HgA2SOr4lg62GK39kpHn0fMad9cZt1PRFpxFSIQYO1gb4Y5rVzqoZDgMa5&X-Amz-Signature=0f4ea87dd0c269548d49a2f9f586e470875eba1ee452f30e25b6a18b53c8330a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
