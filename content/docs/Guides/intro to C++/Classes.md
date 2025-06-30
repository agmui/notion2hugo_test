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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZASC7UGX%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T004631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFu%2Bq%2B2MQlVFs8kR81Ax9irWGV3WwNAEaASDo%2BD%2BnHbPAiBrmVNeFYHsBiL2oHRR0ePOVwAa4GIqoFJ0MnoUVht0dSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMitKAoJmCneDI%2F0JmKtwDyG7NYVpSLBbTGHAUQ1RV9Fyuv7s9Ou1xhTtfqAKT4XVfffpfqkh8EfgiLGKeqV8DAy59JTPK9bT6Ui2Xi3Ay0q85gxqKZOiNx4Vq4sGztRnhn8iO%2BVt9JCmdFESIFTgQL8EvaCgtIgGwh3U2Ob5xo4fsxwI5zJlc2%2Fo7BGCutybiAZ0JkteXiuLRLiAePjlE22xcYwb2dylhL3j2gglawYA3NY8EhCTGBiq1fQlNiAABU4EWR1%2Fnbj9EYwR9ExXpcxZSBBDHy7lCxPWxYN16gnicn64FpAohloblc73a1s9ZTTAzoGYccOS45VdVnhZ9v9sDZ4jQmcOWp1I0vk2zLgAxvnyKae2Wor3wV1X6fcGixMHi8X2D7sk2oTvQf0vdhrXtcq74mpkXG0Wh%2BRuNNilLF4zG3saJHeFws5r%2FgiJLWbwASffbkip%2FZ7fM9w%2FHnnZib%2F8EA1PS7xVxxApak4KFepyrKQNs4tkv%2FLCgA%2FERZfsFlbk1f5uw94GEys%2FkzZhA8BMwXkECvnLK7OqcNVXkWIzflJC%2FCwowMw77%2BNxvn3qQTWIgV%2FWMiuA9LztQVYw5OLaOsd9G6tAwbXVdFEGvMsOXdJWS4SdOlvvW54xOOGq%2FNrzT4OVYlFow%2F8yGwwY6pgEgMU5WgbwYM0S35ouCkx%2BO5QqD%2FmsD%2F4dwajYLBVaTRLWyeViGKcCIjC9m0DMKu9QFHocOivzfqSDEnS8ekvhgO0qBzhHCAsWmPnaTuWSEa0fujQ1%2B2BeR4MJ0jdkcH6t0MCIH0xnIx6Dr2wUDBFW46w0%2Fdx%2BaOyvcvyX7Mu2Bngishgs10FCaXHaoZS0206UnWIW4%2FIDKe%2FgdCIXRKQvi0LFYikca&X-Amz-Signature=9070263d2997390f1aac396ab8f0c192240b70b53435e0cc7d94626d432e54ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
