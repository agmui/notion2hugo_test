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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZVXG2A%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDVidxxSwOgzAjoh%2Fpt1W%2BQbI%2BvtWa%2B1j3kkTWoS9mWewIhAIuv9JyRaHGMfMxBBrhwE4GoBhd3xMj97VV4%2BmblSA7OKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWOkpu4Gz9oqKqFAsq3ANpq3nGF8YOvcys2HD8TB2wiE2A4ZvELmSBMtTI1cl8WGO%2B3Lf4nU3pPXYzroYT9ZkThiL5qJEyXAVoHjNFZwu%2BVs%2F%2BbFN6XzF9oehn%2Fxcydq55L1ODE3dHtL%2BNIbaQDX%2FQEp%2FJC14D3YhLmEARVFVYUudJ2%2B1F3J2Ldj5EKtn8xa1HbqGO%2BodNllCFzWifvQxojOsOYQEMWuNtZgjjHG8IFBrG8vmQLRBf0NOkxmWw%2BHW5VtJbirMXOxFVgsydvSM0FZR1Zeh8VAR1IEqT0WNON7cL6F6xUl1TggfYVaOD0VH9ICknPTJDXiv5ZHQKZoJHvlUo3BLVqUplYjb6k3O2Pq8bgMOtQRtKMIKw3sCBSD%2FIhIZH0JFRwYrJomtBuDTedUrGzzKBw3CU6PM1T5Ks%2BqSMluoxD9R%2F%2FQir43izY02hKp7GYBGzEbOng%2BNJbySkSQ5bGaepZqC8CdVsK44vsTAPL%2F3EZQpmaBSjWxOgkqV6FqvzHwYTsWFdlDvam%2FdjqC869%2BOP8Tl1c%2FcZ6sr14TKkDggJRhe8bCJ2h9A%2F1W8SzjEA8ZefWnMzHt5UuEu89xt6e%2BdSCbM6XowsgbKtRcq7dS5mCs7yehJU7PdGEQ8Ye7md%2F4PYyxOBnjD0887ABjqkAR0Kg7J9LPV5ibW2CJaPs0Z4n6yOo2oQiIHiGu7SvlVfrZMxm1Ormo3YjOkNs1tqembZdiThRhbYSbG6bKYH7WJ6FQkXw0w2If%2BXY5S%2BCrprwv22%2Fs%2F7o07PRZJD0k9cQZ2MTjFmSIinAFyL%2BwesecmNpuGas6T5hNkEvx92SJzdFAolz1FBnzqVMiwDqFWFnWPuxQ2K8fBri0seHQZwJixavLx0&X-Amz-Signature=0cbdd4f87ac3c1ade5ba7b3f4c02495668a677af0b396e45d5907e7761ca90c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
