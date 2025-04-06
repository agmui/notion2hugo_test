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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T2LM7NX%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDs%2BbAkLLXfXyxchDahXdAKKyiDn6VfcyegpsqXt2KXHAiAbiJMLSea8JfsdctGaIvYTSLVnk4NETxMeUyXo1sSzPSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMsDNnA4n8LnuPSYYUKtwDZKFPPw6CbArkyTOnctoFvaZu34Ja26gk0m1RlfRIzrrwqXqeAWIYS9by2%2BQwE6jKT52EAw%2FWGhHR6PYJi6lm0a3XVhD3WLmJ3YQTmDgJfLQ099rtqW05JZM6PRlZng9MJiel3oPGTMiDXQw2WkcfFKdBiD32Iij%2BMul9oUq9%2B94qbGDUI6SWZew44O14w80Hrs8c6%2Bw%2B73K8aXnsdbWx7gAc3VAOnontsJ2DIUxaWlEKgjgLw1HdecHp2VXjPtIo7R2jdatp3H%2Bbpo38KU3MQBVYvt6S4QLbKdlTtnijuW%2Bmz68eZaA%2FN%2F9rBm3xtuqqk2Swovs%2BE1%2BHJYfrfAu4Hmer6CKhq38YR3ePRZqMXWF%2BgPdYHcAz9cZNL0Uh095MC9sM740kFkE%2BnOMSGgDUxRej%2FGJ1RTEuk1upCulHek1RMJ7JvUVenz96wlbn5sfQiHpbyJ8LTjcU5%2B9DAHB8sPEmSUy4vpqF%2BOraPnq1PrvYz91CLbNagobUTrs%2F3Qcm3rukXlz%2BFZNrnsS8vq3rhgqp%2BVHCdP50kRGau2GSfHRmJVH%2FoUNZ2L2MXHMns4MyU%2FGECfyVKA0ilMQBt6ePPW4cFeo8L5NBNs7spGnYIY2NQ5DBDWygn4CBd8Aw4P%2FHvwY6pgFZuunAYSLBXHAr6aJqpLRLbOuZ4q1VyWXZGaWZeyvIjR1lN7Z5pn8J4Fsemlq%2BS1X1OvhsS7auF7wlM37K1wjQCPzH0EVOsAG7werepDYuKWYI9qI1vM7w2DfzfwByPJu0hj%2BXJca4dvxR9jryItMwnoCU5ACfibAsiL2cSvNrUsyJp58Fd%2BtyQwl044PYutxqZxGohlZOT%2FIqP9ZCJnSBp2mWg8Ss&X-Amz-Signature=50fb52ca98f3e8c1ec169de747f3f7d2a42f5ee52b830e42c2e44a4c0d987263&X-Amz-SignedHeaders=host&x-id=GetObject)

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
