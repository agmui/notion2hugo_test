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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BV7WUZJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwfQuMIf%2FlCpV%2BEJPfSYcJD6dblOwvWw1CEycWJ77I9AiEA3MioWxWpj6voG9fT9Cl4ClxU1UvD0VCz52UXJh778hsqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVzvzW63hRMr11l4ircAyRw6l449Cc3vxGtT4tBG5ouW71uITV%2ByJV30t61ehyPTmanQhjMkZGO%2BlftF1jrqPHQW2mLd%2FLykSmB5QReN1VO0Aps9VWUxoe5dFs1NCrudgwYn1yJmixZwNm9Ms7CwP6NreSFRTVtFUkJ7TadqAJLeSt2s6IcIuEE3PhBWtZskKZtUfq%2F3UdKbSMHgvyiJ8JSvaf6MeCcNiSrFRhxlh8CTwU7BL5Jp7boT0Sgu1yXHN%2FRiWWfX%2BnL5b10vzNUK1DdUIghAuF00U9b%2Fd5JwGu2dDKPHErfYg3dUI4bFFOo1v3I5LEKXp3z5QaLlbxiEUC4HxF7yVAtaVLzpoDQoIZjpKxWoTT4G4SZ1ehQqdZw92g7Pon%2BaEK3w%2BvhMB51NM4Wn%2BLOFLtz%2BzXzaVZ%2FaEHirfdk4v9zUu9KInuC0%2B3XGP9uoPCXNTngHeqHRXtjBBvhDeG6Mo6kBO27YXNSXeJ3xsmdsHCiQMGm8%2BeTQx1%2FvG4Idqs9U%2BMY%2F5rtuGF15MMJZHFvqwrCyJQ5ifWwLiCIN3NOft1RdFEPOKT3iSqCwgGUEHwq0UbTPg81%2BH96GPWJtMmQMsluvhddNpEHb2H9oxYgCec%2Bb3Au6ba0ZmwQS61FkDp4ScK7pUM3MNfKgb8GOqUB2ptDFV7aqVSzpShzgs3G9OQqO5swtx16sKO61ZVnyED9rRNze84JETr6jine9nzEVmRZJsJ1g56QDpCvlJ27VrhQFqytOUbRZM7tCTQ5jvQXE1BuL5DOISPQmrSZ4g7WzlB7mVhZyXaYjZVqs%2FygLfwt6wRZQTHkRheKiYauPrYMHL64Lwkb5KDgVZuaN347JHJUrG%2F85rv1liHVfXt1ZjbQqOW0&X-Amz-Signature=2de6b5c92a400a59ed438aa54b0efa9ec30f24a1b163d82627aaf08ea45f3cb3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
