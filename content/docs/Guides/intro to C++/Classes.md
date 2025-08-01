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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROVAGVYU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4GMTyp4fkQAJnmWfNYftudrVjZpryL4FvtQXauGewdQIhALMKdvmDhrEwcN7LJQfn3jvgnmSZG3wx4wpTghQiQMLQKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4BA%2BRr%2BpQqfIxUBMq3AN%2BcW2HOuun1OnidzD7Px7EyXnTpbGyq5kkAHqaFa%2B09%2FNlTZjW3INGs5clWgspc5QyWKVm7ZFxhFlBJVwr7gkvpTmH4UyHz9xNTuVkfMmWR9TkcP5dyjI4JQ03CHYCpA%2BbzGgnNPo6kZpnxj3wSuxig3AIThOx0ING09H0drfZ%2B4I1taYFnWHNy193oH9XoopxXL9OH0%2BbReZLkb58JceUW2dGe%2BkFje5pIlGp%2BVJiQexsO9trHZyYDDQqO1099Xd3%2FibBL7yc8Ipns47LhrC5763mnIDPzVBZrZGXCezFXPSkVFiEmuszXfQFzV5%2Be1xXpEYBZUsLUIUD3vpwmrTRQmeQsI9sUPDfQ8rIk0sEn9Y6PtzQsiKdAz0lK0lcYHwBtHAoQQTcoGf9NrRQ97Nps0AycE%2BB9iBSOca695oAb2pu%2FOtTWfCWLoE0A3NAmgrOd99EKZxn2piieWdcqQ7%2FkPR4H3NWoIBTe3BXiksruSfMGRwO7g2i0oARC%2FAbMWE5z1hcOOs%2BvqcaktT6BimtKSyKfMs8pRPgOJhU3Fhp643Nw5321qOfTBh1k8yP%2Bsx0V%2BCJhsmlTgjyN6MaRxvOI%2FgYVAOOt79zVJB0V6%2FJpn18sgJeHx2bm5beKjCc7rTEBjqkATgG%2BbyoicIdrzsDUtJm3iKiiabUwcReD7HylCGlfRkZm8UX2bdRSQSOO%2B%2Fhg3p9%2FsXtUupM4J7xqwrbss7xFudRHusdis6l9sukPZkox%2F8AgSrkhBAOIR0wt81e2491vsLjXuaiMJS5iqgM99KzqP0gtYT1I%2BXUjXPKBbsAutDoAKi15A208vVyAdX%2B856w3GVN50kGR9kTI7MOZcWxZHiAuL0V&X-Amz-Signature=b4c02cee0dc6ea65468ac76b8077d348daf6b4afd14e8ffd8d5a032cb50ce0cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
