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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIXQC6KJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FDFx6s%2FPppH5VfD3670zdaJHWmQn%2F1ytNK7TvOumbOgIhAOLHx1yuWs3IDWWznojgXCzT0Liw6CmNvJi4KWcDqpuPKv8DCC8QABoMNjM3NDIzMTgzODA1IgyngU65FAJ8O4PgpBwq3AOnMCzyWOpMUcgvaQD1jXKQbrB91C7yHqRcQDBjRm%2BKflObeAGTxoAZ%2BCObPd1h8533eh9O1y%2BuCg0wmTXsxGgpU8d8DleLjK7FMcTStk9MfXAm3X6jJPCUjGaKdpOQLUQ2Wh8fUiq1qDrBWY9VxgNep9UOHzME5m5uJrBskIgW3aDctAgMJMEFD%2FdQd55blo%2Bu%2BaNoQ4%2BP%2Bz93CCgy8ia5e%2FGgRlKoZPLR%2FcnqUIswsI0pbkVzvE4ejkW3kut29vVvC3KR2C6cs%2BsIGCIglBzeXPJCFq9DkjPAraYc%2FkcDDyGq%2BdGNRpCDrA4%2BLa39QAloiySEHo%2BW3MkyxGBW1NHDXOAdM9z%2BgCuZ0TnGHXFCxnngK73zrm1ovHLUwz%2BifSmwK1RjqHBVCn2y7Zcn%2B%2FAa55yI7L3tPXuM4zWPPF2thYS%2BuWs3EsbYN4A6zO2TSVfr6Bkmsx3HUMTjdqFjR%2B%2FAVBOmVxnQ75AxQ0M4gsO2BWKACMpyinhPLqXtDHefl9CM%2BchM8TLAlU9WH7sIZZd7EaK%2FggKVC%2FBzupkFh0feb7zcf5U1DcxShifVfr0PcmVND9b2OehzIdMjhYi9CAt%2B%2F8e0gnIY%2Fys66hFw4QGAkO64%2BLgoCvEzebctSjCftK7ABjqkAX%2BNU6GSEIHt7rUsUM0NMJ53Kcch9Gje43fpA6QJ%2Bu4gzIyLp2TCJDX%2BNMiXDR3Ev2qDIQYjboEWlruaOtnyi66p07oLtNgWXtImzufrc3nW4Can2Fie6odEDDvBImYHZfYVWos7lAWd7AgP2c2mHHukkAf8T1BDiN%2B%2Bf6J2NZff60cHbJo%2FCZSK83N7vgibzn43ItCVNgT1LYr4qYUE3voOPZIJ&X-Amz-Signature=62ed368282f02a36dae96c5f34ce1b9089c1ea9b66a26ed5d16c714a406437c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
