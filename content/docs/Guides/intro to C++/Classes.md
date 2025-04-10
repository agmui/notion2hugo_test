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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZTRH3UG%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIFJGKeNb2la%2BluaOvuGBdY78VHzxiJnG5ks%2FUyRw%2FmBuAiBeNKii9xThJzAmIlhLvdpOC9pEKoGqTsTlqyNQ%2FmCBjyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEFVeystSuBtOeoIQKtwD8%2Fu4yCzLZcKUivIC%2BAoZBsYDL3KbJPVyXaxXvrtnx9Wk%2BzPzUsLF9%2F8DpaOiTSQdCgIevB2ybIHZw2Crckplnnhjex5lsz7yZWIB%2FqBO4FhagPg4JmlctLmY7Nw6bK9%2FeQ08q5Syg782n2rVclZzDjXjSFrDLfsDk61ka6ts9LbXemulAupoj29yMvT8B3T6zXNrbRtDyM%2Bg52oQg9CGPwBUc%2BGgV0W5wU41vnld9y7aAVODWzol%2FvhqAV1v1CLSA4r2eah5MVTqL2eP4m27hG2TVgqsOdRiez6lDcJfqTPjmHE27PVQjaSDRiEmkTpLKIY%2FBE1DROOwOJFxVOHHWSfKAqRXL1nc%2FewaHNCXV3628gasNj9eEfncpl3RcVYPICJIwv1zIaU6z0jeliiV9RmJwv3%2BgOaKhNgBb%2B2h4ReM7iYL0EX%2BK7uS8xE9hNUJFqJUAgLomCZOIf3iPdcfhe1FuDeOC6Eui7JUDsbYun7m%2F55fNTMZEBoRk9VpyZ9kYkJgWsNUhTQLBWIXZSb5K2wWhOZvkRX2UZTQFVkjj1cMycmPaksIEhHgHl9%2BmcOhzQRdeEFLE%2F5bUBPHaU5w2kBqGrE4ZtGqkjNg4ibUMfnT1gG3YjR2EY7lb%2Bkwm7HgvwY6pgFKiIFgEtFwlj%2FXs37eonXzGrK5VGqaPO2q4zRYwFLXpqCJUBShoF6tlWpQ39QXupY3odnnB4e4BccTXUZV1Ab7bRKzt3A10037dRREDvQp3Lkabj61Tr0B4O23S4bxzX2JYtd6XV%2FtwnsztbSXCHgMzN7k8%2Bp3lbEuXQIxdSTuLZbJng5CeXYC8x2emt6UXQ9MuId47FZNyrvxlIYI6m4jTOaWNfuc&X-Amz-Signature=e6cfea55a94150673f7556cefafe241cbd2b98d7b7e17aeb552dc37611308be3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
