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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466667YV3WM%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T003952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDRQRcB8vbELiovUfd49PP3RXmNEAZ3DS1icLoXsMn6GAIhAM2hdWThKmJzx5kjfMfPxdEpQLq35B3Vfl24SCrgTj4oKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcINOF3QN4eXj%2FONkq3AMxSiPMkLKnJTaEXftFdLsAXr5J66ffQpiSNuBqUCDy%2Fzh1Wr8Yi3fOTo1FXAlRKY1HkYsWIBmVP%2BdaOfBxWT7GmaqM0IEf61%2BRTiSNoHjR0%2Ba7Z0SSRlYZZQrXh8c%2FtStwEvJnwgRZtX8BQPDz0QDIHPD%2FBQUkmePTyQwShmJGnSUfogGE7AhClPiUHwW3vNiRjDeOo0GqMw3GBDqLmmM5ie39HjUvPCZkztfzvvU6QfhqA0xTUEDDpOvL2uISuKatNNFU7b%2FE24p%2BCdePpbDgFmw5kBV6dSqqDn876RDt88rT9EEiGFORQzrlQ%2BnXf%2FRn%2FFWyTqRuW07WhES2RrONVlAwR7OekqwhOj9rhqY%2FdH1YSo6PIzHTJARBx7ZtsxONUbu9rwMEjPnoKTHtKpr5cFQHF40Kz%2BYn6lZh3fUWVlkLXGd2qznnQMwrOEVLx%2F83u3bZtukYBbITWXgsnxeCK4ql9KGujE78Pjplb9aSruH2%2Bmt7KEjbcszqeKuxo1WAf0f9P1ZpTk%2F0c62iRBXRBXndtXLYjbFMqU1P3ni%2Bx2bWKqa7Gam7K4EaHuO4fGhv7BBXLZ3SOfZ2gyZcZO2QSkV2v7N6pae7ozwChia6AuulzkFEwjG66JXyaDDWj8TBBjqkAWeQCwqLApxpUtEpIcbKbp2Dm%2BvQRBjyRMILA3r6%2F6RBg7xWQy3tjbm4AoF0puOBB4ZQuA9GiG05pkW%2Fh0Psa3ESHTDKbjT15RAV0B19srhBCljHMR98V5jZ8q0k1l%2FGtJbmNt39RgjzqfbbpfagE0TLaXV6hk3Pn%2FTrMm4sanbYGI1MlFxKt1ibATcDCAZVI4WDvY7mQ8jX58SLKRVznq3tsncB&X-Amz-Signature=f5277429f7d4f54e4450a5e9f032623a3abcb4adececf8c653b6665e700b7648&X-Amz-SignedHeaders=host&x-id=GetObject)

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
