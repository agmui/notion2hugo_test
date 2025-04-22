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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUT4IKL7%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDmIbHaMfHZs%2FiSgcN9YgDFmu1SYLpr6H%2FAnRnNhTWi4gIgNvTM%2FSbI%2Fs1WSFR6Knk78djLLPj5UThppy58zzI8CNQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPgSiS8i8EGszV92fSrcAwrKpK8GFJ2b3iMyjGU370s%2FrH5YIgbHHracOBIgMCheBdZosuTkAFFNOu%2Ft2Qdu2vhswMOHFn5DjdMHYjux9Fi4Y%2BfliityFptpgOrOm%2Bw9BmEu3%2BFY9SuAZ5wYmpqynXGC1vL0lIDhosgU4atMVCbQDnFYbURE6L9ywpXzkJgphbA5cayHBU9Kh8YEPgFgn1CWQH6KGa1yEgAcI%2FOzpWrVWcQlQ9ikDFqTkIQ%2BqEitop9cpNACvlqkDR%2FklyntrkjdNL7uBJ9wqery4J6NkjdIaIjgGW5S6YyP7heSXDgN7uFjxCJWLL%2BJS21ShqUsZXRTAEblwwxKmFNNrGTMbgfR%2F7kZHKwJxX6MWRv1UktCetiQwBEVX4yYvDlB8JdKhkRLhx3G1M4R4VfIWrXxOm%2FGEj13yFLmXu1Kect8w3cYZi6adTJ%2BOXQMGAQ6H8lZd9eek9dZqhEaDg0yPQwzkdr9d3Imx%2B3UL%2FG1%2BFvAGY91kJA1am%2FL8prtsxT1iW6Cqb0wWzW9an1YH4ayl3VjEXuLgHg4D%2FaWE4%2B6hv%2BJvM0SquDgqiwwYAe3Qv7%2FadhdAZScJ1aZZn9y9sitymSADyrIwAZSraHcJknKAkU%2BzLrPCbXNMJ1Pp%2Bdgu7suMPPfnsAGOqUBAavB6P3V2mW1NL%2Fw9oS239IRiIfPzB8XLiT0O4blza4mCAK6GlpGCsCDQkf%2FWVUPCUfTUXO2LWEzMey4ywqKVn4mDq%2FbtcaJeYtkkTb4pouer%2FKteOailRCspFNZzQ6zLXKef8PJ9u0YkLRfQkTOjvgZGPnn%2Bxdp8FfnMcRFN%2B%2BkV0gKav%2FixVsAPKS9LzyvGnzdLFsCEl16NLhWhkmwq%2BtnHgMy&X-Amz-Signature=4059748bb4b5916b0452865a02723766b2b61135f8033e2122739a5c68aeb6a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
