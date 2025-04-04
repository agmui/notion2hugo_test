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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU62WIRP%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbKM%2BKB0g%2FyMd0F4odms1YqHyvncjOYKMM%2BMyEJ7YcxAiEArSA%2F3pWDjtz6VflsjL8k5njydpDgu7Xj8hbT2bR2arYq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDNBrlMLJvuxKlbWVKSrcAxNxfo0NtFhc2jXSL9UPwL%2BkAOeY1gvVZnBFQNDrHmxsWkQvK1EoekSd9XxHBbtF0fPn%2F9rN%2FAy7VdHKmrVaBsf3cHwTuk9GlmbhS6CKs%2BdBqzXvnJkZsloWfVNfrb4QJMhejsNwdt0BXiaP%2F2C5hd%2B1%2BUwLPqCBEd36Rkt1wA%2Be3FY7LbmmJ4vM0D60N0B9YPhl6bzIb9CsEuIIVqgJl4aMEYCmbGDFtWp6y0ZCMm4xGoTvutj7CvdAv%2FQjOdwozHrViJXcotON3dL10dr8KJRfrK2Voebd%2F5hvfBDyWd%2BZBX7qbQN58EgkfsuVc1Y1QRuuAOwnl5WhxzfV3mwO%2BPF1LE%2FS1Ck0zLIGBLBOO8%2FaF%2FQ%2BhdaFp8%2B%2FtRAu%2BTbqBnkSVfBTlvmSm2Klr5QIKfd%2BZo1ip50skargCjAt0BpM6t1KWtoDBK3oxkiLWostQp03jNBigtGHugzcSIfJm7Q6oZ9%2Fa96Q9BJekL0MiArAQHYtxEBvaXQorfmTPD489cobn4ZHuuMRR9yR64NXpOjpW9dIxhPG5YA%2Big6IqhXBY6gSEUvRE5fNYxxRuClN26tLDkTAUUwu39wPv4pkiowbZEZ9vNs3AzdcSC1Hr5UzpVwYkNKtTfQRbZSlMLudwL8GOqUBk%2Blb2Sm%2B5iw5QC4Gw3zzROBBTeVtcozur9JmXSr0jiW0rPlx3ZesvChOzTYD4US%2FkCqtKbTccxVKm4xQS0UBW4MhSAchz0DciKwG5JZ1rkOXt%2Bcbp2lVVSrF%2FVWp3MBSjm%2BIK7zQs5MN71FA5bvKlumsSn5Nce2rK9nlZ3rg99NZfX8GZ6j43eeLR4xnL5p9HgN4kaDilGeR2owww7k5Jv5IwPpc&X-Amz-Signature=bd8a098e1a025b83e92ae3d6b0d6cff5cbe7e4e06481073be75b79d2e50a9a72&X-Amz-SignedHeaders=host&x-id=GetObject)

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
