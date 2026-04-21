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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDNO3PO4%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIH3U3vx6Qhlertfz2TEkZDF75pBOi9rzWF3%2BphNhXk9VAiBMEex9W5OGkXy94VTXOSSne34ATiPxzMvhlD%2FVeYcvwir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMPC4oUEn7j%2FjkX2xyKtwDW1NtWZVlraX0wzUMRWELufnGFhbLOJVnJCKOu3nDCfENSIt7uwEoEt1CtxhO6n8yMdBIK1UdAZvGW1HHkV1Rg7%2Bfmrnh2q2ROeHvamKgDmqlc5PBfGi35SWlk%2FIYKJW4R0mwXoOadtli3Wv3ViaByB9awC8IfYMk49sMqOrHqulC2DQThKhC7YRB4n0TcvfJNWNG6OoQUesuDEMdDF%2FTQujhr7E3AsIDYNP4hCeuVE%2FmEtV%2BR27whBtCbFl8Zw7pjGJCLMxNW0gdClOno09HUJnLLjgWPRhjaizuxxjJb7A2l9B5qt3QGf2FR4T9TBrzhv235mMWS2v9CQqs6eAG12PJcvLx8MRiahLvljdSynWQhBUbdzZh6eHUatXyXnGaTEoN0xqx6qV%2BIjfXo6WLsfdElP6GYHbo%2F04Jpo0M4CJ0ATNzTnljOn5U0rCfjsUJIbdsVhluoAq0yqtjjjtf3Wi0QcmjdXTQi1j%2BqPpWtzFjPkJC3RQ%2F5eGVmnPi%2FWfsdZ1NyAXgMldRe751RKyrCg5xjdznjNKSErKM%2BGBKvd%2BfFSUJlS1bs32HJGlEGNLjgQsgm3TUNAOw6xwBVgj8B987gu0O717kkCxczZ1H%2BR5GWME8jxZZN9OEKXUw%2FambzwY6pgGmgu%2Fg3lQq0OAG59i0LG8ze1GNdPtSy3WR%2B7qmu77%2BY%2Fbgh1JpilXkh75gnIYt3VP7%2FwNFLMo8nkwGRlcEw1JGLSI4IoGkog8BzK87n0j8xxLzSfqFJOqC5Ijb%2BzOKJTzDeVFmElwHjfgDjTqS%2F8nr1TnZtGNmdi9Ze%2BYJNbQr7%2FhcD8uiVvklHNoMfftrxaRihhqLckaJJTIkQ14jmG6E2IzkwRsb&X-Amz-Signature=e5dbbe85d385b5d1696752acf55f9aa648b4ad3b2622b96b19cbc34d7b39ab9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
