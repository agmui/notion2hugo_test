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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSVJNC2O%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIFXu98n%2BzclAfpJn40zj9wAdFXYYM8BHpk9t5%2BiNkq5dAiApsvh9PQ%2BNXvi%2BShP0AN4PilcIQsMzinwYi%2BEhRJaKAiqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqlD%2B4ATZAQppWDVyKtwDshS3%2BatjtbZzT%2FbbwInsLNsitaBIzdnWa46IhtZxstP9jCSTpEm0nL1P92DL%2FErxCZJm6TdWMAY3O8z2%2BzClc9wB7SJmVWm6LMv8Don828V%2BvKV9sU4u7kyvmJPJHj9Tv8FXnz7Ik9KS%2F%2BVqM3TbHhJQUAndkk%2Fdbp6JSq0inwABAWyDEmJJUAR6%2FWLgKEAyXJeNbXbrLdg3qSBcyuozdtPWkCY%2BfD%2BEGbcUYJyujCaSkeTzEQB2KuVhYWvK8QP30CCiVqTwfD8X808evXVBeXYB31EuV5x0lk90Vzn2IhKIz%2BPCBT%2FCADqmFUncDlR5bv%2FF5kFZgixD9NuvGPHwELAJDhRSNBOHAOHEeGwBe9P9C8%2BwHah4bI2L%2BXpFi1xM6x9lgwcY%2Fr9QB2n9GFnXA169TXWxCYbirXd9UZx47cOAjKtnIqxKrljQgwsfYDDhAg1KFzkL0jKrRgXM4jGz23qmaN9RX1LIhej6STPr2b%2B8wA8rsp6S87QbV0%2B6mGMOXBtN5l024omJAA9SZMTj%2BzpCpP2hP%2BCFReln2%2BedpYsVS2DgNoMltdwLTjeLwpJR6A36seiHCKCIZMMTED7Bidsc5EhI9%2BCep%2BRizjnEQpEzjJzjy9lshwJ%2Bhq0wuYmqwgY6pgGQr2ZxJVTtbKTY4mSBKwEYQNBEeLwOcSuaxjoGyCINhuSEL%2FhANysupXVvfhzjHIe6X29TrI9LJ0qZQFXMV%2B8GV6GRd5VRj9oUIrsNPUH8%2B3etz8f9H%2FedRmb2oWfIDsQxZ42%2Fp1Oqmk4kTWuZwGT3LHesyVK33ab%2F6S%2ByAfuaeaIqIx5s11o9aTjrBg7qwMQxNO5VDyFUXjYj7ZN%2B7qQVcJRxsCm2&X-Amz-Signature=aa8e7e50dde65dda6127ecb223068b03eb34c3658ddd786caf68dd6813edf26b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
