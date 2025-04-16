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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGRJ37DF%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6lvazdyT7xUm9qP6LE5%2BL4IKELIBkL3dv8%2BW4cCJIXAIgB8BSH7iTToIaEA1u5Keakg37P9jf2Kqkj68qMUb93rcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDFW95OIPg47FUms8IyrcA6vYRUzE%2BybnA1Ynh%2B9yDEpbChHf2QbCAA3E24nO%2BWxuNp2ZGS9f4JQNwZRp9kajZ7euMIbtjC895sPD%2F%2B6eHslFahjCq18rE76352X6mtV6MX1w2OocTiY3KTuxz3GrWOiJi4rlNTWIoF%2FLNm2RiEVpbJsKPPr8H4fxynRMPVOBrAp6swMIUn%2BeUqLcCHfD8nDpJ%2BNYmXBKCbQ%2Bfe7phoKD6NqsXQCVVHUqk1OqPrhTvl5Q7ifjmMi8wWanJl12KyH4I9m9pKULZZEB3uI2%2Fh2cVYdN59lV74874dfhWt9Px7GkeCDgfnSanTiLUUXumJFTVo0hV5jpTIS8%2BdlqQHozkD8c%2FKD5RgQC3Zo%2BoCGNce9kRzSKAzAJ%2BUripKk%2Fj%2BgmjPFkAJRHR0lcPyHFJH%2F2p2nt6chLk%2ByneahbPyvKtebc%2Bbjx1EBYU9Pc5IZvWkPx4HKnwq5eU%2BAiKB%2FBq54LLxU3DRNJaNiA8ASMCdhqsC18ieYNGIP6qpQ7hYYro%2F7ZU6hIS9svj5YHivl8R%2BUauwbtqtFp21Yb%2F%2BIgwj9kKpvvTa9dS4qyyTw8S6l2rcPLtOx09uj9Am7SHBre1R6Z7yyNdkRNZ9xQdrfHrpBLoszR9JVziluGl3UgMO2r%2Fr8GOqUBaZvvOq0KZf%2Fzx5g%2BYv8AmHmaFRJcQAPSqhNKxDutvZHl2yLWqfcS8%2B2tXnuKoEmkkkPywzeztEQcV4ezKekGYwuy%2BCVvC7r0TPZxk4PaZSwDMLXRhvph5zLsS8Vky%2FjyuikCPCqjBt6KpJBWhp9FreLu8PuU6xObd5jnjs%2F3G6NZCHKE8t3MD7mXjpr66suqNW8mhXgpkX08wfd5Jr6KxZK16U6F&X-Amz-Signature=4e210af3b39078c77b613e2942d4d6f6ff4996435b76c3c70bf76fe1333658b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
