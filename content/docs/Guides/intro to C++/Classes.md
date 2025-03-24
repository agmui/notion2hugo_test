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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLVAUKR3%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BXQS6B1oqpDR97JLvFu0dXgYsuVR0Y2PdKLseP5r4UQIgL07kv%2BNYwTVtheTEFbPf4gUWaFOMtA1U3A3tmEL7VNQqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE4JyAp%2B6UJq%2FAouCCrcAxLIthis%2BchmDHDlvYfkMkV0EsSks%2F%2FC0ePIGAvjKMugDaijoeD4ptO7qb0Ak6kYtddxesT80wRPEdnHJlF%2F0eLJYh4DKv%2BM4KVeqz3Spus%2Fq2FOlgZBKQCZ9NsevRoqhapJrpDiLYn1IQE6kwdAfBcSv9WX7JzAyJD05HgJJjrtMxfsDx6u9WiehvaSpTaOQ%2FQMlkKnH7uk4tbvfbnw1TgwF5dOUA1IdZVDk1XwA6uf6p2eiz0b1Od2meEI%2B9PzM6%2FJpZCLfx0DTzz1ZWoilzxy8BQQt2VYQI7JiB4Qrl69dai3%2BfmIHfiZmr9dr6CHECgpjicKCMJs0%2BxiyvKhfK9S3y9ErdOhgz68kY1lLkJSvhdlF40yzLQldpfGR%2FptC9nS3iimiQEAN9fDnvizhqVa1HxJSg9gdHZTHYOU0WQkHs1UkwaN2l1eHZNa6jaWEIJ%2Fdx0ypRr8CqXR4D6QXL9A02s2L4%2FyVFvkrjris6s6m6cblhIW2E8Dp5h9EKE6Oy0GXMDHI0tnC2wqfCHIUwfwKEQuDlT3xI6ZpI%2FE7n6tjZIfyiyZZB6LbhhnxzWZ1%2Ffqx%2BflRM36y1o2ixZbTM%2Bw%2Fje1iS8Twhuh8hXWqS50VYyOQ%2Fr7%2Bydyqz0sMMr9hb8GOqUBrgKBTTw0sv9oWizwpZCVkDGCEhaPF%2FE1Udrw%2FC7dMdeSm3UbVLDLW3qxxcTCkTVVbWzS5ibNDZyJ3zn0NZV5wyghCtUWJJJIBJjUKozK%2F1cfrs3B%2FavjdW8X%2BF00xJKX2OZURPsZ8wocDweuA6HdK38n2sAysmqHRKeVeoXD3dMoNBdJ%2FOrTCvf1n%2FMmzw4hhgybyJayl%2FnENVvX4ySUPPLYOhK%2F&X-Amz-Signature=c059d30f5325da7f1ee1ce88b5d8924779e029abf295b94c4df41ce0e794473c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
