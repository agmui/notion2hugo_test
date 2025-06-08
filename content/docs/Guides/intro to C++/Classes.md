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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOCFAHMG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T081029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcDBoHTWQ6x79cmycj62bL%2BCjcOjN3hEnuDL6Yo%2FcUeQIhAKKqOZBuQRNWrJUNgrg9NsGWeJJZVJWcLq3jqcPJFI5HKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8FdHhFt26h93IohMq3APzrmYPpjMUcraCnYC%2BdFrDI1IGcVvVaglvmmzR6iiOACxVO0QZjHKwDk7nUGq3%2F3zcL7WqJ1ElfU%2Bh6ggS1eHu%2BZxfmYzzwr0a86VqIdlMBRXxdGTd5ttAgnUZqfQuJj5ZW7DCYsAcnKQaP5dDO6uK7Laq6%2FfDh9c7q45Ei%2FTaanRzCMceHoYcGkjJ0WwhrggGH5MuSiBbTfbEn%2BHx5hTBybCR4LFOgC3XDvMZTmf4OYg24KCIrihtDMw%2FNSWiT4JxUGYsFi%2F%2B0uefy75ggJgY6UMji9qL%2FKYraZpiwgtGZoJLKA84JVHIkWnY16IDarqNMCeCRE4POU%2FpsBj2mzRmv49hBXHs4My1KykiRopgu5hiqApeOiPw7oj4N2RSJdgcy2C1cvdlmwOt2Lv%2BneuGSmbVt2kQz1TXjoADmdOTHqJoPf%2BBmPAxUDzlMgJRxg6YarorAWMPVzo%2FMJ8Xy0ExtmCytRRjzX3gATbXRVZ3a0T8vWY3riklMc1XboJnOFdO67U%2F9jjJq77HTgHhAe9P2%2B5DlHxNKyFppfsjs%2Bpq8%2FgZMlmPnaMVF0t5EqK7GlLPlVLpprDLBMxclZgnONV1vISH9XCdIvtyBlUxewx%2BLWuxrWjykMKDxaBTTzDw%2B5TCBjqkAfPF0Z%2BkkZhdIsw%2Fnq4Br1Bx3e5pzezV8iScv2IUysMLXqND7qDefoLFzSW%2Fh2nMHB%2FwxhbbyWv6C9tIZnpm8t4HWRnMVX8cVvnG%2B0nnSudqG9QdxXQ0DWU3bqj%2Bkk%2B%2FI%2FADw5eXSe46hwoEVJSY4rUPoXZKRJ%2Bl19yklKpwXedcSejgtIzHSj3Lgcu3%2BMjZgB35LMOwzJavn6Gobmkp5QPk1uZS&X-Amz-Signature=e71c1928509b537345c82b3a3e4bd7794f64bffe8214cc1e8fe63e45e543a3b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
