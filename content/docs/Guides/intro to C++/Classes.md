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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNZRZR2H%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBtTkPQcUjgU%2FrN8%2FZXwMmdQ5XJA1hZwrUKarxz%2Bw2coAiBYSeJaxXECsBUemBsaMYxAoZJTU3qZNNq7n00soAeoPyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjeFITG2gIdPU%2FCWNKtwDTQgZb1I8eFBO0ZRq3X2On0joNIlY%2FhkOlfShoDdSXI763OmeGRinqeu91pATsit9EKSkt92ZoxMFWC9dF8ae03gXd%2FWdLazbqf%2F6kctawY18Q61d4iCLnFBk%2F%2B3tdpiBGQnSbusrCrXqlc3X66UqYX7kklc1BCQZn5ZGnTHVprIHGQ3aoBeC8mR%2BF8CTdVJmq0jkbj4MeaXwzlktFyqWkee2RufJjTYoR8oYw24xrMEXxsmDJV6nTfQ6r6rwxdFs%2BXeLvh0cMNqWGJyNKsOQlm1wc%2FDfWtut5BTCFA1fcy%2Bsvp1Apa5WTwrbf57xaIngSbHA%2FKzxxsqVmLC2KKgpPpELfPZts2anoUOn893WAoY28ypismSp%2FAVBWr8NgCUeRjfGn8llLVMHtXpkanZ6Kmgev1a4SJCnvcfOagwPr3R3kxJYnu73173B9fOxqp9B3ZLxdDhbGCHdIqSzzKXs%2BfSlvApyq0nJ%2B3chsNhlNW7PgwcMUWpogJ2DXFYeLNwduZ7gY05RaBpB96PlcAk2oZ01aPP4EoZ0o1j%2BfEx8WQXWu7gNMv%2B0giYpiY4hpdVmsWzr9s%2B69q9aet7c8B%2F0kMmnk4ZfRSYJ2%2FoMlL5s07KqkhMLH%2F1Fj6OUhiEw65nqwwY6pgFz%2FjMdyMKqXV5itu%2B3uSNVchbQynlpPPTiPP%2FtYix%2FS4qGgDXylAsHhI3LlrIdCxrfod3s32iQjvHBvOFzPc2VYRzpb%2FTwM0miG5CMrpA3uK8ApE%2BjsKmUCCdK%2FWtehvgM6jSZE6H94Q56ai3WPC4zJKkrBXEcFA4h%2FFFYw5O%2BY5hrtv3vzxK9%2Fn2ZuMoegr09MbtOL0VpSIoJ5%2FwqJjyAbtk%2BInPs&X-Amz-Signature=50c122ee4ffd31f1f23260b50911aa2fa71c9bbbe0719b5bac5ad136c00bb98a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
