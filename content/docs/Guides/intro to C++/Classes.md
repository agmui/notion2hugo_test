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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZGHWUN6%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T042737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv%2BEOwe2JZdU2jTWwp47bq%2B3SsINjxdcKHB0waePvOOgIgKpAjyA0JU8xSRugoroFfeZeb7obZ0Z%2Fq7v5ynBFk8xUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyXeoEjxkhCzgXC6CrcA3SuPwdSpjDjcAlulDmM99mUX6FcAHpKqGrbpP2KtE39hjau8ggEuVlY1ksrhESEqFC%2FyZ4q5%2FHxEL3vxmmkgDWz6ZWCKiy8ibOoI6YfIPnNoAS0eRjkVi0u24URqh%2Bz%2BGJY7Ize1o3%2FgqMuUY4T6SUGWDOGygWPn6GLeZU5TH61AfCl2FN8xiq%2BDxkWDbx3xtz8Y1rFEtAOMvIp8dDaDS1uSAqyh%2F50iCFayrlYmxk5paC%2FwQNGj2T5PS7xGERi6wk7%2Ba9j%2FWyImmRW42Ov2HOMA%2FZgSsuZBh364Rnmqc8w4SaHqmeBnkEhpZJ8SrpAZlgb1tn45JO02UeIcqiBmwUCsmUkwyc%2FPXIsmuOz0lTKDUeHJNx81qY1SNdlCSYS6iNJFfh08NI5djGpgJXgL6y1Zb30ZzRHXiiQHhaoPlkwnWZEwEHeE707Q7g8LDLS8p88C4BxZiOqIy6O15SY5qbRxnNZkWvvCYGtx9DlbqOuXSCEIgznJjPg7UFaiKeEZ%2BzzU3RM1FmHEDwGRRfsyJARIKpmrtlxjtwCsy6eYzAesIO3fmfFlTcrWrVXU2ORkn6qVe3frmtq9D0a8ALXKqUSaXtQx%2FTh32A67w0os6t8Ubjs3PN0S3D%2B1KS3MPHYzMMGOqUBE%2FXr2XHfscSxNQta8%2BglilGwXhdHB2WYq3579oQkpD5CasBoLjAkyHcv7oa%2FwlAi8PuiFs7%2FZx2%2Bv94rHjyUjrimxhyTEc6S32%2BEvtMUfukKNKdIF%2B9vWUZSo9314p9m%2BCs7gL3zim50WjoqL1mFshc028zzQKuJH287%2FU3Mxw7XhD4mSx1FPRb8%2FLnQMyeQgz2OH7czOIdx7%2F4IlXzzqQ%2BqAvz4&X-Amz-Signature=0d7eae190e1edd3823ad54b998b7a2aebd5691a7c616dba0efa329f29a174088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
