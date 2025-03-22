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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJPWFPRO%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIC%2FNUatwa%2BrwPVyS3I3VzOa9O2rtvZdDcuIxzU0V16KBAiBbOqjZRWWMuiBRR90uEuV8z7exilYi%2FFewM%2BYsRITuuiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BX3BhVvX43NGZ9FMKtwDOkSVp41GxBOqNA1NYbRChNtjeKsydHWEh3ARfqZ5gfxzVe0lJf5znp%2Fpgo58EaOiuDSAdnxFz82X68OSuX8v9pyXp8rrNWG4JiOgHuiAuKhtryNzCWusyCYjb4MF6VqUoBzfAVi1%2BcMsxlgSqeFscmBsszvLFrb9FYLYDhHOqsTLcjpKd6Cuz7weruNxvJEcW2AI4eqwRmDn5WSMHA9PuVn%2Fk4eqj80Kwte44Ap1h98I4sGcYP4nW6dr2iRDDe8RpFRLrWrtdPoirg0KIK70DsIfZEWPBuaVtrdYxXKK3e6wU2H6QpveDiIoA9AtcxcxLbBPt2KT3tSHG9AIxx4%2Fl%2BYC8jOhUhYNi3qUTPoRqIrJVP1nmD6duq%2FlMOiASIZ%2BAHiZjWzQMqUthasIDlwisLLvrDLMdlAsSChGa5mIRN24JK%2FBlP6p1onpg%2FR0FcxVMm1Lr2f%2Bn6AKoVTzRoBTE7l%2FcnQ9SVsrebHp70z%2F9BJ2TbiPEVz82guHF3T555vUp2mmyf8m8KSKXvBHQsoiYkjwcaVV1x%2BaVSbP32Zdu7IIqnVXB4zku9n5JUmz9pMk%2B81iQy2DtT3eOOq4v5TkUWaQDexyy58ZVherYQuze3SxfgAim%2Fx5VpD6Arkw9K36vgY6pgHsHphCKTpldREXXqYiqx3YUA%2FOYqD23fII4qy5%2FWEAlJEoEWFlPORv6%2Fe4lAX%2Fd9MMNv9xcWk6lbh4%2BwPKP3mVqSlGhSXEfgVY7LGR6A%2FGlldUoEReqZTws%2FhFIkC0YlHDhg2kLBkSGjzeHO%2Ff4hSukLHEHDxaI%2Bpjl0wFoXuCavy2Y%2FMvWePlPZOieOStXmHZ6cgslvkNfiyG3NfFm0ApKs%2F1M2bZ&X-Amz-Signature=7ba4970a582442b312af64087dbbd1da5237b62f9eb180a5679332840b18fc7e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
